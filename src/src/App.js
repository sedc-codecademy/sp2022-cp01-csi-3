import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
import TradingChart from './components/UI/TradingChart/TradingChart';
import Market from './components/UI/Market/Market';
import { Grid } from '@mui/material';

function App() {
	return (
		<div className="App">
			<Grid className='contentBoxHolder'>
			<BrowserRouter>
				<Grid xs={12}>
				<Header></Header>
				</Grid>
				<Grid xs={12}>
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/log-in' element={<LogIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/about' element={<About />} />
					<Route path='/terms-of-service' element={<TermsOfService />} />
					<Route path='/trading-chart' element={<TradingChart />} />
					<Route path='/market' element={<Market/>} />
					<Route path='*' element={<NotFound404 />} />
				</Routes>
				</Grid>
			</BrowserRouter>
			</Grid>
				<Grid xs={12} className="footer">
				<Footer></Footer>
				</Grid>
		</div>
	);
}

export default App;
