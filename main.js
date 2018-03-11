window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      var gravity = vector.create(0, 0.1);
      var particles = [];

      for(var i = 0 ; i < 100; i++) {
        var p = particle.create(width/2, height/2, Math.random() * 5, Math.random() * Math.PI* 2);

        particles.push(p);
      }

      update();

      function update() {
        // Store the current transformation matrix
        context.save();

        // Use the identity matrix while clearing the canvas
        context.setTransform(1, 0, 0, 1, 0, 0);

        context.clearRect(0, 0, canvas.width, canvas.height);
        // console.log('update');

        for(var i = 0 ; i < particles.length; i++ ) {
          var p = particles[i];
          context.beginPath();
          context.rect(p.position.getX(), p.position.getY(), 10, 10);
          p.update();
          p.velocity.addTo(gravity);
          context.stroke();
        }
        context.restore();
        requestAnimationFrame(update);
      }
}


/*
var v1 = vector.create(10, 5);

console.log(v1.getX());
console.log(v1.getY());
console.log(v1.getAngle());
console.log(v1.getLength());

v1.setAngle(Math.PI / 6);
v1.setLength(100);


console.log(v1.getX());
console.log(v1.getY());

*/

var v1 = vector.create(10, 5);
var v2 = vector.create(3, 4);
var v3 = v1.add(v2);

console.log(v3.getX(), v3.getY());
v1.addTo(v2);
console.log(v1.getX(), v1.getY());
