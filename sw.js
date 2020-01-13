/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/HomeLink/index.html","61d3ea5cd85fb8d4c8966df46b18bbc9"],["/about/index.html","0564d58683e65b5fc5b266c01774b31f"],["/archives/2019/03/index.html","e9268dfe50f739b0daa52b5dced4c373"],["/archives/2019/04/index.html","963175a0157cf5fccdddadc0efa8304e"],["/archives/2019/05/index.html","41da0761aa20a4fabfb99c1868d271de"],["/archives/2019/06/index.html","1d81e3baa50060e958769638b4fabfc4"],["/archives/2019/index.html","4f35022fa97777d0e707197981c8b7b7"],["/archives/2019/page/2/index.html","07151fe683bd424dad8f22aa7d914d8a"],["/archives/2020/01/index.html","3af793b6ad5620e91ca558acd64cabd6"],["/archives/2020/index.html","b0b1113037ac7db0b5b4b91fc384e4de"],["/archives/index.html","3caebddb85699a602528af5342f0b17d"],["/archives/page/2/index.html","e3de504ac277076542bfe65a8a7fc908"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","f4e0f63ce727dc07a53ac946276e18cd"],["/css/main.css","275a96da5e29b834c94e4b961e532689"],["/dist/css/share.min.css","1eca62a2fbcfaf9cf60f99c1f2219fc9"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","58ba605a73cf34bbf429562d393ce915"],["/js/src/Valine.min.js","ed37073d439ebf4c5a657edbc5fc74a9"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","f25ba6f1a80160a08a7b68d12726a5ce"],["/js/src/algolia-search.js","cd6e6e7edc236f722befda32f09cee47"],["/js/src/bootstrap.js","487250ab555777ee66d5695d30214d4c"],["/js/src/canvas-dance-time.js","8873e8a6fa0ee29ba89aa7f8b25faeea"],["/js/src/clipboard-use.js","8c058c1aaf6a8cf2cc0346fc0f02e205"],["/js/src/clipboard.js","0242d26f4f89089d08a668679d744ee4"],["/js/src/crash_cheat.js","6fd5ce80ed4de9149edb6243626e208d"],["/js/src/exturl.js","cdbd91346b30c1d07ae770cd7df60e40"],["/js/src/hook-duoshuo.js","4d98d1b307dfad6dec060c268725f524"],["/js/src/js.cookie.js","1959bd02a4d6a0433f15f32a48f657d7"],["/js/src/linkcard.js","2af3f7fd10b256751e1f7fe0ec6e8aa8"],["/js/src/love.js","091f055ff81f5dc5e3903f9d3b0d0ff9"],["/js/src/motion.js","22f027f0eed49a017b5f1e5d9575ad56"],["/js/src/post-details.js","fd6b9ba0d006c571b8d931c76757e839"],["/js/src/schemes/pisces.js","b9d96aea4aafd2cd4ebf33df732f38bc"],["/js/src/scroll-cookie.js","06943a85c64ee411cdb11b0b1a5ba5a2"],["/js/src/scrollspy.js","a7194ff2d776c326d3bb314578b5ee93"],["/js/src/utils.js","55bad74f00cc928b33e4c1c798830df4"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3b4dd7ab7b2a090e54be79cb59149bc8"],["/lib/Han/dist/han.js","cf0562fd1b8d915ccc35a92ce93d363a"],["/lib/Han/dist/han.min.css","5630d6d4b203445308e3680a8b61974d"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","a4de992ed7f5f0ad48be0861e508a7fc"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3a89720457482ca852272af3d1cb0fcf"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","bc1905311bfe18beadc8d8117f00669a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a89d11b80917e508ddd5bdefc13115cc"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4aec858a2287ec95f2d18f211dda2bd6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9a0c5660227ba96a83f27474af9ae9f5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7af0359954ac8fdf50097e7e6e79148f"],["/lib/fancybox/source/jquery.fancybox.css","83a1a689ec901a8880aca041b2676622"],["/lib/fancybox/source/jquery.fancybox.js","d7e455f1b1eec55c2fea0162010f1c8a"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","03b8f33e435a8acbcbf84f3f2630f3ed"],["/lib/fastclick/lib/fastclick.js","eaf7b595c88945169f9ee47d38b8f69b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2228091de53f6c96c67bcf30b91be4ea"],["/lib/font-awesome/css/font-awesome.min.css","2228091de53f6c96c67bcf30b91be4ea"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","ffac754782e8b1d58de6ac36d09c9194"],["/lib/jquery_lazyload/README.html","46248a67ed2f03993eda60f1ce314d59"],["/lib/jquery_lazyload/jquery.lazyload.js","f909a1a968a99463cb6c0c9f1169267c"],["/lib/jquery_lazyload/jquery.scrollstop.js","0804db86aa75a7a8fb042c11e182c25c"],["/lib/needsharebutton/README.html","cfea21c919c0de989b10bf00a7194499"],["/lib/needsharebutton/needsharebutton.css","65e7810e120feca94a69a5a36cbf1688"],["/lib/needsharebutton/needsharebutton.js","ce391b30865fe80152d64281a672a7fb"],["/lib/pace/pace-theme-barber-shop.min.css","659de4b9700f3a5bd36486088a565b81"],["/lib/pace/pace-theme-big-counter.min.css","28428e6c7d66427fb50cb6a7eb56e8b3"],["/lib/pace/pace-theme-bounce.min.css","5712978a33447332d490af59a2192702"],["/lib/pace/pace-theme-center-atom.min.css","02e2db141bf50f4d0a604efc58907695"],["/lib/pace/pace-theme-center-circle.min.css","96fffed24cbea1e0e8de06f99fefb4cd"],["/lib/pace/pace-theme-center-radar.min.css","f6c2831bc29502c42978e1c865fccf57"],["/lib/pace/pace-theme-center-simple.min.css","e0a636173330e6cdf51a0fd2b58b3634"],["/lib/pace/pace-theme-corner-indicator.min.css","824cd83edf77035f3f2fb2c4bb2451d3"],["/lib/pace/pace-theme-fill-left.min.css","eeff35b3674965af4f6a0f3a4282f58d"],["/lib/pace/pace-theme-flash.min.css","67965b2bcce1c58f14e0e90503435e6b"],["/lib/pace/pace-theme-loading-bar.min.css","e9634515fd81f59bad21620dcf9dcdcd"],["/lib/pace/pace-theme-mac-osx.min.css","b095836637e321eecde0854e59f2de8e"],["/lib/pace/pace-theme-minimal.min.css","b4ac4accf2995b7d47e2671257abaab0"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d6fb59c4ee1faa477f78f25eaa8b0b30"],["/lib/velocity/velocity.js","f6b896d8dbc9dd16b5f36ba335206eef"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","2f72783567c270d76fc82af1e619fdfd"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","c0dc2d38b60492c9566ab72a17b5e545"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","7ea0f794fdefe59cfe0dcf9c89819de6"],["/posts/10b67314.html","e3d79cb27cbeb6386dd7dee6101239ac"],["/posts/189af858.html","4ba3a8095cb980a51b7344d77b7c436f"],["/posts/189af858/failure.png","58307e81ffdff49c962a44696d742d13"],["/posts/189af858/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/posts/189af858/fork.png","268c9222930a615e0bfd334ec037cede"],["/posts/189af858/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/posts/189af858/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/posts/189af858/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/posts/189af858/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/posts/189af858/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/posts/189af858/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/posts/189af858/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/posts/189af858/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/posts/189af858/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/posts/189af858/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/posts/189af858/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/posts/189af858/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/posts/189af858/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/posts/189af858/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/posts/3610a686.html","78a3d89b5c169f953c3e02f63de12956"],["/posts/3610a686/dark.jpg","dda59940afb99346f0968d998897bafb"],["/posts/3610a686/git_account.png","45da9260edac9c4069393b98904f5015"],["/posts/554a01a3.html","441ccf722444ff73ba2b8bbe76751d50"],["/posts/5e3e2bfc.html","ef174085454ac5b3a0ceafa9079d228d"],["/posts/7d23856.html","832b0d0269ef9eef4260f0c5720df123"],["/posts/7f3bcd7f.html","54eca9380d5a0d618cac3213ae2eb4fe"],["/posts/84163328.html","4176c78067b0959b459163caf53a49a6"],["/posts/94271a3a.html","bdc2c4f40ced089bc8d1c010eb76f3f2"],["/posts/95eebd6.html","1ae3443ff21c1e38944c8189a35856a9"],["/posts/9be60828.html","16faaf957688ab51c1781dc9535510c8"],["/posts/a1751c09.html","aecc25e92f59cf16298045849ad43ccf"],["/posts/a625b86.html","30317edd7b6d8c6063ea2fd577247d53"],["/posts/a99288f7.html","f281947650b37202a90df74e8fec4bb3"],["/posts/b0289f51.html","bee844a09f03a6c2b18504926131d0b9"],["/posts/d52d06dc.html","30d2dd4dd564c6ee3025a3c8ddd83eb9"],["/posts/d87f7e0c.html","71e433b10dc49bd4a956264abf30d4c1"],["/sharejs/css/share.min.css","a3a69a5e34882067be7df97cb0b34691"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","5728324870dafb8c8b85c3f0b29d6a81"],["/tags/C/index.html","700e73db23d0ec4db0c2b6c1275efede"],["/tags/HEXO/index.html","72c7568ff2b253425fe17c3641c9c322"],["/tags/Linux/index.html","491919df6ac397c431e7128b4bae4ef7"],["/tags/index.html","47900e7c0a5c338c1a39e9fe2f1f125c"],["/tags/life/index.html","5c0f9eaeb8ace3bafe0014d73cdfe7b6"],["/tags/test/index.html","b586072f76096651a6132fc7ef58ce4d"],["/tags/学习/index.html","3280700416f1488a9db26609e73359c9"]];
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
