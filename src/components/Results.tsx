import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';

// Define the Results component with input prop
interface ResultsProps {
	input: any; // Update with a more specific type if possible
}

const Results: React.FC<ResultsProps> = ({ input }) => {
	// Calculate investment results based on the input
	const resultsData = calculateInvestmentResults(input);
	// Calculate initial investment
	const initialInvestment =
		resultsData[0].valueEndOfYear -
		resultsData[0].interest -
		resultsData[0].annualInvestment;

	return (
		// Render a table displaying investment results
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{/* Map through resultsData to render each row of the table */}
				{resultsData.map((yearData) => {
					// Calculate total interest and total amount invested for each year
					const totalInterest =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						initialInvestment;
					const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

					return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Results;
