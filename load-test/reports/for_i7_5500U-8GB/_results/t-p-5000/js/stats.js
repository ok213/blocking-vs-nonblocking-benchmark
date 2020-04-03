var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "55000",
        "ok": "55000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21675",
        "ok": "21675",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "17333",
        "ok": "17333",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6091",
        "ok": "6091",
        "ko": "-"
    },
    "percentiles1": {
        "total": "19534",
        "ok": "19534",
        "ko": "-"
    },
    "percentiles2": {
        "total": "19943",
        "ok": "19943",
        "ko": "-"
    },
    "percentiles3": {
        "total": "21133",
        "ok": "21133",
        "ko": "-"
    },
    "percentiles4": {
        "total": "21529",
        "ok": "21529",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4697,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 316,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 49987,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "236.052",
        "ok": "236.052",
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
        "total": "5000",
        "ok": "5000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "860",
        "ok": "860",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "270",
        "ok": "270",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "308",
        "ok": "308",
        "ko": "-"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles2": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "percentiles3": {
        "total": "807",
        "ok": "806",
        "ko": "-"
    },
    "percentiles4": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4684,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 316,
    "percentage": 6
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
        "total": "21.459",
        "ok": "21.459",
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
        "total": "50000",
        "ok": "50000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21675",
        "ok": "21675",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "19039",
        "ok": "19039",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2962",
        "ok": "2962",
        "ko": "-"
    },
    "percentiles1": {
        "total": "19590",
        "ok": "19590",
        "ko": "-"
    },
    "percentiles2": {
        "total": "19975",
        "ok": "19975",
        "ko": "-"
    },
    "percentiles3": {
        "total": "21196",
        "ok": "21195",
        "ko": "-"
    },
    "percentiles4": {
        "total": "21532",
        "ok": "21532",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 49987,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "214.592",
        "ok": "214.592",
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
