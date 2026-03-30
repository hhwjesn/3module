document.addEventListener("DOMContentLoaded", () => {
  changeText1()
  changeText2()
  changeText3()
})

function changeText1() {
  let question = document.querySelector(".question1")
  let answer1 = document.querySelector(".answer1")
  let answer2 = document.querySelector(".answer2")

  answer1.addEventListener("click", () => {
    question.textContent =
      "Удар был хорош! Ты попал в окно соседа, который выкрикивал в твою сторону много плохих слов. Ты пополнил свой словарный запас, но было не очень приятно..."
  })

  answer2.addEventListener("click", () => {
    question.textContent =
      "Ты истинный футболист! Все ребята со двора теперь завидуют твоей меткости, ведь не каждый новичок может с такого расстояния попасть!"
  })
}

function changeText2() {
  let question = document.querySelector(".question2")
  let answer1 = document.querySelector(".answer3")
  let answer2 = document.querySelector(".answer4")

  answer1.addEventListener("click", () => {
    question.textContent =
      "Ты пришел пораньше домой, но тебя ждала только гора домашки... Ты делал ее весь вечер со слезами, но в школе ждала только 2, зато с плюсом!!!"
  })

  answer2.addEventListener("click", () => {
    question.textContent = "Ты умер :( Лужа была под напряжением после грозы"

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

  answer1.addEventListener("click", () => {
    question.textContent =
      "Ты перелез через заборчик, чтобы сорвать самое аппетитное яблочко, но вот незадача, там живет очень злая старушка. Силы ей не занимать, она побила тебя веником. Главное - не убегать в слезах!"
  })

  answer2.addEventListener("click", () => {
    question.textContent =
      "Ох! Там червячок! Зато приятный белок вместе с яблочком"
  })
}
