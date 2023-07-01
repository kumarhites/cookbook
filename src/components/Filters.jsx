import React from "react";

const Filters = () => {
  const handleFilterSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center p-5">
      <div className="text-lg font-bold leading-3">Filter: </div>
      <form onSubmit={handleFilterSubmit}></form>
    </div>
  );
};

export default Filters;
