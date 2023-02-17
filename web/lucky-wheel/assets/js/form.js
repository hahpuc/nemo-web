$(document).ready(function () {
  auth();

  getMyProfile();

  $(".btn-submit").click(function () {
    refreshToken(() => {
      const data = validate();
      if (data) {
        updateLeadForm(data);
      }
    });
  });
});

function getMyProfile() {
  refreshToken(() => {
    const accessToken = localStorage.getItem("accessToken");
    $.ajax({
      url: BASE_API + "/api/v1/users/my-profile",
      type: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data, textStatus, jQxhr) {
        if (data.is_black_list) {
          window.open("./notification.html", "_self");
        }
        if (!data?.is_update_leadform) {
          window.open("./wheel.html", "_self");
        }
        if (data?.profile?.avatar) {
          $(".img-avatar").attr("src", data.profile.avatar);
        }
        if (data?.profile?.full_name) {
          $("input[name='username']").val(data.profile.full_name);
        }
        if (data?.profile?.phone) {
          $("input[name='phone']").val(data.profile.phone);
        }
      },
      error: function (jqXhr, textStatus, errorThrown) {},
    });
  });
}

function validate() {
  $(".message-error").empty();
  const regexPhone = /^(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  const phone = $("input[name=phone]").val();
  const date = $("input[name=date-of-birth]").val();
  const haveChildren = +$("input[name=haveChildren]:checked").val();
  let check = true;
  if (!regexPhone.test(phone)) {
    $(".message-phone").text("Số điện thoại không hợp lệ");
    check = false;
  }
  if (!date) {
    $(".message-date").text("Bạn vui lòng nhập ngày sinh của bé.");
    check = false;
  }
  if (date) {
    if (haveChildren && new Date(date) > new Date()) {
      $(".message-date").text("Ngày sinh của bé phải nhỏ hơn ngày hiện tại.");
      check = false;
    }
    if (!haveChildren && new Date(date) <= new Date()) {
      $(".message-date").text(
        "Ngày dự kiến bé chào đời phải lớn hơn ngày hiện tại."
      );
      check = false;
    }
  }
  const other = $("input[name=other]").val();
  if (!check) {
    return false;
  }

  const body = {
    phone,
    other,
    source: "lucky_wheel"
  };
  if (haveChildren) {
    body["dob"] = date;
  } else {
    body["edd"] = date;
  }
  return body;
}

function updateLeadForm(body) {
  const accessToken = localStorage.getItem("accessToken");
  $.ajax({
    url: BASE_API + "/api/v1/users/update-profile",
    type: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: JSON.stringify(body),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data, textStatus, jQxhr) {
      window.open("./wheel.html", "_self");
    },
    error: function (jqXhr, textStatus, errorThrown) {
      if (jqXhr.responseJSON.errorCode === "ACCOUNT_BLOCKED") {
        window.open("./notification.html", "_self");
        return;
      }
      console.log("errorThrown", errorThrown);
      //TODO
    },
  });
}
