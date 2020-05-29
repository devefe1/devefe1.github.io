package com.example.movie_app.model;

import javax.persistence.*;

@Entity
@Table(name="forum")

public class Forum {
    @Id
    @GeneratedValue
    @Column(name = "post_id")
    private long id;

    @Column(name ="user_name")
    private String userName;

    @Column(name = "post")
    private String post;

    public Forum(){
        super();
    }


    public Forum(String userName, String post){
        this.userName = userName;
        this.post = post;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }
}
