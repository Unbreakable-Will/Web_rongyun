$(function () {
  $("body").click(function () {
    $(".key7-click").hide();
  });
  $(".left1").mouseover(function () {
    $(".left1-click").show();
    console.log(111);
  });
  $(".left1").mouseout(function () {
    console.log(222);
    $(".left1-click").hide();
  });

  $(".key7").click(function (e) {
    e.stopPropagation();
    console.log(111);
    $(".key7-click").show();
  });

  $(".key6").click(function () {
    $(".member").toggle();
    console.log($(".member").css("display") == "none");
    if ($(".member").css("display") == "none") {
      var num = 608 / 192;
      $(".chat .center").css("height", num + "rem");
      var num2 = 150 / 192;
      
      $(".chat .bottom-text ").css("height", num2 + "rem");
    } else {
      var num = 183 / 192;
      $(".chat .center").css("height", num + "rem");
      var num2 = 120 / 192;
      $(".chat .bottom-text ").css("height", num2 + "rem");
    }
  });

  $(".member-list li").mouseover(function () {
    $(this).find(".status div").show();
    $(this).find(".status span").hide();
  });
  $(".member-list li").mouseout(function () {
    $(this).find(".status div").hide();
    $(this).find(".status span").show();
  });
});
