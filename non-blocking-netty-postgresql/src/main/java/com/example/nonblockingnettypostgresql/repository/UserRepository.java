package com.example.nonblockingnettypostgresql.repository;

import com.example.nonblockingnettypostgresql.models.User;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface UserRepository extends ReactiveCrudRepository<User, Long> {
}
