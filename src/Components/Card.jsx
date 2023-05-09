/* eslint-disable react/prop-types */


const Card = ({title,poster_path,overview,vote_count}) => {

    const Api_Img = "https://image.tmdb.org/t/p/w500";

    return (
        <>
       
            <div className="card">
                <div className="cardimg">
                    <img src={Api_Img+poster_path} alt="" />
                </div>
                <div className="cardbody">
                    <h2>{title}</h2>
                    <details>
                        <summary><h3>Overview {title}</h3></summary>
                        <p>{overview}</p>
                    </details>
                    <div className="link">
                        <button> Votes:{vote_count}</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Card
