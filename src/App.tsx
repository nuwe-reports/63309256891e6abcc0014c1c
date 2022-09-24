import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CharactersPage from "./pages/CharactersPage";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import AnonRoute from "./components/routes/AnonRoute";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AnonRoute>
              <LoginPage />
            </AnonRoute>
          }
        />
        <Route
          path="/characters/:page"
          element={
            <PrivateRoute>
              <CharactersPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
