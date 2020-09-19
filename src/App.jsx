import React, { useEffect, useState } from 'react';
import './App.scss';
import Portfolio from './pages/Portfolio';
import Header from './pages/Header/Header';
import About from './pages/About';
import Resume from './pages/Resume';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  const [data, setData] = useState({});
  const { main, resume, portfolio, testimonials } = data;
  useEffect(() => {
    fetch('resumeData.json')
      .then((r) => r.json())
      .then((d) => {
        setData(d);
      });
    return () => {
    }
  }, [])
  return (
    <div >
      <Header data={main} />
      <About data={main} />
      <Resume data={resume} />
      <Portfolio data={portfolio} />
      <Testimonials data={testimonials} />
      <Contact data={main} />
      <Footer data={main} />
    </div>
  );
}

export default App;
