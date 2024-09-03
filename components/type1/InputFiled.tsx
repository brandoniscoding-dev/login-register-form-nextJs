import { Input } from "../ui/input"; // Adjust the import path as necessary

interface InputFieldProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ type, value, placeholder, onChange }: InputFieldProps) => {
  return (
    <div className="relative w-full">
      <span className="absolute left-0 text-gray-500 pointer-events-none">
        {placeholder}
      </span>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder="" 
        className="w-full pl-16 border-b border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

