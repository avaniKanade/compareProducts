import React from "react";
import { useNavigate } from "react-router-dom";

const CompareView = ({ compareList, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();          // still clears the compare list if you want
    navigate("/");      // go back to Products page
  };

  return (
    <div className="mt-4">
      <h4>Compare Selected Mobile Phones</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Attribute</th>
            {compareList.map((p) => (
              <th key={p.id}>{p.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Image Row */}
          <tr>
            <td>Image</td>
            {compareList.map((p) => (
              <td key={p.id}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: "120px", height: "120px", objectFit: "contain" }}
                />
              </td>
            ))}
          </tr>

          <tr>
            <td>Brand</td>
            {compareList.map((p) => (
              <td key={p.id}>{p.brand}</td>
            ))}
          </tr>
          <tr>
            <td>Price</td>
            {compareList.map((p) => (
              <td key={p.id}>{p.price}</td>
            ))}
          </tr>
          <tr>
            <td>Features</td>
            {compareList.map((p) => (
              <td key={p.id}>
                <ul>
                  {p.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={handleClose}>
        Close Comparison
      </button>
    </div>
  );
};

export default CompareView;
