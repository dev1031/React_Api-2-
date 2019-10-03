import React from 'react';
import axios from 'axios';

class Posts extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            posts : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState({
                posts : response.data.slice(0,10)
            })
        })
    }
    render(){
        let {posts} = this.state ;
        let postList = posts.map((post)=>{
            return(
                <div class="card blue-grey darken-1" key = {post.id}>
                    <div class="card-content white-text">
                    <span class="card-title orange-text darken-3">{post.title}</span>
                    <p>{post.body}</p>
                    </div>
                </div>
            )
        })
        return(
            <div className ="container">
                <h1 className="center">Posts</h1>
                {postList}
            </div>
        )
    }
}

export default Posts