/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","ee0e50c589702f48379f1d5c6f062925"],["/2019/03/27/Hexo博客优化/index.html","79a3f703bfe4a0acbed6cdf945264a10"],["/2019/03/27/Markdown的基本操作/index.html","7dade867ae2b21f7f9edf3f32659cede"],["/2019/03/27/Seconday/index.html","6314566ee20854511fc8f4110a6bf604"],["/2019/03/31/学生会个人总结/index.html","e78552437146f64d688359255e627654"],["/2019/04/02/分治法/index.html","ad52bfaadc5e9212a7d2ce7111019097"],["/2019/04/04/HEXO博客优化（一）/index.html","fbcac5e65739e688173e41946f7797fa"],["/2019/04/08/Linux-一/index.html","a04e6ce8b0ef6d1dc4ae0185c7dee683"],["/2019/04/19/C程序的编译过程/index.html","20b19bc4f7d98082698c7026571037aa"],["/2019/05/24/MechineLearning/index.html","bb6c9579ad62085a83bca3cb8d5383f4"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","f106d3239c833c1199a07ea74dd27a60"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","05acbd0f3ab7d0b1341e3ab6cc5da3e3"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/2020/01/18/爬虫——Requests与Re/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/2020/01/18/爬虫——Requests与Re/image-20200120141528343.png","05ca2d6d6b22ccb2f538f29efad0159d"],["/2020/01/18/爬虫——Requests与Re/index.html","3d77e7ead9a61bae9c08aafd7a9f9290"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/2020/01/20/Ajax数据爬取/image-20200120152827659.png","0cb1d08eaa7bee663121e337876ec328"],["/2020/01/20/Ajax数据爬取/image-20200120161016067.png","b82446a1a3d2c8b8e706472ff601bbbc"],["/2020/01/20/Ajax数据爬取/image-20200120164724335.png","3839f0f5d80d290b5dbfd0daacbe7315"],["/2020/01/20/Ajax数据爬取/image-20200120165259876.png","ea8ca5c167eb01dd4a1e44f26d513540"],["/2020/01/20/Ajax数据爬取/image-20200120165412671.png","b0efb1386e10837a7399b39a2b05b46c"],["/2020/01/20/Ajax数据爬取/image-20200120222739282.png","310cd35fd8c7385d2dd759205e70cfdb"],["/2020/01/20/Ajax数据爬取/image-20200120223146759.png","969c7858808e79551454ea87e505615f"],["/2020/01/20/Ajax数据爬取/index.html","4f93408e6a1743a874c9ba74b7f931d1"],["/HomeLink/index.html","8a491beaef2b159730969cba6939791c"],["/about/index.html","fe62ca4e152ddb0fdcec357514de0bf7"],["/archives/2019/03/index.html","ac96255f7c1144a6f51d5a997b2b68ae"],["/archives/2019/04/index.html","6eee58f7e01a649b0494c019b43ce180"],["/archives/2019/05/index.html","5c332b8df20c65126388375d7713bf09"],["/archives/2019/index.html","d75a52fc32b0d56c4ffe17386d973b9c"],["/archives/2020/01/index.html","7e72b395255f966c6beb42077f78a8c1"],["/archives/2020/index.html","4695379e11bd5a7f00366c2cf624e1ae"],["/archives/index.html","97174fd71562806ebc01be3bd13ebd3d"],["/archives/page/2/index.html","e9226348bf066321aa6bf2efe9f3c72e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","58fc8521f2b84c04c3e0b26953a190e9"],["/css/main.css","c9940bcecf6f28e6176c7a0cc2c2d620"],["/dist/css/share.min.css","cfe068eab8645bf90a90e6776e19bd62"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","2cf6205e2912f825661d833fcb177892"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","f8524a3e531bf83a552455e7adbf3bd9"],["/js/src/algolia-search.js","a1587b335661dbb51756fc9503433a35"],["/js/src/bootstrap.js","9835d291d14c307538096266658dff0c"],["/js/src/canvas-dance-time.js","b8af93d7eaa8b29bd48047e7ba391c0a"],["/js/src/clipboard-use.js","09644991b9c1a5e9db3e96dee36b61f9"],["/js/src/clipboard.js","50b5088d84947062a6322e1b8a22d775"],["/js/src/crash_cheat.js","247337ed0ba116a420b8b4a68b8ec5df"],["/js/src/exturl.js","2bf4077ef268ee2bdf8e1b09384f7849"],["/js/src/hook-duoshuo.js","06d3b493634e796a42c9f3d6571ee1a8"],["/js/src/js.cookie.js","9fc22d099aea7e1463e8fdac57d15141"],["/js/src/linkcard.js","28049f43362216891e04f39bceb843a5"],["/js/src/love.js","43ea86032da4b981440150090ec18177"],["/js/src/motion.js","e1b951f85a5ffb30603f0d99751b1cd8"],["/js/src/post-details.js","05b68970d4d70a0ad9cfd88ab66116a2"],["/js/src/schemes/pisces.js","1fe81d2db6f4456071f86b112b269047"],["/js/src/scroll-cookie.js","48bbcc41bb92e55dee72536efb897037"],["/js/src/scrollspy.js","34b192b245535939c43c27396037593b"],["/js/src/utils.js","be2ae582ec1071a44fdb2588c44e63c8"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","696eacd4ba6548b697989d3c2a227fd3"],["/lib/Han/dist/han.js","5184b4f281bd7c829b1cee9ba0aa186f"],["/lib/Han/dist/han.min.css","81f3dc3439c7486aa204e34277a9aa6d"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","ec6bc2a95dcc33e35e18b41982ac6290"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b4dfa28724234d808c144d900ad9ee1b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","aaa37cbcd380118cb38b7f6010ac1818"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6f14aa832642ff75179b8b9f7f151b15"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5537d111ae3682271ba2b38fe6e81862"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f5f17ab2298f209124a6138efb325bd9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","622c62931fc822d5da24ded91022c15b"],["/lib/fancybox/source/jquery.fancybox.css","c053f32b94132c74ae2da7d6b3ac80e5"],["/lib/fancybox/source/jquery.fancybox.js","d0a58c7bb3d76b91e38932f482c3c4f2"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","3d9105a3ce6ea0d79a41313d226cedf9"],["/lib/fastclick/lib/fastclick.js","89e052eba431c7d6aad50e0aaaf7f5a0"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","15f8b535ac24a60576c56421badfbd5a"],["/lib/font-awesome/css/font-awesome.min.css","15f8b535ac24a60576c56421badfbd5a"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","ce6a9bd748c2564cfb5fe47e8fd6b237"],["/lib/jquery_lazyload/README.html","b4b20c1f40fa7804d1b7f034743a6869"],["/lib/jquery_lazyload/jquery.lazyload.js","ff8052119a04147c17dacd58f9d83bf2"],["/lib/jquery_lazyload/jquery.scrollstop.js","be7b104b6fddcb7f142f97519dc2da74"],["/lib/needsharebutton/README.html","c78937483c983dacabe821ff5cf7759c"],["/lib/needsharebutton/needsharebutton.css","d92144df8672b655015fa340523e9d3f"],["/lib/needsharebutton/needsharebutton.js","79f7f4c842c01f4b05d0f3860a7e3aa4"],["/lib/pace/pace-theme-barber-shop.min.css","db82da2580527c75a716f3a987b1f247"],["/lib/pace/pace-theme-big-counter.min.css","f5a05a48118fd1176b454ab7374a5766"],["/lib/pace/pace-theme-bounce.min.css","2ac4e45e26a52d8b6d30e0d18792a769"],["/lib/pace/pace-theme-center-atom.min.css","e1523a14d4aafae2190b8556abb9f0ab"],["/lib/pace/pace-theme-center-circle.min.css","bdbad675e939a4c09f4278d7ec36ba85"],["/lib/pace/pace-theme-center-radar.min.css","14a2fc55ef4774aacd44f4eec58f263f"],["/lib/pace/pace-theme-center-simple.min.css","c9dea12d94d0b6b35765f207a3f37f42"],["/lib/pace/pace-theme-corner-indicator.min.css","47542ec67a51c9c32f5a4b1a7193291b"],["/lib/pace/pace-theme-fill-left.min.css","427950257e5bb8a25af8238616e4a536"],["/lib/pace/pace-theme-flash.min.css","542c7c503475a0ce1cc9cbb5684a6898"],["/lib/pace/pace-theme-loading-bar.min.css","a02f66ba9347250907ae51fca9ccfe46"],["/lib/pace/pace-theme-mac-osx.min.css","a87d74ba03d272bb259ff142991a887b"],["/lib/pace/pace-theme-minimal.min.css","a9b72b911b98035d37bfc63b3f53ad09"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c36ee622ecd73a4eea9eeb6767911ab0"],["/lib/velocity/velocity.js","9d8000cf8e342dbd19b60acedcffb754"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ba44050ae5f53ccd83d2836903d85a2e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","a2050589743a5a578041f8b9e827f197"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","252fe3fbbe8c2d1ee98ede324efad6b0"],["/sharejs/css/share.min.css","63f8e3614d41384bde6765a6b2301dc3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","5592ec0ce4c21ee2f63378502681bd27"],["/tags/Ajax/index.html","3ca153e076ebb7cde4c1fac04fe5e9e7"],["/tags/C/index.html","8ab280abd10e685fe838803d344db7cd"],["/tags/HEXO/index.html","d19ad687b3ad0630cd80c42f6ee0c62c"],["/tags/Life/index.html","56ae1f75940bf32891cc049db424c7bf"],["/tags/Linux/index.html","057d7e5454a35c2a51024cf0e9565136"],["/tags/index.html","508618450119c460e92f4b16be5a9174"],["/tags/python/index.html","952c61886bf9d9b33d01caabee2d8dce"],["/tags/re/index.html","e0b5dd1b030fc183a91f6a000c9c9b5a"],["/tags/requests/index.html","ad82cb27e4c5f2d2b01e949bf670e726"],["/tags/学习/index.html","c8df399b4c8c8872a54f0f498ed1cedd"],["/tags/爬虫/index.html","3de875f09b34d2e3f374980e72e41705"]];
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
