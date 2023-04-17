import { Link } from '../components/Link'

export default function AboutPage () {
  return (
    <>
      <h1>Home</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1625607505630863377/6OYSGtT5_400x400.jpg' alt='Rohermy Ochoa picture' />
        <p>Hi there!, my name is Rohermy and I'm building a React Router clone </p>
      </div>
      <Link to='/'>
        Go to home
      </Link>
    </>
  )
}
