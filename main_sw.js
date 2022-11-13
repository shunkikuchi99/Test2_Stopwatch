$(document).ready(function(){
 
    // スタートボタン
    $('#CountupTimer #startButton').click(function(){
        $('#CountupTimer .time').html('0:0:0:0');
 
        timer = setInterval("countUp()", 100);
 
        $(this).attr('disabled', 'disabled');
        $('#CountupTimer #stopButton').removeAttr('disabled');
    });
    
    // ストップボタン
    $('#CountupTimer #stopButton').click(function(){
        // (一時)停止
        clearInterval(timer);
 
        $(this).attr('disabled', 'disabled');
        $('#CountupTimer #resetButton').removeAttr('disabled');
    });
    
    
     // リセットボタン
    $('#CountupTimer #resetButton').click(function(){
 
        msec = 0;
        sec  = 0;
        min  = 0;
        hour = 0;
 
        $('#CountupTimer .time').html('0:0:0:0');
        clearInterval(timer);
 
        $(this).attr('disabled', 'disabled');
        $('#CountupTimer #stopButton').attr('disabled','disabled');
        $('#CountupTimer #startButton').removeAttr('disabled');
    });
});

msec = 0;
sec  = 0;
min  = 0;
hour = 0;

function countUp ()
{
    msec += 1;
 
    if (msec > 9){
        msec = 0;
        sec += 1;
    }
 
    if (sec > 59){
        sec = 0;
        min += 1;
    }
 
    if (min > 59){
        min = 0;
        hour += 1;
    }
 
    // ミリ秒
    msecNumber = msec;
 
    // 秒
    if (sec < 10){
        secNumber = sec.toString();
    } else {
        secNumber = sec;
    }
 
    // 分
    if (min < 10){
        minNumber = min.toString();
    } else {
        minNumber = min;
    }
 
    // 時
    if (hour < 10){
        hourNumber = hour.toString();
    } else {
        hourNumber = hour;
    }
 
    // 出力
    $('#CountupTimer .time' ).html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
}