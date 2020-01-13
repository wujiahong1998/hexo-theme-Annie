/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/HomeLink/index.html","a43b56514e536926ccee48a96815b29d"],["/about/index.html","04f9f1c8c9a19d7354361a231f4ef099"],["/archives/2019/03/index.html","21052a3895c3e0283774f1f50f2a7d5e"],["/archives/2019/04/index.html","6da908a03265023a973ce75bc78adbf4"],["/archives/2019/05/index.html","867d234bc341aa6143d36d4e95ac4cf6"],["/archives/2019/06/index.html","be6a208f191aba7ef9ed7b8948aca030"],["/archives/2019/index.html","c6714c86aa49c01c4ba20984698caeb5"],["/archives/2019/page/2/index.html","942ec67d68be8412f3c9a52a5b566dfe"],["/archives/2020/01/index.html","c7268fd22428975347205b1a3d8efa49"],["/archives/2020/index.html","f55fcab887ab469eed27eafa4f233f64"],["/archives/index.html","41d5853a66438eb96680c07aef3f5d4a"],["/archives/page/2/index.html","74ce1a3d9f7bafb8b0a58ec91b5ddd0b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","571134c41b97b645cded24b0f7e45643"],["/css/main.css","305db7aac0ee41019889dbcfaa0f6f86"],["/dist/css/share.min.css","2cda0bc18a7f0b3cf96819030dce245a"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","004bd803cd487e77a4c629b1045a11d0"],["/js/src/Valine.min.js","ed37073d439ebf4c5a657edbc5fc74a9"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","3b2b39ef50a6f5d634252f0a59e0de56"],["/js/src/algolia-search.js","82d2c8538e82678cf449e2b0f773f47f"],["/js/src/bootstrap.js","b4bafa90a0bd8129f107c4fbf89c78d1"],["/js/src/canvas-dance-time.js","4d4a0a1294be43ea30047e4f0dfe44b1"],["/js/src/clipboard-use.js","201ea46275a5bc52767e6cafa1dae452"],["/js/src/clipboard.js","bd6f7b9b9e3a44803f29e8fd7b46aa1d"],["/js/src/crash_cheat.js","9c830e04e7e7ab5c8fde0ed65608857b"],["/js/src/exturl.js","0b24681fc954ea6fd0437f5693b6e593"],["/js/src/hook-duoshuo.js","c737353578e019489932e631c5890d01"],["/js/src/js.cookie.js","0b5ab46d9953e61f3194593b120d8c2f"],["/js/src/linkcard.js","ee48e60c35d474675c3100f0ddb6e4a1"],["/js/src/love.js","0382fb22dc3d54aa58f346c69d51b133"],["/js/src/motion.js","0a2be1e3c681d271c3e6c06b89ce077d"],["/js/src/post-details.js","67768474e77754baf136a8739a668eae"],["/js/src/schemes/pisces.js","3cebf6fe793829295e4077f48bb46427"],["/js/src/scroll-cookie.js","dbdc43d16f9c72800e0547875836a109"],["/js/src/scrollspy.js","6ffe7a27818b1ba5e9915024bbb0ebb6"],["/js/src/utils.js","b1a6aeec49a074267d7a248a85864fab"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","eda76b27198ee742f590aac5acc9c540"],["/lib/Han/dist/han.js","bb2f20a7384d5ebd6f1bce855c8c2215"],["/lib/Han/dist/han.min.css","98e5c55cb1e65bdd7d6227d2a607488e"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","03a842aa1d35bcf3f0849c680a5512de"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7a7082e2f55dd2b47621ef665927ab06"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","9a2e74578b7f727fc8e6ae7e33a4d070"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0e10298c4bd88c3e0ac6990c22309e3e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ea83182f039592d735b7320feee049f2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ad804abdf88db213d98611285d3ebfbd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9eeda411804dca7bbb7055425c786544"],["/lib/fancybox/source/jquery.fancybox.css","db5a6a459f4e2f3b81e15194a904f858"],["/lib/fancybox/source/jquery.fancybox.js","44b5b63f561fdff520bba60f795c5401"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","59ae396ac0b2e525430ccd097c5e4293"],["/lib/fastclick/lib/fastclick.js","d0ce0bded68420ed692208d0efbc6aa4"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2057a0a1228418d9557d10a3485eef80"],["/lib/font-awesome/css/font-awesome.min.css","2057a0a1228418d9557d10a3485eef80"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","4462d98e74bb6ea3e337ea0644abcb53"],["/lib/jquery_lazyload/README.html","4823b50090d306241acac6ddf78a93f6"],["/lib/jquery_lazyload/jquery.lazyload.js","d597cc18ecd65cb700230bd0c965af78"],["/lib/jquery_lazyload/jquery.scrollstop.js","79b5aff36509b727f33df19f7362718a"],["/lib/needsharebutton/README.html","fc195767dc9f69d9d78e716dd32e212e"],["/lib/needsharebutton/needsharebutton.css","9f175b9ec3242abc94c8a1dae1dd93ed"],["/lib/needsharebutton/needsharebutton.js","e5eb06cea8cce6d80a889b42a7efbc07"],["/lib/pace/pace-theme-barber-shop.min.css","119f46efdd7f84d021126b223f9c77c2"],["/lib/pace/pace-theme-big-counter.min.css","8ef2e3640dce80ad5e24bbf4b3ff7039"],["/lib/pace/pace-theme-bounce.min.css","ae359b5b73238be3b32d42bcc0e72b1d"],["/lib/pace/pace-theme-center-atom.min.css","7cf3480b3e3448ba84878a6e9e653e7c"],["/lib/pace/pace-theme-center-circle.min.css","c1c2b76612d855af7d82dadbacaa7895"],["/lib/pace/pace-theme-center-radar.min.css","a85aa6f2eb7db0b5f5b2e971a6163fc1"],["/lib/pace/pace-theme-center-simple.min.css","28dd9bfea32a27f4eb32fe2b473d84ad"],["/lib/pace/pace-theme-corner-indicator.min.css","89144f41246941602c163baafcfad30a"],["/lib/pace/pace-theme-fill-left.min.css","ef3ad532bd821797dd4808c8b0821635"],["/lib/pace/pace-theme-flash.min.css","e9b5916b5a0c7decbba60d83f35c84cf"],["/lib/pace/pace-theme-loading-bar.min.css","ace118872ac441010d47dc9a13f3551f"],["/lib/pace/pace-theme-mac-osx.min.css","35e1ab2039150d215ee271e2f9b11982"],["/lib/pace/pace-theme-minimal.min.css","b11c0c92e0c3e457f358702b15642d35"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","34ddd30f1c6109f603e17344fe1598f7"],["/lib/velocity/velocity.js","69ee56905657a397d79f8c0d7f199c41"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","4f2797a8e9cf8c36fc692313e2e93552"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","c334798fa70fdaf92c62105bb232518e"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","417b163cdf9265dab40ea9d8c255b2c6"],["/posts/10b67314.html","1670a71600967963fa3dbeee4c0b280a"],["/posts/189af858.html","1ad228fed4dce5c4cf8831b77e0c9d58"],["/posts/189af858/failure.png","58307e81ffdff49c962a44696d742d13"],["/posts/189af858/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/posts/189af858/fork.png","268c9222930a615e0bfd334ec037cede"],["/posts/189af858/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/posts/189af858/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/posts/189af858/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/posts/189af858/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/posts/189af858/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/posts/189af858/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/posts/189af858/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/posts/189af858/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/posts/189af858/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/posts/189af858/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/posts/189af858/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/posts/189af858/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/posts/189af858/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/posts/3610a686.html","54bd05687053422f836e3c4c8e29ec43"],["/posts/3610a686/dark.jpg","dda59940afb99346f0968d998897bafb"],["/posts/3610a686/git_account.png","45da9260edac9c4069393b98904f5015"],["/posts/554a01a3.html","d9a028075c525855f530a7ef9790d37e"],["/posts/5e3e2bfc.html","5ff187440625fef99e3a3b03cc9d917e"],["/posts/7d23856.html","cb79b2052a8909b079b06aceb26a6551"],["/posts/7f3bcd7f.html","e7fb11dfe8c887808da071a46659f607"],["/posts/84163328.html","ee862744aee5b6a19ca6c8f32bc9c633"],["/posts/94271a3a.html","2ba4cc20a26c7040569eb8b0d6fb0585"],["/posts/95eebd6.html","d0fb8212be8a8861f816585d3b074772"],["/posts/9be60828.html","123fd29b8bec35edab9160e55f0b4b2d"],["/posts/a1751c09.html","5ec7b1c5a821189df3932a4ce9b13f8b"],["/posts/a625b86.html","319bcb4900813a6db5057d1f36d17513"],["/posts/a99288f7.html","47e6bdde3f1323b3a5eb12218f2aa0aa"],["/posts/b0289f51.html","771bdaad246ae862439535252d4ded9b"],["/posts/d52d06dc.html","c7223ab6f8c87aa437bd195a149c15ca"],["/posts/d87f7e0c.html","2323e5a965e04bf83fdba20b10e37255"],["/sharejs/css/share.min.css","7726911b84852e1cd34a0864f3e1bab1"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","a3a0d444cb35b112fdb3013d32ae59e6"],["/tags/C/index.html","11f6ec37da28ff048dd66ef99b5d56b4"],["/tags/HEXO/index.html","111ba9117e45933ebc01a7762225dab0"],["/tags/Linux/index.html","c8b5595b2325ad4851329a88326d5c5d"],["/tags/index.html","8c708e0eba385908318b0afee4e0f1ee"],["/tags/life/index.html","5f454247959cad98839ee4f8b21b30ff"],["/tags/test/index.html","2a1d9b5ce74f3902332adf91bd91b8e5"],["/tags/学习/index.html","a00e13a832a9bcdd0917683a5ed008ac"]];
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
