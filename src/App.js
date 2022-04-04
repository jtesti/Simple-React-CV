import './App.css';
import Navi from './components/Navi/Navi';
import Hero from './components/Hero/Hero';
import { CV } from './CV/CV';
import Footer from './components/Footer/Footer';

const { hero, vitaeSection } = CV;

function App() {
  return (
    <div className="App">
      <Hero hero={hero} />
      <Navi vitaeSection={vitaeSection} />
      <Footer />
    </div>


  );
}

export default App;
