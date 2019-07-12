import { element } from './renga.min.js'

const { div, a, h3, hr, p, fragment } = element

function InfoLink({text, url}) {
  return a({href: url, class: 'info-link', target: '_blank'}, text)
}

function Project({name, details, imageName, url }) {
  return (
    div({class: 'project'}, [
      div({class: `project-image ${imageName}`},
        a({
          href: url,
          target: '_blank',
          style: {width: '100%', height: '100%', display: 'inline-block'}
        })
      ),
      div({class: 'project-title'}, [h3(name), hr({class: 'underbar'})]),
      div({class: 'project-details'}, p(details))
    ])
  )
}

const PROJECTS = [
  {
    name: 'Project Palette',
    url: 'https://project-palette.com/',
    imageName: 'project-palette',
    details: ['When I began working through creating a design system for a legacy codebase I found the number one pain point was identifying all the colors used throughout the application. Project Palette is an auditing tool that will scrape a given repository and generate a clean, digestible UI which lays out all the colors used in the project with direct links to the lines where they are used. You can find more details about Project Palette on ', InfoLink({text: 'GitHub', url: 'https://github.com/l4nk332/Project-Palette'}), '.']
  },
  {
    name: 'Abstract Cityscape 3D',
    url: 'http://ianjabour.com/abstract_cityscape_3D/',
    imageName: 'abstract-cityscape',
    details: ['This is a 3D model of a cityscape that renders in the browser. Utilizing the Three.js library along with the HTML5 Audio API, I was able to bring the scene to life with lights and sound. The city is generated 100% procedurally, each building slightly unique in both shape and size. Through the analysis of audio waveforms I was able to animate the lights in the scene to reflect the average frequency range. This project allowed me to blend my experiences working in film production with my skill-set as a software developer. Feel free to ', InfoLink({url:"https://www.youtube.com/watch?v=lBkKHbZ8SkQ", text: 'watch my presentation'}) , ' of this project for more details.']
  },
  {
    name: 'Chess AI',
    url: 'https://github.com/jameslim1021/Chess-AI',
    imageName: 'chess-ai',
    details: ['This project focuses on computer science concepts such as data structures and algorithms. Through utilization of a decision tree the AI can generate the all possible permutations of a chessboard 3 moves into the future. Algorithms implemented in this project include depth first search, minimax, and alpha-beta pruning. This in conjunction with heuristics such as material, number of possible legal moves with emphasis on center squares, check/checkmate status, and pawn structure allow the AI to make the best possible move. ', InfoLink({url:"https://www.youtube.com/watch?v=uA0QOQDDKMw", text: 'Check out this video'}), ' Galvanize made on my team and the Chess-AI project.']
  },
  {
    name: 'Computer Tennis',
    url: 'https://github.com/l4nk332/computer-tennis',
    imageName: 'computer-tennis',
    details: 'Computer Tennis is an in-browser game that implements the HTML Canvas API to recreate and add a variety of features to the classic game Pong. As you rally back and forth the velocity of the ball will increase with each collision. When you lose a rally your paddle gets smaller by a fixed percentage, and if you win the rally your paddle will increase by half of that fixed percentage (unless at original paddle size).'
  },
  {
    name: 'Code-Guild',
    url: 'https://github.com/l4nk332/Code-Guild',
    imageName: 'code-guild',
    details: 'Code-Guild is a web-platform that connects developers from around the globe in a live coding environment. The platform enables programmers to both teach the languages they are proficient in, while learning the languages that interest them. Code review sessions allow developers to get a second opinion on a module of code within the shared workspace of the application. Technologies implemented include Express, PostgreSQL, Socket.io, and WebRTC.'
  },
  {
    name: 'HeartCaller',
    url: 'https://github.com/jameslim1021/HeartCaller',
    imageName: 'heart-caller',
    details: "This hackathon winning submission utilizes iHeart Radio's API along with Socket.io in order to reimplement and redesign the User Experience of listening to radio online. Tearing down the invisible walls between radio hosts and their listeners, HeartCaller allows hosts and djs to directly take song request from their listeners through a live socket connection. Using Node's Express framework routes were set up to handle the logic that tied a host's socket directly to each listener. With nothing more than css flexbox, the layout was handcrafted into a responsive, mobile-first design."
  },
]


window.addEventListener('DOMContentLoaded', event => {
  const section = document.querySelector('.project-section')
  section.innerHTML = ''
  section.appendChild(fragment(PROJECTS.map(Project)))
})
