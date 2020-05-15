# istanbul
> 测试的时候，我们常常关心，是否所有代码都测试到了。

## installation
```shell
npm install -g istanbul
```

## 四个测量维度
- 行覆盖率（line coverage）：是否每一行都执行了？
- 函数覆盖率（function coverage）：是否每个函数都调用了？
- 分支覆盖率（branch coverage）：是否每个if代码块都执行了？
- 语句覆盖率（statement coverage）：是否每个语句都执行了？

## 与测试框架的结合
> 实际开发时，istanbul 总是与测试框架结合使用，下面以常用的 Mocha 框架为例。

```shell
istanbul cover _mocha
```

上面命令中，istanbul cover 命令后面跟的是 _mocha 命令，前面的下划线是不能省略的。
因为，mocha 和 _mocha 是两个不同的命令，前者会新建一个进程执行测试，而后者是在当前进程（即 istanbul 所在的进程）执行测试，只有这样， istanbul 才会捕捉到覆盖率数据。其他测试框架也是如此，必须在同一个进程执行测试。
如果要向 mocha 传入参数，可以写成下面的样子。
$ istanbul cover _mocha -- tests/test.sqrt.js -R spec
上面命令中，两根连词线后面的部分，都会被当作参数传入 Mocha 。如果不加那两根连词线，它们就会被当作 istanbul 的参数（参考链接1，2）。


## resources
- http://www.ruanyifeng.com/blog/2015/06/istanbul.html
