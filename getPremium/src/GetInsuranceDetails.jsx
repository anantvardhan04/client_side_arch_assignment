import React, { useState } from 'react';
import tailwind from 'tailwindcss/tailwind.css';
import getPremiumStore from '../../getPremium/src/store.js';

const GetInsuranceDetails = () => {
    const [policyNumber, setPolicyNumber] = useState('');
    const [policyDetails, setPolicyDetails] = useState(null);
    // const [premium, setPremium] = getPremiumStore()
    const premium = getPremiumStore((state) => state.premium);
    const setPremium = getPremiumStore((state) => state.setPremium);

    const handleInputChange = (e) => {
        setPolicyNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Fetch policy details from an API or database
        // For demonstration, we'll use a static response
        let fetchedPolicyDetails;
        if (policyNumber === '123456') {
            fetchedPolicyDetails = {
            policyNumber: policyNumber,
            policyHolder: 'Anant Vardhan',
            coverage: 'Full Coverage',
            expiryDate: '2024-12-31',
            };
        } else if (policyNumber === '456789') {
            fetchedPolicyDetails = {
            policyNumber: policyNumber,
            policyHolder: 'Yatesh Kumar',
            coverage: 'Partial Coverage',
            expiryDate: '2023-11-30',
            };
        } else {
            setPremium(null);
            setPolicyDetails(null);
            alert('Error: Policy number not found');
            return;
        }
        setPremium(null);
        setPolicyDetails(fetchedPolicyDetails);
    };

    const calculatePremium = (e) => {
        e.preventDefault();
        if (policyDetails) {
            const workerCode = `
  // premiumWorker.js
self.onmessage = function(e) {
    const coverage = e.data;
    let premium;

    // Example calculation based on coverage
    switch (coverage) {
        case 'Full Coverage':
            premium = '$1000';
            break;
        case 'Partial Coverage':
            premium = '$500';
            break;
        default:
            premium = '$300';
            break;
    }

    self.postMessage(premium);
};
`;
                const blob = new Blob([workerCode], { type: 'application/javascript' });
                const blobURL = URL.createObjectURL(blob);
                        
                const premiumWorker = new Worker(blobURL);
                        
                        
                premiumWorker.postMessage(policyDetails.coverage);
                        
                premiumWorker.onmessage = function(e) {
                setPremium(e.data);
                premiumWorker.terminate();
            };
        }
    };

    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <b>Get Insurance Details</b>
            <form onSubmit={handleSubmit} className="mt-5">
                <label>
                    Policy Number:  
                    <input type="text" className="border border-gray-400 rounded-md p-1" value={policyNumber} onChange={handleInputChange} required />
                </label>
                <button type="submit" className="bg-blue-500 text-white rounded-md p-1 ml-2">Submit</button>
            </form><br></br>
            {policyDetails && (
                <div>
                    <b>Policy Details</b>
                    <p>Policy Number: {policyDetails.policyNumber}</p>
                    <p>Policy Holder: {policyDetails.policyHolder}</p>
                    <p>Coverage: {policyDetails.coverage}</p>
                    <p>Expiry Date: {policyDetails.expiryDate}</p>
                    <form onSubmit={calculatePremium} className="mt-5">
                        <button type="submit" className="bg-green-500 text-white rounded-md p-1 ml-2">Calculate Premium</button>
                    </form>
                    {premium !== null && <p>Premium: {premium}</p>}
                </div>
            )}
        </div>
    );
};

export default GetInsuranceDetails;