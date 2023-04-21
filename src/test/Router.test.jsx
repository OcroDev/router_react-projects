import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from '../components/Router'
import { getCurrentPath } from '../utils/utils'

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
    getCurrentPath.mockReturnValue('/')
    const routes = [
      { path: '/', component: () => <h1>Home</h1> },
      { path: '/about', component: () => <h1>About</h1> }
    ]
    render(<Router routes={routes} />)
    expect(screen.getByText('Home'))
  })
})
