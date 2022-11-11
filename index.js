let convertBtn = document.getElementById("convertBtn")


meterBtn.addEventListener("click", function(){
  let input = document.getElementById("input").value;
  document.getElementById("meterOutput").value = Number (input/ 3.281).toFixed(3)
})
feetBtn.addEventListener("click", function(){
  let input = document.getElementById("input").value;
  document.getElementById("feetOutput").value = Number (input *3.281).toFixed(3)
})

litersBtn.addEventListener("click", function(){
  let input = document.getElementById("input").value;
  document.getElementById("litersOutput").value = Number(input * 4.546).toFixed(3)
})

gallonsBtn.addEventListener("click", function(){
  let input = document.getElementById("input").value;
  document.getElementById("gallonsOutput").value = Number(input / 4.546).toFixed(3)
})


kilogramsBtn.addEventListener("click", function(){
  let input = document.getElementById("input").value;
  document.getElementById("kilogramsOutput").value = Number(input / 2.2046).toFixed(3)
})

poundsBtn.addEventListener("click", function(){
  let input = document.getElementById("input").value;
  document.getElementById("poundsOutput").value = Number(input * 2.2046).toFixed(3)
})