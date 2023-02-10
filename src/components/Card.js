import React from 'react'

const Card = (props) => {
    const { publishedAt, urlToImage, title, description, author, url, source } = props;
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 my-2">

                <div className="card letItHover" style={{ cursor: "pointer" }}>
                    <img src={!urlToImage ? "https://static9.depositphotos.com/1008504/1147/i/600/depositphotos_11471032-stock-photo-cubs-with-the-word-news.jpg" : urlToImage} className="card-img-top" alt="img_here" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <p className="card-text">{description ? description.substring(0, 100) + "..." : "Visit the below link to read the article!"}</p>
                        {source && <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toUTCString()}</small></p>}
                        {urlToImage !== "https://www.meteorio.com/wp-content/uploads/2019/05/error-2215702_1280.png" && <a href={url} rel="noreferrer" target="_blank" className="btn btn-outline-secondary">Visit</a>
                        }
                    </div>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: "85%", zIndex: "1" }}>
                        {source}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card
