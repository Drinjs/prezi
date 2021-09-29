// 基于el-select 上滚下滚的自定义指令
const fn = function (el, binding) {
  const n = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
  n.onmousewheel = function (e) {
    e = e || window.event
    if (e.wheelDelta) {
      if (e.wheelDelta >= 0) {
        const c = (n.scrollTop === 0)
        c && binding.value('up')
      }
      if (e.wheelDelta < 0) {
        const c = (n.scrollHeight > n.clientHeight) && (n.scrollTop + n.clientHeight) >= n.scrollHeight
        c && binding.value('down')
      }
    }
  }
}

export default {
  inserted (el, binding) {
    fn(el, binding)
  }
}
