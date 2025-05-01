import './Players.css';
import { useRef } from 'react';
import alno from '../assets/alno.png';
import frado from '../assets/frado.png';
import grel from '../assets/grel.png';
import jeabunny from '../assets/jeabunny.png';
import weteran from '../assets/weteran.png';
import yamakasi from '../assets/yamakasi.png';
import bam from '../assets/bam.png';
import prosto from '../assets/prosto.png'

const players = [
  { name: 'Alno', role: 'TEAM LEADER / RIFFLER / AWPER', img: alno },
  {name: '.BaM.', role: 'RIFFLER', img: bam},
  { name: 'Frado', role: 'RIFFLER', img: frado },
  { name: 'Grel', role: 'ENTRY FRAGGER / RIFFLER', img: grel },
  { name: 'Jeabunny', role: 'RIFFLER / AWPER', img: jeabunny },
  { name: 'Weteran PVP', role: 'RIFFLER', img: weteran },
  { name: 'proSTO', role: 'RIFFLER / COMMMENTATOR', img: prosto},
  { name: 'Yamakasi', role: 'ANCHOR / RIFFLER', img: yamakasi }
];

export default function Players() {
  const scrollRef = useRef();
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (direction) => {
    const scrollAmount = 220;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleMouseDown = (e) => {
    isDown.current = true;
    scrollRef.current.classList.add('active');
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    scrollRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown.current = false;
    scrollRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="players" id="players">
      <div className="container">
        <h1>OUR <span className="red">PLAYERS</span></h1>
        <div className="carousel-wrapper">
          <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
          <div
            className="carousel"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="player-list">
              {players.map(player => (
                <div className="player-card" key={player.name}>
                  <img src={player.img} alt={player.name} />
                  <h3>{player.name}</h3>
                  <p>{player.role}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
        </div>
      </div>
    </section>
  );
}
