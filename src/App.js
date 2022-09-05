import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Navbar from './components/Nvabar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
