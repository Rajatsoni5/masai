var a=document.getElementsByClassName("three");
for(i=0;i<=a.length-1;i++)
{
    a[i].addEventListener('mouseenter',first);
    function first()
    {
        this.className='classSec';
        
    }
    a[i].addEventListener('mouseleave',second)
    function second()
    {
        
        this.className='classThi';
    }
}