
const questions = [
  {
    question: "Ni iki ugomba gukora mbere yo guhagarika imodoka?",
    answers: [
      { text: "Kureba mu ndorerwamo", correct: true },
      { text: "Guhagarika ako kanya", correct: false },
      { text: "Kuvugira kuri telefone", correct: false }
    ]
  },
  {
    question: "Iyo utwaye imodoka, ni ryari wemerewe gukoresha telefone?",
    answers: [
      { text: "Iyo ukoresha hands-free", correct: true },
      { text: "Iyo uri kugenda buhoro", correct: false },
      { text: "Iyo uri mu muhanda utari munini", correct: false }
    ]
  },
  {
    question: "1. Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
    answers: [
      { text: "(a) Umuyobozi", correct: true }, 
      { text: "b) Umuherekeza", correct: false },
      { text: "c)A na B ni ibisubizo by’ukuri", correct: false },
      { text: "d) Nta gisubizo cy’ukuri kirimo", correct: false }
    ]
  },
  {
    question: "2. Ijambo “akayira” bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
    answers: [
      { text: "a) Abanyamaguru", correct: false },
      { text: "b) Ibinyabiziga bigendera ku biziga bibiri", correct: false }, 
      { text: "(c) A na B ni ibisubizo by’ukuri", correct: true },
      { text: "d) Nta gisubizo cy’ukuri kirimo", correct: false }
    ]
  },
  {
    question: "2. Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n’uturanga gukata tw’ibara ryera utwo turanga cyerekezo tumenyesha :", 
    answers: [
      { text: "a) Igisate cy’umuhanda abayobozi bagomba gukurikira", correct: false },
      { text: "b) Ahegereye umurongo ukomeje", correct: false },
      { text: "(c) Igabanurwa ry’umubare w’ibisate by’umuhanda mu cyerekezo bajyamo", correct: true },
      { text: "d) A na C nibyo", correct: false }
    ]
  },
  {
    question: "3.Ahantu ho kugendera mu muhanda herekanwa n’ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda :",
    answers: [
     { text: "a) Biteganye", correct: false },
     { text: "b) Ku murongo umwe", correct: false },
     {text:  "c) A na B nibyo", correct: false },
     {text: "(d) Nta gisubizo cy’ukuri kirimo Impamvu: igazetti ivuga ko ahantu ho kugenda mu muhanda herekanwa n’ibimenyetso bimurika, ibinyabiziga bishobora kuhagenda biteganye naho umubare wabyo utatuma biba ngombwa", correct: true }
     ]
  },
  {
    question: "4. Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
    answers: [ 
      { text: "a) Ahatarengeje  metero 1 imbere cyangwa inyuma y’ikinyabiziga gihagaze akanya gato cyangwa kanini :", correct: false },
      { text: "b) Ahantu hari ibimenyetso bibuza byabugenewe", correct: false },
      { text: "c) Aho abanyamaguru banyura mu muhanda ngo bakikire inkomyi", correcct: false },
      { text: "(d) Ibisubizo byose nibyo", correct: true }
     ]
  },
  { question: "5. Itara ryo guhagarara ry’ibara ritukura rigomba kugaragara igihe ijuru rikeye nibura mu ntera ikurikira:",
    answers: [
     { text: "a) Metero 100 ku manywa na metero 20 mu ijoro", correct: false },
     { text: "b) Metero 150 ku manywa na metero50 mu ijoro", correct: false },
     { text: "c) Metero 200 ku manywa na metero100 mu ijoro", correct: false }, 
     { text: "(d) Nta gisubizo cy’ukuri kirimo Impamvu: Metero 20 Kumanywa; Metero 150 nijoro", correct: true } 
    ]
  },
  {  question: "6. Igice cy'inzira nyabagendwa kigarukira ku mirongo ibiri yera icagaguye ibangikanye kandi gifite ubugari budahagije kugira ngo imodoka zitambuke neza, kiba ari:",
      answers: [
     {text: "a) Ahanyurwa amapikipiki", correct : false },
     {text: "b) Ahanyurwa n’ingorofani", correct: false },
     {text: "c) Ahanyurwa n’ibinyamitende", correct: true }, 
     {text: "d) Nta gisubizo cy’ukuri kirimo", correct: false },
    ]
  }
     
//7. Ubugari bwa romoruki ntiburenza ubugari bw’ikinyabiziga kiyikurura iyo ikuruwe n’ibinyabiziga bikurikira:
//a) Igare
//b) Velomoteri
//(c) Ipikipiki ifite akanyabiziga kometse ku ruhande rwayo
//d) Nta gisubizo cy’ukuri kirimo
//8. Icyapa kivuga gutambuka mbere y’ibinyabiziga biturutse imbere gifite amabara akurikira:
//a) Ubuso ni umweru
//b)  Ikirango ni umutuku n’umukara
//c) Ikirango ni umweru n’umukara
//(d) Nta gisubizo cy’ukuri kirimo
//Impamvu : ubuso ni ubururu ; ikirango ni umweru n’umutuku
//9. Ni ryari itegeko  rigenga gutambuka mbere kw’iburyo rikurikizwa mu masangano:
//a) Iyo nta cyapa cyo gutambuka mbere gihari
//b) Iyo ikimenyetso kimurika cyagenewe ibinyabiziga kidakora
//(c) A na B ni ibisubizo by’ukuri
//d) Nta gisubizo cy’ukuri 
//10. Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n’icyapa gifite ubuso bw’amabara akurikira:
//(a) Ubururu 
//b) Umweru 
//c) Umutuku
//d) Nta gisubizo cy’ukuri
//11. Ubugari bw’imizigo yikorewe n’ibinyamitende itatu n’ubwiyikorewe n’ibinyamitende 4 bifite cyangwa bidafite moteri kimwe n’ubw’iyikorewe na romuruki zikuruwe n’ibyo binyabiziga ntibushobora kurenga ibipimo bikurikira:
//a) cm 30 ku bugari bw’icyo kinyabiziga kidapakiye 
//b) Ubugari ntarengwa budakuka ni metero 2 na sentimetero 50

];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer");
    button.addEventListener("click", () => selectAnswer(answer.correct, button, currentQuestion));
    answersElement.appendChild(button);
  });

  // Start countdown
  startTimer();
}

function resetState() {
  resultElement.textContent = "";
  answersElement.innerHTML = "";
  clearInterval(timer);
  timeLeft = 10;
  nextButton.style.display = "none";
}

function selectAnswer(isCorrect, button, currentQuestion) {
  clearInterval(timer); // stop timer when answered
  if (isCorrect) {
    button.classList.add("correct");
    resultElement.textContent = "✅ Ni byo!";
    score++;
  } else {
    button.classList.add("wrong");
    resultElement.textContent = "❌ Si byo! | Igisubizo cyiza ni: " +
      currentQuestion.answers.find(ans => ans.correct).text;
  }
  Array.from(answersElement.children).forEach(btn => btn.disabled = true);
  nextButton.style.display = "block";
}

function startTimer() {
  resultElement.textContent = `Ufite amasegonda ${timeLeft}`;
  timer = setInterval(() => {
    timeLeft--;
    resultElement.textContent = `Ufite amasegonda ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      resultElement.textContent = "⏰ Igihe kirarangiye! Igisubizo cyiza ni: " +
        questions[currentQuestionIndex].answers.find(ans => ans.correct).text;
      Array.from(answersElement.children).forEach(btn => btn.disabled = true);
      nextButton.style.display = "block";
    }
  }, 1000);
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  questionElement.textContent = "Ibisubizo Byarangiye!";
  answersElement.innerHTML = "";
  nextButton.style.display = "none";
  resultElement.textContent = "";
  scoreElement.textContent = `Wabonye ${score} mu bibazo ${questions.length} (${Math.round((score/questions.length)*100)}%)`;
}

loadQuestion();
