// time wrapper

function timeWrapper() {
  const timeElement = document.querySelector(".time");
  const mainBlock = document.querySelector(".wrapper_main");
  const countBlock = document.querySelector(".wrapper_count");

  const result_FinalPage = document.querySelector(".result");
  const infoLeft_FinalPage = document.querySelector(".info_left");
  const infoRight_FinalPage = document.querySelector(".info_right");
  const percent_FinalPage = document.querySelector(".percent");
  const neuron_FinalPage = document.querySelector(".neuron");

  let count = 0;
  let trueColorResult = 0;
  let trueColorScore = 0;

  let timeDefault = 60;

  timeElement.textContent = timeDefault;

  function timeCount() {
    timeDefault += -1;
    timeElement.textContent = timeDefault;
    if (timeDefault == 0) {
      mainBlock.style.display = "none";
      countBlock.style.display = "inline-block";

      result_FinalPage.textContent = count;
      neuron_FinalPage.textContent = count / 25 + trueColorResult;
      infoLeft_FinalPage.textContent = trueColorResult;
      infoRight_FinalPage.textContent = trueColorScore;

      let percentResult = Math.round((trueColorResult / trueColorScore) * 100);

      if (isNaN(percentResult)) {
        percent_FinalPage.textContent = 0;
      } else {
        percent_FinalPage.textContent = percentResult;
      }
    }
  }

  for (let i = 0; i <= timeDefault; i++) {
    if (timeDefault != 0) {
      setTimeout(timeCount, i * 1000);
    }
  }

  //  wrapper for random color

  function mainWrapper() {
    const color = document.querySelectorAll(".color");
    const btn_right = document.querySelector(".btn_right");
    const btn_left = document.querySelector(".btn_left");

    let countHTML = document.querySelector(".count");

    const colorsArr = ["Зелёный", "Красный", "Черный", "Синий"];
    const colorsCss = ["green", "red", "black", "blue"];

    // create random color

    function colorRandom() {
      let trueColor = [];

      // "for" for random color

      function colorRandomFor() {
        for (let i = 0; i < color.length; i++) {
          let randomColor = Math.floor(Math.random() * colorsArr.length);
          color[i].textContent = colorsArr[randomColor];
          let randomCss = Math.floor(Math.random() * colorsCss.length);
          color[i].style.color = colorsCss[randomCss];

          if (i === 0) {
            trueColor[0] = randomColor;
          }
          if (i === 1) {
            trueColor[1] = randomCss;
          }
        }
      }

      colorRandomFor();

      // click to btn

      btn_left.onclick = () => {
        clickCountLeft();
        colorRandomFor();
      };
      btn_right.onclick = () => {
        clickCountRight();
        colorRandomFor();
      };

      // count

      function clickCountLeft() {
        trueColorScore += 1;
        if (trueColor[0] !== trueColor[1]) {
          trueColorResult += 1;
          count += 100;
          countHTML.textContent = count;
        } else {
          if (count <= 400) {
            count = 0;
          } else {
            count += -400;
          }
          countHTML.textContent = count;
        }
      }

      function clickCountRight() {
        trueColorScore += 1;
        if (trueColor[0] === trueColor[1]) {
          trueColorResult += 1;
          count += 100;
          countHTML.textContent = count;
        } else {
          if (count <= 400) {
            count = 0;
          } else {
            count += -400;
          }
          countHTML.textContent = count;
        }
      }

      // event arrow

      document.onkeydown = checkKey;

      function checkKey(e) {
        e = e || window.event;

        if (e.keyCode == "37") {
          // left btn
          clickCountLeft();
          colorRandomFor();
        } else if (e.keyCode == "39") {
          // right btn
          clickCountRight();
          colorRandomFor();
        }
      }
    }

    colorRandom();
  }

  mainWrapper();
}

timeWrapper();
