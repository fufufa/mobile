const ranking = async function(){
    const rankingf = await fetch('http://124.221.249.219:8000/api/ranking')
    const rankingData = await rankingf.json()
    const listRank = document.querySelector('.list-rank')
console.log(rankingData);
    for(let i = 0 ;i<rankingData.length;i++){
        let li = document.createElement('li')
        listRank.appendChild(li)
        for(let j =0 ;j<2;j++){
            let div = document.createElement('div')
            listRank.children[i].appendChild(div)
        }
        for(let j=0;j<2;j++){
            listRank.children[i].children[0].className='rank-item-box'
            listRank.children[i].children[1].className='rank-list-media'  
        } 
        let h2 = document.createElement('h2')
        let rankwords=listRank.children[i].children[0];
        rankwords.appendChild(h2)
        li.className='rank-item' 
        h2.innerText = rankingData[i].title
        let ol = document.createElement('ol')
        rankwords.appendChild(ol)
        
        for(let j = 0 ;j<rankingData[i].top3.length;j++){
            let li2 = document.createElement('li')
            ol.appendChild(li2)
            li2.className='rank-songs-list'
            let span = document.createElement('span')
            li2.appendChild(span)
            span.innerText = rankingData[i].top3[j].title
        }
        let rankwords2=listRank.children[i].children[1];
        let png = document.createElement('img')
        rankwords2.appendChild(png)
        png.src=rankingData[i].cover
        for(let j = 0;j<2;j++){
            let span2 = document.createElement('span')
            rankwords2.appendChild(span2)
            if(j==0){
                span2.className='top-updata'
                span2.innerText= "每"+rankingData[i].update_frequence+"更新"
            }
            if(j==1){
                span2.className="count-num"
                span2.innerText=rankingData[i].views
            }
        }
    }
    
}
ranking()