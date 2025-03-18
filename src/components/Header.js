import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-xl text-gray-500">
        {subtitle}
      </p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header; 