function saveBtn() {
  const birth = document.getElementById("birthday").value;
  const resultBox = document.getElementById("result");

  if (!birth) {
    resultBox.innerHTML =
      "咒語失效，魔法陣無法啟動！！！<br>因為妙麗的出生日期尚未刻印在卷軸上。<br>請以魔杖輕點日期，否則年齡魔法無法啟動。";
    return;
  }

  // ⭐ 儲存輸入日期
  localStorage.setItem("birthday", birth);

  const birthDate = new Date(birth);
  const now = new Date();

  let diffYears = (now - birthDate) / (1000 * 60 * 60 * 24 * 365.25);
  diffYears = Math.max(0, diffYears);

  let humanAge = 0;

  if (diffYears <= 1) {
    humanAge = diffYears * 15;
  } else if (diffYears <= 2) {
    humanAge = 15 + (diffYears - 1) * 9;
  } else {
    humanAge = 24 + (diffYears - 2) * 4;
  }

  // ⭐ 組合結果訊息
  let resultMsg = `✨在魔法流轉的時間河流中，妙麗約為 <strong>${diffYears.toFixed(
    1
  )}</strong> 歲犬齡；
     若以巫師界通行的換算法，牠相當於 <strong>${humanAge.toFixed(
       1
     )}</strong> 歲的魔法犬年齡🐾。`;

  resultBox.innerHTML = resultMsg;

  // ⭐ 結果也存起來
  localStorage.setItem("resultMsg", resultMsg);
}

function clearAll() {
  document.getElementById("birthday").value = "";
  document.getElementById("result").innerHTML = "";

  // ⭐ 清空 localStorage
  localStorage.removeItem("birthday");
  localStorage.removeItem("resultMsg");
}

function toggleSource() {
  const box = document.getElementById("sourceBox");
  const realDisplay = window.getComputedStyle(box).display;

  box.style.display = realDisplay === "none" ? "block" : "none";
}

// Step 1：第一次進入頁面 → 把舊資料載回來
document.addEventListener("DOMContentLoaded", () => {
  const birthdayInput = document.getElementById("birthday");
  const resultBox = document.getElementById("result");

  const storedDate = localStorage.getItem("birthday");
  const storedMsg = localStorage.getItem("resultMsg");

  if (storedDate) {
    birthdayInput.value = storedDate;
  }

  if (storedMsg) {
    resultBox.innerHTML = storedMsg;
  }
});
