import './App.css';
import { Banner } from './components/Banner';
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
    </div>
  );
}

export default App;
