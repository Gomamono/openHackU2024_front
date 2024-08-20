// src/components/MenuBar.tsx

import React from 'react';
import { FaHome, FaCog } from 'react-icons/fa';
//import './MenuBar.css';

const MenuBar: React.FC = () => {
  return (
    <div className="menu-bar">
      <div className="menu-item">
        <FaHome size={32} />
      </div>
      <div className="menu-item">
        <FaCog size={32} />
      </div>
    </div>
  );
};

export default MenuBar;
