let datum = new Date()
let den=datum.getDate()
let mesic=datum.getMonth()+1
let rok =datum.getFullYear()

document.getElementById("datum").innerText="Dnes je "+den+". "+mesic+". "+rok

function cas(){
let hodina = datum.getHours()
let minuta = datum.getMinutes()
let sekunda = datum.getSeconds()

if (minuta<10)
	minuta = "0"+minuta
if (sekunda<10)
	sekunda = "0"+sekunda
document.getElementById("cas").innerText=hodina+":"+minuta+":"+sekunda
}
cas()