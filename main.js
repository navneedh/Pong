
var switch1 = 0;
var position_value_1 = 0;
var position_value_2 = 0;
var score1 = 0;
var score2 = 0;
setInterval(function() {change_direction()}, 15);

document.getElementById("frame").addEventListener("keydown",function (){
if (event.keyCode == 40) {
  move_left('d');
}
else if (event.keyCode == 38) {
  move_left('u');
}

  });

  document.getElementById("frame").addEventListener("keydown",function (){
    if (event.keyCode == 83) {
      move_right('d');
    }
    else if (event.keyCode == 87) {
      move_right('u');
    }

    });

  function move_right(direction) {

    position = (document.getElementById("paddle2").style.top)
    position_value_2 = parseInt(position, 10);

    if (direction === 'd') {
      position_value_2 = position_value_2 + 30;
    }
    else {
      position_value_2 = position_value_2 - 30;
    }

    document.getElementById("paddle2").style.top= position_value_2 + "px";
  }
function move_left(direction) {

  position = (document.getElementById("paddle1").style.top)
  position_value_1 = parseInt(position, 10);

  if (direction === 'd') {
    position_value_1 = position_value_1 + 30;
  }
  else {
    position_value_1 = position_value_1 - 30;
  }

  document.getElementById("paddle1").style.top= position_value_1 + "px";
}

function change_direction() {
if (document.getElementById("ball").style.top== '100px' && document.getElementById("ball").style.left== '100px') { //start position
 x = 4
  y = 4
}
  if (window.innerHeight - document.getElementById("ball").offsetTop -50 < 1) { //bottom
    if (switch1 == 0) {
    x = -4
    y = 4
  }
  else {
    x = -4
    y = -4
  }
  }

  if ((window.innerWidth - document.getElementById("ball").offsetLeft) -100< 1&& parseInt(document.getElementById("ball").style.top, 10) < position_value_2 + 150 && parseInt(document.getElementById("ball").style.top, 10) > position_value_2) { //right
    x = -(((Math.random() * 5) + 1))
    y = -(((Math.random() * 5) + 1))
    switch1 = 1;
     if (window.innerWidth - document.getElementById("ball").offsetLeft < 1) {
       document.getElementById("ball").style.top = '200px';
       document.getElementById("ball").style.left = '200px';
       score1 = score1 + 1;
       if (document.getElementById("score1").children.length != 0) {
                document.getElementById("score1").removeChild(document.getElementById("score1").childNodes[1]);
       }
       var par = document.createElement('P');
       var score_value = document.createTextNode(score1);
       par.appendChild(score_value);
       document.getElementById("score1").appendChild(par);
     }
  }

  else if (document.getElementById("ball").offsetTop < 1) { //height
    if (switch1 == 1) {
    x = 4
    y = -4
  }
  else {
    x = 4
    y = 4
  }
   }

   else if ((document.getElementById("ball").offsetLeft) - 50 < 1 && parseInt(document.getElementById("ball").style.top, 10) < position_value_1 + 150 && parseInt(document.getElementById("ball").style.top, 10) > position_value_1) { //left
     x = (((Math.random() * 5) + 1))
     y = (((Math.random() * 5) + 1))
      switch1 = 0;
      if (document.getElementById("ball").offsetLeft < 1) {
        document.getElementById("ball").style.top = '300px';
        document.getElementById("ball").style.left = '300px';
        score2 = score2 + 1;
        if (document.getElementById("score2").children.length != 0) {
                 document.getElementById("score2").removeChild(document.getElementById("score2").childNodes[1]);
        }
        var par2 = document.createElement('P');
        var score_value2 = document.createTextNode(score2);
        par2.appendChild(score_value2);
        document.getElementById("score2").appendChild(par2);
      }
    }

  position_y = (document.getElementById("ball").style.top)
  position_value_y = parseInt(position_y, 10);
  position_x = (document.getElementById("ball").style.left)
  position_value_x = parseInt(position_x, 10);
  console.log(document.getElementById("ball").style.top);
  position_value_y = position_value_y + x;
  position_value_x = position_value_x + y;
  document.getElementById("ball").style.top= position_value_y + "px";
  document.getElementById("ball").style.left= position_value_x + "px";

}
