import { createBrowserRouter,RouterProvider, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Homepage';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Login from './Login';
import Signup from './Signup';
import CartPage from './CartPage';
import Footer from './Footer';
import AdminDashboard from './AdminDashboard';
import CategoriesPage from './pages/CategoriesPage';
// import PaymentPage from "./PaymentPage";
// import CategoriesPage from "./pages/CategoriesPage";
import SingleProductPage from "./pages/SingleProductPage";
import OrderSuccess from "./pages/OrderSuccess";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<> <Nav/><Home/>  </>
    },
    {
      path:"/Contact",
      element:<> <Nav/><Contact/>  </>
    },
    {
      path:"/About",
      element:<> <Nav/><About/>  </>
    },
    {
      path:"/Login",
      element:<> <Nav/><Login/>  </>
    },
    {
      path:"/Signup",
      element:<><Nav/><Signup/>  </>
    },
    {
      path:"/CartPage",
      element:<><Nav/><CartPage/>  </>
    },
    {
      path:"/AdminDashboard",
      element:<><Nav/><AdminDashboard/>  </>
    },
    {
      path:"/Footer",
      element:<><Nav/><Footer/>  </>
    },
    {
      path:"/CategoriesPage",
      element:<><Nav/><CategoriesPage/>  </>
    },
    {
      path:"/product/:id",
      element:<>{<SingleProductPage />}  </>
    },
    // {
    //   path:"/payment/:id",
    //   element:<>{<PaymentPage />}  </>
    // },
    {
      path:"/order-success",
      element:<>{<OrderSuccess />}  </>
    },

  ])
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>

    </>
  );
}


export default App;
