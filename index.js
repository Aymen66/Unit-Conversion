let convertBtn = document.getElementById("convertBtn")


meterBtn.addEventListener("click", function(){
  let meterInput = document.getElementById("meterInput").value;
  document.getElementById("meterOutput").value = Number (meterInput/ 3.281).toFixed(3)
})
feetBtn.addEventListener("click", function(){
  let feetInput = document.getElementById("feetInput").value;
  document.getElementById("feetOutput").value = Number (feetInput *3.281).toFixed(3)
})

litersBtn.addEventListener("click", function(){
  let litersInput = document.getElementById("litersInput").value;
  document.getElementById("litersOutput").value = Number(litersInput * 4.546).toFixed(3)
})

gallonsBtn.addEventListener("click", function(){
  let gallonsInput = document.getElementById("gallonsInput").value;
  document.getElementById("gallonsOutput").value = Number(gallonsInput / 4.546).toFixed(3)
})


kilogramsBtn.addEventListener("click", function(){
  let kilogramsInput = document.getElementById("kilogramsInput").value;
  document.getElementById("kilogramsOutput").value = Number(kilogramsInput / 2.2046).toFixed(3)
})

poundsBtn.addEventListener("click", function(){
  let poundsInput = document.getElementById("poundsInput").value;
  document.getElementById("poundsOutput").value =Number(poundsInput * 2.2046).toFixed(3)
})
