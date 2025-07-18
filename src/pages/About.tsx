const About = () => {
  return (
    <>
      <p className="font-bold mb-2">About</p>
      <div className="text-sm font-serif">
        <p>
          <span className="font-bold">1️⃣ React</span>
          <br />A JavaScript library for building UI with component-based
          architecture. Uses JSX (JavaScript + XML-like syntax). Renders
          efficiently using a virtual DOM. Encourages component reusability and
          composition.
        </p>
        <p>
          <span className="font-bold">2️⃣ Redux </span>
          <br />A predictable state management library for React. Uses a single
          store for global state. Actions describe what happened. Reducers
          specify how state changes in response. Helps manage complex state
          across deeply nested components. Modern usage typically integrates
          with Redux Toolkit (RTK) for simplicity.{" "}
        </p>
        <p>
          <span className="font-bold">3️⃣ React Hooks</span> <br />
          Introduced in React 16.8, enabling state and lifecycle features in
          functional components. useState: local component state. useEffect:
          side effects like data fetching. useContext: consume context easily.
          useReducer: alternative to useState for complex state. Custom hooks
          allow encapsulating reusable logic cleanly.
        </p>
        <p>
          <span className="font-bold">4️⃣ React Router</span>
          <br /> Client-side routing for React. Enables multi-page navigation
          without reloading. Provides: BrowserRouter or HashRouter for routing
          context. Routes and Route for defining paths and their components.
          useNavigate, useParams, useLocation for programmatic navigation and
          reading route state.{" "}
        </p>
        <p>
          <span className="font-bold">5️⃣ RTK Query</span> <br />A powerful data
          fetching and caching tool built into Redux Toolkit. Handles data
          fetching, caching, re-fetching, and cache invalidation automatically.
          Reduces boilerplate of manual Redux thunk usage for API calls.
          Example: js Copy Edit const Keeps server data in sync with UI state
          easily.{" "}
        </p>
        <p>
          <span className="font-bold">6️⃣ Tailwind CSS</span>
          <br />A utility-first CSS framework: Use classes like p-4,
          text-center, bg-blue-500 for styling. Responsive, fast to prototype,
          and enforces consistency. Can be extended with your own design tokens
          and themes. Example: html Copy Edit
        </p>
        <p>
          <span className="font-bold">7️⃣ daisyUI</span>
          <br />A component library built on top of Tailwind CSS. Provides
          ready-made, accessible, and themeable UI components (buttons, modals,
          cards) using Tailwind utilities. Supports dark mode, themes, and color
          schemes easily. Allows you to build beautiful UIs without leaving
          Tailwind’s workflow.
        </p>
      </div>
    </>
  );
};

export default About;
