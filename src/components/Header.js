import './Header.css';
import logo from '../assets/logo2.png';

export default function Header() {
  return (
    <header className="header" id="about">
      <div className="header-container">
        <img src={logo} alt="Angry Hedgehogs logo" className="logo" />
        <div className="header-text">
          <h1>
            ANGRY <span className="red">HEDGEHOGS</span>
          </h1>
          <p>
            Angry Hedgehogs is an amateur Counter-Strike 2 team known for our aggressive playstyle and competitive spirit.
          </p>
        </div>
      </div>
    </header>
  );
}
