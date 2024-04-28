import "./card.css";

export const Card=(props)=>{

    return(
        <div className="flip-card">
        <div className="flip-card-inner">
            
            <div className="flip-card-front" >
                <img src={props.img} alt="" className="img" />
                <p className="title">FLIP CARD</p>
                <p>Hover Me</p>
            </div>
            <div className="flip-card-back">
                <p className="title">+</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    )
}