import React from "react";

const CompareBar = ({ compareList, onClear, onRemove, onView }) => {
  if (compareList.length < 2) return null;

  return (
    <div className="bg-light p-3 border rounded mt-3">
      <h5>Compare Products</h5>
      <div className="d-flex gap-3">
        {compareList.map((p) => (
          <div key={p.id} className="d-flex align-items-center border p-2 rounded">
            <img src={p.image} alt={p.name} width="50" height="50" className="me-2" />
            <span>{p.name}</span>
            <button
              className="btn btn-sm btn-danger ms-2"
              onClick={() => onRemove(p.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <button className="btn btn-primary me-2" onClick={onView}>
          View Comparison
        </button>
        <button className="btn btn-outline-secondary" onClick={onClear}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default CompareBar;
