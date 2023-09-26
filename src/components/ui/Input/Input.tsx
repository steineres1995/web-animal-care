interface InputProps {
	label: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({ label, type, name, value, onChange }: InputProps) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} value={value} onChange={onChange} />
		</div>
	)
}
