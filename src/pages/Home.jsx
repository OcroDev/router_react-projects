import { Link } from '../components/Link'
export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>this is a example page to create a React Router from scratch </p>
      <Link to='/about'>
        Go to about us
      </Link>
    </>
  )
}
