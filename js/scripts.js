function Function113(){
var A = prompt('Введите A', 100);
var B = prompt('Введите B', 100);
var C = prompt('Введите C', 100);
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
}