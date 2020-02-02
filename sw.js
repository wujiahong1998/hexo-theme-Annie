/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","68e68d6e2775e8fef2c9c7abcfa6e575"],["/2019/03/27/Hexo博客优化/index.html","656a1ce61f0e0e724d432b6cff06b0e8"],["/2019/03/27/Markdown的基本操作/index.html","87635f2e99d60c05d8a0ee1a60c6a898"],["/2019/03/27/Seconday/index.html","a445658bdf5680da375933c67a473d56"],["/2019/03/31/学生会个人总结/index.html","b60ae201dccf9bbc6fe0b9187b7260ec"],["/2019/04/02/分治法/index.html","cb536d4fa8c5a36df9d4a50209d1ff5e"],["/2019/04/04/HEXO博客优化（一）/index.html","babd00cdafba5bda7ba24cb971885761"],["/2019/04/08/Linux-一/index.html","b3be025fdd1895efc2038ea790c1bbad"],["/2019/04/19/C程序的编译过程/index.html","a3f7c62b711029a559746dea6ec8b0d2"],["/2019/05/24/MechineLearning/index.html","b17051167b0280fc1e67be0cae1be8d9"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","bfbf629cff4102acac03150657625824"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","25ce23de83ac0775136a32042fd62fe7"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/2020/01/18/爬虫——Requests与Re/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/2020/01/18/爬虫——Requests与Re/image-20200120141528343.png","05ca2d6d6b22ccb2f538f29efad0159d"],["/2020/01/18/爬虫——Requests与Re/index.html","74690a0ad60ea4a6b64dc470a177eeb2"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/2020/01/20/Ajax数据爬取/image-20200120152827659.png","0cb1d08eaa7bee663121e337876ec328"],["/2020/01/20/Ajax数据爬取/image-20200120161016067.png","b82446a1a3d2c8b8e706472ff601bbbc"],["/2020/01/20/Ajax数据爬取/image-20200120164724335.png","3839f0f5d80d290b5dbfd0daacbe7315"],["/2020/01/20/Ajax数据爬取/image-20200120165259876.png","ea8ca5c167eb01dd4a1e44f26d513540"],["/2020/01/20/Ajax数据爬取/image-20200120165412671.png","b0efb1386e10837a7399b39a2b05b46c"],["/2020/01/20/Ajax数据爬取/image-20200120222739282.png","310cd35fd8c7385d2dd759205e70cfdb"],["/2020/01/20/Ajax数据爬取/image-20200120223146759.png","969c7858808e79551454ea87e505615f"],["/2020/01/20/Ajax数据爬取/image-20200121220420665.png","2d0acb5f43bb73bdd984d21ef28003bd"],["/2020/01/20/Ajax数据爬取/index.html","62b8d01825486d55642d586e2d36f9fb"],["/2020/01/22/markdown-插入视频/686e3a13ly1gb1zr3g5oyj20p00e2q56.jpg","2d84eeef335ae46ea074cb22a4567a7b"],["/2020/01/22/markdown-插入视频/index.html","b49c1d0ee86bc5a23ca42501164735bc"],["/2020/01/22/爬虫-动态渲染页面爬取/index.html","2c4dd4f8dff3f71988b6bece0dfcd3e4"],["/2020/01/23/hexo-格式排版/4eabb0e7182a79f97f6b0f795cc3e685.jpg","4eabb0e7182a79f97f6b0f795cc3e685"],["/2020/01/23/hexo-格式排版/c7454d3b96fd6e74a5ac2df0eb115dea.jpg","c7454d3b96fd6e74a5ac2df0eb115dea"],["/2020/01/23/hexo-格式排版/image-20200123145030221.png","6b8d55b822768283d850e7f9bdf3aaf3"],["/2020/01/23/hexo-格式排版/index.html","5698641f26e3c2454a7b3638616ec829"],["/2020/02/02/正则表达式-括号的区别/index.html","2c0fd29d6bcc2aa064fa43aad4668284"],["/about/index.html","c8504be470b3ef41afe0bcf4d5835e44"],["/archives/2019/03/index.html","b7f1f5a38a5d1ed660bb02cbc1c72c30"],["/archives/2019/04/index.html","a8947669c6135a14d6bcbb1017f32936"],["/archives/2019/05/index.html","3181d835bcd05a4fb6d4c4d42c2ed79a"],["/archives/2019/index.html","e449aef47d350665731b5f27bfc82b7d"],["/archives/2020/01/index.html","3cfdbb128a063caa5f89549136df7490"],["/archives/2020/02/index.html","a8d826245c2bae2e3ce3930387a2fffd"],["/archives/2020/index.html","1e2181fa7f31c8b48b8b4be0978a73cb"],["/archives/index.html","41cb2f129cca475bd4031755fa6ebb4f"],["/archives/page/2/index.html","119eb92b0f08e2052091652e216ceac8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","126b0f35edaa5e0338f10dce2b717796"],["/css/main.css","00090af987ab3296b040f914b2389011"],["/dist/css/share.min.css","34cd9520750156728220a521d4a4ff50"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","bdac38f858ea1df1fbf6f7036d161fa8"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","75174819682f2c821a1c1f99731df569"],["/js/src/algolia-search.js","974937eef4f7c744f79b22703c0229bc"],["/js/src/bootstrap.js","018f83639c3637672c436327353901ee"],["/js/src/canvas-dance-time.js","737e76587ef1e6cd4e4343a1ee0741dd"],["/js/src/clipboard-use.js","5ec31110d91e369bf752729536a392b5"],["/js/src/clipboard.js","27bec63d06d8d4243c0382cd15349ca9"],["/js/src/crash_cheat.js","8a2f78187ac762953cd88cf3443e0e7b"],["/js/src/exturl.js","c9b1002afff5a8542d8a40049266c7f4"],["/js/src/hook-duoshuo.js","e5c2422a35b870c98adcaac8f55dae77"],["/js/src/js.cookie.js","2986f938eaeb70ee8300596344df36be"],["/js/src/linkcard.js","fed75437d92f8062798d208cfacfc625"],["/js/src/love.js","debc357fb83a69d4c9c707b4b617389f"],["/js/src/motion.js","a10337665232b3e5a150370d632e11cf"],["/js/src/post-details.js","d50a39e6a4b23203a41bdc09c5e8cefc"],["/js/src/schemes/pisces.js","a8bc44e64b305f66059ac8b930a01b27"],["/js/src/scroll-cookie.js","3d9d13a66112cc91d5e7facf262beadc"],["/js/src/scrollspy.js","af244b6137549f9b189c5fee99df23e5"],["/js/src/utils.js","9b40c57d9841772a3b09c0f749b1c1ca"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","3535061c6067f7299434aa6c09ec5c77"],["/lib/Han/dist/han.js","0ba33f595023e33c7a64c2c2d2b10e9f"],["/lib/Han/dist/han.min.css","3b1f381b9916839e5186a7bf1e29a30a"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","f9ecd242f481ccaf3a52247516b1933b"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","443c3f5a6f72266387723f26bc0d7e43"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","543960ad68b944c3083df06540f3abda"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e61f0d9651e5cf7e878e8eabac09d409"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","492a804a5644ec23bc733b4598bad1b2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","8422e294bdde2268c9439b066c5be383"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1ab3bfb1a676a48cb5d2523679884067"],["/lib/fancybox/source/jquery.fancybox.css","f9ad9144ecfc74ab48bf57cbc2afdade"],["/lib/fancybox/source/jquery.fancybox.js","213b33091c86819f21cd0d84dc63688b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d540f09f87b8a53cfcc230761cc53af4"],["/lib/fastclick/lib/fastclick.js","728f271367e3fa0afc74183e115cbe8b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","124b6b2ac5d9087c726060e655792937"],["/lib/font-awesome/css/font-awesome.min.css","124b6b2ac5d9087c726060e655792937"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ecadc7cb43536cee83c4548e12e1fef"],["/lib/jquery_lazyload/README.html","f65551163442d864b5336128d6b1a831"],["/lib/jquery_lazyload/jquery.lazyload.js","7621ca62eaac32773bbe601d0dbb3a79"],["/lib/jquery_lazyload/jquery.scrollstop.js","4005bdc418d3783cbb580b684b1ba708"],["/lib/needsharebutton/README.html","c907f0257d2cc94aa9297e331d23c5f5"],["/lib/needsharebutton/needsharebutton.css","157816034fb9f79b16518376c0326e70"],["/lib/needsharebutton/needsharebutton.js","e859968a43e51e888cc3b525157f6e5b"],["/lib/pace/pace-theme-barber-shop.min.css","d31738868ab8cfa10d0982d94d7b6d6c"],["/lib/pace/pace-theme-big-counter.min.css","1795e744017ea3714a5efade8120879e"],["/lib/pace/pace-theme-bounce.min.css","898cda7719a4b0e81acd07823eb814d6"],["/lib/pace/pace-theme-center-atom.min.css","b57bea1b00888be66880c30ab360f47f"],["/lib/pace/pace-theme-center-circle.min.css","5abf4eb93a10ad1eb58045a07972a6c5"],["/lib/pace/pace-theme-center-radar.min.css","414c83cb22594d76e4b6e74bf25d837f"],["/lib/pace/pace-theme-center-simple.min.css","e804e44113a7ee0d5e70c2b526443e72"],["/lib/pace/pace-theme-corner-indicator.min.css","5c768494cec19fbcbc08b67f4975b34f"],["/lib/pace/pace-theme-fill-left.min.css","41800439db3c56d4e3dc2fa76a2ebdf5"],["/lib/pace/pace-theme-flash.min.css","9496bd1f4c8b84bdae7843e302892e31"],["/lib/pace/pace-theme-loading-bar.min.css","d9a40969f37fcfa6bad0c1cc82ce8225"],["/lib/pace/pace-theme-mac-osx.min.css","fbfcf5bc40f43af393752346534643d3"],["/lib/pace/pace-theme-minimal.min.css","f118b227486d28f0c17c7d9c931586c1"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","776a34d9ee3aa008ca2f823be87cd8fa"],["/lib/velocity/velocity.js","8344eed48a0c321783185d9005433b19"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bbe5f289478b84a9b860e2177f765180"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","e0ad6090d66c00cd843b3d4f1f0e7385"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","cda5d1cbbc85c32410a4e42c069fb9ce"],["/sharejs/css/share.min.css","032ffbaaf9a01ba008ce68b31ab3e82c"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","de810a9c5570d05d21b508be4c88a675"],["/tags/Ajax/index.html","8b2e713b7a8f5202966e81938f013a31"],["/tags/C/index.html","98f810aab51dba6bf96a10a9831a931d"],["/tags/HEXO/index.html","704656a2df033b21593c62115ce97efb"],["/tags/Life/index.html","ef7ea760b95caabfac2baa99a062fdad"],["/tags/Linux/index.html","b5c6cbc1a87b05dbd07cd2134af237b8"],["/tags/Selenium/index.html","12227070f934201d2c4f2a8f77d26f9f"],["/tags/index.html","bfa5105772d71b2c3f712f9c48a68719"],["/tags/markdown/index.html","6e4ca62a9e0f344a8fe20fa396a15f2e"],["/tags/pathon/index.html","5cf0004216595ae1a82052d54be6aab6"],["/tags/python/index.html","4a6728159a16ad8c8d6425742934428a"],["/tags/re/index.html","26a6ab4f9dd89754ef05921de703839b"],["/tags/requests/index.html","fe2c597f8bf1038a7fa65edc0e14932b"],["/tags/学习/index.html","ad1fd268e85ededbfc391f973ffe3d1e"],["/tags/排版/index.html","1abe41b1b03ce9e6f04c3679dbb0c3a3"],["/tags/正则表达式/index.html","8f072767549e8fad8da908b1db713f33"],["/tags/爬虫/index.html","832281775895b8b4a2ca8aef87d1766c"]];
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
