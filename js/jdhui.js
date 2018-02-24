$(document).ready(function () {
  var swiper1 = new Swiper ('#swiper1', {
      direction: 'horizontal',
      loop: true,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    });
    
    var swiper2 = new Swiper('#swiper2', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: 5000,
      loopedSlides: 7,
      freeMode: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var url = "http://www.jdhui.com/api/common/ad/ad-list";
    var data = {
      aid: 496
    }

    $.ajax({
      type: "POST",
      url: url,
      data: data,
      dataType: "json",
      timeout: 10000,
        xhrFields: {
            withCredentials: true
        },
      success:function(res){
        console.log(res)
      },
      error: function(err) {
        console.log(err)
        }
    });
  

  
  });
  var si=$(".site-dropdown");
  $(si).mouseenter(function(){
    $(this).children().show();
  });
  $(si).mouseleave(function(){
    $(this).children().hide();
  });
  
  var lj=$("#fr-3");
  $(lj).mouseenter(function(){
    $(".fr-select").show();
    console.log('11111');
  });

  $(lj).mouseleave(function(){
    $(".fr-select").hide();
  });
  // $(".floor-main-list-item").mouseenter(function(){
   
  //      $(this).animate({width:"398px"},1000).children().show();//要处理的语句

  // });
  // $(".floor-main-list-item").mouseleave(function(){

  //   $(this).animate({width:"198px"},1000).children().not(".list-item-left").hide();
  // });
  

  //   var trigger = null;
  //   $('.floor-main-list-item').hover(function(){
  //           trigger = setTimeout(function(){
  //             $(this).animate({width:"398px"},1000).children().show();
  //           },1000);  //这里1000就是间隔1秒
  //  },
  //  function(){
  //           clearTimeout(trigger);   //清除将要在1秒后执行的弹出框动作
  // });

  var io=$(".titel")
  $(io).mouseenter(function(){
    $(this).children().show();
  })
  $(io).mouseleave(function(){
    $(this).children(".bg").hide();
  })



  var timer;  //手风琴 
  $(".floor-main-list-item").on("mouseenter",function(){
    console.log('11111');
    var that = this;
    console.log(this);
    timer = setTimeout(function() {//定时器
      console.log('2222');
      console.log(that);
 
      $(that).parent().siblings().find('.floor-main-list-item').animate({width:"198px"},1000);
      $(that).animate({width:"398px"},1000).children().show();//parent()父元素.siblings()兄弟.children 子元素 animate 动作
      $(that).find('.img-fore1').css({backgroundColor: "#c7000b"});
      $(that).find("h5").animate({opacity: "1"});
      console.log($(that).parent())
      
      $(that).parent().siblings().find('.list-item-right').hide();
      $(that).parent().siblings().find('.list-item-image').hide();
      $(that).parent().siblings().find("h5").animate({opacity: "0"});
      $(that).parent().siblings().find('.img-fore1').css({backgroundColor: "#aaa"});
     
    },500);
  }).on("mouseleave",function(){
      clearTimeout(timer);
  })

/**
 * ajax请求 POST方法
 *
 * @param {String} url 请求地址
 * @param {Object} data 数据
 * @param {Function} successFun 成功函数
 * @param {Function} errorFun 失败函数
 * @author GM
 * @version 1.0.0
 */
function ajaxPost(url, data, successFun, errorFun) {
	$.ajax({
		type: "POST",
		url: url,
		data: data,
		dataType: "json",
		timeout: 10000,
	    xhrFields: {
        	withCredentials: true
    	},
		success:function(data){
			if (successFun) successFun.call(this, data);
		},
		error: function(err) {
        	if (errorFun) errorFun.call(this, err);
    	}
	});
}