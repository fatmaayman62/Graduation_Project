import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut_choose_user from "./ChooseUserPage/LayOut";
import ChooseUserPage from "./ChooseUserPage/ChooseUserPage";

import LayOut from "./Components/LayOut/LayOut";
import Medicines from "./Components/Medicines/Medicines";
import My_medicine from "./Components/Pages/My_medicine";
import Order_history from "./Components/Pages/Order_history";
import Saved_address from "./Components/Pages/Saved_address";
import SettingsPage from "./Components/Pages/SettingsPage";
import Notification from "./Components/Pages/Notification"; 
import ContactUs from "./Components/Pages/ContactUs";
import ProfilePage from "./Components/Pages/ProfilePage";
import CounterShoppingListProvider from "./Components/Context/CounterShoppingListProvider";
import Prescription_Scanner from "./Components/Pages/Prescription_Scanner";

import Layout_Pharmacy from "./Components_Pharmacy/Pages/Layout_Pharmacy";
import Home from "./Components_Pharmacy/Pages/Home";
import InventoryManagement from "./Components_Pharmacy/Pages/InventoryManagement";
import OrdersPage from "./Components_Pharmacy/Pages/OrdersPage";
import ProfilePage_Pharmacy from "./Components_Pharmacy/Pages/ProfilePage";
import StockContextProvider from "./Components_Pharmacy/Contexts/StockContext";
import LowStockPage from "./Components_Pharmacy/Pages/LowStockPage";
import ContactUs_Pharmacy from "./Components_Pharmacy/Pages/ContactUs";
import PrescriptionScanner from "./Components_Pharmacy/Pages/read";
import Login from "./ChooseUserPage/Login";
import Register from "./ChooseUserPage/Register";
import ProtectedRouting from "./ChooseUserPage/ProtectedRouting";
import NotFound from "./NotFound/NotFound";




let router = createBrowserRouter([
  { path: "",
    element: <LayOut_choose_user />,
    children:[
      {index:true,element:<ChooseUserPage />},
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> }

    ]},
  {
    path: "user",
    element: <LayOut />,
    children: [
      { index: true, element: <ProtectedRouting><Medicines /></ProtectedRouting> },
      { path: "my_medicine", element: <ProtectedRouting><My_medicine /></ProtectedRouting> },
      { path: "order_history", element: <ProtectedRouting><Order_history /></ProtectedRouting> },
      { path: "saved_address", element: <ProtectedRouting><Saved_address /></ProtectedRouting> },
      { path: "prescription_scanner", element: <ProtectedRouting><Prescription_Scanner /></ProtectedRouting> },
      { path: "settings", element: <ProtectedRouting><SettingsPage /></ProtectedRouting> },
      { path: "notification", element: <ProtectedRouting><Notification /></ProtectedRouting> },
      { path: "contact-us", element: <ProtectedRouting><ContactUs /></ProtectedRouting> },
      { path: "profile", element: <ProtectedRouting><ProfilePage /></ProtectedRouting> }
    ]},
    {
    path: "pharmacy",
    element: <Layout_Pharmacy />,
    children: [
      { index: true, element: <ProtectedRouting><Home /></ProtectedRouting> },
      { path: "inventory-management", element: <ProtectedRouting><InventoryManagement /></ProtectedRouting> },
      { path: "orders", element: <ProtectedRouting><OrdersPage /></ProtectedRouting> },
      { path: "profile", element: <ProtectedRouting><ProfilePage_Pharmacy /></ProtectedRouting> },
      { path: "low-stock", element: <ProtectedRouting><LowStockPage /></ProtectedRouting> },
      { path: "contact-us", element: <ProtectedRouting><ContactUs_Pharmacy /></ProtectedRouting> },
      { path: "read", element: <ProtectedRouting><PrescriptionScanner /></ProtectedRouting> }
    ],
  },
   { path: "*", element: <NotFound /> },
]);
function App() {
  return ( 
      <StockContextProvider>
        <CounterShoppingListProvider>
          <RouterProvider router={router}></RouterProvider>
        </CounterShoppingListProvider>
      </StockContextProvider> 
  );
}

export default App;
