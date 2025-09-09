import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="site-heading">
      <div className="nav-bar">
        <div className="logo-tittle">
          <h1>Feane</h1>
        </div>
        <ul className="menu-list">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">BOOK TABLE</a>
          </li>
         
        </ul>
         <button type="button">Order Online</button>
      </div>
       <div className='home-page'>
      <h1>Fast Food Restaurant</h1>
      <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
      <button type="button">Order Now</button>
    </div>
    </section>
  );
};

export default Header;
