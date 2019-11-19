import React from  'react';
import Select from  './Select';
import {updateStanding} from '../api/api';

class Admin extends React.Component{
      constructor(){
            super();
            this.state  = {
               "sh":0,
               "MP":0,
               "W":0,
               "D":0,
               "L":0,
               "GA":0,
               "GD":0,
               "points":0,
               "GF":0
            }
      }
      
      onSubmit =(e)=>{
        const team =  this.state.sh
        const  data  = {
            "MP":this.state.MP,
            "W":this.state.W,
            "D":this.state.D,
            "L":this.state.L,
            "GA":this.state.GA,
            "GD":this.state.GD,
            "Pts":this.state.points,
            "GF":this.state.GF
        }
    
        updateStanding(team,data)
    
      }

      onChange=(e)=>{
           const name =  e.target.name
           const value =  e.target.value

            this.setState({
                 [name]:value
            })
            
            console.log(this.state)

          }



      render(){
            return(
                 <div className="row d-flex justify-content-center">
                   <div className="col-md-6">
                       <div className="row form-group">
                       <label for="sh">Choose team</label>
                       <select onChange={(e)=>this.onChange(e)} className="form-control" name="sh">
                        <option value="LIV">LIV</option>
                        <option value="MIC">MIC</option>
                        <option value="LEI">LEI</option>
                        <option value="CHE">CHE</option>
                        <option value="ARS">ARS</option>
                        <option value="CRY">CRY</option>
                        <option value="MUN">MUN</option>
                        <option value="BOU">BOU</option>
                        <option value="SHU">SHU</option>
                        <option value="WLV">WLV</option>
                        <option value="TOT">TOT</option>
                        <option value="NEW">NEW</option>
                        <option value="BRH">BRH</option>
                        <option value="BUR">BUR</option>
                        <option value="NOR">NOR</option>
                        <option value="EVE">EVE</option>
                        <option value="SOU">SOU</option>
                        <option value="WHU">WHU</option>
                        <option value="AVA">AVA</option>
                        <option value="WAT">WAT</option>
                        </select>
                       </div>
                       <div className="row form-group">
                       <label for="WP">Matches Played</label>
                        <input  onChange={(e)=>this.onChange(e)}  type="input"  className="form-control"  name="MP" />
                       </div>
                       <div className="row form-group">
                       <label for="W">Games Won</label>
                        <input  onChange={(e)=>this.onChange(e)} type="input" className="form-control"  name="W" />
                       </div>
                       <div className="row form-group">
                       <label for="D">Games Drawed</label>
                        <input  onChange={(e)=>this.onChange(e)} type="input" className="form-control"  name="D" />
                       </div>
                       <div className="row form-group">
                       <label for="L">Games Loss</label>
                        <input  onChange={(e)=>this.onChange(e)} type="input" className="form-control"  name="L" />
                       </div>
                       <div className="row form-group">
                       <label for="GF">Goals Scored</label>
                        <input  onChange={(e)=>this.onChange(e)} type="input" className="form-control"  name="GF" />
                       </div>
                       <div className="row form-group">
                       <label for="GA">Goals Conceded</label>
                        <input  onChange={(e)=>this.onChange(e)} type="input" className="form-control"  name="GA" />
                       </div>
                       <div className="row form-group">
                       <label for="GD">Goal Difference</label>
                        <input onChange={(e)=>this.onChange(e)}  type="input" className="form-control"  name="GD" />
                       </div>
                       <div className="row form-group">
                       <label for="WP">Total Points</label>
                        <input  onChange={(e)=>this.onChange(e)} type="input" className="form-control"  name="points" />
                       </div>
                       <button type="submit" class="btn btn-primary" onClick={this.onSubmit()}>Submit</button>
                   </div>
                 </div>
            )
      }

}

export  default Admin