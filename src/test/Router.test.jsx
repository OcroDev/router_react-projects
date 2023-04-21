import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Router } from '../components/Router'
import { getCurrentPath } from '../utils/utils'
import { Link } from '../components/Link'
import { Route } from '../components/Route'

vi.mock('../utils/utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks() // cleanup
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')
    const routes = [
      { path: '/', Component: () => <h1>Home</h1> },
      { path: '/about', Component: () => <h1>About</h1> }
    ]
    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')
    const homeComponent = () => {
      return (
        <>
          <h1>Home</h1>
          <Link to='/about'>Go to about</Link>
        </>
      )
    }
    const aboutComponent = () => <h1>About</h1>

    render(
      <Router>
        <Route path='/' Component={homeComponent} />
        <Route path='/about' Component={aboutComponent} />
      </Router>
    )
    // click on the link
    const button = screen.getByText('Go to about')
    fireEvent.click(button)

    const aboutTitle = await screen.findByText('About')

    expect(aboutTitle).toBeTruthy()
  })
})
