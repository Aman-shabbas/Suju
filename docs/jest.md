# 📘 Testing with Jest

This document explains the usage of **Jest** in this project, why we use it, and how it is configured.

---

## 🧾 What is Jest?

[Jest](https://jestjs.io/) is a JavaScript testing framework maintained by Meta.  
It is commonly used in React projects for:

- Unit testing individual functions/components  
- Integration testing multiple components together  
- Snapshot testing UI rendering  
- Running tests in a simulated browser environment (`jsdom`)  

---

## 🎯 Role of Jest in this Project

In this project, Jest is responsible for:  
- Ensuring that React components render as expected.  
- Catching bugs early by running unit tests automatically.  
- Providing a simple command (`npm test`) to execute all test files.  

This helps us maintain reliable code as the project grows.

---

## 🔧 How Jest is Used Here

1. **Dependencies installed**  
   ```bash
   npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/preset-react
   ```

2. **Babel configured** (so Jest can understand JSX and modern JavaScript).  
   File: `babel.config.js`  
   ```js
   module.exports = {
     presets: [
       ["@babel/preset-env", { targets: { node: "current" } }],
       ["@babel/preset-react", { runtime: "automatic" }]
     ]
   };
   ```

3. **Jest configured** in `jest.config.js`  
   (explained line by line below).

4. **Test files** are created alongside components or inside a `__tests__` folder.  
   Example: `App.test.jsx`.

5. **Running tests**:  
   ```bash
   npm test
   ```

---

## ⚙️ Jest Configuration Explained

File: **`jest.config.js`**

```js
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\.[jt]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"]
};
```

### Explanation:
- **`testEnvironment: "jsdom"`**  
  - Tells Jest to simulate a browser environment using `jsdom`.  
  - Required because React components expect DOM APIs (`document`, `window`, etc.).

- **`transform`**  
  ```js
  transform: {
    "^.+\.[jt]sx?$": "babel-jest"
  }
  ```  
  - This tells Jest:  
    - If a file ends with `.js`, `.jsx`, `.ts`, or `.tsx`,  
    - Use **`babel-jest`** to transform it into plain JavaScript.  
  - Without this, Jest cannot understand JSX syntax.

- **`moduleFileExtensions: ["js", "jsx"]`**  
  - Defines which file extensions Jest should look for when importing modules.  
  - Ensures that both `.js` and `.jsx` files are recognized during testing.

---

## ✅ Example Test

```jsx
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello world", () => {
  render(<App />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
```

---

## 📎 Summary
- Jest is used for testing React components and JS functions.  
- It works with Babel to understand modern JS/JSX.  
- Tests run in a simulated browser (`jsdom`).  
- Configuration is minimal but powerful, allowing tests to integrate smoothly into our workflow.  
