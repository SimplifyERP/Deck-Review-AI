import React from "react";
import "./index.css";
import "./App.css";

import { FrappeProvider } from "frappe-react-sdk";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadDeck from "./Screens/UploadDeck";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <React.StrictMode>
        <Router>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <FrappeProvider>
            <Routes>
              <Route path="deck_review_ai/" element={<UploadDeck />} />
            </Routes>
          </FrappeProvider>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
