import React from 'react';

function TypeEffect(props) {
  const { text = "Default Type-Effect Text" } = props;

  return (
    <div className="border p-3 m-2 bg-green-50 rounded-md shadow-sm">
      <h4 className="font-semibold text-green-700">{text}</h4>
      <p className="text-sm text-green-600">Ini adalah komponen Type-Effect.</p>
    </div>
  );
}

export default TypeEffect;