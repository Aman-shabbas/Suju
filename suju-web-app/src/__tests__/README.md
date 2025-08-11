# Testing with Jest

This directory contains tests for the suju-web-app React application.

## Running Tests

### Install dependencies
```bash
npm install
```

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm run test:watch
```

### Run tests with coverage
```bash
npm run test:coverage
```

## Test Structure

- `setupTests.js` - Global test setup and configuration
- `__mocks__/` - Mock files for static assets
- Component tests should be placed in `__tests__/` folders alongside the components

## Writing Tests

- Use descriptive test names with `describe` and `test` blocks
- Import `@testing-library/react` for component testing utilities
- Use `@testing-library/jest-dom` for additional matchers
- Test user interactions with `@testing-library/user-event`

## Example Test

```jsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  test('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```
