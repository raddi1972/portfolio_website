import './App.css';
import { Banner } from './components/Banner';
import Navbar from './components/Nvabar';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
