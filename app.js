const question = "ゲーム市場最も売れたゲーム機は次のうちどれ？";
const answers = ["スーファミ", "PS2", "ニンテンドースイッチ", "ニンテンドーDS"];
const correct = "ニンテンドーDS";

document.getElementById("js-question").textContent = question;

document.getElementsByTagName("button")[0].textContent = answers[0];
document.getElementsByTagName("button")[1].textContent = answers[1];
document.getElementsByTagName("button")[2].textContent = answers[2];
document.getElementsByTagName("button")[3].textContent = answers[3];

// buttonがクリックしたら判定
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[0].textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});
