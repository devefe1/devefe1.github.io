import React, { Component } from 'react';
import axios from 'axios';

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
         this.editPost = this.editPost.bind(this)
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/https://moviecinema.herokuapp.com/forum')
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
            const newPost = await axios.post('https://cors-anywhere.herokuapp.com/https://moviecinema.herokuapp.com/forum', forum)
            console.log(newPost.data);
        } catch (e) {
            console.log(e);
        }
        
    }

    editPost = async (id) => {
        const {forum} = this.state;
        try{
            const updatemyPost = await axios.put(`https://cors-anywhere.herokuapp.com/https://moviecinema.herokuapp.com/forum/${id}` , forum);
            let updatedPosts = [...this.state.forum].filter(i => i.id !== id)
            this.setState({forum: updatedPosts})
            console.log(updatemyPost.data)

            
       //catch errors     
        } catch (e) {
            console.log(e);
        }
    }



    render() { 
        const {forum} = this.state;
        return ( 
            <div className='forum-page' >
                <h1 id='title' > Leave a review Below! </h1>
                <form className='posts' onSubmit = {this.handleSubmit} >
                    <input type="text" placeholder="User Name (Optional)" name="userName" value={forum.userName || ''} onChange = {this.handleChange} />
                    <textarea type="text" placeholder="Write a review" name="post" value={forum.post || ''} onChange = {this.handleChange} />
                    <button> Submit Review</button>
                </form>
                {this.state.updatedForum.map(post => (
                    <div key={post.id} className="forumWrap">
                        <ul>
                            <h3 > {post.userName} </h3>
                            <p  > {post.post} </p>
                            <button className="updateEdit" onClick={() => this.editPost(post.id)}>Edit</button>
                        </ul>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default Forum;