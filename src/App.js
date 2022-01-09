import './App.css';
import { GloceryList } from './GloceryList';
import image from './man.jpg';
import imageTwo from './shopping.jpg';

function App() {
  return (
    <div className='app'>
       <div className='container'>
      <img src={imageTwo} width="180px" alt="shoping"/></div>
      <div className='container'>
        <h1>Grocery List</h1>
      </div>
      <GloceryList/>
      <div className='container'>
      <img src={image} width="180px" alt="man"/>
      </div>
    </div>
  );
}

export default App;
