import React from 'react';

function Logo(props) {
  const { text = "Default Logo Text" } = props;

  return (
    <div className="border p-3 m-2 bg-yellow-50 rounded-md shadow-sm">
      <h4 className="font-semibold text-yellow-700">{text}</h4>
      <p className="text-sm text-yellow-600">Ini adalah komponen Logo.</p>
    </div>
  );
}

export default Logo;