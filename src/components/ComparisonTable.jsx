import React from "react";

const ComparisonTable = ({ compareList, onRemove }) => {
  if (compareList.length < 2) return null;

  const attributes = ["brand", "price", "features"];

  return (
    <div className="table-responsive mt-4">
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>Attribute</th>
            {compareList.map((p) => (
              <th key={p.id}>
                {p.name}
                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => onRemove(p.id)}
                >
                  X
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attributes.map((attr) => (
            <tr key={attr}>
              <td><strong>{attr}</strong></td>
              {compareList.map((p) => (
                <td key={p.id}>
                  {attr === "features" ? (
                    <ul className="list-unstyled">
                      {p.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  ) : (
                    p[attr]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
