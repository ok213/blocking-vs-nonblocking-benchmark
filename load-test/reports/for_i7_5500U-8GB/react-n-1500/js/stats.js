var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15000",
        "ok": "15000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3054",
        "ok": "3054",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "466",
        "ok": "466",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "percentiles1": {
        "total": "346",
        "ok": "346",
        "ko": "-"
    },
    "percentiles2": {
        "total": "508",
        "ok": "508",
        "ko": "-"
    },
    "percentiles3": {
        "total": "933",
        "ok": "933",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1682",
        "ok": "1682",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13946,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 629,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 425,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "500",
        "ko": "-"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "15000",
        "ok": "15000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3054",
        "ok": "3054",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "466",
        "ok": "466",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "percentiles1": {
        "total": "346",
        "ok": "346",
        "ko": "-"
    },
    "percentiles2": {
        "total": "508",
        "ok": "508",
        "ko": "-"
    },
    "percentiles3": {
        "total": "933",
        "ok": "933",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1682",
        "ok": "1682",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13946,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 629,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 425,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "500",
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
