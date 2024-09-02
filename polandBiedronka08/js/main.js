$(document).ready(function () {
  $(".q1option").click(function () {
    $("#q1").hide(),
      $("#terms").hide(),
      $("#q2").show()
  }),
    $(".q2option").click(function () {
      $("#q2").hide(),
        $("#q3").show()
    }),
    $(".q3option").click(function () {
      $("#q3").hide(),
        $("#q4").show()
    }),
    $(".q4option").click(function () {
      $("#q4").hide(),
        $("#audio").hide(),
        $("#process1").show(),
        setTimeout(function () {
          $("#process1").hide(),
            $("#process2").show()
        }, 1500),
        setTimeout(function () {
          $("#process2").hide(),
            $("#process3").show()
        }, 3e3),
        setTimeout(function () {
          $("#process2").hide(),
            $("#process3").show()
        }, 4500),
        setTimeout(function () {
          $("#process3").hide(),
            $("#final").show()
        }, 6e3),
        setTimeout(function () {
          $("#final").hide(),
            $("#results").slideDown()
        }, 8e3)
    }),
    $(".option").mouseenter(function () {
      $(this).css("background-color", "#bababa"),
        $(this).css("cursor", "pointer")
    }),
    $(".option").mouseleave(function () {
      $(this).css("background-color", "white")
    }),
    $(".list-group-item").mouseenter(function () {
      $(this).hasClass("nostock") || $(this).addClass("item-list-hover")
    }),
    $(".list-group-item").mouseleave(function () {
      $(this).hasClass("nostock") || $(this).removeClass("item-list-hover")
    })
});
