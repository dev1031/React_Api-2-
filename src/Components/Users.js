import React from 'react';
import axios from 'axios';
class Users extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users : [] 
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            this.setState({
                users : response.data
            })
        })
    }
    render(){
        const {users} = this.state;
        const userList = users.map((user)=>{
            return (
                <div key={user.id}>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <h4  className="orange-text">Name : {user.name}</h4>
                    <span className="card-title">Username : {user.username}</span>
                    <span className="card-title">Email : {user.email}</span>
                    <span className="card-title">Website : {user.website}</span>
                    </div>
                </div>
                </div>
            )
        })
        return(
            <div className="container">
             <h1 className ="center">Users</h1>   
                {userList}
            </div>
        )
    }
}

export default Users