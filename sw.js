/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","4b95f76061983381b708ea319812d578"],["/2019/03/27/Hexo博客优化/index.html","248b0e5399373a55923fe2d3138e8359"],["/2019/03/27/Markdown的基本操作/index.html","d8c8a6117f60fc63af176609ddd84546"],["/2019/03/27/Seconday/index.html","8eb0340dbf8b57b2adcf02b8a4b6a2e5"],["/2019/03/31/学生会个人总结/index.html","6aa5a0d5f31312a1893e19afdaaa7807"],["/2019/04/02/分治法/index.html","0d0ab43e418003bf8f2066e0e40b6b5c"],["/2019/04/04/HEXO博客优化（一）/index.html","49053ebe66030b43030255c22636a426"],["/2019/04/08/Linux-一/index.html","86cb597a5ad5665060cf083168f18794"],["/2019/04/19/C程序的编译过程/index.html","ae3ec498f05f0d48d5d81d64f61746ff"],["/2019/05/24/MechineLearning/index.html","0bc0e5fa2f83b3a398d53b9af592bde7"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","ede80e5ff69a643ddbf8e17c72b8bc28"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","e3d79865458ae226cbe391956e30276e"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/2020/01/18/爬虫——Requests与Re/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/2020/01/18/爬虫——Requests与Re/image-20200120141528343.png","05ca2d6d6b22ccb2f538f29efad0159d"],["/2020/01/18/爬虫——Requests与Re/index.html","3d1503bafe8aa72ea094e49c0867bc93"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/2020/01/20/Ajax数据爬取/image-20200120152827659.png","0cb1d08eaa7bee663121e337876ec328"],["/2020/01/20/Ajax数据爬取/image-20200120161016067.png","b82446a1a3d2c8b8e706472ff601bbbc"],["/2020/01/20/Ajax数据爬取/image-20200120164724335.png","3839f0f5d80d290b5dbfd0daacbe7315"],["/2020/01/20/Ajax数据爬取/image-20200120165259876.png","ea8ca5c167eb01dd4a1e44f26d513540"],["/2020/01/20/Ajax数据爬取/image-20200120165412671.png","b0efb1386e10837a7399b39a2b05b46c"],["/2020/01/20/Ajax数据爬取/image-20200120222739282.png","310cd35fd8c7385d2dd759205e70cfdb"],["/2020/01/20/Ajax数据爬取/image-20200120223146759.png","969c7858808e79551454ea87e505615f"],["/2020/01/20/Ajax数据爬取/image-20200121220420665.png","2d0acb5f43bb73bdd984d21ef28003bd"],["/2020/01/20/Ajax数据爬取/index.html","f39c55610e3707b1f0eead30cd6a079f"],["/2020/01/22/markdown-插入视频/686e3a13ly1gb1zr3g5oyj20p00e2q56.jpg","2d84eeef335ae46ea074cb22a4567a7b"],["/2020/01/22/markdown-插入视频/index.html","c4e13d4589b1a4dca7e8a79e69dc9c06"],["/2020/01/22/爬虫-动态渲染页面爬取/index.html","ecb667d73d44b87e1a2b45a63c233484"],["/2020/01/23/hexo-格式排版/4eabb0e7182a79f97f6b0f795cc3e685.jpg","4eabb0e7182a79f97f6b0f795cc3e685"],["/2020/01/23/hexo-格式排版/c7454d3b96fd6e74a5ac2df0eb115dea.jpg","c7454d3b96fd6e74a5ac2df0eb115dea"],["/2020/01/23/hexo-格式排版/image-20200123145030221.png","6b8d55b822768283d850e7f9bdf3aaf3"],["/2020/01/23/hexo-格式排版/index.html","50791321288081574b3da2367572afe5"],["/2020/02/02/正则表达式-括号的区别/index.html","3895698e0f741d4caaef24394af52338"],["/about/index.html","95eea674d099947dc5ea9e3f8ccaae53"],["/archives/2019/03/index.html","a65df7ffde67a42e3a6d9923bba9f0c5"],["/archives/2019/04/index.html","2ccb2c2a6100a291ef6629606ebd7788"],["/archives/2019/05/index.html","a4d80cf3c4569883e06591cfd145fb50"],["/archives/2019/index.html","47520b70b1859d210413a6f2a3c6504a"],["/archives/2020/01/index.html","5ae4f455987155851a99f4094cc6633a"],["/archives/2020/02/index.html","399948dfea3e9e02d69bafe16c5f1650"],["/archives/2020/index.html","19b55b2bd21d2ac94f4f511d57deab41"],["/archives/index.html","7716833d9d3d587bc46317933bd431b5"],["/archives/page/2/index.html","583db93d889031f284ceecf176d51900"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","44a2a8ffd3f7027454fb57d5a46e5edc"],["/css/main.css","89212223c218979b9bf7607e9b50499f"],["/dist/css/share.min.css","7e4b0d20b413cd33daef2b907e93900e"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","f0c0a93b6a6dd9a7ee68a799a039b2d9"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","773ab8cf7eda0efef6f4dc2b827a7af8"],["/js/src/algolia-search.js","0fdef6f2bca361dffbf62c2917b74529"],["/js/src/bootstrap.js","4b3f00f27eec181970ee2273676eb985"],["/js/src/canvas-dance-time.js","0d51fc6ae77443087f4cbc8e96a4b454"],["/js/src/clipboard-use.js","ac5a032d4649092de6914d0bf4d3556d"],["/js/src/clipboard.js","b47884b82584351c3d277eebf209a790"],["/js/src/crash_cheat.js","d066ebef56a94c66229b4d209babbd6c"],["/js/src/exturl.js","a31917a618d822b34d4de8582dff7ebf"],["/js/src/hook-duoshuo.js","d34533ba912bfa24ba80e4d571ac8118"],["/js/src/js.cookie.js","736ca5078a4a24dea392fda61d801964"],["/js/src/linkcard.js","92c1b35103e00025b0e4a76b09dcb6d5"],["/js/src/love.js","8e5d271d6cbf9812aa31aa1f5d79845b"],["/js/src/motion.js","96299d3b0ee0d162be472222fb255afe"],["/js/src/post-details.js","7416fb5125822430d5941de5b1019d82"],["/js/src/schemes/pisces.js","e54f015f0d0b3f6775a516d7d864620b"],["/js/src/scroll-cookie.js","f61346ac7caf32e655a4450c6b3d1e3e"],["/js/src/scrollspy.js","f0073ae5fea053b44966409bb469116a"],["/js/src/utils.js","badd713d77228d9eefc61badabe43f74"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f85e214a0dbb6db63d7b7605d7f041e0"],["/lib/Han/dist/han.js","b9aac112b822ffb9877791d002234ebb"],["/lib/Han/dist/han.min.css","ed510817655bbf5fe4331f07eef5798a"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","589b9738c78e4ce61d31015508b492f8"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","eacfe1cc5477e1f4edf1498423f49008"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","899888f9d569b7f9924fcee69d596bdc"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","37c0b8cf171ff57e0a78909a75083728"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2bf96dbfde56e0986b043799ac727e6c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9e5a1cc188ade3214f1c23f2c0e974da"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","86a517eee0be77d548fe7db546664519"],["/lib/fancybox/source/jquery.fancybox.css","164ff88852a528141892a5e95945452d"],["/lib/fancybox/source/jquery.fancybox.js","6acf3bf611d4f8deaee189a121e2bedb"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","deecd1a9c30662baf509dae8940ef87f"],["/lib/fastclick/lib/fastclick.js","6cf1f061a171bbb256dffe158a7b59dc"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","3c34d2e26b3fba808a470441462e7001"],["/lib/font-awesome/css/font-awesome.min.css","3c34d2e26b3fba808a470441462e7001"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3f31883c2890fc27569f271e45fa48b8"],["/lib/jquery_lazyload/README.html","87b9fd5c79dc20777e2aa2d50c73ad02"],["/lib/jquery_lazyload/jquery.lazyload.js","2b5e01ed26f7e2a1fbb03fe9cc4fc73e"],["/lib/jquery_lazyload/jquery.scrollstop.js","43771d21f2b2a35971fd318cf0a524f1"],["/lib/needsharebutton/README.html","f2a1ceea2e1321f48a3587db6c94ff67"],["/lib/needsharebutton/needsharebutton.css","2c3e0cf4d07ac773e12f4d63919ca279"],["/lib/needsharebutton/needsharebutton.js","333dd5d34c8e3c9bda1c7237840023e4"],["/lib/pace/pace-theme-barber-shop.min.css","33ff0be24ae68febfb6fa6bba78975bd"],["/lib/pace/pace-theme-big-counter.min.css","583b83283e73c1022f1598936ee4d75d"],["/lib/pace/pace-theme-bounce.min.css","5c257475e635d8a00e81a235a2d6c669"],["/lib/pace/pace-theme-center-atom.min.css","e08f56d0a1f16a11c9ff3f0f9b1aeedb"],["/lib/pace/pace-theme-center-circle.min.css","ee52b4b7b9db2e8f5696fc00059cdd6c"],["/lib/pace/pace-theme-center-radar.min.css","6a9eb439f9743c6885cb071793b667d1"],["/lib/pace/pace-theme-center-simple.min.css","a0cfdcfe0629380958f6cc111df1c217"],["/lib/pace/pace-theme-corner-indicator.min.css","fd2b5d997fbc1b390f947659559e0ec8"],["/lib/pace/pace-theme-fill-left.min.css","74be91c575443b75743749bdfee949c5"],["/lib/pace/pace-theme-flash.min.css","97462f569d5a597c1a5a7a19177ff5e1"],["/lib/pace/pace-theme-loading-bar.min.css","dc35aa7427445de355066db81b5261c2"],["/lib/pace/pace-theme-mac-osx.min.css","122f42c019dc4b637e0b47b0e6ce9702"],["/lib/pace/pace-theme-minimal.min.css","fbd8782a1e0d2b75d2980aee353111cc"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7a1a8256e182cfc71c26a27970298d59"],["/lib/velocity/velocity.js","75b4893b52ba7da34bda4363a32b8341"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","74e8c941ec123d00c50cad690f8740d0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","6aa533ead685670819064a5fbe287c5c"],["/myPhotos/ball-pool/assets/Main.js","ef98e36bc1adcf18b4fac17dd27d1744"],["/myPhotos/ball-pool/assets/box2d.js","a71400efa8b4675c88ad780fe00618b2"],["/myPhotos/ball-pool/assets/protoclass.js","1b55a13a920d9e9bbad7f11d9b12a76d"],["/myPhotos/ball-pool/index.html","ca3d4593663fc328b3f807d260cef995"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","a0f1fc26e381d7c0fbd39e007e9cc78d"],["/sharejs/css/share.min.css","24c1d769e37eea7ada4e35c1e11892d1"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c05e357da07c3712126b1f0ba2a737b0"],["/tags/Ajax/index.html","aca5214e8dee18d4e06716a1f3831dae"],["/tags/C/index.html","25f538addb4524c1e2d1d475f3ab72fa"],["/tags/HEXO/index.html","ddad68deea193f5716a07d6681ab814e"],["/tags/Life/index.html","8ea19fe82a370aee92f04e2ba2f592d9"],["/tags/Linux/index.html","b59688ebc98b7b3e35264834a36ff3f5"],["/tags/Selenium/index.html","8a4e06c417d9e234f8067218ccd03b51"],["/tags/index.html","f567d9c6f7a3d35f9bbdb66f06b9a436"],["/tags/markdown/index.html","6082709c6eb18149bf5bd8fb51a89808"],["/tags/pathon/index.html","8873582205dc636c09a4353843608996"],["/tags/python/index.html","bcda8194211dbf33f5006e6234814a3f"],["/tags/re/index.html","013cfaaacb51472479541f6415e99fef"],["/tags/requests/index.html","51f59961a2611e969d5e0e319355eba2"],["/tags/学习/index.html","b180b9434c145c3d9bd83340f62acc22"],["/tags/排版/index.html","f4b7632d59dc58c18b106b9d8298e91e"],["/tags/正则表达式/index.html","60b3be108919fe2b6598e971cec472d4"],["/tags/爬虫/index.html","dea41c0feab93b7edd68ad89eaae7b49"]];
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
