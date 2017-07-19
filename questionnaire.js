/**
 * Created by wangjie on 2017/7/17.
 */
(function () {
    //mvvm方法
    /*    var fstPageDatas = [
     {
     "name": " 姓名 ",
     "sex": "性别性别性别性别性别",
     "age": "年龄",
     "telephone": "联系方式",
     "duty": "职业",
     "companyname": "公司名称",
     "companyarea": "经营范围",
     "companylocation": "所在地",
     "question1": "是否有意向通过互联网渠道宣传公司及公司产品"
     },
     {
     "name": " 姓名 ",
     "sex": "性别",
     "age": "年龄",
     "telephone": "联系方式",
     "companyname": "公司名称",
     "companylocation": "所在地",
     "question1": "公司产品是什么?",
     "question2": "是否有网络推广的需求?",
     "question3": "目前最希望通过本平台解决哪一方面的问题?"
     },
     {
     "name": " 姓名 ",
     "sex": "性别",
     "age": "年龄",
     "telephone": "联系方式",
     "education": "文化程度",
     "question1": "参加工作时间？职称是什么?",
     "question2": "你在企业从事的工作是?",
     "question3": "你认为目前最希望通过本平台解决哪一方面的问?"
     },
     {
     "name": " 姓名 ",
     "sex": "性别",
     "age": "年龄",
     "telephone": "联系方式",
     "education": "文化程度",
     "question1": "你会经常利用网络工具和同行交流专业知识吗",
     "question2": "您认为您的知识可以获得哪类收入?",
     "question3": "您是否愿意将自己的知识和经验分享给更多的人?"
     },
     {
     "name": " 姓名 ",
     "sex": "性别",
     "age": "年龄",
     "telephone": "联系方式",
     "duty": "所学专业",
     "companyname": "所在学校",
     "question1": "毕业后是否就职于所学专业?",
     "question2": "是否考虑过通过在互联网上分享自己所学知识赚取收入?"
     },
     {
     "name": " 姓名 ",
     "sex": "性别",
     "age": "年龄",
     "telephone": "联系方式",
     "question1": "是哪家媒体平台?",
     "question2": "平台主要吸引哪类人群?",
     "question3": "是否有意向与本平台进行推广合作?"
     },
     {
     "name": " 姓名 ",
     "sex": "性别",
     "age": "年龄",
     "telephone": "联系方式",
     "question1": "具体从事什么行业,什么职位?",
     "question2": "是否有品牌，产品宣传的需求?",
     "question3": "是否愿意将自己的知识和经验分享给更多的人?"
     },
     {
     "name": " 姓名 ",
     "sex": "性别",
     "age": "年龄",
     "telephone": "联系方式",
     "companyname": "公司名称",
     "companylocation": "所在地",
     "question1": "具体是哪类投资?",
     "question2": "具体想投资什么项目?"
     },
     {
     "name": " 姓名 ",
     "sex": "性别",
     "age": "年龄",
     "telephone": "联系方式",
     "question1": "具体从事什么行业?",
     "question2": "具体工作是什么?"
     }
     ];*/
    //九类不同个人信息页面  "厂商"
    $('#company').one("click", function () {
        $(".company").show();
        $(".sales").hide();
        $(".technique").hide();
        $(".manager").hide();
        $(".student").hide();
        $(".mediaweb").hide();
        $(".web").hide();
        $(".leader").hide();
        $(".others").hide();

        var temp = '<div class="swiper-slide questions company">' +
           // '<p>厂商</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputName">姓名' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputName" placeholder="Jane Doe">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">性别' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="女">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputage">年龄' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputage" placeholder="26">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputduty">职业' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputduty" placeholder="码代码">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputtelephone">联系方式</label>' +
            '<input type="text" class="form-control" id="exampleInputtelephone" placeholder="123******890">' +
            '</div>' +
            '</form>' +
            '</div>';

        var temp2='<div class="swiper-slide questions company">' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyName">公司名称</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyName" placeholder="是">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyArea">经营范围</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyArea" placeholder="是">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyLocation">所在地</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyLocation" placeholder="是">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">是否有意向通过互联网渠道宣传公司及公司产品</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="是">' +
            '</div>' +
            '</form>' +
            '</div>';

        $(".this").before(temp);
        $(".company").after(temp2);
    });

    //销售人员
    $('#sales').one("click", function () {
        $(".company").hide();
        $(".sales").show();
        $(".technique").hide();
        $(".manager").hide();
        $(".student").hide();
        $(".mediaweb").hide();
        $(".web").hide();
        $(".leader").hide();
        $(".others").hide();

        var temp = '<div class="swiper-slide questions sales">' +
           // '<p>销售人员</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputName">姓名' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputName" placeholder="Jane Doe">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">性别' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="女">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputage">年龄' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputage" placeholder="26">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputtelephone">联系方式</label>' +
            '<input type="text" class="form-control" id="exampleInputtelephone" placeholder="123******890">' +
            '</div>' +
            '</form>' +
            '</div>';
        var temp2='<div class="swiper-slide questions sales">' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyName">公司名称</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyName" placeholder="是">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyLocation">所在地</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyLocation" placeholder="是">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">公司产品是什么,是否有网络推广的需求?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="是">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">目前最希望通过本平台解决哪一方面的问题</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="是">' +
            '</div>' +
            '</form>' +
            '</div>';

        $(".this").before(temp);
        $(".sales").after(temp2)
    });

    //技术人员
    $('#technique').one("click", function () {
        $(".company").hide();
        $(".sales").hide();
        $(".technique").show();
        $(".manager").hide();
        $(".student").hide();
        $(".mediaweb").hide();
        $(".web").hide();
        $(".leader").hide();
        $(".others").hide();
        var temp = '<div class="swiper-slide questions technique">' +
           // '<p>技术人员</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputName">姓名' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputName" placeholder="Jane Doe">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">性别' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="女">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputtelephone">联系方式</label>' +
            '<input type="text" class="form-control" id="exampleInputtelephone" placeholder="123******890">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyName">文化程度</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyName" placeholder="本科/硕士等">' +
            '</div>' +
            '</form>' +
            '</div>';

        var temp2 = '<div class="swiper-slide questions technique">' +
           // '<p>技术人员</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyTime">参加工作时间？职称是什么？</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyLocation" placeholder="2017.01.01">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">你在企业从事的工作是？</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">你认为目前最希望通过本平台解决哪一方面的问题</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="">' +
            '</div>' +
            '</form>' +
            '</div>';

        $(".this").before(temp);
        $(".technique").after(temp2);
    });

    //专家学者
    $('#manager').one("click", function () {
        $(".company").hide();
        $(".sales").hide();
        $(".technique").hide();
        $(".manager").show();
        $(".student").hide();
        $(".mediaweb").hide();
        $(".web").hide();
        $(".leader").hide();
        $(".others").hide();
        var temp = '<div class="swiper-slide questions manager">' +
          //  '<p>专家学者</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputName">姓名' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputName" placeholder="Jane Doe">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">性别' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="女">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputtelephone">联系方式</label>' +
            '<input type="text" class="form-control" id="exampleInputtelephone" placeholder="123******890">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyName">文化程度</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyName" placeholder="本科/硕士等">' +
            '</div>' +
            '</form>' +
            '</div>';
        var temp2 = '<div class="swiper-slide questions manager">' +
           // '<p>专家学者</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyTime">你会经常利用网络工具和同行交流专业知识吗?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyLocation" placeholder="2017.01.01">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">您认为您的知识可以获得哪类收入?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">您是否愿意将自己的知识和经验分享给更多的人?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="">' +
            '</div>' +
            '</form>' +
            '</div>';


        $(".this").before(temp);
        $(".manager").after(temp2)
    });

    //在校学生
    $('#student').one("click", function () {
        $(".company").hide();
        $(".sales").hide();
        $(".technique").hide();
        $(".manager").hide();
        $(".student").show();
        $(".mediaweb").hide();
        $(".web").hide();
        $(".leader").hide();
        $(".others").hide();
        var temp = '<div class="swiper-slide questions student">' +
          //  '<p>在校学生</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputName">姓名' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputName" placeholder="Jane Doe">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">性别' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="女">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputage">年龄' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputage" placeholder="26">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputtelephone">联系方式</label>' +
            '<input type="text" class="form-control" id="exampleInputtelephone" placeholder="123******890">' +
            '</div>' +
            '</form>' +
            '</div>';

        var temp2 = '<div class="swiper-slide questions student">' +
           // '<p>在校学生</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyName">所在学校</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyName" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyTime">所学专业?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyLocation" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">毕业后是否就职于所学专业?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">是否考虑过通过在互联网上分享自己所学知识赚取收入?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="">' +
            '</div>' +
            '</form>' +
            '</div>';

        $(".this").before(temp);
        $(".student").after(temp2)
    });

    //媒体网站
    $('#mediaweb').one("click", function () {
        $(".company").hide();
        $(".sales").hide();
        $(".technique").hide();
        $(".manager").hide();
        $(".student").hide();
        $(".mediaweb").show();
        $(".web").hide();
        $(".leader").hide();
        $(".others").hide();
        var temp = '<div class="swiper-slide questions mediaweb">' +
           // '<p>媒体网站</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputName">姓名' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputName" placeholder="Jane Doe">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">性别' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="女">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputtelephone">联系方式</label>' +
            '<input type="text" class="form-control" id="exampleInputtelephone" placeholder="123******890">' +
            '</div>' +
            '</form>' +
            '</div>';
        var temp2 = '<div class="swiper-slide questions mediaweb">' +
           // '<p>媒体网站</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyName">是哪家媒体平台?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyName" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyName">平台主要吸引哪类人群?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyName" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyTime">是否有意向与本平台进行推广合作?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyLocation" placeholder="">' +
            '</div>' +
            '</form>' +
            '</div>';

        $(".this").before(temp);
        $(".mediaweb").after(temp2);
    });

    //互联网人士
    $('#web').one("click", function () {
        $(".company").hide();
        $(".sales").hide();
        $(".technique").hide();
        $(".manager").hide();
        $(".student").hide();
        $(".mediaweb").hide();
        $(".web").show();
        $(".leader").hide();
        $(".others").hide();
        var temp = '<div class="swiper-slide questions web">' +
           // '<p>互联网人士</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputName">姓名' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputName" placeholder="Jane Doe">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">性别' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="女">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputtelephone">联系方式</label>' +
            '<input type="text" class="form-control" id="exampleInputtelephone" placeholder="123******890">' +
            '</div>' +
            '</form>' +
            '</div>';

        var temp2 = '<div class="swiper-slide questions web">' +
           // '<p>互联网人士</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyName">具体从事什么行业，什么职位?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyName" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyTime">是否有品牌，产品宣传的需求?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyLocation" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">是否愿意将自己的知识和经验分享给更多的人?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="">' +
            '</div>' +
            '</form>' +
            '</div>';

        $(".this").before(temp);
        $(".web").after(temp2)
    });

    //投资者
    $('#leader').one("click", function () {
        $(".company").hide();
        $(".sales").hide();
        $(".technique").hide();
        $(".manager").hide();
        $(".student").hide();
        $(".mediaweb").hide();
        $(".web").hide();
        $(".leader").show();
        $(".others").hide();
        var temp = '<div class="swiper-slide questions leader">' +
           // '<p>投资者</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputName">姓名' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputName" placeholder="Jane Doe">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">性别' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="女">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">年龄' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputtelephone">文化程度</label>' +
            '<input type="text" class="form-control" id="exampleInputtelephone" placeholder="">' +
            '</div>' +
            '</form>' +
            '</div>';

        var temp2 = '<div class="swiper-slide questions leader">' +
           // '<p>投资者</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputtelephone">单位名称</label>' +
            '<input type="text" class="form-control" id="exampleInputtelephone" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyName">所在地</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyName" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyTime">具体是哪类投资？</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyLocation" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">具体想投资什么项目?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="">' +
            '</div>' +
            '</form>' +
            '</div>';

        $(".this").before(temp);
        $(".leader").after(temp2)
    });

    //其他
    $('#others').one("click", function () {
        $(".company").hide();
        $(".sales").hide();
        $(".technique").hide();
        $(".manager").hide();
        $(".student").hide();
        $(".mediaweb").hide();
        $(".web").hide();
        $(".leader").hide();
        $(".others").show();
        var temp = '<div class="swiper-slide questions others">' +
            //'<p>其他</p>' +
            '<form>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputName">姓名' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputName" placeholder="Jane Doe">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">性别' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="女">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputsex">年龄' +
            '</label>' +
            '<input type="text" class="form-control" id="exampleInputsex" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputtelephone">联系方式</label>' +
            '<input type="text" class="form-control" id="exampleInputtelephone" placeholder="123******890">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyTime">具体从事什么行业？</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyLocation" placeholder="">' +
            '</div>' +
            '<div class="form-group layout-mb0">' +
            '<label for="exampleInputCompanyProduct">具体工作是什么?</label>' +
            '<input type="text" class="form-control" id="exampleInputCompanyProduct" placeholder="">' +
            '</div>' +
            '</form>' +
            '</div>';

        $(".this").before(temp)
    });

    //收集所选数据
    $("#submitdata").click(function () {
        //获取单个选择题的答案
        var data1 = $("input[name='optionsRadios']:checked").val();

        var radiosData=[];
        var radio=$(".questions").find(':radio');
        for (var j=0;j<radio.length;j++){
            radiosData.push(radio.eq(j).val);
        }

        //获取textarea值
        var textarea= $(".theneed").val();



        //获取所有input值
        var numArr = []; // 定义一个空数组
        var txt = $('.questions').find(':text'); // 获取所有文本框
        for (var i = 0; i < txt.length; i++) {
            numArr.push(txt.eq(i).val()); // 将文本框的值添加到数组中
            console.log(numArr)
        }

    });
})();