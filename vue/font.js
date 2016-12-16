var Fontmin = require('fontmin');

// ----config---- //
var srcPath = 'src/assets/fonts-src/*.ttf'; // 字体源文件
var destPath = 'src/assets/fonts';          // 输出路径
// ----config---- //

var text = '';

var fs = require('fs');
var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = dir + '/' + file;

      // 忽略 assets
      if (dir.indexOf('assets') > -1) {
        return done(null, results);
      }
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
};

walk('src', function(err, results) {
  if (err) throw err;
  results = results.map(function(elem, index) {
    var  data = fs.readFileSync(elem, 'utf8');
    text += data.toString();
    return elem;
  })
  console.log('======================正在扫描中文字体😂')
  console.log(results);
  var reg = new RegExp()
  text = text.replace(/[^\u4E00-\u9FA5]/g,'');
  text += 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
  // console.log(text);
                                // 初始化
  var fontmin = new Fontmin()
    .src(srcPath)               // 输入配置
    .use(Fontmin.glyph({        // 字型提取插件
        text: text              // 所需文字
    }))
    // .use(Fontmin.ttf2woff())    // woff 转换插件     
    // .use(Fontmin.ttf2svg())     // svg 转换插件
    // .use(Fontmin.css())         // css 生成插件
    .dest(destPath);            // 输出配置

                                // 执行
  fontmin.run(function (err, files, stream) {
    if (err) {                  // 异常捕捉
      console.error(err);
    }
    console.log('done');        // 成功
  });
});
