function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("apiKey=GU6qekR17503a6b2326f09fbc4e3a7c03874c733300****&city=广州&areaID=101280101");
    //为了写教程也是豁出去了，我的apiSHop免费次数！哭
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
}

function showWeather(result) {
    console.log(result)
    result = JSON.parse(result);
    var list = result.result.dayList;
    var table = '<table><tr><th>日期</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>';
    for (var i in list) {
        table += '<tr>';
        table += '<td>' +list[i].daytime + '</td>';
        table += '<td>' + list[i].day_weather + '</td>';
        table += '<td>' + Math.round(list[i].night_air_temperature ) + ' °C</td>';
        table += '<td>' + Math.round(list[i].day_air_temperature) + ' °C</td>';
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('weather').innerHTML = table;
}

var url = 'http://api.apishop.net/common/weather/get15DaysWeatherByArea';
httpRequest(url, showWeather);