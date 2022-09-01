import formData from './commentForm.js';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

const today = `${year}-${month}-${day}`;

const hideModal = (e) => {
  document.querySelector('.movies-list').style.filter = 'blur(0px)';
  e.target.parentElement.parentElement.remove();
};

const commentCounter = (arr) => arr.length;

const createModal = async (id, movie, comments, num) => {
  document.querySelector('.modal-popup').innerHTML = `<div class="modal-container" id=${id}>
  <div class="modal-header">
  <i class="fa-solid fa-arrow-left-long" id="closeModal" onclick="hideModal(this)"></i>
  </div>
  <div class="inner-modal">
    <div class="img-placeholder" style="background-image: url('${movie.image.medium}')"></div>
    <div class="modal-content">
      <h2 class="movie-title">${movie.name}</h2>
      <ul class="movie-info">
        <li class="movie-info-item">Country: ${movie.network.country.name}</li>
        <li class="movie-info-item">Language: ${movie.language}</li>
        <li class="movie-info-item container">
          <div class="genres-container">
            <p>Genres:</p>
            <ul class="genres">
              <li class="genres-item">${movie.genres[0]}</li>
              <li class="genres-item">${movie.genres[1]}</li>
              <li class="genres-item">${movie.genres[2]}</li>
            </ul>
          </div>
        </li>
        <li class="movie-info-item">Rating: ${movie.rating.average}</li>
      </ul>
      ${movie.summary}
      <div class="comments-container">
        <h3>Comments ${num}</h3>
        <ul class="comments-list">${comments}</ul>
      </div>
      <div class="form-container">
        <h3>Add a Comment</h3>
        <form action="./" class="form" data-id="${movie.id}" id="form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            id="name"
            class="input-cls"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            class="input-cls"
            placeholder="Your message"
            required
          ></textarea>
          <input type="submit" class="btn" id="Comment" value="Comment" />
        </form>
      </div>
    </div>
  </div>
</div>`;
  const form = document.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form[0].value && form[1].value) {
      let num = Number(e.target.parentElement.parentElement.children[3].children[0].textContent.split(' ')[1]);
      num += 1;
      e.target.parentElement.parentElement.children[3].children[0].textContent = `Comments ${num}`;
      e.target.parentElement.parentElement.children[3].children[1].innerHTML += `<li class="comment">${today} ${form[0].value}: ${form[1].value} </li>`;
      formData(form);
    }

    const commentsOnPage = document.querySelectorAll('comment');
    const arr = Array.from(commentsOnPage);
    // eslint-disable-next-line no-unused-vars
    const numOfComments = commentCounter(arr);
  });
};
export { createModal, hideModal, commentCounter };
