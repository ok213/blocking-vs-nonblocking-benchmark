package com.example.nonblockingnettymongo.repository;


import com.example.nonblockingnettymongo.models.User;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface UserRepository extends ReactiveMongoRepository<User, String> {

}
