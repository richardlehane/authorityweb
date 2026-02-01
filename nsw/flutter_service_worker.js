'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f4c16141c402295704c67f6b78f72c92",
"assets/AssetManifest.bin.json": "5d5c37c1c09bd848e5aabe2d07ddf053",
"assets/assets/authority.dll": "1e9f08a1f6352a03869dd1bbf12a677d",
"assets/assets/SRNSW_example.xml": "097da7847888e450f52f6e54b4686abe",
"assets/assets/stylesheets/docx/appraisal_report.xml.rels": "d3387f2a7214ec989d98797aed0ffdb0",
"assets/assets/stylesheets/docx/appraisal_report.zip": "34090146be56dc833df66abae6098804",
"assets/assets/stylesheets/docx/approved.xml.rels": "7d17800603414e871c706c20387c2ee6",
"assets/assets/stylesheets/docx/approved.zip": "b203f41743e2bbd951eb146a0ab522b1",
"assets/assets/stylesheets/docx/comments.xml.rels": "16c0487d691c366170e9aeba2f57e40f",
"assets/assets/stylesheets/docx/comments.zip": "aa6dc2130d2378d49271186a8e6a75a0",
"assets/assets/stylesheets/docx/draft.xml.rels": "573a2b5eac6a486787bf69be94e505a5",
"assets/assets/stylesheets/docx/draft.zip": "b77bbf49e214922aea8cdb9a47b0b1ba",
"assets/assets/stylesheets/docx/index.xml.rels": "6d5e26efae3736092efe1b01d3672bab",
"assets/assets/stylesheets/docx/index.zip": "4ba3954017c0b8800330e4c9f8610b10",
"assets/assets/stylesheets/docx/mapping.xml.rels": "a3b677a3c0e2891afaeafbf96f02a85d",
"assets/assets/stylesheets/docx/mapping.zip": "7d6f6a268679a653cc58b479f64585a8",
"assets/assets/stylesheets/edit_capitalize.xsl": "9af998e5038a5c6ede0b5c496543d701",
"assets/assets/stylesheets/edit_clearagency.xsl": "a1b3f59889acab286d35daf83b92fc61",
"assets/assets/stylesheets/edit_clearsrnsw.xsl": "9a38340fedb8964627aecbf3842bd581",
"assets/assets/stylesheets/edit_clear_comments.xsl": "e818aa372bc3386051c5a6b979fd1744",
"assets/assets/stylesheets/edit_numberitems.xsl": "947b7b3ada48890fc29afeb946587035",
"assets/assets/stylesheets/edit_numberitems_asa.xsl": "b7ed1983ea95a8e4cca9f93af83e288b",
"assets/assets/stylesheets/edit_sortlinkedtos.xsl": "18662c80d0890e78a70817603e7cd1d9",
"assets/assets/stylesheets/edit_sortseerefs.xsl": "fc197fcb7787d9b129bb790ab321da78",
"assets/assets/stylesheets/edit_sortterms.xsl": "77844502bf586b06f324a5c8d91f7dcb",
"assets/assets/stylesheets/edit_update.xsl": "def3c0b63213844fa16063d1dbde5175",
"assets/assets/stylesheets/export_clean_agency.xsl": "dfd7e12a1b7b780f1ed4db2860a75378",
"assets/assets/stylesheets/export_clean_publication.xsl": "3da2d51f1c837e86d21bb8c9cf8d938a",
"assets/assets/stylesheets/export_tsv.xsl": "509c5440c578360354f548f490e9d459",
"assets/assets/stylesheets/include/add_authorised_disposal.xsl": "386d7811f95f8db948a501748b7343cd",
"assets/assets/stylesheets/include/disposal_common.xsl": "97bed0e0e21d8fde05b9402cc212cead",
"assets/assets/stylesheets/include/disposal_html.xsl": "4c142ffbba55c751caf9feb3e6cf42f5",
"assets/assets/stylesheets/include/disposal_srnsw_rda.xsl": "bd58437b805a9571f333abe01e86e7ab",
"assets/assets/stylesheets/include/disposal_txt.xsl": "e4c9b03eeb1bbc3c4c1297b016c8a9e0",
"assets/assets/stylesheets/include/disposal_word.xsl": "13f408bea6f9f4458440fcf422b74ca2",
"assets/assets/stylesheets/include/html_header.xsl": "42c3a589e2b4410a01a23ce20f80837a",
"assets/assets/stylesheets/include/index.xsl": "5672ef8e707470cc13325de6f17b680f",
"assets/assets/stylesheets/include/linking_table.xsl": "181a759182a8636ae62f3fb94c97c1c6",
"assets/assets/stylesheets/include/preview_ar.xsl": "c1461856ce5a4a451ce6588302e2bb45",
"assets/assets/stylesheets/include/preview_authority.xsl": "79fc8b4297ef2e9c9fdfedec25562a65",
"assets/assets/stylesheets/include/render_html.xsl": "8d34aaec0a5d5126b2d8ad903547cb85",
"assets/assets/stylesheets/include/render_html_authority.xsl": "db041bc3d86032848ae402c02ce22c32",
"assets/assets/stylesheets/include/render_txt.xsl": "7a75536aa8f65833bb5045ba6559d1fc",
"assets/assets/stylesheets/include/render_word.xsl": "9740b3a12e1e9cde9d20be9dcbd52133",
"assets/assets/stylesheets/include/stocks.xsl": "eb2cd47421520a5fdfb8c7f14dcaa871",
"assets/assets/stylesheets/include/utils.xsl": "8cff06b930afbb7e73682b80a5f8f016",
"assets/assets/stylesheets/include/word_authority.xsl": "3f917692e383a811830f81e6f1bd1772",
"assets/assets/stylesheets/include/word_contents.xsl": "336bcf568818604fd58ed962d267b841",
"assets/assets/stylesheets/preview_ar1.xsl": "a33f808e80fe8d993cf574782dbffd13",
"assets/assets/stylesheets/preview_authority.xsl": "25829230136f010410ddb287684fef7a",
"assets/assets/stylesheets/preview_authority_comments.xsl": "4c8a4e931471d6b2c0d51194c172bf1a",
"assets/assets/stylesheets/preview_broken_links.xsl": "b80218bc0e52183ec576855cc2b71ce9",
"assets/assets/stylesheets/preview_comments.xsl": "6124a4ceaae3e041f5958f6e96534bc3",
"assets/assets/stylesheets/preview_index.xsl": "856d2efa6d65ea52ce36e38b2f698d77",
"assets/assets/stylesheets/preview_mapping_table.xsl": "392f9354de1abf012ffd85247b16b563",
"assets/assets/stylesheets/preview_recent.xsl": "0fe05e5a08609319b251c58b66cd118b",
"assets/assets/stylesheets/preview_retention_order.xsl": "43b3712be7d94f695dadfa86053b294a",
"assets/assets/stylesheets/preview_summary.xsl": "f709b201eb8ba2438625c26d61726a21",
"assets/assets/stylesheets/preview_supporting.xsl": "c70ddbaf39aebbbb4a04421c3cdb40f4",
"assets/assets/stylesheets/word_appraisal_report.xsl": "a30b14b1f92be7b6f0fcd7be4dcc8aea",
"assets/assets/stylesheets/word_approved.xsl": "09f57ad40a2475e8dec46c9c0d9f181f",
"assets/assets/stylesheets/word_comments.xsl": "29d046cc72daea33a3560c11d8598ed6",
"assets/assets/stylesheets/word_draft.xsl": "cbbf0d0373a7d0f379756e37a3b6cf1b",
"assets/assets/stylesheets/word_header_authority.xsl": "f986e43865e42654c224c8133b1952a2",
"assets/assets/stylesheets/word_header_authority_first.xsl": "f4d13be0e94980c1629a83d0f86f0058",
"assets/assets/stylesheets/word_header_contents.xsl": "fe0828b9e740c298a1f1279ab3721cf6",
"assets/assets/stylesheets/word_header_contents_first.xsl": "4fb123316ff3098678c7a32c583afb33",
"assets/assets/stylesheets/word_header_index.xsl": "5b5a5f91fea7e1fd9fe04dd0f1973be6",
"assets/assets/stylesheets/word_index.xsl": "037208db7f1af409afaee26948018853",
"assets/assets/stylesheets/word_mapping.xsl": "bc26cbfa45a0b473bd1976bf0b158eca",
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
"flutter_bootstrap.js": "18f20b36aa7eda41dd1853fd100198df",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad9a69a0e4bfa89a3ce765a64d73c77d",
"/": "ad9a69a0e4bfa89a3ce765a64d73c77d",
"main.dart.js": "9713ba739faa2e10701c525bdb7174f6",
"main.dart.mjs": "6327fcaf7136b67034e621f988cce5c5",
"main.dart.wasm": "5caefec08aec478da731f3d77a8b7c0a",
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
