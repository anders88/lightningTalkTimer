
function todaydate(){
var today_date= new Date()
var myyear=today_date.getYear()
var mymonth=today_date.getMonth()+1
var mytoday=today_date.getDate()
document.write(myyear+"/"+mymonth+"/"+mytoday)
};