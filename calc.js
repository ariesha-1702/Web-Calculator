function insert(n)
{
	document.form.text.value=document.form.text.value+n;
}
function clr()
{
    document.form.text.value='';
}
function equal()
{
	var expression=document.form.text.value;
	if(expression)
	{
		document.form.text.value=eval(expression);
	}
}
function del()
{
    var q=document.form.text.value;
    document.form.text.value=q.substring(0,q.length-1);   
}
function log()
{
	document.form.text.value='Math.log10(';
}
function sine()
{
	alert("Enter angle in radians");
	document.form.text.value='Math.sin(';
}
function cosine()
{
	alert("Enter angle in radians");
	document.form.text.value='Math.cos(';
}
function tangent()
{
	alert("Enter angle in radians");
    document.form.text.value='Math.tan(';
}
function sqrt()
{
 document.form.text.value='Math.sqrt(';
}

