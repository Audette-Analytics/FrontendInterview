import { useMutation, useQueryClient } from "react-query"
import { API_ADDRESS } from "./constants"
import { queryKey as buildingsQueryKey } from "./useGetBuildings"

const useDeleteBuildingMutation = (building_id) => {

  const queryClient = useQueryClient()
  const url = `${API_ADDRESS}/buildings/${building_id}`

  return useMutation({
    mutationFn: () =>
      fetch(
        url,
        {
          method: "DELETE"
        }
      ).then((res) => 
        res.json()
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: buildingsQueryKey })
    },
  })
}

export default useDeleteBuildingMutation
