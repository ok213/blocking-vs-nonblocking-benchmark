package com.example.blockingtomcatpostgresql.repository;

import com.example.blockingtomcatpostgresql.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
