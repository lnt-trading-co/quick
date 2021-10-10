function preload() {
    classifier = ml5.imageClassifier('DoodleNet')
}

function setup() {
    canvas = createCanvas(280, 280);
    bc= "red"
    background(bc)
    canvas.position(600, 410)
    //canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis;
}

function draw() {
    
   
stroke("black")
    strokeWeight(10);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
      
    }
}

function cc() {
    background(bc);
}
function done() {
    tc= document.getElementById("tc").value;
    stroke(tc);
    bc= document.getElementById("bc").value;
    background(bc);
    
}
function classifyCanvas() {
    classifier.classify(canvas, gotResults)
}
function gotResults(error, results) {
if(error){
    console.error(error)
}
else{
    console.log(results);
    dn= results[0].label;
    da= results[0].confidence;
    document.getElementById("o_n").innerHTML= dn;
    document.getElementById("acc").innerHTML= Math.round(da*100)+"%";
    utterThis= new SpeechSynthesisUtterance(dn);
synth.speak(utterThis)
}
}