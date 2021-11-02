
function getWeather(){
    let cityId = document.querySelector('#cities').value;
    fetch('http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&appid=e47c6513ad74f8b562e9132a4660265c')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
     console.log(data);
     document.querySelector('.city_name').textContent = data.name + ', ' + data.sys['country'];
     let d= new Date().toLocaleDateString();
     document.querySelector('.date').textContent = d;
     document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
     document.querySelector('.weather').textContent = data.weather[0]['description'];
     document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
     document.querySelector('.weather').textContent = data.main['humidity'] + '% humidity';
    
    })
    .catch(function () {
        // catch any errors
    });  
}
document.querySelector('#cities').onchange = getWeather;
getWeather();






// fetch('http://api.openweathermap.org/data/2.5/weather?id=709611&appid=e47c6513ad74f8b562e9132a4660265c')
//     .then(function (resp) { return resp.json() })
//     .then(function (data) {
//      console.log(data);
//      document.querySelector('.city_name').textContent = data.name + ', ' + data.sys['country'];
//      let d= new Date().toLocaleDateString();
//      document.querySelector('.date').textContent = d;
//      document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
//      document.querySelector('.weather').textContent = data.weather[0]['description'];
//      document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//      document.querySelector('.weather').textContent = data.main['humidity'] + '% humidity';
    
//     })
//     .catch(function () {
//         // catch any errors
//     });