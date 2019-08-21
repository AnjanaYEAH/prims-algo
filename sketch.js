
let vertices = [];
function setup(){
  let reset = createButton("reset");
  reset.mousePressed(resetter);
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(makeNode);
}


function draw(){
  resizeCanvas(windowWidth, windowHeight);
  let reached = [];
  let unreached = [];
  for (let i = 0; i < vertices.length; i++){
    unreached[i] = vertices[i];
    fill(0);
    ellipse(vertices[i].x, vertices[i].y, 20);
  }
  reached[0] = unreached[0];
  unreached.splice(0,1);

  while(unreached.length>0){
    let node1;
    let node2;
    let smallestd = 10000000;
    for (let j = 0; j < reached.length; j++){
      for (let k = 0; k < unreached.length; k++){
        let v1 = reached[j];
        let v2 = unreached[k];
        console.log(v1);
        console.log(v2);
        let d = dist(v1.x, v1.y, v2.x, v2.y);
        if(d<smallestd){
          smallestd = d;
          node1 = j;
          node2 = k;
        }
      }
    }
    line(reached[node1].x, reached[node1].y, unreached[node2].x, unreached[node2].y);

    reached.push(unreached[node2]);
    unreached.splice(node2, 1);
  }

}

function makeNode(){
  let vertex = createVector(mouseX, mouseY);
  vertices.push(vertex);
}

function resetter(){
  vertices.splice(0, vertices.length);
}
