import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PublicLayout from "./components/layouts/PublicLayout";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <PublicLayout>
        <SearchPage />
      </PublicLayout>
    </>
  );
}

export default App;
