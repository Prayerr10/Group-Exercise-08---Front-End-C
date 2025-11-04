import React from 'react';

function Evolution(props) {
  const { text = "Default Evolution Text" } = props;

  return (
    <div className="border p-3 m-2 bg-blue-50 rounded-md shadow-sm">
      <h4 className="font-semibold text-blue-700">{text}</h4>
      <p className="text-sm text-blue-600">Ini adalah komponen Evolution.</p>
    </div>
  );
}

export default Evolution;