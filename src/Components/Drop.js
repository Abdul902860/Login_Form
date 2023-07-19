import React, { useState, useEffect } from 'react';

const DropdownComponent = () => {
  // State to hold the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Key for local storage
  const storageKey = 'selectedValue';

  // Function to handle dropdown change
  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);

    // Save the selected value to local storage
    localStorage.setItem(storageKey, selectedOption);
  };

  // Load the selected value from local storage on component mount
  useEffect(() => {
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue) {
      setSelectedValue(storedValue);
    }
  }, []);

  // Dropdown options
  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
      <h2>Dropdown Component</h2>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        {dropdownOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedValue && <p>Selected: {selectedValue}</p>}
    </div>
  );
};

export default DropdownComponent;
