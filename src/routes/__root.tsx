import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import LOGO from '../assets/logo_hiyoko.svg'
import TwitterLOGO from '../assets/twitter.png'
import GitHubLOGO from '../assets/github-mark.svg'
import InstaLOGO from '../assets/Instagram.svg'
import '../styles/header.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <header>
        <div className="top">
            <Link
              to="/"
              activeProps={{
                className: 'font-bold',
              }}
              activeOptions={{ exact: true }}
            >
              <div className="app">
                <img src={LOGO} className="Logo" alt="logo" />
                <h2 className="logoname">
                  Portfolio
                </h2>
              </div>
            </Link>{' '}

            <div className="SNS">
              <a href="https://twitter.com/BurariHina524" target="_blank">
                <img src={TwitterLOGO} className="XLogo" alt="TwitterLogo" />
              </a>
              <a href="https://github.com/Hina524" target="_blank">
                <img src={GitHubLOGO} className="SNSLogo" alt="GitHubLogo" />
              </a>
              <a href="https://www.instagram.com/hina_burari" target="_blank">
                <img src={InstaLOGO} className="SNSLogo" alt="InstaLogo" />
              </a>
            </div>
          </div>

        <div className="nav">
          <Link
            className='link'
            to={'/about'}
            activeProps={{
              className: 'font-bold',
            }}
          >
            About
          </Link>{' '}

          <Link
            className='link'
            to={'/blog'}
            activeProps={{
              className: 'font-bold',
            }}
          >
            Blog
          </Link>{' '}
          <Link
            className='link'
            to={'/works'}
            activeProps={{
              className: 'font-bold',
            }}
          >
            Works
          </Link>{' '}
          </div>
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
