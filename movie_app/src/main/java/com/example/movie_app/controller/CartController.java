package com.example.movie_app.controller;


import com.example.movie_app.exception.ResourceNotFoundException;
import com.example.movie_app.model.Cart;
import com.example.movie_app.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController

public class CartController {

    @Autowired
    private CartRepository cartRepository;

    // get cart
    @GetMapping("/cart")
    public List<Cart> getAllUsers(Model model) {
        return this.cartRepository.findAll();
    }


    // save users
    @PostMapping("/cart")
    public Cart createCart(@Valid @RequestBody Cart cart) {
        return cartRepository.save(cart);
    }

    // delete users
    @DeleteMapping("/cart/{id}")
    public Map<String, Boolean> deletedUser(@PathVariable(value = "id") Long userId)
            throws ResourceNotFoundException {
        Cart cart = cartRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found " + userId));

        cartRepository.delete(cart);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted User", Boolean.TRUE);
        return response;

    }

}