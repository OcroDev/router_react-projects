import { Link } from '../components/Link'
import { useI18n } from '../hooks/usei18n'

export default function HomePage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en', 'home')
  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/about'>
        {i18n.anchor}
      </Link>
    </>
  )
}
