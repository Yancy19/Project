(function(){
    //入口
    function init(){
        var shopId=10011,
            apiUrl='http://123.57.153.14:8089';
        getHouseTypeFn();
        getStyleFn(shopId);
    }
    //风格
    function getStyleFn(shopId){
         $.ajax({
            type: "GET",
            url: apiUrl+"/api/web/Quotation/GetStyles?shopId="+shopId,
            dataType: "json",
            success: function(result){
                if(result.success){
                    console.log(result.data);
                    var html=['<option value="">请选择</option>'];
                    result.data.map(item=>{
                        html.push('<option value="'+item+'">'+item+'</option>');
                    })
                    $('#style').append(html);
                }
            },
            error:function(error){
                console.log(error);
            }
        });
    }
    //户型
    function getHouseTypeFn(){
        var houseType=['一室一厅一卫','两室一厅一卫','两室一厅室卫','两室两厅一卫','两室两厅两卫','三室一厅一卫','三室一厅两卫','三室两厅一卫','三室两厅两卫','四室一厅一卫','四室一厅两卫','四室两厅一卫','四室两厅两卫','四室三厅一卫','四室三厅两卫'];
        $('#type').html('');
        var html=[];
        for(var i=0;i<houseType.length;i++){
            html.push('<option value="'+(i+1)+'">'+houseType[i]+'</option>');
        };
        $('#type').append(html.join(""));
    }
    //报价单模板
    function getQuotationTemplateFn(){
        $('#Calculate_quotation_btn').on('click',function(){
                var verify=true;
                var name=$('#name').val();
                var mobile=$('#mobile').val();
                var type=$('#type').val();
                var area=$('#area').val();
                var style=$('#style').val();
                var communityName=$('#communityName').val();
                var budget=$('#budget').val();
                var reg = /^1[34578]\d{9}$/;
                if(!name){
                    verify=false;
                    $('#name').focus();
                    return verify;
                }
                if(!mobile||!reg.test(mobile)){
                    verify=false;
                    $('#mobile').focus();
                    return verify;
                }
                /*if(!type){
                    verify=false;
                    $('#type').focus();
                    return verify;
                }*/
                if(!area){
                    verify=false;
                    $('#area').focus();
                    return verify;
                }
                /* if(!style){
                    verify=false;
                    $('#style').focus();
                    return verify;
                }*/
                if(!communityName){
                    verify=false;
                    $('#communityName').focus();
                    return verify;
                }
                if(!budget){
                    verify=false;
                    $('#budget').focus();
                    return verify;
                }
                if(verify){
                    $.ajax({
                        type: "GET",
                        url: apiUrl+"/api/web/Quotation/GetQuotations",
                        data: "shopId="+shopId+"&style="+style+"&type="+type+"&area="+area+"&price="+budget,
                        dataType: "json",
                        success: function(result){
                            if(result.success){
                                console.log(result.data);
                                if(result.data){
                                    $('.Jia_obtain_btn').css('display','block');
                                    $('.calcul_table:first').html('');
                                    var itemArr=[];
                                    var budgetTotal=0.00;
                                    var quotationTemplateId;
                                    result.data.map(item=>{
                                        budgetTotal+=item.TotalAmount;
                                        if(item.Categorys.length>0){
                                            var trHtml='';
                                            item.Categorys.map(citem=>{
                                                var rowspanLength=citem.QuotationTemplateItem.length;
                                                var tdHtml='';
                                                var index=0;
                                                citem.QuotationTemplateItem.map(qtitem=>{
                                                    quotationTemplateId=citem.QuotationTemplateItem[index].QuotationTempalteId;
                                                    //写死
                                                    var aHref='http://www.upp188.com:80/invitecard?shopid=10011&mshopid=10010&type=member&refid=10014&reftype=1&returnUrl='+baseUrl+'/Quotation?template='+quotationTemplateId;
                                                    if(index==0){
                                                        if(quotationTemplateId){
                                                            // $('.Jia_obtain_btn').attr('href',baseUrl+'/invitecard?shopid=1&mshopid=1&type=member&refid=8&reftype=1&returnUrl='+baseUrl+'/Quotation?template='+quotationTemplateId);
                                                            $('.Jia_obtain_btn').attr('href',aHref);
                                                        }
                                                        tdHtml=['<td rowspan="'+rowspanLength+'">',
                                                                    // '<img src="./上海装修预算计算器,装修预算报价表-齐家装修网_files/table_05.png">',
                                                                    '<p>'+citem.CategoryName+'</p>',
                                                                '</td>'].join('');
                                                    }else{
                                                        tdHtml='';
                                                    };
                                                    var priceSpan='<a class="price" href="'+aHref+'">¥'+citem.QuotationTemplateItem[index].Price+'元</a>';
                                                    if(citem.QuotationTemplateItem[index].Type!=1){
                                                        priceSpan='<a class="price" href="'+aHref+'">到店商议</a>';
                                                    }
                                                    var tr=['<tr>'+tdHtml+'<td class="textalign">'+citem.QuotationTemplateItem[index].ProductName+'</td>',
                                                                '<td>'+citem.QuotationTemplateItem[index].Quantity+'</td>',
                                                                '<td>'+priceSpan+'</td>',
                                                            '</tr>'].join('');
                                                            index++;
                                                    trHtml+=tr;
                                                })
                                            });
                                        };
                                        var itemHtml=['<div class="calcul_item">',
                                                    '<h3><span class="green">'+item.RoomName+'</span><span class="yellow">预算：<em>'+item.TotalAmount+'</em>元</span>',
                                                        '<a href="javascript:;" class="" tjjj="zhuwo_zk"></a></h3>',
                                                    '<div class="tab_slide" style="display: none;">',
                                                        '<table>',
                                                            '<colgroup>',
                                                                '<col width="175">',
                                                                '<col width="500">',
                                                                '<col width="200">',
                                                                '<col width="300">',
                                                            '</colgroup>',
                                                            '<thead>',
                                                                '<tr>',
                                                                    '<th>分类</th>',
                                                                    '<th>名称</th>',
                                                                    '<th>数量</th>',
                                                                    '<th>单价</th>',
                                                                '</tr>',
                                                            '</thead>',
                                                            '<tbody>'+trHtml+'</tbody>',
                                                        '</table>',
                                                    '</div>',
                                                '</div>'].join('');
                                                itemArr.push(itemHtml);
                                    });
                                    //显示报价单总价
                                    $('.succ_price').text(budgetTotal);
                                    $('.calcul_table:first').append(itemArr.join(''));
                                    //绑定收拉事件
                                    $('.calcul_item > h3 > a').each(function(index,dom){
                                        //dom=this
                                        $(dom).on('click',function(event){
                                            if(this.className){
                                                $(this).removeClass('add');
                                                $(this).parent().next().css('display','none');
                                            }else{
                                                $(this).addClass('add');
                                                $(this).parent().next().css('display','block');
                                            }
                                        })
                                    })
                                }else{
                                    $('.succ_price').text('？');
                                    $('.Jia_obtain_btn').css('display','none');
                                    $('.calcul_table:first').html('<h3 style="text-align: center;color: red;">没有找到符合条件的报价单！</h3>');
                                }
                            }
                        },
                        error:function(error){
                            console.log(error);
                        }
                    });
                };
            });
    }
})($)