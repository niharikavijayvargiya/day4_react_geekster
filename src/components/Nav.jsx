import React from "react";

const Nav = () => {
  return (
    <nav className="navBar">
      <section>
        <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
        <h1>GeekFoods</h1>
      </section>
      <section>
        <ul>
          <li>Home</li>
          <li>Quote</li>
          <li>Resturants</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
      </section>

      <section>
        <button>Get started</button>
      </section>
    </nav>
  );
};

export default Nav;
