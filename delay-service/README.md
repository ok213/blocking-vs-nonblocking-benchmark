## Delay service

default server port: 8080

**curl -w "\t%{time_total}s\n" localhost:8080/1000**

_`returns "OK" after 1000ms`_

**curl -w "\t%{time_total}s\n" localhost:8080/2000**

_`returns "OK" after 2000ms`_
