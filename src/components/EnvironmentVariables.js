import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EnvironmentVariables = ({ environment }) => {
  const [variables, setVariables] = useState([]);
  const [newVariable, setNewVariable] = useState({ key: '', value: '', type: 'plain', scope: 'preview' });

  const handleAddVariable = () => {
    if (newVariable.key && newVariable.value) {
      setVariables([...variables, { ...newVariable, id: Date.now() }]);
      setNewVariable({ key: '', value: '', type: 'plain', scope: 'preview' });
    }
  };

  const handleDeleteVariable = (id) => {
    setVariables(variables.filter(v => v.id !== id));
  };

  return (
    <div className="bg-white shadow overflow-hidden rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Environment Variables - {environment}
        </h2>

        {/* Add New Variable Form */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
          <input
            type="text"
            placeholder="Variable Name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={newVariable.key}
            onChange={(e) => setNewVariable({ ...newVariable, key: e.target.value })}
          />
          <input
            type={newVariable.type === 'secret' ? 'password' : 'text'}
            placeholder="Variable Value"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={newVariable.value}
            onChange={(e) => setNewVariable({ ...newVariable, value: e.target.value })}
          />
          <select
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={newVariable.type}
            onChange={(e) => setNewVariable({ ...newVariable, type: e.target.value })}
          >
            <option value="plain">Plain Text</option>
            <option value="secret">Secret</option>
          </select>
          <select
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={newVariable.scope}
            onChange={(e) => setNewVariable({ ...newVariable, scope: e.target.value })}
          >
            <option value="preview">Preview</option>
            <option value="production">Production</option>
            <option value="development">Development</option>
          </select>
          <button
            type="button"
            onClick={handleAddVariable}
            className="col-span-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Variable
          </button>
        </div>

        {/* Variables List */}
        <div className="mt-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scope</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {variables.map((variable) => (
                <tr key={variable.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{variable.key}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {variable.type === 'secret' ? '••••••••' : variable.value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      variable.type === 'secret' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {variable.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{variable.scope}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDeleteVariable(variable.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

EnvironmentVariables.propTypes = {
  environment: PropTypes.oneOf(['preview', 'production', 'development']).isRequired,
};

export default EnvironmentVariables; 