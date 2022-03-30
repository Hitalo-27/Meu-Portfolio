import React from 'react';
import '../App.css';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import Sobre from '../components/sobre';
import Education from '../components/education';
import Skills from '../components/skills';

function Index() {
  return (
    <>
      <Home/>
      <Sobre/>
      <Education />
      <Skills/>
      <Footer />
    </>
  );
}

export default Index;
