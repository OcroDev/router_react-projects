import { Router } from './components/Router'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import './App.css'
import Page404 from './pages/Page404'

const routes = [
  { path: '/', Component: HomePage },
  { path: '/about', Component: AboutPage },
  { path: '/twitch', Component: () => <h1>Twitch</h1> }
]

function App () {
  return (
    <>
      <main>
        <Router routes={routes} defaultComponent={Page404} />
      </main>
    </>
  )
}

export default App
