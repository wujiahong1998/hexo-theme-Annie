/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","2db6c233de6dc1cd5bac95400f5b15f2"],["/2019/03/27/Hexo博客优化/index.html","e3e005058a1655203e91962fcb698ef0"],["/2019/03/27/Markdown的基本操作/index.html","5aca0991c7efa268105456ae008fd3dd"],["/2019/03/27/Seconday/index.html","df197e88c858375e66cd801f4ebf75a3"],["/2019/03/31/学生会个人总结/index.html","83d43811d704cbbc4bda87e0d0449db6"],["/2019/04/02/分治法/index.html","75cca28abe207fdb00f7cfd5e911e10d"],["/2019/04/04/HEXO博客优化（一）/index.html","e3d6e5b19d7fc9df747220c1e7099a99"],["/2019/04/05/计算机伦理归纳/index.html","33e5dda7f3f1281e580d8938d7a6476b"],["/2019/04/08/Linux-一/index.html","b8d20b08877c0e5cf0ac12e8f620531c"],["/2019/04/19/C程序的编译过程/index.html","d344ab46820fa91c32f86bd3f04388a4"],["/2019/05/11/专业研究英语/index.html","ca6569a8b0266d525184a296791ad07e"],["/2019/05/24/MechineLearning/index.html","b669c1b8c476933031fc745ae46c9ade"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","af6c16b641401daa91b331197e8a42d9"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/HomeLink/index.html","0a1b63dbc739c8f62d2cfc2a7b41a794"],["/about/index.html","bcc38d5e9210690bcd001ed70c67038d"],["/archives/2019/03/index.html","e0eb9715a6bc695a2f249ff2b4535211"],["/archives/2019/04/index.html","35005fcb5e872cffdfb4d96cfef65f5f"],["/archives/2019/05/index.html","984a358688d90b60ef81c94f853c8a3f"],["/archives/2019/index.html","aefbf1b6e9acb57042ca3b000db8b7bd"],["/archives/2019/page/2/index.html","05dc0b60ba2e1db58b95e7f5c1ea72a1"],["/archives/2020/01/index.html","1732740d53b6ccbc22741fc4a6a30fd1"],["/archives/2020/index.html","eefca74f65a2dda42d50921185cec13b"],["/archives/index.html","30e96f4f7faa1856625f529dcd15ff1f"],["/archives/page/2/index.html","205710e028bee33075390f0e4db7c1c4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","a22840a0aecb1f81a26cd8749075366b"],["/css/main.css","d98a0bef56ac00ca7e213ce4da3e31cc"],["/dist/css/share.min.css","aab7acf5b804cd12172eac6303d85276"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","d3cf79868a09d6538cae41a81214e17b"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","b2624e9d746f92e0fbd6689afdaa7124"],["/js/src/algolia-search.js","1fd3966088ebac2c95c18ffab3b77e4f"],["/js/src/bootstrap.js","3a7c2d33dce23f6bc48c56d6346a21c0"],["/js/src/canvas-dance-time.js","d161a1e50f32be9a8c1e380df2c3f776"],["/js/src/clipboard-use.js","7aa0bbe5008f8a90210266b3a4e29b49"],["/js/src/clipboard.js","ba61141ae5a053e448c1c937f01ef9ac"],["/js/src/crash_cheat.js","8524a75e6babc84616290d06421622b0"],["/js/src/exturl.js","07ec577f99ddfafb6160a662b6124681"],["/js/src/hook-duoshuo.js","08514b2d47c8780acbd63d87b489d46f"],["/js/src/js.cookie.js","8272d08444f03d8d5095836dfa75df7c"],["/js/src/linkcard.js","d7954e9e9141fee79c83ca30a0305b9c"],["/js/src/love.js","bd793d525e471c6a6c02fc31fc9febe8"],["/js/src/motion.js","5b6e6f97da69e0d70d6b22b5ffdd4c0b"],["/js/src/post-details.js","599acbd29a3b365f6e61ac16d56bdaa9"],["/js/src/schemes/pisces.js","4f150bbae677d8ef86811bb78c3908fe"],["/js/src/scroll-cookie.js","464695cb5d6e892524227ce8d2b673af"],["/js/src/scrollspy.js","b804c71aee2e452f055f8a2294597107"],["/js/src/utils.js","55da315404959ff7bac4fceea01f1a5a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","290b8dac2dfb710142dedd473be2807a"],["/lib/Han/dist/han.js","df8969d8f3c331c6f465055fcbc95697"],["/lib/Han/dist/han.min.css","ce404f01ccdd876ebd4365c296a026ea"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","9c2527e6950480c7c289d47ae592dcb0"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","584f431a3f2fbfc4a9540152a68d8710"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7c60cd75fc6200a8cc1dfb8c9a0fce77"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a1d3d72c86b3052b346607b7d071f701"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","8b2b1f6463790b4ab08eaff59c2cf5fe"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","0b39d0067a50a050d58be0f550e2dd33"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","df339c4e7927f366f904c07d63fdefd7"],["/lib/fancybox/source/jquery.fancybox.css","c1c38cb0b5d2e62099a3456c3c6ecd09"],["/lib/fancybox/source/jquery.fancybox.js","cd6f042e029ce3cf5ddf12f9ac16c951"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","68151499d6d7c7eeb8aef7f71d37b573"],["/lib/fastclick/lib/fastclick.js","05878d996dd0d625e8700fc7a1de7846"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","73007aca339c53fe72791eab74d983fc"],["/lib/font-awesome/css/font-awesome.min.css","73007aca339c53fe72791eab74d983fc"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","afd6f1b349cea96fac78022a71f76a69"],["/lib/jquery_lazyload/README.html","5dfe015b135e7c956da3a3f2a0eed3b8"],["/lib/jquery_lazyload/jquery.lazyload.js","db4cf4aec06643dfd9bb8c4f65271e4c"],["/lib/jquery_lazyload/jquery.scrollstop.js","ce403ef6e3b4bbffaa047c149e3a8793"],["/lib/needsharebutton/README.html","6c595aa8ef98966a33a2a377bd7d2722"],["/lib/needsharebutton/needsharebutton.css","d0a3d4c0f22b084f807c3f22e5e00a7f"],["/lib/needsharebutton/needsharebutton.js","9d07002fdfcde895fc5d66b213ec630b"],["/lib/pace/pace-theme-barber-shop.min.css","d2477e0e342830e267f74207e9d2e62e"],["/lib/pace/pace-theme-big-counter.min.css","66b8c2b7128061bb7839f843c5fb92b1"],["/lib/pace/pace-theme-bounce.min.css","68a2984ad4ec6a34eaa66f175c231173"],["/lib/pace/pace-theme-center-atom.min.css","6f1ce1cff4a329515e29f64999ba6fe1"],["/lib/pace/pace-theme-center-circle.min.css","0d657f6d4b0613c75429092ef50021f3"],["/lib/pace/pace-theme-center-radar.min.css","abd67e8ffec3f633d8a5f04e7ab9bc1f"],["/lib/pace/pace-theme-center-simple.min.css","ebd9c4dc71a2773e996bef10d3d70293"],["/lib/pace/pace-theme-corner-indicator.min.css","43a6012e6ab2f8334099b9e28f98fadb"],["/lib/pace/pace-theme-fill-left.min.css","f267251996b179bb43ce84316c6d93a7"],["/lib/pace/pace-theme-flash.min.css","42740bfea4a7c8568f3b6c608aa657d5"],["/lib/pace/pace-theme-loading-bar.min.css","c8ac43eaf752764ad7baf3e22317457b"],["/lib/pace/pace-theme-mac-osx.min.css","ce5bbf0c05ab4eb0cbc2156d41c0677b"],["/lib/pace/pace-theme-minimal.min.css","542bf04e2b2e8048b15617b8c7f711c9"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4813dbd9562b02b3090b71fa2ede48c5"],["/lib/velocity/velocity.js","a8e50fa76cf6ea9501c9ef1ad5e272f8"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ad82d8dcec501fda482e6a828937ebec"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","c19f996ca13c5d1c44ece111ad86ca56"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","9c05a48e209e95af83c4cfdb4fce944b"],["/sharejs/css/share.min.css","f5a533ac5f50b806f93aa2bdf1599349"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","905c29a3622ef7aaaf8009e5186737bf"],["/tags/C/index.html","eac75d33b1476d88bda2288fe385c738"],["/tags/HEXO/index.html","e07a10dd0a78ab526b9ef33dfdfa857a"],["/tags/Life/index.html","1edc7a49a8d02828056a95f3ad9e6621"],["/tags/Linux/index.html","be7fb6f66fee4cb5fea2a9ca24bc2137"],["/tags/index.html","bb8d73802b4eab5a9883c809f37cd46c"],["/tags/python/index.html","920bda08c379b6aa3bba997b345fe135"],["/tags/学习/index.html","6b189917829a9deb4e0bb85a365f98fe"]];
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
