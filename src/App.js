import './App.css';
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { Routes, Route } from 'react-router-dom';
import Login from './Components/login-page/Login';
import OtpPage from './Components/otp-page/otp-page';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
