import { useMutation, useQueryClient } from "react-query"
import { API_ADDRESS } from "./constants"
import { queryKey as buildingsQueryKey } from "./useGetBuildings"

const useAddBuildingMutation = () => {

  const queryClient = useQueryClient()
  const url = `${API_ADDRESS}/buildings`

  return useMutation({
    mutationFn: (data) =>
      fetch(
        url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        }
      ).then((res) => 
        res.json()
      ),
    onSuccess: () => {
      // code here runs after a succesful mutation
    },
  })
}

export default useAddBuildingMutation
