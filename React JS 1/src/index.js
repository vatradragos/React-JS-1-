import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Title from './components/title/Title';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Title />
    <Section />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals