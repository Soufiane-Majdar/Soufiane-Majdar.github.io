'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "432c9167fb2efe9f0216916ccc1ced42",
"/": "432c9167fb2efe9f0216916ccc1ced42",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"version.json": "0cfd0a6d9b4e5cbff4a4c7c01ce54c3f",
"manifest.json": "93d920dd6a32a4f561b5bd594f73a50a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"main.dart.js": "b90597502a502a5b1ecec35d45e624f2",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.bin.json": "a6436598b3ee660c97c28f74e8260300",
"assets/fonts/MaterialIcons-Regular.otf": "d9b3c449ccf5c0081da00cf0e8d853af",
"assets/AssetManifest.bin": "5a0ecf73554d7cc5943254a12595e50f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "8539aef9e49060c3744b203446dbdcd2",
"assets/AssetManifest.json": "3e48c17860cd66d841f1a5a614c27429",
"assets/assets/ios_icon.png": "4b8039e8a442657c7b9b379322eb2793",
"assets/assets/github.png": "7aed3646cbea181a3da85620809e992c",
"assets/assets/linkedin.png": "e4d142586676a80b3927d899d3584148",
"assets/assets/dart.png": "1a089616e2be1ac7c5188c00225772c8",
"assets/assets/spring.png": "a01c71cb3222b82eb8586a1bac3e573f",
"assets/assets/my_flutter_avatar.png": "54fcaae3132b5872394da1f63fff9e95",
"assets/assets/react.png": "2198f884fddf4629ab3df281ae2c77c6",
"assets/assets/hugo.png": "6c341d7823570ab705c940f1dea993ef",
"assets/assets/telegram.png": "d940cd7b5e7b66510b59785177c6414f",
"assets/assets/html5.png": "9d5b22bfe74ac513d5cd33563908ae71",
"assets/assets/instagram.png": "02c7721e097a6bb001d00fa61750bc81",
"assets/assets/web_icon.png": "8867144689b70d099377ee3c4ab1baa0",
"assets/assets/css3.png": "b1bd0673d70ccee89e1457bd71554759",
"assets/assets/projects/1.png": "1f59be4af5fe374b4e3f5f6afdb3a24c",
"assets/assets/projects/05.png": "e2cc840dbaaf91e6acba1d9d44ae502f",
"assets/assets/projects/w03.jpeg": "81f24b685fd3f214e409fd29217c1235",
"assets/assets/projects/04.png": "8e2a233d5e7b9930407e3cccf54b6799",
"assets/assets/projects/06.png": "11a36375edc4b5ba6956bdeed286f733",
"assets/assets/projects/02.png": "cf8468132005ef5442c5857705e39c40",
"assets/assets/projects/w02.png": "f3168876c62cbf02cb9ff94640383f96",
"assets/assets/projects/w01.png": "b1256ae160f9170ab36ce78ee7a4dc2d",
"assets/assets/projects/03.png": "9dd85f5710c01486dc5937733a22d9eb",
"assets/assets/django.png": "8ff133f8e4c3a93e23eec540a6f5568a",
"assets/assets/python.png": "e04382338533c6bb0dcfc7a48bf86502",
"assets/assets/flutter.png": "abe34b0551ded954f6759cada7807e3e",
"assets/assets/desktop_icon.png": "e0e90a080a776fd1da23f5a249b5ce3c",
"assets/assets/bootstrap.png": "82a14296ac246d321f8388884b6f5749",
"assets/assets/javascript.png": "ab8e2beca091db2345ff66a5cc432985",
"assets/assets/facebook.png": "fa74fe1619d75d68df1f0db7c654e39a",
"assets/assets/docker.png": "722cafb6c71b44bba6292a603b2e198c",
"assets/assets/android_icon.png": "038ea15b40a395099451862327ebcfc1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
