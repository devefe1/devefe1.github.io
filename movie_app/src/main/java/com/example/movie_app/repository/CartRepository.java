package com.example.movie_app.repository;

import com.example.movie_app.model.Cart;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;




@Repository


public interface CartRepository extends JpaRepository<Cart, Long> {




}