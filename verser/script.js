/*
 * Helpers
 * */
const baseURL = "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv";
const getApiUrl = ({ book, chapter }) => {
  return `${baseURL}/books/${book.toLowerCase()}/chapters/${chapter}.json`;
};

function iRange(start, end) {
  let range = [start];

  if (end <= start) return range;

  for (let i = start + 1; i <= end; i++) {
    range.push(i);
  }

  return range;
}

const regex =
  /(?<book>\d*[a-z]+)(?<chapter>\d+):?(?<verseStart>\d+)?-?(?<verseEnd>\d+)?/;

function parseQuery(_rawQuery) {
  const rawQuery = _rawQuery.replaceAll(/\s/g, "").toLowerCase();
  const groups = regex.exec(rawQuery)?.groups;

  if (!groups) return { isValid: false };

  const start = groups.verseStart ? Number(groups.verseStart) : 0;
  const end = groups.verseEnd ? Number(groups.verseEnd) : 0;

  return {
    isValid: true,
    book: groups.book,
    chapter: groups.chapter,
    verses: start > 0 ? iRange(start, end) : undefined,
  };
}

/*
 * UI Rendering
 * */
const results = document.getElementById("results");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

function renderVerses(verses) {
  const container = document.createElement("dl");
  const title = document.createElement("dt");
  title.innerText = `${verses[0].book} ${verses[0].chapter}`;

  const lines = verses.map(({ verse, text }) => {
    const line = document.createElement("dd");
    line.innerText = text;
    line.style.counterSet = `verse ${verse}`;
    return line;
  });

  container.append(...[title, ...lines]);
  results.innerHTML = "";
  results.append(container);
}

function renderStatusMessage(status) {
  results.innerHTML = "";
  const message = document.createElement("p");
  message.innerText = status;
  results.append(message);
}

async function search() {
  const rawQuery = searchInput.value.trim();
  const { isValid, book, chapter, verses } = parseQuery(rawQuery);

  if (!isValid) {
    if (rawQuery.length) {
      renderStatusMessage(`No results found for: ${rawQuery}`);
    }

    return;
  }

  renderStatusMessage(`Loading...`);

  try {
    const response = await fetch(getApiUrl({ book, chapter })).then((res) =>
      res.json(),
    );
    const filtered = verses
      ? response.data.filter((d) => verses.includes(Number(d.verse)))
      : response.data;
    renderVerses(filtered);
  } catch (err) {
    console.error(err);
    renderStatusMessage("The request to the server failed");
  }
}

function handleClick() {
  search();
}

searchButton.addEventListener("click", handleClick);

function handleKeydown(e) {
  if (e.key === "Enter") {
    search();
  }
}

searchInput.addEventListener("keydown", handleKeydown);
