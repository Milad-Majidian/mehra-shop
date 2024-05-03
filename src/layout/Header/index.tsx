import "./headerStyle.css";

function Header() {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <img src="/images/header/mehrashop-logo.svg" alt="mehrashopLogo" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <div className="search">
          <img src="/images/header/search.svg" alt="search" />
        </div>
        <ul className="menu">
          <li>
            <a href="#dont">خانه</a>
          </li>
          <li>
            <a href="#forget">بلاک</a>
          </li>
          <li>
            <a href="#forget">داستان ما</a>
          </li>
          <li>
            <a href="#forget">تماس با ما</a>
          </li>
        </ul>
        <div className="profile-menu">
          <a href="/" className="">
            <img src="/images/header/account-icon.svg" alt="account" />
          </a>
          <a href="/" className="">
            <img src="/images/header/heart-icon.svg" alt="favorite" />
          </a>
          <a href="/" className="">
            <img src="/images/header/cart-icon.svg" alt="cart" />
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;
