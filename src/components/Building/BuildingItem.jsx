import React from "react";
import useDeleteBuildingMutation from "../../queries/useDeleteBuilding";

const BuildingItem = ({building}) => {
  
  const deleteBuildingMutation = useDeleteBuildingMutation(building.id);

  const handleDeleteBuilding = () => {
    deleteBuildingMutation.mutate()
  }

  return (
    <li>
      <span>
        {building.name} {building.address}
      </span>
      <button onClick={handleDeleteBuilding}>Delete</button>
    </li>
  );
};

export default BuildingItem;
