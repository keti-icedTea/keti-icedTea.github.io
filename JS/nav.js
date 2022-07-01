const menu_btn_1 = document.getElementById('navi_menu_btn_1')
const menu_btn_2 = document.getElementById('navi_menu_btn_2')
const menu_btn_3 = document.getElementById('navi_menu_btn_3')
const menu_btn_4 = document.getElementById('navi_menu_btn_4')

const child_menu_1 = document.getElementById('navi_menu_child_1')
const child_menu_2 = document.getElementById('navi_menu_child_2')
const child_menu_4 = document.getElementById('navi_menu_child_4')

const navi_menu_child_div_outside = document.getElementById('navi_menu_child_div_outside')
const navi = document.getElementById('navi')
const navi_menu_Button = document.getElementById('navi_menu_Button')
const navi_blackShield = document.getElementById('navi_blackShield')

let flag = false
let mouseoutFunc = () => {
  if(!flag) {
    navi_menu_child_div_outside.classList.add('navi_hidden2')
    navi_blackShield.classList.add('navi_hidden3')
  }
}

let hideAll = () => {
  child_menu_1.classList.add('navi_hidden')
  child_menu_2.classList.add('navi_hidden')
  child_menu_4.classList.add('navi_hidden')
}


navi.addEventListener('mouseover',() => {
  flag = true
})

navi.addEventListener('mouseout',() => {
  flag = false
  setTimeout("mouseoutFunc()",300)
})

menu_btn_1.addEventListener('mouseover',() => {
  hideAll();
  child_menu_1.classList.remove('navi_hidden')
  navi_menu_child_div_outside.classList.remove('navi_hidden2')
})

menu_btn_2.addEventListener('mouseover',() => {
  hideAll();
  child_menu_2.classList.remove('navi_hidden')
  navi_menu_child_div_outside.classList.remove('navi_hidden2')
})

menu_btn_3.addEventListener('mouseover',() => {
  navi_menu_child_div_outside.classList.add('navi_hidden2')
})

menu_btn_4.addEventListener('mouseover',() => {
  hideAll();
  child_menu_4.classList.remove('navi_hidden')
  navi_menu_child_div_outside.classList.remove('navi_hidden2')
})

navi_blackShield.addEventListener('click',() => {
  navi_menu_child_div_outside.classList.add('navi_hidden2')
  navi_blackShield.classList.add('navi_hidden3')
})

navi_menu_Button.addEventListener('click', ()=> {
  if(navi_blackShield.classList.contains('navi_hidden3')) {
    navi_blackShield.classList.remove('navi_hidden3')
  } else {
    navi_blackShield.classList.add('navi_hidden3')
  }
})
