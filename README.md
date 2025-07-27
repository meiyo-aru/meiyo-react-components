# `meiyo-react-components`

A library of modern and accessible React components, built with TypeScript and Vite. Focused on providing high-quality, reusable UI blocks for your React applications.

---

## Features

* **Reusable Components:** A set of ready-to-use React components.
* **TypeScript Development:** Fully typed for safety and an improved developer experience.
* **Performant:** Built with [Vite](https://vitejs.dev/), ensuring fast builds and an agile development experience.
* **Robust Tests:** Test coverage with [Vitest](https://vitest.dev/) to ensure stability and reliability.
* **Interactive Documentation:** Developed and documented with [Storybook](https://storybook.js.org/), making component visualization and usage easy.
* **Easy to Integrate:** Minimalist and extensible design, allowing for easy customization and integration into any React project.

---

## Installation

You can install `meiyo-react-components` via npm or yarn:

```bash
npm install meiyo-react-components
# or
yarn add meiyo-react-components
# or
pnpm add meiyo-react-components
````

-----

## How to Use

Import components directly from the library and use them in your React applications.

```tsx
import React from 'react';
import { Button, Input } from 'meiyo-react-components'; // Change to your library's actual name

function MyApp() {
  return (
    <div>
      <Button onClick={() => alert('Clicked!')}>
        Click me
      </Button>
      <Input
        placeholder="Type something..."
        onChange={(e) => console.log(e.target.value)}
      />
      {/* Add more examples of your components here */}
    </div>
  );
}

export default MyApp;
```

-----

## Documentation (Storybook)

Explore all components, their properties (props), and usage examples in the interactive documentation on Storybook.

To start Storybook locally:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```

This will open Storybook in your browser (usually at `http://localhost:6006`).

-----

## Local Development

If you wish to contribute or test the library locally:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/meiyo-aru/meiyo-react-components.git](https://github.com/meiyo-aru/meiyo-react-components.git) # Update with your repository link
    cd meiyo-react-components
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Useful Scripts:**

      * **Start development mode (Vite):**
        ```bash
        npm run dev
        ```
        (This is primarily for testing the bundle rather than the library itself; Storybook is ideal for component development).
      * **Run tests:**
        ```bash
        npm test
        ```
      * **Build the library for production:**
        ```bash
        npm run build
        ```
      * **Build Storybook for deploy:**
        ```bash
        npm run build-storybook
        ```

-----

## Tests

Tests are written with [Vitest](https://vitest.dev/) and `@testing-library/react`. To run all tests:

```bash
npm test
```

-----

## Contribution

Contributions are always welcome\! Feel free to open issues, submit pull requests, or suggest improvements.

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/my-feature`).
3.  Make your changes and add tests.
4.  Ensure all tests pass and the linter shows no errors.
5.  Commit your changes (`git commit -am 'feat: Add new feature'`).
6.  Push your branch to GitHub (`git push origin feature/my-feature`).
7.  Open a Pull Request.

-----

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for more details.

-----

## Contact

Pedro Arthur Gregorio Abreu - [pedro.agb2004@gmail.com](mailto:pedro.agb2004@gmail.com)

GitHub Link: [https://github.com/meiyo-aru/meiyo-react-components](https://github.com/meiyo-aru/meiyo-react-components)

-----
