package com.example.nonblockingnettypostgresql.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("users")
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private Long id;
    private String email;
    private String password;
    private String username;
    @Column("is_active")
    private boolean isActive = false;

    public User(String email, String password, String username, boolean isActive) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.isActive = isActive;
    }

}
