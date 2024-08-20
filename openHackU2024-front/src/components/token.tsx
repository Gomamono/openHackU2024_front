// src/components/SpotifyAuth.tsx

import React, { useState, useEffect } from 'react';
import Login from './Login';
import LoggedIn from './LoggedIn'
import { getTokenFromUrl } from '../hooks/Spotify';

// トークンの型を定義
type Token = string | null;

const SpotifyAuth: React.FC = () => {
  const [token, setToken] = useState<Token>(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log(hash);

    // URLのハッシュをクリア
    window.location.hash = '';

    const accessToken = hash?.access_token;

    if (accessToken) {
      setToken(accessToken);
    }

    console.log('I HAVE A TOKEN', accessToken);
  }, []);

  return (
    <div>
      {token ? <LoggedIn /> : <Login />}
    </div>
  );
};

export default SpotifyAuth;
        