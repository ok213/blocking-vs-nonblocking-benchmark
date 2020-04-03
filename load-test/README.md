# Load Test Scenario

Used for the load test Gatling (https://gatling.io/).
**_\*\*need SCALA v.2.12.11 (only)_**


_The resulting report is in the folder: load-test/reports_


#### _**blocking-app**_

`cd load-test`

`./gradlew -DTARGET_URL=http://localhost:8081/300 -DSIM_USERS=1000 gatlingDelay`

#### _**reactive-app**_

`cd load-test`

`./gradlew -DTARGET_URL=http://localhost:8082/300 -DSIM_USERS=1000 gatlingDelay`


#### _**blocking-tomcat-postgresql**_

`cd load-test`

`./gradlew -DSIM_USERS=1000 gatlingAdvanced`


#### _**non-blocking-netty-postgresql**_

`cd load-test`

`./gradlew -DSIM_USERS=1000 gatlingAdvanced`


#### _**non-blocking-netty-mongo**_

`cd load-test`

`./gradlew -DSIM_USERS=1000 gatlingAdvancedMongo`

