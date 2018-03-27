export const JSONP_URL = {
  // 推荐轮播
  recommend: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  // 最新专辑
  latestAlbum: "https://u.y.qq.com/cgi-bin/musicu.fcg",
}

export const JSONP_PARAMS = {
  g_tk: 1658125788,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const JSONP_OPTIONS = {
  param: 'jsonpCallback',
  prefix: 'callback'
}