onmessage = function(e) {
    while (e >= 1){
        e.data = e
        e -= 1;
        sleep(1);
        console.log("Time remaining : " + e / 1000);
        var result = $("h2") .html("Time remaining : " + e / 1000);
        postMessage(result)
    }
}