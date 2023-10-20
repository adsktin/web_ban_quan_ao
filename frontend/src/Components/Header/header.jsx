import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.svg';
import './header.css';
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

function Header() {
    // tim kiem
    const [input,setinput] = useState(''); // input la biến, setinput là Hàm
  const changevalue = (e) =>{
  setinput(e.target.value);
  console.log(e.target.value);
  }
  return (
    <div className='header'>
        <div className='header-logo-nameshop'>
            <Link to="/"><img src={Logo} alt="" className='header-logo' /></Link>
            <Link to="/home" className='header-nameshop'>My Shop</Link>
        </div>
        <div className='header-nav'>
            <Link to="/home" className='header-nav-item' >Home</Link>
            <Link to="/products" className='header-nav-item'>Products</Link>
            <Link to="/fashion" className='header-nav-item'>Fashion</Link>
            <Link to="/sale" className='header-nav-item'>Sale</Link>
            <Link to="/contact" className='header-nav-item'>Contact</Link>
            <Link to="/service" className='header-nav-item'>Service</Link>
            <Link to="/productdetail" className='header-nav-item'>productdetail</Link>
        </div>
        <div className='header-search'>
            <AiOutlineSearch className='header-icon-search' size={30}></AiOutlineSearch>
            <input className='header-input-search' type="text" placeholder="Tìm kiếm..." value={input} onChange={changevalue}/>
        </div>
        <div className='header-actions'>
            <Link to="/user" className='header-user'>
                <AiOutlineUser className='header-icon-user' size={40} />
            </Link>
            <Link to="/shoppingcart" className='header-shoppingcart'>
                <AiOutlineShoppingCart className='header-icon-shoppingcart' size={40} />
            </Link>
        </div>
    </div>
  );
}

export default Header;