
function tglmenu(){
  const togglemenu = document.querySelector('.togglemenu');
  const nvg = document.querySelector('.nvg');
  togglemenu.classList.toggle('active')
  nvg.classList.toggle('active')
}



let btn_slider = document.getElementsByClassName('btn-slider');
  let column = document.getElementsByClassName('column')
  let column_page = Math.ceil(column.length/4);
  let l = 0;
  let movePer = 24.9;
  let maxSlide = 50;
  // mobile_view  
  let mob_view = window.matchMedia("(max-width: 768px)");
  if (mob_view.matches)
   {
    movePer = 50.36;
    maxSlide = 504;
   }

  let next_slider = ()=>{
    l = l + movePer;
    if (column == 1){l = 0; }
    for(const i of column)
    {
      if (l > maxSlide){l = l - movePer;}
      i.style.left = '-' + l + '%';
    }

  }
  let prev_slider = ()=>{
    l = l - movePer;
    if (l<=0){l = 0;}
    for(const i of column){
      if (column_page>1){
        i.style.left = '-' + l + '%';
      }
    }
  }
  btn_slider[1].onclick = ()=>{next_slider();}
  btn_slider[0].onclick = ()=>{prev_slider();}