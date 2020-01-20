/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","91a80bdcb6b58e894fc5baa6d07c72ab"],["/2019/03/27/Hexo博客优化/index.html","231badb28fb4f0be8a7d391488ad7cfa"],["/2019/03/27/Markdown的基本操作/index.html","65856fe8be8c7af5ce8426401d6c629a"],["/2019/03/27/Seconday/index.html","386803b37011dfe32c6f470c87ead81b"],["/2019/03/31/学生会个人总结/index.html","a2a5e8e543052686163ef18b46b9c991"],["/2019/04/02/分治法/index.html","8fec5cda10c81b22fe3e34bd7b700685"],["/2019/04/04/HEXO博客优化（一）/index.html","6c554ec66c23737517333974f3956c04"],["/2019/04/08/Linux-一/index.html","a8591bca153b537a9a01c19308b8b2a2"],["/2019/04/19/C程序的编译过程/index.html","16f527d78691eaf5de5d39de895740ab"],["/2019/05/24/MechineLearning/index.html","4dd97bef88177672142ba0cbed20f926"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","e0ff60aa82d16873b0172679f7b6ecfc"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","aedca3d0e2b719a241cbc4fe5019b3b4"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/2020/01/18/爬虫——Requests与Re/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/2020/01/18/爬虫——Requests与Re/image-20200120141528343.png","05ca2d6d6b22ccb2f538f29efad0159d"],["/2020/01/18/爬虫——Requests与Re/index.html","b9dc00bef216c969d4791ffa5d50db79"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/HomeLink/index.html","599d32b8f94ed59f07c13e9977edd8db"],["/about/index.html","10ddf8387cb592c6648b953971cff727"],["/archives/2019/03/index.html","a2b696740f3497891f5d5b0c1145e8d8"],["/archives/2019/04/index.html","77158bab37dd9e685a2dfc4dd480611a"],["/archives/2019/05/index.html","ad21ed0c1b345f875bafb7cc2f8e282e"],["/archives/2019/index.html","ae4e6913bd09c9290bd90f152a96234e"],["/archives/2020/01/index.html","aab38ec90929acf0d6d119f64fe962b7"],["/archives/2020/index.html","dfa177312b2f13f67f3e5aa18312f037"],["/archives/index.html","4a736d4a34395db11c95a0a4b5925128"],["/archives/page/2/index.html","88f98ec27b3f54bc537b4ee8fe72daaa"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","384620cbbaa4ab92e18bd5fc9f2df351"],["/css/main.css","3bcbdf616edcc98efc071cda18260b28"],["/dist/css/share.min.css","7695f586f3cfc452cdcf0a2d74b0eeaa"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","4586f5a7fcfec64feacddcb94bb308ce"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","48ce9ed364e4a4a2e875edbb2c900baa"],["/js/src/algolia-search.js","d811b8b5d57f4b2c43a6a6bd5ef35911"],["/js/src/bootstrap.js","d71eccfc2bb6b9b957e9d29db3ba13a1"],["/js/src/canvas-dance-time.js","436aa441d13e7416339a5b4d61248b28"],["/js/src/clipboard-use.js","5279b86960c9d790836932897a3376d8"],["/js/src/clipboard.js","3b129acae6bbb52f32fe5e9075b691a4"],["/js/src/crash_cheat.js","65ba752fa859ddf9f71229f413063348"],["/js/src/exturl.js","cf48b3526751b006eb21a47bc9e8e4c8"],["/js/src/hook-duoshuo.js","675d3d1ff8bbf3df5354ae1b3dd737a5"],["/js/src/js.cookie.js","e813b708e7a2c36155a7a5edc4a3095c"],["/js/src/linkcard.js","4f9825c80e2cc2f35839f8946f83cb61"],["/js/src/love.js","e165e8c46ceec751e2d0ef768387e809"],["/js/src/motion.js","7c03a27bb87083418f0593d071857261"],["/js/src/post-details.js","fb0db9fb59fd61e857afe2cd6ee4292d"],["/js/src/schemes/pisces.js","62739b09f7493391581b9baac793987a"],["/js/src/scroll-cookie.js","62ea9c7085f66589fc0aed5d1da01e67"],["/js/src/scrollspy.js","7326176044fed32e7c53625b0cb69d5c"],["/js/src/utils.js","35eef650de4f47aaeebbc1ab668305eb"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1e2d90e5b80bcde3a39ba9a8ee77633c"],["/lib/Han/dist/han.js","57b781430a176ea86822a127ce1b8889"],["/lib/Han/dist/han.min.css","a85ecd082e944b4f9ae1efe059c3e699"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","2162df46ed8c8e77c8ada66ea5be7354"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","41a9ca2cafa3022bb3667451a8bc9331"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ab5c28be8915bbc8d919b69a25c6509e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","602b3c5984c9a7dd94a7c0b77715f6a5"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2b009011aae7670f59c51adeaafd9b12"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","79ee1027f2246f37ff5bd45f64e1e9a6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0dd386aad2915ef67e2d12a960819fe9"],["/lib/fancybox/source/jquery.fancybox.css","5570f4e599ac5b570c002bd74176d66c"],["/lib/fancybox/source/jquery.fancybox.js","824f0b49c2992ab27bbe56c2a0c16eac"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","85ef129dbe3c27d890d577fb08ced717"],["/lib/fastclick/lib/fastclick.js","7447bfaeeecf378a712b8081b24a3e44"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","7543157665fc5deb93614810ddeb728e"],["/lib/font-awesome/css/font-awesome.min.css","7543157665fc5deb93614810ddeb728e"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","792b42e42214eac314c261868d71aed7"],["/lib/jquery_lazyload/README.html","fe01ff6e13d15457d9ee1e6d49f48699"],["/lib/jquery_lazyload/jquery.lazyload.js","32f1930049bb394c6f1d357139bb20b6"],["/lib/jquery_lazyload/jquery.scrollstop.js","2fd329e4c92974eedb10ebc6c8d4c749"],["/lib/needsharebutton/README.html","0032bb078f0a7665b9b86f5eabcd9807"],["/lib/needsharebutton/needsharebutton.css","c8b859e9ed482560cc0d42f26a1de951"],["/lib/needsharebutton/needsharebutton.js","7ffa5ddc642fa78cc9baae5d2183c4db"],["/lib/pace/pace-theme-barber-shop.min.css","85f9521e3506780ca1decfc048ff2346"],["/lib/pace/pace-theme-big-counter.min.css","3c0ab796a76e0a1f5fe40f3686d078d6"],["/lib/pace/pace-theme-bounce.min.css","c414f9c1132472bd5ea3e9de2344f988"],["/lib/pace/pace-theme-center-atom.min.css","5457e8a0c279cffb5f5bf7c02b697e23"],["/lib/pace/pace-theme-center-circle.min.css","9a91cfc0abedd8d503b77e699e620c93"],["/lib/pace/pace-theme-center-radar.min.css","70750b80392fb5fd1275d604904d74d4"],["/lib/pace/pace-theme-center-simple.min.css","2e33fd98deccc3eb893d72868aa0395a"],["/lib/pace/pace-theme-corner-indicator.min.css","2349d8f4656361c02f5677770f5a9c2a"],["/lib/pace/pace-theme-fill-left.min.css","a5f543703f5ad895a2870cd87d2e30bf"],["/lib/pace/pace-theme-flash.min.css","38a1de62d7cfaa4d91f3b7995df9abc1"],["/lib/pace/pace-theme-loading-bar.min.css","edf6d4e8996cb6ea688a11125ace38e2"],["/lib/pace/pace-theme-mac-osx.min.css","a26fe6a33b01822ba1474a1c51273a6e"],["/lib/pace/pace-theme-minimal.min.css","12639791b6117657e672e568f206197b"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4602d0b0f303790baaad3be5cef4b33a"],["/lib/velocity/velocity.js","a7e63996b7413eca262642aba868d59c"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ea8ae9543287eb4aafaeb27be7d12b05"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","9770a4bdb5177f170dd1bc81487afa95"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","b1432af9110d4c897c54047e28f2dab5"],["/sharejs/css/share.min.css","d075e6ba996fc559231444af7beecf64"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c3a00d40849cb7deee6cd696a3daff3f"],["/tags/C/index.html","5ed7a87298d144364179e5d0396bd2e1"],["/tags/HEXO/index.html","fec6aac15a7ea07aee094e7104a07905"],["/tags/Life/index.html","0c1f071edc8c338da6723d8e334ce6b4"],["/tags/Linux/index.html","c43c2cef432f627a16b7f33ad0e2b917"],["/tags/index.html","6fd2a3d0ada3d762aa82d701b31acc65"],["/tags/python/index.html","6e26976daef6b29793b0f4b00310daf4"],["/tags/re/index.html","042d04b544557261f37604e777c3970f"],["/tags/requests/index.html","0e093eb82c0b1ac93bd57bc2e71d3ffa"],["/tags/学习/index.html","d626124e424d2c5da2b2c9bd478d5f39"],["/tags/爬虫/index.html","2a0bdf23a9e43b7bfac28e021d92cf3f"]];
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
