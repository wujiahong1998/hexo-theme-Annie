/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6a67f2451d4312fd1f14ceb22b451482"],["/archives/2019/03/index.html","f64b651f032b387c0bf7f0756c6fc816"],["/archives/2019/04/index.html","7c12e98d9be9e4e3561b80d93bef280c"],["/archives/2019/05/index.html","630a99452d389b31fe0286fe80ac2289"],["/archives/2019/index.html","fc840bc938c33492a13849ffe90a369f"],["/archives/2020/01/index.html","3b5629e792b2cf6e6930d1dd2184b642"],["/archives/2020/02/index.html","61d5814255e89fcd39b4396d0006e249"],["/archives/2020/index.html","a57486302a708d020081fb7373b76f56"],["/archives/index.html","efe8f7b61b0eb15e7674dd4a7830075b"],["/archives/page/2/index.html","40a53f14ccc5f01e76686d8d539c659e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","008462be6e948665c6a283d2b6a32aaa"],["/css/main.css","29c5fba3eace5797365b4c668772658e"],["/dist/css/share.min.css","ab9c4a757fd94aa430569e8aecaa898c"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","c561fbc0edb4d4c44bd95a7bbd8f4fd0"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","2f1952278976279c2e6db6e4832b1544"],["/js/src/algolia-search.js","d3c9a55f4702a37d2dc3f5e8af031bae"],["/js/src/bootstrap.js","69459bf9c26aa71e4a7b910043180b8c"],["/js/src/canvas-dance-time.js","d0306ce69864c7910c3a91b57cc0df81"],["/js/src/clipboard-use.js","c585e1c3950bfe4a9cc3c5e26b5e9a68"],["/js/src/clipboard.js","80979a3db7da913a8bf72d03fb502a83"],["/js/src/crash_cheat.js","7adac431ce86490ea16d5afaf1366c76"],["/js/src/exturl.js","09081b04079d74e0e16544e0a91e1b4c"],["/js/src/hook-duoshuo.js","8dabe3f634498c2c262ccb6158fab8e7"],["/js/src/js.cookie.js","46a5111ba0319d84fe00654b10ecf95b"],["/js/src/linkcard.js","1d10c7fdbc6eb1656e4e4af123fac59e"],["/js/src/love.js","8dbce3550d297db611fb2a0486ac0faf"],["/js/src/motion.js","0867b4b5c6f72006941dc3b5634f3457"],["/js/src/post-details.js","0b3ebaf4d4c77ac6a9bcaf1f80e4ad7d"],["/js/src/schemes/pisces.js","c5b250527f942ffedb1d74fa515169cc"],["/js/src/scroll-cookie.js","db66ca3eba99c32c90b61fb906b27d6e"],["/js/src/scrollspy.js","e15fb79e0c379acb979e35d74f926964"],["/js/src/utils.js","9053c24dcbb27a0d79e96db0852c46e7"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","66bccfd1fb8a9e982eb8feeb3b94464e"],["/lib/Han/dist/han.js","bfc849f552060d78447e9d91d021682c"],["/lib/Han/dist/han.min.css","1ac20607d1bbb6eaf9619ebd061e50a6"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","7fd05c20dcf5d0cdbb1f893bac4864c3"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3091cc982393accd7875f4a11071ff2a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a7dbef1de21713f9b9a1a40087c74e57"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","27e26ace5979c03e02dda1f0fbcf7943"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","bead837106aa727d88a088d50988f62d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7fd1c6546bd1f0c5a80cca6e7f002a85"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","da68eb10c62455f6cff3351dc2bb3862"],["/lib/fancybox/source/jquery.fancybox.css","73d38a3d27c30f303a6ae08475253b59"],["/lib/fancybox/source/jquery.fancybox.js","e8a668e7101d6f91deeff25660c82bc4"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","5ccd43781cbeb5568486226cfea38365"],["/lib/fastclick/lib/fastclick.js","c0e6be5987db5bae6a478e33314f24f9"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8546e64ff2ea991dffb2fff6e05495fb"],["/lib/font-awesome/css/font-awesome.min.css","8546e64ff2ea991dffb2fff6e05495fb"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","9569e660d1e41487f64be32bda8d985e"],["/lib/jquery_lazyload/README.html","ea9f0f1102f7ba01eeed26080e84ccc4"],["/lib/jquery_lazyload/jquery.lazyload.js","81dd71d0b34f5d494978adaa1f884ea2"],["/lib/jquery_lazyload/jquery.scrollstop.js","a4a7eb5693dfc16a02a359ed936bdc86"],["/lib/needsharebutton/README.html","fea0c87910900d4d93127aef019b4989"],["/lib/needsharebutton/needsharebutton.css","d6163acff0200d84280ff331cf068d38"],["/lib/needsharebutton/needsharebutton.js","5cba312827fd72367c0d9ba9b0b468b5"],["/lib/pace/pace-theme-barber-shop.min.css","ebd44e2c80ad400d35331749f04f5f0e"],["/lib/pace/pace-theme-big-counter.min.css","8c17148a89fcec221a00e515c5e504fc"],["/lib/pace/pace-theme-bounce.min.css","0f42315a29f1129fa42d19b5d2bfaa28"],["/lib/pace/pace-theme-center-atom.min.css","0cbc23e5461b65b6cb4dc5bbae302d3e"],["/lib/pace/pace-theme-center-circle.min.css","353039948992fb2db129d1e6b8e6befd"],["/lib/pace/pace-theme-center-radar.min.css","0e190f183b4875650efc51dab76820bf"],["/lib/pace/pace-theme-center-simple.min.css","28570bd266647bb0e62ff3b6ceb13d3d"],["/lib/pace/pace-theme-corner-indicator.min.css","4d95199e25e5f1adbc7225df736a620d"],["/lib/pace/pace-theme-fill-left.min.css","8e2a0dac6b8d55beff4ac6cc8ab021f3"],["/lib/pace/pace-theme-flash.min.css","e85aed201526593129df2d192c907844"],["/lib/pace/pace-theme-loading-bar.min.css","d2840e455f01448c2b0b2f0b050613bf"],["/lib/pace/pace-theme-mac-osx.min.css","f0154e61658e890a71e95d56737f0370"],["/lib/pace/pace-theme-minimal.min.css","f72426bdf03c6a2ce6c2026b76d71e18"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","81a2abacbbd878a527acfc3cc3c0db8e"],["/lib/velocity/velocity.js","b974578cd1ea1f853966c927c6512d39"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","086747b3fa4407aa104d2eb46024176c"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","fc59f9c4882c8386e5751217719dc87d"],["/myPhotos/ball-pool/assets/Main.js","b8021671f66989d22f6119bcde63d604"],["/myPhotos/ball-pool/assets/box2d.js","ac089051ddebe188b935895d4b56de29"],["/myPhotos/ball-pool/assets/protoclass.js","21096452a18d4e32b55162cde58cf950"],["/myPhotos/ball-pool/index.html","6272ca49423b50419259a5621da621c6"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","af8a96b3830251da007a990b72763411"],["/posts/189af858.html","f4e18b3f958f5d1df67913084f3509b6"],["/posts/189af858/failure.png","58307e81ffdff49c962a44696d742d13"],["/posts/189af858/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/posts/189af858/fork.png","268c9222930a615e0bfd334ec037cede"],["/posts/189af858/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/posts/189af858/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/posts/189af858/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/posts/189af858/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/posts/189af858/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/posts/189af858/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/posts/189af858/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/posts/189af858/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/posts/189af858/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/posts/189af858/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/posts/189af858/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/posts/189af858/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/posts/189af858/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/posts/189af858/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/posts/2815b369.html","707ef3aac5dfb1abadca94d7c51e7dd4"],["/posts/2815b369/image-20200120152827659.png","0cb1d08eaa7bee663121e337876ec328"],["/posts/2815b369/image-20200120161016067.png","b82446a1a3d2c8b8e706472ff601bbbc"],["/posts/2815b369/image-20200120164724335.png","3839f0f5d80d290b5dbfd0daacbe7315"],["/posts/2815b369/image-20200120165259876.png","ea8ca5c167eb01dd4a1e44f26d513540"],["/posts/2815b369/image-20200120165412671.png","b0efb1386e10837a7399b39a2b05b46c"],["/posts/2815b369/image-20200120222739282.png","310cd35fd8c7385d2dd759205e70cfdb"],["/posts/2815b369/image-20200120223146759.png","969c7858808e79551454ea87e505615f"],["/posts/2815b369/image-20200121220420665.png","2d0acb5f43bb73bdd984d21ef28003bd"],["/posts/2e84c07.html","59f2ab420d963a04d4eaa864d2ead67a"],["/posts/2e84c07/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/posts/2e84c07/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/posts/2e84c07/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/posts/2e84c07/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/posts/2e84c07/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/posts/2e84c07/image-20200120141528343.png","05ca2d6d6b22ccb2f538f29efad0159d"],["/posts/2e84c07/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/posts/5c9fc645.html","064118c9e00877f9f40c029352ce1148"],["/posts/5d834ab4.html","5902e74973c563fbd692560533b0880e"],["/posts/5d834ab4/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/posts/5d834ab4/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/posts/5d834ab4/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/posts/5d834ab4/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/posts/5d834ab4/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/posts/5d834ab4/net.jpg","47d1da077613790e30478a0c34515854"],["/posts/5d834ab4/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/posts/5e3e2bfc.html","54d06ec84477d3b0f57b42f843030edf"],["/posts/6486ae93.html","1292de0a4ca307369342773dd60b9f8d"],["/posts/7d23856.html","6e212015755f68fc8ccc87e143b0299a"],["/posts/7f3bcd7f.html","74d5b096f9aa9dc4e2af5d797ebd90b8"],["/posts/94271a3a.html","877feaa4cb03bd084c73f36ad4d5e4b6"],["/posts/9be60828.html","c08990a4492f617f38c4d3cdf708ee25"],["/posts/a1751c09.html","3ab946d50c498c982b62b2ce59027ba3"],["/posts/a625b86.html","13d7ad2a8fd18659933390151e1a4213"],["/posts/a99288f7.html","c0c2f96f0f51bc9785add033d41994a3"],["/posts/b0289f51.html","7e124eae6b4f0e1dbd35271096fe5890"],["/posts/c9786415.html","8efa6821cb0f8afc9542a44146e67e79"],["/posts/d52d06dc.html","93f6ccad3788b11284693683d700be00"],["/posts/fad863f5.html","e974f67c3a15fea3c1d6a36c4a1fd8d5"],["/posts/fad863f5/686e3a13ly1gb1zr3g5oyj20p00e2q56.jpg","2d84eeef335ae46ea074cb22a4567a7b"],["/sharejs/css/share.min.css","dc2256e996db7356a21ee2e4a7607dce"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","efd27027967065013c461f69bfd96d6d"],["/tags/Ajax/index.html","831a6153b6e3a06bb62c8abf305accaf"],["/tags/C/index.html","90c2f023bb99ff3fe46d99d5c4281dc1"],["/tags/HEXO/index.html","0ec501c96d177419eeed9721c2649999"],["/tags/Life/index.html","f49b9c07d97128b3f89adcbe38111f73"],["/tags/Linux/index.html","df9e41ac0bd39403d88e39990ce10887"],["/tags/Selenium/index.html","03c484b833945dd92fbf21112aeeffe4"],["/tags/index.html","dd2d77a902ea73f1b8ac82830c98b338"],["/tags/markdown/index.html","c68e1fac83a865ae0fc59849e041903f"],["/tags/pathon/index.html","6725001d9465ccc5aa010c753331241f"],["/tags/python/index.html","a924d61613fffd753b970d2f96730085"],["/tags/re/index.html","af5f70c25255ac7a67a2e6063e11997e"],["/tags/requests/index.html","e58a5ece5bea05b23894ef57f1424c24"],["/tags/学习/index.html","702d60b79a959b9b11a95727b9dc0e1f"],["/tags/排版/index.html","f4b74ece7060ca853bcff44fe76d1540"],["/tags/正则表达式/index.html","0148b00e8326e9b68f2ae526f5607892"],["/tags/爬虫/index.html","000aedee50a9f8ff87e45baec42d67e9"]];
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
