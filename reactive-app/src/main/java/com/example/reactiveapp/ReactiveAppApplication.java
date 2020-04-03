package com.example.reactiveapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.server.*;

//@RestController
@EnableWebFlux
@SpringBootApplication
public class ReactiveAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReactiveAppApplication.class, args);
    }

    private static final String DELAY_SERVICE_URL = "http://localhost:8080";
    private final WebClient client = WebClient.create(DELAY_SERVICE_URL);

    @Bean
    RouterFunction<ServerResponse> helloRouterFunction() {
//        Hooks.onOperatorDebug();
        HandlerFunction<ServerResponse> handlerFunction = serverRequest ->
                ServerResponse.ok().body(client.get()
                        .uri("/" + serverRequest.pathVariable("delayMillis"))
                        .retrieve()
                        .bodyToMono(String.class)
                        .map(s -> "Reactive: " + s), String.class);

        RouterFunction<ServerResponse> routerFunction =
                RouterFunctions.route(RequestPredicates.path("/{delayMillis}"), handlerFunction);

        return routerFunction;
    }

//    @GetMapping("/{delayMillis}")
//    public Mono<String> get(@PathVariable String delayMillis) {
//        return client.get()
//                .uri("/" + delayMillis)
//                .retrieve()
//                .bodyToMono(String.class)
//                .map(s -> "Reactive: " + s);
//    }

}
