/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","be1fbee8bc8a65e206fedab446765283"],["/2019/03/27/Hexo博客优化/index.html","dd73bc6bffba5da3da530f9b9e8553c8"],["/2019/03/27/Markdown的基本操作/index.html","95e4aa1ff5734cef13f3a7ac91f71d8a"],["/2019/03/27/Seconday/index.html","0e1b2a9fb0a179f5539088bbc44a861e"],["/2019/03/31/学生会个人总结/index.html","4df3c6cee804b8bdf4fc223904c81843"],["/2019/04/02/分治法/index.html","11bb8182d4b9f58ed103c091bcaf6898"],["/2019/04/04/HEXO博客优化（一）/index.html","f43551ec06162ab5506312ef7ed29c18"],["/2019/04/08/Linux-一/index.html","9aedf8b3210dfcd6ceea8d9040f3e22d"],["/2019/04/19/C程序的编译过程/index.html","8e9ab2439956a7015b393baa0b4340ec"],["/2019/05/24/MechineLearning/index.html","0511af5f7dc801643d55c777bebf0cf7"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","4af2955b1b35a60c53c123d38d15c34f"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","7c4e944da16f20651d55ed986949d299"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/index.html","75d033d548b07bb2d5493a42ccbc03ff"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/HomeLink/index.html","944292cd515a5a073a3fe8aa68a9380f"],["/about/index.html","0783adcc50d25f9163a511b6d85846c3"],["/archives/2019/03/index.html","919834e517de14c66166cb08387057fd"],["/archives/2019/04/index.html","ef6f8307826a39a14f509d94e9a4323e"],["/archives/2019/05/index.html","c2ea92c30ef7a9b307df83029b498e13"],["/archives/2019/index.html","80a8046460969babf56ca2917598e6b7"],["/archives/2020/01/index.html","5dfc8267f806e12896b26677d1b55318"],["/archives/2020/index.html","a75bf91ea5924f16bc31dc095573e07a"],["/archives/index.html","4714a74d9645a51856ef52ccf6a98ae8"],["/archives/page/2/index.html","b2624d2ea0bab50e05b430a5a711815a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","0ef51e54a11cbba5e68713a773c8eccd"],["/css/main.css","e5c95ee34e2f7bcee2f18a9f01abb0db"],["/dist/css/share.min.css","444e3441d5cb642d3c0969f24b098361"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","48c5c14d12926e15526604d23765e70b"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","a0c5ca977b92f8df6e14217ff70b7a3a"],["/js/src/algolia-search.js","c99aaa19e344e3fa74d83baeccef84f9"],["/js/src/bootstrap.js","4e1887a1a3ad54ab340075776aa2d4cb"],["/js/src/canvas-dance-time.js","cf18c989aa6aaeeb5530df193ae47184"],["/js/src/clipboard-use.js","643feb19b84b8dd004f1f38de8391904"],["/js/src/clipboard.js","640ca905cfabec0be80e37a0ef1f5b19"],["/js/src/crash_cheat.js","07ede9771741c8b58ee7f415e9974736"],["/js/src/exturl.js","c867eaf746dffd8b362b6d3e1e0c1162"],["/js/src/hook-duoshuo.js","5907bd18ca749ab711d36627be1664c1"],["/js/src/js.cookie.js","1720593fe5a1991df745abe94bad3e8f"],["/js/src/linkcard.js","849835a4f73b6ba72cfefb323a6d4071"],["/js/src/love.js","1af8223fa5208f59934fab1af08a6951"],["/js/src/motion.js","9b96ed0370ece0c84463525b0acb5a32"],["/js/src/post-details.js","81d25216d2d6e947b87a7af930753fe9"],["/js/src/schemes/pisces.js","48c6734e80c5542062eb4f93aaa7c2aa"],["/js/src/scroll-cookie.js","ed9234e2764f7568c7425535af609b7a"],["/js/src/scrollspy.js","6a92ef0c3ea9b3a7e89f1531b5999105"],["/js/src/utils.js","c493f3305e1619dd67e45dd8934d8001"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","95bde4a561299c24d68bcf900292eaa8"],["/lib/Han/dist/han.js","e5cf1455a1b3aa4057f46319de9aac5a"],["/lib/Han/dist/han.min.css","08da8f9e33e1921be8955cd0cfbdc440"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","172188827ec0a115e324a834265c1444"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e0ff72ef9a5e21039bec3a2badda7fa4"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","8d89023a5bd56937562dc8ec806ec00f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ca08ee3dd302931434c01d788844b435"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","95bb82e7fc2416e3fb9493bab8b42b70"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d44986ec509b5699f0358a98b0dfbd44"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cb2839ff47135a1d33415de860b4dc36"],["/lib/fancybox/source/jquery.fancybox.css","4e528358119d3f4ff573a50acb2828d0"],["/lib/fancybox/source/jquery.fancybox.js","bc6ec975e913b141899be8f5c7499fdc"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ad9df881c4429baf95efd6cccd63279d"],["/lib/fastclick/lib/fastclick.js","7b630a799e3ce3aafc0cc1af371374dc"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","ec09954c8c4c9e3a3f1f5ec276649a65"],["/lib/font-awesome/css/font-awesome.min.css","ec09954c8c4c9e3a3f1f5ec276649a65"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2360b94d5edd554fce915959b17f8ae"],["/lib/jquery_lazyload/README.html","3141de3bec9b8c9782c5f5998c4e2708"],["/lib/jquery_lazyload/jquery.lazyload.js","b46a47e234fce7fe422cea4db6a35a62"],["/lib/jquery_lazyload/jquery.scrollstop.js","23b913d44f209c9479f57e8bff514bbe"],["/lib/needsharebutton/README.html","63dea63e378fa43ef4812f4783f44da3"],["/lib/needsharebutton/needsharebutton.css","73aecfd39a274933651d8e995ba901e8"],["/lib/needsharebutton/needsharebutton.js","c616ca15c101836cdb8089fbbad81190"],["/lib/pace/pace-theme-barber-shop.min.css","81b86b0239b3f0dbc05f9eae885918af"],["/lib/pace/pace-theme-big-counter.min.css","ce9a2228f24e630332c14ad2e8e4dde3"],["/lib/pace/pace-theme-bounce.min.css","faf6af38807f1bf3d6b4756fdd684271"],["/lib/pace/pace-theme-center-atom.min.css","5b084b715bf8ff15713f799ff22767c6"],["/lib/pace/pace-theme-center-circle.min.css","b2e4c9868fa783ed605d2fd7dea5b346"],["/lib/pace/pace-theme-center-radar.min.css","ddc38ae3e00e8e05a6699927d7e878d4"],["/lib/pace/pace-theme-center-simple.min.css","4363f2231abab1964eab0f7edd981bf6"],["/lib/pace/pace-theme-corner-indicator.min.css","5f6aab567f99e9e1e99b98f79d9a8b6d"],["/lib/pace/pace-theme-fill-left.min.css","34f4e70cc38b9156675eb6b2073473d9"],["/lib/pace/pace-theme-flash.min.css","d1fb8c5258b01b68fe529c169a691850"],["/lib/pace/pace-theme-loading-bar.min.css","cd2ebf55c067a0a29f02124d1b5448c5"],["/lib/pace/pace-theme-mac-osx.min.css","352282ce9c5a3df4b949f95269191a1b"],["/lib/pace/pace-theme-minimal.min.css","39a9f7c07f5032b886d7c5d25ffdcd10"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9f96fd828493de909f5c8fc2bcfd86fd"],["/lib/velocity/velocity.js","482f8165a86722120bdbabff991dac07"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1e7c1048a4fa186c5116bd6043976cda"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","5b19d2cfe6c3f3c819b1ba0c4c4b1ba2"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","ace9336838d7749538435bdcecde4b44"],["/sharejs/css/share.min.css","cc61fb468c81992ba20093a4545259d0"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","56f2ddb37b63653d2c3a090966d84768"],["/tags/C/index.html","92d6aec04e72c9de856a81666bdfd3a8"],["/tags/HEXO/index.html","bc8b523825ec3012517de8444b0f0b0b"],["/tags/Life/index.html","b3d86d641b86f751918ca4784f371f89"],["/tags/Linux/index.html","b8cf9c315690a1581e84e27e30b4cdd5"],["/tags/index.html","ff60100c4d24fcb82485ec5b7253eba6"],["/tags/python/index.html","42021f2dff618b5908286685d5ba09f0"],["/tags/re/index.html","e8da8950f1a00c2897031364eaa4fcc2"],["/tags/requests/index.html","27c9b82cd4fa7ef30df570e9d426dcdd"],["/tags/学习/index.html","400b9dba2091fd2896e651dbe2c7ba1b"],["/tags/爬虫/index.html","d79db1107121b71ca3a64c38a89a6a1b"]];
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
