import type { Component } from 'solid-js';

import logo from './logo.svg';

const App: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
      <header class="flex flex-col items-center justify-center text-center">
        {/* rotate animation */}
        <img src={logo} class="h-96 pointer-events-none" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class="text-blue-500"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
