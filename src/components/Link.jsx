import { EVENT } from '../consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // ? crear un evento personalizado
  const navigationEvent = new Event(EVENT.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0
    const isModifyEvent = event.metaKey || event.ctrlKey || event.altKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifyEvent) {
      event.preventDefault()
      navigate(to) // navegacion con SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
  // return <a onClick={handleClick} href={to} target={target}>{children}</a>
  // return <a onClick={handleClick} href={to} target={target} children={props.children} />
}
