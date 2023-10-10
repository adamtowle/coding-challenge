import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For custom matchers like toHaveTextContent
import Note from "../note";

describe('Note component', () => {
  const sampleProps = {
    dateTime: '2023-09-24T07:29:40.382Z',
    user: 'test user',
    content: 'test content',
  };

  it('should render the component with the test props', () => {
    const { getByText } = render(<Note {...sampleProps} />);
    expect(getByText(sampleProps.user)).toHaveTextContent('test user');
    expect(getByText(sampleProps.content)).toHaveTextContent('test content');
    expect(getByText(sampleProps.dateTime)).toHaveTextContent('2023-09-24T07:29:40.382Z');
  });
});
