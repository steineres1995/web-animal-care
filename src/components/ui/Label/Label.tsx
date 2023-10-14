interface LabelProps {
	text: string;
	htmlFor?: string;
}

export const Label = ({ text }: LabelProps) => {
	return (
		<label className="block mb-2 font-bold text-gray-900" htmlFor={text}>
			{text}
		</label>
	);
}