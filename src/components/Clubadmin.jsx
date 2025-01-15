import React from "react";
import { FaUsers, FaPlus, FaCalendarAlt, FaNewspaper, FaCalendar, FaEdit, FaCog } from "react-icons/fa";

import './Clubadmin.css'; // Updated CSS file name

const Clubadmin = () => {
  return (
    <div className="administrator-sidebar">
      <ul className="administrator-sidebar-list">
        <li className="administrator-sidebar-item"><FaUsers className="administrator-icon" /> Manage Clubs</li>
       
        <li className="administrator-sidebar-item"><FaCalendarAlt className="administrator-icon" /> Events</li>
        <li className="administrator-sidebar-item"><FaEdit className="administrator-icon" /> Manage Posts</li>
        <li className="administrator-sidebar-item"><FaCog className="administrator-icon" /> Settings</li>
      </ul>
    </div>
  );
};

export default Clubadmin;
