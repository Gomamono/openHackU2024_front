import React from 'react';
import { FaHome, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MenuBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-bar">
      <div className="menu-item" onClick={() => navigate('/')}>
        <FaHome size={32} />
      </div>
      <div className="menu-item" onClick={() => navigate('/settings')}>
        <FaCog size={32} />
      </div>
    </div>
  );
};

export default MenuBar;
