const key = "cac107247aa51894b680aac2e0ed25d9"
const city = document.querySelector(".poisk")
const wind = document.querySelector('.wind')  
const namecity = document.querySelector('.h2')  
const humidity = document.querySelector('.humidity')  
const temp = document.querySelector('.h1')  


async function wether() {
    const input = city.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`
    const poisk = document.querySelector(".poisk")
    const responce = await fetch (url)
    const data = await responce.json()
    console.log(data.main.temp)
    console.log(data)
    console.log(data.name)
    console.log(data.main.humidity)
    console.log(data.wind.speed)
    console.log(data.weather[0].main)

    // document.getElementById("wind").innerHTML = `${data.wind.speed} km/h`;
    wind.textContent = `${data.wind.speed} km/h`;
    document.getElementById("h2").innerHTML = `${data.name}`;
    // namecity.textContent = `${data.name}`;  
    humidity.textContent = `${data.main.humidity}%`;  
    // temp.textContent =`${data.main.temp}°c`;
    document.getElementById("h1").innerHTML = `${data.main.temp} °c  `;
    h3.textContent= `${data.weather[0].main}`


    const imgElement = document.createElement("img");
    const imgElement2 = document.createElement("img");
    const imgElement3 = document.createElement("img");
    const imgElement4 = document.createElement("img");
    const imgElement5 = document.createElement("img");
    const imgElement6 = document.createElement("img");
    imgElement.src = "images/clear.png";
    imgElement2.src = "images/clouds.png";
    imgElement3.src = "images/drizzle.png";
    imgElement4.src = "images/mist.png";
    imgElement5.src = "images/rain.png";
    imgElement6.src = "images/snow.png";


    
    const imgContainer = document.querySelector(".body2");
    imgContainer.innerHTML = '';

    if(`${data.weather[0].main}` === "Clear"){
        const img = document.querySelector(".body2")
        img.appendChild(imgElement)
    }
    else if(`${data.weather[0].main}` === "Clouds"){
        const img = document.querySelector(".body2")
        img.appendChild(imgElement2)
    }
    else if(`${data.weather[0].main}` === "Drizzle"){
        const img = document.querySelector(".body2")
        img.appendChild(imgElement3)
    }
    else if(`${data.weather[0].main}` === "Mist"){
        const img = document.querySelector(".body2")
        img.appendChild(imgElement4)
    }
    else if(`${data.weather[0].main}` === "Rain"){
        const img = document.querySelector(".body2")
        img.appendChild(imgElement5)
    }
    else if(`${data.weather[0].main}` === "Snow"){
        const img = document.querySelector(".body2")
        img.appendChild(imgElement6)
    }

    
}



// document.getElementById("h2").innerHTML = city;
document.querySelector(".krug").addEventListener("click", function() {
    wether()
});