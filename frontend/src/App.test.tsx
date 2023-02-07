import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import RootLayout from './TodoApp/RootLayout';

describe('App', () => {
  it('"/" routes to the homepage of the app', () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <RootLayout />,
      },
    ]);

    render(
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('hello world');
  });
});
