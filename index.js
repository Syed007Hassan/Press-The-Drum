// USING JQUERY TO ADD BEHAVIOR IN A SHORTER WAY

// $("h1").css("color","#DBEDF3");

// $("button").text("hello");

// $("button").html("bye");

//  $("h1").attr("id");

// $("h1").click(function () {
//   $("h1").css("color", "black");
// });

// $(document).keypress(function (event) {
//   var ran = event.key;

//   $("h1").text(ran);
// });

// $("h1").before("<h1>BeforeH1</h1>");


//    CALLING A FUNCTION HANDLE_CLICK AS SOON AS WE CLICK ONTO SOMETHING

$("img").on("click",function(){
  $("h1").fadeIn().fadeOut().fadeIn();
})



var noOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < 7; i++) {
  // DETECTING MOUSE CLICK TO PRODUCE SOUND

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    make_sound(buttonInnerHTML);

    button_animation(buttonInnerHTML);

  });
}

// DETECTING KEYBOARD-PRESS CLICK TO PRODUCE SOUND

document.addEventListener("keypress", function (event) {
  make_sound(event.key);

  button_animation(event.key);
});

function make_sound(key) {
  switch (key) {
    case "w":
    case "W":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();

      break;
    case "A":
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();

      break;

    case "S":
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();

      break;

    case "D":
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();

      break;

    case "j":
    case "J":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();

      break;

    case "K":
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();

      break;

    case "L":
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();

      break;

    default:
  }
}

function button_animation(currentkey) {
  var btnclass = document.querySelector("." + currentkey);
  btnclass.classList.add("pressed");

  setTimeout(function () {
    btnclass.classList.remove("pressed");
  }, 100);
}

//ALTER METHOD

// document.querySelector(".set .w").addEventListener("click",handle_click);
// document.querySelector(".set .a").addEventListener("click",handle_click);
// document.querySelector(".set .s").addEventListener("click",handle_click);
// document.querySelector(".set .d").addEventListener("click",handle_click);
// document.querySelector(".set .j").addEventListener("click",handle_click);
// document.querySelector(".set .k").addEventListener("click",handle_click);
// document.querySelector(".set .l").addEventListener("click",handle_click);
