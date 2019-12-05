import  React  from  'react';

const  DisplayName = ({ quote }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={quote.background_image}  alt="picture"  />
            <ul>
                <li>
                    Name : {quote.name}
                </li>
                <li>
                    Rating : {quote.rating}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayName;