let datum = new Date()
let den=datum.getDate()
let mesic=datum.getMonth()+1
let rok =datum.getFullYear()

document.getElementById("datum").innerText="Dnes je "+den+". "+mesic+". "+rok
let hodina = datum.getHours()
let minuta = datum.getMinutes()
let sekunda = datum.getSeconds()
document.getElementById("cas").innerText=hodina+":"+minuta+":"+sekunda