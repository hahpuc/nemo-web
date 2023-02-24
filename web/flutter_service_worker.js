'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ae25ab0fbe324f5b4f2c2e86f9fa221d",
"index.html": "df41184aa307ff1da15d016a6d544d45",
"/": "df41184aa307ff1da15d016a6d544d45",
"main.dart.js": "87ce0da3298cfc22ded8f165af5f8f35",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sql-wasm.js": "7ce6f6c33529a9703e33e194e79b7691",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "568d57ccf6542dbd2cc45522b87c535b",
"assets/AssetManifest.json": "84ce2ce671dd44bec58a65147d286b46",
"assets/NOTICES": "95590e8648553d73508112b9717f2ed7",
"assets/FontManifest.json": "a0e59355e1a030de3d1a6bc6d4f32afc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/ic_phone.svg": "6c792a49139fc6dc3e67b3f3d260f3b5",
"assets/assets/images/ic_mail.svg": "6a917572643a6d9310c4d40013cb8cc2",
"assets/assets/images/ic_link.svg": "45f3c35878951ba3ab4f4e3e5b773b59",
"assets/assets/images/ic_device_mobile.svg": "7d715b0f1d9d0c70a1a38db9cdc4d1b7",
"assets/assets/images/ic_home_fill.svg": "a27fcfc4079d4f239e17331ec46e9612",
"assets/assets/images/ic_image_rectangle.svg": "da4ed2d8a30572fae30c1957dea36a98",
"assets/assets/images/ic_zalo.svg": "297e4bafe036c78bafd1c5dc3f41b5c0",
"assets/assets/images/ic_diary.svg": "4ddb6aa32141fc903e78a1562a918302",
"assets/assets/images/img_nemo_logo_white.png": "a35143e5b586da81c385886c6413526a",
"assets/assets/images/ic_camera.svg": "6b7adf5f9c48359451d9a2c07ccc8956",
"assets/assets/images/img_profile_header.png": "c5a27b6c23c46f08058d6ed01a99d148",
"assets/assets/images/ic_reload.svg": "c993df27fe1d61db053f5ebf891f9ec9",
"assets/assets/images/ic_notification.svg": "5c72539370e00ae8b323a31f86d1262c",
"assets/assets/images/ic_func_timekeeping_history.svg": "7e6218e7c8f7678e85ed5841327a4c97",
"assets/assets/images/ic_calendar.svg": "24c30d03e302164731a354fd6c96f3b6",
"assets/assets/images/ic_more_options.svg": "45deef59b5858087e36057e373b86b97",
"assets/assets/images/ic_password.svg": "12d5877073e7f17d8008e42ae779d10e",
"assets/assets/images/ic_launcher_android.png": "893aabcfbe46eb5220600d6bbb469bd8",
"assets/assets/images/ic_trash.svg": "9de5cc000955f0fe3057532b60ed7d41",
"assets/assets/images/ic_card_id.svg": "0245ec8a97e298746be5340ec5719bfa",
"assets/assets/images/ic_has_update.svg": "eba2ad89952d9cfe116c14c8065be659",
"assets/assets/images/ic_store.svg": "e74145fd0cff858ebd7376f3477325b0",
"assets/assets/images/ic_qrcode.svg": "f332ab42b3dafa96e0e769329ba513eb",
"assets/assets/images/ic_func_timekeeping_compensation_history.svg": "80b79e5cd716adfbfcc037a91c94f8ee",
"assets/assets/images/ic_func_timekeeping_compensation.svg": "70ad5590059c4b3c84c5d09b615a2f6e",
"assets/assets/images/ic_func_timekeeping_review.svg": "cff5ea44e8aee06a98b8811159350ba6",
"assets/assets/images/ic_themes.svg": "964a13e859b5bb99c98f22bccec42270",
"assets/assets/images/ic_user_circle_unfill.svg": "967fc51438ba86ff37b94eb34f50133c",
"assets/assets/images/ic_failed.svg": "9664d5c0ae70b4d608bc5675b4927a51",
"assets/assets/images/ic_flash.svg": "30fba8a5a49f2d18e2ce2b3decbea0ea",
"assets/assets/images/ic_launcher.png": "1552936bf407ffd81a7aeea29c621ce6",
"assets/assets/images/ic_reload_circle.svg": "fee9cbaf8ca8cbfb2d935ba4ef1b35cf",
"assets/assets/images/ic_user_outline.svg": "5aa76b13a03ac12b19672877c5438bd8",
"assets/assets/images/ic_func_timekeeping.svg": "8a36fef6287e959aaaf2b3039b5aea0d",
"assets/assets/images/ic_database.svg": "34e0b4687fef4e098eb5053f26b5febc",
"assets/assets/images/nemo_logo.webp": "8546b254bbbac03677e770314fe398dc",
"assets/assets/images/ic_tick_double.svg": "df91d8981ae020b5e00245085e19dc33",
"assets/assets/images/login_banner.webp": "f6ad8e4753769ea2196d8df7c7717de7",
"assets/assets/images/ic_home_location.svg": "a2063a714fa6d160e0650f5ce9dee260",
"assets/assets/images/ic_mail_profile.svg": "dd7f73ae920a02ad6dfba0ec7f912fde",
"assets/assets/images/ic_search.svg": "42eb762ce8c4d58f768b9ceaf0dc52c3",
"assets/assets/images/ic_sync_action.svg": "b34084fd80555a40984a5fcb66e4bf42",
"assets/assets/images/ic_suscess.svg": "6695294f4a4bdfef78f01adcc4702b58",
"assets/assets/images/ic_take_picture.svg": "e09a35b05cc5329d5b61a160672e7baf",
"assets/assets/images/ic_add_timekeeping.svg": "7f0cf95d1c94c792a0a873a8e19d9f00",
"assets/assets/images/ic_user_circle_fill.svg": "ed8e5f2fcb622c23601a5c875f1e4168",
"assets/assets/images/ic_logout.svg": "b31ea538dfc82aae41857a0ddff7ed30",
"assets/assets/images/ic_home_unfill.svg": "cc4f1ad73ed557bbff5e3d79427c93ed",
"assets/assets/fonts/SFProDisplay-Regular.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/assets/fonts/SFProDisplay-Bold.otf": "0c44101dbd06884c80542abc2c91034d",
"assets/assets/fonts/SFProDisplay-Semibold.ttf": "bfddc2a3b6bc31c9c25a8f391450dd00",
"assets/assets/fonts/SFProDisplay-Light.otf": "bfd8a382a62d566729ba8055e44ace0f",
"sql-wasm.wasm": "9acb7a2acdb22234cf19be0aa2f332d0",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
