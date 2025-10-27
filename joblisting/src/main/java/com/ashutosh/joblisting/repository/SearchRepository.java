package com.ashutosh.joblisting.repository;

import com.ashutosh.joblisting.model.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findByText(String text);

}