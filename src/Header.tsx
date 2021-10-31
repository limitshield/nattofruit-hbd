//// Header Component
function Header(props : any) {
  return (
    <div id="header">
      <HamburgerMenu />
      <AdBanner />
    </div>
  );
}

//// HamburgerMenu Component
//// Have multiple MenuContentRow components.
function HamburgerMenu(props : any) {
  return (
    <div className="hamburger-menu">
      <input type="checkbox" id="menu-btn-check" />
      <label htmlFor="menu-btn-check" className="menu-btn">
        <span></span>
      </label>
      <div className="menu-content">
        <MenuContentRow str="HOME" link="#" />
        <MenuContentRow str="MENU" link="#" />
        <MenuContentRow str="ABOUT" link="#" />
      </div>
      <label htmlFor="menu-btn-check" id="menu-cover"></label>
    </div>
  );
}

//// MenuContentRow Component
function MenuContentRow(props : any) {
  return (
    <div
      className="menu-content-row"
      onClick={() => {
        console.log("a");
      }}
    >
      {props.str}
    </div>
  );
}

//// AdBanner Component
function AdBanner() {
  return (
    <div className="ad">
      <img src={`./assets/ad.png`} alt="ad" />
    </div>
  );
}

export default Header;
