
const API_KEY = config.apikey;

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-Child");
            const weather = document.querySelector("#weather span:last-Child");
            
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main}/${data.main.temp}°C`;
        });    
};

function onGeoError(){
    alert("사용자의 위치를 찾을 수 없어 서울 날씨를 보여드릴게요.");
    const url =`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-Child");
            const weather = document.querySelector("#weather span:last-Child");
            
            city.innerText = data.name; 
            weather.innerText = data.weather[0].main;
            }
        );
};

// 현재 위치를 위도/경도로 받아온다.
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);