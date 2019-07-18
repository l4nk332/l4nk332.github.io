import { element } from '../assets/libraries/renga.min.js'

const { div, a, h3, hr, p } = element

export function InfoLink({text, url}) {
  return a({href: url, class: 'info-link', target: '_blank'}, text)
}

export function Showcase({name, details, imageStyles, url }) {
  return (
    div({class: 'showcase'}, [
      div({class: 'showcase-image', style: imageStyles},
        a({href: url, target: '_blank'})
      ),
      Boolean(name) && div({class: 'showcase-title'}, [
        h3(name),
        hr({class: 'underbar'})
      ]),
      div({class: 'showcase-details'}, p(details))
    ])
  )
}
