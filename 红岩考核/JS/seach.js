const searchal = async function(){
    const searchf = await fetch('http://124.221.249.219:8000/api/hot')
    const searchData = await searchf.json()
    const hot_search_words = document.querySelector('.hot_search_words') 
    for(let i = 0;i<searchData.length;i++){
        let a = document.createElement('a');
        hot_search_words.appendChild(a);
        a.innerText = searchData[i];
    }
}
searchal()