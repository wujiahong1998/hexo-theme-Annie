/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","7cc64a0f14fb887b835d0bc6ee5ecb4a"],["/2019/03/27/Hexo博客优化/index.html","28704f880049e768bb1a4a6c90a141ad"],["/2019/03/27/Markdown的基本操作/index.html","f92ae4aad4321bd11aaa4ba936ca54ea"],["/2019/03/27/Seconday/index.html","9d476e2502e000b573892c37dc561b16"],["/2019/03/31/学生会个人总结/index.html","f7d556f2a0b26c05ce2a84f2c06b922a"],["/2019/04/02/分治法/index.html","4252a544b63607ba156bb7021c60785b"],["/2019/04/04/HEXO博客优化（一）/index.html","d266fdd3ed60f50cc053bd56bc5d0b18"],["/2019/04/08/Linux-一/index.html","bf2d93194905c63311b2082b56e964b6"],["/2019/04/19/C程序的编译过程/index.html","1532aa0f94818c19280858a1a6d3aab9"],["/2019/05/24/MechineLearning/index.html","7005724ee70f6b3770639a893385316e"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","0cc1785ad0b05b11577f7ae334533c5a"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","8092588ec130d4da3b62a6f67df93400"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/2020/01/18/爬虫——Requests与Re/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/2020/01/18/爬虫——Requests与Re/image-20200120141528343.png","05ca2d6d6b22ccb2f538f29efad0159d"],["/2020/01/18/爬虫——Requests与Re/index.html","39bebecf37b3e83b717f22a778969137"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/2020/01/20/Ajax数据爬取/image-20200120152827659.png","0cb1d08eaa7bee663121e337876ec328"],["/2020/01/20/Ajax数据爬取/image-20200120161016067.png","b82446a1a3d2c8b8e706472ff601bbbc"],["/2020/01/20/Ajax数据爬取/image-20200120164724335.png","3839f0f5d80d290b5dbfd0daacbe7315"],["/2020/01/20/Ajax数据爬取/image-20200120165259876.png","ea8ca5c167eb01dd4a1e44f26d513540"],["/2020/01/20/Ajax数据爬取/image-20200120165412671.png","b0efb1386e10837a7399b39a2b05b46c"],["/2020/01/20/Ajax数据爬取/image-20200120222739282.png","310cd35fd8c7385d2dd759205e70cfdb"],["/2020/01/20/Ajax数据爬取/image-20200120223146759.png","969c7858808e79551454ea87e505615f"],["/2020/01/20/Ajax数据爬取/image-20200121220420665.png","2d0acb5f43bb73bdd984d21ef28003bd"],["/2020/01/20/Ajax数据爬取/index.html","a51e38341d903b60e018394e8737c6f1"],["/2020/01/22/markdown-插入视频/686e3a13ly1gb1zr3g5oyj20p00e2q56.jpg","2d84eeef335ae46ea074cb22a4567a7b"],["/2020/01/22/markdown-插入视频/index.html","077c1894b80eda4c93dd5757d571778d"],["/2020/01/22/爬虫-动态渲染页面爬取/index.html","c0eae3414b468a87ef6fae08982c6820"],["/HomeLink/index.html","1f3784c761ba454b231b775150dc7aa1"],["/about/index.html","45579cd2f871ea1226808c43170fb52a"],["/archives/2019/03/index.html","14cf45a09c146754eca2748e3e865c4a"],["/archives/2019/04/index.html","23728a79ecf07739b8f86fad1357e230"],["/archives/2019/05/index.html","e3c912233b9f05a207956a5fe8093b7d"],["/archives/2019/index.html","31daf250e2b0508d8da4c2aa410741d2"],["/archives/2020/01/index.html","e81717f71ab55f2a9ef4e3be0e205550"],["/archives/2020/index.html","76dce2db8ce93fbb6020e44e67ce9202"],["/archives/index.html","f32cfb5b2d98375b454c14572452b0c0"],["/archives/page/2/index.html","99266e9a7e1a98a495bd98de8dd9004a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","629cc36a43107cd03887893c8b2bcb8d"],["/css/main.css","eeb3234ff921e47c75a9a34998f57b47"],["/dist/css/share.min.css","94258d98b3bfd79eaf4a159f5e07aece"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","ace01081482a4249e4071667ff735cda"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","73d404d09b70c3ec0649a7c98f070301"],["/js/src/algolia-search.js","ef204b7f86040e4c75e79bfc52729055"],["/js/src/bootstrap.js","207ea080b1e35263a501146a3779d412"],["/js/src/canvas-dance-time.js","4ae690598a37f4fd2e7d866222430939"],["/js/src/clipboard-use.js","eaa54e62ce3d2c679c474cc6023323d2"],["/js/src/clipboard.js","f73029a0e117e9746aa67f4b6ff0a538"],["/js/src/crash_cheat.js","63d895cc91bc88b81cd6f73dabf0784e"],["/js/src/exturl.js","bf29c495bfb1b5bdfcaa6f0ab3a57ddd"],["/js/src/hook-duoshuo.js","6e1f5c216a443164262dbd1fde917805"],["/js/src/js.cookie.js","a79c81e760a70f20547002b9b9383402"],["/js/src/linkcard.js","1f9b5127b584a92e90695ed44f23b075"],["/js/src/love.js","8d93daa58224ca0eb83baf3a7179a006"],["/js/src/motion.js","3e328203c2fb51c88362b5e9160a86e1"],["/js/src/post-details.js","763c96f7e1bc691ec0ea8443c6d4b485"],["/js/src/schemes/pisces.js","c911c979a8557b2870edafee78a45fbc"],["/js/src/scroll-cookie.js","1d4bca5cc1b252b116ec8e89ec04fafe"],["/js/src/scrollspy.js","86d8166b6181a3e9fa36a62e8820f0dc"],["/js/src/utils.js","0d17c275a2b0bcb7cae8d4362f3cb4a4"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","5eda63e5c75cc4f0a6fa5ae110a1c100"],["/lib/Han/dist/han.js","761acc1599544252f22f5211930226b8"],["/lib/Han/dist/han.min.css","62bee40b9010dc945c9647545fd43b51"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","e914bb24ed0c767d5b02cd18a855aeaf"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8528d4a70916187ceca197fcc86a4cad"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d0f295e9b617a06e9a671966360c8803"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","383975e01d0c05b75124cc1da3f31d7d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5ca867a0d6184007b6b6a48caa88c715"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","321447a6af271b706c0352d22c49ab71"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0a315fc3aee92815958157bb2eadc7a3"],["/lib/fancybox/source/jquery.fancybox.css","5cbe56f0645cd1ff0b694f9911ee6b5f"],["/lib/fancybox/source/jquery.fancybox.js","043bdc3c349f96c068ef35dc5ffac553"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b325c455267615d562b6b61f790af6c9"],["/lib/fastclick/lib/fastclick.js","8f5f590f775619248331c5e96d3fc865"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b137d85e2d4f987ceda37ee3b76dbf1d"],["/lib/font-awesome/css/font-awesome.min.css","b137d85e2d4f987ceda37ee3b76dbf1d"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","40d82cf55669ba2a7a8303d7d1d6cb55"],["/lib/jquery_lazyload/README.html","7475d657d94fa2dc9fd881de778eafec"],["/lib/jquery_lazyload/jquery.lazyload.js","0bbe001e9e8fee4ca755c3783f128e3b"],["/lib/jquery_lazyload/jquery.scrollstop.js","c7ca3f1e07883970ed3b3e8496fa09b9"],["/lib/needsharebutton/README.html","c614cc335ed2575becbcbf98187935d2"],["/lib/needsharebutton/needsharebutton.css","421fde7fc9cef964c33d50b167780b06"],["/lib/needsharebutton/needsharebutton.js","4b10b6ddfce2573e8819a7b41f63a0cf"],["/lib/pace/pace-theme-barber-shop.min.css","d4aa153d9f2f4322afbb63efd0cced1d"],["/lib/pace/pace-theme-big-counter.min.css","d377a89e66fbe5098cc46974a734a016"],["/lib/pace/pace-theme-bounce.min.css","a08f8a8dd66fd9b09e85f734558bb808"],["/lib/pace/pace-theme-center-atom.min.css","124fbf224284c36447cd873c34c57610"],["/lib/pace/pace-theme-center-circle.min.css","0f241acba3ea11d7e7d93ffd43dbd96e"],["/lib/pace/pace-theme-center-radar.min.css","a9d8e199adb5db66138161a9e3a54779"],["/lib/pace/pace-theme-center-simple.min.css","a330f05fbac3b7740db5db44b2b116b9"],["/lib/pace/pace-theme-corner-indicator.min.css","bc8087e521d3bd0f3d434700656dcbfa"],["/lib/pace/pace-theme-fill-left.min.css","439d446a966c39e24331dea2cff08c21"],["/lib/pace/pace-theme-flash.min.css","4aa6b7375eac0580cdc14ec924909332"],["/lib/pace/pace-theme-loading-bar.min.css","6c656e1c3599b83ecd7632eb3939d723"],["/lib/pace/pace-theme-mac-osx.min.css","b2a8d96f45041261e9452eb6eca44891"],["/lib/pace/pace-theme-minimal.min.css","b3404cce2702652efe35afc477040e87"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a672fa99ed2eaefc3f4c5af6055748fa"],["/lib/velocity/velocity.js","ad6fd5128110419f202cbdac8863b115"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","b473936b2ffb9d5f3fbb3e78db19fa1e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","80b84a8433a8ecf56904966bbcf08a6b"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","47ca01a8703d68f6568c49a93e409e6a"],["/sharejs/css/share.min.css","8d9dff2cc9de87f4a098998a9b70f444"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","0dfa5db66002c260a6b18ed399858f8c"],["/tags/Ajax/index.html","47f374ec103513d2e90a9f08cf39d63a"],["/tags/C/index.html","b201b193374a096d1b29495c3874acfa"],["/tags/HEXO/index.html","126894217ce156f60059a84fdb5ae7e3"],["/tags/Life/index.html","8d8af502e95531e419d77dcc7904b69c"],["/tags/Linux/index.html","a239e0eaa514b5c5b502eb7f9aefcb97"],["/tags/Selenium/index.html","667a75a91ca43360c9e25bbbfc50809f"],["/tags/index.html","08e3378ef1fe198bd6b7d11ba153daa6"],["/tags/markdown/index.html","4fc4cf12eb39f6fa051f7f8099f0b29d"],["/tags/python/index.html","6450867081395734e0114c41c1332ead"],["/tags/re/index.html","8c052239226d5dc966793f863939e619"],["/tags/requests/index.html","3cf02d95f6abb7dfd9e491f4b796de3d"],["/tags/学习/index.html","2b6eb30234f840738e3ff92b669d17c0"],["/tags/爬虫/index.html","c09dd1ca0a4f07d32ba92ff422817336"]];
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
