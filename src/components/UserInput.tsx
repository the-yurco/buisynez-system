import React, { useState } from 'react';

type Props = {};

const UserInput = (props: Props) => {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10
	});

	const handleChange = ({ inputIdentifier, newValue }: any) => {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: newValue
			};
		});
	};

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="">Initial Investment</label>
					<input
						type="number"
						required
						value={userInput.initialInvestment}
						onChange={(e) =>
							handleChange({
								inputIdentifier: 'initialInvestment',
								newValue: e.target.value
							})
						}
					/>
				</p>
				<p>
					<label htmlFor="">Annual Investment</label>
					<input
						type="number"
						required
						value={userInput.annualInvestment}
						onChange={(e) =>
							handleChange({
								inputIdentifier: 'annualInvestment',
								newValue: e.target.value
							})
						}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="">Expected Return</label>
					<input
						type="number"
						required
						value={userInput.expectedReturn}
						onChange={(e) =>
							handleChange({
								inputIdentifier: 'expectedReturn',
								newValue: e.target.value
							})
						}
					/>
				</p>
				<p>
					<label htmlFor="">Duration</label>
					<input
						type="number"
						required
						value={userInput.duration}
						onChange={(e) =>
							handleChange({
								inputIdentifier: 'duration',
								newValue: e.target.value
							})
						}
					/>
				</p>
			</div>
		</section>
	);
};

export default UserInput;
