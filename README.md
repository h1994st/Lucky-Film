Lucky-Film
==========

A random selector for films

## Usage

```bash
$ git clone https://github.com/h1994st/Lucky-Film.git
$ cd Lucky-Film
$ bower install
$ npm install
$ [sudo] node ./bin/www --apikey <Your douban API Key> // in config.js, if you set the port as 80, you have to use 'sudo'
```

## Configuration

In `config.js`, the main pary is like this:

```
...

config = {
  database: path.join(__dirname, <Your splite database path>),
  port: <Port>,
  douban: {
    apikey: <Your douban API Key>
  }
}

...
```

## TODO

- [x] 添加豆瓣电影api支持
- [x] pjax
- [x] nprogress进度条
- [ ] 电影名自动补全
- [ ] 电影图片显示
- [ ] 解决图片加载问题
