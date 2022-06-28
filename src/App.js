import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "alertifyjs/build/css/alertify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./component/Dashboard";
import LoginForm from "./component/LoginForm";
import RegistrationForm from "./component/RegistrationForm";
import Error from "./component/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
