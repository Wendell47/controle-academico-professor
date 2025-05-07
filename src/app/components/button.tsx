type Props = React.ComponentProps<"button"> & {
	title: string;
};

export default function Button({ title, ...rest }: Props) {
	return (
		<button
			className="bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 shadow-xl drop-shadow-blue-900 transition duration-300 ease-in-out w-full focus:outline-none focus:ring-3 focus:ring-green-500/50"
			type="button"
			{...rest}
		>
			{title}
		</button>
	);
}
