/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","a09555fdbb3e4f16836cf6ee5ea6a983"],["/2019/03/27/Hexo博客优化/index.html","14ffae3a661729a86da9c13220ce8f02"],["/2019/03/27/Markdown的基本操作/index.html","b4d3ca1ee94e11e380baab901d83dcb0"],["/2019/03/27/Seconday/index.html","6c0b4a24b0c0d6e29cbb50865205f8de"],["/2019/03/31/学生会个人总结/index.html","c5cd2ad8d12c9aa973a6b94b13a464da"],["/2019/04/02/分治法/index.html","c7737ccf399018772da82662261a4022"],["/2019/04/04/HEXO博客优化（一）/index.html","d4c1318d79cc6d563903f53992606680"],["/2019/04/08/Linux-一/index.html","24d06b27966470a25126660cf1e9dd3f"],["/2019/04/19/C程序的编译过程/index.html","d579116f61579dff74a5c01bfafed169"],["/2019/05/24/MechineLearning/index.html","67aafdf5e20736a8efaaecdbd3aa8f24"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","bf57a48145df28e41ed05a185dfb9885"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","88aee700522b9765298f01c1c76aa774"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/index.html","f5e2e8fe638aade97edb82a176b4cd52"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/HomeLink/index.html","3295ec495188550fdda56bbc23c37079"],["/about/index.html","279d3522650343659c0f2154b8d48f25"],["/archives/2019/03/index.html","fa831500189032e3a3448278fddb596f"],["/archives/2019/04/index.html","a887a18627ee332d372d33ce7779b033"],["/archives/2019/05/index.html","b5e1ea18e2258a2408feb1bcd71fe7ba"],["/archives/2019/index.html","6825b3a13e207be17341f0510e773cb0"],["/archives/2020/01/index.html","e4d3a679ee04564b6f68a6b0dbddacad"],["/archives/2020/index.html","bb299fa736e72fa97e7cee52f94294e6"],["/archives/index.html","ebe01ac114fc24256e87326e830b59ce"],["/archives/page/2/index.html","3dbd26f9eff22b395a592e9ce3233668"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","923cbbb51ad488ff508b17ef9ae0ba1f"],["/css/main.css","07206f7c1ff2de68ee65fb7436a22d2d"],["/dist/css/share.min.css","0fddcf508491aa65d67036040a9a5306"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","ae8860fed1fb3eff4257be8460fe24b9"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","da37c044663eb81cc91481bfaf69dc5f"],["/js/src/algolia-search.js","c1120ce39f495f813565be381207512b"],["/js/src/bootstrap.js","4613777cb20f0259d5878dc7d9d57e05"],["/js/src/canvas-dance-time.js","65152857969248a68ec541a585f1c758"],["/js/src/clipboard-use.js","ecb152c52aec386e92e970b8f8833051"],["/js/src/clipboard.js","560af2a854fd347b97281421fda97abd"],["/js/src/crash_cheat.js","94dd41e63c5f14ea20e2fd7814ab95ca"],["/js/src/exturl.js","68309c8f2a645bf8975a19622d3c2f90"],["/js/src/hook-duoshuo.js","342c6a0ffa5cc078ce8267cfca6fbb20"],["/js/src/js.cookie.js","d0d0f1704e1b3065961b3579ea907cc6"],["/js/src/linkcard.js","34a8b1c6d3f9b5d0d475b7cf5a2c422c"],["/js/src/love.js","017ae3a68b3882a29a86325c37f82a68"],["/js/src/motion.js","3e8bffa3464171dbd52f15fcf7c772e9"],["/js/src/post-details.js","df78d380fa449637fb9cc57d9f855340"],["/js/src/schemes/pisces.js","c8844e7a4d2902d20796919dde5b33a8"],["/js/src/scroll-cookie.js","95cd660dd2bd189dd2d50e2134ba99f1"],["/js/src/scrollspy.js","65bd46bdc48ec47c3907bebb3f2146f6"],["/js/src/utils.js","c7cb4657da42311e13c8f66421a78d53"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","0e5a5c6bdca116adcc5d2dcba1cfdb7d"],["/lib/Han/dist/han.js","fc269164a7f4d8c9a7f3071f1d8521c7"],["/lib/Han/dist/han.min.css","bbda7818315579a682ad6cfb38fb46f8"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","d578e9eea588b888207c2d67e652f30f"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9948ca1da2e664f0c8641c4b164c9c6b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","47b9fd2b555ec16ebc97d73c5d1ac929"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","aa5898deded8ec2555540c45e631c60f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2b6309a5711d1fd2e7403257c162b8ac"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7d3f65a7ba99b1987af4abd8d500f8a0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","af8bef1fcdfd22936e3d7ab781925998"],["/lib/fancybox/source/jquery.fancybox.css","fd802a8e21dfa1e1dd7010bbb9f131ae"],["/lib/fancybox/source/jquery.fancybox.js","9e7e142a213ea417d641a0b73d295b8e"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","003dc01b771b560818833a5626cce88f"],["/lib/fastclick/lib/fastclick.js","8f6eed6a5cbc6c91fa62e220df33f9a2"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","4a8b5299f44db58ad5113b97aa4c4c33"],["/lib/font-awesome/css/font-awesome.min.css","4a8b5299f44db58ad5113b97aa4c4c33"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","32ffb0715185085bc743391fde0b61a4"],["/lib/jquery_lazyload/README.html","b465c3bfa6347d5374ac583ae6d62b40"],["/lib/jquery_lazyload/jquery.lazyload.js","c17067cedb6a5df775884ce09e48d26a"],["/lib/jquery_lazyload/jquery.scrollstop.js","51aed4f3375c524f1007564c3c6e5315"],["/lib/needsharebutton/README.html","a1174b76b799482ca4e5401437f23a25"],["/lib/needsharebutton/needsharebutton.css","706502a2942671da00cd2e00f86ca0ee"],["/lib/needsharebutton/needsharebutton.js","19b74f1cdc5d842865ef0c7111fda31c"],["/lib/pace/pace-theme-barber-shop.min.css","a09c4402cfe06f14b47b994259287653"],["/lib/pace/pace-theme-big-counter.min.css","dd6291a5bf58fe3c8377e672a70109a1"],["/lib/pace/pace-theme-bounce.min.css","f605b2c43a17ec42142478c67d30348e"],["/lib/pace/pace-theme-center-atom.min.css","4467c6fb954a7a3a5d44298d03dc775c"],["/lib/pace/pace-theme-center-circle.min.css","2564fe26febfc0402224fed1b8794ae9"],["/lib/pace/pace-theme-center-radar.min.css","03b474f489c76f2db42ff0682ee33702"],["/lib/pace/pace-theme-center-simple.min.css","47002e39be3cbdda01e0d4ced0efe108"],["/lib/pace/pace-theme-corner-indicator.min.css","7744b09d1d2b1b8bac7a8a732d8439c9"],["/lib/pace/pace-theme-fill-left.min.css","7fe9e049099b3639f3b02bc83563381f"],["/lib/pace/pace-theme-flash.min.css","59341b41df803ebf304280e0c38eeefc"],["/lib/pace/pace-theme-loading-bar.min.css","ae91baf972923387a4007246bdae8dbe"],["/lib/pace/pace-theme-mac-osx.min.css","ef90fd84b88413893ba89a43391dddc5"],["/lib/pace/pace-theme-minimal.min.css","8b7b705570b7b7fecd569280f47c76e0"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7080e2c0cf4694100a8b1f1aa0a8be18"],["/lib/velocity/velocity.js","02da1a934a2f9d942fac06bc40c01156"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","4f4db86280d3327f522876d2b72018c5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","40fe97ab7cc906c2b71c62e19f02ae48"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","f97feb80be6fa6c6b78755e851b55aa2"],["/sharejs/css/share.min.css","3c84f6568aec2b50f7167379cb7adb13"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","6799f63a7b55b708cbfc9bdf192c9488"],["/tags/C/index.html","22e65e729595dc18d0760afee5a15f94"],["/tags/HEXO/index.html","9a30b5b725d54e2347822d10134af087"],["/tags/Life/index.html","72ad117847a7c392e1a3047d8784c93a"],["/tags/Linux/index.html","52f8273528f13e1b1576e0155fe8dc3e"],["/tags/index.html","f232e7da423710951cdd7ec5e782fd60"],["/tags/python/index.html","d982aeaab2cfca150e98b3ef4b23e079"],["/tags/re/index.html","0721cafa5d0e84de538bd2695438d364"],["/tags/requests/index.html","20552a8d867a3ba391f7a27a5619f1da"],["/tags/学习/index.html","62f6822335b98fc1b70bd87af64ecb29"],["/tags/爬虫/index.html","8324f64daf01584fa5b106642fc24899"]];
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
