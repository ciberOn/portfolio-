const list=["yes","no","maybe","-5kibron","baba lyda","bul bul bul"]
const btn =document.getElementById("btn")
btn.addEventListener("click",()=>{
    let randomInt =Math.floor(Math.random()*list.length)
    btn.innerText=list[randomInt]
})