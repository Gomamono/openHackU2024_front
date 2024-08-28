import React from 'react';

// Propsの型を定義
interface PasswordInputProps {
  pass: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const setDisplayName: React.FC<PasswordInputProps> = ({ pass, onChange, disabled }) => {
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder={display_name}
        onChange={onChange}
        value={pass}
      />
      <button>変更</button>
    </div>
  );
};

export default setDisplayName;
