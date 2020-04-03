package simulations

import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.util.Random

class AdvancedSimulationMongo extends Simulation {

  private val numberOfUserRequests: Int = 10
  private val targetUrl: String = "http://localhost:8080/users"
  private val simUsers: Int = System.getProperty("SIM_USERS").toInt

  private val userIdFeeder = Iterator.from(0).map(i => Map("userId" -> i))
  private val userIdFeederRandom = Iterator.continually(Map("userIdRandom" -> Random.nextInt(simUsers)))
//  private val mailFeeder = Iterator.continually(Map("email" -> (Random.alphanumeric.take(20).mkString + "@foo.com")))

  private val httpConfAddUser = http("AddUser-API")
    .post(targetUrl)
    .header("Content-Type", "application/json")
    .body(StringBody("""{"id": ${userId},"email":"john${userId}@mail.ru","password":"john${userId}","username":"Mr. John Smith ${userId}", "isActive": false}"""))
    .check(status.is(200))

  private val httpConfGetUserById = http("GetUserById-API")
    .get(targetUrl + "/${userIdRandom}")
    .check(status.is(200))

  private val httpConfGetAllUsers = http("GetAllUsers-API")
    .get(targetUrl)
    .check(status.is(200))


  private val scn = scenario("Users-API")
    // Add <simUsers> to database
    .feed(userIdFeeder)
    .exec(httpConfAddUser).pause(Duration.apply(5, TimeUnit.MILLISECONDS))
    // Waiting for <simUsers> users to be added
    .rendezVous(simUsers)
    // Each registered user makes <numberOfUserRequests> requests for random user information
    .repeat(numberOfUserRequests) {
      feed(userIdFeederRandom)
      .exec(httpConfGetUserById).pause(Duration.apply(5, TimeUnit.MILLISECONDS))
    }
    // Each registered user makes <numberOfUserRequests> requests for all users information
    .repeat(numberOfUserRequests) {
      exec(httpConfGetAllUsers).pause(Duration.apply(1, TimeUnit.MILLISECONDS))
    }

  setUp(scn.inject(rampUsers(simUsers) during(5 seconds))).maxDuration(60 minutes)

}
