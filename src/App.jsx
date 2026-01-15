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
import NotFound from "./Components/NotFound/NotFound";
import ContactUs from "./Components/Pages/ContactUs";
import ProfilePage from "./Components/Pages/ProfilePage";
import CounterShoppingListProvider from "./Components/Context/CounterShoppingListProvider";
import Prescription_Scanner from "./Components/Pages/Prescription_Scanner";

import Layout_Pharmacy from "./Components_Pharmacy/Pages/Layout_Pharmacy";
import Home from "./Components_Pharmacy/Pages/Home";
import InventoryManagement from "./Components_Pharmacy/Pages/InventoryManagement";
import ModeContextProvider from "./Components_Pharmacy/Contexts/ThemeContext";
import OrdersPage from "./Components_Pharmacy/Pages/OrdersPage";
import ProfilePage_Pharmacy from "./Components_Pharmacy/Pages/ProfilePage";
import StockContextProvider from "./Components_Pharmacy/Contexts/StockContext";
import LowStockPage from "./Components_Pharmacy/Pages/LowStockPage";
import ContactUs_Pharmacy from "./Components_Pharmacy/Pages/ContactUs";
import PrescriptionScanner from "./Components_Pharmacy/Pages/read";

let router = createBrowserRouter([
  { path: "",
    element: <LayOut_choose_user />,
    children:[
      {index:true,element:<ChooseUserPage />}
    ]},
  {
    path: "user",
    element: <LayOut />,
    children: [
      { index: true, element: <Medicines /> },
      { path: "my_medicine", element: <My_medicine /> },
      { path: "order_history", element: <Order_history /> },
      { path: "saved_address", element: <Saved_address /> },
      { path: "prescription_scanner", element: <Prescription_Scanner /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "notification", element: <Notification /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "*", element: <NotFound /> },
    ]},
    {
    path: "pharmacy",
    element: <Layout_Pharmacy />,
    children: [
      { index: true, element: <Home /> },
      { path: "inventory management", element: <InventoryManagement /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "profile", element: <ProfilePage_Pharmacy /> },
      { path: "low-stock", element: <LowStockPage /> },
      { path: "contact-us", element: <ContactUs_Pharmacy /> },
      { path: "read", element: <PrescriptionScanner /> },
    ],
  },
]);
function App() {
  return (
    <ModeContextProvider>
      <StockContextProvider>
        <CounterShoppingListProvider>
          <RouterProvider router={router}></RouterProvider>
        </CounterShoppingListProvider>
      </StockContextProvider>
    </ModeContextProvider>
  );
}

export default App;
