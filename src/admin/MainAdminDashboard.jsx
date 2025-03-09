import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Adminsidebar from '../components/Adminsidebar';
import '../admin/MainAdminDashboard.css'; 
import'./CreateMainAdmin'
import CreateMainAdmin from './CreateMainAdmin';
import ViewAllMainAdmin from './ViewAllMainAdmin';
import ClubRegistrationForm from './NewClubs';
import ViewAllClubs from './ViewAllClub';
import ViewClubDetails from './ViewClubDetails';

export default function MainAdminDashboard() {
  const [currentView, setCurrentView] = useState("default");
  const [selectedClubId, setSelectedClubId] = useState(null);

  const changeView = (view, clubId = null) => {
    console.log("Change View called with:", view, clubId);
    setCurrentView(view);
    if (clubId) {
      setSelectedClubId(clubId);
    }
  };

  const renderMainContent = () => {
    console.log("Current View:", currentView);
    switch (currentView) {
      case 'createNewAdmin':
        return <CreateMainAdmin />;
      case 'viewAllMainAdmin':
        return <ViewAllMainAdmin/>;
      case 'createClub':
        return <ClubRegistrationForm/>
      case 'viewClubs':
        return <ViewAllClubs changeView={changeView}/>
      case 'viewClub':
        return <ViewClubDetails clubId={selectedClubId} />
      default:
        return (
          <div className="welcome-container">
            <h1>Welcome to the Admin Dashboard</h1>
            <p>Select an option from the sidebar to get started.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Adminsidebar changeView={changeView} />
        <div className="main-content">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
}