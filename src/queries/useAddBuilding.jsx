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
          body: JSON.stringify(data)
        }
      ).then((res) => 
        res.json()
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: buildingsQueryKey })
    },
  })
}

export default useAddBuildingMutation
