const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7515c5d439msh9e179eef210f21ap1127bdjsn4253d91c133f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let search = document.getElementById('search');
let btn=document.getElementById('search-btn')
let cityname=document.getElementById('cityname')
// var city="Delhi"
let humidity=document.getElementsByClassName('card-title pricing-card-title')
let humi=document.getElementsByClassName('list-unstyled mt-3 mb-4 a')
btn.addEventListener('click',(e)=>{
   e.preventDefault()
    city = search.value
    fetched(city)
    cityname.innerHTML =`Weather for ${city}`
    
})
const fetched = async(city)=>{
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    	.then(response => response.json())
    	.then(response =>{
            console.log(response)
            humidity[0].innerHTML=`${response.current['humidity']}%`
            humi[0].innerHTML=`wind direction-${response.current['wind_dir']}`
            humi[1].innerHTML=`Wind pressure-${response.current['wind_kph']}km/h`
            humi[2].innerHTML=`wind direction-${response.current['cloud']}`
            humi[3].innerHTML=`${response.current['temp_c']} degree celcius` 
            humi[4].innerHTML=`${response.current['temp_f']}F` 
            humi[5].innerHTML=`Last-updated on ${response.current['last_updated']}` 
            humidity[1].innerHTML=`${response.current['condition']['text']}`
           
        })
    	.catch(err => console.error(err));

}