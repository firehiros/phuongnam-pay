///**
// * サブミットを開始する(Form用)
// */
function submitForm() {

    //防止重复提交，确认页面提交按钮提交一次后失效           
    console.log(88888);
    $("#btnComplete").attr("disabled", true); 
    $("#btn_2fa_google").attr("disabled", true); 
    $("#btnBankComplete").attr("disabled", true); 
    $("#btnCardSend").attr("disabled", true); 
    $("#btnKyc").attr("disabled", true); 
    $("#btnCardComplete").attr("disabled", true); 

	$('#acForm').submit();
}

///**
//* GETパラメータを取得する
//*/
function getParam(key) {
    var url		= location.href;
    parameters	= url.split("?");

    // パラメータがなければ空を返す
    if(parameters[1] == undefined) {
    	return '';
    }

    params		= parameters[1].split("&");

    var paramsArray = [];
    for (i = 0; i < params.length; i++) {
        neet = params[i].split("=");
        paramsArray.push(neet[0]);
        paramsArray[neet[0]] = neet[1];
    }

    var categoryKey = paramsArray[key];
    return categoryKey;
}

function postAction(target, params) {

	// 変数宣言部
	var cnt		= 0;
	var result	= null;

	return $.ajax({
		url:		target
		, type:		'post'
		, dataType:	'json'
		, data:		params
	});
}

/**
 * ログインを行う
 */
function create2fa(catalog, func_name, lang, title) {
    var params = {};
    var inputs = $('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "text" || inputs[i].type == "password" || inputs[i].type == "hidden") {
            params[inputs[i].name] = inputs[i].value;
        } else if (inputs[i].type == "radio" && inputs[i].checked) {
            params[inputs[i].name] = inputs[i].value;
        }
    }
    params.catalog=catalog;
    params.func_name=func_name;
    params.lang=lang;
    params.title=title;
    
    $.post("../api/create_2fa", params, function(data) {
 
        if (data != -1) {
            $('#secondAuth').html(data);
            $("#myModalLabel").attr("data-locale",catalog+'_title');
            $('#secondAuth').modal('show');
            $('#two_fa_flg').val('1');
        } else {

            if(catalog == 'transfer'){
                sessionStorage.removeItem("transfer_session");
                localStorage.removeItem("transfer_local");
            } else if(catalog == 'withdraw'){
                sessionStorage.removeItem("fait_withdraw_session");
                localStorage.removeItem("fait_withdraw_local");
            } else if(catalog == 'crypto_payout'){
                sessionStorage.removeItem("crypto_payout_session");
                localStorage.removeItem("crypto_payout_local");
            } else if(catalog == 'card'){
                sessionStorage.removeItem("card_load_session");
                localStorage.removeItem("card_load__local");

            }
            $('#two_fa_flg').val('-1');
            eval(func_name + "()");
        }
    }, "html");
}

/**
 * ログインを行う
 */
function validate2fa(uid, func_name) {

    $('#span_code').hide();
    $('#error_msgs_auth').html('');
    var code = $('#authorize_code').val();
    if (code == null || code == undefined || code == '') {
       $('#span_code').show();
       $('#span_error_code').hide();
       return;
    }
    $.post("../api/validate_2fa", {
        user_id:$('#user_id').val()
        , type:"verify_code"
        , lang:$('#language').val()
        , code:$('#authorize_code').val()
    }, function(data) {
        if (data == 'OK') {

            $("#btn_2fa_google_modal").attr("disabled", true); //反正重复提交
            //delete session/local
            if(sessionStorage.getItem("transfer_session") && localStorage.getItem('transfer_local')){
                sessionStorage.removeItem("transfer_session");
                localStorage.removeItem("transfer_local");
            } else if(sessionStorage.getItem("card_load_session") && localStorage.getItem("card_load__local")){
                sessionStorage.removeItem("card_load_session");
                localStorage.removeItem("card_load__local");
            } else if(sessionStorage.getItem("crypto_payout_session") && localStorage.getItem("crypto_payout_local")){
                sessionStorage.removeItem("crypto_payout_session");
                localStorage.removeItem("crypto_payout_local");
            } else if(sessionStorage.getItem("fait_withdraw_session") && localStorage.getItem("fait_withdraw_local")){
                sessionStorage.removeItem("fait_withdraw_session");
                localStorage.removeItem("fait_withdraw_local");
            }

            $('#span_code').hide();
            $('#span_error_code').hide();
            eval(func_name + "()");
        } else {
            // $('#span_error_code').html('Invalid Code');
            $('#span_code').hide();
            $('#span_error_code').show();
        }
    }, "html");
}

/**
 * ログインを行う
 */
function create2faFirst(catalog, func_name, lang, title) {
    var params = {};
    var inputs = $('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "text" || inputs[i].type == "password" || inputs[i].type == "hidden") {
            params[inputs[i].name] = inputs[i].value;
        } else if (inputs[i].type == "radio" && inputs[i].checked) {
            params[inputs[i].name] = inputs[i].value;
        }
    }
    params.catalog=catalog;
    params.func_name=func_name;
    params.lang=lang;
    params.title=title;

    $.post("../api/create_2fa_first", params, function(data) {
        if (data != -1) {
            $('#secondAuth').html(data);
            $('#secondAuth').modal('show');
        } else {
            eval(func_name + "()");
        }
    }, "html");
}

/**
 * ログインを行う
 */
function validate2faFirst(func_name) {
    //eval(func_name + "()");
    $('#span_code').hide();
    $('#error_msgs_auth').html('');
    var code = $('#authorize_code').val();
    if (code == null || code == undefined || code == '') {
       $('#span_code').show();
       return;
    }
    $.post("../api/validate_2fa_first", {
        user_id:$('#user_id').val()
        , type:"verify_code"
        , lang:$('#language').val()
        , code:$('#authorize_code').val()
        , secret:$('#secret').val()
    }, function(data) {
        if (data == 'OK') {
            eval(func_name + "()");
        } else {
            $('#span_error_code').show();
        }
    }, "html");
}

function validate2faNew(username) {
    $('#span_code').hide();
    $('#span_error_code').hide();
    var code = $('#authorize_code').val();
    if (code == null || code == undefined || code == '') {
       $('#span_code').show();
       $('#span_error_code').hide();
       return;
    }
    $.post("../api/validate_2fa_new", {
        user_id:username
        , type:"verify_code"
        , lang:'en'
        , code:code
    }, function(data) {
        if (data == 'OK') {
            $('#span_code').hide();
            $('#span_error_code').hide();
            eval('submitForm()');
        } else {
            $('#span_code').hide();
            $('#span_error_code').show();
        }
    }, "html");
}

//生日日期选择
function getMonth(){
    var year            = $("#birth_year").val();
    var selected_month  = $("#select_month").val();
    var selected_year   = parseInt($("#select_year").val());
    console.log(selected_year)

    selected_month      = parseInt(selected_month);
    if(year != ''){
            var theYear = parseInt(year);
            document.getElementById("birth_month").options.length = 1;
            document.getElementById("birth_day").options.length = 1;
            for (var i = 1; i < 13; i++) {
                if(i == selected_month && year == selected_year){
                    selected = true;
                } else {
                    selected = false;
                }

                document.getElementById("birth_month").options[i] = new Option(i,i,'',selected);
            }

        
        
    } else {
         document.getElementById("birth_month").options.length = 1;
         document.getElementById("birth_day").options.length = 1;
    }
}

function getDays(){
    var selectYear   = $("#birth_year").val();
    var monthStr     = $("#birth_month").val();
    var selected_day = $("#select_day").val();
    var selected_month  = parseInt($("#select_month").val());


    selected_day     = parseInt(selected_day);
    selectYear       = parseInt(selectYear);
    var monthDays = new Array();
    if(isLeapYear(selectYear)){
        monthDays = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    } else {
        monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    }

    if (monthStr != "") {
        var theMonth = parseInt(monthStr);
        document.getElementById("birth_day").options.length = 1;
        for (var i = 1; i <= monthDays[theMonth-1]; i++) {
            if(i == selected_day && monthStr == selected_month){
                selected = true;
            } else {
                selected = false;
            }

            if(i < 10){
                day_i = '0'+i;
            } else {
                day_i = i;
            }
            document.getElementById("birth_day").options[i] = new Option(day_i,day_i,'',selected);
        }
    } else {
        document.getElementById("birth_day").options.length = 1;
    }

}

// 判断是否为闰年
function isLeapYear(year) {
    var cond1 = year % 4 == 0;  //条件1：年份必须要能被4整除
    var cond2 = year % 100 != 0;  //条件2：年份不能是整百数
    var cond3 = year % 400 ==0;  //条件3：年份是400的倍数
    //当条件1和条件2同时成立时，就肯定是闰年，所以条件1和条件2之间为“与”的关系。
    //如果条件1和条件2不能同时成立，但如果条件3能成立，则仍然是闰年。所以条件3与前2项为“或”的关系。
    //所以得出判断闰年的表达式：
    var cond = cond1 && cond2 || cond3;
    if(cond) {
        return true;
    } else {
        return false;
    }
}


$(function(){
var menu = $('#navbar'),
    menuBtn = $('#button'),
    body = $(document.body),
    menuWidth = menu.outerWidth();

    menuBtn.on('click', function(){
    body.toggleClass('open');
        if(body.hasClass('open')){
            body.animate({'left' : menuWidth }, 300);
            menu.animate({'left' : 0 }, 300);
        } else {
            menu.animate({'left' : -menuWidth }, 300);
            body.animate({'left' : 0 }, 300);
        }
    });


    $("#back2fa").click(function(){

        $("#secondAuth").hide();
        $("#article").show();

    });
});



$(function() {

    var top_nav_wrapper = $('.navbar-top-links > .item-list');

    top_nav_wrapper.hover(function(){
        $(this).find('ul.dropdown-menu').addClass('show');
    }, function(){
        $(this).find('ul.dropdown-menu').removeClass('show');
    }); 


    var main_nav = $('.nav-items-link > .link_list');

    main_nav.hover(function(){
        $(this).find('ul.dropdown-menu').addClass('show');
    }, function(){
        $(this).find('ul.dropdown-menu').removeClass('show');
    }); 

    
    $('.toggle-menu').click(function(){
        $('aside ul').toggle();
    });
});
