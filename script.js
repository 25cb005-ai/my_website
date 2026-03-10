let chart;

function generateData(){

let heart = Math.floor(Math.random()*40)+60;
let bp1 = Math.floor(Math.random()*40)+100;
let bp2 = Math.floor(Math.random()*20)+70;
let oxygen = Math.floor(Math.random()*5)+95;
let temp = (Math.random()*2+36).toFixed(1);

if(heart > 100){
alert("⚠ Warning: High Heart Rate Detected!");
}

document.getElementById("heart").innerText = heart + " bpm";
document.getElementById("bp").innerText = bp1 + " / " + bp2;
document.getElementById("oxygen").innerText = oxygen + " %";
document.getElementById("temp").innerText = temp + " °C";

updateChart(heart,oxygen,temp);

}

function updateChart(h,o,t){

if(chart) chart.destroy();

const ctx = document.getElementById("healthChart");

chart = new Chart(ctx,{
type:'bar',
data:{
labels:["Heart Rate","Oxygen","Temperature"],
datasets:[{
label:"Patient Health Data",
data:[h,o,t]
}]
}
});

}