import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  const defaultProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
  };

  it('renders title and subtitle', () => {
    render(<Header {...defaultProps} />);
    
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    render(<Header {...defaultProps} />);
    
    const title = screen.getByText(defaultProps.title);
    const subtitle = screen.getByText(defaultProps.subtitle);
    
    expect(title).toHaveClass('text-4xl', 'font-extrabold', 'text-gray-900');
    expect(subtitle).toHaveClass('text-xl', 'text-gray-500');
  });
}); 