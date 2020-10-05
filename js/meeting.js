$(function () {
  $("body").click(function () {
    $(".key7-click").hide();
    $(".key4-click").hide();
    $(".share").hide();
    $(".camera").hide();
    $(".mute").hide();
  });

  $(".box-click")
    .children()
    .click(function (e) {
      e.stopPropagation();

      console.log($(this));
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
    $(".key7-click").toggle().siblings().hide();
  });

  $(".key6").click(function () {
    $(".member").toggle().siblings().hide();
    // console.log($(".member").css("display") == "none");
    if ($(".member").css("display") == "none") {
      var num = 608 / 192;
      $(".chat .center").css("height", num + "rem");
      var num2 = 140 / 192;

      $(".chat .bottom-text ").css("height", num2 + "rem");
    } else {
      var num = 183 / 192;
      $(".chat .center").css("height", num + "rem");
      var num2 = 110 / 192;
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

  $("textarea").bind("input propertychange", function () {
    if ($("textarea").val() != "") {
      $(".bottom-text>span").addClass("fasong");
    } else {
      $(".bottom-text>span").removeClass("fasong");
    }
  });

  $(".key4").click(function (e) {
    e.stopPropagation();
    $(".key4-click").toggle().siblings().hide();
  });

  $(".key3")
    .next()
    .click(function (e) {
      e.stopPropagation();
      $(".share").toggle().siblings().hide();
    });

  $(".key2")
    .next()
    .click(function (e) {
      e.stopPropagation();
      $(".camera").toggle().siblings().hide();
    });

  $(".key1")
    .next()
    .click(function (e) {
      e.stopPropagation();
      $(".mute").toggle().siblings().hide();
    });

  var pal = $("textarea").attr("placeholder");
  $("textarea").keydown(function (e) {
    if (e.keyCode == 13) {
      $("textarea")
        .val("")
        .replace(/[\r\n]/g, "");
      //   console.log(pal);
      //   $("textarea").blur();
      $("textarea").attr("placeholder", pal);
    }
    // $("textarea").focus();
  });

  // 定时器

  var divHour = $("#divHour"); //时
  var divMin = $("#divMin"); //分
  var divSec = $("#divSec"); //秒
  //2.设置计时器
  setInterval(function () {
    //2.1 获取当前这个div里面的文字
    var txtHour = +divHour.text(); //转成number类型
    var txtMin = +divMin.text();
    var txtSec = +divSec.text();
    console.log(txtHour);
    console.log(txtMin);
    // console.log(+txtSec++);
    //2.2 把这个文本修改
    txtSec++;

    //如果秒钟小于0，则分钟-1，秒钟从59开始
    if (txtSec > 60) {
      txtSec = 01;
      txtMin++;
    }
    //如果分钟小于0，则时钟-1，分钟从59开始
    if (txtMin > 60) {
      txtMin = 01;
      txtHour++;
    }
    //2.3 如果时分秒是一个一位数，就要补全成两位数
    txtHour = txtHour < 10 ? "0" + txtHour : txtHour;
    txtMin = txtMin < 10 ? "0" + txtMin : txtMin;
    txtSec = txtSec < 10 ? "0" + txtSec : txtSec;
    //2.4 把这新的文本，重新的赋值给这个div
    $("#divSec").text(txtSec);
    $("#divMin").text(txtMin);
    $("#divHour").text(txtHour);
  }, 1000);
});
