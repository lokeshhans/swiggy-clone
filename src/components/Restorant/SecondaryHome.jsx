import Header from './Header'
import { Outlet } from 'react-router'

const SecondaryHome = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default SecondaryHome