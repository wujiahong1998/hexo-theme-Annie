/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6df89514f427c65d39ce5a10337eb99b"],["/archives/2019/03/index.html","9dfa8c0b4992ce58341db21f287589b5"],["/archives/2019/04/index.html","768f0eea2aa099bc17bdfe69d6e53293"],["/archives/2019/05/index.html","ae3b4c0383d2d37b3d254af65c203eec"],["/archives/2019/index.html","f7e61d7c0feaf12857ccfd4dee406e4b"],["/archives/2020/01/index.html","8d5ea4d708712c93183873f8417add41"],["/archives/2020/02/index.html","cd0fdf4407ac320808fbfde4b4c58aa4"],["/archives/2020/index.html","f12bbea238056db53322d11faefa797f"],["/archives/2020/page/2/index.html","a13cc4cf801ab10ea8e66ac9cb634b85"],["/archives/index.html","bd6286fd80e38638613de7d55f2e1f05"],["/archives/page/2/index.html","a738d2a924ee1c49c6a1237687f96ea2"],["/archives/page/3/index.html","29097cee072e24eeb145d000405899c3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","8d5d343c48747c97b7b8e9b8129f4931"],["/css/main.css","dd165d347f71b7c6f258d35d52cee47b"],["/dist/css/share.min.css","4383604122ad3f6b25503047554a1e3b"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/myLoading.gif","729a32d73078660ba138e44458cdb26d"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","9e22ea634f247428584e0a0b1d9d8611"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","d5091a16c739b44a9317a95b13cc7fee"],["/js/src/algolia-search.js","7dc6a1a5ea338018208bf689e174d743"],["/js/src/bootstrap.js","63e6297d4152eca089e4469af2505e1f"],["/js/src/canvas-dance-time.js","e57a0a39b29d582000126643d6e62dfa"],["/js/src/clipboard-use.js","3901a9dcef6d49618de4bfdc351ce77c"],["/js/src/clipboard.js","b64beb21d908658e14966dba136f4dd6"],["/js/src/crash_cheat.js","4c3277bea4aa01821075fd5224160e22"],["/js/src/exturl.js","05e433fe52abdb9ec075af913036cb4c"],["/js/src/hook-duoshuo.js","b272951647810922ad2de0ed5838a238"],["/js/src/instantclick.js","1a755a8a10d7569d83424537f3fa7157"],["/js/src/js.cookie.js","dd242a60fc34a62fb0e699bf42055e4b"],["/js/src/linkcard.js","a60194d915fa2f5a3db86e0f550f130b"],["/js/src/love.js","7feda20d409ee589544aa649eca76dc8"],["/js/src/motion.js","1e9381c363973ae460567d76b9dbe6ab"],["/js/src/post-details.js","5eaca28706433b04d174bf6ceae9bde4"],["/js/src/schemes/pisces.js","d6c6053e0e89d4beeb777bc58c64927c"],["/js/src/scroll-cookie.js","51159a9af80c85cd91e274603e309943"],["/js/src/scrollspy.js","ab0a751a7a8bad1edca3aaaf727c698d"],["/js/src/utils.js","f6ec3ab0fd8c3bda5a88116681fc7dce"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f39dc2b50008536f7c261926ef0e6c84"],["/lib/Han/dist/han.js","5c7086e2078ca3de640518cbd2c48aa8"],["/lib/Han/dist/han.min.css","3556e15921240269f7d8b5b24bf65169"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","a583c6169bf714cc7bfe9eea7cc32097"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0375cf82ebfd9dc998f242f943a60ad1"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","766214459edcc6a8066148f658afa6b3"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","8e4d5bc1b626178a9048cf87881ba9ec"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","42df8ba76236253fc88d2aa6c2cd2900"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1441d3e17782410bf9e017ca5c12822e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","250e4623cf7ae376f97c251aeb87fd37"],["/lib/fancybox/source/jquery.fancybox.css","31cd997a31fe8f66e9bfd3a73416a64c"],["/lib/fancybox/source/jquery.fancybox.js","f5dd0907f8d5f02e9da9a47b34b68e9c"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","8a83c89542060ef07f174322adbd1f8f"],["/lib/fastclick/lib/fastclick.js","a00092320cf355c7052dcba07ed75ced"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","1f4a4a37ff4985d0f5389f6c7658c5ec"],["/lib/font-awesome/css/font-awesome.min.css","1f4a4a37ff4985d0f5389f6c7658c5ec"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","58f58d51081c1ea997ef0e2e7a029d99"],["/lib/jquery_lazyload/README.html","9011b3a09168ec72cc16968fd8033f2d"],["/lib/jquery_lazyload/jquery.lazyload.js","a30d60bef02b347c21a5b8b20ed74ab9"],["/lib/jquery_lazyload/jquery.scrollstop.js","d321e4123851b6a215220d560b9cad00"],["/lib/needsharebutton/README.html","c483ebc82a375ff60cc259c05b247e3b"],["/lib/needsharebutton/needsharebutton.css","64779312c5650889344d0e2d7126c053"],["/lib/needsharebutton/needsharebutton.js","1106e099accb0263c85cd6865cbb5d36"],["/lib/pace/pace-theme-barber-shop.min.css","7deeb3b26115d5a3a45c19010e56dd1a"],["/lib/pace/pace-theme-big-counter.min.css","b6d2e96a0d193065bb33c953b6816876"],["/lib/pace/pace-theme-bounce.min.css","3e867fa76674ec68d204b218dc66d79e"],["/lib/pace/pace-theme-center-atom.min.css","c9e86a49d481e68f1c9da2682a904316"],["/lib/pace/pace-theme-center-circle.min.css","8a0bc005b280fa3cf4726be618cec445"],["/lib/pace/pace-theme-center-radar.min.css","675b11a94d47e48e5a51cdf8d6eab5c9"],["/lib/pace/pace-theme-center-simple.min.css","2f32acfd49825ca1685228c56a97c9df"],["/lib/pace/pace-theme-corner-indicator.min.css","7b074c0c438048812e30a0c728f318e9"],["/lib/pace/pace-theme-fill-left.min.css","cce8b277721f209b0cf16826877bab39"],["/lib/pace/pace-theme-flash.min.css","2e650309c0c7c40ce4676797878ac4da"],["/lib/pace/pace-theme-loading-bar.min.css","74ef9ee1a90f5250566e21877e06b7ba"],["/lib/pace/pace-theme-mac-osx.min.css","fc96e8216f3a612e1e399550164b676a"],["/lib/pace/pace-theme-minimal.min.css","01c80993ca5900716b7b3701b594293d"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b7eefb79d05fad893b0d0f8752ed1bf0"],["/lib/velocity/velocity.js","17a07f54d916ff68bf89e967433db9e4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a4cd61d6a757a8c161529e6e9a19e9ba"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","42b9251ab5bcc85e31fc806d441057f2"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","d30c938e03d87e5b195e14184b2e864f"],["/page/3/index.html","bc67b972b0c992e81c1e8958d55401ed"],["/posts/189af858.html","a07781ac890113d25d6dc9cde2561a64"],["/posts/2815b369.html","7bc59b97b21d34141dd5f9bbfabd5dde"],["/posts/2e84c07.html","76f62f84727fa626e4febd67ffa54c85"],["/posts/5c9fc645.html","2bd0d23eb325d121183811d1b51846db"],["/posts/5d834ab4.html","6edb78f22ad6d17add4cb3f8fdcf3a04"],["/posts/5e3e2bfc.html","1bdee6b6d99a24a0ae420cea65456f43"],["/posts/6486ae93.html","7297245ec11fafbaa260e213b3d5cbab"],["/posts/66cd7b15.html","2c8fefebcadcf8d286d1d430a4ae8aec"],["/posts/7d23856.html","6ce9bd1c68783904532bd9497a2ce52e"],["/posts/7f3bcd7f.html","ab80897e6b3f2de43827581a1a6871b1"],["/posts/94271a3a.html","84d5111b34d58171a1b4c153cd9b78af"],["/posts/9be60828.html","5f2c76be6dcddae3184fb22ea7a3f7f2"],["/posts/a1751c09.html","f830f27351cd5d1c3c9740d886fe71e0"],["/posts/a625b86.html","8dbeba36572c7b1faf9c09a0c722339a"],["/posts/a7c21fc4.html","64919edc7193cb2917ef3bf42e96278e"],["/posts/a99288f7.html","049acbdc5af9af60f0765db7a177b1f4"],["/posts/b0289f51.html","c65fc350da39762cb55d6560e25873ee"],["/posts/c9786415.html","b26875561737b0ea215515390374d855"],["/posts/d52d06dc.html","47f753241e124b6f82e9d601c882ce27"],["/posts/ded73fd3.html","5b6b9706f460743c226d879b876f2f5d"],["/posts/fad863f5.html","c01107e5b347505ab4820bfe4d4e2d2d"],["/sharejs/css/share.min.css","2c2fc5206fc81a209bd104ac6703f224"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","01c9c3d5c05342c420d2fd312eecce7b"],["/tags/Ajax/index.html","c1fb1c95cef6f93b58d131e329b6079e"],["/tags/C/index.html","eb06a689b5266416ba241a37d23e6dc7"],["/tags/HEXO/index.html","3ae0d36129ffbedf58611bc1d086fbee"],["/tags/Linux/index.html","7121093aaea9eef4b260db88e0b3122e"],["/tags/MinGW/index.html","1b458d9628cf26e8bad40cf365f21816"],["/tags/Selenium/index.html","f47d6898ed38b79b8a0ccec97495110d"],["/tags/Windows/index.html","7907a0d61c0b00dc7a80ca4b661ae1db"],["/tags/github/index.html","b8c15fd05352107690452fef1c1e2864"],["/tags/index.html","eafd00835630f7451a494f8caf24e576"],["/tags/life/index.html","133922df9795461d86466049f25130e4"],["/tags/markdown/index.html","5aeba3711c46793bd5c4c39fefe93703"],["/tags/pathon/index.html","927daa244d025791d1a1a73338587b50"],["/tags/python/index.html","5669dc4e035c78679c09008bae7ada46"],["/tags/re/index.html","2848829d791c10725ad4397f295b0735"],["/tags/requests/index.html","517d293501cc3e411ce36d477061e723"],["/tags/图床/index.html","73a556a1145857d9b8af8c8b9a947071"],["/tags/学习/index.html","4ee827eebf33e5ba73a1013480e50f9b"],["/tags/排版/index.html","0b8520f57f3846362b2014d940e5939f"],["/tags/正则表达式/index.html","cabf9b708f8b15d91d82e8c0723404d2"],["/tags/爬虫/index.html","4c7465a59657ee1d9c389fec47cc4009"],["/tags/编译/index.html","eb2fdd81a1261be9ebc2e0b426336929"],["/tags/配置/index.html","598f3200a20c4175fdb2f2536c9169c3"]];
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
