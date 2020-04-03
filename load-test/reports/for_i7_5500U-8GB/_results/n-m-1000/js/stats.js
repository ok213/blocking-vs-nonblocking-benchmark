var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11000",
        "ok": "11000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2843",
        "ok": "2843",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1497",
        "ok": "1497",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1418",
        "ok": "1418",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2384",
        "ok": "2384",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2591",
        "ok": "2591",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2722",
        "ok": "2722",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2226,
    "percentage": 20
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1527,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7247,
    "percentage": 66
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "224.49",
        "ok": "224.49",
        "ko": "-"
    }
},
contents: {
"req_adduser-api-2f2db": {
        type: "REQUEST",
        name: "AddUser-API",
path: "AddUser-API",
pathFormatted: "req_adduser-api-2f2db",
stats: {
    "name": "AddUser-API",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "536",
        "ok": "536",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "percentiles3": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles4": {
        "total": "395",
        "ok": "395",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1000,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20.408",
        "ok": "20.408",
        "ko": "-"
    }
}
    },"req_getuserbyid-api-0b982": {
        type: "REQUEST",
        name: "GetUserById-API",
path: "GetUserById-API",
pathFormatted: "req_getuserbyid-api-0b982",
stats: {
    "name": "GetUserById-API",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2843",
        "ok": "2843",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1645",
        "ok": "1645",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "751",
        "ok": "751",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1512",
        "ok": "1512",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2411",
        "ok": "2411",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2598",
        "ok": "2598",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2727",
        "ok": "2727",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1226,
    "percentage": 12
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1527,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7247,
    "percentage": 72
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "204.082",
        "ok": "204.082",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
