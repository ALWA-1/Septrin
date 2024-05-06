var movies = document.querySelectorAll('.movie');

movies.forEach(function(movie) {
  movie.addEventListener('click', function() {
    var movieName = movie.querySelector('h1').innerText;
    alert("You clicked on " + movieName);
  });
});
