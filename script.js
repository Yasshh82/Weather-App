const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7259a4706emsh5509b05aa85743dp136097jsn3be177de6130',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url, options)
.then(response => response.json())
.then (response => console.log(response))
.catch(err=>console.error(err));