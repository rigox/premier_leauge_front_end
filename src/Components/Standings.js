import  React from 'react';
import  Team from './Team';
import {getTeams} from '../api/api';
class Standing  extends React.Component{
  
   constructor(){
      super()
      this.state  = {teams:[{team:"hold"}]}
   }

  
   
   componentWillMount=async()=>{
         const res =  await getTeams()
         this.setState({teams:res.data.data})
    }
   
   renderRows(){
    const temp=  this.state.teams
    console.log(temp)
         const elements =  temp.map((a)=>{
            return(
              <tr>
              <th scope="row">{a.team}</th>
              <td>{a.W}</td>
              <td>{a.D}</td>
              <td>{a.L}</td>
              <td>{a.GF}</td>
              <td>{a.GA}</td>
              <td>{a.GD}</td>
              <td>{a.Pts}</td>
            </tr>
            )
         });

         return elements;
  }

  render(){
      return(<div>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Won</th>
      <th scope="col">Draw</th>
      <th scope="col">Loss</th>
      <th scope="col">GF</th>
      <th scope="col">GA</th>
      <th scope="col">GD</th>
      <th scope="col">Pts</th>


    </tr>
  </thead>
  <tbody>
  {this.renderRows()}

  </tbody>
</table>
      </div>)
   }
}

export default Standing;