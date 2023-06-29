//实现小数点，回退键
//鼠标放在按钮上面有颜色变化
//实现点击m打开连接的功能
function init(){
	//获取文本框本身
	var num=document.getElementById("num");
	num.value=0;
	num.disabled="disabled";
	// var n1=document.getElementById("n1");
	// n1.onclick=function () {
	// 	alert("123")
	// }
	//按照标签的名字来获取
	var oButton=document.getElementsByTagName("input");
	var btn_num1;
	var fh;
	for(var i=0;i<oButton.length;i++){
		oButton[i].onclick=function () {
			if(isNumber(this.value)){
				// alert("数字");
				//为什么*1,是为了去掉最开始的0
				// num.value=(num.value+this.value)*1;
				if(isNull(num.value)){
					num.value=this.value;
				}else {
					num.value=num.value+this.value;
				}
			}else{
				var btn_num=this.value;
				switch (btn_num){
					case "+":
						btn_num1=Number(num.value);
						num.value=0;
						fh="+";
						break;
					case "-":
						btn_num1=Number(num.value);
						num.value=0;
						fh="-";
						break;
					case "*":
						btn_num1=Number(num.value);
						num.value=0;
						fh="*";
						break;
					case "/":
						btn_num1=Number(num.value);
						num.value=0;
						fh="/";
						break;
					case ".":
						num.value=dec_number(num.value);
						// fh=".";
						break;
					case "<-":
						num.value=back(num.value);
						break;
					case "c":
						num.value=0
						break;
					case "+/-":
						num.value=sign(num.value);
						break;
					case "=":
						switch (fh){
							case "+":
								num.value=btn_num1+Number(num.value);
								console.log(btn_num1);
								break;
							case "-":
								num.value=btn_num1-Number(num.value);
								console.log(btn_num1);
								break;
							case "*":
								num.value=btn_num1*Number(num.value);
								console.log(btn_num1);
								break;
							case "/":
								if(Number(num.value)==0){
									alert("除数不能为0")
								}else {
									num.value=btn_num1/Number(num.value);
								}
								break;

						}
						break;

				}
			}
		}
	}

}
//isNaN:不能转换为数字：ture，可以转换为数字false
function isNumber(n){
	// if(!isNaN(n)){
	// 	return true;//是数字
	// }else {
	// 	return false;//非数字
	// }
	return !isNaN(n);
}

// 文本框不显示0的三种方法
// function num_1_click(){
// 	var num=document.getElementById("num");
// 	var n=num.value;
// 	n=n+"1";
// 	document.getElementById("num").value=n*1;
// }


//验证文本框是否为空或者是0
function isNull(n){
	if(n*1==0 || n.length==0){
		return true;
	}else {
		return false;
	}
}

//小数点，indexof
function dec_number(n){
	if (n.indexOf(".")==-1){
		n=n+".";
	}
	return n;
}
//退位键
function back(n) {
	n=n.substr(0,n.length-1);
	if(isNull(n)){
		n=0;
	}
	return n;
}

//正负号
function sign(n) {
	//h或者n=Number(n)*-1;
	//如果等于-1的情况，说明减号是不存在的
	if(n.indexOf("-")==-1){
		n="-"+n ;
	}else{
		n=n.substr(1,n.length);
	}
	return n;
}