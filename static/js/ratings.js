var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var stats = JSON.parse(xmlHttp.responseText);
        document.querySelector("#quality").style.width = stats.values[0][2];
        document.querySelector("#speed").style.width = stats.values[1][2];
        document.querySelector("#comm").style.width = stats.values[2][2];
        document.querySelector("#service").style.width = stats.values[3][2];
        document.querySelector("#order-total").outerHTML = stats.values[4][1];
        document.querySelector("#quality-score").innerHTML = stats.values[0][1];
        document.querySelector("#speed-score").innerHTML = stats.values[1][1];
        document.querySelector("#comm-score").innerHTML = stats.values[2][1];
        document.querySelector("#service-score").innerHTML = stats.values[3][1];
    }
}
xmlHttp.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1z27GLpVT6BsGpQ_8FlJVexku9_4ai_LzLTFG3v3_WgM/values/Stats!A1:C5?key=AIzaSyAaQ44Kp0sj4uqn38-q8t-9MdpEe2HiaUQ", true); // true for asynchronous 
xmlHttp.send(null);