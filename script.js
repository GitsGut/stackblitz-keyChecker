window.addEventListener('keydown',(e)=>
{ let k = e.key;  
  if(e.key === ' ')
{
    k = 'space'
}
  document.querySelector('.magic').innerHTML = ` ${k} was Pressed`
})