import React from 'react';
import './Dashboard.css'
import Sidebar from './Sidebar/Sidebar';
import DashNav from './DashNav/DashNav';
import Main from './Main/Main';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="sidebar">
        <Sidebar />
      </div>
      <section className="main">
        <nav className="dashnav">
          <DashNav />
        </nav>
        <Main />
      </section>
    </div>
  )
}

export default Dashboard
