import './App.css';
import ProductLists from './components/productList.js';
import ShoppingCart from './components/shoppingCart';
import SuperCoin from './components/superCoin';

function App() {
  return (
    <div className="App">
      <h1 className='main-heading'>Welcome to my E commerce Application</h1>
      <ProductLists />
      <ShoppingCart />
      <SuperCoin />
    </div>
  );
}

export default App;
