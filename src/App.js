import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// Pages
import  {Home,Contact,Login,Register,Reset,Admin} from "./pages";
import Cart from "./pages/cart/Cart";

// Components
import  Header  from "./components/header/Header";
import  Footer  from "./components/footer/Footer";
import AdminOnlyRoute from './components/adminOnlyRoute/AdminOnlyRoute';
import ProductDetails from './components/product/productDetails/ProductDetails';
import CheckoutDetails from './pages/checkout/CheckoutDetails';
import Checkout from './pages/checkout/Checkout';
import CheckoutSuccess from './pages/checkout/CheckoutSuccess';
import OrderHistory from './pages/orderHistory/OrderHistory';
import OrderDetails from './components/admin/orderDetails/OrderDetails';
import ReviewProducts from "./components/reviewProducts/ReviewProducts";

// import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
// import ProductDetails from "./components/product/productDetails/ProductDetails";
// import Cart from "./pages/cart/Cart";
// import CheckoutDetails from "./pages/checkout/CheckoutDetails";
// import Checkout from "./pages/checkout/Checkout";
// import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
// import OrderHistory from "./pages/orderHistory/OrderHistory";
// import OrderDetails from "./pages/orderDetails/OrderDetails";
// import ReviewProducts from "./components/reviewProducts/ReviewProducts";
// import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/reset" element={<Reset/>} />
            

        <Route path="/admin/*" element={ 
          <AdminOnlyRoute>
          <Admin/>
          </AdminOnlyRoute>
          } />
  
  <Route path="/product-details/:id" element={<ProductDetails/>} />
    
  <Route path="/cart" element={<Cart/>} />
  <Route path="/checkout-details" element={<CheckoutDetails />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/checkout-success" element={<CheckoutSuccess />} />
  <Route path="/order-history" element={<OrderHistory />} />
  <Route path="/order-details/:id" element={<OrderDetails />} />
  <Route path="/review-product/:id" element={<ReviewProducts />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
