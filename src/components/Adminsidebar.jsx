
import React, { useState } from "react";
import { 
  FaUsers, FaPlus, FaCalendarAlt, FaNewspaper, FaProjectDiagram, 
  FaUserShield, FaTrophy, FaUserTie, FaEdit, FaIdCard, FaTrash 
} from "react-icons/fa";


import './Adminsidebar.css'; // Updated CSS file name

const Adminsidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const renderSubMenu = (category) => {
    switch (category) {
      case "Main Admin":
        return (
          <ul className="administrator-submenu">
            <li><FaPlus className="submenu-icon" /> Create New Admin</li>
            <li><FaUsers className="submenu-icon" /> View All Main Admins</li>
            <li><FaEdit className="submenu-icon" /> Update Admin Profile</li>
            <li><FaIdCard className="submenu-icon" /> Get Main Admins by ID</li>
          </ul>
        );
      case "Club":
        return (
          <ul className="administrator-submenu">
            <li><FaPlus className="submenu-icon" /> <a href="/newclub">Create Club</a></li>
            <li><FaPlus className="submenu-icon" /> View All Clubs</li>
            <li><FaPlus className="submenu-icon" /> Update Club</li>
            <li><FaPlus className="submenu-icon" /> Delete Club</li>
            <li><FaPlus className="submenu-icon" /> Get Club by Club ID</li>
            <li><FaPlus className="submenu-icon" /> Get Club by Member ID</li>
          </ul>
        );
        
      case "Events":
        return (
          <ul className="administrator-submenu">
            <li><FaPlus className="submenu-icon" /> View all events</li>
            <li><FaPlus className="submenu-icon" /> View  Events by club ID</li>
            <li><FaPlus className="submenu-icon" /> View Events by Member ID</li>
            
          </ul>
        );
      case "News":
        return (
          <ul className="administrator-submenu">
            <li><FaPlus className="submenu-icon" /> Get all News</li>
            <li><FaPlus className="submenu-icon" /> Get News by club ID</li>
            <li><FaPlus className="submenu-icon" /> Get News by Member ID</li>
            
          </ul>
        );
       
      case "Projects":
        return (
          <ul className="administrator-submenu">
            <li><FaPlus className="submenu-icon" /> View all Projects</li>
            <li><FaPlus className="submenu-icon" />View Projects by club ID</li>
            <li><FaPlus className="submenu-icon" /> View Projects by Member ID</li>
            
          </ul>
        );
      case "User Help":
        return <ul className="administrator-submenu"><li><FaPlus className="submenu-icon" /> Get all users messages</li></ul>;
      case "Awards":
        return <ul className="administrator-submenu"><li><FaPlus className="submenu-icon" /> View all Events by Club ID </li></ul>;
      case "Executive Panel":
        return <ul className="administrator-submenu"><li><FaPlus className="submenu-icon" /> View Executive Panel</li></ul>;
      default:
        return null;
    }
  };

  return (
    <div className="administrator-sidebar">
      <ul className="administrator-sidebar-list">
        <li 
          className="administrator-sidebar-item" 
          onClick={() => handleCategoryClick("Main Admin")}
        >
          <FaUserShield className="administrator-icon" /> Main Admin
        </li>
        {selectedCategory === "Main Admin" && renderSubMenu("Main Admin")}
        <hr className="category-divider" />

        <li 
          className="administrator-sidebar-item" 
          onClick={() => handleCategoryClick("Club")}
        >
          <FaUsers className="administrator-icon" /> Club
        </li>
        {selectedCategory === "Club" && renderSubMenu("Club")}
        <hr className="category-divider" />

        <li 
          className="administrator-sidebar-item" 
          onClick={() => handleCategoryClick("Events")}
        >
          <FaCalendarAlt className="administrator-icon" /> Events
        </li>
        {selectedCategory === "Events" && renderSubMenu("Events")}
        <hr className="category-divider" />

        <li 
          className="administrator-sidebar-item" 
          onClick={() => handleCategoryClick("News")}
        >
          <FaNewspaper className="administrator-icon" /> News
        </li>
        {selectedCategory === "News" && renderSubMenu("News")}
        <hr className="category-divider" />

        <li 
          className="administrator-sidebar-item" 
          onClick={() => handleCategoryClick("Projects")}
        >
          <FaProjectDiagram className="administrator-icon" /> Projects
        </li>
        {selectedCategory === "Projects" && renderSubMenu("Projects")}
        <hr className="category-divider" />

        <li 
          className="administrator-sidebar-item" 
          onClick={() => handleCategoryClick("User Help")}
        >
          <FaEdit className="administrator-icon" /> User Help
        </li>
        {selectedCategory === "User Help" && renderSubMenu("User Help")}
        <hr className="category-divider" />

        <li 
          className="administrator-sidebar-item" 
          onClick={() => handleCategoryClick("Awards")}
        >
          <FaTrophy className="administrator-icon" /> Awards
        </li>
        {selectedCategory === "Awards" && renderSubMenu("Awards")}
        <hr className="category-divider" />

        <li 
          className="administrator-sidebar-item" 
          onClick={() => handleCategoryClick("Executive Panel")}
        >
          <FaUserTie className="administrator-icon" /> Executive Panel
        </li>
        {selectedCategory === "Executive Panel" && renderSubMenu("Executive Panel")}
      </ul>
    </div>
  );
};

export default Adminsidebar;

