'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "33d671f591eb461a2ef0debad3c32e35",
"/": "33d671f591eb461a2ef0debad3c32e35",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"version.json": "0cfd0a6d9b4e5cbff4a4c7c01ce54c3f",
"manifest.json": "93d920dd6a32a4f561b5bd594f73a50a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.ico": "81fb04905c0f103defc0a79e71f55be3",
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
".git/objects/33/5d80366e86dc53055b826b02a8ec73b478e3ba": "36ab5ada14cef6821d44f1d56c63ad7f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/d8/07cd603f7ca27b8e3e4c148bf226e4bddb61d1": "fd8425a55d37d93e52fe2214d5ae058e",
".git/objects/d5/865f195f4e93a48075ec5e6639dfa08bb32655": "f77bb992611873a3201c199e90183c57",
".git/objects/e9/d9d9be5756dd27035b4bc32be59d79c1a30f05": "d7adb3bab0529124fef319ddd039ad97",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/25/4c80c2c4937e44b27d46928a3b745b50d176d9": "9895f2b24fa3fd599a3b66f2712a5d98",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/9b/5ff463b27dcfd772aa0ff4f7e64202da78ba38": "5bd238cea28d4ca4b6c24a06bd79b7e4",
".git/objects/3d/196877f4650d4247695fba9fb872d2d6b57fdb": "9eba1928440bc86ab1b2e6d59d6b390a",
".git/objects/f0/05d08dee0792b3f11ab760d28a584c783a44d6": "8dd85507ccc0f8a167d49acc6123c362",
".git/objects/5c/0f45cf38c5796581376b6be03b5fe9409d1903": "0be60df2d2a28ca7597cb7dad65ee970",
".git/objects/66/0b1f1babc4a9d9aead5d3d4f3fd90f39a06087": "9d553dd9e9205e4eb612b68fbafeb3a3",
".git/objects/48/6fef272dbe85398cce44454a89f8d0471aff46": "78b4e310d9ade60f9624a26563855577",
".git/objects/51/1e54f901c06a8827888a2bcd89227c483a9ae5": "c0bc663fa9ab39a3e5502362ff44c582",
".git/objects/8a/37beb2c29940dacf513e08c4c517f5e528d546": "a0806dffc5ef761d5d5999df768d4856",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/3bee694699c6d1c0ac9345a1e740b5d34a425a": "34df20a5c5b983b488ec2a7b22903ddb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4908ddbe5ae6e3af0d05bcfef178a682b2d7ae": "fd6d97c1573c9f551133ae5e53492a82",
".git/objects/ed/3f13ea9efaf52321437ed48bd853a020e447a7": "ac4f2b2cca35439acc93b7e71256f90e",
".git/objects/5f/2ae9dc70f24dce6292a7598cd3136b35c89547": "f0848b2d109ffedb329e21cac1d6503c",
".git/objects/5f/47cd1740741dc43c13e13fd83ac5be538bc842": "1789efe2eda90739701f5c35476c5fbe",
".git/objects/b2/ece6f9e49586817383082181f5481b33b1290c": "b9510494ec75c46220e17391fc0e2a08",
".git/objects/20/1d80e8b51b33d13bf582d3fc8b1f1f6ef8ad42": "f5958ea13a94d7304a6da7fd8e5556f4",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/cb/22baeaa263fb3519ef60cf715b987dd98563f7": "7ea539638f9302517ca9f1e11c061398",
".git/objects/c9/a6c54bb47d2d4e32dc0694a4ed8defde40d8ba": "b17533b8ef7ab5d4dd498a3bbf106910",
".git/objects/f1/29f5539f1a4de8e5bd5a48ed522c8f0c071db0": "b764d00dfc4e820d1fb07ae76592b7ce",
".git/objects/f1/fd6b3e7b2cc65f62c0cd61bf6b6608a65fa933": "f7f597cfd7dda62e0df254f27fb7518e",
".git/objects/38/9aaf11faccf1419f543ca8dfcd8ecf7a9b19db": "34859612da9c22a5276fbda856e18341",
".git/objects/05/3ffb866438ecf5575add34c453d4342913734b": "94a961edfb21b21e9aa1e0795d60d5ed",
".git/objects/92/21e10cdcade52856dc8407510b30450201378a": "72ee343e9b63ed67e244d99903df49c6",
".git/objects/92/70ce0aaf9a0056d412528d751db2277278dd46": "8e09160ef1f93ca4349c795036091e2d",
".git/objects/70/1e54eb57489d264286bfe9e011a508b06e067d": "c291cf4e653d64e4a1f95fb33471deca",
".git/objects/1e/c5cbd4c65252af16f18d39b00dfecb1d4114fd": "ca46a5e561f74d0e4696dc58faf4a384",
".git/objects/07/62e3209fc4bcb1432cea3c8ea543c01608a99d": "ede67a3f9622a8d7982e2149097daf08",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/dd/4b446a4944d15f2a22b055cf3df9a08089d8ac": "cad6b538a560989464b4d79b1c81ff80",
".git/objects/35/e22a22f25326c6b1770c13c802d3e5cce1f3af": "1a54b17820a6b5f72b162e7ef6887bad",
".git/objects/2c/e88bb0dc41ab4d0591db0693a34068bdd00c9c": "709581b3f127a9cab702d28f5607454a",
".git/objects/2c/b525bcabae06fa00e1b613f94c5e76451234de": "4f6167a4c89fd924fa909880ac9dd589",
".git/objects/2c/06d2b970a054f91e1ec65b73a1793e8877a90b": "4491c1bedb322016ae85971565f27140",
".git/objects/2c/d5db4a01df01f10732a39b4256cd70e93ebafa": "457a93e4a38075420699b83d62c2088f",
".git/objects/fa/03ea49d5e1a8bb7b13b4d23841c2f60450119c": "a6e311978c7ecf161b716809bfaeade2",
".git/objects/fa/a2c0ec2d4b75b76956300b63fd7512057b4dbd": "a02d4ce463b35cfd958aa44fd2e3a390",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/be/76f95db2f93f71f074ca40bae37c5dca757d68": "2cc094929999d08c02f8a30f21bb4d7c",
".git/objects/be/bbf9b096281c66cac539d0985c24a61492d915": "52a10468f80822e63d08bcd5e36bcd46",
".git/objects/7d/b4af7abd4bcb976aa60b5d53f176e7b34874e9": "66e05e95f9d93deffff79ccdfd64709e",
".git/objects/fb/dd6c813e11eb44882312274a3aee4bebe01331": "45a7c07c92da56fc0e0c119774e51cc6",
".git/objects/aa/c840b4e957b5f1b644c10e12ee7d5ee917ae06": "5a04ccaf76f5b65ffaa826ab3bc04283",
".git/objects/ba/6bb78817d487683e3544e77caebbb5ed230e66": "c7e0c8abfbcabce039f62df6a3efd820",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b3/523423ce8a6160ef6fdd32bb6a198db85acd0a": "1af0c55da2c485d9e3286a051a2a49f7",
".git/objects/b3/c77026d482043bfc8e601fce86e8cd698c1c35": "2743aa821f7f61fac144527fc508e499",
".git/objects/a3/341eebac576f1b12e98aa87119aceb140a5d05": "87957a658039f7879fdf253956c6db34",
".git/objects/a3/a8187ff0a47928df5bf24ec1f1af5a698f47dc": "ce6eac26799a76aec9212a5393231290",
".git/objects/87/8dbfdb459165bd6deb483307d54a4a90ab417c": "3ea183080333f3d84895084dd9d32517",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/1c/222e3a0103a46718c911b87365ad0b2a156241": "7867aebbb054f65a0247ac659b6aae3e",
".git/objects/1c/38528946f1615bfb884d310e935236f8affff0": "07e51b1e4e281ab3c266ff0e73c5281c",
".git/objects/e4/2e2283fa3b763e210be3a21885388f58e073d3": "155a859b4502d2ba2daf0148048b871d",
".git/objects/81/0c7ef1f756a62a447ec2ffb5a6f3c34b422612": "f0805e1fee26e2ed3c0ec48ab10f0241",
".git/objects/4a/0d8649b3d7a33178c7cb5b77322b624678303c": "ec4cad7dd63d9742dc8334669e138d43",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/9d/65142afaf2818e27e108979032624058e2df03": "b2ee36693e02c76110af9b19ff77f04a",
".git/objects/9d/24d773bf60732550440791f54739f835e2235c": "8cb2c911d150f04228009f3a51e581ee",
".git/objects/02/f83f14b664eda89836252ba49b3aece79650d4": "ad5c786811c263d07ee8aabcc1fa23e1",
".git/objects/42/af078f1fbf012041331c06fc82f2dd86d86cbb": "6362d56021a4fe25a636d81a45aa42d8",
".git/objects/42/d0c9727a5cc0019274548c7e28a15f920e0daf": "55d5c43782d63f0c642c0f4d158973cb",
".git/objects/8e/7f9130df79c7700ef6479ce4208a58d75da945": "38441edd151b09fb07194ed84f45b74b",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/15/204c358cf338569c7162ee2ebb82245a62beaa": "545ef4e79edcb4249db60cb88f32330a",
".git/objects/73/d4f34f2e0475fe4843280a3756bce0ddbffb79": "cf04109d0a94b6cf0bbd6335d39e677a",
".git/objects/36/d4607fc44f69ae2f200b8ab7ded22ef603f26a": "8cea982801f61ef5455b5d60e8095226",
".git/objects/36/95e4a6ff7b9dbffae108eba1c1e9e870e12ff5": "a5024acbd30bd07a7a11cf122756f6e2",
".git/objects/5a/c226e82483c0108ee33e33dae16d402cbaa439": "f41169ff3a8a65a3ba7ce6e15790eb8b",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/65/f550e7d7e34f5d9df7b268838256187e2fe6d9": "83d1925e062528fd70d5727da7021214",
".git/objects/65/ce711dc48298a30d7bc7da97d9ebc4aa8ffc92": "8564276eed9e64e02fce68621f7ac67a",
".git/objects/65/0f7a64a15ea9e3b62c6c309b425d591281cdd3": "adde9535607e4b00ed8d14a4d605c8d2",
".git/objects/0a/5d5fe830bc2604bf1d8f31ec1a52a5839517f2": "2d98040ff5f2368255d87dd25a859f68",
".git/objects/69/6df777321ad4167ecf082c4fbe6f2273714a00": "26c6694d317cba6bbc6d4a12610bebc1",
".git/objects/bb/890e4b233aa95ed5211c607e0853af9d02f2cd": "ce052ccb394556cd183ec5978e294d4d",
".git/objects/bb/5db311017b33d25136ca1baeee8cabe3f7a0d3": "97aaa3f5bd002c385f88a98e61eb7152",
".git/objects/bc/41b7ac1a48ae9baf761360e31c2f404a501291": "02d3d4edd92cdacc13fec28be3b50215",
".git/objects/18/81c19a24ac95af91abded02e8e470b81415cb9": "c7ac117357e623c7abd81bede2138291",
".git/objects/0f/1979596b903653e065b971270459ab2c5d73b0": "5e021e0b3c2ea40b428d65df6aa85ddf",
".git/objects/d1/6019bc6395769414acb789a6385f0233654980": "1ad3dc2c6f84c401886e96d93e56a95a",
".git/objects/3a/edee769428180b0783d0dce9330a03254d6bd0": "1845062d928306c0762d939914885472",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/a6/e1963958e7fd98f63e39e6ad7b8bb41f399f74": "5590bd7abfd2b9f3add9937a763389ec",
".git/objects/d3/5f71d7c12929d0b294e3a8f11403650e0118c2": "1f8ee48cd381e7615df3e5ea48dbbfba",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/f8/c22ef580e08a46c3b9035e55a843521584ce6d": "a3085286ae2681043e4a7f321439f5e1",
".git/objects/40/7f8f5dc7a886727762cf1edd1765eb7836f579": "9d5979a8971e1549f532ccb51615fb9e",
".git/objects/16/172b4f2bd83bd14c552252d609147c80eae82b": "1793017d05b4d2bb176b158e189d9dc6",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/8d/dd11315ceb330cd5f0fadc5a2552bfee8c91e5": "3f2a952c611d36a59c6ca7d40374bfbb",
".git/objects/a2/0d7e345443182e507765bde37e63913086dfba": "22c1ce6a3d14fd623f6a5e04464c181f",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/93/e4783cc9413ff81694dc6a976cee5528471fdb": "9a1dfdd114683f79ac40ecc2838bdb0b",
".git/objects/58/11b9326706092b5892bd3ae66f026dcbcaf342": "ae877d8167c4abcef2c5b8dda353e22d",
".git/objects/43/f29bca18fd066906fd47d8e477b18856bbf318": "b8d54a8f0bd39b24e64d384a347f0bde",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a421c8a5387655d198335936a5e3b7cca8ffba": "7462820b4c7b2799eab2d70ea3dd0aab",
".git/objects/74/1b367d6ebecade3b13ba8b4389071f6075078b": "9d32bed086323e5c9213352addf3b9e2",
".git/objects/49/a777092662cec6901e9abd45795cb7b723b11a": "124c2e2426dee9c55fe0e9dd3f344afd",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/60/6ef3225a38407f46ebc9944939661a5b7c2b76": "9d7deab68799129389d0ee8c2e7f374e",
".git/objects/60/152e8040437f9140058a44a7256249fdd8f013": "11b99142d3da6535e9dec3ce27754aae",
".git/objects/68/52acc95f094c4a455ec0247739fa5cc136050f": "7ddc6eb0e97f9435d4c59a5aff22faaa",
".git/objects/9c/d6eb7189f9f83390c51662e3d68b07b2dd6f0f": "c326fbd6c563f7b96ce7b35d45d2dbde",
".git/objects/9c/f78b0f3e07b61fec33e7d3c33f8212aea00e98": "98d2bc59e9f515ae5d8d338a808c576c",
".git/objects/2f/41303e1a2d11c7efbd561a2180698b8656be76": "4fa431e00fce9b63e32916626d1ebe77",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/50/058de0c81a1f5389d02e9bcbb0f3b5979307ea": "c4bea326e43622619ee0f524de3efab4",
".git/objects/50/d315294c2cb4688ec71d9abdd555a2711daddb": "add63369889ff55e43ba527014ea489e",
".git/objects/03/e300719f588b9a83cbae43fa135768ef7d7250": "914a8830d23e54995778c3b25298360a",
".git/objects/c0/f0e965f83190f4bd687083dd9c56ef1d5fe609": "d346ff9926f58a5ace9e1c831591b5c6",
".git/objects/e6/c5b19578eb97be45e1d988efe6a3a84aea1628": "e3043bab27b144dadb2995961f8778f8",
".git/objects/e6/29f483ffe167a96dda4e5e83617d08cd8bd083": "0a424a543c2420d9accece81b94bd303",
".git/objects/17/8dce524e7cc3a055cd875aa8834e308495c55f": "72d219ef1471c3cfe995b1351c511295",
".git/objects/dc/32a3b6aa5bbbf11832a2cf2ff4886b6e762481": "8b70084d7bee755328f105d065ce8c5b",
".git/objects/d2/9f609c62bd2fd6058bd75e1f3223cbacc31e8f": "4978aedf74ee6b5266318cc383df2f71",
".git/objects/7b/1f2ce1ab1e04474d5484b906bc647d50bc0d81": "ba30886e538aa4590090bc841289fd37",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/59/50eeabe3a61ca93059589f5433282b592e3941": "d19b407d1f64b62959bfb0256022a216",
".git/objects/59/e08605a34cd7d64e3d4da45927cdb8685930d4": "7d84506f1a39fe13b2b31a215dba102e",
".git/objects/59/dbc00bc7eb53459aaaf702d12d555e7b25fe71": "c690f9ce3d27f24be789ea62d9602492",
".git/objects/fc/1802e23d62f35e889cbe232fd01f7513461a96": "8d1af72664488b7ea07ef60277fd5293",
".git/objects/01/dd0e107724f5f2ec5b983c47d627f074cf4457": "86efdde3b57af33048bb77d677065be7",
".git/objects/01/3363a985118e4f6e7a7c8052bfa2ff6189aafc": "e4cdddac417bd733c62e477fab8a8252",
".git/objects/01/4b76108d1e0053169e5c0e25a204e29e690130": "3cfd94e62665dba484b51fa9a5b71f1e",
".git/objects/01/84cb1f6e83c20aec93b35a2b31719a6fb38cc8": "f362e966992911e020f48e97ebd2ceba",
".git/objects/76/532839257a91799d7ea78d71228c29c1c58742": "42b6d8cef3d906654a8361e07d523a2a",
".git/objects/79/90102ad3a1c95ecb75965681cda461da8e3770": "c9965809d8e4ecb49c20e9c5b77dd32a",
".git/objects/67/a430921b8257f537411cfbfe7948ed8725bd44": "9707af37159ddf3f4a86e14d1a40bfd5",
".git/objects/f3/bcb3193dc1a69c0195dfeb6597f19264e68341": "2c4dd286ef3911239b8554d25116765a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/45/74397c667392665be9d730adc91d95dfd1b6be": "26e68bf6e6bad5fcb7bfff48abc8641f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/1a/a1f7f1728536d7853a0e90a96b7903c16fea59": "df60b9088f5f4639597ee453a25bf310",
".git/objects/a0/b74e5e3af6f2f74cc694953a6e5300121ceec8": "ebf454cbdbc43c02dd880ef611cd2e2a",
".git/objects/7f/e2280a5c3885130b1f91cf2ecb49ce8fcfcf76": "d5ab569db7acc59a966f1895896a8557",
".git/objects/2a/70dc7cb7803069da477490f595e571033d4d8b": "33f1f9d273200e09a0012691f596cb63",
".git/objects/2a/b2993f2fa80331ab448a77286d14e483be0ab7": "0eaf96b4a7ff0e6843fa6c2573babb26",
".git/objects/ae/a1877dddcf2c71039d98cafc7c3e6deb696111": "9c8774e53026c4b83991d4c9d2e576c3",
".git/objects/ae/4c2bb5f6cbdcfb7d7c2f7db59f34b5f577561b": "1265a4a8db9b3b54da96b1b67bdd5919",
".git/objects/6b/ae2c4cbd2968fff4e004451afb7e9b570357fd": "341bcaba77ab02d4c60c4109ef1860ca",
".git/objects/6b/b40422170586fe84460c9dbd8a7e1bb2fbcdbd": "6fb3ddc8813c2a3b8d5d27fd7b79aa25",
".git/objects/6b/6de2d5d2e1798a8404da90d9483d7491f12aab": "79be3b7719f7cf9028e36948b1f0e844",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/d5a813ea6bed58a2da75eff05881ab22b65ff9": "11160f1c61e8f115f0f3013ee38a6090",
".git/objects/c1/52e3862bd60b1e9019b35a2b639b76840d336d": "f3b751cf1975459bed04a6d9bb242275",
".git/objects/de/15e7b06cd250f1004efbf0f00c50c9c519375a": "c431532f24ca1bee7d27ea8274bef235",
".git/objects/91/5a8747b3de8bb8ae060c1e3a1e7dda84da48ea": "3455904339f635d158ce44a0c3b5f4d6",
".git/objects/91/facec9020d1a5a306e9319db3635cf13e90b53": "88888256da3601b211736097ac1e53c3",
".git/objects/cc/8f3003ec22716be14fe845f5dac2bd9c91997b": "7d1d148e587db72bc9a584bdaa51bd46",
".git/objects/cc/c9b7c2b1a1d0c0968df95db5ff588cf8160471": "54b84b83ae996c8765d5a9f4d941f301",
".git/objects/cc/916506b4ca6b4c1c2e3e32d0be93e2374f4eb5": "ed3f4952db9e5bef38b5ed50b0208b7a",
".git/objects/ad/57572e5d6369a130cf0ed133591d60e2436931": "290d21b20c973bbd6ee26c12058cbaa8",
".git/objects/ad/8fd6cd65d48daa0aa5d9c5950f545ce007a2bf": "767f637e2d21760e532f4775a767683b",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/f884e339436943e4af99b018fcf7833489ef94": "fa69dde38d71f5ad078d76de0e41ab2f",
".git/objects/6f/bb9a1e974d56ec5a91f23a06ec54f0d4b9a9c3": "e0834c11bf2cd8941a7f459c0b21bf76",
".git/refs/remotes/origin/main": "0d7067689f49304cbc66aa7962b7a507",
".git/refs/heads/main": "0d7067689f49304cbc66aa7962b7a507",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "3e8deb514b42cd27d9fb452376fcccc3",
".git/config": "2dd0f073fd85f2b49a197e2f55dab242",
".git/index": "2a38abc917c3f38bc6e0f79c282bbbd0",
".git/logs/HEAD": "8f507a2c66e7968a350382cc94503d8d",
".git/logs/refs/remotes/origin/main": "8304521793f7a31a96a150a0ae965d7a",
".git/logs/refs/heads/main": "8fbde42b3d62594c8ba433e187267d10",
"main.dart.js": "71bab18a02fa1131401b623a4b3509fd",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.bin.json": "d3656a93bebc3f7e3d832354c008a425",
"assets/fonts/MaterialIcons-Regular.otf": "951430dc5fe68cc9180e1969d9fe8aaa",
"assets/AssetManifest.bin": "7d3a4df5fb9e4b66f4c1d7b317b8b21f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "76b350fb91c97d44fc853d88f6823ec3",
"assets/AssetManifest.json": "c6a1eb3ff93541d12a57211f6320bf07",
"assets/assets/profile.png": "d1d6a04d97fbcd5194e73a2ce120be80",
"assets/assets/ios_icon.png": "4b8039e8a442657c7b9b379322eb2793",
"assets/assets/github.png": "7aed3646cbea181a3da85620809e992c",
"assets/assets/linkedin.png": "e4d142586676a80b3927d899d3584148",
"assets/assets/dart.png": "1a089616e2be1ac7c5188c00225772c8",
"assets/assets/spring.png": "a01c71cb3222b82eb8586a1bac3e573f",
"assets/assets/my_flutter_avatar.png": "54fcaae3132b5872394da1f63fff9e95",
"assets/assets/automation.png": "5352109a16e96170e5cc9041175c574e",
"assets/assets/react.png": "2198f884fddf4629ab3df281ae2c77c6",
"assets/assets/hugo.png": "6c341d7823570ab705c940f1dea993ef",
"assets/assets/telegram.png": "d940cd7b5e7b66510b59785177c6414f",
"assets/assets/html5.png": "9d5b22bfe74ac513d5cd33563908ae71",
"assets/assets/automation.gif": "c67dc4c295c416b7b558830a741f9ef6",
"assets/assets/instagram.png": "02c7721e097a6bb001d00fa61750bc81",
"assets/assets/web_icon.png": "8867144689b70d099377ee3c4ab1baa0",
"assets/assets/css3.png": "b1bd0673d70ccee89e1457bd71554759",
"assets/assets/projects/1.png": "1f59be4af5fe374b4e3f5f6afdb3a24c",
"assets/assets/projects/booking.png": "93fa3651c26c955ca25ab86798b1b8d5",
"assets/assets/projects/05.png": "e2cc840dbaaf91e6acba1d9d44ae502f",
"assets/assets/projects/todowin.png": "630ca84bad3626fb14adfd7421f49d85",
"assets/assets/projects/w03.jpeg": "81f24b685fd3f214e409fd29217c1235",
"assets/assets/projects/04.png": "8e2a233d5e7b9930407e3cccf54b6799",
"assets/assets/projects/chat_gemini_portfolio.png": "8046e88f74701ad71fdb963370e00ca4",
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
"assets/assets/mobile_dev.png": "5c47f37584730e7634c4f6f4d2870289",
"assets/assets/bootstrap.png": "82a14296ac246d321f8388884b6f5749",
"assets/assets/javascript.png": "ab8e2beca091db2345ff66a5cc432985",
"assets/assets/facebook.png": "fa74fe1619d75d68df1f0db7c654e39a",
"assets/assets/docker.png": "722cafb6c71b44bba6292a603b2e198c",
"assets/assets/android_icon.png": "038ea15b40a395099451862327ebcfc1",
"assets/assets/web_dev.png": "6cf7ec410432b858791dac0928b1d81f",
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
