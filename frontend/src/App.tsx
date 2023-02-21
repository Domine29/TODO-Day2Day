import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './TodoApp/RootLayout';
import './index.css';
import { loader as tasksLoader } from './TodoApp/TaskSection/TaskSection';

const router = createBrowserRouter([
  {
    path: '/day2day',
    element: <RootLayout />,
    loader: tasksLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
