import React, {useState} from "react";
import AddBuilding from "./components/AddBuilding";
import BuildingList from "./components/BuildingList";
import "./App.css";

const App = () => {
    const [buildings, setBuildings] = useState([]);

    const addBuilding = (name, address) => {
        const newBuilding = {
            name,
            address,
            id: Date.now(),
        };
        setBuildings([...buildings, newBuilding]);
    };

    const deleteBuilding = (id) => {
        setBuildings((prev) => prev.filter((building) => building.id !== id));
    };

    return (
        <div className="app">
            <h1>Buildings</h1>
            <AddBuilding addBuilding={addBuilding} />
            <BuildingList
                buildings={buildings}
                deleteBuilding={deleteBuilding}
            />
        </div>
    );
};

export default App;
