// 1. 攔截關閉視窗（需使用者點擊過畫面才會生效）
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});

// 2. 視窗炸彈函式
function popupStorm(times) {
  if (times <= 0) return;
  window.open(location.href, '_blank', 'width=400,height=400');
  setTimeout(() => popupStorm(times - 1), 500);
}

// 3. 綁定按鈕行為：這就是讓「手動導向」按鈕產生作用的關鍵！
// 由於 HTML 裡的 <script> 加了 defer，這裡可以安心抓到 myButton 元素
document.getElementById('myButton').addEventListener('click', function() {
  
  // 第一擊：因為是使用者親手點擊的，這個視窗 100% 不會被瀏覽器擋下
  //window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'width=800,height=600');
  
  // 順便嘲諷並啟動視窗炸彈（可以自行調整次數）
  //alert("😆 抽獎失敗！視窗炸彈已啟動！");
  popupStorm(10); 
});