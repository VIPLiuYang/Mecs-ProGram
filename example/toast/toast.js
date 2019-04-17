Page({
    openToast: function () {
        wx.showToast({
            title: '已完成',
            icon: 'success',
            duration: 3000
        });
    },
    openLoading: function () {
        wx.showToast({
            title: '正在登录...',
            icon: 'loading',
            duration: 3000
        });
    }
});