import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
// import {Homepage,Header,Products} from './components';
import Homepage from "./components/Homepage";
import Products from "./components/Products";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
// import { myProducts } from "./data";
import ChossenComponents from "./components/ChossenComponents";

const Router=createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    children:[
      { path: "/", element: <Homepage /> },
      {
        path: 'homepage',
        element:<Homepage/>
      },
      {
        path:'products',
        element:<Products/>,
      }
     ,
          {
            path:'products/:productId',
            element:<ChossenComponents/>
          }
      ,
      {
        path: "*",
        element: <NotFound />,
      },       
    ]
  }
])
function App() {
  

  return (
    <>
      
      <RouterProvider router={Router} />     
    </>
  )
}

export default App
