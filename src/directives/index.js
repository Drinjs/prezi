import Vue from 'vue'
const files = require.context('./src/', true, /\.js$/)
const reg = /(.*\/)*([^.]+).*/ig
files.keys().forEach(key => {
  const _default = files(key).default
  const name = key.replace(reg, '$2')
  Vue.directive(name, _default)
})
