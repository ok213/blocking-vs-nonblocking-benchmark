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
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10482",
        "ok": "10482",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7593",
        "ok": "7593",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2734",
        "ok": "2734",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8370",
        "ok": "8372",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8893",
        "ok": "8892",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9879",
        "ok": "9879",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10382",
        "ok": "10382",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3052,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 29937,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "275",
        "ok": "275",
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
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "640",
        "ok": "640",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles1": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles2": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "percentiles3": {
        "total": "107",
        "ok": "107",
        "ko": "-"
    },
    "percentiles4": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3000,
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
        "total": "25",
        "ok": "25",
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
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10482",
        "ok": "10482",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8348",
        "ok": "8348",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1396",
        "ok": "1396",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8600",
        "ok": "8602",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8938",
        "ok": "8939",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9953",
        "ok": "9953",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10387",
        "ok": "10387",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 52,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 29937,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "250",
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
