/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","4a1a681163be6940161aea5e8f4e417f"],["/2019/03/27/Hexo博客优化/index.html","f677c902beebd6ef0a93baa69ce57f08"],["/2019/03/27/Markdown的基本操作/index.html","9b3c5b783a706ccf9be995aba2c3af4b"],["/2019/03/27/Seconday/index.html","310907519ef984e79fbbdebfd77e4a47"],["/2019/03/31/学生会个人总结/index.html","4c34e3689fc6d46e6c08ffe4d5ec958b"],["/2019/04/02/分治法/index.html","0587496f9be2fff6533196c468c4a481"],["/2019/04/04/HEXO博客优化（一）/index.html","0840aac6f293e3e99ecd6f3606682006"],["/2019/04/05/计算机伦理归纳/index.html","a3866b92ba5e92c89c5a32c2b68da729"],["/2019/04/08/Linux-一/index.html","a0457cbf0d8d8ccbf9592868d5e45668"],["/2019/04/19/C程序的编译过程/index.html","61a3ea50a15802ce6a1ea9cf9a4b6666"],["/2019/05/11/专业研究英语/index.html","c4c3c8cb3ec4e6b111cd37db5ffee48b"],["/2019/05/18/动态规划/index.html","c151190308b7ba7127b238c28b6067cb"],["/2019/05/24/MechineLearning/index.html","3a2f3fa9cd9a28717df069832313200a"],["/2019/06/19/计算机网络理解/index.html","3949565d94c33c645fae3f19e3dab6a1"],["/2020/01/11/hello/dark.jpg","dda59940afb99346f0968d998897bafb"],["/2020/01/11/hello/git_account.png","45da9260edac9c4069393b98904f5015"],["/2020/01/11/hello/index.html","8dc1f9522486ddfee19e2e78712927fc"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","ffb07e7fdfe856b74656b30b476ecd5b"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/11/test/index.html","03c42a6b1344284db5f7ffa53e5b6cad"],["/HomeLink/index.html","57eb99cfdf27e820e9dd7a608757bc64"],["/about/index.html","ddecb8bdd9d73a40653de7bbb595bdc1"],["/archives/2019/03/index.html","074491267bc1e47e046cf9ac30ea93fa"],["/archives/2019/04/index.html","af53dbb8927fae53f73779e2d0421b0a"],["/archives/2019/05/index.html","021d516560c2e6f499eaf820614faa87"],["/archives/2019/06/index.html","c1612bb3c1fe7b55eb733c3ce29b0517"],["/archives/2019/index.html","03c5baa4cb21ad98629ab277064db7b2"],["/archives/2019/page/2/index.html","205bc3f82b37f9bcedb5d3c23353cbd9"],["/archives/2020/01/index.html","03865f18b8086f082707e14cd6cc7480"],["/archives/2020/index.html","8e998e9fb956a26c26ea4f6c981e8692"],["/archives/index.html","c96e7e07d91d981466583c94d12f7e16"],["/archives/page/2/index.html","3e630c077457f14e3adbfb5f06ad7b62"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","711061d17d206b40cdb4d86c2e88945c"],["/css/main.css","2f1a90c232a106fef9998bca3a3a00e7"],["/dist/css/share.min.css","85734d19eb076b93de64812e7d4e00f8"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","143acb966db2605c4d7f0f06b1e97ef0"],["/js/src/Valine.min.js","ed37073d439ebf4c5a657edbc5fc74a9"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","2223c9d1397e5744328e47719d7611ee"],["/js/src/algolia-search.js","983416f149fb9029c9937d4bf22366a0"],["/js/src/bootstrap.js","3764ea15e167b485a560dd29fe0247a9"],["/js/src/canvas-dance-time.js","0cb2f3a77efe33af11f229a70428585e"],["/js/src/clipboard-use.js","70b97e0b2613dfea7ea54dc23e4fb748"],["/js/src/clipboard.js","3de294e7c33c609f53f62fd875f37ce1"],["/js/src/crash_cheat.js","61d1e26c9b4db8b0d82f6cae49403e81"],["/js/src/exturl.js","273eabc7f72360d9fbe14cf9682f8f39"],["/js/src/hook-duoshuo.js","dff7f0c0c2bc8ea1bed192f8630b2fcd"],["/js/src/js.cookie.js","6022d3c08ef005711fc54ee35a94da3e"],["/js/src/linkcard.js","74efb7e8ffecdb712c0d171ab70e5286"],["/js/src/love.js","5c79b18c5f62c85f99aec5c991d840cf"],["/js/src/motion.js","5a0588618db31a7000ff7b101f5d7e20"],["/js/src/post-details.js","3550092d4f3abafaa5a126e0a3911e47"],["/js/src/schemes/pisces.js","bca0a3a11756297ba3fd4c0f95bf30f8"],["/js/src/scroll-cookie.js","85a8243d0d1ddf3eafd16c0a01d1abc7"],["/js/src/scrollspy.js","3fb9720a4660becc489f0f07efa779f5"],["/js/src/utils.js","36c5b03ce9fe438172a98cb38aa9b1d6"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","d36cca0a273c96cd4d9b5eac6818c6cd"],["/lib/Han/dist/han.js","4a31997aaafdb078efce7399e694331b"],["/lib/Han/dist/han.min.css","8b6d3309a0495042412d1a649d52bc7c"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","c399022a868d980c8c35e41b11e62547"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","5d62cc120b35022330e1c813b5c52b79"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e41b47952b10f7fd8c5c80f01f462fcd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","89eae5383b3596dfaeece04306081732"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","208941d3ecb44626eca9b0873e813b2d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","94f6bc3b0019e203243c38a98b9ea28f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1129de0ef837035c10df712798efc155"],["/lib/fancybox/source/jquery.fancybox.css","e36954d77c2e79832b79cc64a0abdae4"],["/lib/fancybox/source/jquery.fancybox.js","5d622551c27d0130a1613380b372cdc6"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","a3dc708d903a989e2fb55d7b5dbc01d4"],["/lib/fastclick/lib/fastclick.js","d9883a1c4bce6066d12f41bd40480f54"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","53f6c8671657ecf29affd0d618b3a414"],["/lib/font-awesome/css/font-awesome.min.css","53f6c8671657ecf29affd0d618b3a414"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","bf8b74ccafc8707e1ed85bb3c9078ba1"],["/lib/jquery_lazyload/README.html","91b07bc0480bd3caf6a62de2937fcef8"],["/lib/jquery_lazyload/jquery.lazyload.js","e38331d31491bcb7e97bdb5906ffff2a"],["/lib/jquery_lazyload/jquery.scrollstop.js","ed56e07da79546391025c29089a44f53"],["/lib/needsharebutton/README.html","54098bb0c282654a856fc0a72cc404ab"],["/lib/needsharebutton/needsharebutton.css","0fc096573fe57b04cdaf69101216f76a"],["/lib/needsharebutton/needsharebutton.js","78deff593891217649bd76db3f7e3d77"],["/lib/pace/pace-theme-barber-shop.min.css","63c325097c56de3a2cf32c0b39adc4de"],["/lib/pace/pace-theme-big-counter.min.css","af06924bc6ae6c0316ef7c2c4b8e3d99"],["/lib/pace/pace-theme-bounce.min.css","0974d120e783b6266119866fb7002f32"],["/lib/pace/pace-theme-center-atom.min.css","f479ac6ed0c79a14c0861eedae36499c"],["/lib/pace/pace-theme-center-circle.min.css","1e3e7eee002e01f3758bffdee557ff97"],["/lib/pace/pace-theme-center-radar.min.css","027bf957adc0c21a9d5708b0e67d2280"],["/lib/pace/pace-theme-center-simple.min.css","f128e03ccb22dc8cca5adc6e7d935039"],["/lib/pace/pace-theme-corner-indicator.min.css","2516c565831944702d02d815f519fc85"],["/lib/pace/pace-theme-fill-left.min.css","88d73bb14068e7635ab0ef04ba1ae87c"],["/lib/pace/pace-theme-flash.min.css","7046f4cdb2cee390f285d9cc0e7388ff"],["/lib/pace/pace-theme-loading-bar.min.css","c834e76e68706636cbee2dec2c34d236"],["/lib/pace/pace-theme-mac-osx.min.css","e17b41291ee74c1c616e25ef6160402b"],["/lib/pace/pace-theme-minimal.min.css","53977319b03d59536a706580ec8fd120"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","83d76ad2194c346d84bca009ca57c0de"],["/lib/velocity/velocity.js","f0a8d77d3e621fdb2a9f740c3e16958d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a3ace1f739c2ebbf605ec20c495eb9d8"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","dd8a65f20fc9ffe83c253f36927b96fa"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","9f1505293a7377eea6eb01523c693b6c"],["/sharejs/css/share.min.css","4de0965f857ec4b0f189934554b765ab"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","9f49fe38337e8e6764676bbf677d0edb"],["/tags/C/index.html","ad6fdccf3a97b0e4400435895041810a"],["/tags/HEXO/index.html","7eba83403e534413cb69413ffe8b037e"],["/tags/Life/index.html","696af94b5773fda8ac7222d4e13c8e1a"],["/tags/Linux/index.html","670ce7e61075681249d554b470a42a2d"],["/tags/index.html","edb8fb869f258ca960e7201d8ff687dd"],["/tags/test/index.html","c4fbcca37890859d29b083f795dafb60"],["/tags/学习/index.html","2405cedf425ad2d34d5611038c8c1edd"]];
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
