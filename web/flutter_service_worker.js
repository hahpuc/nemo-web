'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "27500cd05d7bf2b8a1760a370974bb43",
"index.html": "9ffba7f8a6fa06a895a6de01f002d994",
"/": "9ffba7f8a6fa06a895a6de01f002d994",
"redeem_policy.html": "4d896685daea70fcbcba033fc13251e8",
"images/PinClipart.png": "6dbfeffaf359f496dedc9ac59e43fa24",
"images/tabler-hand-click.svg": "3f7fbdfde68b8364b7459edb20068a8d",
"images/logo-friso.svg": "d44d76a789c9dc402a459278cf068efc",
"images/chevron-left.svg": "5b15542e052f1abfb1d500046720d76b",
"main.dart.js": "639f95d74c0baf5c546dbf1434d6cb8d",
"terms_conditions.html": "1f69602456bc1aa7c469724e69e2eb60",
"jsQR.js": "8af00ac6d8f4454fa2e1a698d55542fa",
"env-config.json": "6b96e306698f9d88065ebc22248c9b8a",
"follow_oa.html": "b9e3795d5311666242eaa7f3b0945dd8",
"icons/favicon.ico": "ac9a4a7f13600c7f3b63ab95ec958f5b",
"membership.html": "f5f7f9ef6aa848519336d3b975d0b1c0",
"assets/AssetManifest.json": "28b26e6c3a71a802059c53f15229dcac",
"assets/NOTICES": "588b332f28a5cb8c79633571e88d5fa3",
"assets/FontManifest.json": "f4e34472534274b352b756eb9ec64772",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/ic_home_benefit_member.png": "c3c6c08ba1e706e103bd4811e7d88e41",
"assets/assets/images/ic_play_game.png": "e7a23f49bde50e3605b4969277aaaaf2",
"assets/assets/images/ic_friso_blue.png": "47c225a9636aed1b2d2ab3717c975a9b",
"assets/assets/images/ic_scan_failed.png": "136f10feda484fd1bb68849d32afebba",
"assets/assets/images/bg_home_user_info.png": "f178937c7e8a95a3e8a84d2d458dcc2a",
"assets/assets/images/ic_home.png": "7677d2c341d635a17fc13b6bc701508b",
"assets/assets/images/ic_home_bubble_dark.png": "42fc89edf6a38bffde4980bba793d611",
"assets/assets/images/ic_home_gift_dark.png": "29e0460e929159cf5c4aeaa48d7551da",
"assets/assets/images/ic_home_qr_dark.png": "1d2ec1d36b76923a5912660813e8d459",
"assets/assets/images/ic_gift_default.png": "a936d46ff2f8244a7b83b62ab268a130",
"assets/assets/images/dummy_vouver_kichi.png": "2818373119ec16a15b38d67e0de98cc0",
"assets/assets/images/ic_success.png": "dc54673a9113fd5527bd29d542bafdc5",
"assets/assets/images/ic_hand_click.png": "c579dca1ec35eaaf4be76489ca1c6515",
"assets/assets/images/ic_redeem_gift.png": "322ac687e538ed6c9a73e038922020fc",
"assets/assets/images/dummy_game_thumb.png": "e5e445744b3a372b6493a146af6909da",
"assets/assets/images/ic_scan_success.png": "6dbfeffaf359f496dedc9ac59e43fa24",
"assets/assets/images/ic_home_game_dark.png": "cb26f5b417bcc7e3d88015cb100dfe12",
"assets/assets/images/dummy_banner_home.png": "5b1c797fb8b758405db85bed38509112",
"assets/assets/images/dummy_gift_thumb.png": "bdbe3d9f6fe66412f0bba6990f93918c",
"assets/assets/images/ic_agency.png": "f18e7125b6bdb00228ffae6a30daa256",
"assets/assets/images/ic_warning.png": "136f10feda484fd1bb68849d32afebba",
"assets/assets/images/ic_friso_white.png": "84910f8ecce240f43d542bc71254f443",
"assets/assets/images/ic_home_history_dark.png": "5acc2c3809e104af2ee837bd703d8a0c",
"assets/assets/images/ic_home_join.png": "76c51f876ad734bba22ecaf6d8331384",
"assets/assets/fonts/FSAlbertPro1.otf": "bd50e5e8224f04220b217b88157876cf",
"assets/assets/fonts/FSAlbertPro-Bold1.otf": "d47c625923ad951fe8bdea3d3aa6c59a",
"lucky-wheel/login-zalo.html": "be9a25fc63c009402fd0d5321ac96cfd",
"lucky-wheel/wheel.html": "61743428f225f40ae4b31214c8a86e60",
"lucky-wheel/form.html": "e369050ada556be28adcaa5fb1b958f7",
"lucky-wheel/follow-oa.html": "72ac86afab64854c61cd7783940c8beb",
"lucky-wheel/notification.html": "4f937a7a7d7e559b9f0796849cbd837f",
"lucky-wheel/README.md": "228c10023261888ccd82e01265e31dec",
"lucky-wheel/package.json": "eca7659d5aafc7ea1fc0d7b95a32c7de",
"lucky-wheel/membership.html": "6a40413295b078bf95463c9a93994e50",
"lucky-wheel/assets/css/bootstrap.min.css": "d44328cee87c2b405213893ba35eaf78",
"lucky-wheel/assets/css/wheel.css": "49a89a3dd7f2025bf3d81bc39065a710",
"lucky-wheel/assets/css/wheel.less": "ce0a55a72750429a6f040b4b0a61839f",
"lucky-wheel/assets/css/index.css": "1435b3b309a79a2f846936d72ae0d0b1",
"lucky-wheel/assets/css/home-page.less": "495b497d13026ef6b7b297e93d26a864",
"lucky-wheel/assets/css/spin.css": "b62d10ae94fbef13de9ec9c2dfa385d3",
"lucky-wheel/assets/js/notification.js": "b74923315c9e440936e47b3fc99a6c3e",
"lucky-wheel/assets/js/login-zalo.js": "8ad971ef3d31709d6e0a91d450fe74ff",
"lucky-wheel/assets/js/loading.js": "62fe8254baebbae603f9e2e816f42a76",
"lucky-wheel/assets/js/bootstrap.js": "68164737c41fca17fe10c9c61e7ecc78",
"lucky-wheel/assets/js/jquery.min.js": "7c14a783dfeb3d238ccd3edd840d82ee",
"lucky-wheel/assets/js/main.js": "5a4dd7ed2111fe10bca864a3330c0e55",
"lucky-wheel/assets/js/bootstrap.min.js": "99e3544139e4735274587a831002ebae",
"lucky-wheel/assets/js/wheel.js": "acad93cec60c12027f811f8b15f4d64e",
"lucky-wheel/assets/js/form.js": "fc836f6031b7c1bc3a5c058502b4e725",
"lucky-wheel/assets/image/spin-pointer.png": "ccb7065e21368a23d20a2b0a4e3db566",
"lucky-wheel/assets/image/border_light_off.png": "a07ff110f6ccdefd65754ebfbf9af6a4",
"lucky-wheel/assets/image/zalo-quan-tam.png": "8b24ce7432e56b5fdf74b238788a551c",
"lucky-wheel/assets/image/ticket-50.svg": "e7ff3b70dd8285414283788665492bea",
"lucky-wheel/assets/image/favicon.ico": "ac9a4a7f13600c7f3b63ab95ec958f5b",
"lucky-wheel/assets/image/shadow_halo.png": "06a52179e574bdb49aa027be1a52c2d8",
"lucky-wheel/assets/image/het-luot.svg": "a86c858cb0adefc110ae5fbb20567255",
"lucky-wheel/assets/image/PinClipart.png": "6dbfeffaf359f496dedc9ac59e43fa24",
"lucky-wheel/assets/image/border_light_on_half.png": "19e5021a89b8bf1800f0bae59cf3fb79",
"lucky-wheel/assets/image/banner-form.png": "7ba60674fa3b41e6308aa03380c89d1c",
"lucky-wheel/assets/image/iPhone%2013%20Mini%20copy%201.png": "d4c9a178a7755b1ed9ef5854251f4e26",
"lucky-wheel/assets/image/banner.png": "087a9e72f25576d67c82b80009c74eb4",
"lucky-wheel/assets/image/wheel.png": "cff6d1afe24d2e441f7dde7ddaab3410",
"lucky-wheel/assets/image/chuc-mung.svg": "861083088d11e5a73a3d4ec8b8ff8626",
"lucky-wheel/assets/image/logo-zalo.jpeg": "3ba919c9ac501ceb3446f66863b5f38e",
"lucky-wheel/assets/image/scan-fail-emoji.svg": "6d3455b0af90150e61d53df0d1594554",
"lucky-wheel/assets/image/ticket.png": "e310e31fb6c85d2b01adfd87561c4830",
"lucky-wheel/assets/image/wheel-wrapper.png": "bf68943b35122d2f8e1660398e114f9c",
"lucky-wheel/assets/image/Lucky-Draw-Bkgr.png": "7d515297ad5ab7d6c7c32a222986efb8",
"lucky-wheel/assets/image/border_light_on.png": "634760e84a410e9c9adb2b0cf24f5304",
"lucky-wheel/assets/image/close.svg": "8ff2b32d601d08203d3ade1634fd94de",
"lucky-wheel/assets/image/logo-white.png": "09b1f357096311bab7fc6f9e8f6b3860",
"lucky-wheel/assets/image/z-btn.svg": "680d12e258486f78840447488ade68b2",
"lucky-wheel/assets/image/tabler-hand-click.svg": "3f7fbdfde68b8364b7459edb20068a8d",
"lucky-wheel/assets/image/scan-success-emoji.png": "1c09d49368ad330f2700df0dc0d34600",
"lucky-wheel/assets/image/logo-friso.svg": "d44d76a789c9dc402a459278cf068efc",
"lucky-wheel/assets/image/user-default.jpg": "5a2f622b90e2b05133949b7a083adbf1",
"lucky-wheel/assets/image/_wheel.png": "c86e1060059aecc6482b8b634754d697",
"lucky-wheel/assets/image/user-default.png": "b8982e196d7c86f12143ffa41d2b33a8",
"lucky-wheel/assets/image/scan-success-emoji.svg": "e52c33376fad52d143de63d3d30c61f2",
"lucky-wheel/assets/image/shadow.png": "625da1d70361d176e7f41e3403d481bc",
"lucky-wheel/assets/image/logo.svg": "8969c8713eda8994bb0310bbb73d263a",
"lucky-wheel/assets/image/notification.png": "51bc1024ec81c651b08098804f8b677f",
"lucky-wheel/assets/image/avatar.svg": "3bb0500b2991086dd9771fa4843c88ad",
"lucky-wheel/assets/image/chevron-left.svg": "5b15542e052f1abfb1d500046720d76b",
"lucky-wheel/assets/image/ribbon.svg": "e0b08aaefb41230c0e2ac2ecfa89e863",
"lucky-wheel/assets/fonts/SF-Pro-Display-Thin.otf": "5a942603c086e4c24355b64a2b160c72",
"lucky-wheel/assets/fonts/SF-Pro-Display-Light.otf": "d2e8530d7b0f9ca7c5298263bd1a184a",
"lucky-wheel/assets/fonts/SF-Pro-Display-Regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"lucky-wheel/assets/fonts/SF-Pro-Display-Bold.otf": "94348d7ee70c258261a757b66596c4f9",
"lucky-wheel/assets/fonts/SF-Pro-Display-Medium.otf": "84d3637759a89aa1b59df2a828544511",
"lucky-wheel/assets/fonts/SF-Pro-Display-Heavy.otf": "ab7fbc919a091663d289282da6a49fd3",
"lucky-wheel/assets/fonts/FSAlbertPro-Thin1.otf": "a778f6a17f5520095be9b8327aad4d21",
"lucky-wheel/assets/fonts/SF-Pro-Display-Semibold.otf": "2723a0240d8e4fd81b39668e0e33640a",
"lucky-wheel/assets/fonts/FSAlbertPro-ExtraBold1.otf": "4136e100cf0c0467179dc071ff367954",
"lucky-wheel/assets/fonts/FSAlbertPro-Light1.otf": "c55e547072122525828a4bf312a98bd2",
"lucky-wheel/assets/fonts/SF-Pro-Display-Ultralight.otf": "77c1464d7d448754be1640c8a3f45517",
"lucky-wheel/assets/fonts/FSAlbertPro1.otf": "bd50e5e8224f04220b217b88157876cf",
"lucky-wheel/assets/fonts/SF-Pro-Display-Black.otf": "6434254b4301838aed2b0a8428a52dec",
"lucky-wheel/assets/fonts/FSAlbertPro-Bold1.otf": "d47c625923ad951fe8bdea3d3aa6c59a",
"lucky-wheel/environment.js": "edbc14c91820576916edb2738f1ba164",
"lucky-wheel/rule.html": "39bd4c80eb4c673969ac0214453667e9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
