'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "764dc846b9d31fa482e1eeae859ebdbb",
"index.html": "25ec0a7c80dbada11367dc5ebf7ab779",
"/": "25ec0a7c80dbada11367dc5ebf7ab779",
"main.dart.js": "f9f972ca88dc7c8b29f632c6bdbc8662",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c4d481e840dff55e04f550fd81eaca51",
"assets/AssetManifest.json": "74d03800e92381b7181033730973aad4",
"assets/NOTICES": "b6b2e3f8829bed7c951602c7d0224d0a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "47a605e9ce5724fb017f80e33cc65bd6",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/biwamusume/%25E3%2582%25A4%25E3%2583%25AF%25E3%2583%2588%25E3%2582%25B3%25E3%2583%258A%25E3%2583%259E%25E3%2582%25BA.png": "c1e4df16e18c30a5ddc25ed4a20f8a0c",
"assets/assets/biwamusume/%25E3%2582%25B3%25E3%2582%25A4.png": "0725b6b718ad32459a48f0c8e2dff437",
"assets/assets/biwamusume/%25E3%2582%25BF%25E3%2583%2586%25E3%2583%259C%25E3%2582%25B7%25E3%2582%25AC%25E3%2582%25A4.png": "ba0971cf73144f41045349031d0fa50a",
"assets/assets/biwamusume/%25E3%2583%2593%25E3%2583%25AF%25E3%2582%25B3%25E3%2582%25AA%25E3%2582%25AA%25E3%2583%258A%25E3%2583%259E%25E3%2582%25BA.png": "70b17ca7079d9f5a4a7b847901a1cd3e",
"assets/assets/biwamusume/%25E3%2583%25A0%25E3%2582%25AE%25E3%2583%2584%25E3%2582%25AF.png": "d42b3aa970f865f39017e3fed5a0a281",
"assets/assets/biwamusume/%25E3%2583%2595%25E3%2583%258A.png": "5dbe47dd68f47fd0ed6f4953ca630c63",
"assets/assets/biwamusume/%25E3%2583%2596%25E3%2583%25AB%25E3%2583%25BC%25E3%2582%25AE%25E3%2583%25AB.png": "76e1e0341da1ca839972b9a5b2e8127d",
"assets/assets/biwamusume/%25E3%2583%2593%25E3%2583%25AF%25E3%2583%2592%25E3%2582%25AC%25E3%2582%25A4.png": "21ef84d336d659e5b2d95d81e83375c2",
"assets/assets/biwamusume/%25E3%2583%258F%25E3%2582%25B9.png": "2587f4704bdbb83fe52e66e755dae73f",
"assets/assets/biwamusume/%25E3%2583%25AF%25E3%2582%25AB%25E3%2582%25B5%25E3%2582%25AE.png": "4cf16d6ee9b2a0c751fdf1e4684cba1e",
"assets/assets/biwamusume/%25E3%2582%25A6%25E3%2583%2584%25E3%2582%25BB%25E3%2583%259F%25E3%2582%25AB%25E3%2582%25B8%25E3%2582%25AB.png": "a9373d8ea21efe83ec228be10a94adf6",
"assets/assets/biwamusume/%25E3%2582%25B9%25E3%2582%25B8%25E3%2582%25A8%25E3%2583%2593.png": "414b1061681efe393fc94e9aacf174f0",
"assets/assets/biwamusume/%25E3%2582%25AA%25E3%2582%25AF%25E3%2583%2581%25E3%2583%2590%25E3%2582%25B9.png": "5adc9d8e3684ec89d5010c38da325105",
"assets/assets/biwamusume/%25E3%2583%258F%25E3%2582%25AF%25E3%2583%25AC%25E3%2583%25B3.png": "27f6afbf8ff26e51c7ffff8763c908a5",
"assets/assets/biwamusume/%25E3%2583%2593%25E3%2583%25AF%25E3%2583%259E%25E3%2582%25B9.png": "b7c5da0d5594783979a8215596cd55e8",
"assets/assets/biwamusume/%25E3%2583%25AF%25E3%2582%25BF%25E3%2582%25AB.png": "86b48953d12003ce25945c1ca07d84e6",
"assets/assets/biwamusume/%25E3%2582%25A6%25E3%2583%258A%25E3%2582%25AE.png": "4a73abda046cf6cdbeb5e753080596de",
"assets/assets/biwamusume/%25E3%2582%25A2%25E3%2583%2596%25E3%2583%25A9%25E3%2583%2592%25E3%2582%25AC%25E3%2582%25A4.png": "cd882863400d2fc45ba705172e2f8133",
"assets/assets/biwamusume/%25E3%2582%25B4%25E3%2583%25AA.png": "7e7d62ee37d407a429236f9fc012b411",
"assets/assets/biwamusume/%25E3%2583%25A6%25E3%2582%25A2%25E3%2583%25A6.png": "145160c31708b13f83b3db947088af2f",
"assets/assets/biwamusume/%25E3%2583%25A1%25E3%2583%2580%25E3%2582%25AB.png": "d0e4fa8d98edfe8010025bf36b707266",
"assets/assets/biwamusume/%25E3%2582%25A4%25E3%2582%25B5%25E3%2582%25B6.png": "2e0721d8160a48b00039769a0031ea95",
"assets/assets/biwamusume/%25E3%2582%25B9%25E3%2583%2583%25E3%2583%259D%25E3%2583%25B3.png": "fe0c8ee9937d63593147231de3c6977f",
"assets/assets/biwamusume/%25E3%2582%25BB%25E3%2582%25BF%25E3%2582%25B7%25E3%2582%25B8%25E3%2583%259F.png": "f8d19ab8acece7fd64757003be5b7a8c",
"assets/assets/biwamusume/%25E3%2583%259B%25E3%2583%25B3%25E3%2583%25A2%25E3%2583%25AD%25E3%2582%25B3.png": "be37d817b00352715f8b868fc67358f6",
"assets/assets/biwamusume/%25E3%2583%2588%25E3%2582%25A6%25E3%2583%25A8%25E3%2582%25B7%25E3%2583%258E%25E3%2583%259C%25E3%2583%25AA.png": "cd7a7fb0e19e1fab24dbf10eed7748c0",
"assets/assets/biwamusume/%25E3%2583%258B%25E3%2582%25B4%25E3%2582%25A4.png": "729b7f49e3f9777095e58a2791993d43",
"assets/assets/biwamusume/%25E3%2583%25A9%25E3%2582%25A4%25E3%2582%25AE%25E3%2583%25A7.png": "58217c169d9290b42e07cb426a69a1ba",
"assets/assets/biwamusume/%25E3%2582%25B9%25E3%2582%25B4%25E3%2583%25A2%25E3%2583%25AD%25E3%2582%25B3.png": "da95f0074d2d0776d4aa14862086dda5",
"assets/assets/biwamusume/%25E3%2583%258C%25E3%2583%259E%25E3%2583%2581%25E3%2583%2581%25E3%2583%2596.png": "19023923f3338c989099af1f72845184",
"assets/assets/biwamusume/%25E3%2583%2589%25E3%2582%25B8%25E3%2583%25A7%25E3%2582%25A6.png": "173ddb949d16415ceb785525d07e3de0",
"assets/assets/biwamusume/%25E3%2583%258B%25E3%2582%25B4%25E3%2583%25AD%25E3%2583%2596%25E3%2583%258A.png": "fdc08a8ff896aa63d108afb31b67acce",
"assets/assets/logo.png": "dfa90fa097450a9bdb9ed6975407b205",
"assets/assets/diagnostic_page_background.png": "e5f733f6c75b5a73c89f28dbe9dec0ec",
"assets/assets/top_bg.png": "d1d7aa5e05423870acfa2934526faf86",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
