# Pytest Documentation

[🏠 Home](Home) | [📖 Users' Guide](Users-Guide) | [🛠 Developers' Guide](Developers'-Guide) | [📚 Tools & Services](Tools-and-Services) | [📓 Project Roadmap](Project-Roadmap)

This document explains the role of **pytest** in this project, how it is configured using `pytest.ini`, and how to run tests efficiently.

---

### 1. What is Pytest?
---
Pytest is a powerful testing framework for Python that allows writing **simple unit tests** as well as **complex functional tests**.  
It provides:
- Easy-to-write test cases with `assert` statements.
- Automatic test discovery.
- Fixtures for managing setup/teardown.
- Plugins and markers for advanced testing needs.

---

### 2. Why are we using Pytest in this project?
---
In this chat app project, pytest is used because:
- **Simplicity**: Test files are automatically discovered based on naming conventions.
- **Readability**: Tests use plain `assert` statements instead of verbose unittest syntax.
- **Flexibility**: Supports unit, integration, and slow tests.
- **Customizability**: Can be extended with plugins and markers.

---

### 3. Pytest Configuration (`pytest.ini`)
---
The project uses a `pytest.ini` file to define consistent rules for test discovery, output formatting, and test markers.

```ini
[tool:pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
addopts = 
    -v
    --tb=short
    --strict-markers
    --disable-warnings
markers =
    slow: marks tests as slow (deselect with '-m "not slow"')
    integration: marks tests as integration tests 
```
### 4. Explanation of Configuration
---

#### 📂 Test Discovery
- `testpaths = tests`
    - Pytest will look for tests inside the `tests/` directory.
- `python_files = test_*.py`
    - Only files starting with `test_` will be recognized as test files.
- `python_classes = Test*`
    - Only classes starting with `Test` will be collected as test classes.
- `python_functions = test_*`
    - Only functions starting with `test_` will be collected as test functions.

This ensures that test discovery is consistent across the project.

---

#### ⚙️ Addopts (Default Options)
- `-v` → Enables verbose output (shows individual test names).
- `--tb=short` → Shows shorter, cleaner tracebacks on failure.
- `--strict-markers` → Prevents accidental use of undefined markers.
- `--disable-warnings` → Hides warnings in test output (makes logs cleaner).

---

#### 🏷️ Markers
- `slow`
    - Marks tests that are slow to run.
    - Example usage:
      ```python
      import pytest
  
      @pytest.mark.slow
      def test_large_computation():
          ...
      ```
    - Run all tests except slow ones:
      ```bash
      pytest -m "not slow"
      ```

- `integration`
    - Marks integration tests (tests that involve multiple components).
    - Example usage:
      ```python
      import pytest
  
      @pytest.mark.integration
      def test_api_call():
          ...
      ```
    - Run only integration tests:
      ```bash
      pytest -m integration
      ```

---

### 5. Running Tests
---

- Run all tests:
  ```bash
  pytest


### Run with Verbose Output
```bash
pytest -v
```

### Run Only Slow Tests
```bash
pytest -m slow
```

### Run Only Integration Tests
```bash
pytest -m integration
```

### Run all tests except Slow Tests
```bash
pytest -m "not slow"
```