/* ==========================================================
   FIT-TI
   RESULTS.JS
   PART 1
========================================================== */


/*
==========================================================

TYPE LIST

==========================================================

WS = 체중계 집착형
TM = 내일부터형
OT = 오늘만 먹자형
PT = 완벽주의형
TT = 같이하면형
RA = 쉬면 불안형

==========================================================
*/


const resultTypes = {



/* =======================================================
   체중계 집착형
======================================================= */

WS:{

title:"체중계 집착형",

subtitle:"숫자가 당신의 기분을 결정하고 있습니다.",

description:
"체중 변화에 민감하게 반응하며 하루의 만족도와 자신감을 숫자로 판단하는 경향이 있습니다.",

strengths:[

"목표의식이 높다",

"꾸준히 기록하는 습관이 있다",

"변화를 빠르게 인식한다"

],

weaknesses:[

"작은 변화에도 쉽게 흔들린다",

"스트레스가 높아질 수 있다",

"숫자에 집착하기 쉽다"

],

exercise:[

"바레",

"필라테스",

"근력운동"

],

nutrition:[

"체중보다 식습관을 기록하기",

"주 1회만 체중 측정하기",

"단백질 중심 식사"

]

},



/* =======================================================
   내일부터형
======================================================= */

TM:{

title:"내일부터형",

subtitle:"시작보다 준비를 더 오래 합니다.",

description:
"완벽한 시작을 기다리다가 실행을 미루는 경향이 있습니다.",

strengths:[

"계획을 잘 세운다",

"신중하다",

"정보를 잘 찾는다"

],

weaknesses:[

"실행력이 떨어질 수 있다",

"계획만 세우고 끝난다",

"시작 장벽이 높다"

],

exercise:[

"20분 걷기",

"홈트",

"가벼운 근력운동"

],

nutrition:[

"오늘 한 끼부터 바꾸기",

"냉장고 채우기",

"소량 준비하기"

]

},



/* =======================================================
   오늘만 먹자형
======================================================= */

OT:{

title:"오늘만 먹자형",

subtitle:"한 번의 선택이 하루 전체를 무너뜨립니다.",

description:
"충동적인 식사 후 '이미 망했다'는 생각으로 행동을 포기하기 쉽습니다.",

strengths:[

"감정을 솔직하게 표현한다",

"즐거움을 중요하게 생각한다",

"몰입력이 높다"

],

weaknesses:[

"충동성이 높다",

"올오어낫싱 사고",

"자기비난이 심하다"

],

exercise:[

"댄스",

"바레",

"인터벌 워킹"

],

nutrition:[

"80% 원칙",

"한 끼 실수는 넘어가기",

"간식 미리 계획하기"

]

},



/* =======================================================
   완벽주의형
======================================================= */

PT:{

title:"완벽주의형",

subtitle:"100점을 목표로 하다 0점이 되곤 합니다.",

description:
"운동과 식단을 완벽하게 해내야 한다는 압박이 큰 유형입니다.",

strengths:[

"책임감",

"높은 집중력",

"성실함"

],

weaknesses:[

"포기 기준이 낮다",

"실수에 예민하다",

"자기압박"

],

exercise:[

"웨이트",

"필라테스",

"바레"

],

nutrition:[

"90점이면 성공",

"유연한 식단",

"주간 평균 보기"

]

},
/* ==========================================================
   RESULTS.JS
   PART 2
========================================================== */


/* =======================================================
   같이하면형
======================================================= */

TT:{

title:"같이하면형",

subtitle:"혼자보다 함께할 때 꾸준해집니다.",

description:
"혼자 운동할 때보다 누군가와 함께하거나 응원받을 때 훨씬 높은 동기와 지속력을 보이는 유형입니다.",

strengths:[

"협동성이 높다",

"긍정적인 에너지를 잘 받는다",

"약속을 잘 지킨다"

],

weaknesses:[

"혼자서는 쉽게 흐트러진다",

"주변 환경의 영향을 많이 받는다",

"동기 유지가 타인에게 의존하기 쉽다"

],

exercise:[

"PT",

"그룹 바레",

"필라테스",

"크루 러닝"

],

nutrition:[

"식단 인증하기",

"친구와 함께 목표 세우기",

"커뮤니티 활용하기"

]

},



/* =======================================================
   쉬면 불안형
======================================================= */

RA:{

title:"쉬면 불안형",

subtitle:"휴식도 훈련의 일부라는 사실을 잊고 있습니다.",

description:
"운동을 쉬는 것 자체에 죄책감을 느끼며, 몸보다 불안을 해소하기 위해 운동하는 경향이 있습니다.",

strengths:[

"성실하다",

"꾸준하다",

"책임감이 높다"

],

weaknesses:[

"번아웃 위험",

"회복 부족",

"자기비난"

],

exercise:[

"요가",

"가벼운 산책",

"회복 운동",

"스트레칭"

],

nutrition:[

"충분한 휴식",

"회복식 섭취",

"수면 관리"

]

}

};



/* ==========================================================
   FACTOR SCORE CALCULATOR
========================================================== */

function calculateFactorScores(userAnswers){

const score={

PF:0,

SC:0,

IM:0,

EM:0,

AV:0,

CT:0

};

questions.forEach((q,index)=>{

let value=userAnswers[index];

if(value===undefined)return;

if(q.reverse){

value=6-value;

}

score[q.factor]+=value;

});

return score;

}



/* ==========================================================
   NORMALIZE
   0 ~ 100
========================================================== */

function normalizeScores(score){

const normalized={};

const factorCount={

PF:3,

SC:3,

IM:3,

EM:3,

AV:3,

CT:3

};

for(let factor in score){

const max=factorCount[factor]*5;

normalized[factor]=Math.round(

(score[factor]/max)*100

);

}

return normalized;

}/* ==========================================================
   RESULTS.JS
   PART 3
   TYPE ENGINE
========================================================== */

function determineType(scores){

/*
scores

PF
SC
IM
EM
AV
CT

*/

const profile=[

{

type:"PT",

score:

scores.PF*0.40+

scores.SC*0.25+

scores.CT*0.35

},

{

type:"OT",

score:

scores.IM*0.55+

scores.SC*0.30+

scores.AV*0.15

},

{

type:"TM",

score:

scores.AV*0.45+

scores.PF*0.25+

scores.EM*0.30

},

{

type:"TT",

score:

scores.EM*0.60+

scores.AV*0.20+

scores.SC*0.20

},

{

type:"RA",

score:

scores.SC*0.40+

scores.PF*0.30+

scores.AV*0.30

},

{

type:"WS",

score:

scores.CT*0.60+

scores.PF*0.25+

scores.SC*0.15

}

];

profile.sort((a,b)=>b.score-a.score);

return profile[0].type;

}



/* ==========================================================
   GET RESULT
========================================================== */

function getResult(userAnswers){

const rawScores=calculateFactorScores(userAnswers);

const normalizedScores=normalizeScores(rawScores);

const resultType=determineType(normalizedScores);

return{

type:resultType,

profile:normalizedScores,

data:resultTypes[resultType]

};

}
