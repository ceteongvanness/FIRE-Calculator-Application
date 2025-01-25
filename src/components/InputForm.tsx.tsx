import React, { useState } from 'react';
import axios from 'axios';

interface FireCalculatorInputs {
  currentAge: number;
  currentAnnualIncome: number;
  currentSavings: number;
  annualExpenses: number;
  expectedReturns: number;
  retirementAge: number;
  expectedRetirementSpending: number;
}

export default function FireCalculator() {
  const [inputs, setInputs] = useState<FireCalculatorInputs>({
    currentAge: 30,
    currentAnnualIncome: 80000,
    currentSavings: 50000,
    annualExpenses: 40000,
    expectedReturns: 7,
    retirementAge: 45,
    expectedRetirementSpending: 50000
  });

  const [calculationResult, setCalculationResult] = useState<{
    requiredSavings: number;
    yearsToFIRE: number;
    monthlyContributionNeeded: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  const calculateFIRE = () => {
    const yearsToRetirement = inputs.retirementAge - inputs.currentAge;
    const annualContributionNeeded = inputs.expectedRetirementSpending * 25;
    const currentProjectedSavings = inputs.currentSavings * 
      Math.pow(1 + inputs.expectedReturns/100, yearsToRetirement);
    
    const requiredSavings = Math.max(0, annualContributionNeeded - currentProjectedSavings);
    const monthlyContributionNeeded = requiredSavings / (yearsToRetirement * 12);

    setCalculationResult({
      requiredSavings,
      yearsToFIRE: yearsToRetirement,
      monthlyContributionNeeded
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">FIRE Calculator</h1>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        calculateFIRE();
      }}>
        {Object.keys(inputs).map((key) => (
          <div key={key} className="mb-4">
            <label className="block mb-2 capitalize">
              {key.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="number"
              name={key}
              value={inputs[key as keyof FireCalculatorInputs]}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate FIRE
        </button>
      </form>

      {calculationResult && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-bold">Calculation Results</h2>
          <p>Years to FIRE: {calculationResult.yearsToFIRE}</p>
          <p>Required Additional Savings: ${calculationResult.requiredSavings.toFixed(2)}</p>
          <p>Monthly Contribution Needed: ${calculationResult.monthlyContributionNeeded.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}