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
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4267",
        "ok": "4267",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1325",
        "ok": "1325",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "541",
        "ok": "541",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1188",
        "ok": "1189",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1547",
        "ok": "1547",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2528",
        "ok": "2528",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3271",
        "ok": "3271",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 654,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7059,
    "percentage": 47
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7287,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "428.571",
        "ok": "428.571",
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
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4267",
        "ok": "4267",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1325",
        "ok": "1325",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "541",
        "ok": "541",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1188",
        "ok": "1188",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1547",
        "ok": "1547",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2528",
        "ok": "2528",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3271",
        "ok": "3271",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 654,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7059,
    "percentage": 47
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7287,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "428.571",
        "ok": "428.571",
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
