/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","dac6eca745bd434b878c59392c4c3f32"],["/2019/03/27/Hexo博客优化/index.html","4e56afb6a8ea84b49bccbed17da6baa3"],["/2019/03/27/Markdown的基本操作/index.html","0d79e852bc920501d401dcc9fa31cc68"],["/2019/03/27/Seconday/index.html","22326b7192498d1289a72c7a7018afe4"],["/2019/03/31/学生会个人总结/index.html","43de0b95e0d2d33bec91bc43bae2f927"],["/2019/04/02/分治法/index.html","62465232e06370bcd942e64ed6ace08f"],["/2019/04/04/HEXO博客优化（一）/index.html","cf4d208180bed93d15cce90105d36808"],["/2019/04/08/Linux-一/index.html","07c5c3a8944bb7c6fb082e237abe2611"],["/2019/04/19/C程序的编译过程/index.html","122b60a98138a2cb3f94091fe11007c4"],["/2019/05/24/MechineLearning/index.html","34cd2ec63b8d2cf792ff46a62260a8bd"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","55a97381e38ebdeab6b0fa07be1edab8"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","44d6918356f5847f72cdd5b64785f603"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/HomeLink/index.html","80604963e9298c6aafda424961dd3f24"],["/about/index.html","93463291c8b328859c127282ca49f8b7"],["/archives/2019/03/index.html","581e76b27a973920f40cbcf9398b00d1"],["/archives/2019/04/index.html","05932309db9e551c08091b274dfb480c"],["/archives/2019/05/index.html","06ee783d29509f7d1f4f010489d5e720"],["/archives/2019/index.html","0d67d400a93f5ef0f8edf2f56882694f"],["/archives/2020/01/index.html","f8435f760cde934bcb3bf2432f805e5e"],["/archives/2020/index.html","3abc0f9a02f2fc2c8e8b45dc213ec4c4"],["/archives/index.html","febbfffb44e1224407c25a2e46ec5e5e"],["/archives/page/2/index.html","e49cb617bdd522e83c8d4f920995f66f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","8cda91120d3af6583d142e853e214457"],["/css/main.css","ad0595cb72fbd10b1f6784ef0bd596c2"],["/dist/css/share.min.css","19973cc94d5af065e8d8d8b479703698"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","f0f99c0ef05a662dc5ff5f570efb9439"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","4583edfe1c8b605cdcc108e5f344ea43"],["/js/src/algolia-search.js","7a0d49d8e26bf0fc82a72354babd4b19"],["/js/src/bootstrap.js","bbba896c5cdc79b515693fa52cdc1219"],["/js/src/canvas-dance-time.js","2e0e37ce70a03b05f92804765d7a49c4"],["/js/src/clipboard-use.js","3e7bd088859ddbf1677f9747f088175b"],["/js/src/clipboard.js","7d075dd49f1df2baf7813901e4b2273d"],["/js/src/crash_cheat.js","796ecc406b1f4cafedcb079740c17738"],["/js/src/exturl.js","e17c0559061dbd5fce1457751d681a2f"],["/js/src/hook-duoshuo.js","c2a01a860d38f4fccb484d903bd23aaf"],["/js/src/js.cookie.js","90c6a49056d122e63b6122105d0df476"],["/js/src/linkcard.js","af5b72c50fec0feaf221e8268fc76f91"],["/js/src/love.js","e70ab840475fbe4d45cd824e31ce3798"],["/js/src/motion.js","32bd0a7e8bef53df57d081f827048f15"],["/js/src/post-details.js","bda1fca1cc77a10362ca9a44352f8e14"],["/js/src/schemes/pisces.js","351f7b672ae0c2c6531829c36c885093"],["/js/src/scroll-cookie.js","8f96fec372752cbcbd633a9627b9aeba"],["/js/src/scrollspy.js","054f47f1e1946223d2c33721d9e80824"],["/js/src/utils.js","b7e37f01210292a3d7f022564e4037b8"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","a7e62fe9171e375cd4f4571c7e0307fd"],["/lib/Han/dist/han.js","0116900ddfd45acf31ce83754e692966"],["/lib/Han/dist/han.min.css","e65ed217f360ffb499a4e98dacd69169"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","76b35fa4fa3f95963f50200184b06d14"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","c63db064dfc26856de6d09b5967357d9"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","29f40970e750d34b20467d95494af18f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4c088d2796e3b5974b813e0f7fbeb793"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a1e6295751067e453b94d033cf65b282"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1ae4189949062d971778d23cb2c65974"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","baf1a7f8af558d907df00fb49e357cdc"],["/lib/fancybox/source/jquery.fancybox.css","0446ffb73ee6f01dee45fae79c21d551"],["/lib/fancybox/source/jquery.fancybox.js","fcbba36f0c26100f3ab060d696772e13"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","3a79e0b4f4ece7c08c7d4eab72f69067"],["/lib/fastclick/lib/fastclick.js","a0ce1a6e6c395f81083abdc4704edf57"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d3493db36aa3d38052c2768119327309"],["/lib/font-awesome/css/font-awesome.min.css","d3493db36aa3d38052c2768119327309"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","6ed8a05c8fb95ecada116448233e1792"],["/lib/jquery_lazyload/README.html","f95c2682fd84dbaa3072c41b290d8e8f"],["/lib/jquery_lazyload/jquery.lazyload.js","0d19e8e3824716ae10338db593c21498"],["/lib/jquery_lazyload/jquery.scrollstop.js","1ecc8d4a095018808e7d3b4bfdf79be6"],["/lib/needsharebutton/README.html","89bce8c8abee61ab62a1235803eff483"],["/lib/needsharebutton/needsharebutton.css","d3f61b6bf44ddfa928755f6ca580047e"],["/lib/needsharebutton/needsharebutton.js","98024759fadad6753cb99e3be1901f54"],["/lib/pace/pace-theme-barber-shop.min.css","3e61579b1e934136f38680aa54a6dca1"],["/lib/pace/pace-theme-big-counter.min.css","a76559c343be2ab4910cf42f51c1284c"],["/lib/pace/pace-theme-bounce.min.css","78f6888f607bbf0bbea2a3faab9a4d79"],["/lib/pace/pace-theme-center-atom.min.css","d1e12dc44e6459c604c94ec7f7f6f834"],["/lib/pace/pace-theme-center-circle.min.css","28a539cf562e4e84d00f953511d72866"],["/lib/pace/pace-theme-center-radar.min.css","bfbec0085b1aeee353076cccbeb652a3"],["/lib/pace/pace-theme-center-simple.min.css","8e774819551f8db53a3a16a4da245c41"],["/lib/pace/pace-theme-corner-indicator.min.css","719698703d33c4a684643f26d0095b21"],["/lib/pace/pace-theme-fill-left.min.css","52493176596f5aa940e69526b9efb5ba"],["/lib/pace/pace-theme-flash.min.css","259a8e5c209640b1cb766bff50a85c7b"],["/lib/pace/pace-theme-loading-bar.min.css","73c418a367d778a4b08bfeccc7a75abc"],["/lib/pace/pace-theme-mac-osx.min.css","d49e57789fdc58dd91482555007735f8"],["/lib/pace/pace-theme-minimal.min.css","83cadec045583d80f47d5aa01f8ad0df"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ee32b65fdde500517648a76c0f3e2135"],["/lib/velocity/velocity.js","0def3a06e0000d7942160a97a80cff50"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","fdff7245bb7d9f6b4c76f62a4d2086a0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","1e9965e1fd99bda6db8c5a6cad85a1a5"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","e01da796e5d2f3cbf260d9b29bb891b2"],["/sharejs/css/share.min.css","3443060482a1ff40354403ba558c0894"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","ff308e11f7cae27c855ffdda07a5325a"],["/tags/C/index.html","676636489f8083e35f77e96b146d92a1"],["/tags/HEXO/index.html","f5feb03a3d54d6ee9b7f3e3092b53fbd"],["/tags/Life/index.html","e96ba1078eb729e18d1115ee0c24fffa"],["/tags/Linux/index.html","b7e59ec0fe797753651831bc815ce154"],["/tags/index.html","06e45e299170c9439016720de9799dcd"],["/tags/python/index.html","ac80c1291ca585175abc2e23050bb314"],["/tags/学习/index.html","25b213faeab95b8b95f790c14ce97da9"],["/tags/爬虫/index.html","5d59c7daa27ae59ae2f4b2fb33088c46"]];
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
