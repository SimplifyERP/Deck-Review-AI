import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./App.css";
// import App from "./App.jsx";
import { FrappeProvider } from "frappe-react-sdk";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadDeck from "./Screens/UploadDeck";
import "./Utils/IMLocalize";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>

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
);
