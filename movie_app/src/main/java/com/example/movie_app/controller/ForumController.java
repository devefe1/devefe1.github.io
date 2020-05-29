package com.example.movie_app.controller;


import com.example.movie_app.exception.ResourceNotFoundException;
import com.example.movie_app.model.Forum;
import com.example.movie_app.repository.ForumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ForumController {

    @Autowired
    private ForumRepository forumRepository;

    //get forum posts
    @GetMapping("/forum")
    public List<Forum> getAllUsers(Model model) {
        return this.forumRepository.findAll();
    }

    // post to forum
    @PostMapping("/forum")
    public Forum createForum(@Valid @RequestBody Forum forum) {
        return forumRepository.save(forum);
    }

    // delete forum posts
    @DeleteMapping("/forum/{id}")
    public Map<String, Boolean> deletedUser(@PathVariable(value = "id") Long userId)
            throws ResourceNotFoundException {
        Forum forum = forumRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found " + userId));

        forumRepository.delete(forum);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted User", Boolean.TRUE);
        return response;
    }


}