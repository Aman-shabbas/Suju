# Frontend Tests

All frontend tests are located in this `tests/` folder, outside of `src/`.

## Structure
```
tests/
├── components/           # Component tests
│   ├── App.test.jsx
│   ├── ChatBox.test.jsx
│   ├── ActionInput.test.jsx
│   └── App.integration.test.jsx
├── __mocks__/           # Mock files
│   └── fileMock.js
├── setupTests.js        # Global test setup
└── README.md            # This file
```

## Running
```bash
npm test
# or
npm run test:watch
# or with coverage
npm run test:coverage
```

## Notes
- Tests import components from `src/` via relative paths (e.g., `../../src/App`)
- Jest is configured to look for tests in `tests/`
- Global setup is in `tests/setupTests.js`
- All test-related files are now centralized in the `tests/` folder
