import { getLikes, likeItem } from './involvement.js';
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
  const AllLikes = await getLikes();
  for (let i = 0; i < AllLikes.length; i += 1) {
    if (data.find((obj) => obj.id === Number(AllLikes[i].item_id))) {
      data.find((obj) => obj.id === Number(AllLikes[i].item_id)).likes = AllLikes[0].item_id;
    }
  }
  displayMovies(data);
  const commentBtns = document.querySelectorAll('.comment-popup-btns');
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      loadMovieInfo(id);
      document.querySelector('.movies-list').style.filter = 'blur(5px)';
    });
  });
  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      const obj = { item_id: `${id}` };
      console.log(obj);
      likeItem(obj);
    });
  });
};

export { loadDefault, loadMovieInfo };