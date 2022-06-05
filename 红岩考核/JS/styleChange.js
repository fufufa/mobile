const change=document.querySelector(".change")
const change1=document.querySelector('.change1')
const current=document.querySelector('.current')
const no=document.querySelector('.no');
const choose1=document.getElementById('choose1')
const choose2=document.getElementById("choose2")



choose1.onclick=function(){
    change.style.display = 'block';
    change1.style.display = 'none';
    current.className='current';
    no.className='no';
}
choose2.onclick=function(){
    change.style.display = 'none';
    change1.style.display = 'block';
    no.className='current';
    current.className='no';
}


const search=document.querySelector('.search')
const search_box=document.querySelector('.search_box')
const search_cancel=document.querySelector(".search-cancel")
const main = document.querySelector('.main')
const search_cont=document.querySelector('.search_cont')
const search_result = document.querySelector('.search_result')
search.addEventListener('click',function(){
    search_cancel.style.display='inline-block';
    main.style.display = 'none';
    search_box.style.width = '85%' ;
    search_cont.style.display='block'
})
search_cancel.addEventListener('click',function(){
    search_cont.style.display='none';
    main.style.display='block';
    search_box.style.width='100%';
    search_cancel.style.display='none';
    search_result.style.display = 'none';
})