import React from "react";

const BuildingItem = ({building, deleteBuilding}) => {
    return (
        <li>
            <span>
                {building.name} {building.address}
            </span>
            <div onClick={() => deleteBuilding(building.id)}>Delete</div>
        </li>
    );
};

export default BuildingItem;
