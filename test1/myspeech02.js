function say_text(str1){
  document.getElementById("jaJP").addEventListener("click", function(e) {
    if (typeof SpeechSynthesisUtterance == "undefined") {return}
    var u = new SpeechSynthesisUtterance();
    u.text = str1 ;
    u.lang = 'ja-JP';
    u.rate = 1.0;
    window.speechSynthesis.speak(u);
  })
}

function say_text2(){
  const text     = document.querySelector('#text')
  const speakBtn = document.querySelector('#speak-btn')

  speakBtn.addEventListener('click', function() {
    // 発言を作成
    const uttr = new SpeechSynthesisUtterance(text.value)
    // 発言を再生 (発言キューに発言を追加)
    speechSynthesis.speak(uttr)
  })  
}

//say_text("hello")
//say_text("以下はwebkit系ブラウザでドラッグ＆ドロップを動かすための指定（ブラウザのサポートが進めば、必要なくなると思われます）");
say_text2()

/* ### References ###

https://qiita.com/hachisukansw/items/c2b9bf2f0e137af39f38

*/
