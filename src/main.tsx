import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';
import ProjectsContent from './ProjectsContent.tsx';
import ContactContent from './ContactContent.tsx';
import MainContent from './MainContent.tsx';
import DotfilesContent from './DotfilesContent.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContent />
      },
      {
        path: "home",
        element: <MainContent />
      },
      {
        path: "projects",
        element: <ProjectsContent />
      },
      {
        path: "contact",
        element: <ContactContent />
      },
      {
        path: "dotfiles",
        element: <DotfilesContent />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
