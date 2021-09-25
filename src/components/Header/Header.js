import React from 'react';
import logo from '../../img/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
           <div className="logo">
               <img src={logo} alt="" />
               <h1>Food Bush</h1>
           </div>
           <nav className="nav-menu">
               <a href="/home">Home</a>
               <a href="/menu">Menu</a>
               <a href="/items">Items</a>
               <a href="/category">Category</a>
               <a href="/chefs">Chefs</a>
               <a href="/about">About</a>
           </nav>
        </div>
    );
};

export default Header;