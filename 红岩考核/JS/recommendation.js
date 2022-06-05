const recommendationsoffical = async function(){
    const recommendationsf = await fetch('http://124.221.249.219:8000/api/recommendations')
    const recommendationsData = await recommendationsf.json()
    const listwrap = document.querySelector('.list-wrap')

    for(let i=0;i<recommendationsData.offical.length;i++){
        let li = document.createElement('li')
        
        listwrap.appendChild(li);
        listwrap.children[i].className='list-item'
        for(let j=0;j<2;j++){
            let div = document.createElement('div')
            listwrap.children[i].appendChild(div)
        }
        for(let j=0;j<2;j++){
            listwrap.children[i].children[0].className='list-img'
            listwrap.children[i].children[1].className='list-cover'  
        } 
        let png=document.createElement('img')
        listwrap.children[i].children[0].appendChild(png)
        png.src=recommendationsData.offical[i].cover
        let span=document.createElement('span')
        listwrap.children[i].children[1].appendChild(span)
        span.innerHTML=recommendationsData.offical[i].title

    }


}
recommendationsoffical()
const recommendationstatsujin = async function(){
    const recommendationsf = await fetch('http://124.221.249.219:8000/api/recommendations')
    const recommendationsData = await recommendationsf.json()
    const listwrap = document.querySelector('.section2 .list-wrap')
    for(let i=0;i<recommendationsData.tatsujin.length;i++){
        let li = document.createElement('li')
        
        listwrap.appendChild(li);
        listwrap.children[i].className='list-item'
        for(let j=0;j<2;j++){
            let div = document.createElement('div')
            listwrap.children[i].appendChild(div)
        }
        for(let j=0;j<2;j++){
            listwrap.children[i].children[0].className='list-img'
            listwrap.children[i].children[1].className='list-cover'  
        } 
        let png=document.createElement('img')
        listwrap.children[i].children[0].appendChild(png)
        png.src=recommendationsData.tatsujin[i].cover
        let span=document.createElement('span')
        listwrap.children[i].children[1].appendChild(span)
        span.innerHTML=recommendationsData.tatsujin[i].title

    }
}
recommendationstatsujin()
const recommendationscolumn = async function(){
    const recommendationsf = await fetch('http://124.221.249.219:8000/api/recommendations')
    const recommendationsData = await recommendationsf.json()
    const listwrap = document.querySelector('.section3 .list-wrap')
    for(let i=0;i<recommendationsData.column.length;i++){
        let li = document.createElement('li')
        
        listwrap.appendChild(li);
        listwrap.children[i].className='list-item'
        for(let j=0;j<2;j++){
            let div = document.createElement('div')
            listwrap.children[i].appendChild(div)
        }
        for(let j=0;j<2;j++){
            listwrap.children[i].children[0].className='list-img'
            listwrap.children[i].children[1].className='list-cover'  
        } 
        let png=document.createElement('img')
        listwrap.children[i].children[0].appendChild(png)
        png.src=recommendationsData.column[i].icon
        let span=document.createElement('span')
        listwrap.children[i].children[1].appendChild(span)
        span.innerHTML=recommendationsData.column[i].title
    }
}
recommendationscolumn()