import React from "react";
import {ApiREST} from "../../common/services/api.service";
import Hero from "./hero/hero.component";

class HeroesIndex extends React.Component{
    constructor(props){
        super(props)
        this.state={
            heroesIndex:[]
        }
    }

    componentWillMount(){
        ApiREST.get("/",(heroes)=>{
            this.setState({heroesIndex:heroes});
        },(error)=>{
            window.alert("Oooops smth went wrong :(")
        });
    }

    render(){
        return (<div className="heroesIndex">
            {this.state.heroesIndex.map((hero,index)=>{
                return (<Hero key={index} personalData={hero} className={`hero ${index%2===0?'even':'odd'}`}/>)
            })}
        </div>)
    }
}

export default HeroesIndex;

