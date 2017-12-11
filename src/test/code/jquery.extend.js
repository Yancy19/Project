/**
 * @作者 {Yancy} 
 * @时间 {2017年5月10日} 
 * @描述 {jQuery插件Demo} 
 */

(function($){
    //插件默认属性值
    var defaults={
        url:"",
        params:null,
        

    };
    //插件开始方法
    var init=function(obj){

    }
    //插件扩展方法名称
    $.fn.gridView=function(option){
        //合并用户自定义属性，默认属性
        var options=$.extend(defaults,option);
        //支持JQuery选择器
        //支持链式调用
        return this.each(function(){
            //插件私有方法
            init(this);
        });

    }
})(jQuery);