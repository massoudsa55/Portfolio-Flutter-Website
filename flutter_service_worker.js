'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bc77a5130e3dbdf9257736cc8cbe6bad",
".git/config": "af6f48caa77697b687a791557007ae50",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "696d34e15bbc261aad2d1100d422b32c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d610a323bd9db8c61db760fb088f5c51",
".git/logs/refs/heads/main": "d610a323bd9db8c61db760fb088f5c51",
".git/objects/08/539bea0cc854724ec9d2629e25e4dd1fd6bb54": "eee5c82a95d80b0119173580271462c2",
".git/objects/18/a3cf8bb1fab58641a8670a134fc06fd5f90734": "f080a29b93efcdeaff2613c36a220b36",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "2d24e3b2aca96b7451c14212b5b9d144",
".git/objects/1e/4726efa3be449ab73756734c594417804d0e7a": "622889240382bdbf631e5a2a8cddc7ca",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "a9ab9100c0ba160f87080e08335cdeff",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "fe2d8e778b22f092b9152a9ff9b15c75",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "27ccec63cb61a6d305d64f14d2274433",
".git/objects/2e/fe7ceb878025395ddc54c5a7059b5c2c08e48d": "b3f78fa1c64675862cbef005e2109314",
".git/objects/32/5d4770bfcc288f992f8254e654684b334166f8": "131388da0e01803fb6a55d6e783e5599",
".git/objects/36/6bb90c027916c179fed6fb41dabc7f032281c7": "5c5afb08394f7e1ffffa87c76c712125",
".git/objects/36/f889e77685f644769a387a795c26ebf14142ec": "f8937b970df36fd4a14c93b4a9df1698",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "b30319238dd94c52293935e05a5d5325",
".git/objects/45/fb27ac6eb557abd228e4ab99adb79efadec904": "d2ad453a389ddbde56745be812cd0ebf",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "fd741713fcc1f7d3800f12654ff3bb7d",
".git/objects/4a/997cc8f3c6cca06b09ffb828932dc06b353e4e": "19da7d9684c2b9ef1742d8cb3bf6ce71",
".git/objects/5b/608023f031abe28426125be9936cca5bf1c493": "b46341d82119cd60306240755c082300",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "401366db77cbc72559cc0d354d106c71",
".git/objects/67/0a4d04663b7c5ccea0d072d6b3709fd92547b8": "542d80bf9a26aecceef2bd31ef5e38ca",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "f3690710ba86d30bd1c348cd72b06f96",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "5a97e1409617516f21f4a27552287f75",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "7def488d5a8181e9ef810563a24a28f0",
".git/objects/7d/b718b617a3ffa2cd3c83a451c40459acd86aa7": "1eafd2f410a5c3f2c0d46701e1cee403",
".git/objects/84/35e7f17a826212bdac72ff2a24ccb9382a0595": "a9388d17fafdd4741682d05044ff65ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/3de441a0e4553b263ce64bded66ba1178da59a": "66cb9859d47ea58616c8d75104ebc9b9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/92/2000ad8d5c98639037f9ceb868b41bb711ef17": "4a1de5dad3335883339a56ce98a35242",
".git/objects/97/00f02c17ccb20f29b2020ca2fe993d98a87c36": "ef6c0bdef315a677eae2cb35f327ddb3",
".git/objects/97/20be20fd8a303a1a5361299bd40aa24f36bcea": "abb2c805c718168ad823e75f38d358a3",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "6b6eb8c09fb911d71443bbea51e3196e",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "77ee28a6eb6349babc72e6d70565cdf8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/a2/82487f4d4a1ad41962c6fd64853c37a2b4bc7d": "1261b66cd66ef6e10a28bafa2d058105",
".git/objects/a4/eb82530d55a5ac6d0e4fbc8133bcaa86c99699": "c390a6ce5c9203f1f2b183e3a98bd21d",
".git/objects/ac/7258ea8bf6cdbded6c657a4fd516f385390ef6": "a571229181069f6f7b5f7d88bf9643b0",
".git/objects/b6/757fe7594b08cce6e22fc9bec093c49c70ba73": "635a2a804ffe4a2237f9f3e5b03b8714",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b8/472847d9b431aa98660d56f935544d9fc37911": "7cc7e43d09c1830419b1653e0dbb65d6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "9583d62b71e3cdf7f03042a2461a603b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "f7a47fae7dcec9d444a58ad4813b3fc0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "35a0a9cd1e8a47b15c7c24b47370679e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "6d6f532e28da652c0cef326ce98de4a1",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "c3ca0ff3ede231955797b1571e9fae0f",
".git/objects/e3/d3fa6ce969953e3c31f46f7be7f852e1048949": "cb22bfbb4c95aee95078df2f387f5177",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/ea/a945c211badc9472f89b45c9ef3fa93f2921c0": "bee12b38cac888c960e644fc991611e5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "06a5361b7cf49cd479b9062c91dd59fe",
".git/objects/fe/22118c05f9584b108df9111135e6371670f77d": "1869f266a94e8f7af72b29cb5c09c4ed",
".git/refs/heads/main": "dcbf4be12b4a93e31a6ed6516b18ef9e",
"assets/AssetManifest.json": "18745c2c54cb125e75f0e79a79397853",
"assets/assets/images/logo.png": "6a6211ce35127af5caccd30a38b11df2",
"assets/assets/images/person.png": "af4fe8b6ca64a6b3a52d41a8f545a938",
"assets/assets/images/person1.png": "a23fbde03f4880f46dd587667479d39e",
"assets/assets/images/points.png": "cd6da478faa7ce37b87eecd6b3792999",
"assets/assets/images/preview.png": "c8593212955b958c1692545bb04b6757",
"assets/assets/images/tutorial.jpg": "799ee8101c5c8dc02c5de3372e4e0453",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b5f0efc7f616b1b12733574d110209cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "08ca1e8def6087cd147c74dcf9abec36",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c8349a0085d60cc5ecddb7887d06637",
"/": "5c8349a0085d60cc5ecddb7887d06637",
"main.dart.js": "13f0ab9eaeaa0df31a4727eb158b75a5",
"manifest.json": "8bc39948c1595765fc6f69f395993155",
"version.json": "3fe4fd5df2020acccdd334a29a3cc4f4"
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
