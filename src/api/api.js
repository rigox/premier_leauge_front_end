import axios  from 'axios';
axios.defaults.baseURL ="http://localhost:5000"
export const getTeams =  async() =>{
 try {
      const data =  await axios.get('/api/v1/standings/')
      return data
 } catch (err) {
       console.log(err)
 }

}

export const  updateStanding = async(team,data)=>{
    
     const res =  axios.put(`/api/v1/standings/${team}`,data)

     console.log(res)


}