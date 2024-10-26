import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hero from './components/hero';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
