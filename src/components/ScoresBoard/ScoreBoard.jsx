import React from "react";
import { teams } from "./data";
import { styles } from "./styles";

class ScoreBoard extends React.Component{
    constructor(){
        super()
        this.state = {teams}
        
    }
    addVote =(index) =>{
        let copyState = [...this.state.teams]
        copyState[index].vote = copyState[index].vote +1
        this.setState({teams:copyState})
    }
    
    render(){
        const { teams } = this.state
        return(
            <React.Fragment>
                <div className="container" style = {styles.container}>
                    {
                        teams.map( (el, index) =>{
                            return(
                                <div key={el.id} style = {styles.box}>
                                    <img src={el.img} style = {styles.img} alt="" />
                                    <h3>{el.clubName}</h3>
                                    <button onClick={() =>this.addVote(index)} style = {styles.botton}>Vote</button>
                                    <h5 style={styles.vote}>{el.vote}</h5>

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

