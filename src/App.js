import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
    <Button variant="primary" size="large">Primary Button</Button>
    <Button variant="secondary" size="small">Secondary Button</Button>
    </div>
  );
}

export default App;
