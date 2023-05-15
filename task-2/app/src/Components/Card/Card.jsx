import './Card.css'

function Card({photo}) {

    const {Image} = photo;

    return (
        <div className="card">
            <div className="image__container">
                <img src={Image}/>
            </div>
        </div>
    );
}

export default Card;