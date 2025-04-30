import './Videos.css';

export default function Videos() {
  return (
    <section className="videos" id="videos">
      <h2>LAST <span className='red'>MATCHES</span></h2>
      <div className="video-list">
        <div className='video-wrapper'>
        <iframe src="https://www.youtube.com/embed/57h32KDtA18" title="Match 1" allowFullScreen></iframe>
      </div>
      </div>
    </section>
  );
}