/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","c1fa0c949329053adc7a8a79bd1f27b9"],["/2019/03/27/Hexo博客优化/index.html","65b79b9b8c5399977e8ad0cb388df32f"],["/2019/03/27/Markdown的基本操作/index.html","76fc5fd11c72aa1da4d79fde50885bdc"],["/2019/03/27/Seconday/index.html","66c1fedbb898020bb1a150529b46041e"],["/2019/03/31/学生会个人总结/index.html","632bda6c0168a59bb42574ef4445cfd7"],["/2019/04/02/分治法/index.html","4c5d89615b36ca535d5eedbd47522147"],["/2019/04/04/HEXO博客优化（一）/index.html","70190a73a06138240b1e47673c7d68a0"],["/2019/04/05/计算机伦理归纳/index.html","3117c829b3bcad1a2381a7925ac6ee35"],["/2019/04/08/Linux-一/index.html","e9a4268c6f807b590e550e6a57830d74"],["/2019/04/19/C程序的编译过程/index.html","a4b9accd99173c9d3ea165301f9e42df"],["/2019/05/11/专业研究英语/index.html","1310ef58aa69b2d1bc7b0179093ce229"],["/2019/05/18/动态规划/index.html","f3a60ff0cbc8f0568c5e452a158ad51a"],["/2019/05/24/MechineLearning/index.html","f7ac2bec37e1090fe82f402810ecd935"],["/2019/06/19/计算机网络理解/index.html","b781b1fa7ebe24c4ea27d841cead956b"],["/2020/01/11/hello/dark.jpg","dda59940afb99346f0968d998897bafb"],["/2020/01/11/hello/git_account.png","45da9260edac9c4069393b98904f5015"],["/2020/01/11/hello/index.html","14a8d3102bb7c4fba222f7ca982ec63f"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","e4b6f279667112c85995d91bb21b7fe4"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/11/test/index.html","bbc01f7422bcf5a4663efe97bf8e429f"],["/HomeLink/index.html","35f50e54b7767cde7d4f3852e4691de9"],["/about/index.html","c1f478d540a509e5100b523ac5f0e3a8"],["/archives/2019/03/index.html","0aa2c82c2e1d02d6236f69e7f46876fe"],["/archives/2019/04/index.html","568529956c8c284bd3f8ae4ae9fd1df2"],["/archives/2019/05/index.html","56df64d88501806a205406b8d4159e42"],["/archives/2019/06/index.html","d7c7f5a5c1df105a413fe30c10fbe75b"],["/archives/2019/index.html","c5a0751ecbc9b1b2dd85aa70776ae144"],["/archives/2019/page/2/index.html","753a49f44416f1f319cf80921075764a"],["/archives/2020/01/index.html","2a01e035efd39cf71fa3af6401e837cc"],["/archives/2020/index.html","b35d6017eef8bf32d0e6adc6e263f7ad"],["/archives/index.html","3fbe4a0a4dc3902552d25448a7631d6b"],["/archives/page/2/index.html","44729c42084f9cc7c69cceeb85e91034"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","8938ee9a2670fc8b65f631e028b5f66a"],["/css/main.css","ee778de43ed3a37cf982aadd3f587659"],["/dist/css/share.min.css","2f09960153b1fe0217eb68c7cfaa2f25"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","c1d4daf5d72c5ffba7af53f3f9269110"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","31b28cc486d8084ce55a7e00e2eecb68"],["/js/src/algolia-search.js","96580f8ef1274a1ffb734219feda70b8"],["/js/src/bootstrap.js","aa2ed93cb98c9ba6cfa9541d90b41230"],["/js/src/canvas-dance-time.js","850cb474f98183cb07902864eb9a6bb3"],["/js/src/clipboard-use.js","628e9419fbb6aed1b62114cb9c4267f3"],["/js/src/clipboard.js","53e2d63ec6f2f6f4eb644d6379686f7a"],["/js/src/crash_cheat.js","ac0cf4d36a24bebe0f7ffc0ac17be50c"],["/js/src/exturl.js","960a42f662f8a227408d50f9e5f078b6"],["/js/src/hook-duoshuo.js","509a458efc87f586ead6229c3e98cdf9"],["/js/src/js.cookie.js","fb8430c2add55813bde38320162327a6"],["/js/src/linkcard.js","aac4d43cdc9e700076ca6432873d5793"],["/js/src/love.js","9e15fc515e166877be39725e1e8a7e7d"],["/js/src/motion.js","8747354b985d40463ee729a34ead5d3d"],["/js/src/post-details.js","ef27971f0c6c50b72afc8638314fee98"],["/js/src/schemes/pisces.js","c9f8702961f113a7f20ad3d48216a73f"],["/js/src/scroll-cookie.js","25361daf1caf73411d6c0bc39d6f3515"],["/js/src/scrollspy.js","20c8aec5313429331b94833ec110b583"],["/js/src/utils.js","f713e6b2a09db17dc1541334dc433fcb"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3eee80c0e0dc210c33ce150482b92ce0"],["/lib/Han/dist/han.js","843d317f4f58c1ba12f939d20a814419"],["/lib/Han/dist/han.min.css","039475b89f7523e6af1bc81ce257cb5e"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","cd7429fd674c2b80e3746fe6cd5f6cef"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","a07fbbb74f83860d9be8923ae0102d8b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c4b363a30856418122b2d06a54328d35"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","40ee65263b502d309c4c67e36fffea63"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","af108151aef27f8e5523d54dadd87605"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","0ef17faeef8967735ec4651e99c942fc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7265303739bb34198d57b8ca0821a33b"],["/lib/fancybox/source/jquery.fancybox.css","6fa24b1b8671b07ed5c429772e5d6718"],["/lib/fancybox/source/jquery.fancybox.js","7b61c71eb77a52801c21dc8430e61ac1"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","61a657d4b9f3807d7ca32e8fa9c0cd25"],["/lib/fastclick/lib/fastclick.js","e92e7f424cf07ca6bf74db2e47a8c50f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","52bd7505fbf24cb311c9b310f249288a"],["/lib/font-awesome/css/font-awesome.min.css","52bd7505fbf24cb311c9b310f249288a"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c50291291a37aaece8428c3bf4b3703b"],["/lib/jquery_lazyload/README.html","443e062552c0b7913bcc1de247b57787"],["/lib/jquery_lazyload/jquery.lazyload.js","32cd66af7db460543686559a8d3ca241"],["/lib/jquery_lazyload/jquery.scrollstop.js","e33b587543963db075a6274707cd2649"],["/lib/needsharebutton/README.html","6fe876d923c507aa0ae2728d3b22adde"],["/lib/needsharebutton/needsharebutton.css","6a7cddc198d8bfb94dd9f48491e56087"],["/lib/needsharebutton/needsharebutton.js","5c9fbbcb40cc9127a9f2d7d7f614dc1b"],["/lib/pace/pace-theme-barber-shop.min.css","13fb9b4865a3cf20a77f1f94a5d7b7ad"],["/lib/pace/pace-theme-big-counter.min.css","dcd7b0d79047eb0712e2cdff99c115bb"],["/lib/pace/pace-theme-bounce.min.css","9151d451f90e8873d67adb04bd38da67"],["/lib/pace/pace-theme-center-atom.min.css","33d48a12b29fd8038bda5c0f5da21aff"],["/lib/pace/pace-theme-center-circle.min.css","da789900f73f26fc90ce3614da9ced28"],["/lib/pace/pace-theme-center-radar.min.css","c732066be894ebde06dac35cbba965d1"],["/lib/pace/pace-theme-center-simple.min.css","eb71b417b1e15338261958126c06035c"],["/lib/pace/pace-theme-corner-indicator.min.css","8c2c2de74128daa51203bcc9c670be21"],["/lib/pace/pace-theme-fill-left.min.css","40d4f93ec0f2432dd380f83135afc229"],["/lib/pace/pace-theme-flash.min.css","3863bd9a06342268f9b02ac1713e2adc"],["/lib/pace/pace-theme-loading-bar.min.css","f647c385a6c1613ccdda48c61c160360"],["/lib/pace/pace-theme-mac-osx.min.css","37a24cc64576b55ce97ecd5cbbb00edc"],["/lib/pace/pace-theme-minimal.min.css","4619b67fbd64f1ef84c3612d6236cbd5"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9037beaf8d1a1e8d6620c07d9d28b12f"],["/lib/velocity/velocity.js","777ad9c5d8b59c440a79eb4349234d79"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a8806b9c108e54bc8dc001da13c56cab"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","a3afb3855a82ed776552cf9faa0237d6"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","218178e5674bd7b8245a1da39cdfb5d7"],["/sharejs/css/share.min.css","78bdb4a6a9a0f4335b1efeb4e55f172b"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","e37b9690494f1a2807282e7f9f210c88"],["/tags/C/index.html","9661e8940c7b243d3261cef253ab8af7"],["/tags/HEXO/index.html","6317f9d8813ad3014706ad820c6899f0"],["/tags/Life/index.html","63bcc1cdca9d641f6d41196094c4f5aa"],["/tags/Linux/index.html","235642b5db9c95aa68bfed614ef5855f"],["/tags/index.html","d3b022c9a29f238ce81503c709956000"],["/tags/test/index.html","7b87019ec0e0e1b69ecf32da0231a371"],["/tags/学习/index.html","ab3e90ea9d135d3cbf924bb993feaaea"]];
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
