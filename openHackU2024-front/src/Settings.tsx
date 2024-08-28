import React from 'react';
import Login from './components/Login';
import setDisplayName from './components/setDisplayName';

const Settings: React.FC = () => {
  return (
    <div>
      <h1>Settings</h1>
      <p>ここでユーザーの設定を変更することができます。</p>
      <setDisplayName />
      <Login />
    </div>
  );
};

export default Settings;
