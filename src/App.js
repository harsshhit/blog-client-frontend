import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import "./index.css"; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 p-4 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
