const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '568b21cf41msh1fcf261104225c9p1de911jsnd66ddb70b737',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather=(city)=>{
cityName.innerHTML=city
async function weather(){
	const response = await fetch(url+city, options);
	const result = await response.json();
	console.log(result);
	cloud_pct.innerHTML=result.cloud_pct
    temp.innerHTML=result.temp
    feels_like.innerHTML=result.feels_like
    humidity.innerHTML=result.humidity
    min_temp.innerHTML=result.min_temp
    max_temp.innerHTML=result.max_temp
    wind_speed.innerHTML=result.wind_speed
    sunrise.innerHTML=result.sunrise
    sunset.innerHTML=result.sunset
	
}
try {
      weather();
} catch (error) {
	console.error(error);
}
}
submit.addEventListener("click", function(e) {
	e.preventDefault()

	getweather(city.value);
  });
  getweather("hisar")
  const cities=["delhi","bangalore","mumbai","kolkata","hisar","chandigarh"]
  const getweather0=(city)=>{
	async function weather(){
	
		const response = await fetch(url+city, options);
		const result = await response.json();
		console.log(result);
		console.log(result.cloud_pct)
		cloud_pct0.innerHTML=result.cloud_pct
		temp0.innerHTML=result.temp
		feels_like0.innerHTML=result.feels_like
		humidity0.innerHTML=result.humidity
		min_temp0.innerHTML=result.min_temp
		max_temp0.innerHTML=result.max_temp
		
		sunrise0.innerHTML=result.sunrise
	    sunset0.innerHTML=result.sunset
		wind_degrees0.innerHTML=result.wind_degrees
		windspeed0.innerHTML=result.wind_speed
	}
	try {
		  weather();
	} catch (error) {
		console.error(error);
	}
	} 
	const getweather1=(city)=>{
		async function weather(){
		
			const response = await fetch(url+city, options);
			const result = await response.json();
			console.log(result);
			console.log(result.cloud_pct)
			cloud_pct1.innerHTML=result.cloud_pct
			temp1.innerHTML=result.temp
			feels_like1.innerHTML=result.feels_like
			humidity1.innerHTML=result.humidity
			min_temp1.innerHTML=result.min_temp
			max_temp1.innerHTML=result.max_temp
	
			sunrise1.innerHTML=result.sunrise
			sunset1.innerHTML=result.sunset
			wind_degrees1.innerHTML=result.wind_degrees
			windspeed1.innerHTML=result.wind_speed
		}
		try {
			  weather();
		} catch (error) {
			console.error(error);
		}
		} 
		const getweather2=(city)=>{
			async function weather(){
			
				const response = await fetch(url+city, options);
				const result = await response.json();
				console.log(result);
				console.log(result.cloud_pct)
				cloud_pct2.innerHTML=result.cloud_pct
				temp2.innerHTML=result.temp
				feels_like2.innerHTML=result.feels_like
				humidity2.innerHTML=result.humidity
				min_temp2.innerHTML=result.min_temp
				max_temp2.innerHTML=result.max_temp
				
				sunrise2.innerHTML=result.sunrise
				sunset2.innerHTML=result.sunset
				wind_degrees2.innerHTML=result.wind_degrees
				windspeed2.innerHTML=result.wind_speed
			}
			try {
				  weather();
			} catch (error) {
				console.error(error);
			}
			} 
			const getweather3=(city)=>{
				async function weather(){
				
					const response = await fetch(url+city, options);
					const result = await response.json();
					console.log(result);
					console.log(result.cloud_pct)
					cloud_pct3.innerHTML=result.cloud_pct
					temp3.innerHTML=result.temp
					feels_like3.innerHTML=result.feels_like
					humidity3.innerHTML=result.humidity
					min_temp3.innerHTML=result.min_temp
					max_temp3.innerHTML=result.max_temp
					
					sunrise3.innerHTML=result.sunrise
					sunset3.innerHTML=result.sunset
					wind_degrees3.innerHTML=result.wind_degrees
					windspeed3.innerHTML=result.wind_speed
				}
				try {
					  weather();
				} catch (error) {
					console.error(error);
				}
				} 
				const getweather4=(city)=>{
					async function weather(){
					
						const response = await fetch(url+city, options);
						const result = await response.json();
						console.log(result);
						console.log(result.cloud_pct)
						cloud_pct4.innerHTML=result.cloud_pct
						temp4.innerHTML=result.temp
						feels_like4.innerHTML=result.feels_like
						humidity4.innerHTML=result.humidity
						min_temp4.innerHTML=result.min_temp
						max_temp4.innerHTML=result.max_temp
						
						sunrise4.innerHTML=result.sunrise
						sunset4.innerHTML=result.sunset
						wind_degrees4.innerHTML=result.wind_degrees
						windspeed4.innerHTML=result.wind_speed
					}
					try {
						  weather();
					} catch (error) {
						console.error(error);
					}
					} 
					const getweather5=(city)=>{
						async function weather(){
						
							const response = await fetch(url+city, options);
							const result = await response.json();
							console.log(result);
							console.log(result.cloud_pct)
							cloud_pct5.innerHTML=result.cloud_pct
							temp5.innerHTML=result.temp
							feels_like5.innerHTML=result.feels_like
							humidity5.innerHTML=result.humidity
							min_temp5.innerHTML=result.min_temp
							max_temp5.innerHTML=result.max_temp
							
							sunrise5.innerHTML=result.sunrise
							sunset5.innerHTML=result.sunset
							wind_degrees5.innerHTML=result.wind_degrees
							windspeed5.innerHTML=result.wind_speed
						}
						try {
							  weather();
						} catch (error) {
							console.error(error);
						}
						} 
						
    getweather0(cities[0])
	getweather1(cities[1])
	getweather2(cities[2])
	getweather3(cities[3])
	getweather4(cities[4])
	getweather5(cities[5])
