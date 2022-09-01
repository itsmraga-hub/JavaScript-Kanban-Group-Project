const likeItem = async (obj) => {
 await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ze2AYZiZd2P7VZfM9LGL/likes/', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ze2AYZiZd2P7VZfM9LGL/likes', {
    method: 'GET',
  });
  const likes = await response.json();
  return likes;
};

const comment = async (obj) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ze2AYZiZd2P7VZfM9LGL/comments', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

const getComments = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ze2AYZiZd2P7VZfM9LGL/comments?item_id=${id}`, {
    method: 'GET',
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  return [];
};

export {
  likeItem, getLikes, comment, getComments,
};
