import { useNavigate } from "react-router-dom";

const allEqual = (arr) => arr.every((v) => v === arr[0]);

const attributes = [
  { label: "Brand", key: "brand" },
  { label: "Price", key: "price" },
  { label: "Memory", key: "memory" },
  { label: "Display Size", key: "displaySize" },
  { label: "Camera (MP)", key: "cameraMP" }
];

const diffStyle = {
  background: "#fff3cd", 
};

const CompareView = ({ compareList, onClose, onRemove }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate("/");
  };

  return (
    <div className="mt-4">
      <h4>Compare Selected Products</h4>
      <table className="table table-bordered align-middle text-center">
        <thead>
          <tr>
            <th>Attribute</th>
            {compareList.map((p) => (
              <th key={p.id}>
                {p.name}
                <div style={{ height: 120 }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: "100px", height: "100px", objectFit: "contain" }}
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attributes.map(({ label, key }) => {
            const values = compareList.map((p) => p[key]);
            const highlight = !allEqual(values);
            return (
              <tr key={key}>
                <td>
                  <strong>{label}</strong>
                </td>
                {compareList.map((p) => (
                  <td
                    key={p.id}
                    style={highlight ? diffStyle : {}}
                  >
                    {p[key]}
                  </td>
                ))}
              </tr>

            );
          })}
          <tr>
            <td></td>
            {compareList.map((p) => (
              <td key={p.id} style={{ textAlign: "center" }}>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onRemove(p.id)}
                >
                  Remove
                </button>
              </td>
            ))}
          </tr>

        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={onClose}>
        Close Comparison
      </button>
    </div>
  )
}

export default CompareView;
