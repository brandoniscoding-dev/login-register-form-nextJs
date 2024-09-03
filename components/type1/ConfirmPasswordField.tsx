import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '../ui/input';

interface ConfirmPasswordFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const ConfirmPasswordField = ({ value, onChange, placeholder }: ConfirmPasswordFieldProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        type={visible ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className=" hover:border-blue-500 focus:border-blue-500"
      />
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        {visible ? <Eye /> : <EyeOff />}
      </button>
    </div>
  );
};

