import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers';
import Home from './components/Home';

function App() {
  return (
    <div className='px-20 bg-primary'>
      <Headers />
      <Home />
    </div>
  );
}

export default App;
