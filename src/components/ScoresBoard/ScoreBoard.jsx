import React from "react";
import { teams } from "./data";

class ScoreBoard extends React.Component{
    constructor(){
        super()
        this.state = {teams}
    }
    render(){
        const { teams } = this.state
        return(
            <React.Fragment>
                <div className="container">
                    {
                        teams.map( el =>{
                            return(
                                <div>
                                    <img src={el.img} alt="" />
                                    <h5>{el.clubName}</h5>
                                </div>
                            )
                            
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ScoreBoard

