var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1400",
        "ok": "1400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2089",
        "ok": "2089",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "725",
        "ok": "725",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "666",
        "ok": "666",
        "ko": "-"
    },
    "percentiles1": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1176",
        "ok": "1176",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1960",
        "ok": "1960",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2011",
        "ok": "2011",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 903,
    "percentage": 65
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 162,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 335,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "175",
        "ok": "175",
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
        "total": "700",
        "ok": "700",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "807",
        "ok": "807",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "219",
        "ok": "219",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "267",
        "ok": "267",
        "ko": "-"
    },
    "percentiles1": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "percentiles2": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "percentiles3": {
        "total": "751",
        "ok": "751",
        "ko": "-"
    },
    "percentiles4": {
        "total": "782",
        "ok": "782",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 698,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
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
        "total": "87.5",
        "ok": "87.5",
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
        "total": "700",
        "ok": "700",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "178",
        "ok": "178",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2089",
        "ok": "2089",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1231",
        "ok": "1231",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "552",
        "ok": "552",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1178",
        "ok": "1178",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1801",
        "ok": "1801",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1988",
        "ok": "1988",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2027",
        "ok": "2027",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 205,
    "percentage": 29
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 160,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 335,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.5",
        "ok": "87.5",
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
