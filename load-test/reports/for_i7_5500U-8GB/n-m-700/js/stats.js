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
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1766",
        "ok": "1766",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "720",
        "ok": "720",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "522",
        "ok": "522",
        "ko": "-"
    },
    "percentiles1": {
        "total": "770",
        "ok": "770",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1267",
        "ok": "1267",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1419",
        "ok": "1419",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1588",
        "ok": "1588",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 742,
    "percentage": 53
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 262,
    "percentage": 19
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 396,
    "percentage": 28
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
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1766",
        "ok": "1766",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "percentiles1": {
        "total": "111",
        "ok": "111",
        "ko": "-"
    },
    "percentiles2": {
        "total": "741",
        "ok": "741",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1366",
        "ok": "1366",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1670",
        "ok": "1670",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 545,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 79,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 76,
    "percentage": 11
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
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1589",
        "ok": "1589",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1033",
        "ok": "1033",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "336",
        "ok": "336",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1064",
        "ok": "1064",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1338",
        "ok": "1338",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1429",
        "ok": "1429",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1510",
        "ok": "1510",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 197,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 183,
    "percentage": 26
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 320,
    "percentage": 46
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
