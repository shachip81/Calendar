import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.css';
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from'./home';

const SideBar = () => {
    return (
        <Menu right width={ '20%' } disableAutoFocus >
        <Link> <a className="menu-item" href="/">Home</a> </Link>
        <Link> <a id="calendar" className="menu-item" href="/calendar">Calendar</a> </Link> 
        <Link> <a id="HistoryEvents" className="menu-item" href="/HistoryEvents">Historical Events</a> </Link> 
        <Link> <a id="SavedLists" className="menu-item" href="/SavedLists">Saved Lists</a></Link> 
       </Menu>
    );
  };

export default props => {
  return (
    <div>
    <BrowserRouter>
    <SideBar />
    <Routes>
        <Route path="/" component={Home}> </Route>
       
     </Routes>
    </BrowserRouter>
    </div>
  );
};