package com.ashutosh.joblisting.controller;

import com.ashutosh.joblisting.repository.PostRepository;
import com.ashutosh.joblisting.model.Post;
import com.ashutosh.joblisting.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")   
public class PostController {

    @Autowired
    private PostRepository repo;

    @Autowired
    private SearchRepository srepo;

    @ApiIgnore
    @RequestMapping(value = "/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui/index.html");  
    }

    @GetMapping("/allPosts")
    public List<Post> getAllPosts() {
        return repo.findAll();
    }

    @GetMapping("/posts/{text}")
    public List<Post> search(@PathVariable String text) {
        return srepo.findByText(text);
    }

    @PostMapping("/post")
    public Post addPost(@RequestBody Post post) {
        return repo.save(post);
    }
}
