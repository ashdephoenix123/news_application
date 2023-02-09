import React, { useEffect, useState } from 'react'
import Card from './Card'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import Heading from './Heading';
import Footer from './Footer'

const Collection = (props) => {
    const { category, apikey } = props
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const pageSize = 16

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apikey}`


    const fetchMoreData = async () => {
        setLoading(false)
        setPage(prev => prev + 1)
    }

    useEffect(() => {
        document.title = `Newzapp - ${capitalizeFirstLetter(category)}`
        const fetchData = async () => {
            const data = await fetch(url)
            const parsedData = await data.json()
            setLoading(false)
            if (parsedData.status === "ok") {
                setTotal(parsedData.totalResults)
                setArticles(prev => prev.concat(parsedData.articles))

            } else if (parsedData.status === "error") {
                setArticles([{
                    "urlToImage": "https://www.meteorio.com/wp-content/uploads/2019/05/error-2215702_1280.png",
                    "title": "Uh oh! Maximum Limit Reached!",
                    "description": "Developer accounts are limited to 100 requests over a 24 hour period. Please wait for 24 hours",
                    "author": "",
                    "publishedAt": "",
                    "source": ""
                }])
            }
        }
        fetchData()
    }, [url, category])

    return (
        <>
            <div className='my-3 text-center'>
                <Heading title={category === "general" ? "Read Latest and top news across the world" : `${capitalizeFirstLetter(category)} Headlines`} />
            </div>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== total}
                loader={<Spinner />}
            >
                <div className="container my-2">
                    <div className="row px-5">
                        {articles.map((item, index) => {
                            return <Card
                                key={index}
                                urlToImage={item.urlToImage}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                                author={item.author}
                                publishedAt={item.publishedAt}
                                source={item.source.name}
                            />
                        })}

                    </div>
                </div>
            </InfiniteScroll>
            <div className="container">
                {!loading && <Footer />}
            </div>
        </>
    )
}

export default Collection

 // const prevPage = () => {
    //     page !== 1 && setPage(page - 1)
    // }

    // const nextPage = () => {
    //     if (!(page + 1 > Math.ceil(total / pageSize))) {
    //         setPage(page + 1)
    //     }
    // }
/* <div className="container d-flex justify-content-between my-5">
                        <button type="button" disabled={page <= 1} className="btn btn-outline-secondary" onClick={prevPage}>&larr; Previous</button>
                        <button type="button" disabled={page + 1 > Math.ceil(total / pageSize)} className="btn btn-outline-secondary" onClick={nextPage}>Next &rarr;</button>

                    </div> */




    // https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=33b0dd53e6a649b09b127cf00b933f00