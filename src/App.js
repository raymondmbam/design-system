import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import './styles/type.scss';

function App() {
  return (
    <div className="App">
    <Button variant="primary" size="large">Primary Button</Button>
    <Button variant="secondary" size="small">Secondary Button</Button>
    <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center',padding: '20px' }}>
      <h1 style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
      <h2 style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
      <h3 style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <h4 style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
      <h5 style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
      <p className='body1'  style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className='body2' style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className='body3' style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className='caption' style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  );
}

export default App;
