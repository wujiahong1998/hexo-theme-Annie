/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","0166f886ccc0cfb5750a4114d18c7534"],["/2019/03/27/Hexo博客优化/index.html","697245466432866dffd0eac1437e779e"],["/2019/03/27/Markdown的基本操作/index.html","e9d2376fae5ce769f9c259edf3d24aec"],["/2019/03/27/Seconday/index.html","f4ebda099713d1afdfc2167b8f118a5f"],["/2019/03/31/学生会个人总结/index.html","dd2c6e76d00e605680768758085d0f0f"],["/2019/04/02/分治法/index.html","24aaf427f3d87379f0f633bb369bea43"],["/2019/04/04/HEXO博客优化（一）/index.html","4ac0ea83d89d4046d70c2dbb48c956f3"],["/2019/04/08/Linux-一/index.html","e0575a91109b7764ed4dd3eb00981c70"],["/2019/04/19/C程序的编译过程/index.html","df62df9ba82f91e1750af53917e8201c"],["/2019/05/24/MechineLearning/index.html","114ef283668d3d7a226c757f848b31a5"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","fbfb13e97f5f0dbb7f7f8f669d913f39"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","e30728a68507e79948c1d5df0655e70a"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/2020/01/18/爬虫——Requests与Re/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/2020/01/18/爬虫——Requests与Re/index.html","9c54ecfdf2b6c910fff24f18968b06b1"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/HomeLink/index.html","14450d48aaa39b9f7b09505cb9c57699"],["/about/index.html","9d077711ced3a8ef68f7b18a6cef9359"],["/archives/2019/03/index.html","b5d36c837cb001e8ee2e6245d213831d"],["/archives/2019/04/index.html","dffdd42ff88449973db52b9dd205b634"],["/archives/2019/05/index.html","3e30763689ea9e8341d699d552b7e2ca"],["/archives/2019/index.html","c5e1f5e4e30a881209f799024cf6d8e1"],["/archives/2020/01/index.html","8361cffaaa657b07ce9d3df19feec11e"],["/archives/2020/index.html","84221064b94c8b64189ad048fcafffea"],["/archives/index.html","021ed940ee5bec2ed1545d46827f5125"],["/archives/page/2/index.html","b1e71f16e91a63dcb5015fdfaecfe5d6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","35c907dcbce62ee96649c529c438a2c3"],["/css/main.css","0db66d2798a48172c12519c63a24e119"],["/dist/css/share.min.css","b51da481b5b41e22ff11a46dce8911fe"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","cca7dd6b49d7ea0810fd81be922a3525"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","d660608531c1ad2bc3215152f86c8a70"],["/js/src/algolia-search.js","48177f6661557c1cc221c6b466907711"],["/js/src/bootstrap.js","480acacb55c4713b4efb9ed08c0e2456"],["/js/src/canvas-dance-time.js","a30401eadfdff49154b38752cf9bcb27"],["/js/src/clipboard-use.js","42137d07bbcf0c915961f9f73abb0c59"],["/js/src/clipboard.js","e6ad282fa2caa5e2c61c5dbcdafa0a0b"],["/js/src/crash_cheat.js","9260a7f53523484916aa20fd1fc049f5"],["/js/src/exturl.js","18022970553ab6173425bda3105259c7"],["/js/src/hook-duoshuo.js","66fe8709d64219758b89966eab2b669a"],["/js/src/js.cookie.js","fbc3e9dfee05bb92dfac69cf9ef8ce4e"],["/js/src/linkcard.js","0703da3c35c03f03065d01b0e4cd99d2"],["/js/src/love.js","8b9230e6bff7a8310807e2a46c6548c1"],["/js/src/motion.js","3f61f831e8841b63c4558055b4ad1459"],["/js/src/post-details.js","86ea673768b3aab5f0208bf1673263be"],["/js/src/schemes/pisces.js","193293a8536f32d29455330f5e187bf7"],["/js/src/scroll-cookie.js","32014c5e5676d96bc807da339bcf6dfd"],["/js/src/scrollspy.js","0950e81a1f060b1afb7324099d631adc"],["/js/src/utils.js","93e72a9d454ecde3efdc52746edb689d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","bbbe6b7c99ca8f513697aa59d9fbea04"],["/lib/Han/dist/han.js","abdf193d1eba723960d3565adb1d699e"],["/lib/Han/dist/han.min.css","9b6b9c7d573fa26f24eb8b9a3f9231a7"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","b5f4121cde3229d821dbe009645423df"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","20f59315a02a75b9196c7b7c123ebcbb"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","15965d1748e2c1579b652e9d3e65e6cb"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","3796e122bf2ff88931c4de1036035eb5"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6263cbcf1d83ed318b53c0fc935effe5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d1551ac095d8c972d20c9330ac0adb6b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e82fb4f559b865fdade65c81190205b3"],["/lib/fancybox/source/jquery.fancybox.css","b2032dc5da5d5921f9baf4ab66ccec34"],["/lib/fancybox/source/jquery.fancybox.js","b33a770c1fcc0bc1f102d5244ba8a707"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","2d6c0c5bb82cb6b9d13127edcb31f0c0"],["/lib/fastclick/lib/fastclick.js","2d7645b7e3e22e983e4aad557ea39c2b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2cef36223a8f2e8f54fcd7c27a69de13"],["/lib/font-awesome/css/font-awesome.min.css","2cef36223a8f2e8f54fcd7c27a69de13"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","0403933e649c8c43b60946f125e2b00c"],["/lib/jquery_lazyload/README.html","3f066140ec951173f035ae3aaa970ed4"],["/lib/jquery_lazyload/jquery.lazyload.js","21be97cd1d6ca6f56578c531a116e64f"],["/lib/jquery_lazyload/jquery.scrollstop.js","646f695b9f04b9c2e0ff6332e0b86202"],["/lib/needsharebutton/README.html","e805e9daf8a9100293a85cf3893b68b9"],["/lib/needsharebutton/needsharebutton.css","d39b9d75b9d4d157ed07ec9f1e0f367f"],["/lib/needsharebutton/needsharebutton.js","3627c10bd55cf7076c79a27288673c91"],["/lib/pace/pace-theme-barber-shop.min.css","9d9d895adbc09f768f97ab659f9edef9"],["/lib/pace/pace-theme-big-counter.min.css","237ee8e7a8818ef1cb6826d8cc9e496e"],["/lib/pace/pace-theme-bounce.min.css","c5e6319be945f56d07b50386ff8de6ec"],["/lib/pace/pace-theme-center-atom.min.css","274caf26f9dfaa2db508a080adae0025"],["/lib/pace/pace-theme-center-circle.min.css","21f229df3d91a6e34cae5e8db32079b7"],["/lib/pace/pace-theme-center-radar.min.css","d9e7686122a789f8afb18ca4efbb990e"],["/lib/pace/pace-theme-center-simple.min.css","9f6d5d9937b66958b8f7a3e7a961bc3a"],["/lib/pace/pace-theme-corner-indicator.min.css","cc1c9cbe0cccd1dc5417bc75e6b0074b"],["/lib/pace/pace-theme-fill-left.min.css","3d2a5d292fe6dd85b3ed058cbe2b10ac"],["/lib/pace/pace-theme-flash.min.css","0333d776a12f26691c792d3ce7fc4f20"],["/lib/pace/pace-theme-loading-bar.min.css","f8e710168b861078504db40cc3833048"],["/lib/pace/pace-theme-mac-osx.min.css","c6048f39b9235ada8022dbbd7e02c703"],["/lib/pace/pace-theme-minimal.min.css","cc0ba3d076fd9ab641dd71f28ad0c09d"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","82dc9708066c37d3774039b386650f07"],["/lib/velocity/velocity.js","3380198aff17725f341fad29605c6a8e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","7152d6f0bfd9031ea60bb1989a19c9f4"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","6cf566bccda4a9bf84b8a18a959b9428"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","0f893d78988c46c4d4af252fdb497253"],["/sharejs/css/share.min.css","878cd47bc062e1aad6bec13e0981e590"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","8e2cb20406c581e8a9669fac646279b8"],["/tags/C/index.html","ac577d7763f1fc3e9f39ff7bff3245c7"],["/tags/HEXO/index.html","41877a2056765cd90b1c76ff1b3fac54"],["/tags/Life/index.html","ce5c6e6f9f70609df3175bf753d9416e"],["/tags/Linux/index.html","b311d268006e860809a558fb6f6dea5a"],["/tags/index.html","3b05d9fbd8f6251b60ffa7870611cb5f"],["/tags/python/index.html","d42af2d4e4aee88319eb1e9537b88998"],["/tags/re/index.html","177c1e765d2ed6aae9326d363c4dc3e8"],["/tags/requests/index.html","e63eb0797ffda7c79888c53e0e70d264"],["/tags/学习/index.html","297eaa07cfd1b8287a0985e653517c52"],["/tags/爬虫/index.html","6511dbcf03beb83f58bad98e08dffc52"]];
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
