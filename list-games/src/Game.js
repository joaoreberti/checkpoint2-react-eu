import  React  from  'react';

const  GenerateGame = ({ selectGame }) => {
    return (
        <div>
        <div  className="GenerateGames">
            <button  onClick={selectGame}>Interogate</button>
        </div>
    </div>
    );
};
export  default  GenerateGame;