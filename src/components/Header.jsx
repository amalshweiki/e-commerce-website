import { Link, Outlet } from "react-router-dom"


const Header = () => {
  return (
    <div className='header'>
      <Link className="home-header" to='/homepage'>HOME   </Link> 
      <Link  className="product-header" to='/products'>Products    </Link>
      <Outlet/>

    </div>
  )
}

export default Header
