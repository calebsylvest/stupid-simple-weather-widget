API_KEY = "1e9e4f4ae4b9736c5b27220be09a3ea5"
city = "Dallas"

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=" + API_KEY, function(data){

  console.log(data);

  var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon").attr("src", icon);
  $(".favicon").attr("href", icon);
  $(".temp").prepend(temp);
  $(".weather").append(weather);
  $(".city").append(city);

});
