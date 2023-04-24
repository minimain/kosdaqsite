window.addEventListener('load', () => {


if(matchMedia("screen and (min-width:1024px)").matches){

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
  const body = document.querySelector('body');
  
  
  btnMenu.addEventListener('click', e =>{
    e.preventDefault();
    btnMenu.classList.toggle('open');
    topMenu.classList.toggle('on');
    logo.classList.toggle('on');
    header.classList.toggle('on');
    body.classList.toggle('on');
  })

  const listnum = document.querySelectorAll('.sub_inner>ul>li');

  for(let i=0;i<listnum.length;i++){
    listnum[i].addEventListener('mouseover', e=>{
      listnum[i].classList.add('on');
    })
    listnum[i].addEventListener('mouseout', e =>{
      listnum[i].classList.remove('on');
    })
  };
  
  } else if(matchMedia("screen and (max-width:1023px) and (min-width:835px)").matches){

  // topmenu
  const topMenu = document.querySelector('.topMenu');
  const btnMenu = document.querySelector('.btnMenu');
  const header = document.querySelector('#header');
  const topli = document.querySelectorAll('.topMenu>ul>li');
  const bg = document.querySelector('div.bg');
  console.log(bg);
  const body = document.querySelector('body');
    
  btnMenu.addEventListener('click', e =>{
    e.preventDefault();
    btnMenu.classList.toggle('on');
    btnMenu.classList.toggle('open');
    topMenu.classList.toggle('on');
    header.classList.toggle('on');
    bg.classList.toggle('on');
    body.classList.toggle('on');
  })
  
  for(let i=0;i<topli.length;i++){
    topli[i].addEventListener('click', e =>{
      e.preventDefault();
      topli[i].classList.toggle('on');
    })
  };

const gnb_mob = document.querySelector('.gnb_mob>h3');
const gnb_mobul = document.querySelector('.gnb_mob>ul');

gnb_mob.addEventListener('click', e =>{
  e.preventDefault();
  gnb_mobul.classList.toggle('on');
  nav_mob.classList.remove('on');
});

const nav_mob =document.querySelector('.mob_nav>ul');
const nav_h3 = document.querySelector('.mob_nav>h3');

nav_h3.addEventListener('click', e=>{
  e.preventDefault();
  nav_mob.classList.toggle('on');
  gnb_mobul.classList.remove('on');
});

const listnum = document.querySelectorAll('.sub_inner>ul>li');

for(let i=0;i<listnum.length;i++){
  listnum[i].addEventListener('mouseover', e=>{
    listnum[i].classList.add('on');
  })
  listnum[i].addEventListener('mouseout', e =>{
    listnum[i].classList.remove('on');
  })
};
  
  } else {
    
  // topmenu
  const topMenu = document.querySelector('.topMenu');
  const btnMenu = document.querySelector('.btnMenu');
  const header = document.querySelector('#header');
  const topli = document.querySelectorAll('.topMenu>ul>li');
  const bg = document.querySelector('.bg');
  const body = document.querySelector('body');
    
  btnMenu.addEventListener('click', e =>{
    e.preventDefault();
    btnMenu.classList.toggle('on');
    btnMenu.classList.toggle('open');
    topMenu.classList.toggle('on');
    header.classList.toggle('on');
    bg.classList.toggle('on');
    body.classList.toggle('on');
  })
  
  for(let i=0;i<topli.length;i++){
    topli[i].addEventListener('click', e =>{
      e.preventDefault();
      topli[i].classList.toggle('on');
    })
  };
  

  
const gnb_mob = document.querySelector('.gnb_mob>h3');
const gnb_mobul = document.querySelector('.gnb_mob>ul');

gnb_mob.addEventListener('click', e =>{
  e.preventDefault();
  gnb_mobul.classList.toggle('on');
  nav_mob.classList.remove('on');
});

const nav_mob =document.querySelector('.mob_nav>ul');
const nav_h3 = document.querySelector('.mob_nav>h3');

nav_h3.addEventListener('click', e=>{
  e.preventDefault();
  nav_mob.classList.toggle('on');
  gnb_mobul.classList.remove('on');
});

const listnum = document.querySelectorAll('.sub_inner>ul>li');

for(let i=0;i<listnum.length;i++){
  listnum[i].addEventListener('mouseover', e=>{
    listnum[i].classList.add('on');
  })
  listnum[i].addEventListener('mouseout', e =>{
    listnum[i].classList.remove('on');
  })
};

  }
  
});
