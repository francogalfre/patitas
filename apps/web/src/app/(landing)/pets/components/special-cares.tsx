const SpecialCares = ({ specialCares }: { specialCares: string }) => {
	return (
		<div>
			<hr className="pb-6" />
			<h2 className="text-xl font-poppins pb-3">Cuidados especiales</h2>
			<p className="text-gray-500 dark:text-gray-400">{specialCares}</p>
		</div>
	);
};

export default SpecialCares;
