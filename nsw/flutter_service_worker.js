'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1e035d6ed6389e5d2e69ee3f25e0caa1",
"assets/AssetManifest.bin.json": "a3e558c77d7c8ed0d1154f6db1789b48",
"assets/assets/authority.dll": "9ee1b3fc7351d756a113b7f947b3c278",
"assets/assets/SRNSW_example.xml": "8fa6a7a5777ad86a6fcf12ae89d8a494",
"assets/assets/stylesheets/edit_capitalize.xsl": "9af998e5038a5c6ede0b5c496543d701",
"assets/assets/stylesheets/edit_clearagency.xsl": "a1b3f59889acab286d35daf83b92fc61",
"assets/assets/stylesheets/edit_clearsrnsw.xsl": "9a38340fedb8964627aecbf3842bd581",
"assets/assets/stylesheets/edit_clear_comments.xsl": "e818aa372bc3386051c5a6b979fd1744",
"assets/assets/stylesheets/edit_numberitems.xsl": "947b7b3ada48890fc29afeb946587035",
"assets/assets/stylesheets/edit_numberitems_asa.xsl": "b7ed1983ea95a8e4cca9f93af83e288b",
"assets/assets/stylesheets/edit_sortseerefs.xsl": "55e35048c3776d4b313ebd6f31157d19",
"assets/assets/stylesheets/edit_sortterms.xsl": "77844502bf586b06f324a5c8d91f7dcb",
"assets/assets/stylesheets/edit_update.xsl": "def3c0b63213844fa16063d1dbde5175",
"assets/assets/stylesheets/export_clean_agency.xsl": "dfd7e12a1b7b780f1ed4db2860a75378",
"assets/assets/stylesheets/export_clean_publication.xsl": "3da2d51f1c837e86d21bb8c9cf8d938a",
"assets/assets/stylesheets/export_tsv.xsl": "d1eb71633ea672f93021b2d97f1a0509",
"assets/assets/stylesheets/include/add_authorised_disposal.xsl": "386d7811f95f8db948a501748b7343cd",
"assets/assets/stylesheets/include/disposal_common.xsl": "fc2d662076f67bd816bc0b5d21eff7a0",
"assets/assets/stylesheets/include/disposal_common_asa.xsl": "aacbbf735ced3980382f5b15c2e67a8d",
"assets/assets/stylesheets/include/disposal_html.xsl": "4c142ffbba55c751caf9feb3e6cf42f5",
"assets/assets/stylesheets/include/disposal_plone.xsl": "f94499c55e5e51d58a1ba9b58a55a7ce",
"assets/assets/stylesheets/include/disposal_srnsw_rda.xsl": "bd58437b805a9571f333abe01e86e7ab",
"assets/assets/stylesheets/include/disposal_txt.xsl": "e4c9b03eeb1bbc3c4c1297b016c8a9e0",
"assets/assets/stylesheets/include/disposal_word.xsl": "9f351731ee7353a428c43533a8810cce",
"assets/assets/stylesheets/include/disposal_word_asa.xsl": "586f8a2ae2977dbe1e2cd37d0cabc10c",
"assets/assets/stylesheets/include/html_header.xsl": "42c3a589e2b4410a01a23ce20f80837a",
"assets/assets/stylesheets/include/index.xsl": "5672ef8e707470cc13325de6f17b680f",
"assets/assets/stylesheets/include/linking_table.xsl": "181a759182a8636ae62f3fb94c97c1c6",
"assets/assets/stylesheets/include/preview_ar.xsl": "c1461856ce5a4a451ce6588302e2bb45",
"assets/assets/stylesheets/include/preview_authority.xsl": "79fc8b4297ef2e9c9fdfedec25562a65",
"assets/assets/stylesheets/include/render_html.xsl": "8d34aaec0a5d5126b2d8ad903547cb85",
"assets/assets/stylesheets/include/render_html_authority.xsl": "db041bc3d86032848ae402c02ce22c32",
"assets/assets/stylesheets/include/render_plone.xsl": "29a2a5ffd877a21a8901552f16a1ef08",
"assets/assets/stylesheets/include/render_txt.xsl": "7a75536aa8f65833bb5045ba6559d1fc",
"assets/assets/stylesheets/include/render_word.xsl": "0dee77d5160bba8ba21cb415540892b7",
"assets/assets/stylesheets/include/render_word_asa.xsl": "9516ff4cb6f70a436ef1307029638a84",
"assets/assets/stylesheets/include/render_word_authority.xsl": "688f9b092b8b1a3fa455601bafb47267",
"assets/assets/stylesheets/include/render_word_authority_asa.xsl": "5fc78d7dd8b0f8bef96b9e0e221e2cb8",
"assets/assets/stylesheets/include/render_word_authority_classic.xsl": "7d542ae74ce69c4b80b7ef55109a0656",
"assets/assets/stylesheets/include/render_word_authority_classic_asa.xsl": "15826c2ad7cd0295a294b55ddec19452",
"assets/assets/stylesheets/include/render_word_contents.xsl": "c351d209fee6e90986ad51dd82b9fff2",
"assets/assets/stylesheets/include/render_word_contents_asa.xsl": "036cf9e6173a42e7c4c9cd74d6ded599",
"assets/assets/stylesheets/include/stocks.xsl": "0c4b9b01666211d003cf4b17b455b5ea",
"assets/assets/stylesheets/include/stocks_asa.xsl": "fec6908559221463f75ec0b1e1e4f8d5",
"assets/assets/stylesheets/include/utils.xsl": "f328ac44efb9448285941e09a1176ad8",
"assets/assets/stylesheets/include/word_approval_table.xsl": "9a70d6b324f83c8bd380aff72a0b6273",
"assets/assets/stylesheets/include/word_approved_frontmatter.xsl": "4b9501c1d87c857ffa4f9ec8be31943c",
"assets/assets/stylesheets/include/word_ar1.xsl": "be1c94c2bf36cac0041a7b02ee25f2b3",
"assets/assets/stylesheets/include/word_ar_headers_footers.xsl": "f1be675c4b8946ddb1ffcef9dfbd0b14",
"assets/assets/stylesheets/include/word_boilerplate.xsl": "80cf29d8c5ef7be1f568a35ce2258394",
"assets/assets/stylesheets/include/word_consult_pt1.xsl": "1e43b486a0edf9b7fd4d21551f440bcb",
"assets/assets/stylesheets/include/word_header.xsl": "c17143dd040aa73820ea8552d9645986",
"assets/assets/stylesheets/include/word_headers_footers.xsl": "ab7218a31259c2d032e78b6c31b15b34",
"assets/assets/stylesheets/include/word_headers_footers_asa.xsl": "949158b5eca99acd71a382e5a0375de4",
"assets/assets/stylesheets/include/word_logo.xsl": "c742cc909ec100450685dbe15510dbf9",
"assets/assets/stylesheets/plone_index.xsl": "1366cc7fdfd51f44aacd2b963668eeda",
"assets/assets/stylesheets/plone_pages.xsl": "3529979293e5cba06505bc6b5afc7f72",
"assets/assets/stylesheets/preview_ar1.xsl": "a33f808e80fe8d993cf574782dbffd13",
"assets/assets/stylesheets/preview_authority.xsl": "25829230136f010410ddb287684fef7a",
"assets/assets/stylesheets/preview_authority_comments.xsl": "4c8a4e931471d6b2c0d51194c172bf1a",
"assets/assets/stylesheets/preview_broken_links.xsl": "b80218bc0e52183ec576855cc2b71ce9",
"assets/assets/stylesheets/preview_comments.xsl": "6124a4ceaae3e041f5958f6e96534bc3",
"assets/assets/stylesheets/preview_index.xsl": "856d2efa6d65ea52ce36e38b2f698d77",
"assets/assets/stylesheets/preview_linking_table.xsl": "0803f2e5cb6c6266a20cef5c7f2dd19b",
"assets/assets/stylesheets/preview_recent.xsl": "0fe05e5a08609319b251c58b66cd118b",
"assets/assets/stylesheets/preview_retention_order.xsl": "43b3712be7d94f695dadfa86053b294a",
"assets/assets/stylesheets/preview_summary.xsl": "f709b201eb8ba2438625c26d61726a21",
"assets/assets/stylesheets/preview_supporting.xsl": "c70ddbaf39aebbbb4a04421c3cdb40f4",
"assets/assets/stylesheets/word_appraisal_report.xsl": "f9d6730f5e4fc0d8358048b1b0dfaa24",
"assets/assets/stylesheets/word_appraisal_report_classic.xsl": "32bea9532c85ab6b8aa86b95fee65589",
"assets/assets/stylesheets/word_appraisal_report_pt1.xsl": "4118f64ae0bdfaa27f139c326dd4bf71",
"assets/assets/stylesheets/word_approved_authority.xsl": "412857500818d515316f92f68d800f1c",
"assets/assets/stylesheets/word_approved_authority_classic.xsl": "b48295169d6e213717ea12ccee81215b",
"assets/assets/stylesheets/word_asa_rrds.xsl": "ed893c7bd72bc3bf6b5aaa3e2f8b0059",
"assets/assets/stylesheets/word_asa_rrds_classic.xsl": "ce6ad93ee46b1acaa0fa0360992554bd",
"assets/assets/stylesheets/word_comments.xsl": "a79f4175e716d8b9c66bd50795244141",
"assets/assets/stylesheets/word_consultation.xsl": "67e9f9fa7be870c0c88609c3dfdb0bb1",
"assets/assets/stylesheets/word_consultation_classic.xsl": "2e73ee4f5f56795934686c6e91985303",
"assets/assets/stylesheets/word_draft_authority.xsl": "beb388cfac6f0de44fd98edc872977f0",
"assets/assets/stylesheets/word_draft_authority_classic.xsl": "c9332e26151b2b1e90ae5fe190cf5a6b",
"assets/assets/stylesheets/word_GDA10_linking_table.xsl": "c7e016373c4460084f827ec93fdae5c1",
"assets/assets/stylesheets/word_index.xsl": "ac6d70940af19526b50f90f64a08c09e",
"assets/FontManifest.json": "c19338e713fa21c875dd0f8d7d874b67",
"assets/fonts/MaterialIcons-Regular.otf": "9d27c28fd7ca9687140c2797181006e2",
"assets/NOTICES": "d8f12aee2a3d0f4c215299ce6af94820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/fonts/SegoeIcons.ttf": "5c053a34db297a1a533e62815a9b8827",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "8c3c76c7b63eb48dbca740fe3cccff1b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "68d3408a33889031675fd3f8bca81fde",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad9a69a0e4bfa89a3ce765a64d73c77d",
"/": "ad9a69a0e4bfa89a3ce765a64d73c77d",
"main.dart.js": "8d6ca731d66943270c423c3cde5b6fae",
"main.dart.mjs": "6327fcaf7136b67034e621f988cce5c5",
"main.dart.wasm": "005335d2128c7eb37177e3dfbf072dd1",
"manifest.json": "6a52026f6934836d3b30185e5bad02fa",
"version.json": "5ae16ef70e230bed08f7490c9ac52224"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
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
