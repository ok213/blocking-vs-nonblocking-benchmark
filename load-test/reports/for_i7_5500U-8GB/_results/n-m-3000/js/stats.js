var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33000",
        "ok": "33000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8370",
        "ok": "8370",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3851",
        "ok": "3851",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2338",
        "ok": "2338",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3333",
        "ok": "3334",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6071",
        "ok": "6071",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7345",
        "ok": "7345",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8072",
        "ok": "8072",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5549,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 356,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 27095,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "423.077",
        "ok": "423.077",
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
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1306",
        "ok": "1306",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles3": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles4": {
        "total": "979",
        "ok": "979",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2938,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 58,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.462",
        "ok": "38.462",
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
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8370",
        "ok": "8370",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4232",
        "ok": "4232",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2101",
        "ok": "2101",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3716",
        "ok": "3715",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6103",
        "ok": "6105",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7402",
        "ok": "7402",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8080",
        "ok": "8080",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2611,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 298,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 27091,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "384.615",
        "ok": "384.615",
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
