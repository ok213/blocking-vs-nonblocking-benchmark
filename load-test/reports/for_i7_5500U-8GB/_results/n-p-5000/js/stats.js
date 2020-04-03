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
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12971",
        "ok": "12971",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9709",
        "ok": "9709",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3161",
        "ok": "3161",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10717",
        "ok": "10717",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10891",
        "ok": "10891",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11831",
        "ok": "11831",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12413",
        "ok": "12413",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4921,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 79,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 50000,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "387.324",
        "ok": "387.324",
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
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1094",
        "ok": "1094",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles1": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "percentiles2": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "percentiles3": {
        "total": "329",
        "ok": "329",
        "ko": "-"
    },
    "percentiles4": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4921,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 79,
    "percentage": 2
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
        "total": "35.211",
        "ok": "35.211",
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
        "total": "3106",
        "ok": "3106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12971",
        "ok": "12971",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10675",
        "ok": "10675",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "859",
        "ok": "859",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10740",
        "ok": "10740",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10913",
        "ok": "10913",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11943",
        "ok": "11944",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12439",
        "ok": "12439",
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
    "count": 50000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "352.113",
        "ok": "352.113",
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
