// 微信ios系统上键盘收起后布局不重置的bug

window.addEventListener('focusout', function () {
  setTimeout(() => {
    window.scrollTo(0, document.documentElement.scrollTop || document.body.scrollTop)
  })
})
