package simulations

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._

class SimpleSimulation extends Simulation {

  private val httpConf = http
    .baseUrl("http://localhost:8080")
    .acceptHeader(" application/json")


  private val scn: ScenarioBuilder = scenario("Simple Scenario")
    .exec(http("Get all users")
    .get("/users"))

  setUp(scn.inject(atOnceUsers(100))).protocols(httpConf)
}
