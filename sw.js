/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","9fa8b10c25a16766af53a62b7c94148e"],["/2019/03/27/Hexo博客优化/index.html","c1de6399796410b7a133fa1187c54bb3"],["/2019/03/27/Markdown的基本操作/index.html","8a8983c702c498c7bc193f3310e5ca75"],["/2019/03/27/Seconday/index.html","87e063d5c308c082c0a0bf1af2bc4495"],["/2019/03/31/学生会个人总结/index.html","5efa5449304e2386a954ce3f416dd558"],["/2019/04/02/分治法/index.html","db882987137538d43ed15f33947a743f"],["/2019/04/04/HEXO博客优化（一）/index.html","4a4c06980d4c55a3a3acd0a038328dda"],["/2019/04/08/Linux-一/index.html","efe1031c50cea5a0dadfbddaa915c88d"],["/2019/04/19/C程序的编译过程/index.html","2d6ee0d8774e3e7990465d7235818345"],["/2019/05/24/MechineLearning/index.html","79175b06c5696d9c8c3bfa7fb2305b9e"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","01f3e52df502b2e71e426e8a8f3a8e66"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","2812ac2ae12d1eb752478c75cee3b11e"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/2020/01/18/爬虫——Requests与Re/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/2020/01/18/爬虫——Requests与Re/image-20200120141528343.png","05ca2d6d6b22ccb2f538f29efad0159d"],["/2020/01/18/爬虫——Requests与Re/index.html","5bd2f5b78b935213102598e693ec900c"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/2020/01/20/Ajax数据爬取/image-20200120152827659.png","0cb1d08eaa7bee663121e337876ec328"],["/2020/01/20/Ajax数据爬取/image-20200120161016067.png","b82446a1a3d2c8b8e706472ff601bbbc"],["/2020/01/20/Ajax数据爬取/image-20200120164724335.png","3839f0f5d80d290b5dbfd0daacbe7315"],["/2020/01/20/Ajax数据爬取/image-20200120165259876.png","ea8ca5c167eb01dd4a1e44f26d513540"],["/2020/01/20/Ajax数据爬取/image-20200120165412671.png","b0efb1386e10837a7399b39a2b05b46c"],["/2020/01/20/Ajax数据爬取/image-20200120222739282.png","310cd35fd8c7385d2dd759205e70cfdb"],["/2020/01/20/Ajax数据爬取/image-20200120223146759.png","969c7858808e79551454ea87e505615f"],["/2020/01/20/Ajax数据爬取/image-20200121220420665.png","2d0acb5f43bb73bdd984d21ef28003bd"],["/2020/01/20/Ajax数据爬取/index.html","250ba71abf5ba369519b6ea64a0d9d5a"],["/2020/01/22/markdown-插入视频/index.html","bee732b5d24b12320e4e63d9990e5ee2"],["/2020/01/22/爬虫-动态渲染页面爬取/index.html","36189d6c1c46628b8dabd36d15a1593e"],["/HomeLink/index.html","ecd519210da8b3ec5301dbd239dba72d"],["/about/index.html","f1f351a9d3366eabaf027162b395be3a"],["/archives/2019/03/index.html","55cc6744847d9a9569c39b812cd71612"],["/archives/2019/04/index.html","e387244179e6986fc9806f6026433195"],["/archives/2019/05/index.html","c4e896f35d8fb8d4b3ed0fd85e06a572"],["/archives/2019/index.html","5dfdcaa7f270c60e5f7a903769a45680"],["/archives/2020/01/index.html","7226422a7966279ed4b5778730051e63"],["/archives/2020/index.html","29aa81ce60999e170a8b53546b6ca7ab"],["/archives/index.html","84f038034cbed03f0289844dc81df8ba"],["/archives/page/2/index.html","eaa5443b9e5fc48d5d5c4fc91fe1b4ed"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","c43bb44e2e848e385db8f6f34a16d66d"],["/css/main.css","869efe22a3ea8e50dd5e3a58e3e96fd3"],["/dist/css/share.min.css","20d897c1df6978ec8fec6ba15c7fc24e"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","2f9470d2b86c090e76e8a0fb9ee68090"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","434913344bd42671dc00114ed0a0521e"],["/js/src/algolia-search.js","fdb7bcb340a58c6ab36394ab8d60228b"],["/js/src/bootstrap.js","04201579cb0f9ee80a6c08db75573ef6"],["/js/src/canvas-dance-time.js","eaabbb8ce3b44a57284d991f59404f72"],["/js/src/clipboard-use.js","a546ccbd6f048e7971e86524d0e9335f"],["/js/src/clipboard.js","3eb606cf42f42e263bd7a23da5f87150"],["/js/src/crash_cheat.js","fa2b8926184c6a0811670a28dd17a633"],["/js/src/exturl.js","14c7b87f2a6df5f64275a1c03c872e65"],["/js/src/hook-duoshuo.js","2b192657667b922944b8e6a45afaf3f2"],["/js/src/js.cookie.js","1b54554025499a97e8291e97784ff041"],["/js/src/linkcard.js","ec0e55e1efc9b07b20eea911cf1f85fe"],["/js/src/love.js","5dcd782ceda63c044587d8d2b9a4708b"],["/js/src/motion.js","4de1b4da9ca74c37b1f4af7a44a8db19"],["/js/src/post-details.js","95341c3fd2657688877d31225ff36239"],["/js/src/schemes/pisces.js","3902f0ab32b4c66d29d6fc9a1b6e538c"],["/js/src/scroll-cookie.js","302cdd39fa565d3235dedd8fe822bb0e"],["/js/src/scrollspy.js","af493f4bc3cc8eddcceb55e3fe80c1e1"],["/js/src/utils.js","fc6a4300b2086e9f0e6d7c98e136d115"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","fddb5b499ed14203d9cac9998294128f"],["/lib/Han/dist/han.js","c162a5ee75d7ab5247349f0e70b83520"],["/lib/Han/dist/han.min.css","25ef1b5de78149292c39a29468bdf7b5"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","350bdf54c14f8ab699cf8dd7f6b93c24"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","48324b90ddfaab6f31e9c1c4108eb3d0"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","208f3cc66894fc3b82ef17fa9f34ac8c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","5bc9dd9b018ba30eddb19e4b4d2ecab3"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6aba3d734e7de026f7175b6c3cdb588b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","cbcc36bd73a254d811115aaa979948c0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4fdc4ba6601aa14d41a54ac4632a5eea"],["/lib/fancybox/source/jquery.fancybox.css","80dfba37f8349f56db8a0ef41bc4deec"],["/lib/fancybox/source/jquery.fancybox.js","782a28386ab3e315d36e9109f3d30aab"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","baa32488b47b535be7a899da21ed1762"],["/lib/fastclick/lib/fastclick.js","e607d1cf9147bef24b9fd6f8b838f724"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","fccbba51e1175f56bb99d48966c0d0d8"],["/lib/font-awesome/css/font-awesome.min.css","fccbba51e1175f56bb99d48966c0d0d8"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e51c22e3ee7791875ef3ca8dc34dab5c"],["/lib/jquery_lazyload/README.html","4bbbb26c7a426dba17479a80c3f9fda7"],["/lib/jquery_lazyload/jquery.lazyload.js","5e83487cdb68ee3011647b436d22def3"],["/lib/jquery_lazyload/jquery.scrollstop.js","59ce173f4b0caf8f8637a2fa396aeed1"],["/lib/needsharebutton/README.html","1710626c766b966a83eac522ad48b6d9"],["/lib/needsharebutton/needsharebutton.css","f4c49e0a7841e5656416b6aba7da522b"],["/lib/needsharebutton/needsharebutton.js","053ac74723e78507714347c82031f2ab"],["/lib/pace/pace-theme-barber-shop.min.css","7ed38b532b3e5d1880653791159d6e47"],["/lib/pace/pace-theme-big-counter.min.css","ba448a1e282a3a54c370dd600c05a665"],["/lib/pace/pace-theme-bounce.min.css","c4f1afd26564d8bd61e4a3470604ae91"],["/lib/pace/pace-theme-center-atom.min.css","2b0e9c865e55aaf0946f7d111c3e89a8"],["/lib/pace/pace-theme-center-circle.min.css","bf68d14a54b968edaccec01012fd130d"],["/lib/pace/pace-theme-center-radar.min.css","66635de65e988d7e1b8a80ab9df51a93"],["/lib/pace/pace-theme-center-simple.min.css","765f45a7e36dc683981ae1ec462e0240"],["/lib/pace/pace-theme-corner-indicator.min.css","4b7fdb4732d3047dde3adc4d12993859"],["/lib/pace/pace-theme-fill-left.min.css","12475bdc5c1db7d10ee07bd75fc6690b"],["/lib/pace/pace-theme-flash.min.css","75730677c1dea382377b308cc346952b"],["/lib/pace/pace-theme-loading-bar.min.css","391f06d06d8c018a750ca86ab5bebddc"],["/lib/pace/pace-theme-mac-osx.min.css","3f8461030e13b75ef45e97b2f42a9906"],["/lib/pace/pace-theme-minimal.min.css","a7ae28b64b63ee09cdcb6142deb4b4a8"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b4d59cd1433827c1e64fac5ac3fd5898"],["/lib/velocity/velocity.js","3e71a6cb02868fd22c2454eceb5badc1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","c1db2ebb38efa4430ee92f420a2260b4"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","2fb137dab4323baa8ae9b645e2fc1c26"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","c1a01c4186f3ab2a1a7d1a2e47e419da"],["/sharejs/css/share.min.css","e393f3c38911110e07a438226d91ccd7"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","58807e981406cb72f5c3b4bcf41eaf9a"],["/tags/Ajax/index.html","246b8856b0606b27cfad4567c7767c36"],["/tags/C/index.html","2fade3150d2947eab6fed0b136fc68a2"],["/tags/HEXO/index.html","1093d784ae1f8e6104b09580dec3d0fc"],["/tags/Life/index.html","c7cdba9aee9af624933053e8fc21dad6"],["/tags/Linux/index.html","a4415c5af2a93e5327a94bbf431ba691"],["/tags/Selenium/index.html","cc8e531f6a19e9ee9c5166757fce6d48"],["/tags/index.html","85ce9c159a6c07c4f0ba7aacd581b457"],["/tags/markdown/index.html","41b9f5f995753a8de9a346fae5a14793"],["/tags/python/index.html","149614ef5a572aa5b8a0f1da790daa9c"],["/tags/re/index.html","f22c501ea8ddb1c526ffa36fbee57f85"],["/tags/requests/index.html","9a2e0040ed43cb5ac8114fc1d2ef9e5a"],["/tags/学习/index.html","f45db6e6be464e0d2a95287115a70ec2"],["/tags/爬虫/index.html","610a8e278cead857f71d3bf975bb4f9c"]];
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
