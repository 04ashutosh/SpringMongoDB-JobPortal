package com.ashutosh.joblisting.repository;

import com.ashutosh.joblisting.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post,String>
{

}