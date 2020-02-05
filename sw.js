/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6162a8ddba3fb0206ea69f1a30990c4c"],["/archives/2019/03/index.html","530c36cfb7658c4c8fa6ae66d5565d36"],["/archives/2019/04/index.html","0706d4d96d0c4d1181dbe2edc5b6006c"],["/archives/2019/05/index.html","aa6de477b7362c156b6072080bea366c"],["/archives/2019/index.html","ccaf47a74a4e68cba9a066261c55904d"],["/archives/2020/01/index.html","ce5bb9ba56614c0f66b037e83d673e4f"],["/archives/2020/02/index.html","178749ce60a385ae19ddc0c0f86143c0"],["/archives/2020/index.html","00e1ba4079bafde890544a067c05f474"],["/archives/2020/page/2/index.html","1485f796853168147c802597b298cdad"],["/archives/index.html","9bf137a3a9f25c24ee1725a1118a6c23"],["/archives/page/2/index.html","474109c968f9e622faa53a05d9d9465d"],["/archives/page/3/index.html","a0ecfd6d320896a973715f5c0df732d1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","7076fa0a30808dc18f1072225e26343d"],["/css/main.css","565ea68275ee8724f2acd1a5f93c2438"],["/dist/css/share.min.css","d85ff368c9675f859be4ce4678f09da7"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/myLoading.gif","729a32d73078660ba138e44458cdb26d"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","220bf5813660d6e5bd415211c5dee6f4"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","76bdc8e2eae27b3c5ab618541431af7a"],["/js/src/algolia-search.js","fcbcefabc0bb56ac3bfac1ece696311b"],["/js/src/bootstrap.js","b3163fd4d214cc7e84cdc97e05fb8632"],["/js/src/canvas-dance-time.js","428d14e8305be6a01d23ef11c48b71cd"],["/js/src/clipboard-use.js","554b6de26612d4990fbfdec449283a76"],["/js/src/clipboard.js","c226c13f0c8b0dc7a992972dbea4ed22"],["/js/src/crash_cheat.js","837f10753e8235fc77df3d912fffcaaf"],["/js/src/exturl.js","b9f67b5094c5bd8d1c04249a5ded31f0"],["/js/src/hook-duoshuo.js","79cba36d3e23b78a656853dce9c768af"],["/js/src/instantclick.js","82716cb8933a48f3b28d1a2e9ef86ff2"],["/js/src/js.cookie.js","5e92d4f23c4e17b622d50a4d8bfdb938"],["/js/src/linkcard.js","8818b74f5b01c0f053e505a4ea258ad7"],["/js/src/love.js","733b256ad4adee3c2d8f1d0c0adad89f"],["/js/src/motion.js","a11eb2d0a265016a6466b8c8ad11d289"],["/js/src/post-details.js","b69c8208b850d481f38460ebf62facb1"],["/js/src/schemes/pisces.js","7ed8483f74f2d2a9523931ba2858451b"],["/js/src/scroll-cookie.js","846680b6c6467e57bc3fcd58baeba89f"],["/js/src/scrollspy.js","1320c8c6ddc7b3eedcba189dd62cbebf"],["/js/src/utils.js","5ef6481623946c10d2518cf34447b869"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3e47af2dde28d09f1e6e4c3343f04b13"],["/lib/Han/dist/han.js","e4127c16e67fe3c3cb0de8d229a15a4d"],["/lib/Han/dist/han.min.css","4d97c882b6493a5bdf9e8610bf44732c"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","c03ee60fac6039bc1aaba8ed8b998145"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e8900dc29b5ef0b1db0b35e7f379210b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ad30a6189f61a0680ebe3faf5ef4078c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2afca02897b5dc59f8e9373dee026edc"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ecc0e29bffa3801c12e31bf267be7cc4"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c592455bd4e938c2beb38e797b5f8dd7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6373bf0603fbe08dd3f94df33ea49e86"],["/lib/fancybox/source/jquery.fancybox.css","1442f30c5e43d9aa92b59850ea90fef7"],["/lib/fancybox/source/jquery.fancybox.js","76fedb11725ba7227eecb9433153843c"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","5301ab52e8871b3c35f4dea34a2a9b4e"],["/lib/fastclick/lib/fastclick.js","032d910023fe515e8ab18d449989b520"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b20b54c640fe5c93b520ba2461900c2f"],["/lib/font-awesome/css/font-awesome.min.css","b20b54c640fe5c93b520ba2461900c2f"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","55d071427adbe7bd2a0223a707043678"],["/lib/jquery_lazyload/README.html","d0be86c8ea50817bd804254154f972ef"],["/lib/jquery_lazyload/jquery.lazyload.js","8bdf1a0db63ede68ebc1f873728f323c"],["/lib/jquery_lazyload/jquery.scrollstop.js","5a4edc6f8ba24fc2547711d2c64af3ac"],["/lib/needsharebutton/README.html","9473e7f36b68d482d6b4e1e795319db1"],["/lib/needsharebutton/needsharebutton.css","61b4874546c525ff1af82be90d21abf3"],["/lib/needsharebutton/needsharebutton.js","c35d0e78319a3ce996e7aa778eff7ad0"],["/lib/pace/pace-theme-barber-shop.min.css","f4ab03bc98ec94b476491f264f7baf80"],["/lib/pace/pace-theme-big-counter.min.css","eba658cc7a140481c60be568d15d9837"],["/lib/pace/pace-theme-bounce.min.css","124c8d2554e57b9489fa6c22350de2b5"],["/lib/pace/pace-theme-center-atom.min.css","ef9ad0f0504598e65e8e604b5f13ff9c"],["/lib/pace/pace-theme-center-circle.min.css","2edfd6b83c4b984ab40d96ebc865eff4"],["/lib/pace/pace-theme-center-radar.min.css","97bd5bc29fed376d8bc1d9def41eb1de"],["/lib/pace/pace-theme-center-simple.min.css","00d43396a9b924aa2e9adf9d9582edc3"],["/lib/pace/pace-theme-corner-indicator.min.css","47b6d62459fb06b8899c70431cb3bd5c"],["/lib/pace/pace-theme-fill-left.min.css","167de1f2fafa11d1a9ef0c7f121352c6"],["/lib/pace/pace-theme-flash.min.css","e29ad89f083bc4b29738fdd97ac330df"],["/lib/pace/pace-theme-loading-bar.min.css","810a741024d20b43999089be2fbad908"],["/lib/pace/pace-theme-mac-osx.min.css","785a411f3b722fa1342ec0ba20efa68c"],["/lib/pace/pace-theme-minimal.min.css","cb943bab029d04926f96b85c6ac21720"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a43bc484cc54a3c05b44f651cd18832a"],["/lib/velocity/velocity.js","67bc658f1a4ac0a50d641e9a05e632a2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a52b16974644154aa9c7e9a47f09383b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","cd4cc29dc8c3ef7b439a27b63ed7aa56"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","dcfc98b7bdf1e45047585b082f030bae"],["/page/3/index.html","061c9efed8bc705b64a8703ea76bc04e"],["/posts/189af858.html","a67a5f623e9498209179bf8b05405fab"],["/posts/2815b369.html","54544811825ca6178da45dba524ef95b"],["/posts/2e84c07.html","11dec8217d3f0f9623d3d8482c52df25"],["/posts/5c9fc645.html","e84bdd43dff50b6e61c93767d54a60a9"],["/posts/5d834ab4.html","f5da61eb82647c7fd41410739dce980e"],["/posts/5e3e2bfc.html","9d7e9880149499e593bb6ac9d57ddb35"],["/posts/6486ae93.html","89e675b3bfb122b9fcd920df05992636"],["/posts/66cd7b15.html","7202d14dd7f4c285cfa751f159a0e3dd"],["/posts/7d23856.html","531b67d744f766784810af926bdc0c7c"],["/posts/7f3bcd7f.html","99ba0c0d5f48f969a2dca31c44bb631c"],["/posts/94271a3a.html","bbbb75ee17b45b8f0c7d1b878ecef123"],["/posts/9be60828.html","526d50e8fb8d73de9815cc539016766c"],["/posts/a1751c09.html","e93604ed2e01abbda7a60d6904927172"],["/posts/a625b86.html","e47e1bf05082bc66f8a2200893a259e0"],["/posts/a7c21fc4.html","b8c40871ba167393f8f71557d60d3b58"],["/posts/a99288f7.html","b721cb3d370666916379c325c8becf29"],["/posts/b0289f51.html","411638ddefd0727ef4a364138bea6c25"],["/posts/c9786415.html","e5f5a74cafe23554e705ceb31573d9b6"],["/posts/d52d06dc.html","4778b56db8fae025dab684b048533bd8"],["/posts/ded73fd3.html","f389cef3e29353b53607d8ee904513a0"],["/posts/fad863f5.html","c5bd1d078824c85c2faac8b61138ae7c"],["/sharejs/css/share.min.css","2701f00225cf7bd10bae66dfd5efa331"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","9f698d56d4e0dcb88d43559bf1d26448"],["/tags/Ajax/index.html","eb4de234107453ee8be406c6109b4167"],["/tags/C/index.html","0b17da078714c1c0f2de1e25c43e8cee"],["/tags/HEXO/index.html","9e743f0c97615a79e007277685690c44"],["/tags/Life/index.html","7563ef065c013d83390afdf76d0ff201"],["/tags/Linux/index.html","b56f1047c413231792b5c11e9dd013e8"],["/tags/MinGW/index.html","fa037d2009af4b0a1fa0398c24fd751d"],["/tags/Selenium/index.html","9898e0a39e8899573a0e2451ab245540"],["/tags/Windows/index.html","ecc1d1a818b8e35745892c94f8c30c1e"],["/tags/github/index.html","c056b1d1e3fcf7687780243c768cc287"],["/tags/index.html","488e3a1efef95552b6be21cc9cc451b6"],["/tags/markdown/index.html","7e189ad71622fe7272d60f0d1a3881e2"],["/tags/pathon/index.html","35f8e15b1929f8bc053b0d4a1b36c6f1"],["/tags/python/index.html","ddfdafb7cef4d208e6f171e1ecc60286"],["/tags/re/index.html","14450c627615ab19f21d5fbabd4399c2"],["/tags/requests/index.html","3bdaaacfb0bd5714d4879bf37b0a5ce4"],["/tags/图床/index.html","0301b96a1d5d1070957f35cd308e08ba"],["/tags/学习/index.html","b643e9cd74103b6725c7b2ee40991771"],["/tags/排版/index.html","4707e7e14fe0b5c08e768a5473a58d11"],["/tags/正则表达式/index.html","53ddf5a7eca66d5a9c8a6389bc39c592"],["/tags/爬虫/index.html","4cda4041f4ba662b58be3d75f33c4e60"],["/tags/编译/index.html","70255243751a6f133675911a6ce9e80a"],["/tags/配置/index.html","fdd21d149619e45a17541ebb60a3431b"]];
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
