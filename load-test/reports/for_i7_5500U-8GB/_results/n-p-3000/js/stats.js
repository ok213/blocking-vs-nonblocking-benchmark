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
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7494",
        "ok": "7494",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5060",
        "ok": "5060",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1696",
        "ok": "1696",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5355",
        "ok": "5346",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5684",
        "ok": "5684",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6985",
        "ok": "6985",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7189",
        "ok": "7189",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2997,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 30000,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "370.787",
        "ok": "370.787",
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
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "880",
        "ok": "880",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles2": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles3": {
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "percentiles4": {
        "total": "545",
        "ok": "545",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2997,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
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
        "total": "33.708",
        "ok": "33.708",
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
        "total": "1902",
        "ok": "1902",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7494",
        "ok": "7494",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5563",
        "ok": "5563",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "614",
        "ok": "614",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5477",
        "ok": "5477",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5704",
        "ok": "5704",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6996",
        "ok": "6996",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7197",
        "ok": "7197",
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
    "count": 30000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "337.079",
        "ok": "337.079",
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
