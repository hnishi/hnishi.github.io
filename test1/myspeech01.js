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

//say_text("hello")
say_text("以下はwebkit系ブラウザでドラッグ＆ドロップを動かすための指定（ブラウザのサポートが進めば、必要なくなると思われます）");


/* ### References ###

https://qiita.com/hachisukansw/items/c2b9bf2f0e137af39f38

*/
