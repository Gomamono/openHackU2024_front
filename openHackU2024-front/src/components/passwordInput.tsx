// いろいろあってるか怪しい
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Propsの型を定義
interface PasswordInputProps {
  pass: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ pass, onChange, disabled }) => {
  const navigate = useNavigate();

  const onClickShare = () => {
    navigate('/Share');
  };

  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="あいことばを入力"
        onChange={onChange}
        value={pass}
      />
      <button onClick={onClickShare}>共有する</button>
    </div>
  );
};

export default PasswordInput;
