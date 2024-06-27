import React from "react";
import BuildingItem from "./BuildingItem";

const BuildingList = ({buildings, deleteBuilding}) => {
    return (
        <ul>
            {buildings.map((building) => (
                <BuildingItem
                    building={building}
                    deleteBuilding={deleteBuilding}
                />
            ))}
        </ul>
    );
};

export default BuildingList;
