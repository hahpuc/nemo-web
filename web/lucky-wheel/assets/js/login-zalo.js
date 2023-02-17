$(document).ready(function () {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("code")) {
    return;
  }
  const authorizationCode = params.get("code");

  accessTokenZalo(authorizationCode);
});

function accessTokenZalo(authorizationCode) {
  const body = {
    code: authorizationCode,
    app_id: ZALO_APP_ID,
    grant_type: "authorization_code",
  };

  $.ajax({
    url: "https://oauth.zaloapp.com/v4/access_token",
    type: "POST",
    headers: {
      secret_key: ZALO_SECRET_KEY,
    },
    data: body,
    contentType: "application/x-www-form-urlencoded",
    dataType: "json",
    success: function (data, textStatus, jQxhr) {
      if (data?.error) {
        //TODO
      } else {
        login(data.access_token);
      }
    },
    error: function (jqXhr, textStatus, errorThrown) {
      console.log("errorThrown", errorThrown);
      //TODO
    },
  });
}

function login(accessToken) {
  const body = {
    access_token: accessToken,
    social_network: "zalo",
    grant_type: "social-network",
    scope: "ApiService",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    type: "lucky_draw",
  };

  $.ajax({
    url: BASE_API + "/api/v1/oauth/token",
    type: "POST",
    data: body,
    contentType: "application/x-www-form-urlencoded",
    dataType: "json",
    success: function (data, textStatus, jQxhr) {
      setLocalStorage(data);
      window.open("./wheel.html", "_self");
    },
    error: function (jqXhr, textStatus, errorThrown) {
      console.log("errorThrown", errorThrown);
      //TODO
    },
  });
}
