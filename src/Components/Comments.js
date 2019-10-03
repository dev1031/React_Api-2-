import React from 'react';
import axios from 'axios';

class Comments extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            comments : []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            this.setState({
                comments : response.data.slice(0,10)
            })
        })
    }
    render(){
        let {comments} = this.state ;
        let commentList = comments.map((comment)=>{
            return(
                 <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title orange-text">{comment.email}</span>
                    <h5>{comment.body}</h5>
                    </div>
                </div>
            )
        })
        return (
            <div className = "container">
                <h1 className="center">Comments</h1>
                {commentList}
            </div>
        )
    }
}

export default Comments