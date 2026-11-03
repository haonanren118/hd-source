var rule = {
    title: '电影港[4K]',
    author: '荷城茶秀',
    host: 'https://www.dygang.tv',
    homeUrl: '/4K/',
    url: '/4K/index_{catePg}.htm',
    searchUrl: '/e/search/result/?searchid=1&keyboard=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    play_parse: true,
    double: false,
    headers: {
        'User-Agent': 'PC_UA',
    },
    class_name: '最新电影&经典高清&国配电影&经典港片&国剧&日韩剧&美剧&综艺&动漫&纪录片&高清原盘&4K高清区&3D电影&电影专题',
    class_url: 'ys&bd&gy&gp&dsj&dsj1&yx&zy&dmq&jilupian&1080p&4K&3d&dyzt',
    推荐: 'td[align="center"];table[width="388"];a&&img&&data-src;a&&alt;a&&href',
    一级: 'table[width="388"];a&&title;a&&data-original;a&&href',
    二级: {
        title: 'h1&&Text',
        img: 'img&&data-original',
        desc: '.des&&Text',
        content: '.content&&Text',
        tabs: '.play_source_tab&&a',
        lists: '.playlist&&ul&&li',
    },
    搜索: '*',
    lazy: `js:
  let html = request(input);
  let m = html.match(/magnet:\?xt=urn:btih:[A-F0-9]+/i);
  if (m) { input = m[0]; } else {
    let m2 = html.match(/href=["'](https?:\/\/[^"']+\.(?:m3u8|mp4)[^"']*)["']/i);
    if (m2) { input = m2[1]; } else { input = input; }
  }`,
}
