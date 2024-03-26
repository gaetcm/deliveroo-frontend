import "./Header.css";

const Header = (props) => {
  return (
    <>
      <div className="fondblanc">
        <header>
          <div className="container">
            <div className="topbar">
              <img src={props.logo} />
            </div>
          </div>
        </header>
        <div className="container">
          <div className="topcontent">
            <div className="top">
              <h1>{props.text}</h1>
              <p>{props.p}</p>
            </div>

            <img src={props.src} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
