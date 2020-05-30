//音名对应的音乐
var phonemeAudio = new Audio();

//看音名，按唱名
var isPhoneme4sing = false;

//听唱名，按音名
var isSing4Phoneme = false;

/**
 * init
 */
 window.onload=function(){

    /**
	 * 程序加载时就监听按键：1 2 3 4 5 6 7
	 * 参考：https://blog.csdn.net/weixin_43608538/article/details/89633399
	 */
	document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        switch(e.keyCode){
        	case 49: playAudio(e.keyCode);
        		break;
        	case 50: playAudio(e.keyCode);
        		break;
        	case 51: playAudio(e.keyCode);
        		break;
        	case 52: playAudio(e.keyCode);
        		break;
        	case 53: playAudio(e.keyCode);
        		break;
        	case 54: playAudio(e.keyCode);
        		break;
        	case 55: playAudio(e.keyCode);
        		break;
        	default:
        }
    };
}

/**
 * 播放audio
 */
function playAudio(mFile){
	phonemeAudio.pause();phonemeAudio.src="music/"+(mFile-48)+".mp3";phonemeAudio.play();
}

/**
 * 看音名，按唱名
 */
function onPhoneme4sing(){
	isPhoneme4sing = isPhoneme4sing ? false : true;
	console.info(isPhoneme4sing);
	
	
//	while(isPhoneme4sing){
//		setTimeout(
//			function() {
//				console.info(4444444);
//			},1000);
//		if(!isPhoneme4sing){
//			break;
//		}
//	}
}

/**
 * 听唱名，按音名
 */
function onSing4Phoneme(){
	isSing4Phoneme = isSing4Phoneme ? false : true;
}

/**
 * 随机获取一个音名
 */
function giveIname() {
	return random(1, 7);
}

