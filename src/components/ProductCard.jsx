const ProductCard = ({ product, onToggleCompare, isSelected }) => {
  return (
    <div className="col-md-4 mb-4">
      <div
        className={`card h-100 shadow-sm border-0 ${isSelected ? "border-primary border-2" : ""
          }`}
        style={{ transition: "transform 0.2s" }}
      >
        <div
          className="d-flex align-items-center justify-content-center bg-light"
          style={{ height: "250px", overflow: "hidden" }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title fw-bold">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
          <p className="card-text text-success fw-semibold">{product.price}</p>
          <ul className="small text-muted" style={{ listStyle: "none", paddingLeft: 0 }}>
            <li><strong>Memory:</strong> {product.memory}</li>
            <li><strong>Display:</strong> {product.displaySize}</li>
            <li><strong>Camera:</strong> {product.cameraMP}</li>
          </ul>
        </div>

        <div className="card-footer bg-white border-0">
          <button
            className="w-100 py-2 fw-semibold rounded-pill border-0"
            style={{
              backgroundColor: isSelected ? "#e63946" : "#0d6efd",
              color: "white",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
            onClick={() => onToggleCompare(product)}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = isSelected ? "#c1121f" : "#0b5ed7")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = isSelected ? "#e63946" : "#0d6efd")
            }
          >
            {isSelected ? " Remove from Compare" : "Add to Compare"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
