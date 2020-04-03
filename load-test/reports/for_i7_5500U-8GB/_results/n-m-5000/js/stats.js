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
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16500",
        "ok": "16500",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7610",
        "ok": "7610",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4806",
        "ok": "4806",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6740",
        "ok": "6741",
        "ko": "-"
    },
    "percentiles2": {
        "total": "12533",
        "ok": "12533",
        "ko": "-"
    },
    "percentiles3": {
        "total": "16067",
        "ok": "16067",
        "ko": "-"
    },
    "percentiles4": {
        "total": "16224",
        "ok": "16224",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9570,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 344,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 45086,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "440",
        "ok": "440",
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
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1893",
        "ok": "1893",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles3": {
        "total": "590",
        "ok": "590",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1556",
        "ok": "1556",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4776,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 126,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 98,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "40",
        "ok": "40",
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
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16500",
        "ok": "16500",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8363",
        "ok": "8363",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4377",
        "ok": "4377",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7079",
        "ok": "7094",
        "ko": "-"
    },
    "percentiles2": {
        "total": "12655",
        "ok": "12655",
        "ko": "-"
    },
    "percentiles3": {
        "total": "16103",
        "ok": "16103",
        "ko": "-"
    },
    "percentiles4": {
        "total": "16228",
        "ok": "16228",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4794,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 218,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 44988,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "400",
        "ok": "400",
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
