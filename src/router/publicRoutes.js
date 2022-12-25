import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import ProductDetail from "../pages/ProductDetail";
import ImageViewer from "../components/ImageViewer";
import CartPage from "../pages/CartPage";
import AddressPage from "../pages/addressPage";
import OrderSummary from "../pages/OrderSummary";
import signupPage from "../pages/signupPage";
import loginpage from "../pages/loginpage";
import otppage from "../pages/otppage";
import myprofile from "../pages/myprofile";
import paymentpage from "../pages/paymentpage";
import home2 from "../pages/Home2";
import sellerProfile from "../pages/sellerProfile"
export const publicRoutes = [
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/product",
    component: ProductDetail,
  },
  {
    path: "/ui/image",
    component: ImageViewer,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/address",
    component: AddressPage,
  },

  {
    path: "/ordersummary",
    component: OrderSummary,
  },

  {
    path: "/signuppage",
    component: signupPage,
  },

  {
    path: "/loginpage",
    component: loginpage,
  },

  {
    path: "/otppage",
    component: otppage,
  },

  {
    path:"/myprofile",
    component: myprofile,
  },

  {
    path: "/paymentpage",
    component: paymentpage,
  },
{
  path:"/home2",
  component: home2,
},

{
  path:"/sellerprofile",
  component: sellerProfile,
}

];
