import cometLogo from "../../assets/cometlogo.avif";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import shopAllImg from "../../assets/shopAllImg.jpeg"
import xLowsImg from "../../assets/xLowsImg.jpg"
import apexImg from "../../assets/apexImg.jpg"
import aeresImg from "../../assets/aeresImg.jpg"
import aeonImg from "../../assets/aeonImg.jpg"
import { useState } from "react";

const megaMenus =  {
  men: {
    shopAll: { title: "MEN SHOP ALL", img: shopAllImg, to: "/allsneakers/men" },
    collections: [
      { title: "X-LOWS", img: xLowsImg, to: "/men" },
      { title: "APEX", img: apexImg, to: "/men" },
      { title: "AERES", img: aeresImg, to: "/men" },
      { title: "AEON", img: aeonImg, to: "/men" },
    ],
    links: ["New In", "Find your Silhouette", "Refer A Friend", "Gift A Comet", "Only Few Left", "The Garage", "The 9-9 Edit"]
  },
  
  women:{
    shopAll: { title: "WOMEN SHOP ALL", img: shopAllImg, to: "/allsneakers/women" },
    collections: [
      { title: "X-LOWS", img: xLowsImg, to: "/women" },
      { title: "APEX", img: apexImg, to: "/women" },
      { title: "AERES", img: aeresImg, to: "/women" },
      { title: "ASTRA", img: aeonImg, to: "/women" },
    ],
    links: ["New In", "Find your Silhouette", "Refer A Friend", "Gift A Comet", "Only Few Left", "The Garage", "The 9-9 Edit"]
  }
}

const Chevron = ({ open }) => (
  <svg className={`chevron-icon ${open ? "open" : ""}`} viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M1 1.5l5 5 5-5" />
  </svg>
)

const Navbar = () => {
  //STATE to handel navbar menu dropdown.
  const[openMenu, setOpenMenu] = useState(null) //passing null here because we want a boolean value(can pass true or false)
  const menu = openMenu ? megaMenus[openMenu] : null
  // Callback to our menu setter function.
  const closeMenu = () => setOpenMenu(null)

  return (
    <>
      {/* Traditional(Simple) way to build an Navbar component. */}
      {/* <div className="navbar">
        <div className="logo">
          <Link to='/'> <img src={cometLogo} alt="" /> </Link>
        </div>

        <div className="nav-menu">
          <Link to='/men'><p className="nav-items">Men</p></Link>
          <Link to='/women'><p className="nav-items">Women</p></Link>
          <Link to='/vault'><p className="nav-items">Vault</p></Link>
          <Link to='/aboutus'><p className="nav-items">About Us</p></Link>
          

          <div className="nav-icons">
            <div className="nav-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="modal__toggle-open icon icon-search"
              >
                <path d="M 10 2 C 5.590603 2 2 5.5906063 2 10 C 2 14.409394 5.590603 18 10 18 C 11.929744 18 13.635779 17.22512 15.019531 16.082031 L 20.71875 21.78125 A 0.75130096 0.75130096 0 1 0 21.78125 20.71875 L 16.082031 15.019531 C 17.225119 13.635778 18 11.929742 18 10 C 18 5.5906063 14.409397 2 10 2 z M 10 3.5 C 13.598737 3.5 16.5 6.401265 16.5 10 C 16.5 13.598735 13.598737 16.5 10 16.5 C 6.4012627 16.5 3.5 13.598735 3.5 10 C 3.5 6.401265 6.4012627 3.5 10 3.5 z"></path>
              </svg>
            </div>
            <div className="nav-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 31 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-account"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M7.73438 8.69099C7.73438 12.9231 11.1929 16.382 15.4254 16.382C19.6575 16.382 23.1163 12.9234 23.1163 8.69099C23.1163 4.45887 19.6578 1 15.4254 1C11.1933 1.00032 7.73438 4.41345 7.73438 8.69099ZM21.2959 8.69099C21.2959 11.9222 18.6564 14.5614 15.4254 14.5614C12.1942 14.5614 9.55503 11.9219 9.55503 8.69099C9.55503 5.45973 12.1945 2.82058 15.4254 2.82058C18.6567 2.82058 21.2959 5.46006 21.2959 8.69099Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M1.91025 32.7645H28.9877C29.4883 32.7645 29.8978 32.355 29.8978 31.8545C29.8978 23.8905 23.4356 17.3828 15.4261 17.3828C7.41675 17.3825 1 23.8903 1 31.8545C1 32.3551 1.36411 32.7645 1.91008 32.7645H1.91025ZM15.4262 19.2486C22.0706 19.2486 27.5769 24.4365 28.032 30.9897H2.82041C3.27563 24.4364 8.78192 19.2486 15.4262 19.2486Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.5"
                ></path>
              </svg>
            </div>

            <div className="nav-icon">
              <svg
                width="45"
                height="30"
                viewBox="0 0 73 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M71.3461 0H1.34615C0.601569 0 0 0.706804 0 1.57692V11.0385C0 11.9086 0.601569 12.6154 1.34615 12.6154H2.69231V39.4231C2.69231 40.2932 3.29388 41 4.03846 41H68.6538C69.3984 41 70 40.2932 70 39.4231V12.6154H71.3461C72.0907 12.6154 72.6923 11.9086 72.6923 11.0385V1.57692C72.6923 0.706804 72.0907 0 71.3461 0ZM67.3077 37.8462H5.38462V12.6154H67.3077V37.8462ZM70 9.46154H2.69231V3.15385H70V9.46154Z"
                  fill="#1F1F1F"
                ></path>
                <path
                  d="M46.2002 32.1016H64.4002"
                  stroke="#1F1F1F"
                  strokeWidth="4"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div> */}

      <header className="header" onMouseLeave={closeMenu}>
        <div className="navbar">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={cometLogo} alt="Comet" />
            </Link>
          </div>
          <nav className="nav-menu">
            {/* Men */}
            <div className="nav-item" onMouseEnter={() => setOpenMenu("men")}>
              <NavLink className="nav-link" to="/men" onClick={closeMenu}>
                <span className={openMenu === "men" ? "nav-text active" : "nav-text"}>Men</span>
                <Chevron open={openMenu === "men"} />
              </NavLink>
            </div>

            {/* Women */}
            <div className="nav-item" onMouseEnter={() => setOpenMenu("women")}>
              <NavLink className="nav-link" to="/women" onClick={closeMenu}>
                <span className={openMenu === "women" ? "nav-text active" : "nav-text"}>Women</span>
                <Chevron open={openMenu === "women"} />
              </NavLink>
            </div>

            {/* Vault */}
            <div className="nav-item" onMouseEnter={closeMenu}>
              <NavLink className="nav-link" to="/vault">
                <span className="nav-text">The Vault</span>
              </NavLink>
            </div>

            {/* About Us */}
            <div className="nav-item" onMouseEnter={closeMenu}>
              <NavLink className="nav-link" to="/aboutus">
                <span className="nav-text">About Us</span>
              </NavLink>
            </div>

            {/* SVG icons for cart, user and search. */}
            <div className="nav-icons" onMouseEnter={closeMenu}>
              <button className="nav-icon" aria-label="Search">
                <svg width="36" height="36" viewBox="0 0 24 24">
                  <path d="M 10 2 C 5.590603 2 2 5.5906063 2 10 C 2 14.409394 5.590603 18 10 18 C 11.929744 18 13.635779 17.22512 15.019531 16.082031 L 20.71875 21.78125 A 0.75130096 0.75130096 0 1 0 21.78125 20.71875 L 16.082031 15.019531 C 17.225119 13.635778 18 11.929742 18 10 C 18 5.5906063 14.409397 2 10 2 z M 10 3.5 C 13.598737 3.5 16.5 6.401265 16.5 10 C 16.5 13.598735 13.598737 16.5 10 16.5 C 6.4012627 16.5 3.5 13.598735 3.5 10 C 3.5 6.401265 6.4012627 3.5 10 3.5 z"></path>
                </svg>
              </button>

              <button className="nav-icon" aria-label="Account">
                <svg width="32" height="34" viewBox="0 0 31 34" fill="none">
                  <path
                    d="M7.73438 8.69099C7.73438 12.9231 11.1929 16.382 15.4254 16.382C19.6575 16.382 23.1163 12.9234 23.1163 8.69099C23.1163 4.45887 19.6578 1 15.4254 1C11.1933 1.00032 7.73438 4.41345 7.73438 8.69099ZM21.2959 8.69099C21.2959 11.9222 18.6564 14.5614 15.4254 14.5614C12.1942 14.5614 9.55503 11.9219 9.55503 8.69099C9.55503 5.45973 12.1945 2.82058 15.4254 2.82058C18.6567 2.82058 21.2959 5.46006 21.2959 8.69099Z" fill="black" stroke="black" strokeWidth="0.5"></path>
                  <path
                    d="M1.91025 32.7645H28.9877C29.4883 32.7645 29.8978 32.355 29.8978 31.8545C29.8978 23.8905 23.4356 17.3828 15.4261 17.3828C7.41675 17.3825 1 23.8903 1 31.8545C1 32.3551 1.36411 32.7645 1.91008 32.7645H1.91025ZM15.4262 19.2486C22.0706 19.2486 27.5769 24.4365 28.032 30.9897H2.82041C3.27563 24.4364 8.78192 19.2486 15.4262 19.2486Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="0.5"
                  ></path>
                </svg>
              </button>

              <button className="nav-icon cart" aria-label="Cart">
                <svg width="58" height="33" viewBox="0 0 73 41" fill="none">
                  <path
                    d="M71.3461 0H1.34615C0.601569 0 0 0.706804 0 1.57692V11.0385C0 11.9086 0.601569 12.6154 1.34615 12.6154H2.69231V39.4231C2.69231 40.2932 3.29388 41 4.03846 41H68.6538C69.3984 41 70 40.2932 70 39.4231V12.6154H71.3461C72.0907 12.6154 72.6923 11.9086 72.6923 11.0385V1.57692C72.6923 0.706804 72.0907 0 71.3461 0ZM67.3077 37.8462H5.38462V12.6154H67.3077V37.8462ZM70 9.46154H2.69231V3.15385H70V9.46154Z"
                    fill="#1F1F1F"
                  ></path>
                  <path
                    d="M46.2002 32.1016H64.4002"
                    stroke="#1F1F1F"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* When hovered over nav-items the dropdown will show by this. */}
        {
          menu && (
            <div className="mega-menu">
              <div className="mega-menu-inner">
                <Link to={menu.shopAll.to} className="mega-tile shop-all" onClick={closeMenu}>
                  <img src={menu.shopAll.img} alt={menu.shopAll.title} />
                  <span className="tile-title top">{menu.shopAll.title}</span>
                </Link>

                {/* Mapping all object collections */}
                <div className="mega-grid">
                  {menu.collections.map((item) => (
                    <Link key={item.title} to={item.to} className="mega-tile" onClick={closeMenu}>
                      <img src={item.img} alt={item.title} />
                      <span className="tile-title">{item.title}</span>
                    </Link>
                  ))}
                </div>

                {/* Map every link so that we don't have to add each link manually. */}
                <ul className="mega-links">
                  {
                    menu.links.map((link) => (
                      <li key={link}><a href="#" onClick={closeMenu}>{link}</a></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          )
        }
      </header>
    </>
  );
};

export default Navbar;
