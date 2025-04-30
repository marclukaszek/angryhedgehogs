import './Sponsors.css';
import logo1 from '../assets/yamacode.webp';


export default function Sponsors() {
  return (
    <section className="sponsors" id="sponsors">
      <h2>SPONSORS</h2>
      <div className="sponsor-list">
        <img src={logo1} alt="YamaCode" /><h1>YamaCode</h1>

      </div>
    </section>
  );
}
