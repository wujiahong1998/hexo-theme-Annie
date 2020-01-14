/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","58e3a2891a0d007b668173c24ce05eed"],["/2019/03/27/Hexo博客优化/index.html","3c01d0cf90d69d739b80bea3851e6a13"],["/2019/03/27/Markdown的基本操作/index.html","242e720e445939250df843646839a614"],["/2019/03/27/Seconday/index.html","3f50ed6fe0d630187b56f435fa56b97e"],["/2019/03/31/学生会个人总结/index.html","5f4b76a369d16aafbfd42f53d7a8a403"],["/2019/04/02/分治法/index.html","58d76cbce7476f3c84a924eefc80a089"],["/2019/04/04/HEXO博客优化（一）/index.html","d1aa03e0cb177bc5ec6bd09082737489"],["/2019/04/08/Linux-一/index.html","3da3f1bd3cf9f5323f0e61faa5743f58"],["/2019/04/19/C程序的编译过程/index.html","02ad3f5cb96c3b7e88f681d780998363"],["/2019/05/24/MechineLearning/index.html","ffa3869cfefc39e867e3a7c104bc542f"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","25c88902a3ba3978e875b40bdd4d17e4"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/HomeLink/index.html","a347ea53f5f628e65b3094be72245590"],["/about/index.html","ed10b3b0b14f25066c2a54ad71b0b71e"],["/archives/2019/03/index.html","282597f9aa07d155c67e906864e9a14f"],["/archives/2019/04/index.html","0b7130864819f22130850bd0d4451ab8"],["/archives/2019/05/index.html","a8812d7009831193d772192685d3d5d8"],["/archives/2019/index.html","61750f7d6b8e8ae5e9f6c9c785681bc9"],["/archives/2020/01/index.html","0da0eca8bcfed76957b73ad7a8676680"],["/archives/2020/index.html","9c5874fbd02329766aa789c25c743e1d"],["/archives/index.html","cada702b5c9068952e18ee342694040a"],["/archives/page/2/index.html","f98e3a1dab36dac2c44e2a5b3257e10c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","eb712353fe477861fb3f0195698ccc2d"],["/css/main.css","24d831dbd80d504ae2ea0b8d13ddc897"],["/dist/css/share.min.css","8a2828740c74a1d56141f98d881816a3"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","0bd0e981a772444ec944671a5d89cbc9"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","03f5e209e1fd1282bc7601d6667abe7a"],["/js/src/algolia-search.js","e982e24612e43c2f95338fc46c6fc526"],["/js/src/bootstrap.js","3381ca5a67714f49a93ee269d5fa91ec"],["/js/src/canvas-dance-time.js","b8f343665232e53d8a598b22ea20db77"],["/js/src/clipboard-use.js","481117f95ee4ace1227d1a036b34799a"],["/js/src/clipboard.js","a98e5c502924a8b1d766a92f46436b14"],["/js/src/crash_cheat.js","7541aa98552056cb4a34690dd37143b1"],["/js/src/exturl.js","dbe72aa3888c19998a8977c2cbd11326"],["/js/src/hook-duoshuo.js","311b6e81ea33dcca56f0a61ef04212ca"],["/js/src/js.cookie.js","fcb494b1a2e997f2b18cec1b55e0e03b"],["/js/src/linkcard.js","f63fccab8b36fbc417faa3e1d72cce9a"],["/js/src/love.js","650c72dda6c6ab945e6068f8afc2b2a5"],["/js/src/motion.js","69ef0acb6c573ce96c3824c632a0804e"],["/js/src/post-details.js","e3358cb94aa415bb34ae34b3a4aa021d"],["/js/src/schemes/pisces.js","8b569ec0222607477e1f66c1910b5f1b"],["/js/src/scroll-cookie.js","bf17b8621d5fed8110f4f41e5d7f145a"],["/js/src/scrollspy.js","f8f93ede6bc0f0ac35ec5057211fd1e0"],["/js/src/utils.js","eceeec04479228c331b4e9c2cc63029f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c9dd2288d832c40f1061a4b2f98345fe"],["/lib/Han/dist/han.js","cf0279c1194757f09c63e34fc643fd7e"],["/lib/Han/dist/han.min.css","2445213e59d8312e2dfdfccdc99fe147"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","e5426f7c0a296f7d274999db4ad37655"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","290361b2608fbed9feb03fd606e94758"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","680c77c7455b83ca8b00ca5edc7a5844"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9ee96b0330f395570c5567e5f03a2c53"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","312878e904534baaaafc263a9f0e27f6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b1e2da398aa0b88fc29af69ae1278660"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","35a0c2a2e914cbdf7ad196c0ccc3e685"],["/lib/fancybox/source/jquery.fancybox.css","c57a0f7a27b71b917f04a0a8b8a526cb"],["/lib/fancybox/source/jquery.fancybox.js","95d6512d92d619736daed35916589a13"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","c8edc1e80e247ba5c812c0aa36791dee"],["/lib/fastclick/lib/fastclick.js","8b413861a665cc283d991e3f4485f867"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","eef972d66aa2503608cbdab66e65040d"],["/lib/font-awesome/css/font-awesome.min.css","eef972d66aa2503608cbdab66e65040d"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","617adcc53b30471ac61697e644896aad"],["/lib/jquery_lazyload/README.html","3ceb398b99547d5b1f665053b84eb40a"],["/lib/jquery_lazyload/jquery.lazyload.js","247dfe4c9126ab6f93e23d43645e881d"],["/lib/jquery_lazyload/jquery.scrollstop.js","bb156a7cce01a0cd85d8a139ee737e4e"],["/lib/needsharebutton/README.html","6007a89e5959280deb0793450a5cdfd4"],["/lib/needsharebutton/needsharebutton.css","3fadae61a218793e7d7665bf390ce0ce"],["/lib/needsharebutton/needsharebutton.js","e448971bf08d842d96ca8b027e4e2e29"],["/lib/pace/pace-theme-barber-shop.min.css","33ca8160883a7fb1875f3b8cc308252c"],["/lib/pace/pace-theme-big-counter.min.css","0f3f375d727ac903742139fc0998893c"],["/lib/pace/pace-theme-bounce.min.css","1c47b68eeaf3bbebddda46df5f6b8188"],["/lib/pace/pace-theme-center-atom.min.css","9cfff08f15c3365e4da4c7f51f880d7f"],["/lib/pace/pace-theme-center-circle.min.css","5af5f4987a74ac3adc410d311f82b46d"],["/lib/pace/pace-theme-center-radar.min.css","a6b20c847e8aeea7db1d91030ac5d271"],["/lib/pace/pace-theme-center-simple.min.css","fff69c6c3a3dec905737bd6f7a5fdfb6"],["/lib/pace/pace-theme-corner-indicator.min.css","1d4d3a45174058e02f3b7ded6b581f8d"],["/lib/pace/pace-theme-fill-left.min.css","bdb18d86acbe6a2e8588214c2f36f741"],["/lib/pace/pace-theme-flash.min.css","2cf6732fe56bfb626799e6ad22b92188"],["/lib/pace/pace-theme-loading-bar.min.css","994e7beaab6d26c1a5821c17e4bbb3a6"],["/lib/pace/pace-theme-mac-osx.min.css","358b7ab700441aa1f23a2161fdd0973b"],["/lib/pace/pace-theme-minimal.min.css","875d01b85b9875410135432fb5ad6fcb"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","25b5b14f4e02b4497131bb8d9c8c21d7"],["/lib/velocity/velocity.js","e0533eb2013a0a998141dae13fcc01ee"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","48fa3e826c10ef8c50c5c1abb4b76d52"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","fa80d137a1964e1a0d2f396c53b324a2"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","d56c83cab21ef89e0c4555bae16c6f5d"],["/sharejs/css/share.min.css","86a39bd462a7591d975c7d2113a45ee0"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","71ef9cd0d56bf29c920d087aaa7393e2"],["/tags/C/index.html","17da7f18f3f1ebf0ec16018b907d9190"],["/tags/HEXO/index.html","85b3b3cc90c99886dd2aa48cb0eb8715"],["/tags/Life/index.html","cf7ef005b0e8c852f961d9f58e0435cd"],["/tags/Linux/index.html","4bd493596971c2f06b2377884834e3bf"],["/tags/index.html","474ca516ba191f3471adbd91ed18054c"],["/tags/学习/index.html","08cc997342dd00a5e8686c383c6af183"]];
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
