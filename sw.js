/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/25/hello-world/index.html","3519bd5f7b088170c330f40a0e14c14a"],["/2019/03/27/Hexo博客优化/index.html","88316428717c9c45a2bae739b81046f9"],["/2019/03/27/Markdown的基本操作/index.html","0056c1e14e3661ed5b31a9b00bd595ab"],["/2019/03/27/Seconday/index.html","113dff04360d4a31d2d8a0c5a843206f"],["/2019/03/31/学生会个人总结/index.html","ceece9809852a2b624600bebb04fa899"],["/2019/04/02/分治法/index.html","5ab26c314847c875ce3911ced99fe8ba"],["/2019/04/04/HEXO博客优化（一）/index.html","b54c3a82728e040ea7727c0959523e3a"],["/2019/04/08/Linux-一/index.html","188532aa7849adfa03f9ff7fad18d12f"],["/2019/04/19/C程序的编译过程/index.html","c1356a241cbd9df2259a35f1f4a84425"],["/2019/05/24/MechineLearning/index.html","8b7a0957d6e30d7aff705c3ad9163140"],["/2020/01/11/hexo再配置/failure.png","58307e81ffdff49c962a44696d742d13"],["/2020/01/11/hexo再配置/fileSet.png","efdf8c73a6cc89318c6c485b3f70f3ed"],["/2020/01/11/hexo再配置/fork.png","268c9222930a615e0bfd334ec037cede"],["/2020/01/11/hexo再配置/image-20200112165934470.png","fe6ff99298fbf954f2683b12155dcb00"],["/2020/01/11/hexo再配置/image-20200112171023816.png","8ca4d015863f0244698296a5169771de"],["/2020/01/11/hexo再配置/image-20200112171316157.png","ed4d0aa4def068121e65e8432b3d4f68"],["/2020/01/11/hexo再配置/image-20200112172807496.png","7012b0637c056e09a51fbb16539a71ab"],["/2020/01/11/hexo再配置/image-20200112175941074.png","aa5ead130da8b0958f3c1e7f086a7f91"],["/2020/01/11/hexo再配置/image-20200112181301875.png","5d01acbd147b9a9a6ce53d172dd96aa4"],["/2020/01/11/hexo再配置/image-20200112201854386.png","93930b8683bcb958901d15dc836e9d05"],["/2020/01/11/hexo再配置/image-20200112202639461.png","8bfd2e8b2b233f1547026495cb2d097f"],["/2020/01/11/hexo再配置/image-20200112204119472.png","1038f7c4bacb0476388195ee29f70455"],["/2020/01/11/hexo再配置/image-20200112231213708.png","0d3e02442debb88975efa0f81142b5f4"],["/2020/01/11/hexo再配置/image-20200113161430673.png","b1f9b9635f3d56b975341b82b24af15c"],["/2020/01/11/hexo再配置/image-20200113171212890.png","0346e08f38eb36b8910fd824187506b3"],["/2020/01/11/hexo再配置/index.html","b11c7b9c07bcdd857d660c4f954b9e08"],["/2020/01/11/hexo再配置/setbottom.png","3c81fcb8d9b22046adbcf44c7441641e"],["/2020/01/11/hexo再配置/socialIcon.png","1f751fd1517c15637785c57919ec55eb"],["/2020/01/16/爬虫原理及基础/2-12.jpg","cdb010f9a86022278262564affd728f3"],["/2020/01/16/爬虫原理及基础/591228-20160116223301225-1866838315.png","0e91b072f3e351a17327b58f878b1573"],["/2020/01/16/爬虫原理及基础/HTTP-vs-HTTPS.png","7ca37ef0afd1bfcaf1ef03335e8f332f"],["/2020/01/16/爬虫原理及基础/dffdff.png","184f8ff7242dce514ca46033110d8cbc"],["/2020/01/16/爬虫原理及基础/image-20200117005114027.png","89584935b320945a44b092a16ba0bf83"],["/2020/01/16/爬虫原理及基础/index.html","b1fce8bbbd9684436200797d4dc44b22"],["/2020/01/16/爬虫原理及基础/net.jpg","47d1da077613790e30478a0c34515854"],["/2020/01/16/爬虫原理及基础/爬虫基础.png","bec7f63006885823b8b4ba82d3f7dde0"],["/2020/01/18/爬虫——Requests与Re/image-20200118233043026.png","839d90ca49b8e68f2d0c0c44683700eb"],["/2020/01/18/爬虫——Requests与Re/image-20200118234324735.png","82cd7051e20569a38591ec8eaee30b47"],["/2020/01/18/爬虫——Requests与Re/image-20200119005117272.png","368baaf21abb38486502361515985222"],["/2020/01/18/爬虫——Requests与Re/image-20200120124521012.png","b8b7e35f36a23a4c7753b467293ddd2a"],["/2020/01/18/爬虫——Requests与Re/image-20200120124724230.png","0fb2b0ca798ec68a95e99f074f32fdb5"],["/2020/01/18/爬虫——Requests与Re/image-20200120141528343.png","05ca2d6d6b22ccb2f538f29efad0159d"],["/2020/01/18/爬虫——Requests与Re/index.html","0f1f35dad79b0185d02ee8aa00d59b02"],["/2020/01/18/爬虫——Requests与Re/v2-48418ab1d69b13d7cb5edb5ee3186b61_fhd.png","2082b4b387c11762667c9b9d080e796a"],["/2020/01/20/Ajax数据爬取/image-20200120152827659.png","0cb1d08eaa7bee663121e337876ec328"],["/2020/01/20/Ajax数据爬取/image-20200120161016067.png","b82446a1a3d2c8b8e706472ff601bbbc"],["/2020/01/20/Ajax数据爬取/image-20200120164724335.png","3839f0f5d80d290b5dbfd0daacbe7315"],["/2020/01/20/Ajax数据爬取/image-20200120165259876.png","ea8ca5c167eb01dd4a1e44f26d513540"],["/2020/01/20/Ajax数据爬取/image-20200120165412671.png","b0efb1386e10837a7399b39a2b05b46c"],["/2020/01/20/Ajax数据爬取/image-20200120222739282.png","310cd35fd8c7385d2dd759205e70cfdb"],["/2020/01/20/Ajax数据爬取/image-20200120223146759.png","969c7858808e79551454ea87e505615f"],["/2020/01/20/Ajax数据爬取/image-20200121220420665.png","2d0acb5f43bb73bdd984d21ef28003bd"],["/2020/01/20/Ajax数据爬取/index.html","dcdfe173840d3ea46efa63faff172d55"],["/2020/01/22/markdown-插入视频/686e3a13ly1gb1zr3g5oyj20p00e2q56.jpg","2d84eeef335ae46ea074cb22a4567a7b"],["/2020/01/22/markdown-插入视频/index.html","2ec07ef017dae820a2b3db9901c65603"],["/2020/01/22/爬虫-动态渲染页面爬取/index.html","471b8830f0ec37fef59d3e9cf661ba60"],["/2020/01/23/hexo-格式排版/4eabb0e7182a79f97f6b0f795cc3e685.jpg","4eabb0e7182a79f97f6b0f795cc3e685"],["/2020/01/23/hexo-格式排版/c7454d3b96fd6e74a5ac2df0eb115dea.jpg","c7454d3b96fd6e74a5ac2df0eb115dea"],["/2020/01/23/hexo-格式排版/image-20200123145030221.png","6b8d55b822768283d850e7f9bdf3aaf3"],["/2020/01/23/hexo-格式排版/index.html","b8af568453254cd0aee1603c06a87d99"],["/HomeLink/index.html","06a7e44663f0b98f0b2bdd3a4c9b1b98"],["/about/index.html","44dee44308696049cb13aa8d99b1d9f5"],["/archives/2019/03/index.html","d6443a7be2e6a8ac9fdc47b436e551ea"],["/archives/2019/04/index.html","87e2046587b6c847be8558461bc3a708"],["/archives/2019/05/index.html","5be65169757f1c5fc4a55cb4e1fb3f4e"],["/archives/2019/index.html","4a9a7f8a18f02b0d146b926eae2cb4e9"],["/archives/2020/01/index.html","15d375207585139f1431802ceba29dbe"],["/archives/2020/index.html","be1a1aa0568513805756480c535e0365"],["/archives/index.html","d1e027bc6857f846029aa6645adee968"],["/archives/page/2/index.html","2bce1d1fd3f0c4736f7949a508ed77eb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","9554071588fe30cfdc285b788cf1798f"],["/css/main.css","4d7935cf74f142dde6a9d44b6ad8f3e3"],["/dist/css/share.min.css","98ee0d4dd56a8371013c58ddeb083fc5"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","39da31c8878f50720337b2e49bb836ef"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/background.jpg","ed6c237e5dddbc942533f5892a43b7dc"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","58307e81ffdff49c962a44696d742d13"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon16.png","88c6c8b4248410524fbe353c77226d7a"],["/images/favicon32.png","4ba82e04286b19e2ceae843598aa6c97"],["/images/linkcard.jpg","70d16e21951be14e88a8e6236e2cf4e4"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","b96e71cfa392724438f44505f425dd2e"],["/index.html","bd758049e350e040ee189595f33b9325"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/src/affix.js","f284305a087f395533185aa9b1199712"],["/js/src/algolia-search.js","de8300abc56a2494ec019df7095efbb7"],["/js/src/bootstrap.js","113dd239b3a7c3770e67b3e405a254e0"],["/js/src/canvas-dance-time.js","5ca11d8f33fe20cee7e0af59e7c0aaf9"],["/js/src/clipboard-use.js","c6137eb349dd91ad25f335b721a86308"],["/js/src/clipboard.js","79ea6f349d1ca8431d08341b11e0ec23"],["/js/src/crash_cheat.js","112c536351a3f405af56ed1d5614a743"],["/js/src/exturl.js","8cf4dc612c397a43253b8a3c9550c99d"],["/js/src/hook-duoshuo.js","c46d2c975d6748c6685d2c81b1e4ec8d"],["/js/src/js.cookie.js","feeeb1a1f05ac10fc91838efeae0caa6"],["/js/src/linkcard.js","c3d31aa5d535bd4cfcc64c8000261d7f"],["/js/src/love.js","5eb0cd0334be5792d8207b33af7df93a"],["/js/src/motion.js","d3c44db13f46ade29c29a8350f27b371"],["/js/src/post-details.js","b214331f51f44f65b046ff3e8e04f3d6"],["/js/src/schemes/pisces.js","2faf6817f1860a952265b208ac7f5f36"],["/js/src/scroll-cookie.js","8bc2022bc073bcb2b4bdaf02ab46193b"],["/js/src/scrollspy.js","1197451f19e555ccb33e7a3a5ffc9def"],["/js/src/utils.js","de4dc7567c57d6aefe830afa6d8fbd3c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","84b5a094b891a9fe8a327bc651c17039"],["/lib/Han/dist/han.js","edd1bc041b979dd8ff4dfa4fd322dbc3"],["/lib/Han/dist/han.min.css","cde26744067099d537b8f20ee54b0d61"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","f0d86cc1cb803541d8292d984ee001b0"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","73d7d8e0da10cc8218df22c390470736"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","61199b9c106d54194a1d13ea22dd5107"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2d7b4115c51466ac5f19a8dfad1f2292"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","04f57ba35d75dc9f3f12e3bf6c9291ac"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","943ed2d469f4215d0202738a6f75af4f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c2f85246cb4b235386319130f496518e"],["/lib/fancybox/source/jquery.fancybox.css","f7de0e7010098c049a5c46bb896d2360"],["/lib/fancybox/source/jquery.fancybox.js","3e0f4e6ee30ad64235e64b4961da37e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","a12d2267e22b75bafd65fd3ceed9accb"],["/lib/fastclick/lib/fastclick.js","0ee7d8abd848e3767880669ebd58166a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","0076b01ea3dc3d8af274d4b8de427d0e"],["/lib/font-awesome/css/font-awesome.min.css","0076b01ea3dc3d8af274d4b8de427d0e"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","8056702715de766b0b71dc1c9481cc83"],["/lib/jquery_lazyload/README.html","d8696e2bd7ab19b9903763d11e2e82b7"],["/lib/jquery_lazyload/jquery.lazyload.js","7e5df10686b9a6694aad839ac0479d61"],["/lib/jquery_lazyload/jquery.scrollstop.js","ac9d4f6a3ba9ae0f1e33ba1d3acee958"],["/lib/needsharebutton/README.html","be588421ab92758034337adda223ddf9"],["/lib/needsharebutton/needsharebutton.css","0973f70269731d20c704788a644b3f98"],["/lib/needsharebutton/needsharebutton.js","80193b3756b6c8d11e202b456fd561bc"],["/lib/pace/pace-theme-barber-shop.min.css","7e02bca9bdc4a9602504d1c6b57c860d"],["/lib/pace/pace-theme-big-counter.min.css","617e5d275f0aed86b79d7e09abc109c6"],["/lib/pace/pace-theme-bounce.min.css","f2f7fa8c32e5db3eaf6a3d8e1ec28422"],["/lib/pace/pace-theme-center-atom.min.css","f31582b424fc41631199b94e974a37d8"],["/lib/pace/pace-theme-center-circle.min.css","92c16c5b5c0fa76579ddcd660244321b"],["/lib/pace/pace-theme-center-radar.min.css","68f9035af81a8fde356cc75af57623ff"],["/lib/pace/pace-theme-center-simple.min.css","8197d74d290684de35705008e5687836"],["/lib/pace/pace-theme-corner-indicator.min.css","3a3b8737ca8561296e7c9960ad914a35"],["/lib/pace/pace-theme-fill-left.min.css","9571e7782b9d286004747aacb933e807"],["/lib/pace/pace-theme-flash.min.css","92e091e116edc15a5203a214ccf00ecb"],["/lib/pace/pace-theme-loading-bar.min.css","5cad31f89d5761dada530e81754811af"],["/lib/pace/pace-theme-mac-osx.min.css","cd2a9cef6c2dc7dee6ae9094c762201e"],["/lib/pace/pace-theme-minimal.min.css","7b090c2e5b3eee3cefd22a84a6963a86"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e49d628cbe8360198582c7d8dcc7c19c"],["/lib/velocity/velocity.js","609a07622bfacfcc8af0d029bf0d5571"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f99570d08f21098e9f7f051fc24a765a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","6bc61244f27dd7c60ff7dc8ac445e7bc"],["/myPhotos/hicon.jpg","cd95e2260578005568137398eb3fc3ca"],["/page/2/index.html","bb5fe8d7ba15a2ffb1eefff0439533ce"],["/sharejs/css/share.min.css","10f86834cb228b2f3b4d29e4cda9d779"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c31d95d9661ad6aa60c41a2bbc6ba822"],["/tags/Ajax/index.html","3825f196dce1d5938fe2b2fe04d5f965"],["/tags/C/index.html","d47b491bc1f774433c93d477025efc31"],["/tags/HEXO/index.html","0c5ba907815032728b466d26c0df075c"],["/tags/Life/index.html","710eab17aa66c27c8b542b778f16ccd0"],["/tags/Linux/index.html","8a2cf2213542e22a423a795fd46ebb98"],["/tags/Selenium/index.html","570da733ebf3ae4ddebbd9725a4748f7"],["/tags/index.html","ef1e2fd3c00930a2252ddd8b174a68b0"],["/tags/markdown/index.html","b4ba094c61023f266f75e7635fde7653"],["/tags/python/index.html","66debe14fe59b7bfeec82eb67294d2ab"],["/tags/re/index.html","a917b72b6c3450e46d6745c6d330a34e"],["/tags/requests/index.html","a12e082a5381e5b3bd317952e5125b02"],["/tags/学习/index.html","8ee54f0554d83480368d5f44bf53a7ad"],["/tags/排版/index.html","25b051439574fd51060f0513ab675257"],["/tags/爬虫/index.html","6d564fb5f469c2b712e4224ab7cc7e74"]];
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
