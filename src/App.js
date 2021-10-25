import logo from './assets/images/octocatFlavors.png';
import './assets/stylesheets/App.scss';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Search Your Favorite Octocat Flavor</h1>
        <SearchForm />
      </header>
    </div>
  );
}

export default App;
