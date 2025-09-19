import { useState, useEffect } from "react";
import products from "./assets/products";
import ProductList from "./components/ProductList";
import CompareView from "./components/CompareView";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [compareList, setCompareList] = useState(() => {
    const saved = localStorage.getItem("compareList");
    return saved ? JSON.parse(saved) : [];
  });

  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("compareList", JSON.stringify(compareList));
  }, [compareList]);

  const toggleCompare = (product) => {
    if (compareList.some((p) => p.id === product.id)) {
      setCompareList(compareList.filter((p) => p.id !== product.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, product]);
    }
  };

  const handleRemoveFromCompare = (id) => {
    setCompareList(compareList.filter(p => p.id !== id));
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (


    <Router>
      <div className={darkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
        <div className="container py-4">
          <nav className="d-flex justify-content-between align-items-center mb-4">
            <Link to="/" className="text-decoration-underline fw-bold text-primary">
              Products
            </Link>

            <div className="d-flex align-items-center gap-3">
              {compareList.length >= 2 && (
                <Link to="/compare" className="btn btn-success">
                  Compare ({compareList.length})
                </Link>
              )}
              <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
            </div>
          </nav>

          <Routes>
            <Route
              path="/"
              element={<>
                <SearchBar query={query} onChange={setQuery} />
                <ProductList
                  products={filteredProducts}
                  compareList={compareList}
                  onToggleCompare={toggleCompare} />
              </>} />

            <Route
              path="/compare"
              element={
                compareList.length > 0
                  ? <CompareView
                    compareList={compareList}
                    onClose={() => setCompareList([])}
                    onRemove={handleRemoveFromCompare}
                  />
                  : <Navigate to="/" />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
