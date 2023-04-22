import { useState, useEffect, Children } from 'react'
import { EVENT } from '../consts'
import { getCurrentPath } from '../utils/utils.js'
import { match } from 'path-to-regexp'

export function Router ({
  children, routes = [], defaultComponent: DefaultComponent = () => {
    return <h1>404 Page not found</h1>
  }
}) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENT.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENT.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENT.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENT.POPSTATE, onLocationChange)
    }
  }, [])
  let routeParams = {}

  const routesChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) {
      return true
    }

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)

    if (!matched) {
      return false
    }

    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />
}
