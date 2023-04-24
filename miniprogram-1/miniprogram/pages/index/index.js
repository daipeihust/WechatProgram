// components/cloudTipModal/index.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    login: function () {
      wx.login({
        success: (res) => {
          if (res.code) {
            console.log(res);
            const info = wx.getAccountInfoSync()
            console.log(info)

          } else {
            console.log('登录失败！' + res.errMsg)
          }
        },
      })
    },
    focus: function () {

    },
    getCameraSetting: function () {
      const _this = this
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.camera']) {
            // 用户已经授权
            _this.setData({
              // isAuth: true,
              isNeedSettingButton: false
            })
          } else {
            // 用户还没有授权，向用户发起授权请求
            wx.authorize({
              scope: 'scope.camera',
              success() { // 用户同意授权
                _this.setData({
                  // isAuth: true,
                  isNeedSettingButton: false
                })
              },
              fail() { // 用户不同意授权
                _this.setData({
                  isNeedSettingButton: true
                })
                wx.showToast({
                  title: '授权失败',
                  icon: 'none',
                  duration: 3000
                })
              }
            })
          }
        },
        fail: res => {
          console.log('获取用户授权信息失败')
          wx.showToast({
            title: '获取用户授权信息失败',
            icon: 'none',
            duration: 3000
          })
          _this.setData({
            isNeedSettingButton: true
          })
        }
      })
    },
    takePhoto: function () {
      wx.chooseMessageFile({
        count: 1,
        type: image,
        success(res) {
          const tempFilePaths = res.tempFiles
          wx.previewImage({
            urls: [tempFilePaths],
            showmenu: true
          })
        }
      })
    }
  }
})