/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","8ddfe39b396ce3d8d07b817aa5dccf06"],["/2019/03/27/Hexo博客优化/index.html","aa83d8cb12a8931e1280c0b5a5a6a802"],["/2019/03/27/Markdown的基本操作/index.html","a22d2de7bea512ff95400742be0edae0"],["/2019/03/27/Seconday/index.html","bdb46db08a4b9cffcd13366edaffa814"],["/2019/03/31/学生会个人总结/index.html","52ee2bb162f85cd85796206cca32fdbb"],["/2019/04/02/分治法/index.html","bcbe9b017a66ef2070cb7d1a85b670f0"],["/2019/04/04/HEXO博客优化（一）/index.html","7e53abadc471c0cccc5fa1661b389792"],["/2019/04/05/计算机伦理归纳/index.html","56df0e1e6ec291b13d3c7004458c53b4"],["/2019/04/08/Linux-一/index.html","24fbdad78e3931a9ef7b85f2ae3928c7"],["/2019/04/19/C程序的编译过程/index.html","d63c1a8632003def972578f82e2ee22c"],["/2019/05/11/专业研究英语/index.html","ae37c7b8e0f1f402ecba82168c6236b4"],["/2019/05/18/动态规划/index.html","645aae0cc3d285148c9f442b6a6760ca"],["/2019/05/24/MechineLearning/index.html","620d2feb7bb6d40304a8063545b8f3f9"],["/2019/06/19/计算机网络理解/index.html","a10e4101805e2bcf16608595fdeb8720"],["/2020/01/11/hello/dark.jpg","dda59940afb99346f0968d998897bafb"],["/2020/01/11/hello/git_account.png","45da9260edac9c4069393b98904f5015"],["/2020/01/11/hello/index.html","96a68c0e6ea4da343781cc14fc22f2f2"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","f512be9fe0debb503f86a02f867b7942"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/11/test/index.html","0ee39252407020026e0ba8e5c551ff27"],["/HomeLink/index.html","cc62f5c1754bd388d3e66b9ed498b490"],["/about/index.html","f1fb9090cb1bf74dc58e67a418695b6d"],["/archives/2019/03/index.html","9700bea4aceabbe704c655531bf096ab"],["/archives/2019/04/index.html","04982e06bfe980597a21c27a80a4823b"],["/archives/2019/05/index.html","66b1aed69d8f1eb2f36afeb611f57a46"],["/archives/2019/06/index.html","9b25e2893386f43d4bc886f738d89ae7"],["/archives/2019/index.html","711e5bb22ff9a8a18eb2e821008b84a0"],["/archives/2019/page/2/index.html","778b167d74991de53d05b3e6cf349d12"],["/archives/2020/01/index.html","208aa5a57143d9607de09c44276b0d4c"],["/archives/2020/index.html","19599fbdb8d540fa2f62de8d6cdb48a3"],["/archives/index.html","d290c5ae5cf85828c3abddad3e9c2bab"],["/archives/page/2/index.html","8e3cb62d6ce68da9f47d2336089c9099"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","940824eb058eda0db068b541fd7e6ada"],["/css/main.css","b4d790fdb853c2e3b02f8f949f1e169a"],["/dist/css/share.min.css","b14252fd3d92b8e02d1ec1317fc9fa0a"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","58e54e9133bff16758906ab0c8a391d9"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","834a6f93e39b6594a7b2748b927701ae"],["/js/src/algolia-search.js","f9a76815084793dace45453056ced422"],["/js/src/bootstrap.js","5bc4091309ff4568d092f0b83b02d311"],["/js/src/canvas-dance-time.js","68e8da4505a67791b726e6c0f7c4083a"],["/js/src/clipboard-use.js","373549edb57092bd8df928855b4a7ce7"],["/js/src/clipboard.js","481236151a5a7f03473dde92d9e3fbb4"],["/js/src/crash_cheat.js","83a148463201969b827649a0669d2ad5"],["/js/src/exturl.js","e13feed654b2bbcc254154c89b41cbcc"],["/js/src/hook-duoshuo.js","e614c25618a8f3a29832a47e09267b4a"],["/js/src/js.cookie.js","fa843ea3d303a943e24dd0b5e77cdb36"],["/js/src/linkcard.js","06a6e01dcfaf65b493ae1392f70b2e92"],["/js/src/love.js","ce99c140bab75fa6142688771b55884c"],["/js/src/motion.js","ad36af1613f5daa69472f7465fc55f2e"],["/js/src/post-details.js","73275c4817ac0da23ededef20a8b807b"],["/js/src/schemes/pisces.js","87eefabd130f6b4e027196a3e22b0918"],["/js/src/scroll-cookie.js","8e1c37cc10da6a297c72f839b7084dc1"],["/js/src/scrollspy.js","85353acafd1ff282647b87403db4f9c2"],["/js/src/utils.js","e8f60850b5076b5cc80d2ed5befb6e70"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","808d98446fbd5e331d77d40e22604854"],["/lib/Han/dist/han.js","f9d5e734256d57fbf3e112fadf669644"],["/lib/Han/dist/han.min.css","9cc743f4310c039cc8803fa07d4cc42d"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","185548d03128d963d0bbecad82de2d33"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","71ecac6b70ba835f5c2464ac65cc8369"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ab5d1479b32032c5fc0a6f969cdeb746"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ec58c14bfc612f16bdc09ba1eb60daaa"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e22303d2e2ff82b358e741b6352c69c5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3a962da943bbb39f55c702c50c9f8c44"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9005cc0f44127fb5cf5184a5cfff593d"],["/lib/fancybox/source/jquery.fancybox.css","ee5d5fdaac361a81f38d0696a08285a6"],["/lib/fancybox/source/jquery.fancybox.js","4e8a14f98105e24a444ecebad37dc187"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","0e3c78d513a100c3843bfab986ac93f3"],["/lib/fastclick/lib/fastclick.js","3c183981c88b174650dc876b73980e3a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","0ebfa6b6125fd903b478f95c36ffd62b"],["/lib/font-awesome/css/font-awesome.min.css","0ebfa6b6125fd903b478f95c36ffd62b"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","01f13913c74b609efaba62dfe923f2a1"],["/lib/jquery_lazyload/README.html","658fa20172675700539219553e255a4c"],["/lib/jquery_lazyload/jquery.lazyload.js","48d633c2c1d2aa2de66d9b577e501ff2"],["/lib/jquery_lazyload/jquery.scrollstop.js","9ab114fb7a28b48f933c3312ca5988ee"],["/lib/needsharebutton/README.html","2187fe9d833407b2130aeb78fa302bf0"],["/lib/needsharebutton/needsharebutton.css","8fac133d0f064016181d7c9ceb4548b2"],["/lib/needsharebutton/needsharebutton.js","38726ab1bf7f585594206ffa64c2f6d1"],["/lib/pace/pace-theme-barber-shop.min.css","dbaa648bd4c70719c6a2f705722e2213"],["/lib/pace/pace-theme-big-counter.min.css","dad27572303f0be90654121cca8ce883"],["/lib/pace/pace-theme-bounce.min.css","cc232800d19f04b64865a436ccd35a20"],["/lib/pace/pace-theme-center-atom.min.css","6cfe5299ad739fe35905c1d5659a819d"],["/lib/pace/pace-theme-center-circle.min.css","14dee1229f8f68afc47d6c5c2267acec"],["/lib/pace/pace-theme-center-radar.min.css","e9417b49cad5b719fa9a1689cb6d07c2"],["/lib/pace/pace-theme-center-simple.min.css","2d17682ecc107189450e0f782df5adf0"],["/lib/pace/pace-theme-corner-indicator.min.css","445a4dd7b3fd0c2ff5be7e6898389aed"],["/lib/pace/pace-theme-fill-left.min.css","639c926cb93d1720fe76f45bfe896bcc"],["/lib/pace/pace-theme-flash.min.css","b1d2f798e9dddd6d9ca95986bd74dda0"],["/lib/pace/pace-theme-loading-bar.min.css","48438e8b0e729797f9f043f5c72773e6"],["/lib/pace/pace-theme-mac-osx.min.css","c8bf938bcbba9d2a85f7dd908f2f1f8f"],["/lib/pace/pace-theme-minimal.min.css","3258e7fd371ceb68dd888855e6de0336"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","01b37943c3b4e74bb127e28d217cb440"],["/lib/velocity/velocity.js","f0e1353c06e3099b48b3bf16ceb9b029"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","0b3767974bf3609e6f175664a46ccd3b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","70a36dc5de8267696a6ad8d7bc20a9c9"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","e4bc4d2a56a41703635cd9301e9cf38c"],["/sharejs/css/share.min.css","bad7d6561467a8ac4cfde236e7aa9397"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","ed75101d8887fb859eede4014e5041f4"],["/tags/C/index.html","e4b4069153c7ec761583d63e0a6362f7"],["/tags/HEXO/index.html","0f7486fbe80ef2179a0f1ccfa6b04e23"],["/tags/Linux/index.html","a0bcfc0aa134c3bd132d3856f07d42d1"],["/tags/index.html","6c450266f67f892f395bb06aae05e503"],["/tags/life/index.html","75d453e2240625364e611dba7fa778d0"],["/tags/test/index.html","f69ca13be56adc3c9a338e1c0455978e"],["/tags/学习/index.html","f6f60ed30eddd2b2f96cec9b0d149b09"]];
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
