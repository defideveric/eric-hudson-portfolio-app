import React from 'react';
import { About, Testimonials, Work, Skills, Header, Footer} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
        <Header/>
        <Navbar/>
        <About/>
        <Testimonials/>
        <Work/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;