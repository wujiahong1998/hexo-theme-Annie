/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","007ea075b9c3aca65d34acf3ba75a565"],["/2019/03/27/Hexo博客优化/index.html","d1c3014f5061aca57d41d1b831b4f599"],["/2019/03/27/Markdown的基本操作/index.html","489131c5b6e148842e45f26e9fb2332d"],["/2019/03/27/Seconday/index.html","e7d4600124606f2c3398f0cb49894242"],["/2019/03/31/学生会个人总结/index.html","b1acded19adcc6909e7062e002c4e948"],["/2019/04/02/分治法/index.html","54eb54b7e9b38347ea292f12fa4ef8d3"],["/2019/04/04/HEXO博客优化（一）/index.html","e00f604acb85418806f7d78a830532bc"],["/2019/04/08/Linux-一/index.html","397aec2b828d123bc51ecb3359235d0d"],["/2019/04/19/C程序的编译过程/index.html","b872137aa92e627081b8129aadbc21dd"],["/2019/05/24/MechineLearning/index.html","b50e8b6b3402695872aeef66a80c44f6"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","e417a7f09737942ea7c512d0fff6280e"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","b86722b6ebc6fcc8ec0ae11222d76f5e"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/index.html","a5679a0388614607624aa5fd06ca537e"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/HomeLink/index.html","ecddb68eccc0523a3c85fc900236be16"],["/about/index.html","ea0e0b50bd38667ea00d8b4f159fd759"],["/archives/2019/03/index.html","60e553e1453d1a5196ce69fa0ebdcd06"],["/archives/2019/04/index.html","fddf627724a0b894bcc415d218e92fd9"],["/archives/2019/05/index.html","5cc6e31a91af86018e706f23e51bb9a8"],["/archives/2019/index.html","4bc5c68fb2b838df63b39035e39b8d07"],["/archives/2020/01/index.html","e1e2267b9f83a03daf0fae1f812719d7"],["/archives/2020/index.html","556e95d67b278557fe23a3138612bd10"],["/archives/index.html","d8480d4bd9c05790294ef9d08dcd1dc8"],["/archives/page/2/index.html","8499bed1356dc7aa8997326ac6c4b39c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","6cc019c8b04c829fe22bcfccd5ba86e4"],["/css/main.css","09b552d2145fe69f1fb280092bc1f653"],["/dist/css/share.min.css","bb99ec24148dbfccf1ee09511d19860c"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","6639e0687450f9b8db18c4df5a19c7cb"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","94dbc82bb3caa5f25af72d0ddddbb933"],["/js/src/algolia-search.js","8793f5b208222a705199814a91bf18be"],["/js/src/bootstrap.js","20ab5c29287ff95f9aff889d2a051306"],["/js/src/canvas-dance-time.js","48bec1df375aeff041c9dc2dc811b8d1"],["/js/src/clipboard-use.js","5cc6acbf1715a0e79d84400c19c9c3dd"],["/js/src/clipboard.js","2ddf4e1110ed5558c536bc940111d56d"],["/js/src/crash_cheat.js","306882ab6f42c57cdcc85a64d4d40fe3"],["/js/src/exturl.js","188c7a1399ccce8b11fc7e92d2114883"],["/js/src/hook-duoshuo.js","723e37341324a2ae4243923b6760a2e5"],["/js/src/js.cookie.js","8f8cc390af1d92d3539a3d4084d0524d"],["/js/src/linkcard.js","fb34ab105d57042e68855bdd91359d2d"],["/js/src/love.js","d02e882efee0a6240bf05247c39fe21b"],["/js/src/motion.js","71f5f5cdc6453cb32ba69f1de2bf0ecf"],["/js/src/post-details.js","e37d91d6947f3f54fa5fe9da148c9367"],["/js/src/schemes/pisces.js","0d1e9bfd98896262c1809b2579f85c52"],["/js/src/scroll-cookie.js","ebc726f59ed3145ba421e027ecea9c5d"],["/js/src/scrollspy.js","10a8c490d609579eacbc92b96f7ffe16"],["/js/src/utils.js","f87f8c700887d598ba38e63d5721bbe7"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","daf069ac6b3b77fb4c9ce126babc074a"],["/lib/Han/dist/han.js","613d952ad47ebc0ee4cf532252882eba"],["/lib/Han/dist/han.min.css","b5d72952aa477115809e92304e526ca8"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","76fb71f1b4875564518c38e9816e9b7f"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e3b2c69c409f2d2c461fd328874e6a05"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c51f9adb94fa771f3efbbbbe6a472afd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b8211379e6a7ef4e281f80f68bb85aeb"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","562dad733793a6068e9c4e0053dccf15"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","877c94ace4003772956178a641bc24e9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6d6c90bd383c402b9dfa30b6e769a46e"],["/lib/fancybox/source/jquery.fancybox.css","a5362835af15061465f9bb656c4981ca"],["/lib/fancybox/source/jquery.fancybox.js","73bd7f9616d47a14e051deef79c90bed"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","0ed75fa0d67361a36affa8e4fbe4c8ed"],["/lib/fastclick/lib/fastclick.js","e2bd40e3dc65555d68da01ee570fb8b0"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b711177ec016fca0c9057bad3301fdb2"],["/lib/font-awesome/css/font-awesome.min.css","b711177ec016fca0c9057bad3301fdb2"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","d91cb31c237a14b6975b1dc6c3ed803c"],["/lib/jquery_lazyload/README.html","caeaa13a00dc94ec72e1de2aba1eeba6"],["/lib/jquery_lazyload/jquery.lazyload.js","6d66816097b777f334e476e0027bf8ae"],["/lib/jquery_lazyload/jquery.scrollstop.js","9674d7958ab9714e58ce062bca55c37b"],["/lib/needsharebutton/README.html","3f0c6377d3bf459da9a31225d81854ec"],["/lib/needsharebutton/needsharebutton.css","d607e1305493043b0099a38d2afada42"],["/lib/needsharebutton/needsharebutton.js","69c188297511eac549a7c9e6000326d7"],["/lib/pace/pace-theme-barber-shop.min.css","29c4cf17aab1f5429b91a9a1ee5fbe9e"],["/lib/pace/pace-theme-big-counter.min.css","7dbde9114b51b6b4a3a8b81408488af8"],["/lib/pace/pace-theme-bounce.min.css","3e1d7da2130b8dfeafd40481c890a9c2"],["/lib/pace/pace-theme-center-atom.min.css","1cfd8786600653a764ddf58f9bbf9887"],["/lib/pace/pace-theme-center-circle.min.css","49a50c48e5f9941250f1ff89c7f9a49f"],["/lib/pace/pace-theme-center-radar.min.css","27f943d93dec2cc69b68e4e193735ff9"],["/lib/pace/pace-theme-center-simple.min.css","e7498de553a57f0b6db49b8bffcfef6d"],["/lib/pace/pace-theme-corner-indicator.min.css","4f610eb512b4ffc92f2e631f2f9ffb84"],["/lib/pace/pace-theme-fill-left.min.css","a449a26b669c6a9a331f634ec543c0f9"],["/lib/pace/pace-theme-flash.min.css","cd835aea91da7d2ecc55e2ba552508c4"],["/lib/pace/pace-theme-loading-bar.min.css","01003084d21492d2c6f8916ede921479"],["/lib/pace/pace-theme-mac-osx.min.css","a329251abaa85c1742e73eb8c488938d"],["/lib/pace/pace-theme-minimal.min.css","6bf0654b785a912c741bc1c9456bd1fe"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c9b0262791db5e06e4872031f5198739"],["/lib/velocity/velocity.js","c1c7f13d9a40b8c24367a7bd0a0660d7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","274fc980c994ee737746db5c3c5f9772"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","d6b9c12bba47e8368f2ee0f5d9f59b3f"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","b85935998ded365ed826342ac45e30c1"],["/sharejs/css/share.min.css","e50e39f70333114e9664706228a65eae"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","32e79c8d3ce3d33b349807141171ea6c"],["/tags/C/index.html","2d2187710408179c52262c88dab96547"],["/tags/HEXO/index.html","c05f3e5c2d9b12b5f9d6cc9e5ba3d9c5"],["/tags/Life/index.html","a4f5ecce03cbf9098b4c0a17ed114f89"],["/tags/Linux/index.html","8c4e058c248edcf6c1463ac3c659eafc"],["/tags/index.html","a984b0835dc2b33c34c6f9c94944126e"],["/tags/python/index.html","80974ebfa74419d02754c63742309a19"],["/tags/学习/index.html","c8255285c2dbb77990d80f8574ad37bb"],["/tags/爬虫/index.html","f66ba13d4fd2e252bd28aa9f41119c40"]];
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
