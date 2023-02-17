$(document).ready(function () {
});

function auth() {
  const isLogin = checkLogin();
  if (!isLogin) {
    const linkRequestAuthCode = `https://oauth.zaloapp.com/v4/permission?app_id=${ZALO_APP_ID}&redirect_uri=${ZALO_REDIRECT_URI}&state=${ZALO_STATE}`;
    window.location.replace(linkRequestAuthCode);
  }
}

function refreshToken(callBack) {
  const accessTokenExpiresAt = localStorage.getItem("accessTokenExpiresAt");
  const refreshToken = localStorage.getItem("refreshToken");
  const refreshTokenExpiresAt = localStorage.getItem("refreshTokenExpiresAt");
  if (new Date(accessTokenExpiresAt).getTime() > new Date().getTime()) {
    callBack();
    return;
  }
  if (new Date(refreshTokenExpiresAt).getTime() < new Date().getTime()) {
    clearLocalStorage();
    auth();
    return;
  } else {
    const body = {
      refresh_token: refreshToken,
      grant_type: "refresh_token",
      scope: "ApiService",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    };

    $.ajax({
      url: BASE_API + "/api/v1/oauth/token",
      type: "POST",
      data: body,
      contentType: "application/x-www-form-urlencoded",
      dataType: "json",
      success: function (data, textStatus, jQxhr) {
        setLocalStorage(data);
        callBack();
      },
      error: function (jqXhr, textStatus, errorThrown) {
        clearLocalStorage();
        auth();
        return;
      },
    });
  }
}

function setLocalStorage(dataLogin) {
  const {
    user,
    accessToken,
    accessTokenExpiresAt,
    refreshToken,
    refreshTokenExpiresAt,
  } = dataLogin;
  localStorage.setItem("userId", user.id);
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("accessTokenExpiresAt", accessTokenExpiresAt);
  localStorage.setItem("refreshToken", refreshToken);
  localStorage.setItem("refreshTokenExpiresAt", refreshTokenExpiresAt);
}

function clearLocalStorage() {
  localStorage.clear();
}

function checkFollowOA(callBack) {
  refreshToken(() => {
    const accessToken = localStorage.getItem("accessToken");
    $.ajax({
      url: BASE_API + "/api/v1/users/check-follow-zalo-oa",
      type: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data, textStatus, jQxhr) {
        const { is_follow } = data;
        if (!is_follow) {
          window.open("./follow-oa.html", "_self");
          return;
        }
        callBack();
      },
      error: function (jqXhr, textStatus, errorThrown) {
        if (jqXhr.responseJSON.errorCode === "ACCOUNT_BLOCKED") {
          window.open("./notification.html", "_self");
          return;
        }
      },
    });
  });
}

function myProfile() {
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
        if(data.is_black_list) {
          window.open("./notification.html", "_self");
        }
        if (data?.is_update_leadform) {
          window.open("./form.html", "_self");
          return;
        }
        $(".info-username").text(data?.profile?.full_name);
        if (data?.profile?.avatar) {
          $(".info-avatar img").attr("src", data?.profile?.avatar);
        }
      },
      error: function (jqXhr, textStatus, errorThrown) {
      },
    });
  });
}

function checkLogin() {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return false;
  return true;
}
