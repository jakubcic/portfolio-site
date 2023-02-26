import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfilio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import { Route, Routes } from 'react-router-dom';

let stlyeClasses = {
	main: 'flex flex-col items-center justify-center m-4',
};

const App = () => {
	return (
		<div className='App'>
			<Header />
			<main className={stlyeClasses.main}>
				<Routes>
					<Route path='/' element={<About />} />
					<Route path='/about' element={<About />} />
					<Route path='/portfolio' element={<Portfilio />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/resume' element={<Resume />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
