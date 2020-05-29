package com.example.movie_app.repository;

import com.example.movie_app.model.Forum;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;




@Repository


public interface ForumRepository extends JpaRepository<Forum, Long> {




}