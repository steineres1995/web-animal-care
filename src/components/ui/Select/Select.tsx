interface SelectProps {
  label: string;
  options: string[];
}

export const Select = (props: SelectProps) => {
  return (
    <div>
      <label>{props.label}</label>
      <select>
        <option value="">Selecciona una opción</option>
        {props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
