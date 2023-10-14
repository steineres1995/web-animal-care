interface SelectProps {
  label: string;
  options: string[];
}

//TODO: AGREGAR COMO MANEJAR EL CAMBIO DEL VALUE

export const Select = (props: SelectProps) => {
  return (
    <div className="py-2">
      <label className="px-2 font-bold">{props.label}</label>
      <select className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
        <option value="">Selecciona una opción</option>
        {props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
