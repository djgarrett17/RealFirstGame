
$(document).ready(function(){
    $(".character").css(("left","20%"), 4000);
  });
  
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
      window.setTimeout(callback, 1000 / 60);
  };

})();


var flakes = [],
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  flakeCount = 100,
  mX = -100,
  mY = -100

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;



  function snow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < flakeCount; i++) {
      var flake = flakes[i],
          x = mX,
          y = mY,
          minDist = 70,
          x2 = flake.x,
          y2 = flake.y;

      var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
          dx = x2 - x,
          dy = y2 - y;

      if (dist < minDist) {
          var force = minDist / (dist * dist),
              xcomp = (x - x2) / dist,
              ycomp = (y - y2) / dist,
              deltaV = force / .8;

          flake.velX -= deltaV * xcomp;
          flake.velY -= deltaV * ycomp;

      } else {
          flake.velX *= .98;
          if (flake.velY <= flake.speed) {
              flake.velY = flake.speed
          }
          flake.velX += Math.cos(flake.step += .03) * flake.stepSize;
      }

      ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
      flake.y += flake.velY;
      flake.x += flake.velX;

      if (flake.y >= canvas.height || flake.y <= 0) {
          reset(flake);
      }


      if (flake.x >= canvas.width || flake.x <= 0) {
          reset(flake);
      }
      var vw= (document.documentElement.clientWidth/100);
      // var elementyo = getElementById(img)
      var w = screen.width;
      var vwww= (14000 / vw)-930; //larger number as screen gets smaller DO THAT THIS
      // var r = elementyo.getBoundingClientRect().right
      var offset = $(".character").offset();
      


      
      // function countitup(){
        
      // };
      
  if (count<=10){
      if (flake.y >= (568) && flake.x >= offset.left  && flake.x <= (w - offset.left - vwww )){
        // countitup();
        
        var button = document.getElementById("counter");
        count += 1;
        button.innerHTML = "Counter: " + count;
        
      }
    } else {
      // reset(count);
      button.innerHTML = "Counter: " + (count -10);
      $(".youlose").css("color","black");
    }


      if (flake.y >= (568) && flake.x >= offset.left && flake.x <= (w - offset.left - vwww)){
        reset(flake);
      }
      
      
      // var rect = elementyo.getBoundingClientRect();
      // var rect = 


      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fill();
      
  }

         let  myReq =  requestAnimationFrame(snow);
      // console.log(myReq);
      jam = myReq
  };
      
    
    function stop(){
     
        var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

        cancelAnimationFrame(jam)
    }


        function start() {
          // var starttime = Date.now();
            var requestId = window.requestAnimationFrame(snow);
            
        }
        var button = document.getElementById("counter"),
        count = 0;
      button.onclick = function() {
        count += 1;
        button.innerHTML = "Counter: " + count;
      };


          // if(  ){
    
            // item position
            // var thisPosition = $(this).position();
           
    
            // Character position and width
            // var characterPosition = $(".character").position();
          
    
    
            // If object and bucket at same position
            // if( thisPosition.top >= bucketPosition.top 
            //    && thisPosition.left >= bucketPosition.left
            //    && thisPosition.left <= bucketPosition.left + 100 ){
    
            //   $(this).remove();
              // score++;
              //console.log(score);
    
              // Update the score display
              // $("#score").html(score);
            // }
    
            // Food not catched...
            // if( thisPosition.top >= bucketPosition.top + bucketHeight){
            //   $(this).remove();
            //   fails++;
              //console.log("FAILS: "+fails);
            // }
    
            // if more than 3 miss => Game over.
        //     if(fails>3){
        //       $("#failMsg").show();
        //       $("#spelare").remove();
        //       $(".food").remove();
        //       clearInterval(spanfoodInterval);
        //       clearInterval(fallInterval);
        //     }
        //   }
        // });
        // cancelAnimationFrame(jam)
    //     function stop() {
    //         if (requestId) {
    //             window.cancelAnimationFrame(requestId);
    //         }
    //         stopped = true;
    //     }
  // $(".stopitt").click(function(){
  //       $(".clickhere").stop();
  //     });
  // function continueWithIt(){
  //     flag = true;
  //     foo();
  // }

  // foo();
function reset(flake) {
  flake.x = Math.floor(Math.random() * canvas.width);
  flake.y = 0;
  flake.size = (Math.random() * 3) + 2;
  flake.speed = (Math.random() * 1) + 0.5;
  flake.velY = flake.speed;
  flake.velX = 0;
  flake.opacity = (Math.random() * 0.5) + 0.3;
}

function init() {
  for (var i = 0; i < flakeCount; i++) {
      var x = Math.floor(Math.random() * canvas.width),
          y = Math.floor(Math.random() * canvas.height),
          size = (Math.random() * 3) + 2,
          speed = (Math.random() * 1) + 0.5,
          opacity = (Math.random() * 0.5) + 0.3;

      flakes.push({
          speed: speed,
          velY: speed,
          velX: 0,
          x: x,
          y: y,
          size: size,
          stepSize: (Math.random()) / 15,
          step: 0,
          opacity: opacity
      });
  }

  snow();
};

canvas.addEventListener("mousemove", function(e) {
  mX = e.clientX,
  mY = e.clientY
});

window.addEventListener("resize",function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

init();
  // var snow = $( ".snow" ).data( "arr", [ 2 ] ),
  // $clone = snow.clone( true )
    // Deep copy to prevent data sharing
    // .data( "arr", $.extend( [], snow.data( "arr" ) ) );
  //   $(document).ready(function() {
  //     var e = $('.snow');
  //     for (var i = 0; i < 16; i++) {
  //       e.clone().insertAfter(e);
  //     }
  // });
  // $( ".instructions" ).click(function() {
  //   $( canvas ).stop();
  // });

//   (function() {
//     var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
//     function(callback) {
//         window.setTimeout(callback, 1000 / 60);
//     };
//     window.requestAnimationFrame = requestAnimationFrame;
// })();


// var flakes = [],
//     canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext("2d"),
//     flakeCount = 400,
//     mX = -100,
//     mY = -100

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     var flag = true;
// function foo(){
//         if (flag === true){
//     function snow() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     for (var i = 0; i < flakeCount; i++) {
//         var flake = flakes[i],
//             x = mX,
//             y = mY,
//             minDist = 130,
//             x2 = flake.x,
//             y2 = flake.y;

//         var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
//             dx = x2 - x,
//             dy = y2 - y;

//         if (dist < minDist) {
//             var force = minDist / (dist * dist),
//                 xcomp = (x - x2) / dist,
//                 ycomp = (y - y2) / dist,
//                 deltaV = force / .5;

//             flake.velX -= deltaV * xcomp;
//             flake.velY -= deltaV * ycomp;

//         } else {
//             flake.velX *= .98;
//             if (flake.velY <= flake.speed) {
//                 flake.velY = flake.speed
//             }
//             flake.velX += Math.cos(flake.step += .03) * flake.stepSize;
//         }

//         ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
//         flake.y += flake.velY;
//         flake.x += flake.velX;
            
//         if (flake.y >= canvas.height || flake.y <= 0) {
//             reset(flake);
//         }


//         if (flake.x >= canvas.width || flake.x <= 0) {
//             reset(flake);
//         }

//         ctx.beginPath();
//         ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
//         ctx.fill();
//     }
//     requestAnimationFrame(snow);
// };
      //   }
      // }
    //   function stop(){
    //     flag = false;
    // }
    // $(".stopitt").click(function(){
    //       $(".clickhere").stop();
    //     });
    // function continueWithIt(){
    //     flag = true;
    //     foo();
    // }
    
    // foo();
// function reset(flake) {
//     flake.x = Math.floor(Math.random() * canvas.width);
//     flake.y = 0;
//     flake.size = (Math.random() * 3) + 2;
//     flake.speed = (Math.random() * 1) + 0.5;
//     flake.velY = flake.speed;
//     flake.velX = 0;
//     flake.opacity = (Math.random() * 0.5) + 0.3;
// }

// function init() {
//     for (var i = 0; i < flakeCount; i++) {
//         var x = Math.floor(Math.random() * canvas.width),
//             y = Math.floor(Math.random() * canvas.height),
//             size = (Math.random() * 3) + 2,
//             speed = (Math.random() * 1) + 0.5,
//             opacity = (Math.random() * 0.5) + 0.3;

//         flakes.push({
//             speed: speed,
//             velY: speed,
//             velX: 0,
//             x: x,
//             y: y,
//             size: size,
//             stepSize: (Math.random()) / 15,
//             step: 0,
//             opacity: opacity
//         });
//     }

//     snow();
// };

// canvas.addEventListener("mousemove", function(e) {
//     mX = e.clientX,
//     mY = e.clientY
// });

// window.addEventListener("resize",function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// })

// init();


        


    // $(".snow").animate({marginTop: "300%"}, 5000);

  // $(".clickdiv").animate({left: '45%'},1850);