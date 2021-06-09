var y=[];
var z=prompt("enter the no. of values to be entered .");
for(var i=0;i<z;i++)
{
    var x=prompt("enter the no.");
    y.push(x);
}
y.reverse();
document.write(y+"\n");