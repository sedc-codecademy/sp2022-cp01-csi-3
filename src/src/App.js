import { BrowserRouter, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import Home from './components/UI/Home/Home';
import Profile from './components/UI/Profile/Profile';
import SignUp from './components/UI/SignUp/SignUp';
import LogIn from './components/UI/LogIn/LogIn';
import About from './components/UI/About/About';
import TermsOfService from './components/UI/TermsOfService/TermsOfService';
import NotFound404 from './components/UI/NotFound404/NotFound404';

function App() {
  return (
	  <div className="App">
	  	<Header></Header>
      	
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/log-in' element={<LogIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/about' element={<About />} />
				<Route path='/terms-of-service' element={<TermsOfService />} />
				<Route path='*' element={<NotFound404 />} />
			</Routes>
		</BrowserRouter>

		<Footer></Footer>
    </div>
  );
}

export default App;
