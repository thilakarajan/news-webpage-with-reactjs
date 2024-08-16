import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './components/header';
import Logo from './components/logo';
import Search from './components/search';
import Sections from './components/sections';
import MainContent from './components/main-contents';
import Footer from './components/footer';
import { BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
import './styles/index.css'
import { createRoot } from 'react-dom/client';

const Body = () => {
  return (
    <div>
      <Header />
      <Logo />
      <Search/>
      <Sections/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  
      <Switch>
        <Route path="/" component={Body} exact/>
        <Redirect to='/'/>
      </Switch>
    </Router>
  </React.StrictMode>
)