//상단 현재 년 월 일
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();

let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

document.getElementById('today').innerText = year+' '+monthNames[month]+' '+ date;

// 좌측 navi hover시 opacity조절
document.querySelectorAll('.navi-btn').forEach(function(ele){
  ele.addEventListener('mouseover', function(){
    if(!ele.querySelector('.none')){
      ele.querySelector('.icon-box').classList.add('none');
      ele.querySelector('.navi-txt').classList.add('block');
      ele.classList.add('on');
    }
  });
  ele.addEventListener('mouseout', function(){
    if(ele.classList.contains('on')){
      ele.querySelector('.icon-box').classList.remove('none');
      ele.querySelector('.navi-txt').classList.remove('block');
      ele.classList.remove('on');
    }
  })
})

//우측 info 버튼 클릭시 나타나게

document.querySelector('.info-click-btn').addEventListener('click', function(){
  if(this.classList.contains('on')){
    document.querySelector('.info-bar').classList.remove('on');
    document.querySelector('.info-click-btn').classList.remove('on');
    document.querySelector('.arrow-box').classList.remove('on');
  }else{
    document.querySelector('.info-bar').classList.add('on');
    document.querySelector('.info-click-btn').classList.add('on');
    document.querySelector('.arrow-box').classList.add('on');
  }
})


