import BuildingItem from "./BuildingItem";
import useGetBuildingsQuery from "../../queries/useGetBuildings";


const BuildingList = () => {
  
  const buildingsQuery = useGetBuildingsQuery();

  return (
    <ul>
      {buildingsQuery.data?.map((building) => (
        <BuildingItem
          building={building}
        />
      ))}
    </ul>
  );
};

export default BuildingList;
