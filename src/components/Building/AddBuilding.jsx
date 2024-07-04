import React, { useState } from "react";
import useAddBuildingMutation from "../../queries/useAddBuilding";

const AddBuilding = () => {
  const addBuildingMutation = useAddBuildingMutation();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    addBuildingMutation.mutate({
      name: name,
      street_address: address
    });

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBuilding;
