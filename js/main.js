// jsを記述する際はここに記載していく
// slickによるスライド

$(function () {
    $(".imagebox").slick({
      arrows: false,
      autoplay: true, 
      autoplaySpeed: 50,
      centerMode: true,
      centerPadding: "20px",
      dots: true,
      slidesToShow: 3,
      speed: 1,
    });
  });

  $(function(){
    $(".header_logo").on("click", function(){
      // ここに処理を書く
      alert("あべひろしのHPって癒されますよね。私は他人の通信速度を確かめる手段として使わせて頂く事が多いですが、オンマウスで意図せず飛ばされる体験を見てみましょう")
  });
});

$(function(){
    $(".more_detail_title").on("click", function(){
      // ここに処理を書く
      alert("ここで運試しです！ここで高速で移動する４つの画像の中に１つ阿部さんのHPに勝手に飛ばされるボム的なものが入ってます。ボムを越えることができれば次のセクションにいけますが・・・サー運命を試しましょう")
  });
});

//阿部寛はええぞ
$(document).on('mouseover','.abe',function(){
    location.href = 'http://abehiroshi.la.coocan.jp/';
});

$(function () {
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });
});

$(document).on('closing', '.YouTube', function (e) {
  var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
  $this.attr('src', "");
  $this.attr('src', tempSrc);
});

    




    

