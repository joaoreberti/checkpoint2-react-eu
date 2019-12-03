// Fetch from the API. Information to be displayed on Game.

require("dotenv").config();

const GameList = async () => {
  try {
    const rawResponse = await fetch(`https://wild-games.herokuapp.com/api/v1`);
    const resData = await rawResponse.json();
    // console.log(resData)
    return resData;
  } catch (e) {
    //console.log(e.message);
  }
};

export { GameList };
