package com.example.nonblockingnettymongo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class NonBlockingNettyMongoApplication {

    public static void main(String[] args) {
        SpringApplication.run(NonBlockingNettyMongoApplication.class, args);
    }

//    @Bean
//    ApplicationRunner init(UserRepository repository) {
//        Object[][] data = {
//                {"user1@mail.ru", "user1", "Mr. User First", false},
//                {"user2@mail.ru", "user2", "Mr. User Second", true},
//                {"user3@mail.ru", "user3", "Mr. User Third", false}
//        };
//
//        return args -> {
//            repository
//                    .deleteAll()
//                    .thenMany(
//                            Flux
//                                    .just(data)
//                                    .map(array -> {
//                                        return new User((String) array[0], (String) array[1], (String) array[2], (Boolean) array[3]);
//                                    })
//                                    .flatMap(repository::save)
//                    )
//                    .thenMany(repository.findAll())
//                    .subscribe(user -> System.out.println("saving " + user.toString()));
//        };
//    }

}
