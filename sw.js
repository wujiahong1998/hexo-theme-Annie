/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","253ba211d27e1fec49c908628c9429b2"],["/archives/2019/03/index.html","f365828015d8ae529727b6547800e545"],["/archives/2019/04/index.html","376fb0de2d4fb9662af9545914cff9f6"],["/archives/2019/05/index.html","a94f5fb222306a6e48c469ad1cae34a9"],["/archives/2019/index.html","e379bc6d50aaef37bbaac62c1ccb7bd7"],["/archives/2020/01/index.html","ea0c7669d9fbd108b7c9a0040d6ce2c9"],["/archives/2020/02/index.html","49173a04eb3963803d89f5bb80b933ce"],["/archives/2020/index.html","f1c90189e3a5863a4c1a7a145803d3d6"],["/archives/index.html","fbd5b528a6f516caba39baefcdfb4759"],["/archives/page/2/index.html","eaf7e2019709a8f96b3959bb571edb80"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","9180f050e35792532524f5707af11087"],["/css/main.css","4c3cc16e3dc4a294aa6a87d5fddc48c5"],["/dist/css/share.min.css","c5dbd6647442c00afc064abcf412a8de"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/myLoading.gif","729a32d73078660ba138e44458cdb26d"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","52fa6b646524e7f9d7a25f74f056ee17"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","985d5083b86a0e397d25b60ae722febe"],["/js/src/algolia-search.js","68868f1539f3d6d33b502cd2fa579bf8"],["/js/src/bootstrap.js","a60836034bae5dc994ac3948ab7dd77b"],["/js/src/canvas-dance-time.js","dfcf86cc6d02948b0da23758eff8350c"],["/js/src/clipboard-use.js","dcb0d3ee05a8ece9df41d66a82b22914"],["/js/src/clipboard.js","7eeee205fc8690d5eb5599109baf17e7"],["/js/src/crash_cheat.js","62ab1ffd8ebb6609ba073377fa34dc53"],["/js/src/exturl.js","bba75c2a13ed2f0804abd12a03a857a3"],["/js/src/hook-duoshuo.js","f0d0e3bc1cfc16a0fd033113973e90d7"],["/js/src/instantclick.js","05adf2fae12990abefbf69c3f3601024"],["/js/src/js.cookie.js","a04033dc7af5a33f140d4acc307b1bc4"],["/js/src/linkcard.js","cb5520742386af9b76369a8a77f1592b"],["/js/src/love.js","ba79fc3046e48e372e8e8f13094fe549"],["/js/src/motion.js","c767c294bca4dd3b0d331f5eb10c5cca"],["/js/src/post-details.js","25de11a77aaf2a8d2a85d7a5382eba97"],["/js/src/schemes/pisces.js","11b711830942de5d327e104c0182f748"],["/js/src/scroll-cookie.js","d70317ec21373cbb642e5c9da8d195a8"],["/js/src/scrollspy.js","84a39c2bf37d1254ba3e3f4147d48ab3"],["/js/src/utils.js","e39f83830d830c6a50b95df313774c56"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","24b57ac4d78332bea8b6755cd116341c"],["/lib/Han/dist/han.js","2217b7c80d59302445efcdbc411b688a"],["/lib/Han/dist/han.min.css","858e94187a17cdc4ce30cd7b224727c3"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","b3299dba65182a63af7ca495a2311286"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","ac65a6ec1b85723f056123ea40f3ad5a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","411b9c6e3db7ed49099fef130de5cc18"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","896274cf575a8798bd50033c73ccef7c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ae4bc377a59193f0f124000d0b1fd482"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7ea0326ae09021c84caff25c6e907d57"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4c85af988e889465dd12f75b5abe47e9"],["/lib/fancybox/source/jquery.fancybox.css","e5642dcc5b0263066b4f9625e5cd1f06"],["/lib/fancybox/source/jquery.fancybox.js","0a445944bb9e31ce53efe2955657613f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","a9de0ff1a0bba991f94de9a964747369"],["/lib/fastclick/lib/fastclick.js","6f16ad1d0fcc7398438e4a37544ced7b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8431f4cd301ac63f47960bc737b164f2"],["/lib/font-awesome/css/font-awesome.min.css","8431f4cd301ac63f47960bc737b164f2"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","4774aedc7275f3501a5f3f1b1cfbf249"],["/lib/jquery_lazyload/README.html","11044205a331d7f96b7608f804709149"],["/lib/jquery_lazyload/jquery.lazyload.js","de00236a510069fc89ee21405fe1399d"],["/lib/jquery_lazyload/jquery.scrollstop.js","beaad696178e207c8fc530a512b89b40"],["/lib/needsharebutton/README.html","8f881e6dbc4366b2e400c14fabe4525a"],["/lib/needsharebutton/needsharebutton.css","d544ae0488fb2e8e42711a68d2170acb"],["/lib/needsharebutton/needsharebutton.js","a4dea4587e1033402ed3b924f61df66d"],["/lib/pace/pace-theme-barber-shop.min.css","f491f0c4d21cd6f67c15c08aa237d2d6"],["/lib/pace/pace-theme-big-counter.min.css","53ccd0c27d5420adc3a9be2f9364dcc0"],["/lib/pace/pace-theme-bounce.min.css","420d9c0965cf45eb1e498bf7d3e80687"],["/lib/pace/pace-theme-center-atom.min.css","0db676d95aeb60c666826b621f31f330"],["/lib/pace/pace-theme-center-circle.min.css","04ae49bfd14403b8bb9e4e7e17117111"],["/lib/pace/pace-theme-center-radar.min.css","532197bb83f24b622a00da7e50aa42cf"],["/lib/pace/pace-theme-center-simple.min.css","5c049f7591ecfce53f2271063b046f3b"],["/lib/pace/pace-theme-corner-indicator.min.css","501f48706664c882d5236bfa6772fc90"],["/lib/pace/pace-theme-fill-left.min.css","36368c4bd0613fea48f57cfb2faad462"],["/lib/pace/pace-theme-flash.min.css","1b69e2046e2395672d390b308164b197"],["/lib/pace/pace-theme-loading-bar.min.css","56473f1fb53e8b4e05cc6529c13a9a44"],["/lib/pace/pace-theme-mac-osx.min.css","d17cd117317c5b4ccc11f33a69d7586c"],["/lib/pace/pace-theme-minimal.min.css","5a5ebcf4a1e0acccc6a2ee6da9877144"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1924ca9e5683ce86fc947c84fe1cd13a"],["/lib/velocity/velocity.js","2630fe65a823d7ee1640835e8734549e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","35257a0dd1cbe4478325fc31c290f5da"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","6e69d043166633f02c53e6a75152df09"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","b92070051cea2b873922c173564469d6"],["/posts/189af858.html","b3ca17e7aae578b9963ba25985a03184"],["/posts/2815b369.html","fb799ecf5d632647da084cb169ca6151"],["/posts/2e84c07.html","8aaa00819f5dbef50e91683fd1d5498f"],["/posts/5c9fc645.html","d71a8c3e78864f6fd668a38e65796e78"],["/posts/5d834ab4.html","e6c4031a10b452facd4fdd9449336728"],["/posts/5e3e2bfc.html","7223dd149999a79798ba90e364351d5b"],["/posts/6486ae93.html","c2e039417613d3bb8238c85cd4b40c6d"],["/posts/7d23856.html","a110e16cd6c1faa638e4ae69d27d43a9"],["/posts/7f3bcd7f.html","df797316cd741f6bc4ae45dd12223d68"],["/posts/94271a3a.html","d3d4f975099ef5588a6eaf377e604b4b"],["/posts/9be60828.html","6cbe404f930f29fae59c8a81519144c4"],["/posts/a1751c09.html","067d091893eafebb4cc2dc0b6c02b05c"],["/posts/a625b86.html","a602e88d3c7be27ea79dea59d259cf72"],["/posts/a7c21fc4.html","eed0ec40f9601a1fa501293219c9797e"],["/posts/a99288f7.html","385744facb1bdd946a52651a49826802"],["/posts/b0289f51.html","cf1d7848d1b98ccefb209c64a01cf4d8"],["/posts/c9786415.html","d3e65e0ad7fc51d9a3f57bb81bb2470b"],["/posts/d52d06dc.html","9d230b73ca92d5b79d6be8919a457107"],["/posts/ded73fd3.html","ee51f9dd004f89965f2a7935db4b158e"],["/posts/fad863f5.html","09819a62130b96d354beef3c36fa401b"],["/sharejs/css/share.min.css","2a38a44d1be51b88150ec84d12456357"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","6cb2cc5554176a7e9d4129ea8ade4751"],["/tags/Ajax/index.html","bfaef2c4ed5785f758ced616bfc3d00e"],["/tags/C/index.html","bf9b4418fec1dff328b90d3453634aba"],["/tags/HEXO/index.html","506f0dbbad565c36da5dac9f5c29f6c7"],["/tags/Life/index.html","b27c9fe68a64144fe9bc71837067232f"],["/tags/Linux/index.html","f5040aead8a4fce432c432707ff6c471"],["/tags/MinGW/index.html","ae5c3e071a0df34db55a5cc976cbec4d"],["/tags/Selenium/index.html","4bb24907b3e08f3dcf73dde7f6d6ee55"],["/tags/Windows/index.html","dcffe0268ffdac0c79080857dcf0d0ea"],["/tags/github/index.html","fa28fd0a50c3a10cb27d67eaa5251cd2"],["/tags/index.html","ce944615bda4e5ef75ee51f9300b2377"],["/tags/markdown/index.html","b60c59922b53e84b5f7884e2970abbfa"],["/tags/pathon/index.html","c56badd605dfad2dab38bb1f8804ccf3"],["/tags/python/index.html","fc6cb1d4c34715abceb24b8941a13aaf"],["/tags/re/index.html","b87b7d6ec3d284f76c6f8e0d09d86110"],["/tags/requests/index.html","38555d14653939e2026c3d1122ff0b95"],["/tags/图床/index.html","a66ce013dee8bce43cace41bbf364d46"],["/tags/学习/index.html","6f9f7dc9f1dd9d41715ae56c2f5c4b67"],["/tags/排版/index.html","296ff707d73cbca320aaddb16bd00eda"],["/tags/正则表达式/index.html","dc0349021e648fc127016b1127fc4098"],["/tags/爬虫/index.html","8fd0a87856cbb8a7a8bb696a047917a5"],["/tags/编译/index.html","3efb18e9d5cdc9a8053fd63381cd96ae"]];
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
