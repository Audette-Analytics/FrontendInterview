import { useMutation } from "react-query"
import { API_ADDRESS } from "./constants"

const useAddBuildingMutation = () => {

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
    onSuccess: () => {},
  })
}

export default useAddBuildingMutation
