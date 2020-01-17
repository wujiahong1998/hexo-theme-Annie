/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","4638772f8d8f275f7dc3c0e9c7f1e78c"],["/2019/03/27/Hexo博客优化/index.html","bf4c6813d17eee626d01ee4441a794f0"],["/2019/03/27/Markdown的基本操作/index.html","a8ef2eb2c4c66ac1b9ce9de6a9a09405"],["/2019/03/27/Seconday/index.html","7ab82616d4b887b3cd69d4af98e53cf3"],["/2019/03/31/学生会个人总结/index.html","67ed11ede66cf1f3a6629c49ec1bee91"],["/2019/04/02/分治法/index.html","ea1a265ca53e83ff21e857d416c1760a"],["/2019/04/04/HEXO博客优化（一）/index.html","1ea2ca7b0afae0ddca87f31a6accef63"],["/2019/04/08/Linux-一/index.html","4a45fef7257bfecce1b7a7d531277eda"],["/2019/04/19/C程序的编译过程/index.html","fb819b189a3edd1592367f57e529275e"],["/2019/05/24/MechineLearning/index.html","d6e4b8d20f608f78298f7a4c4d7ffc06"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","6c3a1e0e5d13e501826c11b4cd3e7acc"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","f8fa7a29eb350f635531bf4a60cbdbc1"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/17/1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/HomeLink/index.html","18ea2e64f2a18517312f74619ee62d09"],["/about/index.html","505395c658d99fbaa8459c21e4e39752"],["/archives/2019/03/index.html","865200274c36afe50b520492e6e87c68"],["/archives/2019/04/index.html","22f9917916f4e419d588a5e6edc98ced"],["/archives/2019/05/index.html","0590a1757ca3fe10f4ea747246f2f1c4"],["/archives/2019/index.html","047bb8acc6cc7620ccec493c6223cda4"],["/archives/2020/01/index.html","c382f81caec89981c4e27305575538e3"],["/archives/2020/index.html","35fc48b22e57946c268eca4a5a55af0c"],["/archives/index.html","ae6f1708d2ac4a8b39ee6a4b6b24b45e"],["/archives/page/2/index.html","75eca1e9aa54ed79d4e128c2f6ef1760"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","7c140a658f734ec4f26729e328da3708"],["/categories/资源/index.html","a2466acc7ba91ba732b1cb272f5efc70"],["/css/main.css","1d2c85928a3423a02e50e84cb388f4ce"],["/dist/css/share.min.css","183aaf537b3ff4bb2f481e3e15c7d440"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","88686064c6b98c5e611aeca5f9918b9d"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","02b21b3c9e52c51ac3ce2b8d083c7209"],["/js/src/algolia-search.js","c7a8c55bbdbbab8ebad8f046002ec607"],["/js/src/bootstrap.js","df20ea89e602214c51fec9110e9772dc"],["/js/src/canvas-dance-time.js","fb6bd0a53787c8d6ff10d6646441546f"],["/js/src/clipboard-use.js","2e5ddf76b73132df504f3febe70bfc93"],["/js/src/clipboard.js","b2859fcea881cd984cdfa53a4e9d4ae5"],["/js/src/crash_cheat.js","0b15018fcbf49cae4aa96d2f3528d86c"],["/js/src/exturl.js","73c699bf4bee1f2cd5f6bdf94ec76091"],["/js/src/hook-duoshuo.js","e82fa12c5ef758c22ff38c1d50686563"],["/js/src/js.cookie.js","4ed2b77e767c7e88511dbe743b431558"],["/js/src/linkcard.js","edc1c17aee37200d9d18df38acbba34a"],["/js/src/love.js","8aac3a0c7006c451f5e095bbeb68e82f"],["/js/src/motion.js","22ee62cc40c01623c90a76d08b16b398"],["/js/src/post-details.js","4ec21d36b2391dc85d1a759e4137a159"],["/js/src/schemes/pisces.js","7b73183510b0e5012d3f6923ce9d5cd3"],["/js/src/scroll-cookie.js","671c6d6a4f23b3e4c6dd7e70ba025533"],["/js/src/scrollspy.js","e2a3bcc8ba42ce5461c1aa0c3b1f2ba6"],["/js/src/utils.js","9fb89fbb9582201f2e04ce123d7dd880"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","053ff1eb8bd96a275ade8de672c430f3"],["/lib/Han/dist/han.js","bb6458cb62f8351d61049b71cfa625e2"],["/lib/Han/dist/han.min.css","27e179c84c0853e6c734bc7570bc9afe"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","90a5c73a335cb93284dd21f9b4742b8a"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","1333824bfe4cb25b1bfe78024283201e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","99322ea84f0d73bb68d638fede50baf0"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","19765cd66486cf7213ac9256b560fb8f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5a695f55d9ddda04714464aa6c2d31b5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","60506b3c3fa1e789c439b938615892dd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","8f3e0913086ea544f063097b60e42d5f"],["/lib/fancybox/source/jquery.fancybox.css","be9c968bb124aa2f0f2c36264fde0192"],["/lib/fancybox/source/jquery.fancybox.js","aba856e2e331ce5ce7260219a7d87655"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ab96f7f691e0956f2cbccc1de579cbe4"],["/lib/fastclick/lib/fastclick.js","995b7c4997d6fded16676f3a31dfa26d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","ced9a478f74060472b6bd5e33f55fc56"],["/lib/font-awesome/css/font-awesome.min.css","ced9a478f74060472b6bd5e33f55fc56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","8d682f2f2ea4b220a4f49b3d005e07b4"],["/lib/jquery_lazyload/README.html","d076c71af357de91a971d74379cfceb6"],["/lib/jquery_lazyload/jquery.lazyload.js","e8dc9897133bbecc74c0b1246d8022aa"],["/lib/jquery_lazyload/jquery.scrollstop.js","a4d6cc969a8c1dbbe99410f2317bfd20"],["/lib/needsharebutton/README.html","af8d48422f346963bf55035f828590ae"],["/lib/needsharebutton/needsharebutton.css","164836bcb6d58b54fd3c73a6b719c157"],["/lib/needsharebutton/needsharebutton.js","a869f9ef9851576380b2c074117b0d4c"],["/lib/pace/pace-theme-barber-shop.min.css","8fb767629cd4ae242722e40f135c52de"],["/lib/pace/pace-theme-big-counter.min.css","519804e0ebbf1518f00cdadd4dfac969"],["/lib/pace/pace-theme-bounce.min.css","2d582a690389a5f4c1bb4700fa447c18"],["/lib/pace/pace-theme-center-atom.min.css","b0526fae9d2045afa59570f57e39c2c4"],["/lib/pace/pace-theme-center-circle.min.css","fc836d8602b0f1922d7202c659a397d9"],["/lib/pace/pace-theme-center-radar.min.css","d6aa39b319c3ee0340dc51d9d26d559f"],["/lib/pace/pace-theme-center-simple.min.css","420c8a53949adbf42fa16ecaee605c67"],["/lib/pace/pace-theme-corner-indicator.min.css","59bc9f74050b76ce67caa0d3f509337a"],["/lib/pace/pace-theme-fill-left.min.css","a304e08c33ae3a8aaec11fc4b32938a0"],["/lib/pace/pace-theme-flash.min.css","9696bd6189690d7e565fb91c0fa86d4b"],["/lib/pace/pace-theme-loading-bar.min.css","e5d40c9260ed894409524aaa0dd22bef"],["/lib/pace/pace-theme-mac-osx.min.css","e27dbf60a6045085942e5168a0f097fa"],["/lib/pace/pace-theme-minimal.min.css","4f549646c0a06c7959f9542cc9c6a722"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","2fd39192b5ad818fa53107f57842f3ef"],["/lib/velocity/velocity.js","fde67d2027e67a5913632c89d22cbe8c"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","68618392206cd06316f14d1339fc29c6"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","2000b886ddb4fb8f104a2f597811dfbe"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","6289cb513d5906c528cdc758f4899083"],["/sharejs/css/share.min.css","b3199ed45fbeb9893114cecb07f0c2d0"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","f1b26ab8a1cbd2e1f1b8561fa0622994"],["/tags/C/index.html","6f1034cde0e8979e7bead854cbab9a4f"],["/tags/HEXO/index.html","015a7ea645df1d41f6f51becf7c27efc"],["/tags/Life/index.html","74776b82e761dadb9ba0d134b664603b"],["/tags/Linux/index.html","c8b39ac33c37a76ee7166d1a84685abf"],["/tags/index.html","b19581f9a467b626ffd5583a6a685925"],["/tags/python/index.html","92840582312da19d3ce06bff59ed6fee"],["/tags/学习/index.html","4942302139810751382665d10201562d"],["/tags/爬虫/index.html","464a5115a7839d2ef857c616a82336db"],["/tags/资源/index.html","8839a281f1029400404575b4287fc2f6"]];
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
