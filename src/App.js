import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import "alertifyjs/build/css/alertify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./component/Dashboard";
import LoginForm from "./component/LoginForm";
import RegistrationForm from "./component/RegistrationForm";
import Error from "./component/Error";
import Product from "./component/Product";
import ProductList from "./component/ProductList";
import ProtectedRout from "./component/ProtectedRout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRout Authentication={LoginForm} />}
          />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route
            path="/dashboard"
            element={<ProtectedRout Authentication={Dashboard} />}
          />
          <Route
            path="/product"
            element={<ProtectedRout Authentication={Product} />}
          />
          <Route
            path="/product/:slug"
            element={<ProtectedRout Authentication={ProductList} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
