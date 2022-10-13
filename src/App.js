import './App.css';
import Banner from './components/Banner/Banner';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='flex'>
        <Banner />
        <CartContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
