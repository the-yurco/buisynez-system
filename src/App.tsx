import React, { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

// Define the App component
function App() {
	// State hook for user input
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10
	});

	// Check if input duration is valid
	const inputIsValid = userInput.duration >= 1;

	// Handler function for input changes
	function handleChange(inputIdentifier: string, newValue: string) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: +newValue
			};
		});
	}

	return (
		// Render the Header, UserInput, and Results components
		<>
			<Header />
			<UserInput userInput={userInput} onChange={handleChange} />
			{!inputIsValid && (
				// Render a message if input duration is not valid
				<p className="center">Please enter a duration greater than zero.</p>
			)}
			{inputIsValid && <Results input={userInput} />}
		</>
	);
}

export default App;
