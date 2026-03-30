document.addEventListener("DOMContentLoaded", () => {
  changeText1()
  changeText2()
  changeText3()
  changeText4()
  drawing()
})

function changeText1() {
  let question = document.querySelector(".question1")
  let answer1 = document.querySelector(".answer1")
  let answer2 = document.querySelector(".answer2")

  let ball = document.querySelector(".ball")
  let windowImg = document.querySelector(".window")
  let football = document.querySelector(".football")

  function playBallAnimation() {
    ball.classList.remove("animate")
    void ball.offsetWidth
    ball.classList.add("animate")
  }

  answer1.addEventListener("click", () => {
    question.textContent =
      "Удар был хорош! Ты попал в окно соседа, который выкрикивал в твою сторону много плохих слов. Ты пополнил свой словарный запас, но было не очень приятно..."

    playBallAnimation()

    football.style.display = "block"
    windowImg.style.display = "none"
  })

  answer2.addEventListener("click", () => {
    question.textContent =
      "Ты истинный футболист! Все ребята со двора теперь завидуют твоей меткости, ведь не каждый новичок может с такого расстояния попасть!"

    playBallAnimation()

    windowImg.style.display = "block"
    football.style.display = "none"
  })
}

function changeText2() {
  let question = document.querySelector(".question2")
  let answer1 = document.querySelector(".answer3")
  let answer2 = document.querySelector(".answer4")

  let leg = document.querySelector(".leg")
  let book = document.querySelector(".book")
  let mleg = document.querySelector(".mleg")

  leg.style.display = "block"
  book.style.display = "none"
  mleg.style.display = "none"

  answer1.addEventListener("click", () => {
    question.textContent =
      "Ты пришел пораньше домой, но тебя ждала только гора домашки... Ты делал ее весь вечер со слезами, но в школе ждала только 2, зато с плюсом!!!"

    leg.style.display = "none"
    book.style.display = "block"
    mleg.style.display = "none"
  })

  answer2.addEventListener("click", () => {
    question.textContent = "Ты умер :( Лужа была под напряжением после грозы"

    leg.style.display = "none"
    book.style.display = "none"
    mleg.style.display = "block"

    const overlay = document.createElement("div")
    overlay.className = "black-screen"
    overlay.textContent = "Ты умер :( Лужа была под напряжением после грозы"

    document.body.appendChild(overlay)

    setTimeout(() => {
      overlay.remove()
    }, 4000)
  })
}

function changeText3() {
  let question = document.querySelector(".question3")
  let answer1 = document.querySelector(".answer5")
  let answer2 = document.querySelector(".answer6")

  let tree = document.querySelector(".tree")
  let cherv = document.querySelector(".cherv")
  let people = document.querySelector(".people")

  tree.style.display = "block"
  cherv.style.display = "none"
  people.style.display = "none"

  answer1.addEventListener("click", () => {
    question.textContent =
      "Ты перелез через заборчик, чтобы сорвать самое аппетитное яблочко, но вот незадача, там живет очень злая старушка. Силы ей не занимать, она побила тебя веником. Главное — не убегать в слезах!"

    tree.style.display = "none"
    cherv.style.display = "none"
    people.style.display = "block"
  })

  answer2.addEventListener("click", () => {
    question.textContent =
      "Ох! Там червячок! Зато приятный белок вместе с яблочком"

    tree.style.display = "none"
    cherv.style.display = "block"
    people.style.display = "none"
  })
}

function changeText4() {
  let question = document.querySelector(".question4")
  let answer1 = document.querySelector(".answer7")
  let answer2 = document.querySelector(".answer8")
  let canvas = document.querySelector(".drawing")

  answer1.addEventListener("click", () => {
    question.textContent = "Ты не сможешь порисовать. Жди плохую оценку"

    canvas.style.display = "none"
  })

  answer2.addEventListener("click", () => {
    question.textContent = "Ура! Ты спасен!"

    canvas.style.display = "block"
  })
}

function drawing() {
  let canvas = document.querySelector(".drawing")
  let ctx = canvas.getContext("2d")

  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  let isDrawing = false
  canvas.addEventListener("mousedown", () => {
    isDrawing = true
  })

  canvas.addEventListener("mouseup", () => {
    isDrawing = false
    ctx.beginPath()
  })

  canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return

    const rect = canvas.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.lineWidth = 3
    ctx.lineCap = "round"
    ctx.strokeStyle = "black"

    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y)
  })

  //   палец
  canvas.addEventListener("touchstart", startDraw)
  canvas.addEventListener("touchmove", draw)
  canvas.addEventListener("touchend", stopDraw)

  window.addEventListener("load", resizeCanvas)
  window.addEventListener("resize", resizeCanvas)
}
