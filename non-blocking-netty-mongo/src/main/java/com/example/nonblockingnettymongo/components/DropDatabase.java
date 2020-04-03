package com.example.nonblockingnettymongo.components;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Component;

@Component
public class DropDatabase implements ApplicationRunner {

    @Autowired
    private MongoOperations ops;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("Delete database");
        ops.executeCommand("{dropDatabase:1}");
    }
}
