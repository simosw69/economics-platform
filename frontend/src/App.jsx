import { createInertiaApp } from '@inertiajs/inertia-react';
import { createRoot } from 'react-dom/client';
import React from 'react';

createInertiaApp({
  resolve: name => require(`./Pages/${name}`).default,
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
