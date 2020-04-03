var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "77000",
        "ok": "77000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20058",
        "ok": "20058",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15831",
        "ok": "15831",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5317",
        "ok": "5317",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17928",
        "ok": "17928",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18149",
        "ok": "18149",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18657",
        "ok": "18659",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19878",
        "ok": "19878",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6589,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 387,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 70024,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "364.929",
        "ok": "364.929",
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
        "total": "7000",
        "ok": "7000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1252",
        "ok": "1252",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles1": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles2": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "percentiles3": {
        "total": "883",
        "ok": "883",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1167",
        "ok": "1167",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6589,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 387,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.175",
        "ok": "33.175",
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
        "total": "70000",
        "ok": "70000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3769",
        "ok": "3769",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20058",
        "ok": "20058",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "17399",
        "ok": "17399",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2007",
        "ok": "2007",
        "ko": "-"
    },
    "percentiles1": {
        "total": "18018",
        "ok": "18018",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18162",
        "ok": "18162",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18885",
        "ok": "18889",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19894",
        "ok": "19894",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 70000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "331.754",
        "ok": "331.754",
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
