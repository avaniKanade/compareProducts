import React from "react";

const ProductCard = ({ product, onToggleCompare, isSelected }) => {
  return (
    <div className="col-md-4 mb-4">
      <div
        className={`card h-100 shadow-sm border-0 ${isSelected ? "border-primary border-2" : ""
          }`}
        style={{ transition: "transform 0.2s" }}
      >
        {/* Image wrapper */}
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

        {/* Card body */}
        <div className="card-body">
          <h5 className="card-title fw-bold">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
          <p className="card-text text-success fw-semibold">{product.price}</p>
          <ul className="small text-muted">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* Card footer */}
        <div className="card-footer bg-white border-0">
          {/* <button
            className={`btn w-100 ${
              isSelected ? "btn-danger" : "btn-outline-primary"
            }`}
            onClick={() => onToggleCompare(product)}
          >
            {isSelected ? "Remove" : "Add to Compare"}
          </button> */}
          <button
            className="w-100 py-2 fw-semibold rounded-pill border-0"
            style={{
              backgroundColor: isSelected ? "#e63946" : "#0d6efd", // Red for remove, Blue for add
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
