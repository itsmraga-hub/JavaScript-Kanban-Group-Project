const container = document.querySelector('.movies-list');
const displayMovies = async (movies) => {
  container.innerHTML = '';
  movies.forEach((movie, i) => {
    container.innerHTML += `<li class="movie-info-container" id="${i}" data-id="${movie.id}">
    <div class="img-placeholder" style="background-image: url('${movie.image.medium}')"></div>
    <div class="movie">
      <p class="movie-title">${movie.name}</p>
      <div class="comment-section">
        <button class="btn comment-popup-btns" data-id="${movie.id}">Comment</button>
        <div class="like">
        <i class="fa-solid fa-thumbs-up like-btn" data-id="${movie.id}" data-name="${movie.name}"></i>
          <small>5 likes</small>
        </div>
      </div>
    </div>
  </li>`;
  });
};

export default displayMovies;