/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7bd1d4287b8f6f366751079a2cded386"],["/archives/2019/03/index.html","8cf5c16a0bd46a183c672e015e2a9d4b"],["/archives/2019/04/index.html","f423c012f1759d5502c05bd12600423f"],["/archives/2019/05/index.html","c8b203770459bc09df4980ae1ead01b7"],["/archives/2019/index.html","8dd1b03a85101795233cc829827f5ded"],["/archives/2020/01/index.html","5565fab3969110375d211ffbb9d145db"],["/archives/2020/02/index.html","c108e3b2706500f930b5daaaed071779"],["/archives/2020/index.html","c3da805c3fc2c7363a203f3204db498b"],["/archives/index.html","d32753425433183014b933070efb50f0"],["/archives/page/2/index.html","de2aa397402024c7b5f31d43b68d8425"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","822500eaa1c4a8b4f786e395c109b228"],["/css/main.css","568752d932c71eaeb4226217890721cb"],["/dist/css/share.min.css","5b5b63cdaece8798cb2b54c7f7e089a5"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/myLoading.gif","729a32d73078660ba138e44458cdb26d"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","cfe184bd22d8cf133d860d014d8ed881"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","c0620104891dc88b09470b984c46f595"],["/js/src/algolia-search.js","386c07aefb409f76f44d4247a8bafb3a"],["/js/src/bootstrap.js","89e41b427b33bdc359d47b6a2ee0b7e8"],["/js/src/canvas-dance-time.js","d6bf585fdf06f619b6a1284709949a37"],["/js/src/clipboard-use.js","72a9e68b4c5b85c755847f369c875327"],["/js/src/clipboard.js","2e9f2e4d3ec37645f00154b1fe44fcdc"],["/js/src/crash_cheat.js","9235828469e6826f50ff2692bc0cfa25"],["/js/src/exturl.js","61ec5f411023d962f1043d4e77cee739"],["/js/src/hook-duoshuo.js","5baceb853d82e51475030b24c4efe227"],["/js/src/js.cookie.js","6bc5dbd214cf07b072f1407e8db4b0e6"],["/js/src/linkcard.js","9da301f2efe763ca6afa969a1dc4197e"],["/js/src/love.js","1bd0e5c41f9ff66608053240de56a971"],["/js/src/motion.js","1543adced2ef4c25d4268495499d7f03"],["/js/src/post-details.js","226b1577fcbac3f763e7d1ca8a9422e3"],["/js/src/schemes/pisces.js","1c48c13d1e4a5d219db5f5dce6d92bf7"],["/js/src/scroll-cookie.js","094140e9f665fc988faeef8654c0524c"],["/js/src/scrollspy.js","a96ade57ee84ef17e5b359ef7d3a6c11"],["/js/src/utils.js","436b64bc653025ad512d6e9e8946d74e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","01ae8d68e96cf6012e6f2f5154f74819"],["/lib/Han/dist/han.js","ff393744f7e22baa0c33efe17d9d0b52"],["/lib/Han/dist/han.min.css","70c79f0a2a5ac444484edf02cc7b12ba"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","81b88dace36be1fad40322220683e74f"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","31c03ee03d693b7d02f0c9ca75a5a2b5"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","485e1b0bee6af30dc211c98619637975"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e1bccf657bd31bfd0bb6af4e66284fad"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6ae330cf5254d5230c65f6543f96227c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","e0e598c2baf5825b44469e53d41de49f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0e32b5d42561b505ff84d142b7b07656"],["/lib/fancybox/source/jquery.fancybox.css","40e2ed95ea433cfdea4575f4691779ea"],["/lib/fancybox/source/jquery.fancybox.js","fea914b9497e9428646d220a1ca04bb7"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","416ea87a89a591cb60e78f0501a087a0"],["/lib/fastclick/lib/fastclick.js","f160a23c4613ba369b17a2e3c40f65ec"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","59c12749b138b1c67a074af8bea42b22"],["/lib/font-awesome/css/font-awesome.min.css","59c12749b138b1c67a074af8bea42b22"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","6cfe11a4ddefca6bc304a5ef13009f44"],["/lib/jquery_lazyload/README.html","835c5eea3c27062e3dfdd76e199fa26c"],["/lib/jquery_lazyload/jquery.lazyload.js","9d2487287fa231e72b4bf1f7547fd09a"],["/lib/jquery_lazyload/jquery.scrollstop.js","e55014a2cf1fe9de2d85efba140db10e"],["/lib/needsharebutton/README.html","b500be66432c2134073aaeb88ea2c938"],["/lib/needsharebutton/needsharebutton.css","d82ce1ad9e82158e840028c5691737fb"],["/lib/needsharebutton/needsharebutton.js","d641d8798882479079450deefb4bb644"],["/lib/pace/pace-theme-barber-shop.min.css","b0237abaeb2bb0aef4c0ac35716c9c02"],["/lib/pace/pace-theme-big-counter.min.css","58a94098d478526fee441568c0ba4cca"],["/lib/pace/pace-theme-bounce.min.css","37baf836bb5f0671c245c42369604fd2"],["/lib/pace/pace-theme-center-atom.min.css","63c0d96e7ef112552ee02673b53d8aed"],["/lib/pace/pace-theme-center-circle.min.css","a08a313c2d993b666e409fec3b6be9a9"],["/lib/pace/pace-theme-center-radar.min.css","6ed083322ccd9d765dc00ed3145c1c8b"],["/lib/pace/pace-theme-center-simple.min.css","c817ed3252dcb13a35b7948753a24e07"],["/lib/pace/pace-theme-corner-indicator.min.css","11aca265a93870b1aadd1bc90186947c"],["/lib/pace/pace-theme-fill-left.min.css","2c54aa19708e3ac0116ecba950696d94"],["/lib/pace/pace-theme-flash.min.css","2d5d1919939fbf5d9b08f9932014e549"],["/lib/pace/pace-theme-loading-bar.min.css","e07afca47779c5d053f465c1e328e4c5"],["/lib/pace/pace-theme-mac-osx.min.css","24431d528eeb6fa6bac64e0ce482bc74"],["/lib/pace/pace-theme-minimal.min.css","a1d86d81b4e300cc87a54da0053edc55"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","84cb668fc1477808ef450b7c87afe6fe"],["/lib/velocity/velocity.js","fbb0a0d43574cd10c31f5ef0fe90619b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e8a07ba0a292a29f0f4a051572290b07"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b83c783b15c5cf7590a5e87e6953a12b"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","bf20b3a2eec3cbde37f30124860bfa5f"],["/posts/189af858.html","397a779c00cfe213e6613bc9d0ea53db"],["/posts/2815b369.html","809a49473a617823e7543e392051dd74"],["/posts/2e84c07.html","f156725d98da1280c3abb6e88fabf376"],["/posts/5c9fc645.html","9a72543b7943407bc64e43b556db4602"],["/posts/5d834ab4.html","17a31ecbfc9dd7405bc882affce6d52e"],["/posts/5e3e2bfc.html","7e1165553231e3c752eb8a26a5b3fa7e"],["/posts/6486ae93.html","7f31e885cd480447a29f208a0bde0912"],["/posts/7d23856.html","3bcf38b98529f5d37931af28b82940c6"],["/posts/7f3bcd7f.html","29f488dc5eac0ec361095d966168b636"],["/posts/94271a3a.html","cc7bc129ab1a4ebdfe07c0cbbf6200ac"],["/posts/9be60828.html","8eff4ec7a356a349c520335ded44b25d"],["/posts/a1751c09.html","4ea8a9e87e5f1fdc2f83c7a8aaf9ce00"],["/posts/a625b86.html","d869bceb2e8694db439ab56e3c841fbd"],["/posts/a7c21fc4.html","3e0dabb88de546bac0f9dadf80dcaa39"],["/posts/a99288f7.html","89098eb6f230915b131849876ca9a1a9"],["/posts/b0289f51.html","07f7f86355895f7cb56c197598d012fb"],["/posts/c9786415.html","ecbbb02ae066b9b246f06cbf64362494"],["/posts/d52d06dc.html","cbbdb640126d82d4c4172838e2c1dcb7"],["/posts/ded73fd3.html","903bfecdb6ce1d43ba89ebedc9bfe7c5"],["/posts/fad863f5.html","b2f762f1ce1a0a7dba6a32a41edc2f31"],["/sharejs/css/share.min.css","797738ca1a8a1fac084ff260cb56ffc7"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","d9484dca8e6b192fcba7c05c1fc44796"],["/tags/Ajax/index.html","aa9c3e1be2abca51148881d03df48f96"],["/tags/C/index.html","a078f529abb84949ea81ebe658b4281e"],["/tags/HEXO/index.html","1662051dc8783a6f509c776f30042e41"],["/tags/Life/index.html","5fd7fed91e6fc9cac79dd2b185a69d56"],["/tags/Linux/index.html","6b79ed408ac2a74d7da228ec0c8e027d"],["/tags/MinGW/index.html","1616c8eb2608d977ef4ab482c8b6f86a"],["/tags/Selenium/index.html","5e525dcc9dfe8227eb34f20cb96123b9"],["/tags/Windows/index.html","5fd0c895645b4c20717cad3503c252dd"],["/tags/github/index.html","d15261b8675e047c480dd69c160dc0de"],["/tags/index.html","dbc75b27e173b844bddf00d0ff012feb"],["/tags/markdown/index.html","02e9ab83385ae281310853716060c95e"],["/tags/pathon/index.html","08571202a17ec1e34a04182cdefd9585"],["/tags/python/index.html","606ee139aef4191f2ef49332d0d37c42"],["/tags/re/index.html","af4fc26a5bb04b6fff8cb96adf54b5f1"],["/tags/requests/index.html","166b6f78bab9649df644c22c412eef66"],["/tags/图床/index.html","cfb5658ad7257d274df9856d3568240c"],["/tags/学习/index.html","94b5d03f795b5e8413ed152544d9a6c5"],["/tags/排版/index.html","ba58d7f1d91c9805d2661cdb9e2ba194"],["/tags/正则表达式/index.html","58d7231e00fc3e12bddc9ee62152826e"],["/tags/爬虫/index.html","f5c3a128e613fe6d2c53bbe16904e698"],["/tags/编译/index.html","f734a0d1b4cb0fc95c9a598aa0300300"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
