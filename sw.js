/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","de45a3163dfb6b426e4264c52abcee32"],["/archives/2019/03/index.html","baa05f537612c2c67a8ccea92e3b757e"],["/archives/2019/04/index.html","e7172c5daf957c1607565a082dcc9690"],["/archives/2019/05/index.html","7a55e116f6fd60cadaf9162c3b65979c"],["/archives/2019/index.html","30b4b74b35294cd9eb6cc33ff881dff7"],["/archives/2020/01/index.html","ba43906b0de1dd77a2983e069f0d8284"],["/archives/2020/02/index.html","b6820c817f73d0f5440cbc389b2c1120"],["/archives/2020/index.html","06f8e0e8c194f47c1c909d674d3c8134"],["/archives/2020/page/2/index.html","a84cb0b5556d03fbe487de65e7cd63d0"],["/archives/index.html","bc67d8bfa6fefe1e72efd33f30e969a8"],["/archives/page/2/index.html","d3751cd2d234262a788a3bf2ae676b83"],["/archives/page/3/index.html","329667c9dc82a6e7c91a3d300124cbc0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","0843edaed273a68d609fd85068f08a07"],["/css/main.css","ca1f8bac3290dadfd466c7a689938c64"],["/dist/css/share.min.css","df377cf66c4434497f2f4c975dfad2bb"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/myLoading.gif","729a32d73078660ba138e44458cdb26d"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","eb20643734247ec9f2fc599e9228a75b"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","b1024f9604a1cfe9f53bf1d1b56eff8d"],["/js/src/algolia-search.js","875b3cf0db9bbd1b68a4cade9c18be29"],["/js/src/bootstrap.js","00fa812166aca2bee2c9b6c65c4db6c1"],["/js/src/canvas-dance-time.js","7606b865095a06465111dcc2dfaa3237"],["/js/src/clipboard-use.js","efefc862933b914f08f5af8cdc3afd8d"],["/js/src/clipboard.js","3d9409f74adbf19be6cf7ceba060097c"],["/js/src/crash_cheat.js","fba199c72a671ad6925f3ca6c408b31a"],["/js/src/exturl.js","14656a8f29872b2e71ed4de3f5fb589e"],["/js/src/hook-duoshuo.js","726a4b43001df34f1d8a8fcb28e3b324"],["/js/src/instantclick.js","50f13f69cf7e2fbe0c96d8df80c6ecbb"],["/js/src/js.cookie.js","4a3ea5b723c05ceb3b2e82f82e0ee567"],["/js/src/linkcard.js","8a6c97038033ed5e59605ec471bf06ae"],["/js/src/love.js","04746f41c75a550ba8cfee3a22c9371c"],["/js/src/motion.js","84ad52120dc5081d52e89a1fa719e58d"],["/js/src/post-details.js","321f688d71798b5a5b9d3fe801b90af2"],["/js/src/schemes/pisces.js","1e081ed5e7da915f4ef312a9f0d9f674"],["/js/src/scroll-cookie.js","903820deb520f3f93f748f1ef8e8ec6f"],["/js/src/scrollspy.js","89a0823df0cad25058c4d0500a1b4a96"],["/js/src/utils.js","0ebe92527f9456727b3b11457016bede"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","b671aef955371096e5386974a9c9945b"],["/lib/Han/dist/han.js","8c45b572702e07429e8cd41838c62763"],["/lib/Han/dist/han.min.css","516845a47d2ab88db607746852ff9408"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","7c79ab2e34eefb207742b825d0d91dda"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","04ca9caa67d6c588c42c9134dd7eb7bf"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0a1b35da421db5769cd4f5ff6ed2b60f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6efc0f10b37aa1392fddd5b15d399a8a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","3daefad88db102095b32b09d571ff72d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","87691f6db910bdb9cfe33e5e584ea8fe"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9eaf361e62437f345c9087774470cef6"],["/lib/fancybox/source/jquery.fancybox.css","54feb9db09ae6762d416dd6400b8aa3e"],["/lib/fancybox/source/jquery.fancybox.js","e40472f9c47b7a4c288f6cba03a8621e"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","3dd7474265b8e0e142d34cd3de973b21"],["/lib/fastclick/lib/fastclick.js","c4b9da25ce56f99b015003d97ee51ea1"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","0b4f50c9fc7d5d435f41269557d18cd3"],["/lib/font-awesome/css/font-awesome.min.css","0b4f50c9fc7d5d435f41269557d18cd3"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","a2dc10f665b35919cd09d68928b84322"],["/lib/jquery_lazyload/README.html","704953120c3481f97672c48d365d057d"],["/lib/jquery_lazyload/jquery.lazyload.js","c3d679dcacd11c0dc73c947cedf221a8"],["/lib/jquery_lazyload/jquery.scrollstop.js","e292a7b561afece1c955e3b32996f264"],["/lib/needsharebutton/README.html","9f6aa41a5cc50f6d6c94f46994b5afc4"],["/lib/needsharebutton/needsharebutton.css","b805cabe4c52e035d92a5a893bc031fa"],["/lib/needsharebutton/needsharebutton.js","d4942b2b5d46d25323d5ccc5e1b08424"],["/lib/pace/pace-theme-barber-shop.min.css","3b9798cc21c9c2a52e2f88e6826d12e6"],["/lib/pace/pace-theme-big-counter.min.css","d11654e70e1ce79b2af3c0718ecb8a40"],["/lib/pace/pace-theme-bounce.min.css","706a2f1b2562dd7050938d648908752f"],["/lib/pace/pace-theme-center-atom.min.css","546639d7054fa6f4fc18b6dd0a4ccae2"],["/lib/pace/pace-theme-center-circle.min.css","64ab132c88a4de46b3d64c7174756ff5"],["/lib/pace/pace-theme-center-radar.min.css","27c4eeb9eb5b61cf20f81c1dca6e7d3e"],["/lib/pace/pace-theme-center-simple.min.css","f3760655158b7f69dad43e3660643ce0"],["/lib/pace/pace-theme-corner-indicator.min.css","af0dcc61b81dab87f0b905ff2fc124c4"],["/lib/pace/pace-theme-fill-left.min.css","d4c871e09ed3dcdebc9aac6f5d29a559"],["/lib/pace/pace-theme-flash.min.css","4c6d1d779089f84cc1c0da1ee1747fed"],["/lib/pace/pace-theme-loading-bar.min.css","029836ba3405e11dbe27c67c8117eaa5"],["/lib/pace/pace-theme-mac-osx.min.css","469e1971a22232579655f1ee52f864af"],["/lib/pace/pace-theme-minimal.min.css","e2b4a93b6565c7c0a9af0a4972d8519c"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5b63d82c3bd1b21c5e2e1952a8f6931d"],["/lib/velocity/velocity.js","eb4f9cf61e35207f8d377ae5363d2825"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","40574eef7091f3888e7add44cb58df0e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","2ca4b43b89247bc1d46873130d61f445"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","d2bee6015759eb2b4e57a6195109bcb7"],["/page/3/index.html","6722a257c19c855ab6d4d1182bb6d2ef"],["/posts/189af858.html","41369a4dbcbe30e3986acdc16366d69b"],["/posts/2815b369.html","a1b258d3b98e1daa7fcccb30ec44a9b2"],["/posts/2e84c07.html","8acad5ba0e412d9254f19eaeb0013e50"],["/posts/5c9fc645.html","6c47e4a2657f8fbfcd4f6f78df917ce3"],["/posts/5d834ab4.html","a382f76c50ff75d4349bb50fc87fe78a"],["/posts/5e3e2bfc.html","27059b2ee81323f73d11b0612edfc8e3"],["/posts/6486ae93.html","d4804510ef32f4547a1e10da6c0d912c"],["/posts/66cd7b15.html","dd19e591ab57dd6c0da50ff98d511e5d"],["/posts/7d23856.html","5aa162130952ceb73b072ae39808d8e2"],["/posts/7f3bcd7f.html","740984a3b73d55a580d10aa1aa69fff6"],["/posts/94271a3a.html","483dc2d18d983a5d1ce8a2c30a6b8287"],["/posts/9be60828.html","babe39b44e5527eb7b252cfcd474a7ad"],["/posts/a1751c09.html","1c3f9b9a076aaeedf5b8821320f446ab"],["/posts/a625b86.html","230b5f4dff5a8dc6510134a68f49b014"],["/posts/a7c21fc4.html","78e03bed6c3acea2566ef549a2284c75"],["/posts/a99288f7.html","664e837aa12ab45adc8b4df40931a11c"],["/posts/b0289f51.html","e1c0e614a901f2638f19403710ce4365"],["/posts/c9786415.html","614faba490d9f5eeebbf1fdfeeb138c7"],["/posts/d52d06dc.html","a01cafc45d826d3189b210ac53b1f47a"],["/posts/ded73fd3.html","9cbf28dde97144ed3cdcd8ce76dcd78f"],["/posts/fad863f5.html","eaae3ed7a93e434168ccf3d76223d489"],["/sharejs/css/share.min.css","912340786c4587651ba4183886ea34d7"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","3be3556c72a741b37394a7df175f0c0b"],["/tags/Ajax/index.html","dd7a7895e63fbc468c5fce8c5099cf6f"],["/tags/C/index.html","6b560403802c69540dd2a0c9d5ccdf84"],["/tags/Life/index.html","6f36ab8945c15c33e6f61af3ee0a3f34"],["/tags/Linux/index.html","b4563566ecada35a43fc479919500569"],["/tags/MinGW/index.html","91507c9ab71ae0a05437365061264b45"],["/tags/Selenium/index.html","dfc1f57e602dc5c4a81ae631784c461f"],["/tags/Windows/index.html","bae64e13809f17c216b548f96751df6d"],["/tags/github/index.html","36fc41a62372c5cfaf33e51cacadff01"],["/tags/hexo/index.html","4f16e07a2cad8ac1740a9df8cfe64a21"],["/tags/index.html","fe3aeff6fe22d381fc66935f3255fdc5"],["/tags/markdown/index.html","7b261735ee2fdbeaa9ccda7f4e75b015"],["/tags/pathon/index.html","d9c592686a180ebf64c78a2ce9bcf273"],["/tags/python/index.html","cfcb672f79d2c454dbfa820a3a24646a"],["/tags/re/index.html","c43295c16296364354a283f035404e84"],["/tags/requests/index.html","f37e23b53d974d6316eab20a0f338b07"],["/tags/图床/index.html","b88bbfd25f3ce9997a1b40444d44d4f0"],["/tags/学习/index.html","af582e7f56756c3c40b8ad6bdb402de5"],["/tags/排版/index.html","3d28061cdf08602bffee3bd034073510"],["/tags/正则表达式/index.html","965e70c4fd11bf0e3587470b4a11df9c"],["/tags/爬虫/index.html","f0b5dd80f108e5162ccc59718f39860a"],["/tags/编译/index.html","3a3daeddd4113107043fc0d19f1e43e3"],["/tags/配置/index.html","f18cea3711978c2a676ebacb69a22871"]];
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
