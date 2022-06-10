import React from 'react'
import { Wrapper } from './NavbarStyle'
import { Logo } from '../../assets/Logo'
import { Link } from 'react-router-dom'
import { VscSearch } from 'react-icons/vsc'
import { BsBag, BsHeart } from 'react-icons/bs'
import { RiMenu3Fill } from 'react-icons/ri'
import { HiOutlineMinusSm } from 'react-icons/hi'
import { useEffect } from 'react'
import { useState } from 'react'

const Navbar = () => {
  // const [active, setActive] = useState(true)

  // useEffect(() => {
  //   if (window.location.pathname === '/shop') {
  //     setActive(true)
  //   } else {
  //     setActive(false)
  //   }
  // }, [])

  return (
    <Wrapper>
      <div className={`wrapper`}>
        <section className='navbar'>
          <div className='navbar-logo flex-center h-100'>
            .
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <div className='navbar-menu col-7 h-100'>
            <ul className='menu-list h-100'>
              <li className='menu-item'>
                <Link to='/' className='menu-link'>
                  Home
                </Link>
                <HiOutlineMinusSm />
              </li>
              <li className='menu-item'>
                <Link to='/shop' className='menu-link'>
                  Shop
                </Link>
                <HiOutlineMinusSm />
              </li>
              <li className='menu-item'>
                <Link to='/blog' className='menu-link'>
                  Blog
                </Link>
                <HiOutlineMinusSm />
              </li>
              <li className='menu-item'>
                <Link to='/contact' className='menu-link'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='navbar-feature col-3 h-100'>
            <div className='feature-search flex-center h-100'>
              <VscSearch />
            </div>
            <div className='feature-wishlist flex-center h-100'>
              <div className='number-wishlist'>
                <BsHeart />
                <h3>0</h3>
              </div>
            </div>
            <div className='feature-cart flex-center h-100'>
              <div className='number-cart'>
                <BsBag />
                <h3>0</h3>
              </div>
            </div>
            <div className='feature-burger flex-center h-100'>
              <RiMenu3Fill />
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

export default Navbar
