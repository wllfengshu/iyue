'use strict';
var router = require('express').Router();
var AV = require('leanengine');

var User = AV.Object.extend('tb_user');

// 查询 tb_user列表
router.get('/', function(req, res, next) {
  var query = new AV.Query(User);
  query.descending('createdAt');
  query.find().then(function(results) {
    res.render('users', {
      title: '用户列表',
      users: results
    });
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('users', {
        title: '用户列表',
        users: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

// 新增tb_user项目
router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  if(password != password2){
  	console.log("两次密码不一致");
  }
  var user = new User();
  user.set('username',username);
  user.set('password',password);
  user.save().then(function(user) {
    res.redirect('/users');
  }).catch(next);
});

module.exports = router;
