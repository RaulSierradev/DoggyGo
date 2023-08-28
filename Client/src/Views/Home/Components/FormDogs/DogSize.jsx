function DogSize({ details, handleChange }) {
	return (
		<div className="pt-3 pb-3">
			<label htmlFor="size">Tamaño: </label>
			<div className="text-sm flex justify-between text-center mt-1">
				<label className="text-gray-900 px-3">
					<input
						type="radio"
						id="small"
						name="size"
						value="SMALL"
						checked={details.size === 'SMALL'}
						onChange={handleChange}
					/>{' '}
					Pequeño{' '}
					<span>
						<br />
						(3 - 10 Kg)
					</span>
				</label>
				<label className="text-gray-900 px-3">
					<input
						type="radio"
						id="medium"
						name="size"
						value="MEDIUM"
						checked={details.size === 'MEDIUM'}
						onChange={handleChange}
					/>{' '}
					Mediano{' '}
					<span>
						<br />
						(10 - 25 Kg)
					</span>
				</label>
				<label className="text-gray-900 px-3">
					<input
						type="radio"
						id="large"
						name="size"
						value="LARGE"
						checked={details.size === 'LARGE'}
						onChange={handleChange}
					/>{' '}
					Grande{' '}
					<span>
						<br />
						(25 - 45 Kg)
					</span>
				</label>
				<label className="text-gray-900 px-3">
					<input
						type="radio"
						id="giant"
						name="size"
						value="GIANT"
						checked={details.size === 'GIANT'}
						onChange={handleChange}
					/>{' '}
					Gigante{' '}
					<span>
						<br />
						(45+ Kg)
					</span>
				</label>
			</div>
		</div>
	);
}

export default DogSize;
