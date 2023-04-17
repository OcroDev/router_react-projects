import { Link } from '../components/Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>Ups! This is NOT fine</h1>
        <img src='https://i.kym-cdn.com/photos/images/newsfeed/001/213/411/146.gif' alt='this is fine dog burning' />
        <h2>404 Page Not Found</h2>
      </div>
      <Link to='/'>Go to home</Link>
    </>
  )
}
