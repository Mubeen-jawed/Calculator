$(document).ready(function () {
  // $(window).focus(document);


  // Numbers



  $(document).on('click', 'button', function () {
    $("#display h2").css("opacity", 1)
  })

  $(document).on('click', '#0', function () {
    numbers.push(("0"))
    $("#display h2").text(numbers.join(""))
  })

  $(document).on('click', '#1', function () {
    numbers.push(("1"))
    $("#display h2").text(numbers.join(""))
  })

  $(document).on('click', '#2', function () {
    numbers.push(("2"))
    $("#display h2").text(numbers.join(""))
  })

  $(document).on('click', '#3', function () {
    numbers.push(("3"))
    $("#display h2").text(numbers.join(""))
  })

  $(document).on('click', '#4', function () {
    numbers.push(("4"))
    $("#display h2").text(numbers.join(""))
  })

  $(document).on('click', '#5', function () {
    numbers.push(("5"))
    $("#display h2").text(numbers.join(""))
  })

  $(document).on('click', '#6', function () {
    numbers.push(("6"))
    $("#display h2").text(numbers.join(""))
  })

  $(document).on('click', '#7', function () {
    numbers.push(("7"))
    $("#display h2").text(numbers.join(""))
  })

  $(document).on('click', '#8', function () {
    numbers.push(("8"))
    $("#display h2").text(numbers.join(""))
  })

  $(document).on('click', '#9', function () {
    numbers.push(("9"))
    $("#display h2").text(numbers.join(""))
  })

  $(document).on('click', '#dot', function () {
    numbers.push(("."))
    $("#display h2").text(numbers.join(""))
  })

  //functions
  let numbers = []

  let numArray = []
  let clickOn = ""

  // delete numbers

  $(document).on('click', '#delete', function () {
    numbers.splice(-1)
    $(".display h2").text(numbers.join(""))
  })

  $(document).on('click', "#divide", function () {
    clickOn = "divide";
    checkOperation();
  })

  $(document).on('click', '#multiply', function () {
    clickOn = "multiply";
    checkOperation()
  })

  $(document).on('click', '#minus', function () {
    clickOn = "minus"
    checkOperation()

  })

  $(document).on('click', '#plus', function () {
    clickOn = "plus"
    checkOperation()

  })

  // console.log("object", clickOn);
  if (clickOn != "") {

    // console.log(clickOn);



    $(document).on('click', `#${clickOn}`, function () {

      let number1 = numbers.join("")
      numArray.push(number1)
      // console.log("object");
      numbers = [];

      $("#display h2").text(numbers.join(""))
      return $("#display h2").text(numbers.join(""))
    })
  }

  let checkOperation = () => {
    let number1 = numbers.join("")
    numArray.push(number1)
    numbers = [];

    $("#display h2").text(numbers.join(""))
    return $("#display h2").text(numbers.join(""))

  }




  function divide() {
    return numArray[0] / numArray[1]
  }

  function multiply() {
    return numArray[0] * numArray[1]
  }

  function minus() {
    return numArray[0] - numArray[1]
  }

  function plus() {
    return parseInt(numArray[0]) + parseInt(numArray[1])
  }


  function equalTo() {
    let number2 = numbers.join("")
    numArray.push(number2)

    numbers = [];

    $("#display h2").text(numbers.join(""))

    let answer = eval(clickOn)
    $("#display h2").text(answer)


    numArray = []
  }

  // if (numbers.length != 0) {
  $(document).on('click', "#equal", function () {
    equalTo()
  })
  // }



  // Keypress

  $(document).keydown(function (event) {

    let pressedKey = event.key
    // numbers.push(pressedKey)
    // $("#display h2").text(numbers.join(""))
    console.log(pressedKey);

    if (pressedKey == "Enter") {
      equalTo()
    }

    if (pressedKey == "Backspace") {
      numbers.pop()
      $("$delete").text(numbers.join(""))
    }
  });


  //Styling

  if (numbers.length < 5) {
    $("#display h2").css("font-size", "50px")
  }

  else if (numbers.length < 8) {
    $("#display h2").css("font-size", "35px")
  }

  else if (numbers.length < 11) {
    $("#display h2").css("font-size", "25px")
  }

})