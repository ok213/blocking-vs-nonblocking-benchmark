package com.example.nonblockingnettymongo.handlers;

import com.example.nonblockingnettymongo.models.User;
import com.example.nonblockingnettymongo.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.web.reactive.function.BodyInserters.fromPublisher;
import static org.springframework.web.reactive.function.server.ServerResponse.notFound;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

@Component
@AllArgsConstructor
public class UserHandler {

    private UserRepository userRepository;

    public Mono<ServerResponse> createUser(ServerRequest request) {
        Mono<User> user = request.bodyToMono(User.class);
        return ok().contentType(APPLICATION_JSON)
                .body(fromPublisher(user.flatMap(userRepository::save), User.class));
    }

    public Mono<ServerResponse> getUser(ServerRequest request) {
//        final Long id = Long.parseLong(request.pathVariable("id"));
//        final Mono<User> user = userRepository.findById(id);
        final Mono<User> user = userRepository.findById(request.pathVariable("id"));
        return user.flatMap(usr -> ok().contentType(APPLICATION_JSON)
                .body(fromPublisher(user, User.class)))
                .switchIfEmpty(notFound().build());
    }

//    public Mono<ServerResponse> getUsers(ServerRequest request) {
//        return ok().contentType(APPLICATION_JSON)
//                .body(fromPublisher(userRepository.findAll(), User.class));
//    }

    public Mono<ServerResponse> getUsers(ServerRequest serverRequest) {
        return ServerResponse.ok()
                .contentType(APPLICATION_JSON)
                .body(userRepository.findAll(), User.class)
                .switchIfEmpty(ServerResponse.noContent().build());
    }

}
