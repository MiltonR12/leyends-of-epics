import axios from 'axios'

export const getTeams = async () => {
  const data = await axios.get('https://leyends-of-epics.onrender.com/api');
  return data.data;
}

export const addTeam = (team) => axios.post('https://leyends-of-epics.onrender.com/api', team)