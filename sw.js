/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","5dd2f6f05b8fae8d037f3695d1044354"],["/2019/03/27/Hexo博客优化/index.html","14070ea84c65e67c5c22035ff61b024e"],["/2019/03/27/Markdown的基本操作/index.html","edea6060d2f4fcefad4f173eaf557a80"],["/2019/03/27/Seconday/index.html","46219841097c2d18cc6ef6ec8f5e1fc5"],["/2019/03/31/学生会个人总结/index.html","bae9a0ddc1546866d14d9bd6bc11e524"],["/2019/04/02/分治法/index.html","4bcd42d9edeead700ef356257f4d7bc3"],["/2019/04/04/HEXO博客优化（一）/index.html","45c774330c637a1c8f2b0afb78b5258d"],["/2019/04/08/Linux-一/index.html","f435df46585c2d280783a5eb6d7172d5"],["/2019/04/19/C程序的编译过程/index.html","a9068d57f0e743e0a10dd81ba7e4bd6c"],["/2019/05/24/MechineLearning/index.html","ed01734e389c52945f078523dbe37ec8"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","4d6c42d423ec97682017ad186136834f"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","e690537b1d6342db29836dd0b10dc381"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/2020/01/18/爬虫——Requests与Re/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/2020/01/18/爬虫——Requests与Re/image-20200120141528343.png","05ca2d6d6b22ccb2f538f29efad0159d"],["/2020/01/18/爬虫——Requests与Re/index.html","7a3c66789169cff680f6d6f74677afd4"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/2020/01/20/Ajax数据爬取/image-20200120152827659.png","0cb1d08eaa7bee663121e337876ec328"],["/2020/01/20/Ajax数据爬取/image-20200120161016067.png","b82446a1a3d2c8b8e706472ff601bbbc"],["/2020/01/20/Ajax数据爬取/image-20200120164724335.png","3839f0f5d80d290b5dbfd0daacbe7315"],["/2020/01/20/Ajax数据爬取/image-20200120165259876.png","ea8ca5c167eb01dd4a1e44f26d513540"],["/2020/01/20/Ajax数据爬取/image-20200120165412671.png","b0efb1386e10837a7399b39a2b05b46c"],["/2020/01/20/Ajax数据爬取/image-20200120222739282.png","310cd35fd8c7385d2dd759205e70cfdb"],["/2020/01/20/Ajax数据爬取/image-20200120223146759.png","969c7858808e79551454ea87e505615f"],["/2020/01/20/Ajax数据爬取/image-20200121220420665.png","2d0acb5f43bb73bdd984d21ef28003bd"],["/2020/01/20/Ajax数据爬取/index.html","d87a49fac045ca656e4f48996001ef3f"],["/2020/01/22/markdown-插入视频/index.html","95cbfc8d7d3a3e321d1c84e1fc8ffd6d"],["/2020/01/22/爬虫-动态渲染页面爬取/index.html","be56c8b0ebbbb4004abcdd19adfa12c1"],["/HomeLink/index.html","0c050132249ea624e33bc2e312f095ad"],["/about/index.html","1a9dbadc2cd80087b583c4ebcc4e1959"],["/archives/2019/03/index.html","5a36243d60248a2dd60c81a650d668ed"],["/archives/2019/04/index.html","406dfa888f9b4922041d13d859421d3d"],["/archives/2019/05/index.html","513436e1e4a81de5e5833bfec52cbf05"],["/archives/2019/index.html","113a29691096156e48135f2af1a698d2"],["/archives/2020/01/index.html","8d15ae534a0e1633aca2d11227d626a2"],["/archives/2020/index.html","e2ec1db3505a357d0fb681904cd361e3"],["/archives/index.html","b2b7c03e8c67fc4483e22243966fe246"],["/archives/page/2/index.html","2d950dcebe708abb64a28a7ea1842326"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","de328d68c7bed23a5697dad94066fc71"],["/css/main.css","530db22b01332097f0917ccd4ce07a22"],["/dist/css/share.min.css","27b01079279e314a56bcf089ba53970f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","d90cf01a6682d4b06217481321ca0d2e"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","b97965f68f986e2e61f31f5b26520f4d"],["/js/src/algolia-search.js","1ce3fb682dec2ca25005116280a6ff8e"],["/js/src/bootstrap.js","cd795e5cbeecc68d75d31496277646a9"],["/js/src/canvas-dance-time.js","cb888d75c9b4264df5a3f16911b73779"],["/js/src/clipboard-use.js","e8c85acf0bee32d837795b80f5ef88c9"],["/js/src/clipboard.js","cfc3ecee056fcc2adacd5c2ec85dcb72"],["/js/src/crash_cheat.js","ce79c658cbcfe861d58000528997416a"],["/js/src/exturl.js","4c3f755e7e234681d2107f1548c8b021"],["/js/src/hook-duoshuo.js","ba17941a2582bc819a2f3d5804e483ee"],["/js/src/js.cookie.js","59e362fdca00b1a1acdc065444c0f508"],["/js/src/linkcard.js","dcaff052309143f7b047a82334c8b440"],["/js/src/love.js","397efd0819fffc6ca478dddf9fdff576"],["/js/src/motion.js","00669a6c573a7442b93ff1f8b9765b5f"],["/js/src/post-details.js","3aa37243ab3bf07f70c7553f799cd972"],["/js/src/schemes/pisces.js","a17a3df994e1215a4c5c64c7fd580d0a"],["/js/src/scroll-cookie.js","55472416905ac49aa58ea0c5aa7845d3"],["/js/src/scrollspy.js","4bfd946453ccd1a66dd356e794fdf78b"],["/js/src/utils.js","1e747e8ec460c004f450ed7988b46b8c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3f011deb535ac0d4132a6bc1446c09c5"],["/lib/Han/dist/han.js","a0db23a026e231d8cd60cbacd67e8e1f"],["/lib/Han/dist/han.min.css","dfe1f449c22438098d94c44e9a34979e"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","910f3469c277e84c3a99584930135369"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9d0e9dd03aec3040a4a53f3cc88511af"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","414e242684ff9c61c908df35ebf2b212"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","1d8b5e3b74fe66c811f119863cca9e53"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5c6a21445eb18cd90f04beefdaa2b78b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1c70bf6cecc2b4c3c637babfa0abcf6e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6529d9c3340e35b394ee424849a66b26"],["/lib/fancybox/source/jquery.fancybox.css","6d9ca807326d71ee7e2efc3f3e93eff8"],["/lib/fancybox/source/jquery.fancybox.js","c242771f5cb4aef42d57b9ac7022fe26"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","a924c462505c7b1754798dcd5c9b052d"],["/lib/fastclick/lib/fastclick.js","57eb8cbce3ce293abdfff19674df3387"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a5dd7b0f22a6acce184099a71860c62f"],["/lib/font-awesome/css/font-awesome.min.css","a5dd7b0f22a6acce184099a71860c62f"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","ab0acab4dd83ccb90af0a59cdcfe2c12"],["/lib/jquery_lazyload/README.html","034423289788ddef5314a0172e776990"],["/lib/jquery_lazyload/jquery.lazyload.js","78cffe1af0f67f0298165d220589d891"],["/lib/jquery_lazyload/jquery.scrollstop.js","a147ecda91dfdfabc2d1aa71b3bfd9e2"],["/lib/needsharebutton/README.html","dbc89934354654b51eb4433bb76b0e3e"],["/lib/needsharebutton/needsharebutton.css","30b19a212ff77226494d92231798dac1"],["/lib/needsharebutton/needsharebutton.js","550ad61cc97be85e1f5ee5565d5d8006"],["/lib/pace/pace-theme-barber-shop.min.css","8536530a16d7f1c8c57140b18874056d"],["/lib/pace/pace-theme-big-counter.min.css","bfba79c80745484c4577ef37602bbea5"],["/lib/pace/pace-theme-bounce.min.css","d2aadd9fad3c89ffa6ac5fe0e809ab11"],["/lib/pace/pace-theme-center-atom.min.css","a6237ca34d02c00e2230664c85f69355"],["/lib/pace/pace-theme-center-circle.min.css","11ae33178db30825f4f9540fa3e7d992"],["/lib/pace/pace-theme-center-radar.min.css","38584990c80ada167d60b66e764ff813"],["/lib/pace/pace-theme-center-simple.min.css","d1ec46c460a280acc8ee5211ce9d820b"],["/lib/pace/pace-theme-corner-indicator.min.css","e8ccefc7e8cb49f8687619434a2acba8"],["/lib/pace/pace-theme-fill-left.min.css","cdc4f3f2968f6bc94392426cb555bf40"],["/lib/pace/pace-theme-flash.min.css","d8950155314c76ebb30de967a0317a75"],["/lib/pace/pace-theme-loading-bar.min.css","18cfc07281c2384a2fe5097cd24131ad"],["/lib/pace/pace-theme-mac-osx.min.css","5bde9754b09f075fd09fd3e7676be87f"],["/lib/pace/pace-theme-minimal.min.css","1b272d2c2775e92e91b3162ee45349c5"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e6af1e460cb09181222a9e84ab9331c0"],["/lib/velocity/velocity.js","95053c4efdb2d785aeb411087be0cc09"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a2e74114608e9c7cefa061288458192c"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","86e34b1b821d1b514a13534aa353e837"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","8ed6c3bffbadc201f301d2259bf69f8b"],["/sharejs/css/share.min.css","00538e2e8103b4cbdeb51d11bc41295d"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c265202a20c3e7bf00813296ad564075"],["/tags/Ajax/index.html","46396ef28662f2164f5f214f1f45a805"],["/tags/C/index.html","5579d30ae9bfcf81a59f68a55010278d"],["/tags/HEXO/index.html","72be02b2043710fd52fce4b9d47774b6"],["/tags/Life/index.html","0d07eb10fe0da62503d49bb4919f228b"],["/tags/Linux/index.html","99cb23d6bf77d89b617b0b96c45f16fd"],["/tags/Selenium/index.html","f3278b85f8d66cf10d73ae8b07b55233"],["/tags/index.html","b7c0863e4a1287123112588ec905ce07"],["/tags/markdown/index.html","34ade68b98716f2363ce58f9b315fde7"],["/tags/python/index.html","c4483a3c1825b58586a42a04079e67c7"],["/tags/re/index.html","6dc2c004590ee4b189a2d51e467d865e"],["/tags/requests/index.html","defd62519a0343b989604e6aac646b04"],["/tags/学习/index.html","8779c387c20e3eb58b9eab8cf2ad553d"],["/tags/爬虫/index.html","eacaaf08d9d180ae8ca7137376d9ba54"]];
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
