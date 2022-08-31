import { comment } from './involvement.js';

const formData = (form) => {
  if (form[0].value && form[1].value) {
    const name = form[0].value;
    const message = form[1].value;
    const id = form.getAttribute('data-id');
    const obj = {
      item_id: id,
      username: name,
      comment: message,
    };
    comment(obj);
    form[0].value = '';
    form[1].value = '';
  }
};

// export default formData;