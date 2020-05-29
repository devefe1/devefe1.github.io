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
}
