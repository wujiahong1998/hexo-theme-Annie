/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","82d4f589b5818379deaa358b48b3ea96"],["/2019/03/27/Hexo博客优化/index.html","9318ac01b1c4a8084b2c049f5ac84a68"],["/2019/03/27/Markdown的基本操作/index.html","db5bd0127b40339df07740b75f24864b"],["/2019/03/27/Seconday/index.html","ca7dc365d75c7448f5f355d2fb11e772"],["/2019/03/31/学生会个人总结/index.html","e5f92c9ab40bbd12fc6cafd9b181b9a3"],["/2019/04/02/分治法/index.html","40f956d0d9179bf4f4a0a20639e0c077"],["/2019/04/04/HEXO博客优化（一）/index.html","dd281db7809a2de68e6dbfaa88efe1a9"],["/2019/04/08/Linux-一/index.html","af59ce7e200fa3cecd7e77984ee71be1"],["/2019/04/19/C程序的编译过程/index.html","e696e4ce5ac2698f632c7cc4c7e46a0d"],["/2019/05/24/MechineLearning/index.html","8c3670c9b82d1d4d35839b371bf1f78a"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","6f34a35c62da77205fde93e7cc208f54"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","e3aedd80e5cf6fccd0a43937c232e33b"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/HomeLink/index.html","10d8785a3582d38aabfda5cb5c89e2e1"],["/about/index.html","043e5a5be4dc8955c92da343ecde3e90"],["/archives/2019/03/index.html","a1fb5df3e1a84ccfed3ed10973c37e1c"],["/archives/2019/04/index.html","b6237258effed86b6079a2dfd66c3909"],["/archives/2019/05/index.html","b6e885d5ca5cdf7a926a71385a0c77ce"],["/archives/2019/index.html","4876bca0287025c93c08403b499b300e"],["/archives/2020/01/index.html","655e70caa12cf750e28b34137f9772d6"],["/archives/2020/index.html","d7154194df1237aab6423e89f84f4754"],["/archives/index.html","fdc23033613f358c24a3d8b1a8779249"],["/archives/page/2/index.html","c132b91a73cd268d6d4821a882b911c7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","0d51afb0d1e93c3b4be4d20729d47442"],["/css/main.css","d0d9702275491b2e6883211bde005ead"],["/dist/css/share.min.css","19427853d195f297644ec2a565a70b54"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","36d9424f2b49a4baa746693e76ae5297"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","9733640291662aac4642e8c54d1880f8"],["/js/src/algolia-search.js","ac9b076b6bc885c4943765298081d9eb"],["/js/src/bootstrap.js","ab519201e1b5f08787e8726fc49df7e2"],["/js/src/canvas-dance-time.js","016fb8cf5e88f2d5bd266eb7208be71c"],["/js/src/clipboard-use.js","0b357f0647c8d65b82caeab976b50b86"],["/js/src/clipboard.js","0a8d2f174098693f8a6e0428cf09d92a"],["/js/src/crash_cheat.js","7fb3489fb275ee43fe9956d868547e68"],["/js/src/exturl.js","2bb95daa9b7a7eefa2d6f5ecc0c87b79"],["/js/src/hook-duoshuo.js","e19ee644a70d55bb5599178f1be73192"],["/js/src/js.cookie.js","c5b776f99169a87ac445b473aaaedb3c"],["/js/src/linkcard.js","05c159d019ab2d94d99bfa1672567207"],["/js/src/love.js","08d794637cc80e5fffcdd28737af3f03"],["/js/src/motion.js","739344e4b51bfdf4e8622b8e13734c5b"],["/js/src/post-details.js","5d83078aa1c571011fba80005e860137"],["/js/src/schemes/pisces.js","614afa7078b7d17322282f5d3206d927"],["/js/src/scroll-cookie.js","0924ab60741b69e4d4a3718c3e82ae0e"],["/js/src/scrollspy.js","afbb5cec461412c5829ee4984da36a88"],["/js/src/utils.js","c964ab6eaf1d1682abc48a55c709a3df"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","197436c5e01284393c10e865c15c16d9"],["/lib/Han/dist/han.js","9dcbbc835db304512af8e392c69628bf"],["/lib/Han/dist/han.min.css","f35b2938170e1edd0c0b2df78bd07ff6"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","136d21688be90a84be8602c6ea37339a"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7a26a6adf38230e9974d5b36b0702fe4"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1b1b247800d9dd7d7d56ed148de08a11"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","5e3e6ba208ce7eec8b4bb94b3635f294"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","87dbb55aa66797bfb7ba46bf3215f90e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","691714aeb1ff0f4ceab14b5b46ef1088"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","8c5ef936ce537515c0e611b20558ceea"],["/lib/fancybox/source/jquery.fancybox.css","ce55937de0f010674a04be11f6026cd9"],["/lib/fancybox/source/jquery.fancybox.js","4141cd6018f352773c4a9fb09e6d8b8f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d996764bcc846f86699d5f7c54953b26"],["/lib/fastclick/lib/fastclick.js","42607378525d48a250605f84a376cb0d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","7df1d102a66da4d2b01f3ed02e18f5de"],["/lib/font-awesome/css/font-awesome.min.css","7df1d102a66da4d2b01f3ed02e18f5de"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","6b4619c6691d268af339db45d2876ebc"],["/lib/jquery_lazyload/README.html","154eca00e087d062501d972d97462e7a"],["/lib/jquery_lazyload/jquery.lazyload.js","6ae3c2d5419f1ace445f4e5e23e94f27"],["/lib/jquery_lazyload/jquery.scrollstop.js","0a9a5e538e113409b6e9e4a0d0583e7f"],["/lib/needsharebutton/README.html","ca8df93589270aa33503989d46f4af55"],["/lib/needsharebutton/needsharebutton.css","3ddf714ab8cea1c06abbb2dae4cc0786"],["/lib/needsharebutton/needsharebutton.js","6be82c2579a0de29e3b5603955386ebc"],["/lib/pace/pace-theme-barber-shop.min.css","2fc1f69e8bf00246278d3a617e2bebe8"],["/lib/pace/pace-theme-big-counter.min.css","ef751c4bbf4de5d58103169b6eb99b05"],["/lib/pace/pace-theme-bounce.min.css","b1b977687560310250de292804183c5d"],["/lib/pace/pace-theme-center-atom.min.css","3a83cbacc001dbd695856ee934eb74e9"],["/lib/pace/pace-theme-center-circle.min.css","d603f54e0ab49448409787b330b22a90"],["/lib/pace/pace-theme-center-radar.min.css","5bf74e44d91e77d66ce2cfc672ea915b"],["/lib/pace/pace-theme-center-simple.min.css","bb6d5475065ab4b028e5cba5dead1538"],["/lib/pace/pace-theme-corner-indicator.min.css","7f081453cd17dc985210330ce9cbb17d"],["/lib/pace/pace-theme-fill-left.min.css","1fe767e6657edd48fd4617dddbadfee8"],["/lib/pace/pace-theme-flash.min.css","2ebdecabe977586bfe505c3fac6473be"],["/lib/pace/pace-theme-loading-bar.min.css","7205116d28a169b2b47905779765bd23"],["/lib/pace/pace-theme-mac-osx.min.css","ae043bfb878af61a67ed7a3d1bea3ad3"],["/lib/pace/pace-theme-minimal.min.css","ef1355c0a6658aa6834a792d12ec0378"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f9feaccf78e7de52e139f2d53dbf1d31"],["/lib/velocity/velocity.js","1a282c602b5afe588f2d505af116ca7d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e41d2171609ef4cd5943e76ef1c98577"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b335a54cbe897f82032a857e6acefcff"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","cdb87fb27042a3f1c765884e6681cc2d"],["/sharejs/css/share.min.css","9aa56f17b903f4e4e8f1ccabff20ebf0"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","f6cf2e70322aeca9aa1899ab7b288d6f"],["/tags/C/index.html","6f6f318aaa0d446c1fb5680075d2bd35"],["/tags/HEXO/index.html","4015a632dbb9abb98f33a96a16a3a26e"],["/tags/Life/index.html","d34a388e5c88d4ecec00368bee7bdda4"],["/tags/Linux/index.html","a49caad4b935f9d9247af78c233c44a2"],["/tags/index.html","c1dffde8b4dc3203c822fbbf1f7bf554"],["/tags/python/index.html","7f2d1736e4559c6a3ca2f60342f3e401"],["/tags/学习/index.html","83cca2cef553219e7781a8c69b62ead2"],["/tags/爬虫/index.html","c605c4979f81e9c610d308dc0fe1eadf"]];
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
