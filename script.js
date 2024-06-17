async function getWeather(){
	const location=document.getElementById('location').value;
	const apiKey='142dd06955e8e9af9bdd48a0a1015c6a';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

	try{
		const response= await fetch(url);
		const data= await response.json();

		if(data.cod==200){
			displayWeather(data);
		}
		else{
			document.getElementById('weather-info').innerHTML=`<p>${data.message}</p>`;
		}
	}
	catch(error){
		document.getElementById('weather-info').innerHTML=`<p>Failed to fetch Weather. Try again.</p>`;
	}
}

function displayWeather(data){
	const weatherInfo=`
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

	document.getElementById('weather-info').innerHTML=weatherInfo;
}