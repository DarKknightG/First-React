import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';


function App() {
  return (
    <>
    <Navbar title ='TextUtils' title2 = 'About us'/>
    <div className='container'>
    <Textbox heading = 'ENTER THE TEXT'/>
    </div>
    </>
  );
}

export default App;
