import displayMovies from './landingPage.js';
import { createModal, hideModal } from './modal.js';

const loadMovieInfo = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`, {
    method: 'GET',
  });
  const movie = await response.json();
  createModal(id, movie);
  const commentBtns = document.querySelectorAll('.comment-popup-btns');
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('.movies-list').style.filter = 'blur(5px)';
    });
  });
  const btn = document.querySelector('#closeModal');
  btn.addEventListener('click', hideModal);
};

const loadDefault = async () => {
  const response = await fetch('https://api.tvmaze.com/shows', {
    method: 'GET',
  });
  const data = await response.json();
  displayMovies(data);
  const commentBtns = document.querySelectorAll('.comment-popup-btns');
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      loadMovieInfo(id);
      document.querySelector('.movies-list').style.filter = 'blur(5px)';
    });
  });
};

export { loadDefault, loadMovieInfo };