package com.example.blockingtomcatpostgresql.services;

import com.example.blockingtomcatpostgresql.models.User;

import java.util.List;

public interface UserService {

    User createUser(User user);
    User getUserById(Long id);
    List<User> getAllUsers();

}
