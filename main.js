// =======================
// 직업 데이터 (9개)
// =======================
const jobs = {
  warrior:   { name: "전사", hp: 140, atk: 14 },
  knight:    { name: "기사", hp: 160, atk: 11 },
  berserker: { name: "광전사", hp: 120, atk: 20 },

  mage:      { name: "마법사", hp: 85, atk: 27 },
  sorcerer:  { name: "주술사", hp: 95, atk: 23 },
  necromancer:{ name: "강령술사", hp: 90, atk: 25 },

  rogue:     { name: "도적", hp: 100, atk: 18 },
  archer:    { name: "궁수", hp: 105, atk: 17 },
  monk:      { name: "수도사", hp: 125, atk: 16 }
};

// =======================
// 플레이어 / 몬스터
// =======================
let player = {};
let monster = {
  name: "고블린",
  hp: 70,
  atk: 10
};

// =======================
// 직업 버튼 생성
// =======================
const jobsDiv = document.getElementById("jobs");

for (const key in jobs) {
  const btn = document.createElement("button");
  btn.innerText = jobs[key].name;
  btn.onclick = () => selectJob(key);
  jobsDiv.appendChild(btn);
}

// =======================
// 직업 선택
// =======================
function selectJob(jobKey) {
  const job = jobs[jobKey];
  player = {
    name: job.name,
    hp: job.hp,
    atk: job.atk
  };

  document.getElementById("job-select").style.display = "none";
  document.getElementById("battle").style.display = "block";
  updateStatus();
}

// =======================
// 전투 로직
// =======================
function attack() {
  monster.hp -= player.atk;

  if (monster.hp > 0) {
    player.hp -= monster.atk;
  }

  checkResult();
  updateStatus();
}

function updateStatus() {
  document.getElementById("status").innerText =
    `${player.name} HP: ${player.hp} | ${monster.name} HP: ${monster.hp}`;
}

function checkResult() {
  if (player.hp <= 0) {
    alert("패배했습니다.");
    location.reload();
  }
  if (monster.hp <= 0) {
    alert("승리했습니다!");
    location.reload();
  }
}
