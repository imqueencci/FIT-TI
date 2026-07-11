/* ==========================================================
   FIT-TI
   SCRIPT.JS
   PART 1
========================================================== */

const startBtn = document.getElementById("startBtn");
const goTest = document.getElementById("goTest");

const questionPage = document.getElementById("questionPage");
const resultPage = document.getElementById("resultPage");

const questionTitle = document.getElementById("questionTitle");
const questionNumber = document.getElementById("questionNumber");

const answersContainer = document.getElementById("answers");

const nextBtn = document.getElementById("nextBtn");

const progressBar = document.getElementById("progressBar");

const resultTitle = document.getElementById("resultTitle");
const resultDesc = document.getElementById("resultDesc");

let currentQuestion = 0;

let selectedAnswer = null;

let userAnswers = [];


/* ==========================================================
   검사 시작
========================================================== */

startBtn.addEventListener("click", startTest);

goTest.addEventListener("click", startTest);

function startTest(){

document.querySelector(".hero").style.display="none";

document.querySelector(".intro").style.display="none";

document.querySelector(".philosophy").style.display="none";

questionPage.classList.remove("hidden");

renderQuestion();

}


/* ==========================================================
   질문 출력
========================================================== */

function renderQuestion(){

const q = questions[currentQuestion];

questionNumber.innerText =
`${currentQuestion+1} / ${questions.length}`;

questionTitle.innerText = q.question;

progressBar.style.width =
`${((currentQuestion)/questions.length)*100}%`;

answersContainer.innerHTML="";

selectedAnswer=userAnswers[currentQuestion] ?? null;

answers.forEach((text,index)=>{

const btn=document.createElement("button");

btn.className="answer";

btn.innerText=text;

if(selectedAnswer===index+1){

btn.classList.add("active");

}

btn.onclick=()=>{

selectedAnswer=index+1;

document
.querySelectorAll(".answer")
.forEach(a=>a.classList.remove("active"));

btn.classList.add("active");

};

answersContainer.appendChild(btn);

});

}


/* ==========================================================
   다음 버튼
========================================================== */

nextBtn.addEventListener("click",()=>{

if(selectedAnswer===null){

alert("답변을 선택해주세요.");

return;

}

userAnswers[currentQuestion]=selectedAnswer;

});
/* ==========================================================
   SCRIPT.JS
   PART 2
========================================================== */

if(currentQuestion < questions.length-1){

currentQuestion++;

renderQuestion();

return;

}

showResult();

});


/* ==========================================================
   결과 출력
========================================================== */

function showResult(){

questionPage.classList.add("hidden");

resultPage.classList.remove("hidden");

const result=getResult(userAnswers);

resultTitle.innerText=result.data.title;

resultDesc.innerText=result.data.description;

const summary=document.querySelector(".resultSummary ul");

summary.innerHTML="";

result.data.strengths.forEach(item=>{

const li=document.createElement("li");

li.innerHTML=`✔ ${item}`;

summary.appendChild(li);

});

animateProfile(result.profile);

window.scrollTo({

top:0,

behavior:"smooth"

});

}


/* ==========================================================
   프로파일 그래프 생성
========================================================== */

function animateProfile(profile){

let graph=document.getElementById("profileGraph");

if(!graph){

graph=document.createElement("div");

graph.id="profileGraph";

graph.style.marginTop="40px";

document
.querySelector(".result-card")
.insertBefore(

graph,

document.querySelector(".premium-box")

);

}

graph.innerHTML="";

const labels={

PF:"완벽주의",

SC:"자기비난",

IM:"충동성",

EM:"외부동기",

AV:"회피",

CT:"통제욕"

};

Object.keys(profile).forEach(key=>{

const wrap=document.createElement("div");

wrap.style.marginBottom="20px";

const label=document.createElement("div");

label.style.display="flex";

label.style.justifyContent="space-between";

label.style.marginBottom="8px";

label.innerHTML=`

<strong>${labels[key]}</strong>

<span>${profile[key]}점</span>

`;

const bar=document.createElement("div");

bar.style.height="12px";

bar.style.background="#ececec";

bar.style.borderRadius="999px";

bar.style.overflow="hidden";

const fill=document.createElement("div");

fill.style.height="100%";

fill.style.width="0%";

fill.style.background="linear-gradient(90deg,#7a5cff,#b08cff)";

fill.style.transition="1s";

bar.appendChild(fill);

wrap.appendChild(label);

wrap.appendChild(bar);

graph.appendChild(wrap);

setTimeout(()=>{

fill.style.width=`${profile[key]}%`;

},100);

});

}/* ==========================================================
   SCRIPT.JS
   PART 3
========================================================== */


/* ==========================================================
   다시 검사하기
========================================================== */

const premiumBtn = document.querySelector(".premiumBtn");

if(premiumBtn){

premiumBtn.addEventListener("click",()=>{

alert("심층 리포트 기능은 추후 연결됩니다.");

});

}


/* ==========================================================
   결과 초기화
========================================================== */

function resetTest(){

currentQuestion=0;

selectedAnswer=null;

userAnswers=[];

progressBar.style.width="0%";

questionPage.classList.remove("hidden");

resultPage.classList.add("hidden");

renderQuestion();

}


/* ==========================================================
   키보드 지원
========================================================== */

document.addEventListener("keydown",(e)=>{

if(questionPage.classList.contains("hidden")) return;

if(e.key==="Enter"){

nextBtn.click();

}

});


/* ==========================================================
   페이지 로드
========================================================== */

window.addEventListener("load",()=>{

questionPage.classList.add("hidden");

resultPage.classList.add("hidden");

});


/* ==========================================================
   콘솔 확인
========================================================== */

console.log("FIT-TI Loaded");
console.log("Questions :",questions.length);
console.log("Result Types :",Object.keys(resultTypes).length);


/* ==========================================================
   디버그 (개발용)
========================================================== */

window.fitTi={

questions,

answers,

getResult,

resetTest

};


/* ==========================================================
   END
========================================================== */
