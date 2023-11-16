import React from 'react';

// Define the UserInput component with onChange and userInput props
interface UserInputProps {
	onChange: (inputIdentifier: string, newValue: string) => void;
	userInput: any; // Update with a more specific type if possible
}

const UserInput: React.FC<UserInputProps> = ({ onChange, userInput }) => {
	return (
		// Render the user input section with input fields for initial investment, annual investment, expected return, and duration
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					{/* Input field for initial investment with value and onChange handlers */}
					<input
						type="number"
						required
						value={userInput.initialInvestment}
						onChange={(event) =>
							onChange('initialInvestment', event.target.value)
						}
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					{/* Input field for annual investment with value and onChange handlers */}
					<input
						type="number"
						required
						value={userInput.annualInvestment}
						onChange={(event) =>
							onChange('annualInvestment', event.target.value)
						}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					{/* Input field for expected return with value and onChange handlers */}
					<input
						type="number"
						required
						value={userInput.expectedReturn}
						onChange={(event) => onChange('expectedReturn', event.target.value)}
					/>
				</p>
				<p>
					<label>Duration</label>
					{/* Input field for duration with value and onChange handlers */}
					<input
						type="number"
						required
						value={userInput.duration}
						onChange={(event) => onChange('duration', event.target.value)}
					/>
				</p>
			</div>
		</section>
	);
};

export default UserInput;
