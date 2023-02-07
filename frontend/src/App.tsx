import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './TodoApp/RootLayout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
