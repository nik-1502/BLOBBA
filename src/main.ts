import './style.css'
import { mountBusfahrer } from './busfahrer.ts'

const app = document.querySelector<HTMLDivElement>('#app')!
let unmountCurrentPage: (() => void) | undefined

function renderPage() {
  unmountCurrentPage?.()
  unmountCurrentPage = undefined

  if (window.location.hash === '#busfahrer') {
    app.innerHTML = '<main class="busfahrer-page" id="busfahrer-game"></main>'
    unmountCurrentPage = mountBusfahrer(app.querySelector<HTMLElement>('#busfahrer-game')!)
    return
  }

  app.innerHTML = `<main class="home-page"><header class="title-frame"><h1>GetDrunk</h1></header><button class="busfahrer-button" type="button">Busfahrer</button></main>`
  app.querySelector<HTMLButtonElement>('.busfahrer-button')!.addEventListener('click', () => { window.location.hash = 'busfahrer' })
}

window.addEventListener('hashchange', renderPage)
renderPage()
