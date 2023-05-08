window.addEventListener('load', () => {



if(matchMedia("screen and (min-width:1024px)").matches){
  window.onresize = function(){
    document.location.reload();
  };
//  하나의 창
let sections = document.querySelectorAll("section");
let devHeight;

devHeight = window.innerHeight;
console.log(devHeight);

window.addEventListener("resize",()=>{
  devHeight = window.innerHeight;
});

for(let i=0;i<sections.length;i++){
  sections[i].style.height = `${devHeight}px`;
}

// 메뉴 선택시 부드럽게 스크롤 이동
let lis = document.querySelectorAll(".scrollTop>li");
// 선택시 이동
for(let k=0;k<lis.length;k++){
  lis[k].addEventListener("click", e => {
    e.preventDefault();
    window.scroll({
      top: k * devHeight,
      left:0,
      behavior: "smooth"
    })
  activation(k,lis);
  })
};

// 스크롤 이동
for(let i=0;i<sections.length;i++){
  sections[i].addEventListener('wheel', function(e){
    if(e.deltaY < 0){
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      window.scroll({
        top: prev,
        left:0,
        behavior:"smooth"
      })
      for(let i=0;i<sections.length;i++){
        if(prev>=i*devHeight && prev<(i+1)*devHeight){
          activation(i,lis);
        }
      }

    }else if(e.deltaY > 0){
      let next = e.currentTarget.nextElementSibling.offsetTop;
      window.scroll({
        top: next,
        left: 0,
        behavior:"smooth"
      })
      for(let i=0;i<sections.length;i++){
        if(next>=i*devHeight && next<(i+1)*devHeight){
          activation(i,lis);
        }
      }
    }

  });
};

// 공통함수
let activation =(index,list)=>{
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
};
// gnb
const gnbLi = document.querySelectorAll("nav.gnb>ul>li");
gnbLi.forEach((li) =>{
  li.addEventListener("mouseover", e =>{
    e.currentTarget.classList.add('on');
  })
  li.addEventListener("mouseout", e=>{
    e.currentTarget.classList.remove('on');
  })
});

// 탑메뉴
const btnMenu = document.querySelector('.btnMenu');
const topMenu = document.querySelector('.topMenu');
const header = document.querySelector('#header');
const logo = document.querySelector('.topMenu>h1.logo');
const scrollTop = document.querySelector(".scrollTop");
const scrolldown = document.querySelector(".scrolldown");
const body = document.querySelector('body');


btnMenu.addEventListener('click', e =>{
  e.preventDefault();
  btnMenu.classList.toggle('open');
  topMenu.classList.toggle('on');
  logo.classList.toggle('on');
  header.classList.toggle('on');
  scrollTop.classList.toggle('non');
  scrolldown.classList.toggle('non');
  body.classList.toggle('on');
});

// -----------------content1-----------------
// con1_box1 박스
let con1Box3 = document.querySelectorAll(".con1_box3>ul>li");
con1Box3.forEach((lis) =>{
  lis.addEventListener('mouseover', e=>{
    lis.classList.add('on');
  })
  lis.addEventListener('mouseout', e =>{
    lis.classList.remove('on');
  })
});
/*오토배너*/
// const con1Box2ul = document.querySelector('.con1_box2>ul'); //프레임
const con1Box2li = document.querySelectorAll('.con1_box2>ul>li'); //이미지
const titeles = document.querySelectorAll('.titles>div');
console.log(titeles);
let bnnNum = 0;
let lastNum = con1Box2li.length - 1;

let bnnW = document.querySelector('.con1_box2>ul>li').offsetWidth;
console.log(bnnW);
window.addEventListener('resize', ()=>{
  bnnW = document.querySelector('.con1_box2>ul>li').offsetWidth;
});

const btnNext = document.querySelector('.btn_main_next');
const btnPrev = document.querySelector('.btn_main_prev');
const slide = document.querySelector(".slide");

// next 버튼 눌렀을때 
btnNext.addEventListener('click', e =>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum =0;
  onauto(con1Box2li);
  onauto(titeles);
  onauto(nubb);
  slide.classList.toggle('effect');

});

// prev 버튼 눌렀을때
btnPrev.addEventListener("click", e =>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum=lastNum;
  onauto(con1Box2li);
  onauto(titeles);
  onauto(nubb);
  slide.classList.toggle('effect');
  
});

// 재생/멈춤 버튼
let flag = true;
const btnPlay = document.querySelector('a.play');
btnPlay.addEventListener('click', e =>{
  e.preventDefault();
  if(flag){  //멈춰라
  clearTimeout(autoBnn);
  btnPlay.classList.add('on');
  slide.classList.add('to');
  flag = false;
  }else{ //재생
    autoBnn = setTimeout(autoBanner, 6000);
    btnPlay.classList.remove('on');
    slide.classList.remove('to');
    flag = true;
  }
});

// 재생바
const nubb = document.querySelectorAll('.slide_arr>div>ul>li');
// 오토배너
let autoBanner = () => {
 bnnNum++;
 if(bnnNum>lastNum) bnnNum = 0;

onauto(con1Box2li);
onauto(titeles);
onauto(nubb);
slide.classList.toggle('effect');

autoBnn = setTimeout(autoBanner, 6000);
}
let autoBnn = setTimeout(autoBanner, 6000);

function onauto(index){
  index.forEach(item =>{
    item.classList.remove('on');
  });
  index[bnnNum].classList.add('on');
};

// section2
// 플러스 버튼
const icon1 = document.querySelectorAll('.icon1');

icon1.forEach((icon) =>{
  icon.addEventListener('mouseover', e =>{
    e.currentTarget.classList.add('on');
  })
  icon.addEventListener('mouseout', e =>{
    e.currentTarget.classList.remove('on');
  })
});

const icon2 = document.querySelectorAll('.icon2 span');
icon2.forEach((icons) =>{
  icons.addEventListener('mouseover', e =>{
    e.currentTarget.classList.add('on');
  })
  icons.addEventListener('mouseout', e=>{
    e.currentTarget.classList.remove('on');
  })
});

 // 기차배너
const nextbtn = document.querySelector('.banner_next');
const prevbtn = document.querySelector('.banner_prev');
const stopbtn = document.querySelector('.banner_play');

const bannerList = document.querySelector('ul.bannerList');
// const bannerInner = document.querySelector('.banner_inner');

const ths = document.querySelector('ul.bannerList>li');

// const playlist = document.querySelectorAll('.banner_play');

// console.log(ths.clientWidth);

let Numm = 0;
let widhtList = ths.clientWidth*7;

// auto배너
let autoList = () => {
  Numm++;
  if(Numm>2) Numm=0;
  bannerList.style.left = `${Numm * -widhtList}px`;

  autoli = setTimeout(autoList, 3000);
}
let autoli = setTimeout(autoList, 3000);

// next버튼
nextbtn.addEventListener('click', e =>{
  e.preventDefault();
  Numm++;
  if(Numm>2) Numm=0;
  bannerList.style.left = `${Numm * -widhtList}px`;
});

// prev버튼
prevbtn.addEventListener('click', e =>{
  e.preventDefault();
  Numm--;
  if(Numm<0) Numm=2;
  bannerList.style.left = `${Numm * -widhtList}px`;
});

let flags = true;

stopbtn.addEventListener('click', e =>{
  e.preventDefault();
  if(flags){  //멈춰라
  clearTimeout(autoli);
  stopbtn.classList.add('on');
  flags = false;
  }else{ //재생
    autoli = setTimeout(autoList, 3000);
    stopbtn.classList.remove('on');
    flags = true;
  }
});
/*
var Num = 0;
var colWidth = -400;

function myBanner(whichBtn){
  var myBannerList = document.getElementById("bannerList") //ul
  if(whichBtn == 'next'){
    Num++;
    if(Num>6) Num=1;  
    myBannerList.style.left = (Num * colWidth) + "px";
  return false;

  }else{
    Num--;
    if(Num<1) Num=6;   
    myBannerList.style.left = (Num * colWidth) + "px";
  return false;
  }
}

*/





















} else if(matchMedia("screen and (max-width:1023px) and (min-width:835px)").matches){
//  하나의 창
let sections = document.querySelectorAll("section");
let devHeight;

devHeight = window.innerHeight;
console.log(devHeight);
window.onresize = function(){
  document.location.reload();
};
window.addEventListener("resize",()=>{
  devHeight = window.innerHeight;
});

for(let i=0;i<sections.length;i++){
  sections[i].style.height = `${devHeight}px`;
}

// 메뉴 선택시 부드럽게 스크롤 이동

let lis = document.querySelectorAll(".scrollTop>li");
// 선택시 이동
for(let k=0;k<lis.length;k++){
  lis[k].addEventListener("click", e => {
    e.preventDefault();
    window.scroll({
      top: k * devHeight,
      left:0,
      behavior: "smooth"
    })
  activation(k,lis);
  })
};
   
  let activation =(index,list)=>{
    for(let el of list){
      el.classList.remove("on");
    }
    list[index].classList.add("on");
  }

// -----------------content1-----------------

// con1_box1 박스
let con1Box3 = document.querySelectorAll(".con1_box3>ul>li");

con1Box3.forEach((lis) =>{
  lis.addEventListener('mouseover', e=>{
    lis.classList.add('on');
  })
  lis.addEventListener('mouseout', e =>{
    lis.classList.remove('on');
  })
})

/*오토배너*/

const con1Box2ul = document.querySelector('.con1_box2>ul'); //프레임
const con1Box2li = document.querySelectorAll('.con1_box2>ul>li'); //이미지
const titeles = document.querySelectorAll('.titles>div');
console.log(titeles);
let bnnNum = 0;
let lastNum = con1Box2li.length - 1;

let bnnW = document.querySelector('.con1_box2>ul>li').offsetWidth;
console.log(bnnW);
window.addEventListener('resize', ()=>{
  bnnW = document.querySelector('.con1_box2>ul>li').offsetWidth;
});

const btnNext = document.querySelector('.btn_main_next');
const btnPrev = document.querySelector('.btn_main_prev');
const slide = document.querySelector(".slide");

btnNext.addEventListener('click', e =>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum =0;
  onauto(con1Box2li);
  onauto(titeles);
  onauto(nubb);
  slide.classList.toggle('effect');

});

// prev 버튼 눌렀을때
btnPrev.addEventListener("click", e =>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum=lastNum;
  onauto(con1Box2li);
  onauto(titeles);
  onauto(nubb);
  slide.classList.toggle('effect');
  
});

// 재생/멈춤 버튼
let flag = true;
const btnPlay = document.querySelector('a.play');
btnPlay.addEventListener('click', e =>{
  e.preventDefault();
  if(flag){  //멈춰라
  clearTimeout(autoBnn);
  btnPlay.classList.add('on');
  slide.classList.add('to');
  flag = false;
  }else{ //재생
    autoBnn = setTimeout(autoBanner, 6000);
    btnPlay.classList.remove('on');
    slide.classList.remove('to');
    flag = true;
  }
});

// 재생바

const nubb = document.querySelectorAll('.slide_arr>div>ul>li');

// 오토배너
let autoBanner = () => {
 bnnNum++;
 if(bnnNum>lastNum) bnnNum = 0;
//  1말고 lastNum을 사용하기도함 | 밑에는 기차 형식
//  con1Box2ul.style.left = `${bnnNum * -bnnW}px`;

onauto(con1Box2li);
onauto(titeles);
onauto(nubb);
slide.classList.toggle('effect');

 autoBnn = setTimeout(autoBanner, 6000);
}
let autoBnn = setTimeout(autoBanner, 6000);

function onauto(index){
  index.forEach(item =>{
    item.classList.remove('on');
  });
  index[bnnNum].classList.add('on');
};

// -------------------------
// section2
// 플러스 버튼
// const icon = document.querySelectorAll()

// 전부 하얀색이 되고 내가 클릭한것만 파란색이 되어라
const icon1 = document.querySelectorAll('.icon1');

icon1.forEach((icon) =>{
  icon.addEventListener('mouseover', e =>{
    e.currentTarget.classList.add('on');
  })
  icon.addEventListener('mouseout', e =>{
    e.currentTarget.classList.remove('on');
  })
});

const icon2 = document.querySelectorAll('.icon2 span');


icon2.forEach((icons) =>{
  icons.addEventListener('mouseover', e =>{
    e.currentTarget.classList.add('on');
  })
  icons.addEventListener('mouseout', e=>{
    e.currentTarget.classList.remove('on');
  })
});

// topmenu
const topMenu = document.querySelector('.topMenu');
const btnMenu = document.querySelector('.btnMenu');
// const header = document.querySelector('#header');
const topli = document.querySelectorAll('.topMenu>ul>li');
const scrollTop = document.querySelector('.scrollTop');
const bg = document.querySelector('.bg');
const body = document.querySelector('body');
  
btnMenu.addEventListener('click', e =>{
  e.preventDefault();
  btnMenu.classList.toggle('on');
  btnMenu.classList.toggle('open');
  topMenu.classList.toggle('on');
  scrollTop.classList.toggle('non');
  bg.classList.toggle('on');
  body.classList.toggle('on');
})

for(let i=0;i<topli.length;i++){
  topli[i].addEventListener('click', e =>{
    e.preventDefault();
    topli[i].classList.toggle('on');
  })
};
// step1_btn.forEach((el,i) =>{
//   el.addEventListener("click",e =>{
//     e.preventDefault();
//     for(let i=0;i<step1_btn.length;i++){
//       step1_btn[i].style.backgroundColor = `transparent`;
//       step1_btn[i].style.backgroundImage = `url(images/ico_inquiry_0${i+1}.png)`;
//       step1_btn[i].style.color =`#333`
//     }
//     el.style.backgroundColor = `#043285`;
//     el.style.backgroundImage = `url(images/ico_inquiry_on_0${i+1}.png)`;
//     el.style.color = `#fff`;
//   });
// });


// 기차배너
const nextbtn = document.querySelector('.banner_next');
const prevbtn = document.querySelector('.banner_prev');
const stopbtn = document.querySelector('.banner_play');

const bannerList = document.querySelector('ul.bannerList');
const bannerInner = document.querySelector('.banner_inner');

const ths = document.querySelector('ul.bannerList>li');

// const playlist = document.querySelectorAll('.banner_play');

console.log(ths.clientWidth);

let Numm = 0;
let widhtList = ths.clientWidth*7;

let autoList = () => {
  Numm++;
  if(Numm>2) Numm=0;
  bannerList.style.left = `${Numm * -widhtList}px`;

  autoli = setTimeout(autoList, 3000);
}
let autoli = setTimeout(autoList, 3000);

nextbtn.addEventListener('click', e =>{
  e.preventDefault();
  Numm++;
  if(Numm>2) Numm=0;
  bannerList.style.left = `${Numm * -widhtList}px`;
});


prevbtn.addEventListener('click', e =>{
  e.preventDefault();
  Numm--;
  if(Numm<0) Numm=2;
  bannerList.style.left = `${Numm * -widhtList}px`;
});

let flags = true;

stopbtn.addEventListener('click', e =>{
  e.preventDefault();
  if(flags){  //멈춰라
  clearTimeout(autoli);
  stopbtn.classList.add('on');
  flags = false;
  }else{ //재생
    autoli = setTimeout(autoList, 3000);
    stopbtn.classList.remove('on');
    flags = true;
  }
});


} else {
  window.addEventListener('resize', function(){
    console.log('resize event!');

    // if (window.innerWidth <= 800) {
    //   alert('현재 브라우저 크기가 <= 800px');
    // }
});

window.onresize = function(){
  document.location.reload();
};


// topmenu
const topMenu = document.querySelector('.topMenu');
const btnMenu = document.querySelector('.btnMenu');
const header = document.querySelector('#header');
// const liss = document.querySelectorAll('.topMenu>ul>li');
const topli = document.querySelectorAll('.topMenu>ul>li');
const scrollTop = document.querySelector('.scrollTop');
const bg = document.querySelector('.bg');
const body = document.querySelector('body');
  
btnMenu.addEventListener('click', e =>{
  e.preventDefault();
  btnMenu.classList.toggle('on');
  btnMenu.classList.toggle('open');
  topMenu.classList.toggle('on');
  scrollTop.classList.toggle('non');
  bg.classList.toggle('on');
  body.classList.toggle('on');
})

for(let i=0;i<topli.length;i++){
  topli[i].addEventListener('click', e =>{
    e.preventDefault();
    topli[i].classList.toggle('on');
  })
};

  
// con1_box1 박스
let con1Box3 = document.querySelectorAll(".con1_box3>ul>li");

con1Box3.forEach((lis) =>{
  lis.addEventListener('mouseover', e=>{
    lis.classList.add('on');
  })
  lis.addEventListener('mouseout', e =>{
    lis.classList.remove('on');
  })
})


/*오토배너*/

const con1Box2ul = document.querySelector('.con1_box2>ul'); //프레임
const con1Box2li = document.querySelectorAll('.con1_box2>ul>li'); //이미지
const titeles = document.querySelectorAll('.titles>div');
console.log(titeles);
let bnnNum = 0;
let lastNum = con1Box2li.length - 1;

let bnnW = document.querySelector('.con1_box2>ul>li').offsetWidth;
console.log(bnnW);
window.addEventListener('resize', ()=>{
  bnnW = document.querySelector('.con1_box2>ul>li').offsetWidth;
});

const btnNext = document.querySelector('.btn_main_next');
const btnPrev = document.querySelector('.btn_main_prev');
const slide = document.querySelector(".slide");

btnNext.addEventListener('click', e =>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum =0;
  onauto(con1Box2li);
  onauto(titeles);
  onauto(nubb);
  slide.classList.toggle('effect');

});

// prev 버튼 눌렀을때
btnPrev.addEventListener("click", e =>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum=lastNum;
  onauto(con1Box2li);
  onauto(titeles);
  onauto(nubb);
  slide.classList.toggle('effect');
  
});

// 재생/멈춤 버튼
let flag = true;
const btnPlay = document.querySelector('a.play');
btnPlay.addEventListener('click', e =>{
  e.preventDefault();
  if(flag){  //멈춰라
  clearTimeout(autoBnn);
  btnPlay.classList.add('on');
  slide.classList.add('to');
  flag = false;
  }else{ //재생
    autoBnn = setTimeout(autoBanner, 6000);
    btnPlay.classList.remove('on');
    slide.classList.remove('to');
    flag = true;
  }
});

// 재생바

const nubb = document.querySelectorAll('.slide_arr>div>ul>li');

// 오토배너
let autoBanner = () => {
 bnnNum++;
 if(bnnNum>lastNum) bnnNum = 0;
//  1말고 lastNum을 사용하기도함 | 밑에는 기차 형식
//  con1Box2ul.style.left = `${bnnNum * -bnnW}px`;

onauto(con1Box2li);
onauto(titeles);
onauto(nubb);
slide.classList.toggle('effect');

 autoBnn = setTimeout(autoBanner, 6000);
}
let autoBnn = setTimeout(autoBanner, 6000);

function onauto(index){
  index.forEach(item =>{
    item.classList.remove('on');
  });
  index[bnnNum].classList.add('on');
};

// -------------------------
// section2
// 플러스 버튼
// const icon = document.querySelectorAll()

// 전부 하얀색이 되고 내가 클릭한것만 파란색이 되어라
const icon1 = document.querySelectorAll('.icon1');

icon1.forEach((icon) =>{
  icon.addEventListener('mouseover', e =>{
    e.currentTarget.classList.add('on');
  })
  icon.addEventListener('mouseout', e =>{
    e.currentTarget.classList.remove('on');
  })
});

const icon2 = document.querySelectorAll('.icon2 span');


icon2.forEach((icons) =>{
  icons.addEventListener('mouseover', e =>{
    e.currentTarget.classList.add('on');
  })
  icons.addEventListener('mouseout', e=>{
    e.currentTarget.classList.remove('on');
  })
});

//content2
const lastbanner = document.querySelector('.banner_Wrap>p>span>a');
const bannerP = document.querySelector('.banner_Wrap>p');
const bannerLists = document.querySelector('.bannerList');
const section2H = document.querySelector('section:nth-of-type(2)');


lastbanner.addEventListener('click', e =>{
  e.preventDefault();
  bannerP.classList.toggle('up');
  bannerLists.classList.toggle('up');
  section2H.classList.toggle('up');
});
 };

 });













