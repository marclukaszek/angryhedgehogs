import './App.css';
import Header from './components/Header';
import Players from './components/Players';
import Sponsors from './components/Sponsors';
import Videos from './components/Videos';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Players />

      <div className="section-wrapper">
        <div>
          <Sponsors />
          <Videos />
        </div>
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;
