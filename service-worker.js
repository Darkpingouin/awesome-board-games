/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "04e89c9a0fe3ee0445c74e694f9c8d46"
  },
  {
    "url": "assets/css/0.styles.2bcbe07c.css",
    "revision": "c1682b89fc2aa52022d05dccb0dc8991"
  },
  {
    "url": "assets/img/Jon_Board.f1f14fb1.png",
    "revision": "f1f14fb136b3b74f0f075fb323a972fb"
  },
  {
    "url": "assets/img/rendered_md_example.ecb638e1.png",
    "revision": "ecb638e134d437c6147f903b420c0a7c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7c57d461.js",
    "revision": "b68bedabff79d7a7deabe7751c76a734"
  },
  {
    "url": "assets/js/11.988e0a5c.js",
    "revision": "b4ce2601405ed3149b700069d87d28fd"
  },
  {
    "url": "assets/js/2.aa49387d.js",
    "revision": "c52a9a4d267a75c073c00d7fcf2cf3c6"
  },
  {
    "url": "assets/js/3.36af70db.js",
    "revision": "4285050dd72b8d598e9cc550240bfeec"
  },
  {
    "url": "assets/js/4.5364c3b2.js",
    "revision": "8ff937db51db01defaae935d5fb002e6"
  },
  {
    "url": "assets/js/5.b733fabf.js",
    "revision": "2c3b041bc31df2cec24443a0b6b11207"
  },
  {
    "url": "assets/js/6.1c435a6e.js",
    "revision": "bc216c8eb078331cf994a790743e26a8"
  },
  {
    "url": "assets/js/7.2c20fe06.js",
    "revision": "1c0b6d0fb575a4218cc688f3bb95dc8f"
  },
  {
    "url": "assets/js/8.abc716ad.js",
    "revision": "0f61b82b82673d4a8cecdc17d133b930"
  },
  {
    "url": "assets/js/9.28a60f0e.js",
    "revision": "22f966f83f68dae2a7a7ce56bdb02dd6"
  },
  {
    "url": "assets/js/app.9e52976d.js",
    "revision": "0898ccf0725357478292f00178d54385"
  },
  {
    "url": "code-of-conduct.html",
    "revision": "1788e97428d3fb992a5e61385c270963"
  },
  {
    "url": "contributing.html",
    "revision": "6b5d4fd774412f6011a7d1e08c2bad83"
  },
  {
    "url": "formatting.html",
    "revision": "573f962f8df685619e0926569b519fcf"
  },
  {
    "url": "help.html",
    "revision": "785ad8b2e9c81405f8b90d6ecd421d99"
  },
  {
    "url": "icon/apple-touch-icon-114x114.png",
    "revision": "24e3b06ebed9a80caa39fcc6d2602504"
  },
  {
    "url": "icon/apple-touch-icon-120x120.png",
    "revision": "b3f738d07c25f8bb8e5d2d8ea82a1968"
  },
  {
    "url": "icon/apple-touch-icon-144x144.png",
    "revision": "ecccc95f4dda6b442da32ef15384725c"
  },
  {
    "url": "icon/apple-touch-icon-152x152.png",
    "revision": "a15086663a09c9b1961f32c5d7a0ae53"
  },
  {
    "url": "icon/apple-touch-icon-57x57.png",
    "revision": "dca984d301a825cd2385861c79ccde1d"
  },
  {
    "url": "icon/apple-touch-icon-60x60.png",
    "revision": "3ae6850fa190f50790950aa4f4727a2b"
  },
  {
    "url": "icon/apple-touch-icon-72x72.png",
    "revision": "c9e79c07d8642e249b2dfd13292f422e"
  },
  {
    "url": "icon/apple-touch-icon-76x76.png",
    "revision": "1855e92ca7d694d5b7d6af677e587119"
  },
  {
    "url": "icon/favicon-128.png",
    "revision": "2dd0ab274917aa0961c43098d554c65e"
  },
  {
    "url": "icon/favicon-16x16.png",
    "revision": "17ee879b37ef69fcd0506dd31e072bc5"
  },
  {
    "url": "icon/favicon-196x196.png",
    "revision": "9196ffe18398d3e97e5d8e880097b534"
  },
  {
    "url": "icon/favicon-32x32.png",
    "revision": "a3d667d46c6606906e5845c431830138"
  },
  {
    "url": "icon/favicon-96x96.png",
    "revision": "5bd9415fe49f0fd06a21b18cfeefff5d"
  },
  {
    "url": "icon/logo_512.png",
    "revision": "db5382ce49384181b26b9741e10eca23"
  },
  {
    "url": "icon/mstile-144x144.png",
    "revision": "ecccc95f4dda6b442da32ef15384725c"
  },
  {
    "url": "icon/mstile-150x150.png",
    "revision": "78aa3969aa902ab011e23a606b00426b"
  },
  {
    "url": "icon/mstile-310x150.png",
    "revision": "794c9a6084473739d2b3eb0c4ed5c2ea"
  },
  {
    "url": "icon/mstile-310x310.png",
    "revision": "77d8f648c4c54b9d29b8779f934a16d3"
  },
  {
    "url": "icon/mstile-70x70.png",
    "revision": "2dd0ab274917aa0961c43098d554c65e"
  },
  {
    "url": "index.html",
    "revision": "74e928f2977e66dfc2ba2cddaa50c85c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
