import { InfoLink } from './components.js'

export const SHOWCASES = {
  projects: [
    {
      name: 'Project Palette',
      url: 'https://project-palette.com/',
      imageStyles: {
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/img/showcases/project_palette.png")'
      },
      details: ['When I began working through creating a design system for a legacy codebase I found the number one pain point was identifying all the colors used throughout the application. Project Palette is an auditing tool that will scrape a given repository and generate a clean, digestible UI which lays out all the colors used in the project with direct links to the lines where they are used. You can find more details about Project Palette on ', InfoLink({text: 'GitHub', url: 'https://github.com/l4nk332/Project-Palette'}), '.']
    },
    {
      name: 'Abstract Cityscape 3D',
      url: 'https://ianjabour.com/Abstract-Cityscape-3D/',
      imageStyles: {
        backgroundPosition: 'center',
        backgroundImage: 'url("/assets/img/showcases/abstractcityscape.png")'
      },
      details: ['This is a 3D model of a cityscape that renders in the browser. Utilizing the Three.js library along with the HTML5 Audio API, I was able to bring the scene to life with lights and sound. The city is generated 100% procedurally, each building slightly unique in both shape and size. Through the analysis of audio waveforms I was able to animate the lights in the scene to reflect the average frequency range. This project allowed me to blend my experiences working in film production with my skill-set as a software developer. Feel free to ', InfoLink({url:"https://www.youtube.com/watch?v=lBkKHbZ8SkQ", text: 'watch my presentation'}) , ' of this project for more details.']
    },
    {
      name: 'Chess AI',
      url: 'https://github.com/jameslim1021/Chess-AI',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/chessai.png")'
      },
      details: ['This project focuses on computer science concepts such as data structures and algorithms. Through utilization of a decision tree the AI can generate the all possible permutations of a chessboard 3 moves into the future. Algorithms implemented in this project include depth first search, minimax, and alpha-beta pruning. This in conjunction with heuristics such as material, number of possible legal moves with emphasis on center squares, check/checkmate status, and pawn structure allow the AI to make the best possible move. ', InfoLink({url:"https://www.youtube.com/watch?v=uA0QOQDDKMw", text: 'Check out this video'}), ' Galvanize made on my team and the Chess-AI project.']
    },
    {
      name: 'Computer Tennis',
      url: 'https://github.com/l4nk332/computer-tennis',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/computertennis.png")'
      },
      details: 'Computer Tennis is an in-browser game that implements the HTML Canvas API to recreate and add a variety of features to the classic game Pong. As you rally back and forth the velocity of the ball will increase with each collision. When you lose a rally your paddle gets smaller by a fixed percentage, and if you win the rally your paddle will increase by half of that fixed percentage (unless at original paddle size).'
    }
  ],
  modules: [
    {
      name: 'renga',
      url: 'https://github.com/l4nk332/renga',
      imageStyles: {
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/img/showcases/renga.png")'
      },
      details: 'In my frustration with native APIs for creating and templating HTML with vanilla JavaScript I created a simple, lightweight library which allows a developer to create DOM nodes and tree structures in a concise, declarative fashion. For fairly static content that needs to be templated, renga is a fantastic tool for the job (This site is actually built with it 😉).'
    },
    {
      name: 'Conssert',
      url: 'https://github.com/l4nk332/conssert',
      imageStyles: {
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/img/showcases/conssert.png")'
      },
      details: 'Conssert is a zero-config testing framework that runs in your browser. The library aims to provide a clean, simple interface for writing tests around client-side facing code. Because it runs in the browser tested code can use new, browser-supported syntax without needing to transpile (as with node-based testing frameworks).'
    }
  ],
  widgets: [
    {
      name: 'Elm Calculator',
      imageStyles: {
        backgroundPosition: 'top',
        backgroundImage: 'url("/assets/img/showcases/elm_calculator.png")'
      },
      url: 'elm-calculator.html',
      details: 'A simple calculator built in Elm.'
    },
    {
      name: 'Elm Clock',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/elm_clock.png")'
      },
      url: 'elm-clock.html',
      details: 'A clock built in Elm with basic stopwatch and timer functionalities.'
    },
    {
      name: 'Just Another List',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/jala.png")'
      },
      url: 'https://codepen.io/l4nk33/full/jWXBmx/',
      details: 'An interface for a To-Do List application that changes animation based on the time of day (dusk, morning, day, dawn, night). Backdrop completely done in HTML canvas.'
    }
  ],
  graphics: [
    {
      name: 'Cube Matrix',
      imageStyles: {
        backgroundPosition: 'center',
        backgroundImage: 'url("/assets/img/showcases/cube_matrix.png")'
      },
      url: 'https://codepen.io/l4nk33/full/RGAOor',
      details: 'A 3D cube matrix created with Three.js. Click and drag to move. Pinch to zoom.'
    },
    {
      name: 'Night and Day City',
      imageStyles: {
        backgroundPosition: 'center',
        backgroundImage: 'url("/assets/img/showcases/night_and_day_city.png")'
      },
      url: 'https://codepen.io/l4nk33/full/xWrpya',
      details: 'A black and white minimally animated skyline. I was experimenting with what is possible with just HTML and CSS. No JavaScript logic necessary.'
    },
    {
      name: 'Particles',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/particles.png")'
      },
      url: 'https://codepen.io/l4nk33/full/mENLmW/',
      details: 'A particle simulation created through the HTML Canvas API done without any libraries.'
    }
  ],
  logos: [
    {
      name: 'Project Palette Logo',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/project_palette_logo.png")'
      },
      url: 'https://codepen.io/l4nk33/full/jLyqQq',
      details: "This is the logo animation that is used to show a loading state when Project Palette (showcased above) is processing a scrape for a given repository."
    },
    {
      name: 'Carbonite Logo',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/carbonite_logo.png")'
      },
      url: 'https://codepen.io/l4nk33/full/wmZJYq',
      details: "An animated logo created for an internal tool called Carbonite, which was used to diff changes made to an application's build source."
    },
    {
      name: 'Marine Layer Logo',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/marine_layer.png")'
      },
      url: 'https://codepen.io/l4nk33/full/VjWjRZ',
      details: 'A pure CSS animated implementation of the Marine Layer clothing brand.'
    }
  ],
  misc: [
    {
      name: 'SVG Lightsaber',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/svg_lightsaber.png")'
      },
      url: 'https://codepen.io/l4nk33/full/PEjrar',
      details: 'A fun little handcrafted SVG of a lightsaber.'
    },
    {
      name: 'Spinner',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/spinner.png")'
      },
      url: 'https://codepen.io/l4nk33/full/NRBGVk',
      details: 'A basic spinner created and animated with CSS.'
    },
    {
      name: 'Mandelbrot',
      imageStyles: {
        backgroundImage: 'url("/assets/img/showcases/mandelbrot.png")'
      },
      url: 'https://ianjabour.com/Mandelbrot/',
      details: 'Experimenting with HTML Canvas by graphing mandelbrot sets.'
    }
  ]
}
