import { useMutation, useQuery } from "@tanstack/react-query";
import { addTeam, getTeams } from "../api/torneoApi.js";
import { queryClient } from "../queryConfig.js";

export const getEquipos = () => {
  return useQuery({
    queryKey: ['lista'],
    queryFn: getTeams
  })
}

export const addEquipo = () => {
  return useMutation({
    mutationFn: addTeam,
    onSuccess: () => {
      queryClient.invalidateQueries('lista')
    }
  })
}