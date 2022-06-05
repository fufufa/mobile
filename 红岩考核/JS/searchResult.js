let data;
function EnterPress(e){
    const search_cont = document.querySelector('.search_cont')
    const search_result = document.querySelector('.search_result')
    search_cont.style.display = 'none'
    search_result.style.display = 'block'
    data=e.target.value;
    console.log(data);
    searching()
}
const searching = async function(){
    
    const params = data
    const searchingf= await fetch('http://124.221.249.219:8000/api/search?keyword=params',{
        
    })
    const searchingData =await searchingf.json()
    console.log(searchingData);
    
    for(let i = 0;i<searchingData.length;i++){
        const searchresult = document.querySelector('.searchul')
        let li = document.createElement('li')
        searchresult.appendChild(li)
        let h3 = document.createElement('h3')
        li.appendChild(h3)
        h3.innerText=searchingData[i].title
        for(let j=0;j<searchingData[i].artist.length;j++){
            let span = document.createElement('span')
            li.appendChild(span)
            span.innerText = searchingData[i].artist[j]
        }
    }
}