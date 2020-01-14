/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","8dd7af6d3310ba9ffe957a287c643d4d"],["/2019/03/27/Hexo博客优化/index.html","1f3c1f995e846e65d282d1282097d1ec"],["/2019/03/27/Markdown的基本操作/index.html","26b50e254329387815e2520d2bd50da6"],["/2019/03/27/Seconday/index.html","ccb5fd899c0879e9702a838fffd0b4c4"],["/2019/03/31/学生会个人总结/index.html","e86d3caefe6e1574146b8230bf225aa5"],["/2019/04/02/分治法/index.html","c3dd3335b8ab78410e29d7d3994c0c09"],["/2019/04/04/HEXO博客优化（一）/index.html","4f2cd67492ef35c2421098e0e09fa3e1"],["/2019/04/05/计算机伦理归纳/index.html","bb83f34d3339f425806bcdbb9b1cea04"],["/2019/04/08/Linux-一/index.html","d7cad82b4ac14659fbc8c8cc06910b59"],["/2019/04/19/C程序的编译过程/index.html","e520e6658ff89bcbd500626cfebca043"],["/2019/05/11/专业研究英语/index.html","c610e981b08c9ea6e40d3274ec914f02"],["/2019/05/18/动态规划/index.html","64bc96f1ac8aa048cde916c489889483"],["/2019/05/24/MechineLearning/index.html","a01318ce2a0fa1965c375a56d8e2f8ad"],["/2019/06/19/计算机网络理解/index.html","d901fbc9e41e4543fe41cbd08bb52e2d"],["/2020/01/11/hello/dark.jpg","dda59940afb99346f0968d998897bafb"],["/2020/01/11/hello/git_account.png","45da9260edac9c4069393b98904f5015"],["/2020/01/11/hello/index.html","2400e1aea3734e4306bb297ef0fd1519"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","f53700508b7be7745a1671c70a5919df"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/11/test/index.html","a98622f07f433ec5cd69879fe6b33b4d"],["/HomeLink/index.html","e42db508260f50ba7b2a452bf8bac6cf"],["/about/index.html","3c24cbbf6bef15b80edfb196ba2bc61f"],["/archives/2019/03/index.html","672984244158d1c875567e65b8d75a86"],["/archives/2019/04/index.html","3890dbb19d49f99116a69490cd5f45fd"],["/archives/2019/05/index.html","cab532165a753fb7bcde3b3fcb820daf"],["/archives/2019/06/index.html","a3366b9a7fde6d7f36f82463a2571958"],["/archives/2019/index.html","ddaef7079e07ada47bf633dea9b95e24"],["/archives/2019/page/2/index.html","2eb288638114afdc7598ef10f1c9c9b3"],["/archives/2020/01/index.html","49aa6e403e50bf9461231bfb6210505b"],["/archives/2020/index.html","b421e3e560a7cb30bc2f567e19ec09f9"],["/archives/index.html","30769815a72792e88f77d4b622bd15b6"],["/archives/page/2/index.html","80a130338837292b6d6d3c515041fae0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","d27665e11f8f37cc7b3e166f1cb60c7f"],["/css/main.css","f3af630155506cfc4737921fbb46a6f4"],["/dist/css/share.min.css","5db79b5371c267acc1f0cf55e0f30cc3"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","359a00b41fe798e8d890c35244a1f8c7"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","accf281544a6e5a9b1294b0f5f156408"],["/js/src/algolia-search.js","6c67167ab09556eaf7062673b2dfb2c8"],["/js/src/bootstrap.js","599595290e7a097ca097ce8eacfab924"],["/js/src/canvas-dance-time.js","a97d88aa261fd0921fc618b365719a01"],["/js/src/clipboard-use.js","68e93439162b99f42e7bbea41e6b36b2"],["/js/src/clipboard.js","e99926cc6a6f542c7524862fb447f69a"],["/js/src/crash_cheat.js","c917502adde6ded69ec52cf094af8362"],["/js/src/exturl.js","f10deedd7df9601ca1b88d5a89a75fa0"],["/js/src/hook-duoshuo.js","33a4cd8fa2b32747869a91875ae9df48"],["/js/src/js.cookie.js","10195d87e60b8b7f161e1d68bc5871cf"],["/js/src/linkcard.js","f3f7084f81c7162cf6c683c4a7176190"],["/js/src/love.js","f86e23e895334f9c5cb9c35b95b9fa6e"],["/js/src/motion.js","f3937e68c47cec60fc7309ec9ebef23b"],["/js/src/post-details.js","b40188895ac16f6c91c912b87382d63e"],["/js/src/schemes/pisces.js","527ef5333e733eb987c3959b92502fbf"],["/js/src/scroll-cookie.js","4528d3a23415367bcb25e63ea9db0fee"],["/js/src/scrollspy.js","c863f2ed02672ea8e612825e79be845b"],["/js/src/utils.js","98641488723eee1b35bdd86e833e32ba"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","266165bbb8df4ef4387622f5e502477c"],["/lib/Han/dist/han.js","cc9e53a511ddd0b326c808e967c63bad"],["/lib/Han/dist/han.min.css","36082203129c0c14335ec7d43c232d93"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","3630aa93bc5ffcbd08363b25dbf7fdfe"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","197974e4e76a0e23b40e5e3af839a3d9"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","8fdce3fea1d47bbf2f7d1eff89cc38bd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","791a00fb908ce2b9566de899a9010b38"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f7e7b6f0e823f11f0add5fceb33e508e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","56ea63342702bb6f75a508d51140b6cd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6336d9083df938c16595c10851f4dbd2"],["/lib/fancybox/source/jquery.fancybox.css","43902803bfcedccbbb561904517be83b"],["/lib/fancybox/source/jquery.fancybox.js","de437ef7bc1351c67c4a8a87a00c4891"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ce36d439ec92d2124549e644cdad85fd"],["/lib/fastclick/lib/fastclick.js","f31a6acb2f3a1800a3e468b606922f42"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a7f3eb27b97a5304f52c5dc8b17b7fba"],["/lib/font-awesome/css/font-awesome.min.css","a7f3eb27b97a5304f52c5dc8b17b7fba"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c12ec8d3ec0c902d758db31aeb9cfa38"],["/lib/jquery_lazyload/README.html","2d295a7631752c5f16d7cbc62e672248"],["/lib/jquery_lazyload/jquery.lazyload.js","cb137c551340c4fd5b3d311b18b3fdcc"],["/lib/jquery_lazyload/jquery.scrollstop.js","bafd6461603afe0e76267fa3c89f4988"],["/lib/needsharebutton/README.html","580468d76961fa6929ad1ede2da455f2"],["/lib/needsharebutton/needsharebutton.css","3e759784a074e9988b9d381d4bde3318"],["/lib/needsharebutton/needsharebutton.js","3e26ad0566b7af5fdfc9d729fb950a8f"],["/lib/pace/pace-theme-barber-shop.min.css","b10dedb9f3a42278c2179b8d5062cbea"],["/lib/pace/pace-theme-big-counter.min.css","bb8afef3450c970442d5fd5199f314a8"],["/lib/pace/pace-theme-bounce.min.css","0291d6a9075c09302aa176afefe2e75b"],["/lib/pace/pace-theme-center-atom.min.css","54f8ab6aba19d920361e36ff99e360d8"],["/lib/pace/pace-theme-center-circle.min.css","89978fdabcfc930aba0e54abdf6ac5ac"],["/lib/pace/pace-theme-center-radar.min.css","512eb109754ba98c1b91f6f42972b2bb"],["/lib/pace/pace-theme-center-simple.min.css","58d150a74d948218e73142bfe5b4977d"],["/lib/pace/pace-theme-corner-indicator.min.css","47352b439e4a399c31b790948a47573c"],["/lib/pace/pace-theme-fill-left.min.css","316dc0543fb8eb0b3c39aeb2e395b2eb"],["/lib/pace/pace-theme-flash.min.css","d127289b6f375b7c1ab39b7ac82429f8"],["/lib/pace/pace-theme-loading-bar.min.css","fbe042d0f2c613d69ec4bcf895a79173"],["/lib/pace/pace-theme-mac-osx.min.css","78d20c7b1f840178fa9bf96ba0c23a67"],["/lib/pace/pace-theme-minimal.min.css","2544b1a26a371ca192e8b002712f0eec"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","8caaf33cb93b71e208b1ee30311e91ad"],["/lib/velocity/velocity.js","6c8011c95d0daf507039772bbaa34dd3"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e38a2d2939dc394d243fa5524f8d2aa5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","74aec38376206e7010f3ef4c2bd0c538"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","34e0e6f475aef70afc5e8d82b512524c"],["/sharejs/css/share.min.css","c19f24ffb286678c9ac9cbf0955401c6"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","7fb20b7eb01ece6d6f9d5dac4ed68be8"],["/tags/C/index.html","4ef41fe2164021a6a0f69c76dc9e57c5"],["/tags/HEXO/index.html","054ddca803a0d10ad5f0644e1c97dab0"],["/tags/Life/index.html","50ac634541401b364646f6f5cd9060a5"],["/tags/Linux/index.html","05924b454fa8f1c6fbe779bdf8b7156e"],["/tags/index.html","adbc2fe9cf9b33bd8ad5a35ef563f05b"],["/tags/test/index.html","6c7c4387c30ff7aa9f61718ea386ff8a"],["/tags/学习/index.html","adaaf8d3ad8e42ca59f892c1f7a9deb8"]];
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
