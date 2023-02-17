let isProgressing = false;
var intervalLight = null;
$(document).ready(function () {

  var isZaloBrowser = navigator.userAgent.toLowerCase().indexOf("zalo") > 0;
  if (isZaloBrowser) {
    $(".btn-close").click(() => {
      clearLocalStorage();
      ZJSBridge.H5.closeWebview((e) => {
        console.log(e);
      });
    });

    $(".close").click(() => {
      clearLocalStorage();
      ZJSBridge.H5.closeWebview((e) => {
        console.log(e);
      });
    });
  }

  auth();
  if (checkLogin()) {
    checkFollowOA(() => {
      myProfile();
      getReward();
    });
  }

  $(".btn-wheel").click(function () {
    wheel();
  });
});

function wheel() {
  refreshToken(() => {
    if (!checkLogin() || isProgressing) return;
    isProgressing = true;
    $(".the-le a").addClass("disabled");
    $(".the-le a").attr("href", "javascript:void(0)");
    $(".wheel").attr("class", "wheel");
    $(".wheel").addClass("rotate");
    lightBorder();

    const accessToken = localStorage.getItem("accessToken");

    $.ajaxSetup({
      url: BASE_API + "/api/v1/games/lucky-result",
      type: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      beforeSend: function () {
        hideLoading();
      },
      success: function (data, textStatus, jQxhr) {
        const clsPrize = getClassPrize(data.position);
        $(".wheel").addClass(clsPrize);
        setTimeout(() => {
          $(".wheel").removeClass("rotate");
        }, 100);

        setTimeout(() => {
          stopLighting();
        }, 7000);

        setTimeout(() => {
          showModalSuccess(data);
          isProgressing = false;
          $(".the-le a").removeClass("disabled");
          $(".the-le a").attr("href", "./rule.html");
        }, 8000);
      },
      error: function (jqXhr, textStatus, errorThrown) {
        $(".wheel").removeClass("rotate");
        $(".the-le a").removeClass("disabled");
        $(".the-le a").attr("href", "./rule.html");
        stopLighting();
        showModalError(jqXhr.responseJSON);
        isProgressing = false;
        if (jqXhr.responseJSON.errorCode === "ACCOUNT_BLOCKED") {
          window.open("./notification.html", "_self");
          return;
        }
      },
    });
    $.ajax();
  });
}

function getClassPrize(prizeId) {
  switch (prizeId) {
    case 1:
      return "iphone";
    case 2:
      return "car";
    case 3:
      return "milking";
    case 4:
      return "block-milk";
    case 5:
      return "can-milk";
    case 6:
      return "v-50";
    case 7:
      return "v-20";
    case 8:
      return "v-10";
  }
}

function showModalSuccess(data) {
  $("#modalNotification .close").addClass("hidden");
  $("#modalNotification .ribbon").removeClass("hidden");
  $("#modalNotification .prize-after").empty();
  $("#modalNotification").modal("show");
  $("#modalNotification .prize").removeClass("hidden");
  $("#modalNotification .title").attr("class", "title chuc-mung");
  $("#modalNotification .prize").empty();
  $("#modalNotification .prize").append(`<img src="${data.thumbnail}" alt="">`);
  let message = "";
  if (data.type === 1) {
    message = `Bạn đã trúng <strong>${data.name}</strong><br>
    Friso sẽ liên hệ Bạn để xác nhận thông tin trao giải.`;
  }

  if (data.type === 2) {
    message = `Điểm thưởng tương đương <strong>${data.point}.000đ</strong><br>
    Sử dụng tại Friso Mum Club`;
  }

  $("#modalNotification .noti").empty();
  $("#modalNotification .noti").append(message);
}

function showModalError(error) {
  $("#modalNotification .close").removeClass("hidden");
  $("#modalNotification .prize-after").empty();
  $("#modalNotification").modal("show");
  $("#modalNotification .prize").addClass("hidden");
  $("#modalNotification .ribbon").addClass("hidden");
  $("#modalNotification .title").attr("class", "title thong-bao");
  $("#modalNotification .noti").empty();
  let message = "";
  switch (error.errorCode) {
    case "GAME_TURN_LIMITED":
      $("#modalNotification .title").attr("class", "title het-luot");
      message = "Rất tiếc theo qui định của chương trình Bạn đã hết lượt quay.";
      break;
    case "PLAYED_WELCOME_GAME":
    case "YOU_WAS_A_MEMBER":
      message = "<strong>Chào mừng bạn quay trở lại Friso Mum Club</strong>";
      break;
    default:
      message = error.message;
      break;
  }
  $("#modalNotification .noti").append(message);

  const accessToken = localStorage.getItem("accessToken");
  $.ajax({
    url: BASE_API + "/api/v1/games/game-lucky-history",
    type: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    success: function (data, textStatus, jQxhr) {
      let prizeName = data?.prize?.name || "";
      if (data) {
        if (data?.prize?.type === 2) {
          prizeName = `Điểm thưởng ${data?.prize?.point}.000đ`;
        }
      }
      switch (error.errorCode) {
        case "PLAYED_WELCOME_GAME":
        case "YOU_WAS_A_MEMBER":
          $("#modalNotification .prize-after").append(
            `Theo quy định của chương trình, Vòng quay May Mắn chỉ áp dụng cho thành viên mới. Bạn đã được tặng 10 điểm thưởng trị giá 10.000 VNĐ vào lần đăng ký trước.<br>
            <span>Sử dụng tại <strong>Friso Mum Club</strong></span>`
          );
          break;
        default:
          if (data) {
            $("#modalNotification .prize-after").append(
              `Kết quả quay lần trước, Bạn đã nhận quà <strong>${prizeName}</strong><br>
              <span>Cảm ơn Bạn đã tham gia <strong>Friso Mum Club.</strong></span>`
            );
          }
          break;
      }
    },
    error: function (jqXhr, textStatus, errorThrown) {
      console.log("errorThrown", errorThrown);
    },
  });
}

function lightBorder() {
  var $border = $(".wheel-border");
  $border.find("img").attr("src", "./assets/image/border_light_on_half.png");
  intervalLight = setInterval(() => {
    $border.toggleClass("rotate");
  }, 250);
}

function stopLighting() {
  clearInterval(intervalLight);
  var $border = $(".wheel-border");
  $border.find("img").attr("src", "./assets/image/border_light_on.png");
}

function getReward() {
  refreshToken(() => {
    if (!checkLogin() || isProgressing) return;
    isProgressing = true;
    const accessToken = localStorage.getItem("accessToken");
    $.ajax({
      url: BASE_API + "/api/v1/games/game-lucky",
      type: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data, textStatus, jQxhr) {
        if (data) {
          let array = data.sort((a, b) => a.position - b.position);
          for (let i = 0; i < array.length; i++) {
            $(".wheel .reward .p" + (i + 1) + " img").attr(
              "src",
              array[i].thumbnail
            );
          }
        }

        isProgressing = false;
      },
      error: function (jqXhr, textStatus, errorThrown) {
        isProgressing = false;
        if (jqXhr.responseJSON.errorCode === "ACCOUNT_BLOCKED") {
          window.open("./notification.html", "_self");
          return;
        }
      },
    });
  });
}
