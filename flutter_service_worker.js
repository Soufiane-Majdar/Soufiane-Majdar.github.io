'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "dd910ef2a39fb8114e591d74bef6258f",
"/": "dd910ef2a39fb8114e591d74bef6258f",
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
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/d8/07cd603f7ca27b8e3e4c148bf226e4bddb61d1": "fd8425a55d37d93e52fe2214d5ae058e",
".git/objects/d5/865f195f4e93a48075ec5e6639dfa08bb32655": "f77bb992611873a3201c199e90183c57",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/5c/0f45cf38c5796581376b6be03b5fe9409d1903": "0be60df2d2a28ca7597cb7dad65ee970",
".git/objects/48/6fef272dbe85398cce44454a89f8d0471aff46": "78b4e310d9ade60f9624a26563855577",
".git/objects/51/1e54f901c06a8827888a2bcd89227c483a9ae5": "c0bc663fa9ab39a3e5502362ff44c582",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/5f/2ae9dc70f24dce6292a7598cd3136b35c89547": "f0848b2d109ffedb329e21cac1d6503c",
".git/objects/b2/ece6f9e49586817383082181f5481b33b1290c": "b9510494ec75c46220e17391fc0e2a08",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/cb/22baeaa263fb3519ef60cf715b987dd98563f7": "7ea539638f9302517ca9f1e11c061398",
".git/objects/c9/a6c54bb47d2d4e32dc0694a4ed8defde40d8ba": "b17533b8ef7ab5d4dd498a3bbf106910",
".git/objects/f1/fd6b3e7b2cc65f62c0cd61bf6b6608a65fa933": "f7f597cfd7dda62e0df254f27fb7518e",
".git/objects/92/21e10cdcade52856dc8407510b30450201378a": "72ee343e9b63ed67e244d99903df49c6",
".git/objects/92/70ce0aaf9a0056d412528d751db2277278dd46": "8e09160ef1f93ca4349c795036091e2d",
".git/objects/1e/c5cbd4c65252af16f18d39b00dfecb1d4114fd": "ca46a5e561f74d0e4696dc58faf4a384",
".git/objects/07/62e3209fc4bcb1432cea3c8ea543c01608a99d": "ede67a3f9622a8d7982e2149097daf08",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/dd/4b446a4944d15f2a22b055cf3df9a08089d8ac": "cad6b538a560989464b4d79b1c81ff80",
".git/objects/2c/e88bb0dc41ab4d0591db0693a34068bdd00c9c": "709581b3f127a9cab702d28f5607454a",
".git/objects/2c/b525bcabae06fa00e1b613f94c5e76451234de": "4f6167a4c89fd924fa909880ac9dd589",
".git/objects/fa/a2c0ec2d4b75b76956300b63fd7512057b4dbd": "a02d4ce463b35cfd958aa44fd2e3a390",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/7d/b4af7abd4bcb976aa60b5d53f176e7b34874e9": "66e05e95f9d93deffff79ccdfd64709e",
".git/objects/fb/dd6c813e11eb44882312274a3aee4bebe01331": "45a7c07c92da56fc0e0c119774e51cc6",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b3/c77026d482043bfc8e601fce86e8cd698c1c35": "2743aa821f7f61fac144527fc508e499",
".git/objects/a3/341eebac576f1b12e98aa87119aceb140a5d05": "87957a658039f7879fdf253956c6db34",
".git/objects/87/8dbfdb459165bd6deb483307d54a4a90ab417c": "3ea183080333f3d84895084dd9d32517",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/1c/38528946f1615bfb884d310e935236f8affff0": "07e51b1e4e281ab3c266ff0e73c5281c",
".git/objects/81/0c7ef1f756a62a447ec2ffb5a6f3c34b422612": "f0805e1fee26e2ed3c0ec48ab10f0241",
".git/objects/4a/0d8649b3d7a33178c7cb5b77322b624678303c": "ec4cad7dd63d9742dc8334669e138d43",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/42/d0c9727a5cc0019274548c7e28a15f920e0daf": "55d5c43782d63f0c642c0f4d158973cb",
".git/objects/8e/7f9130df79c7700ef6479ce4208a58d75da945": "38441edd151b09fb07194ed84f45b74b",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/15/204c358cf338569c7162ee2ebb82245a62beaa": "545ef4e79edcb4249db60cb88f32330a",
".git/objects/36/d4607fc44f69ae2f200b8ab7ded22ef603f26a": "8cea982801f61ef5455b5d60e8095226",
".git/objects/5a/c226e82483c0108ee33e33dae16d402cbaa439": "f41169ff3a8a65a3ba7ce6e15790eb8b",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/65/f550e7d7e34f5d9df7b268838256187e2fe6d9": "83d1925e062528fd70d5727da7021214",
".git/objects/65/ce711dc48298a30d7bc7da97d9ebc4aa8ffc92": "8564276eed9e64e02fce68621f7ac67a",
".git/objects/65/0f7a64a15ea9e3b62c6c309b425d591281cdd3": "adde9535607e4b00ed8d14a4d605c8d2",
".git/objects/0a/5d5fe830bc2604bf1d8f31ec1a52a5839517f2": "2d98040ff5f2368255d87dd25a859f68",
".git/objects/bb/5db311017b33d25136ca1baeee8cabe3f7a0d3": "97aaa3f5bd002c385f88a98e61eb7152",
".git/objects/bc/41b7ac1a48ae9baf761360e31c2f404a501291": "02d3d4edd92cdacc13fec28be3b50215",
".git/objects/18/81c19a24ac95af91abded02e8e470b81415cb9": "c7ac117357e623c7abd81bede2138291",
".git/objects/0f/1979596b903653e065b971270459ab2c5d73b0": "5e021e0b3c2ea40b428d65df6aa85ddf",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/a6/e1963958e7fd98f63e39e6ad7b8bb41f399f74": "5590bd7abfd2b9f3add9937a763389ec",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/58/11b9326706092b5892bd3ae66f026dcbcaf342": "ae877d8167c4abcef2c5b8dda353e22d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a421c8a5387655d198335936a5e3b7cca8ffba": "7462820b4c7b2799eab2d70ea3dd0aab",
".git/objects/49/a777092662cec6901e9abd45795cb7b723b11a": "124c2e2426dee9c55fe0e9dd3f344afd",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/9c/f78b0f3e07b61fec33e7d3c33f8212aea00e98": "98d2bc59e9f515ae5d8d338a808c576c",
".git/objects/2f/41303e1a2d11c7efbd561a2180698b8656be76": "4fa431e00fce9b63e32916626d1ebe77",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/03/e300719f588b9a83cbae43fa135768ef7d7250": "914a8830d23e54995778c3b25298360a",
".git/objects/17/8dce524e7cc3a055cd875aa8834e308495c55f": "72d219ef1471c3cfe995b1351c511295",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/59/e08605a34cd7d64e3d4da45927cdb8685930d4": "7d84506f1a39fe13b2b31a215dba102e",
".git/objects/fc/1802e23d62f35e889cbe232fd01f7513461a96": "8d1af72664488b7ea07ef60277fd5293",
".git/objects/01/3363a985118e4f6e7a7c8052bfa2ff6189aafc": "e4cdddac417bd733c62e477fab8a8252",
".git/objects/01/4b76108d1e0053169e5c0e25a204e29e690130": "3cfd94e62665dba484b51fa9a5b71f1e",
".git/objects/79/90102ad3a1c95ecb75965681cda461da8e3770": "c9965809d8e4ecb49c20e9c5b77dd32a",
".git/objects/f3/bcb3193dc1a69c0195dfeb6597f19264e68341": "2c4dd286ef3911239b8554d25116765a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/b40422170586fe84460c9dbd8a7e1bb2fbcdbd": "6fb3ddc8813c2a3b8d5d27fd7b79aa25",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/52e3862bd60b1e9019b35a2b639b76840d336d": "f3b751cf1975459bed04a6d9bb242275",
".git/objects/91/5a8747b3de8bb8ae060c1e3a1e7dda84da48ea": "3455904339f635d158ce44a0c3b5f4d6",
".git/objects/91/facec9020d1a5a306e9319db3635cf13e90b53": "88888256da3601b211736097ac1e53c3",
".git/objects/cc/916506b4ca6b4c1c2e3e32d0be93e2374f4eb5": "ed3f4952db9e5bef38b5ed50b0208b7a",
".git/objects/ad/8fd6cd65d48daa0aa5d9c5950f545ce007a2bf": "767f637e2d21760e532f4775a767683b",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/refs/remotes/origin/main": "8534d4283d80d1bf34347b624be71b46",
".git/refs/heads/main": "8534d4283d80d1bf34347b624be71b46",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "0beb0911c49063c70710c3c1363ccf48",
".git/config": "2dd0f073fd85f2b49a197e2f55dab242",
".git/index": "73fb205304673687c1aea2f02164b288",
".git/logs/HEAD": "3f93ee2363c64190e624a2d97df8d97b",
".git/logs/refs/remotes/origin/main": "66aecadbe2eb1f558d6b37fdb44eb8b0",
".git/logs/refs/heads/main": "b0a38cbde6eacc463f52d89a70735f61",
"main.dart.js": "a0990e66e4fbf49311ba9294c2151c1f",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.bin.json": "7bcc92f72bedb43c879329741260e9a4",
"assets/fonts/MaterialIcons-Regular.otf": "d9b3c449ccf5c0081da00cf0e8d853af",
"assets/AssetManifest.bin": "d9d6afb84775e0dbf1d433b6a7839788",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "8539aef9e49060c3744b203446dbdcd2",
"assets/AssetManifest.json": "1e092fd610f8b730c7b68a547569a643",
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
"assets/assets/projects/booking.png": "93fa3651c26c955ca25ab86798b1b8d5",
"assets/assets/projects/05.png": "e2cc840dbaaf91e6acba1d9d44ae502f",
"assets/assets/projects/todowin.png": "630ca84bad3626fb14adfd7421f49d85",
"assets/assets/projects/w03.jpeg": "81f24b685fd3f214e409fd29217c1235",
"assets/assets/projects/04.png": "8e2a233d5e7b9930407e3cccf54b6799",
"assets/assets/projects/mj_bot.png": "8fbb98d09bf7ba37f1718f5069e022c5",
"assets/assets/projects/FoodProject.png": "5aa97c600b81c929ac1cf7ba2733cda1",
"assets/assets/projects/06.png": "11a36375edc4b5ba6956bdeed286f733",
"assets/assets/projects/crash.png": "7ba21b80492ed962bf884284134292ee",
"assets/assets/projects/helthhub.png": "a97f9835173e48585f43d3ac69ae225a",
"assets/assets/projects/02.png": "cf8468132005ef5442c5857705e39c40",
"assets/assets/projects/pomodoro.png": "b0b313daeaaa4b9048e8c359703fe4d6",
"assets/assets/projects/movie.png": "8d15ef17da9c9990a9d5d0a7cbf04472",
"assets/assets/projects/qr_code.png": "cf71a7074ef7f1fa5a3cbd30d37474d9",
"assets/assets/projects/w02.png": "f3168876c62cbf02cb9ff94640383f96",
"assets/assets/projects/w01.png": "b1256ae160f9170ab36ce78ee7a4dc2d",
"assets/assets/projects/03.png": "9dd85f5710c01486dc5937733a22d9eb",
"assets/assets/django.png": "8ff133f8e4c3a93e23eec540a6f5568a",
"assets/assets/python.png": "e04382338533c6bb0dcfc7a48bf86502",
"assets/assets/flutter.png": "abe34b0551ded954f6759cada7807e3e",
"assets/assets/desktop_icon.png": "e0e90a080a776fd1da23f5a249b5ce3c",
"assets/assets/csharp.png": "e77e8ad819dc0a8b73b69635c2c74237",
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
