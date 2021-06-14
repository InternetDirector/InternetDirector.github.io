function Function113(){
var A = document.ELTH.A.value;
var B = document.ELTH.B.value;
var C = document.ELTH.C.value;
if(A<B&&B<C)
{
A*=A;
B*=B;
C*=C;
}
else
{
A*=-1;
B*=-1;
C*=-1;
}
alert('A= '+ A+' B= '+ B+' C= '+C)
};
function Function114(){
	 var A=document.ELFO.vesh_n.value;
	 console.log(A);
	 var N=document.ELFO.cel_n.value>0?document.ELFO.cel_n.value:true;
	 if(N==true)
		 return;
 while(A < N){
	 A*=A;
	 if(A % 1==0)
			 alert(A);
 }
};
function modification(action){
switch(action) {
  case 1:
    document.all["p1"].style.fontSize="150%";
    break;
  case 0:
    document.all["p1"].style.fontSize="100%";
    break;
	case 2:
    document.all["p1"].style.fontSize="64%";
    break;
  default:
    break;
}};
function cngBg(clr){
document.bgColor=clr;
};
function ChangeColor(Element) {
	if (Element.style.backgroundColor == 'white') Element.style.backgroundColor = 'green';
	else Element.style.backgroundColor = 'white';
	return false;
};
function Changetxtcol(Element) {
	if (Element.style.color == '') Element.style.color = 'green';
	else Element.style.color = '';
	return false;
};