function search(){
    let searchBar = document.querySelector('.search-input').value.toUpperCase();
    let searchList = document.querySelector('.search-list');
    let searchResult = document.querySelectorAll('.search-result');
    let movieName = document.getElementsByTagName('h3');

    for (let i=0; i<movieName.length; i++){
        if (movieName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0 ){
            searchResult[i].style.display ="";
        }else{
            searchResult[i].style.display ="none";
        }
    }
}