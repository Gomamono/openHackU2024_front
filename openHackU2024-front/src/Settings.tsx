import React from 'react';
import MenuBar from './components/menuBar';

const Settings: React.FC = () => {
  return (
    <div>
      <h1>Settings</h1>
      <p>ここでユーザーの設定を変更することができます。</p>
      {/* 設定項目を追加してください */}
        <MenuBar />
    </div>
  );
};

export default Settings;
