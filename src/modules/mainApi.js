import { getComments, getLikes, likeItem } from './involvement.js';
import { displayMovies, allItemsCounter } from './landingPage.js';
import { createModal, hideModal } from './modal.js';

const generateComments = (arr) => {
  let comment;
  arr.forEach((comm) => {
    if (comm) {
      comment += `<li class="comment">${comm.creation_date} ${comm.username}: ${comm.comment}</li>`;
    }
  });
  if (arr.length >= 1) {
    return comment.slice(9);
  }
  return '';
};

const loadMovieInfo = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`, {
    method: 'GET',
  });
  const movie = await response.json();
  const AllComments = await getComments(id);
  const comments = generateComments(AllComments) || [];
  createModal(id, movie, comments, AllComments.length);
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
  for (let j = 0; j < data.length; j += 1) {
    for (let i = 0; i < AllLikes.length; i += 1) {
      if (data[j].id === Number(AllLikes[i].item_id)) {
        data[j].likes = AllLikes[i].likes;
      }
    }
  }
  displayMovies(data);
  const items = allItemsCounter(data);
  document.querySelector('.items-count').innerHTML = `(${items})`;
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
      let num = Number(e.target.parentElement.children[1].textContent.split(' ')[0]);
      num += 1;
      e.target.parentElement.children[1].textContent = `${num}`;
      likeItem(obj);
    });
  });
};

export { loadDefault, loadMovieInfo };