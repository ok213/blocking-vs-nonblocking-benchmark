var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5500",
        "ok": "5500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1687",
        "ok": "1687",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "815",
        "ok": "815",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "343",
        "ok": "343",
        "ko": "-"
    },
    "percentiles1": {
        "total": "799",
        "ok": "799",
        "ko": "-"
    },
    "percentiles2": {
        "total": "980",
        "ok": "980",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1458",
        "ok": "1456",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1645",
        "ok": "1645",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2754,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2236,
    "percentage": 41
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 510,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "137.5",
        "ok": "137.5",
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "465",
        "ok": "465",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "percentiles2": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles3": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "percentiles4": {
        "total": "219",
        "ok": "219",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 500,
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
        "total": "12.5",
        "ok": "12.5",
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
        "total": "5000",
        "ok": "5000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1687",
        "ok": "1687",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "894",
        "ok": "894",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "percentiles1": {
        "total": "841",
        "ok": "841",
        "ko": "-"
    },
    "percentiles2": {
        "total": "986",
        "ok": "986",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1491",
        "ok": "1491",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1648",
        "ok": "1648",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2254,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2236,
    "percentage": 45
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 510,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "125",
        "ok": "125",
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
