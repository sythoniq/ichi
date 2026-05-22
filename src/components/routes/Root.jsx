import {Outlet, Link} from 'react-router-dom';
import {useState} from 'react'
export default function Root() {
  const [shopList, setShopList] = useState([]);
  const [cart, setCart] = useState([]);

  return(
    <>
      <header className="page-heading">
        <Link to={'home'}>
          <div className="name-and-logo">
            <h3>Ichi Shop</h3>
          </div>
        </Link>
        <nav className="heading-nav">
          <ul className="nav-lists">
            <li className="nav-list shopping">
              <Link to={'shopping'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>store-outline</title><path d="M18.36 9L18.96 12H5.04L5.64 9H18.36M20 4H4V6H20V4M20 7H4L3 12V14H4V20H14V14H18V20H20V14H21V12L20 7M6 18V14H12V18H6Z" /></svg>
              </Link>
            </li>
            <li className="nav-list cart">
              <Link to={'cart'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg>
                <span className="cart-count">{cart.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet context={{
        list: [shopList, setShopList],
        box: [cart, setCart]
      }}/> 
    </>
  )
}
