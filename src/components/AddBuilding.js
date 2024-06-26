import React, {useState} from "react";

const AddBuilding = ({addBuilding}) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBuilding(name, address);
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
