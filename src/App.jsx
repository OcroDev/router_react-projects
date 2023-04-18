import { lazy, Suspense } from 'react'
import { Router } from './components/Router'
import { Route } from './components/Route'
// import AboutPage from './pages/About' // import estático
// import HomePage from './pages/Home'
import Page404 from './pages/Page404'
import SearchPage from './pages/Search'
import './App.css'
/** dinamic imports */
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))

const routes = [
  { path: '/search/:query', Component: SearchPage },
  { path: '/:lang/about', Component: LazyAboutPage },
  { path: '/:lang', Component: LazyHomePage }
]

function App () {
  return (
    <>
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Router routes={routes} defaultComponent={Page404}>
            <Route path='/' Component={LazyHomePage} />
            <Route path='/about' Component={LazyAboutPage} />
          </Router>
        </Suspense>
      </main>
    </>
  )
}

export default App
