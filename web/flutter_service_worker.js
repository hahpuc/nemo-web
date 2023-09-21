'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b2c18d661f3a56f77ba545fe578b779a",
"index.html": "fcecd5a3e64c751cc5b367e7a93a09a8",
"/": "fcecd5a3e64c751cc5b367e7a93a09a8",
"main.dart.js": "dec8c2d1ddc929abd2cff37cc5deb79e",
"jsQR.js": "8af00ac6d8f4454fa2e1a698d55542fa",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sql-wasm.js": "7ce6f6c33529a9703e33e194e79b7691",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "568d57ccf6542dbd2cc45522b87c535b",
"assets/AssetManifest.json": "3b6481163009a46573e89dd3271cc2b4",
"assets/NOTICES": "ef846c5a5674548b9ac5bf6f89b1786a",
"assets/FontManifest.json": "a0e59355e1a030de3d1a6bc6d4f32afc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f4c4490fcb53613ab3a8fe5e84c398c3",
"assets/fonts/MaterialIcons-Regular.otf": "12af7d0689e902d82ff232f5167a7b19",
"assets/assets/images/ic_func_osa_enter.svg": "eb1a8cdd20b57c73721c643f4a28facd",
"assets/assets/images/ic_phone.svg": "6c792a49139fc6dc3e67b3f3d260f3b5",
"assets/assets/images/ic_mess_occasion.svg": "fc541e034009db51b20324f2a1fc3ef3",
"assets/assets/images/ic_func_trade_daily_task.svg": "f6f3863baeaa93e30421e31d7dd8cc95",
"assets/assets/images/ic_func_trade_field_work.svg": "e2e5c0f6c1e051c65e5d3c273f7a4d12",
"assets/assets/images/ic_func_trade_sell_out_entry.svg": "423dbb8331df1a211e6fcab8e63babb5",
"assets/assets/images/img_about_integrity_vertical.png": "187c323717f39111225607a6ff3c71a5",
"assets/assets/images/ic_filter.svg": "56d43566f1ced32ba58c58668b52f179",
"assets/assets/images/ic_mail.svg": "6a917572643a6d9310c4d40013cb8cc2",
"assets/assets/images/ic_mess_reminder_coupon.svg": "97dd93db9503c3d567aa1210db6a68c4",
"assets/assets/images/ic_func_trade_coaching_summary_report.svg": "adc27dab98fdce3e75b5412408abdb0c",
"assets/assets/images/ic_link.svg": "45f3c35878951ba3ab4f4e3e5b773b59",
"assets/assets/images/ic_device_mobile.svg": "7d715b0f1d9d0c70a1a38db9cdc4d1b7",
"assets/assets/images/ic_func_trade_field_work_history.svg": "ba7d8752d724ae91289bdf57d9197b4e",
"assets/assets/images/ic_home_fill.svg": "a27fcfc4079d4f239e17331ec46e9612",
"assets/assets/images/ic_image_rectangle.svg": "da4ed2d8a30572fae30c1957dea36a98",
"assets/assets/images/ic_zalo.svg": "297e4bafe036c78bafd1c5dc3f41b5c0",
"assets/assets/images/ic_func_trade_emp_performance_report.svg": "4d491f916ff44e0d910380e72520a7d7",
"assets/assets/images/ic_func_trade_emp_coaching_detail_report.svg": "f39e03ebf5e6a33ae02a5840b9bfc2b6",
"assets/assets/images/ic_right_arrow.svg": "4edd5ce8ecfe304b131aa7976e58d115",
"assets/assets/images/ic_func_trade_sell_out_revise.svg": "ea9269d92d9e1d3d3fbff9f5fa41fda7",
"assets/assets/images/ic_task_check.svg": "c566c2e01ef7728c251472f5aef7597f",
"assets/assets/images/img_about_studious_detail.png": "91e9b9cf635a94ad2651f26900163a2d",
"assets/assets/images/ic_mess_product_education.svg": "108932bf37fc05948ee0f9be03a4edf6",
"assets/assets/images/ic_diary.svg": "4ddb6aa32141fc903e78a1562a918302",
"assets/assets/images/ic_func_osa_revise.svg": "a2fc497ff05df614a3364a447b5a0ea9",
"assets/assets/images/img_about_studious_vertical.png": "96999364b7669f630ac310e00da3567d",
"assets/assets/images/ic_error_circle.svg": "26ac7fb2ea334deae9af559e73c855dd",
"assets/assets/images/img_nemo_logo_white.png": "a35143e5b586da81c385886c6413526a",
"assets/assets/images/img_about_enduring_detail.png": "4b7c4a202e4548bd4b1cc529dc0d4c67",
"assets/assets/images/ic_mess_thanks.svg": "c07fb900f6665aaef9146ca9750de873",
"assets/assets/images/ic_camera.svg": "6b7adf5f9c48359451d9a2c07ccc8956",
"assets/assets/images/ic_mess_task_not_done.svg": "3d42531646459a579e1606b0292d3b32",
"assets/assets/images/ic_func_trade_sell_out_report.svg": "b95100feb1e1b7017fc2ba53a52abb6f",
"assets/assets/images/ic_mess_birthday.svg": "36682cc11a779f80f2938d2f6c2f64e4",
"assets/assets/images/img_profile_header.png": "c5a27b6c23c46f08058d6ed01a99d148",
"assets/assets/images/ic_mess_purchase_provider.svg": "2f40001928eb0620625ed9e4b0256784",
"assets/assets/images/ic_func_osa_report.svg": "bf9b7caf0eebb5318eb8ae16f3c6e26c",
"assets/assets/images/img_about_studious_horizontal.png": "0dbe6e7be139c16fe011b252c1f5c1ea",
"assets/assets/images/ic_reload.svg": "c993df27fe1d61db053f5ebf891f9ec9",
"assets/assets/images/ic_notification.svg": "5c72539370e00ae8b323a31f86d1262c",
"assets/assets/images/ic_func_timekeeping_history.svg": "7e6218e7c8f7678e85ed5841327a4c97",
"assets/assets/images/ic_calendar.svg": "24c30d03e302164731a354fd6c96f3b6",
"assets/assets/images/ic_submit_nu_success.svg": "741ce592166428919276a2d5fab9fe31",
"assets/assets/images/ic_func_trade_outlet_image.svg": "e638921e9f3f4b4c7d43c89ce85f1e63",
"assets/assets/images/ic_func_trade_outlet_location.svg": "a15f9f0477f957350f517d0662ddc71d",
"assets/assets/images/ic_more_options.svg": "45deef59b5858087e36057e373b86b97",
"assets/assets/images/ic_password.svg": "12d5877073e7f17d8008e42ae779d10e",
"assets/assets/images/ic_qrscan.svg": "2e8108f8be9912969b4094ea5e7f58a9",
"assets/assets/images/ic_mess_no_purchase_survey.svg": "aa9867acfa82ee72e2a00b7be4dd2d90",
"assets/assets/images/ic_launcher_android.png": "893aabcfbe46eb5220600d6bbb469bd8",
"assets/assets/images/ic_trash.svg": "9de5cc000955f0fe3057532b60ed7d41",
"assets/assets/images/ic_packaging_cancel.svg": "659cdd8f742634561bcf7242bb3b6583",
"assets/assets/images/ic_correct_circle.svg": "cdd91ae1e5aeca8ed3719ee3c785f011",
"assets/assets/images/ic_trash_outline.svg": "2f7175dc19a850d5ac9bf6dd3bb858b9",
"assets/assets/images/ic_card_id.svg": "0245ec8a97e298746be5340ec5719bfa",
"assets/assets/images/ic_func_coupon_confirm.svg": "f0e0d8c51df775a5630b3ec2efec5a9c",
"assets/assets/images/ic_packaging_done.svg": "4461898d0fa6b52c6cd5fd0555cfbe60",
"assets/assets/images/ic_func_trade_outlet_location_history.svg": "0360ff894d32972a8e33fa8ab2fd73ed",
"assets/assets/images/img_about_integrity_detail.png": "f3e9f0c18e9b39fc5ad913cc854bed6b",
"assets/assets/images/ic_mess_default.svg": "a1558cab07c94362644f1bf3405c2af1",
"assets/assets/images/img_about_enduring_vertical.png": "ce8e0f2ea1e2479fa3afcfc3db4e46a8",
"assets/assets/images/ic_has_update.svg": "eba2ad89952d9cfe116c14c8065be659",
"assets/assets/images/ic_mess_task_done.svg": "1511b55616417142b8120f64a2ed3fb4",
"assets/assets/images/ic_store.svg": "e74145fd0cff858ebd7376f3477325b0",
"assets/assets/images/ic_qrcode.svg": "f332ab42b3dafa96e0e769329ba513eb",
"assets/assets/images/img_about_decisive_horizontal.png": "ea5a91df50bfb9f0051c916de6eec963",
"assets/assets/images/ic_spinner.gif": "ea36ad30f084a3806df11d0e41ff6331",
"assets/assets/images/ic_func_timekeeping_compensation_history.svg": "80b79e5cd716adfbfcc037a91c94f8ee",
"assets/assets/images/img_about_enduring_horizontal.png": "b210abd2e3fcc417b91b227c4811607e",
"assets/assets/images/ic_func_timekeeping_compensation.svg": "70ad5590059c4b3c84c5d09b615a2f6e",
"assets/assets/images/ic_func_trade_performance_report.svg": "8dd99c7e800540be7d026661817dedb0",
"assets/assets/images/ic_func_trade_daily_task_history.svg": "99977c47b4f623d601b31cc3273b048b",
"assets/assets/images/img_about_decisive_detail.png": "1b1b7733abbfd9de51cfb29ae7aa0743",
"assets/assets/images/ic_func_pg_order_revise.svg": "35629ea22a037ecc1c0e8177c71fedfe",
"assets/assets/images/ic_func_timekeeping_review.svg": "cff5ea44e8aee06a98b8811159350ba6",
"assets/assets/images/ic_themes.svg": "964a13e859b5bb99c98f22bccec42270",
"assets/assets/images/ic_user_circle_unfill.svg": "967fc51438ba86ff37b94eb34f50133c",
"assets/assets/images/ic_failed.svg": "9664d5c0ae70b4d608bc5675b4927a51",
"assets/assets/images/ic_flash.svg": "30fba8a5a49f2d18e2ce2b3decbea0ea",
"assets/assets/images/ic_launcher.png": "1552936bf407ffd81a7aeea29c621ce6",
"assets/assets/images/ic_func_add_customer_wolf.svg": "bba588c82a71b5824eedd138a1299396",
"assets/assets/images/ic_func_trade_inventory_revise.svg": "c815918b8fab18299ac015a2f4c9970d",
"assets/assets/images/ic_take_photo.svg": "7610913ab940a2a8d2652169f69e65ab",
"assets/assets/images/ic_reload_circle.svg": "fee9cbaf8ca8cbfb2d935ba4ef1b35cf",
"assets/assets/images/ic_timer_circle.svg": "f661f67a41679299013b28e90a9a367e",
"assets/assets/images/ic_user_outline.svg": "5aa76b13a03ac12b19672877c5438bd8",
"assets/assets/images/ic_func_timekeeping.svg": "8a36fef6287e959aaaf2b3039b5aea0d",
"assets/assets/images/img_about_decisive_vertical.png": "6868ba7b75385a5f0b4a07aec8ca6975",
"assets/assets/images/ic_database.svg": "34e0b4687fef4e098eb5053f26b5febc",
"assets/assets/images/ic_logo_abbott.svg": "14b218116c50c0a1b06c831254e27961",
"assets/assets/images/nemo_logo.webp": "8546b254bbbac03677e770314fe398dc",
"assets/assets/images/ic_submit_nu_failed.svg": "8fb8ab033a5b7f97b0078c69064726c2",
"assets/assets/images/ic_func_trade_inventory_report.svg": "05d4c52b3c3cb9cf5400d5f2c6fb40ce",
"assets/assets/images/ic_download.svg": "43badb13d22dca512d3272da59584b97",
"assets/assets/images/ic_tick_double.svg": "df91d8981ae020b5e00245085e19dc33",
"assets/assets/images/login_banner.webp": "f6ad8e4753769ea2196d8df7c7717de7",
"assets/assets/images/ic_home_location.svg": "a2063a714fa6d160e0650f5ce9dee260",
"assets/assets/images/ic_mail_profile.svg": "dd7f73ae920a02ad6dfba0ec7f912fde",
"assets/assets/images/ic_search.svg": "42eb762ce8c4d58f768b9ceaf0dc52c3",
"assets/assets/images/ic_sync_action.svg": "b34084fd80555a40984a5fcb66e4bf42",
"assets/assets/images/ic_suscess.svg": "6695294f4a4bdfef78f01adcc4702b58",
"assets/assets/images/ic_func_trade_outlet_image_history.svg": "1b4a45d3d5e66425d22bb6582447e824",
"assets/assets/images/ic_take_picture.svg": "e09a35b05cc5329d5b61a160672e7baf",
"assets/assets/images/ic_func_trade_coaching_detail_report.svg": "b5f01bc642de179e79ee132616f27882",
"assets/assets/images/img_about_integrity_horizontal.png": "67295adf99911f35001275c92fc2f985",
"assets/assets/images/ic_func_customer_similac_list.svg": "c8d12c30b10c71a7bfd95b5abbf68927",
"assets/assets/images/ic_func_add_customer_similac.svg": "52dae4b62015d72de1bae76f163e4f46",
"assets/assets/images/ic_func_add_customer.svg": "336432e95105dab6950c6e127d19bb02",
"assets/assets/images/ic_add_timekeeping.svg": "7f0cf95d1c94c792a0a873a8e19d9f00",
"assets/assets/images/ic_user_circle_fill.svg": "ed8e5f2fcb622c23601a5c875f1e4168",
"assets/assets/images/ic_logout.svg": "b31ea538dfc82aae41857a0ddff7ed30",
"assets/assets/images/ic_func_customer_list.svg": "ff5219fe9799e0cede894979fd4492ab",
"assets/assets/images/ic_func_pg_order_history.svg": "46f95b5d173da8639b071877d0707abe",
"assets/assets/images/ic_func_pg_order.svg": "e326e5272670142e3295aaf9077931f5",
"assets/assets/images/ic_home_unfill.svg": "cc4f1ad73ed557bbff5e3d79427c93ed",
"assets/assets/images/ic_func_trade_inventory_entry.svg": "667d5b3ca7c55772e8822b75c3d98d85",
"assets/assets/fonts/SFProDisplay-Regular.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/assets/fonts/SFProDisplay-Bold.otf": "0c44101dbd06884c80542abc2c91034d",
"assets/assets/fonts/SFProDisplay-Semibold.ttf": "bfddc2a3b6bc31c9c25a8f391450dd00",
"assets/assets/fonts/SFProDisplay-Light.otf": "bfd8a382a62d566729ba8055e44ace0f",
"sql-wasm.wasm": "9acb7a2acdb22234cf19be0aa2f332d0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
