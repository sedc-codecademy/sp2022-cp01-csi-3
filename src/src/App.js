import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header/Header';

function App() {
  return (
	  <div className="App">
	  	<Header></Header>
      	<header className="App-header">
			<h1>	
				Welcome to Crypto Simulator
			</h1> 
        	<img src={logo} className="App-logo" alt="logo" />
        	<a
        	  className="App-link"
        	  href="https://reactjs.org"
        	  target="_blank"
        	  rel="noopener noreferrer"
        	>
				Link for React DOCS
        	</a>
      	</header>
		<Footer></Footer>
    </div>
  );
}

export default App;
