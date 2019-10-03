import React from 'react';
import axios from 'axios';

class Photos extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            photos : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>{
            this.setState({
                photos : response.data.slice(0,10)
            })
        })
    }
    render(){
        let {photos} = this.state 
        let photoList = photos.map((photo)=>{
            return( <div className="col s12 m7" key ={photo.id}>
                        <div className="card horizontal">
                        <div className="card-image">
                            <img src={photo.thumbnailUrl} alt ="thumbnil"/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            <p>{photo.title}</p>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                
            )
        })
        return(
            <div className = "container">
                    <h1 className = "center">Photos</h1>
                    {photoList}
            </div>

        )
    }
}

export default Photos