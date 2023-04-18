import { Link } from '../components/Link'
import { useI18n } from '../hooks/usei18n'

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en', 'about')

  return (
    <>
      <h1>{i18n?.title}</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1648334622957109256/bDc3YLQl_200x200.jpg' alt='Rohermy Ochoa picture' style={{ borderRadius: '50%', border: 'solid 4px #000' }} />
        <p>{i18n?.description}</p>
      </div>
      <Link to='/'>
        {i18n?.anchor}
      </Link>
    </>
  )
}
