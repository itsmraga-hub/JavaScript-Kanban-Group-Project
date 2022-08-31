import formData from './commentForm.js';

const hideModal = (e) => {
  document.querySelector('.movies-list').style.filter = 'blur(0px)';
  e.target.parentElement.parentElement.remove();
};
const createModal = async (id, movie) => {
  document.querySelector('.modal-popup').innerHTML += `<div class="modal-container" id=${id}>
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
        <h3>Comments 3</h3>
        <ul class="comments-list">
          <li class="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
            repellat.
          </li>
          <li class="comment">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            ullam.
          </li>
          <li class="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
            perferendis?
          </li>
          <li class="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis, quod.
          </li>
          <li class="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis, quod.
          </li>
          <li class="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis, quod.
          </li>
          <li class="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis, quod.
          </li>
        </ul>
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
  const btn = document.querySelector('#closeModal');
  console.log(btn);
  const form = document.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('William');
    formData(form);
  });
};
export { createModal, hideModal };
