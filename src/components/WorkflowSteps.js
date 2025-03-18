import React from 'react';
import PropTypes from 'prop-types';

const WorkflowSteps = ({ steps }) => {
  return (
    <div className="prose prose-indigo mx-auto">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">
        How It Works
      </h2>
      <ul className="bg-gray-50 rounded-md p-4 space-y-2 text-gray-600">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white mr-2 flex-shrink-0">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

WorkflowSteps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkflowSteps; 