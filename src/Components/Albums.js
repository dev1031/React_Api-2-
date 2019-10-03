import React from 'react';
import axios from 'axios';

class Albums extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            albums : []
        }
    }

    componentDidMount(){
        axios('https://jsonplaceholder.typicode.com/albums')
        .then((response)=>{
            this.setState({
                albums : response.data.slice(0,10)
            })
        })
    }
    render(){
        let {albums} = this.state;
        let albumsList = albums.map((album)=>{
            return (
                <div className="card blue-grey darken-1" key = {album.id}>
                    <div className="card-content white-text">
                    <span className="card-title orange-text">{album.title}</span>
                    </div>
                </div>
            )
        })
        return(
            <div className = "container"> 
                <h1 className = "center">Albums</h1>
                {albumsList}
            </div>
        )
    }
}

export default Albums