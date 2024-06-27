import React from "react";

const BuildingItem = ({building, deleteBuilding}) => {
    return (
        <li>
            <span>
                {building.name} {building.address}
            </span>
            <button onClick={() => deleteBuilding(building.id)}>Delete</button>
        </li>
    );
};

export default BuildingItem;
