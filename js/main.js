import { element } from '../assets/libraries/renga.min.js'
import { SHOWCASES } from './content.js'
import { Showcase } from './components.js'

const { fragment } = element

document.getElementById('down').addEventListener('click', () => {
  document.getElementById('projects-header').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
});

window.addEventListener('DOMContentLoaded', event => {
  Object.entries(SHOWCASES).forEach(([id, showcases]) => {
    const showcaseSection = document.getElementById(id)
    showcaseSection.innerHTML = ''
    showcaseSection.appendChild(fragment(showcases.map(Showcase)))
  })
})
