// pages/goods_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   arr:[{
     checked:false,
     image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg006.hc360.cn%2Fm7%2FM02%2FA0%2F9E%2FwKhQo1WvYhCEYLLsAAAAALzDr6A283.jpg&refer=http%3A%2F%2Fimg006.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625732320&t=d6d3bd4138e9f16a1e42adf012fc9836",
     title:"美的6056升对开电冰箱智能家电双开门",
     titlebottom:"一级能效，节能省电家电大容量",
     Price:3396.89,
     volume:"7808",
   }]
  },  
  addcart(){
    wx.setStorageSync("cart",this.data.arr)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})