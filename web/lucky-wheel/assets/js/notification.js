$(document).ready(function () {
  auth();
  getMyProfile();
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
        $(".info-username").text(data?.profile?.full_name);
        $(".user-code").text(`ID: ${data?.user_code | ''}`);
        if (data?.profile?.avatar) {
          $(".info-avatar img").attr("src", data?.profile?.avatar);
        }
        if (!data.is_black_list) {
          if (data.is_update_leadform) {
            window.open("./form.html", "_self");
            return;
          } else {
            window.open("./wheel.html", "_self");
            return;
          }
        }
      },
      error: function (jqXhr, textStatus, errorThrown) {},
    });
  });
}
