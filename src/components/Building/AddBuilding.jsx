import React, { useState } from "react";
import useAddBuildingMutation from "../../queries/useAddBuilding";

const AddBuilding = () => {
  const addBuildingMutation = useAddBuildingMutation();

  let [building, setBuilding] = useState({
    name: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addBuildingMutation.mutate({
      name: building.name,
      street_address: building.address,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={building.address}
        onChange={(e) => building.address = e.target.value}
        placeholder="Address"
      />
      <input
        type="text"
        value={building.name}
        onChange={(e) => building.name = e.target.name}
        placeholder="Name"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBuilding;
