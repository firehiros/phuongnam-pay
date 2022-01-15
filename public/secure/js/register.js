/**
 * サブミットを行う（保存）
 */

 var real_password;
 var real_repassword;

$(function() {
	$('#btnInput').click(function() {
		$('#type').val('input');
		submitForm();
	});

	$('#btnConfirm').click(function() {
		$('#type').val('confirm');
		submitForm();
	});

	$('#btnComplete').click(function() {
		$('#type').val('complete');
		submitForm();
	});

	$('#btnBack').click(function() {
		$('#type').val('backinput');
		submitForm();
	});

    // 监听真实密码
    if($("#real_password").val() != ''){
        real_password = $("#real_password").val();
    }

    if($("#real_repassword").val() !=''){
        real_repassword = $("#real_repassword").val();
    }

    $('#real_password').on('input',function(){
        real_password = $(this).val();
    })

    $("#real_repassword").on('input',function(){
        real_repassword = $(this).val();
    })
    //根据国家加载国家code
    getCountryCode();

    getMonth();
    getDays();

});

function registerpsw(){
    var psw = $("#real_password").val();
    var regx =/^(?!([a-zA-Z]+|\d+|[-!@#$%^&*~?=.()+,/\\;:''""]+)$)[a-zA-Z\d-!@#$%^&*~?=.()+,/\\;:''""]{8,35}$/;
    if(psw.match(regx) == null){
        $("#validatepsw").addClass("alert");
        $("#validatepsw").css("display",'block');
        $("#btnConfirm").attr("disabled",true);
        
        //$("#validatepsw").html("Password should consist of characters and numbers.Password's length equal to 8～35 characters");
        return false;
    }else{
        //$("#validatepsw").html("");
        $("#validatepsw").removeClass("alert");
        $("#validatepsw").css("display",'none');
        $("#btnConfirm").attr("disabled",false);
    }
}


function forgetpsw(){
    var psw = $("#password").val();
   var regx =/^(?!([a-zA-Z]+|\d+|[-!@#$%^&*~?=.()+,/\\;:''""]+)$)[a-zA-Z\d-!@#$%^&*~?=.()+,/\\;:''""]{8,35}$/;
    if(psw.match(regx) == null){
        $("#validatepsw").addClass("alert");
        $("#validatepsw").css("display",'block');
         $("#btnComplete").attr("disabled",true);
        
        //$("#validatepsw").html("Password should consist of characters and numbers.Password's length equal to 8～35 characters");
        return false;
    }else{
        //$("#validatepsw").html("");
        $("#validatepsw").removeClass("alert");
        $("#validatepsw").css("display",'none');
        $("#btnComplete").attr("disabled",false);
    }
}

function userRegister(){
    var password = real_password;
    var repassword = real_repassword;
   if(password != ""){
        var sha_psw1 = hex_md5(password);
        var sha_psw2 = hex_md5(repassword);
        $("#password").val(sha_psw1);
        $("#repassword").val(sha_psw2);
   }  
    
   //真实密码不提交到后台
   $("#real_password").attr('disabled','true');
   $("#real_repassword").attr('disabled','true');
   
    
}

//更新个人信息,国家和省份联动
function changeState() {
    var country_code = $("#country").val();
    var stateList = null;
    var CountryCode = null;
    postAction('../api/getStateByCountryCode',{'country_code':country_code})
        .done(function(data) {
           // stateList = JSON.stringify( data.stateList );
            stateList = data.stateList;
            CountryCode = data.CountryCode;
            $('#state').html('');
            $('#state').append(stateList);
            $('#country_no').val();
            $('#country_no').val(CountryCode);
        })
        .fail(function(data){
            console.log(data);
    })

}

//根据国家加载国家code
function getCountryCode() {
    var country_code = $("#country").val();
    postAction('../api/getStateByCountryCode',{'country_code':country_code})
        .done(function(data) {
            $('#country_no').val(data.CountryCode);
        })
        .fail(function(data){
            console.log(data);
    })

}
