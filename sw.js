/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","66a4f104bef61c7a2e3c0fedce820b1a"],["/2019/03/27/Hexo博客优化/index.html","8ff36312cda7218f2d0254626b6b0960"],["/2019/03/27/Markdown的基本操作/index.html","544bfa74044dbfecf773fb9ee49de33a"],["/2019/03/27/Seconday/index.html","cef99726d28a6456435a589ca61f5d3d"],["/2019/03/31/学生会个人总结/index.html","ff60b1d1dca6f3003cb20427b1198239"],["/2019/04/02/分治法/index.html","4b2c4b773b838670b75c8e02ffa16020"],["/2019/04/04/HEXO博客优化（一）/index.html","05b9b72f1bf9c959cb7c914da72e4b44"],["/2019/04/08/Linux-一/index.html","cc96af9408d43c7b6c8808608fdbd08f"],["/2019/04/19/C程序的编译过程/index.html","09efeea6098858b04af18b5eb90dba9f"],["/2019/05/24/MechineLearning/index.html","186e734f2b8ab2a5241e04fdd077c70b"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","0c6e1cb543924327dbe80d186727b75a"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","05a0fa338ea22b6726e33ff1a09c21a3"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/2020/01/18/爬虫——Requests与Re/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/2020/01/18/爬虫——Requests与Re/image-20200120141528343.png","05ca2d6d6b22ccb2f538f29efad0159d"],["/2020/01/18/爬虫——Requests与Re/index.html","70fae44ad21a045044887d9f0a514ebc"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/2020/01/20/Ajax数据爬取/image-20200120152827659.png","0cb1d08eaa7bee663121e337876ec328"],["/2020/01/20/Ajax数据爬取/image-20200120161016067.png","b82446a1a3d2c8b8e706472ff601bbbc"],["/2020/01/20/Ajax数据爬取/image-20200120164724335.png","3839f0f5d80d290b5dbfd0daacbe7315"],["/2020/01/20/Ajax数据爬取/image-20200120165259876.png","ea8ca5c167eb01dd4a1e44f26d513540"],["/2020/01/20/Ajax数据爬取/image-20200120165412671.png","b0efb1386e10837a7399b39a2b05b46c"],["/2020/01/20/Ajax数据爬取/image-20200120222739282.png","310cd35fd8c7385d2dd759205e70cfdb"],["/2020/01/20/Ajax数据爬取/image-20200120223146759.png","969c7858808e79551454ea87e505615f"],["/2020/01/20/Ajax数据爬取/image-20200121220420665.png","2d0acb5f43bb73bdd984d21ef28003bd"],["/2020/01/20/Ajax数据爬取/index.html","75e550ba57d8c0ffa4ddb4e865a82907"],["/2020/01/22/markdown-插入视频/686e3a13ly1gb1zr3g5oyj20p00e2q56.jpg","2d84eeef335ae46ea074cb22a4567a7b"],["/2020/01/22/markdown-插入视频/index.html","4e4d971729c00d6eaa6c70c144e019e7"],["/2020/01/22/爬虫-动态渲染页面爬取/index.html","79e0b7c7ee30cadb7c4337235a57fb88"],["/2020/01/23/hexo-格式排版/4eabb0e7182a79f97f6b0f795cc3e685.jpg","4eabb0e7182a79f97f6b0f795cc3e685"],["/2020/01/23/hexo-格式排版/c7454d3b96fd6e74a5ac2df0eb115dea.jpg","c7454d3b96fd6e74a5ac2df0eb115dea"],["/2020/01/23/hexo-格式排版/image-20200123145030221.png","6b8d55b822768283d850e7f9bdf3aaf3"],["/2020/01/23/hexo-格式排版/index.html","6e667f986cb526ca440d38e7aee89ed1"],["/2020/02/02/正则表达式-括号的区别/index.html","e1b11720daa1d1835146efebb4ce2425"],["/about/index.html","43096327064770783149fae733830605"],["/archives/2019/03/index.html","0dd4e6088d3fd2b2a608f1ceaef56944"],["/archives/2019/04/index.html","0fce60473501248b013f3a0349b484c1"],["/archives/2019/05/index.html","b456e0c0a1ac53343fc1c262122597e8"],["/archives/2019/index.html","3b356eb750ecd9bbbe696d8fd3f9ef54"],["/archives/2020/01/index.html","131b7d52f289e70bad764d902fcccc30"],["/archives/2020/02/index.html","5900e114bbc331276278e953b244da80"],["/archives/2020/index.html","1deac600181c9c97dc45916332204f7a"],["/archives/index.html","b70299085d44803efc4ba644273d9a60"],["/archives/page/2/index.html","c1932620c9040d3287c2d21bc5df00ea"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","2910f00ddaddae821ec89fd27449e6d6"],["/css/main.css","34acff1e753de74d05e4b67453769852"],["/dist/css/share.min.css","ceb653a1125d1a371f6c8839152a817f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","95f7f51f78ae946fc2aec75cf1e03493"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","42a11084ac1a1d7368d89834d5db36dc"],["/js/src/algolia-search.js","8c2c2fffd28b30a7e6bebbb50d8e9257"],["/js/src/bootstrap.js","291b435d69a9fb00fbee98dede319ed9"],["/js/src/canvas-dance-time.js","e2be4bc3c889589565d1ce5a23c0e036"],["/js/src/clipboard-use.js","b4de8862c116364ab584cbf5bb377294"],["/js/src/clipboard.js","aa5ec731f6cf5712b2cda242dbd7854d"],["/js/src/crash_cheat.js","a5d88e9bac5c0f72ac380a8c7d99e6cf"],["/js/src/exturl.js","6b93a99b317268295b007ef058748648"],["/js/src/hook-duoshuo.js","cff9ebb7bb7476d476152ecd4e920dde"],["/js/src/js.cookie.js","875045337ac995dc33a7e48e90599013"],["/js/src/linkcard.js","60a93f932077c3a4f0800d568fd81b2e"],["/js/src/love.js","797ab48beb57e13a9a74e3afd011345c"],["/js/src/motion.js","41246fadc569e6ccf33a3f1a7698d6b4"],["/js/src/post-details.js","743d24b44a4ab08963b5932bbdd6bf0f"],["/js/src/schemes/pisces.js","b46b43403316ba74df42a8520615b229"],["/js/src/scroll-cookie.js","7861663a077157a212080b19b13e5af1"],["/js/src/scrollspy.js","19959222da5d28fe4bc55eb8f208fde3"],["/js/src/utils.js","3193048ad860560708e19a04cc491d15"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","5fd20f26f90147be70137fd4d240ef9e"],["/lib/Han/dist/han.js","3f89e70ef364ef7c61b8f2d99804cb62"],["/lib/Han/dist/han.min.css","f1d657ab60875b738cafeb4d9645665e"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","88b1ad31db097ec8f91577594c8ff406"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b57ae107e33361ae177819bd0a7cd08f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d5e0b94b2262c3a558521f5e5fd5b10a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","24c6a51e4f291dd06efbcbe42ca4e9fd"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","36ddb91e64af1d212fa21fa7e4522469"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","0a0d17b4d46b5b434df7e451dfe4e94b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d61e949db97e84679a215caf2e2d60ff"],["/lib/fancybox/source/jquery.fancybox.css","58fa9e415f54ac4a8a6dd63f35734f55"],["/lib/fancybox/source/jquery.fancybox.js","c8470876eadd48261860bc99ff51022e"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","cee3b666cea8929e373e3e8de92207f9"],["/lib/fastclick/lib/fastclick.js","fc427e29780f9c83b87d070ee7d163ec"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","630c519f31d00eb2bf71f6e4d51698ac"],["/lib/font-awesome/css/font-awesome.min.css","630c519f31d00eb2bf71f6e4d51698ac"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","d2eae46ceb184e11b20cfc7ed951a50d"],["/lib/jquery_lazyload/README.html","410dfec7634332f69582a474000f4fd2"],["/lib/jquery_lazyload/jquery.lazyload.js","03377d567e7b2297900f445f073d37a0"],["/lib/jquery_lazyload/jquery.scrollstop.js","53bb6ff46d8a05d7829563639a84cf03"],["/lib/needsharebutton/README.html","75c7fbf812d7dff2e3c8771b946b4452"],["/lib/needsharebutton/needsharebutton.css","dd27dde26f409181992249edd223b48f"],["/lib/needsharebutton/needsharebutton.js","b75e2165d5355a39f9128e83b752c25e"],["/lib/pace/pace-theme-barber-shop.min.css","ed5fb159b3586951ae95bd2062c46f1d"],["/lib/pace/pace-theme-big-counter.min.css","c6c421b98e80868a1a8f056a67c99105"],["/lib/pace/pace-theme-bounce.min.css","795ff184600670de77a43b89db7fa0ad"],["/lib/pace/pace-theme-center-atom.min.css","ba718f11e092b91b06d03e318b0940c4"],["/lib/pace/pace-theme-center-circle.min.css","8d35a758a3b458e9aef53b3771f94800"],["/lib/pace/pace-theme-center-radar.min.css","e0fdbd8e431e6a700acf0a4fed3a060c"],["/lib/pace/pace-theme-center-simple.min.css","53dd18711815395168daaf405953ed16"],["/lib/pace/pace-theme-corner-indicator.min.css","a8e2c3daed6f42a8b906e2c9a8c24e24"],["/lib/pace/pace-theme-fill-left.min.css","390dd8b683e5bb2de3d0e034e0f0a72c"],["/lib/pace/pace-theme-flash.min.css","c2f6aff22a54da24bb2e0a4967bfba17"],["/lib/pace/pace-theme-loading-bar.min.css","676ac240ace0d459c0cc68bfaa092466"],["/lib/pace/pace-theme-mac-osx.min.css","b0f3aef70e463e55c08f18800ce7711e"],["/lib/pace/pace-theme-minimal.min.css","ce37acf20e70294c1c707a6fa1149d14"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","23bada6e98aa68c79db3ad0e4876068a"],["/lib/velocity/velocity.js","3b2e9398625420a7488df7f9bc7595b3"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","9f099f4d156a52eb2189713aca7c0c6c"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","273351d607a9aeac1ca809aeec7c457b"],["/myPhotos/ball-pool/assets/Main.js","d79bb271801c59adf2f9c2ee20c784eb"],["/myPhotos/ball-pool/assets/box2d.js","3ddee33251d208758488e5ee19679cf1"],["/myPhotos/ball-pool/assets/protoclass.js","8a848f89d78d350dc2b9d86da589be41"],["/myPhotos/ball-pool/index.html","c681c7bd69624cadb716639cc6beec1d"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","af59cef7538839b9583248ca14e03169"],["/sharejs/css/share.min.css","8b70362ccc3893ab41afbe7d9cc6972d"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","996928768f1053b9c68cb3e0f26a0692"],["/tags/Ajax/index.html","81ed23d123e7bb7f7f4e545000e17590"],["/tags/C/index.html","55f14fade916c401c4a5757c891c105a"],["/tags/HEXO/index.html","b26e4c6ac46075ab2ce2aac175a7d19e"],["/tags/Life/index.html","f6939985a1d65cf1d85cdc598f694848"],["/tags/Linux/index.html","a8b95f5e8778594dd646c81262f99f2f"],["/tags/Selenium/index.html","460dbd9c391b09cbb77a838cc7b732ab"],["/tags/index.html","faa439c81ee477b8a7ef39559fde6bd4"],["/tags/markdown/index.html","dd5c732517e93c0454e179bf13eb5a63"],["/tags/pathon/index.html","272f0b9e8fc79b7befdf9617c4aac363"],["/tags/python/index.html","a5c2e47ef5f2aa6820541257303257fd"],["/tags/re/index.html","0d9ca4794fd606b5694d8f6adf93dd8d"],["/tags/requests/index.html","4b4d46cfa07617c5149f8e86378f065e"],["/tags/学习/index.html","22be4f6c0cf70eb654aeac3f34bcdec6"],["/tags/排版/index.html","0a4e720274bcdc992418890b10f9a0d3"],["/tags/正则表达式/index.html","10001cb6127766e85f7b44b162c62630"],["/tags/爬虫/index.html","c72d92b3c7befcc92a18b24c825c74a0"]];
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
