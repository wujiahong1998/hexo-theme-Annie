/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/HomeLink/index.html","f1c4841956ba94586ea519ec618f42f1"],["/about/index.html","6b7df7f1603916ac177d6ee893cb6df2"],["/archives/2019/03/index.html","91a5bee831f301afb49b0f6257ae83df"],["/archives/2019/04/index.html","9006f2bcf8d6a8cf5d2a0dbc716b2677"],["/archives/2019/05/index.html","16982ba309ef9fea103810df9e9e1a17"],["/archives/2019/06/index.html","80cf15a1dd2bd00aa175896433140c39"],["/archives/2019/index.html","c81b1074718e3ad385f0a052d28eef9f"],["/archives/2019/page/2/index.html","0442e1ace21764a9458746d2a908f691"],["/archives/2020/01/index.html","5ce0d76551bea915452cd6fb7fb3063d"],["/archives/2020/index.html","ef3c1cee4e7d1419b170f56d5052bbff"],["/archives/index.html","cf27843a8f82a106c755dc93fa7178da"],["/archives/page/2/index.html","738d184fa178193358022d4408542a1a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","4fa5f8fa249d15f483f196320c0d7c36"],["/css/main.css","c551785a76d5c85d976f88dae5d1566f"],["/dist/css/share.min.css","50313306a12f444e3b57e5147521a416"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","30894e142f92d1b640c9c73b0fc686fe"],["/js/src/Valine.min.js","ed37073d439ebf4c5a657edbc5fc74a9"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","8e49e9abfd6a2bad3cb558d6db2ac1a5"],["/js/src/algolia-search.js","74583fc860880f6fa7ff76676b1fd162"],["/js/src/bootstrap.js","029ab12adeb0f2bab304d59dfe6daa9a"],["/js/src/canvas-dance-time.js","efec7f2cfba8c2e22427e2607f987bc0"],["/js/src/clipboard-use.js","abc22f0fd94bb1c97988795d367b8656"],["/js/src/clipboard.js","ced562161ef3a8676ea5bf9f8226cef3"],["/js/src/crash_cheat.js","f0af0b6db568805d0614df385a2ffb11"],["/js/src/exturl.js","d4ee0c57754832592f7ad8ea50978228"],["/js/src/hook-duoshuo.js","9719cdc8aee46e3c4c259e33d38b7fe9"],["/js/src/js.cookie.js","382b282d316487664ebb4cb77a1d9dad"],["/js/src/linkcard.js","91e6f1a1f350ef9e9f2214e6259e8c3e"],["/js/src/love.js","cf040f5b05998236104871397ca4c778"],["/js/src/motion.js","4d9311c9254325a3b7c5ce551c7482c4"],["/js/src/post-details.js","bfc4c6bc38a2c2cdbbe40a19f57b6378"],["/js/src/schemes/pisces.js","a56a0b9aefd40ab386a2f7d370ec6c9e"],["/js/src/scroll-cookie.js","4b317454b74dc1647299aeeb60d05bbb"],["/js/src/scrollspy.js","e3911a28be69b6eac078d7e85f330775"],["/js/src/utils.js","81a34712f95b91857eaef14d5b921eb5"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","96dbfc1dc44b1ef7fce2faff2b521859"],["/lib/Han/dist/han.js","e1ea0dec147d21ea5bc27c694f50e08f"],["/lib/Han/dist/han.min.css","c072e8d3f58079775f615d7a97daf7b5"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","0828cb80cc977b1ce3d5489caed2b110"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","06e460f5f195fae97d245e31e80b1b8a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","79b5a6a015924d717cf3f8f1b0b87ec3"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b5ecdd1e2ce0118d3d931b2ad11c4e01"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4d6f27bc2c016efca1ed906887146fa3"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c61341121e5a698dd972d019176f3a32"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c108afdc9775352c8735330ca267af84"],["/lib/fancybox/source/jquery.fancybox.css","245254173460c9e8f3885c69c40b0cc9"],["/lib/fancybox/source/jquery.fancybox.js","3cc50acc0bfe5f1588b3594a0f85512a"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","74d8a7a25b146664707ba2504bd4cfea"],["/lib/fastclick/lib/fastclick.js","6fa447cd6ea638372e75f82272749ecd"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","0cc549148f1ebda38f947d74f96163f4"],["/lib/font-awesome/css/font-awesome.min.css","29337e92bbffbf80ef38f00a377f36ed"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","f4fbbb17060e4d009abea1afe948b103"],["/lib/jquery_lazyload/README.html","8dcc0615f7c3987e535910501d2e550b"],["/lib/jquery_lazyload/jquery.lazyload.js","015be1aa7c2f866d40160c06103cf4ed"],["/lib/jquery_lazyload/jquery.scrollstop.js","0a18e39677142f506d52249df83e2a57"],["/lib/needsharebutton/README.html","46e0d9e49528918f71bb8b534692db92"],["/lib/needsharebutton/needsharebutton.css","45701ad941c282a56d2cba516699615e"],["/lib/needsharebutton/needsharebutton.js","b84f9702f12bc98f87b06b75196d1f88"],["/lib/pace/pace-theme-barber-shop.min.css","75bbe1da06caed2130df24a1adf97971"],["/lib/pace/pace-theme-big-counter.min.css","144b5b916d78ed3ab7e1d01a23a197a6"],["/lib/pace/pace-theme-bounce.min.css","2e8ca0a2bfc042ef603566203619dbd3"],["/lib/pace/pace-theme-center-atom.min.css","abf34f35286a4dbe19a3f5ab7814a22e"],["/lib/pace/pace-theme-center-circle.min.css","cbfc0056839d851093badc6bac4a4b03"],["/lib/pace/pace-theme-center-radar.min.css","65bcb724494ecac84dc4673abcbd4b99"],["/lib/pace/pace-theme-center-simple.min.css","b2336b33547d4ce5fc5627dad5ce551c"],["/lib/pace/pace-theme-corner-indicator.min.css","9da1f8a9b27ac999b8c2e47c5f0871bf"],["/lib/pace/pace-theme-fill-left.min.css","0e0683ac4de1ecd5abeaa012d39ce6ca"],["/lib/pace/pace-theme-flash.min.css","d7e943e1dd0383fbfd4e237542e7a184"],["/lib/pace/pace-theme-loading-bar.min.css","326b0f47d270df27911fc30a74dd5ca3"],["/lib/pace/pace-theme-mac-osx.min.css","5641e6961f3e16e050cfccbb71c4a533"],["/lib/pace/pace-theme-minimal.min.css","4ddc9243fe5b49e6ba29cbd10b982871"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d2a2b851980d2df5ec356ac6dbca01c3"],["/lib/velocity/velocity.js","ae0131852e761c7c550571240ffc0c6e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","6a5238bd00ddb745b23c1c30831afc73"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","4d6b622fc3b6737590827d9874b3454f"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","31cca12d2c17a0aebe6eec903e5d3a92"],["/posts/10b67314.html","3645c16d91cadcfc3a4f4ecc6a32ff01"],["/posts/189af858.html","a08b67230644dc1187d6c88115da87ee"],["/posts/189af858/failure.png","58307e81ffdff49c962a44696d742d13"],["/posts/189af858/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/posts/189af858/fork.png","268c9222930a615e0bfd334ec037cede"],["/posts/189af858/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/posts/189af858/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/posts/189af858/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/posts/189af858/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/posts/189af858/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/posts/189af858/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/posts/189af858/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/posts/189af858/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/posts/189af858/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/posts/189af858/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/posts/189af858/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/posts/189af858/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/posts/189af858/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/posts/189af858/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/posts/3610a686.html","89af653f8715fb5c5c14996d5f5ab239"],["/posts/3610a686/dark.jpg","dda59940afb99346f0968d998897bafb"],["/posts/3610a686/git_account.png","45da9260edac9c4069393b98904f5015"],["/posts/554a01a3.html","19ee9ecb220b4e004e72d0b30cbada40"],["/posts/5e3e2bfc.html","e0bb2208cbc0819e3377e16e74894aab"],["/posts/7d23856.html","2a497fabc2d60c4741e88040806a7c47"],["/posts/7f3bcd7f.html","3fbc3f75d0d557bf2ce5f356bfae5760"],["/posts/84163328.html","d3bd042ba8f422d53f35758677ed82ab"],["/posts/94271a3a.html","ce058bf1a94e2f13b9e313a25586e072"],["/posts/95eebd6.html","a00c5392c9573b28e4f3ed236ac6b5e7"],["/posts/9be60828.html","b6c83a44a79d3fe5a21d802bee725f5b"],["/posts/a1751c09.html","9a7dea5d76f12b8343b83546913d016e"],["/posts/a625b86.html","2e49a264048ccddad147b44ce89b4606"],["/posts/a99288f7.html","969a011a4497e59fe9ef9e7dc59471ee"],["/posts/b0289f51.html","3e3a333f71a583998a2d0daf9ff11303"],["/posts/d52d06dc.html","f313a2fa72f828d2348abc5818287ae0"],["/posts/d87f7e0c.html","925aa5ed6347cecf349bddabe5676797"],["/sharejs/css/share.min.css","9a837471cdcaf218ead2199e7fc5216a"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","bfaeeba7e535f6727faef81177d89fdf"],["/tags/C/index.html","b5b9cc8462e3d614123c5f6512043d38"],["/tags/HEXO/index.html","0b4d85898f21846b4ddb77115990759f"],["/tags/Life/index.html","1e1e268a5c7d7567a43f15eabeddc980"],["/tags/Linux/index.html","c3d1854e13928de6aac96fe319f9f1ca"],["/tags/index.html","ee8182e1f22d5f47e3a1d9574ed4f4e2"],["/tags/test/index.html","392ebadf54fe18cd68b02c7c1104e9a9"],["/tags/学习/index.html","341f7f99e4c52f8a1d6c4109f9b995b5"]];
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
