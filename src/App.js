import logo from './logo.svg';
import './App.css';
import ProductList from './containers/product-list/product-list';
import ProductDetail from './containers/product-detail/product-detail';
import SearchBar from './components/search-bar/search-bar';

function App() {
  return (
    <div className="App">
      <h1>Demo Redux + Ajax</h1>
      <SearchBar />
      <ProductList />
      <ProductDetail />
    </div>
  );
}

export default App;
