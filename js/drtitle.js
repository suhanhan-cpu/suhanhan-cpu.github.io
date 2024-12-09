var OriginTitle = document.title;
var isCustomTitle = false; // 标记是否使用自定义标题

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '╭(°A°`)╮ 快点回来！！！';
        isCustomTitle = true; // 设置为自定义标题状态
    } else {
        document.title = '(ฅ>ω<*ฅ) 有什么好看的？？？';
        setTimeout(function () {
            if (!document.hidden && isCustomTitle) {
                document.title = '(ฅ>ω<*ฅ) 别看了！！！';
                isCustomTitle = true; // 保持为自定义标题状态
            }
        }, 2000);
    }
});