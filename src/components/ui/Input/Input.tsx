interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({ label, type, name, value, onChange }: InputProps) => {
  return (
    <div className="pb-2.5">
      <label className="block mb-2 font-bold text-gray-900" htmlFor={name}>
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
