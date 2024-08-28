import React from 'react';
import PasswordInput from './components/passwordInput';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>ホーム画面だよ</p>
            <p>やあ</p>
            <PasswordInput />
        </div>
    );
};

export default Home;