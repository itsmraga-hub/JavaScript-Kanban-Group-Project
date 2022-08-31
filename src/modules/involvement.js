const likeItem = async (obj) => {
    // console.log('William');
    // console.log(obj);
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ze2AYZiZd2P7VZfM9LGL/likes/', {
      method: 'POST',
      header: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(obj),
    });
    console.log('William');
    const data = await response.json();
    console.log(`William ${data}`);
  };
  