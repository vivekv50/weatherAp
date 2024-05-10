let input=document.querySelector("input");
let btn=document.querySelector("button");
let temp=document.querySelector("h2");
let city=document.querySelectorAll("h3")[0];
let humidity=document.querySelectorAll("h3")[1];

let apiKey="6f28b263f21c1a09cac7b256e6a1daf7";

btn.addEventListener("click",async()=>{
    temp.innerHTML="";
    city.innerHTML="";
    humidity.innerHTML="";
    try{
        let weatherApi=`https://api.openweathermap.org/data/2.5/weather?q=${input.value.trim()}&appid=${apiKey}`;
        let wheater= await fetch(weatherApi);
        let apiJson= await wheater.json();
        console.log(apiJson);
        temp.innerHTML=`<i class="fa-solid fa-temperature-three-quarters"></i>  Temperature: ${Math.floor(apiJson.main.temp - 273)}<sup>o</sup>C`;
        city.innerHTML=`<i class="fa-solid fa-wind"></i>  Wind: ${apiJson.wind.speed}`;
        humidity.innerHTML=`<i class="fa-solid fa-heat"></i>  Humidity: ${apiJson.weather[0].main}`;
    }catch(error){
        // console.log(error);
        city.innerHTML=`Invalid data...../`;
    }
});

let div1=document.querySelector("#ncr");
let ntemp=document.querySelector("#ntemp");
let ncity=document.querySelector("#nwind");
let nhumidity=document.querySelector("#nhumd");
let delhi = async ()=>{
    try{
        let weatherApi=`https://api.openweathermap.org/data/2.5/weather?q=${'Delhi'}&appid=${apiKey}`;
        let wheater= await fetch(weatherApi);
        let apiJson= await wheater.json();
        console.log(apiJson);
        ntemp.innerHTML=`<i class="fa-solid fa-temperature-three-quarters"></i>  Temperature: ${Math.floor(apiJson.main.temp - 273)}<sup>o</sup>C`;
        ncity.innerHTML=`<i class="fa-solid fa-wind"></i>  Wind: ${apiJson.wind.speed}`;
        nhumidity.innerHTML=`<i class="fa-solid fa-heat"></i>  Humidity: ${apiJson.weather[0].main}`;
    }catch(error){
        // console.log(error);
        city.innerHTML=`Invalid data...../`;
    }
}
delhi();

let div2=document.querySelector("#mum");
let mtemp=document.querySelector("#mtemp");
let mcity=document.querySelector("#mwind");
let mhumidity=document.querySelector("#mhumd");
let Mumbai = async ()=>{
    try{
        let weatherApi=`https://api.openweathermap.org/data/2.5/weather?q=${'Mumbai'}&appid=${apiKey}`;
        let wheater= await fetch(weatherApi);
        let apiJson= await wheater.json();
        console.log(apiJson);
        mtemp.innerHTML=`<i class="fa-solid fa-temperature-three-quarters"></i>  Temperature: ${Math.floor(apiJson.main.temp - 273)}<sup>o</sup>C`;
        mcity.innerHTML=`<i class="fa-solid fa-wind"></i>  Wind: ${apiJson.wind.speed}`;
        mhumidity.innerHTML=`<i class="fa-solid fa-heat"></i>  Humidity: ${apiJson.weather[0].main}`;
    }catch(error){
        // console.log(error);
        city.innerHTML=`Invalid data...../`;
    }
}
Mumbai();

let div3=document.querySelector("#kol");
let ktemp=document.querySelector("#ktemp");
let kcity=document.querySelector("#kwind");
let khumidity=document.querySelector("#khumd");
let kolkata = async ()=>{
    try{
        let weatherApi=`https://api.openweathermap.org/data/2.5/weather?q=${'Kolkata'}&appid=${apiKey}`;
        let wheater= await fetch(weatherApi);
        let apiJson= await wheater.json();
        console.log(apiJson);
        ktemp.innerHTML=`<i class="fa-solid fa-temperature-three-quarters"></i>  Temperature: ${Math.floor(apiJson.main.temp - 273)}<sup>o</sup>C`;
        kcity.innerHTML=`<i class="fa-solid fa-wind"></i>  Wind: ${apiJson.wind.speed}`;
        khumidity.innerHTML=`<i class="fa-solid fa-heat"></i>  Humidity: ${apiJson.weather[0].main}`;
    }catch(error){
        // console.log(error);
        city.innerHTML=`Invalid data...../`;
    }
}
kolkata();

let div4=document.querySelector("#Beng");
let btemp=document.querySelector("#btemp");
let bcity=document.querySelector("#bwind");
let bhumidity=document.querySelector("#bhumd");
let Beng = async ()=>{
    try{
        let weatherApi=`https://api.openweathermap.org/data/2.5/weather?q=${'bangalore'}&appid=${apiKey}`;
        let wheater= await fetch(weatherApi);
        let apiJson= await wheater.json();
        console.log(apiJson);
        btemp.innerHTML=`<i class="fa-solid fa-temperature-three-quarters"></i>  Temperature: ${Math.floor(apiJson.main.temp - 273)}<sup>o</sup>C`;
        bcity.innerHTML=`<i class="fa-solid fa-wind"></i>  Wind: ${apiJson.wind.speed}`;
        bhumidity.innerHTML=`<i class="fa-solid fa-heat"></i>  Humidity: ${apiJson.weather[0].main}`;
    }catch(error){
        // console.log(error);
        city.innerHTML=`Invalid data...../`;
    }
}
Beng();