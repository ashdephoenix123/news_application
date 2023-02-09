import React from 'react'

const Card = (props) => {
    const { publishedAt, urlToImage, title, description, author, url, source } = props;
    return (
        <>
            <div className="col-md-3 my-2 mx-auto">
                <div className="card letItHover" style={{ cursor: "pointer" }}>
                    <img src={!urlToImage ? "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg" : urlToImage} className="card-img-top" alt="img_here" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <p className="card-text">{description ? description.substring(0, 100) + "..." : "Visit the below link to read the article!"}</p>
                        {source && <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toUTCString()}</small></p>}
                        {urlToImage !== "https://www.meteorio.com/wp-content/uploads/2019/05/error-2215702_1280.png" && <a href={url} rel="noreferrer" target="_blank" className="btn btn-outline-secondary">Visit</a>
                        }
                    </div>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left: "85%", zIndex: "1"}}>
                        {source}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card
