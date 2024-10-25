
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routeConfig } from './shared/config/routeConfig.tsx';

export const router = createBrowserRouter(Object.values(routeConfig));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
