package simulations

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._

import scala.concurrent.duration._

class WithoutDatabaseSimulation extends Simulation {

  val targetUrl: String = System.getProperty("TARGET_URL")
  val simUsers: Int = System.getProperty("SIM_USERS").toInt

  val myScenario: ScenarioBuilder = scenario("Without  database").exec(
    repeat(10) {
      exec(
        http("request_1").get(targetUrl)
      ).pause(1 second, 2 seconds)
    }
  )
  setUp(myScenario.inject(rampUsers(simUsers).during(5 seconds)))
}
