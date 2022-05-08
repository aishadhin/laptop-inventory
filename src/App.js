import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AddProduct from "./components/ManageInventory/AddProduct/AddProduct";
import ManageProduct from "./components/ManageInventory/ManageProduct";
import Updatep from "./components/ManageInventory/Update/Updatep";
import Myitems from "./components/My-Items/Myitems";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import Register from "./components/Register/Register";
import AuthContext from "./context/authContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContext>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route
              path="/manage-inventory"
              element={
                <PrivateRoute>
                  <ManageProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/update/:id"
              element={
                <PrivateRoute>
                  <Updatep />
                </PrivateRoute>
              }
            />
             <Route
              path="/add-product"
              element={
                <PrivateRoute>
                <AddProduct/>
                </PrivateRoute>
              }
            />
            <Route
              path="/my-product"
              element={
                <PrivateRoute>
                <Myitems/>
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
