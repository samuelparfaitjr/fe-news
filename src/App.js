import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
import { UserContext } from "./context/User";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Views
import Home from "./views/Home";
import Users from "./views/Users";
import Single from "./views/Single";
import Error from "./views/Error";

function App() {
  const [user, setUser] = useState(null);
  const provider = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="view">
      <UserContext.Provider value={provider}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/articles/" element={<Home />} />
            <Route path="/articles/:articleId" element={<Single />} />
            <Route path="/users" element={<Users />} />
            <Route path="/topics/:slug" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
