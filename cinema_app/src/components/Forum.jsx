import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            forum: {
                userName: '', 
                post: ''
            },
            updatedForum: []
         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('/forum')
            this.setState({updatedForum: response.data})
            console.log(response.data); 
        } catch (e) {
            console.log(e);
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let forum = {...this.state.forum};
        forum[name] = value;
        this.setState({forum});
    }

   handleSubmit = async (e) => {
        e.preventDefault();
        const {forum} = this.state;
        try {
            const newPost = await axios.post('/forum', forum)
            console.log(newPost.data);
        } catch (e) {
            console.log(e);
        }
        
    }

    render() { 
        const {forum} = this.state;
        return ( 
            <div className='forum-page' >
                <h1 id='title' > Leave movie reviews! </h1>
                <form className='posts' onSubmit = {this.handleSubmit} >
                    <input type="text" placeholder="User Name (Optional)" name="userName" value={forum.userName || ''} onChange = {this.handleChange} />
                    <textarea type="text" placeholder="Write a forum post" name="post" value={forum.post || ''} onChange = {this.handleChange} />
                    <button> Submit Review ! </button>
                </form>
                {this.state.updatedForum.map(post => (
                    <div>
                        <ul>
                            <h3 > {post.userName} </h3>
                            <li key={post.id} > {post.post} </li>
                        </ul>
                        <Link id='footer-links' to='/forum' className="forum"> </Link>
                    </div>
                ))}
                 
            </div>
         );
    }
}
 
export default Forum;