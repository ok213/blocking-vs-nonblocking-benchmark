package com.example.blockingtomcatpostgresql.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String email;
    private String password;
    private String username;
    private boolean isActive = false;

//    public User(String email, String password, String username, boolean isActive) {
//        this.email = email;
//        this.password = password;
//        this.username = username;
//        this.isActive = isActive;
//    }

}
