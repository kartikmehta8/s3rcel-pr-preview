import React from 'react';
import PropTypes from 'prop-types';

const ServiceLogos = ({ services }) => {
  return (
    <div className="flex justify-center space-x-8 mb-8">
      {services.map((service) => (
        <div key={service.name} className="flex flex-col items-center">
          <img
            src={service.logo}
            alt={service.name}
            className="w-16 h-16 object-contain"
          />
          <span className="mt-2 text-sm font-medium text-gray-900">
            {service.name}
          </span>
        </div>
      ))}
    </div>
  );
};

ServiceLogos.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceLogos; 