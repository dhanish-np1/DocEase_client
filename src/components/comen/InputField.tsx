import { InputFieldProps } from "../../types/User";


const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-semibold text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 text-gray-900 bg-white border border-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out hover:shadow-xl"
        />
        <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
      </div>
    </div>
  );
};

export default InputField