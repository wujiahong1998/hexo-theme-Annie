/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","fe2a4d8ba919078a8c78e1d200f31fa7"],["/archives/2019/03/index.html","1a5833d18f0b73951cd2f2c4233d210c"],["/archives/2019/04/index.html","5868689958ff4db9630c3a6af229e20c"],["/archives/2019/05/index.html","94b3048c7ac49bc9a5a32feecb433a6a"],["/archives/2019/index.html","ccdd63dce117aa7afe9e17a727fce8d4"],["/archives/2020/01/index.html","32aeca3e58ab943898761eaa525fb51b"],["/archives/2020/02/index.html","537a00c317d217aecd79563bbc6e75b7"],["/archives/2020/index.html","118b53fe56ba4d8d739d3dacdf9cfd8d"],["/archives/2020/page/2/index.html","160d5a6216f8717362d5d49cbfd93382"],["/archives/index.html","ff4d697a67ade51db209c10c3056d14f"],["/archives/page/2/index.html","8102966f0872bbb863fb9bb0e3bacc79"],["/archives/page/3/index.html","735696f0586bcc6c0e15c36ab68da4bf"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","c63dead81353c9d4d103a0b557d13a55"],["/css/main.css","84b69d066dff614da22db9883a9fdbbf"],["/dist/css/share.min.css","825a133255045eca7fe772e08c9ab483"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/myLoading.gif","729a32d73078660ba138e44458cdb26d"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","48ef8698f73cad8054379e10b7600962"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","c7ad203735ffda7e73985e77aae38327"],["/js/src/algolia-search.js","99785c579ce787300c363785e2cf6de0"],["/js/src/bootstrap.js","73fba2a60e1254fd7f54556da11c9629"],["/js/src/canvas-dance-time.js","b0b0f4dce4c17ff52c118807bed2e42d"],["/js/src/clipboard-use.js","930fe0daa689aec4ef629954953271a3"],["/js/src/clipboard.js","8ccb161f32f3703b276b790ef45d7c53"],["/js/src/crash_cheat.js","17498f271bf9f44a34b342ba66cc12c1"],["/js/src/exturl.js","ce4f9d30abbbfc6646a75de6652d7c8a"],["/js/src/hook-duoshuo.js","454b58f5d30a4b96952c28b5ce6a97c5"],["/js/src/instantclick.js","e4f9e7676c3eb745b1f2d78e44246f84"],["/js/src/js.cookie.js","515e03823a5bced0bb82600c398d5367"],["/js/src/linkcard.js","0b5295c46987cd92364930dc40d9acdf"],["/js/src/love.js","e1c530bbce88e16d916db24b399fa219"],["/js/src/motion.js","e7c4de511612c0803e9d07667c6527d7"],["/js/src/post-details.js","00084eea86757f9eea80baca31ac12b9"],["/js/src/schemes/pisces.js","7621660730261dc3eae69e29e01562f1"],["/js/src/scroll-cookie.js","7cfed6e6c3a6c2b4abd7721b3d30c3ec"],["/js/src/scrollspy.js","dba77489811e036556eb810d264a76a8"],["/js/src/utils.js","6f68371fecd48459d82e26b785296796"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","a79cea54f1b5192af6f9de27d2f7cebd"],["/lib/Han/dist/han.js","7145c5f46914342c034a3bde405a6203"],["/lib/Han/dist/han.min.css","6f5e1e6406cba0d38879624fa457325b"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","a390939cf10a391ffd852d31e1f3f63d"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4c102e7e201b1716f04c2c9bc31ac178"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","9e370cb58c4bcbf5e870bc96bd88ecd2"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c3893d137becfbc2366cc7d04835688c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2f5b30323c6a708f9b246f61cfb01a9e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","11c736f47996c863d76f528e15416bcb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d9c4a6fcbb376e08e0d931ba8ae0bea6"],["/lib/fancybox/source/jquery.fancybox.css","7df06ce2aaa01a07e91999d31bc62be9"],["/lib/fancybox/source/jquery.fancybox.js","dedcd7f7148961565d4d142f7ee63c6c"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","872138f50c7435d0b608645a7de35ce6"],["/lib/fastclick/lib/fastclick.js","61645cf5d2fab3e71e1046a77fdcd4af"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","92bd3a68542c0e9f3a9a206fee08301c"],["/lib/font-awesome/css/font-awesome.min.css","92bd3a68542c0e9f3a9a206fee08301c"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","daa4b022503c4d7b6c9e460f3ad0b558"],["/lib/jquery_lazyload/README.html","d757a6c79d54c990178fde3a164b46ab"],["/lib/jquery_lazyload/jquery.lazyload.js","6ffcc43d9025d510acd54b9bc7c7ea3c"],["/lib/jquery_lazyload/jquery.scrollstop.js","7376d526feec8e0506338ac065ac8f5c"],["/lib/needsharebutton/README.html","2fa5edf4e141c8041cac98da398e8173"],["/lib/needsharebutton/needsharebutton.css","e6e1fb51ce3db3a14aaf79bc03a9eeeb"],["/lib/needsharebutton/needsharebutton.js","64ddcb671d2f6d2cfd0115549f0f5d01"],["/lib/pace/pace-theme-barber-shop.min.css","3a1c9af1ceb3cccd881d372fa4781120"],["/lib/pace/pace-theme-big-counter.min.css","95dd83b9193bf771811fd54aa24c0bea"],["/lib/pace/pace-theme-bounce.min.css","751264b95d5107f85d8a82985875b2df"],["/lib/pace/pace-theme-center-atom.min.css","5d6b0fa3598ff2e6f13d0ccdf0c4f347"],["/lib/pace/pace-theme-center-circle.min.css","bde92138be60242fe01d11075661c58c"],["/lib/pace/pace-theme-center-radar.min.css","e810539ee0ebb2239bda3fe0acb975f5"],["/lib/pace/pace-theme-center-simple.min.css","2d2de5a6bc6e7761a956f3c02af42576"],["/lib/pace/pace-theme-corner-indicator.min.css","441b46129a94942fa1f8b27df58db747"],["/lib/pace/pace-theme-fill-left.min.css","7853bd49d148d8c2b3d90baa1662aa30"],["/lib/pace/pace-theme-flash.min.css","04f1e0e955e5d0f87096f79420a22b11"],["/lib/pace/pace-theme-loading-bar.min.css","60a64762577795baa9c21395af9e70db"],["/lib/pace/pace-theme-mac-osx.min.css","3b56a817639830063e290e731c902a53"],["/lib/pace/pace-theme-minimal.min.css","944c5fda23572ddc7463542734ab5d2a"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4d1991c4e0c5026ac0be6d484fa70b4c"],["/lib/velocity/velocity.js","40126e8c6d4fe5817a9efb81d31a6bb4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bdb392d94c3927e6ebd5a6e28f84ea9e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","162d19dec96014b703100d22a2f29213"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","dbca5166093b6bbaa36a324ea21c3d52"],["/page/3/index.html","5050f158a07e8ab384a9b782f75ec698"],["/posts/189af858.html","cd0ae78317c70ec7a90ba4eddb04339f"],["/posts/2815b369.html","f5a73f8ad29dc4c1f6cec5ed4163957e"],["/posts/2e84c07.html","2feb05169a74188dce48ec18923296c4"],["/posts/5c9fc645.html","b978690c6a7178c0ee359b9b7ecccfb1"],["/posts/5d834ab4.html","9648fa6d204d3d8763975bb9db0c0cce"],["/posts/5e3e2bfc.html","37ba3f19748e7b16c32ee8f93aed0821"],["/posts/6486ae93.html","f400c53d01c46222b55a1c6f12fa477d"],["/posts/66cd7b15.html","368bbeea7842d6fb5870070b0bcac9e6"],["/posts/7d23856.html","55d6d428c47af4f3199d1242dde484ef"],["/posts/7f3bcd7f.html","b800417cb2863fb6c4288c7ec8f0ec32"],["/posts/94271a3a.html","335b040e5f0109a5a8e34944dbcb0d4f"],["/posts/9be60828.html","4e52eb414699beaa340cc89d25856fa7"],["/posts/a1751c09.html","6e97348bbcf40e68c65364bf71c66799"],["/posts/a625b86.html","8791304695b1b680585b56a76c403ab6"],["/posts/a7c21fc4.html","3899bc307b381bd43a8b6c520bc63584"],["/posts/a99288f7.html","f3898d77244149aabbd578bafac5fe04"],["/posts/b0289f51.html","2a7f8935f940bb31113905afd89aa501"],["/posts/c9786415.html","963e14ec3d582346636396b688a027f9"],["/posts/d52d06dc.html","42666880a37a4db5b31ada4f39d3273c"],["/posts/ded73fd3.html","a8f670ea9e7400795546ad16c047a45a"],["/posts/fad863f5.html","426bef46c28cb36cf47f1fb562feaef8"],["/sharejs/css/share.min.css","60de39850860df8ac7476c36efe9e8f3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","a2432da78ea933b9247a398e74704434"],["/tags/Ajax/index.html","2a130c84ddba2b86d1da9c24fe9f21ba"],["/tags/C/index.html","acc58ff6152a1043fcddd8b222b034fd"],["/tags/HEXO/index.html","6dd3aac57c247e87022c4ceff7001349"],["/tags/Life/index.html","2806a5924ce3e32f019fd5736bf310a3"],["/tags/Linux/index.html","1d0d14f0292862a6b281ae7477f8679b"],["/tags/MinGW/index.html","6814e04bc6a36a8f779f53c6ee9a4e43"],["/tags/Selenium/index.html","47d9ec99ffc4d82f5ebf2b8a706ea4e4"],["/tags/Windows/index.html","c1cb3ad018151487af77954c45d72b8e"],["/tags/github/index.html","3446a8361d9373d20292464756ef7105"],["/tags/index.html","012c18033940223a8f5a7a9789522df4"],["/tags/markdown/index.html","542fecaf651486ef9e49a85bba1f7a66"],["/tags/pathon/index.html","fb31e156be080c3ea192257dd3362174"],["/tags/python/index.html","91e624ba2a893874f5281badbe81a3db"],["/tags/re/index.html","c12f7448ce52f61e1e410143785ff82d"],["/tags/requests/index.html","22d5d8946c27ffb6d774d2c141062acf"],["/tags/图床/index.html","2eb1f5ee8c668bd9f4d5838184507973"],["/tags/学习/index.html","ccc9f6b29ee8b096d4261cb50837f076"],["/tags/排版/index.html","627ed6a35a9d147352ac54f438a14b62"],["/tags/正则表达式/index.html","90d9b7cfffd04bb25feba29b6f938811"],["/tags/爬虫/index.html","134e48d53d167c08b1676c5baff41618"],["/tags/编译/index.html","f9b460ec9001459233ae9b3202ddc37f"],["/tags/配置/index.html","1ceee2babfb4d8d63728af5c2bbc09e7"]];
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
