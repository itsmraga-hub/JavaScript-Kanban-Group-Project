const hideModal = (e) => {
    document.querySelector('.movies-list').style.filter = 'blur(0px)';
    console.log(e.target.parentElement.parentElement);
    // document.querySelector('.modal-container').remove();
    e.target.parentElement.parentElement.remove();
  };
  