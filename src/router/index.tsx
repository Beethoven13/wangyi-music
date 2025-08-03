import { lazy } from 'react'
import { Navigate, type RouteObject } from 'react-router'

const Discover = lazy(() => import('@/pages/discover'))
const Download = lazy(() => import('@/pages/download'))
const Focus = lazy(() => import('@/pages/focus'))
const Mine = lazy(() => import('@/pages/mine'))

const Recommend = lazy(() => import('@/pages/discover/recommend'))
const Ranking = lazy(() => import('@/pages/discover/ranking'))
const Album = lazy(() => import('@/pages/discover/album'))
const Artist = lazy(() => import('@/pages/discover/artist'))
const Radio = lazy(() => import('@/pages/discover/radio'))
const Songs = lazy(() => import('@/pages/discover/songs'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover/" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '',
        element: <Navigate to="/discover/recommend" replace />
      },
      {
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'ranking',
        element: <Ranking />
      },
      {
        path: 'songs',
        element: <Songs />
      },
      {
        path: 'radio',
        element: <Radio />
      },
      {
        path: 'album',
        element: <Album />
      },
      {
        path: 'artist',
        element: <Artist />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
