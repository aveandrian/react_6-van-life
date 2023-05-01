import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Vans, {loader as vansListLoader} from './pages/Vans/Vans'
import VanDetail, {loader as vansDetailLoader} from './pages/Vans/VanDetail'
import './App.css'
import Layout from './components/Layout'
import Dashboard, {loader as hostDashboardLoader} from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans, {loader as hostVansLoader} from './pages/Host/HostVans'
import HostVansGeneral, {loader as hostVanGeneralLoader} from './pages/Host/HostVansGeneral'
import HostVansDetails from './pages/Host/HostVansDetails'
import HostVansPricing from './pages/Host/HostVansPricing'
import HostVansPhotos from './pages/Host/HostVansPhotos'
import Fallback from './pages/Fallback'
import Error from './components/Error'
import Login, {loader as loginLoader, action as loginAction} from './pages/Login'
import { requireAuth } from './utils'
import './server'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='vans' element={<Vans />} loader={vansListLoader} errorElement={<Error />}/>
    <Route path='login' element={<Login />} loader={loginLoader} action={loginAction} />
    <Route path='vans/:id' element={<VanDetail />} loader={vansDetailLoader}  errorElement={<Error />}/>

    <Route path='/host' element={<HostLayout />} >
      <Route index element={<Dashboard />} loader={hostDashboardLoader} />
      <Route path='income' element={<Income />} loader={async ({request}) => await requireAuth(request)} />
      <Route path='reviews' element={<Reviews />} loader={async ({request}) => await requireAuth(request)} />
      <Route path='vans' element={<HostVans />} loader={hostVansLoader}  errorElement={<Error />}/>
      <Route path='vans/:id' element={<HostVansGeneral />} loader={hostVanGeneralLoader}  errorElement={<Error />}>
        <Route index element={<HostVansDetails />} loader={async ({request}) => await requireAuth(request)} />
        <Route path='pricing' element={<HostVansPricing />} loader={async ({request}) => await requireAuth(request)}/>
        <Route path='photos' element={<HostVansPhotos />} loader={async ({request}) => await requireAuth(request)} />
      </Route>
    </Route>
    <Route path='*' element={<Fallback />} />
  </Route>
))

export default function App(){
  return (
      <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);