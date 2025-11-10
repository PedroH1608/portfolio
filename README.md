# Personal Portfolio

This is my personal portfolio website, built to showcase my skills, projects, and professional experience as a Full Stack Developer.

## Features

*   **Responsive Design**: Adapts to different screen sizes, from mobile to desktop.
*   **Theme Toggle**: Switch between light and dark modes.
*   **Internationalization (i18n)**: Content available in both English and Portuguese.
*   **Dynamic Sections**: Includes sections for an introduction, education, skills, projects, and contact information.
*   **Interactive UI**: Features hover effects and smooth transitions for a better user experience.

## Tech Stack

*   **Framework**: [React](https://react.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Internationalization**: [i18next](https://www.i18next.com/)

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## Project Structure

The project is organized using a component-based architecture:

```
/src
|-- /components
|   |-- /molecules
|   |-- /organisms
|-- /contexts
|-- /data
|-- /styles
|-- App.tsx
|-- main.tsx
|-- i18n.ts
```

*   `components`: Contains reusable React components, categorized into `molecules` and `organisms`.
*   `contexts`: Manages global state, such as the theme (`ThemeContext.tsx`).
*   `data`: Holds static data, like the list of skills.
*   `styles`: Includes global CSS and Tailwind CSS configuration.
*   `i18n.ts`: Configures the internationalization library with translations.