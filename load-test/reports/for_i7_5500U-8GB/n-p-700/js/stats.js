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
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1569",
        "ok": "1569",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "760",
        "ok": "760",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "628",
        "ok": "628",
        "ko": "-"
    },
    "percentiles1": {
        "total": "861",
        "ok": "861",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1375",
        "ok": "1375",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1505",
        "ok": "1505",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1557",
        "ok": "1557",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 700,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 36,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 664,
    "percentage": 47
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
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "784",
        "ok": "784",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "224",
        "ok": "224",
        "ko": "-"
    },
    "percentiles1": {
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "percentiles2": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "percentiles3": {
        "total": "657",
        "ok": "657",
        "ko": "-"
    },
    "percentiles4": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 700,
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
        "total": "938",
        "ok": "938",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1569",
        "ok": "1569",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1361",
        "ok": "1361",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "120",
        "ok": "120",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1375",
        "ok": "1375",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1454",
        "ok": "1454",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1535",
        "ok": "1535",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1561",
        "ok": "1561",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 36,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 664,
    "percentage": 95
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
