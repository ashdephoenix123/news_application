import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import Heading from './Heading';
import Footer from './Footer'

const Collection = (props) => {
    const { category, apikey } = props
    const [articles, setArticles] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [nextPage, setNextPage] = useState("")
    const page = useRef("")

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const url = `https://newsdata.io/api/1/news?apikey=${apikey}&language=en&country=in&category=${category}&page=${nextPage}`

    const fetchMoreData = () => {
        setNextPage(page.current.toString())
    }

    useEffect(() => {
        document.title = `Newzapp - ${capitalizeFirstLetter(category)} Headlines`
        const fetchData = async () => {
            const data = await fetch(url)
            const parsedData = await data.json()
            setLoading(false)

            if (parsedData.status === "error") {
                setArticles([{
                    "urlToImage": "https://www.meteorio.com/wp-content/uploads/2019/05/error-2215702_1280.png",
                    "title": "Uh oh! Maximum Limit Reached!",
                    "description": "Developer accounts are limited to 100 requests over a 24 hour period. Please wait for 24 hours",
                    "author": "",
                    "publishedAt": "",
                    "source": ""
                }])
            } else {
                setTotal(parsedData.totalResults)
                setArticles(prev => prev.concat(parsedData.results))
                page.current = parsedData.nextPage
            }
        }
        fetchData()
    }, [url, category])

    return (
        <>
            <div className='my-3 text-center'>
                <Heading title={category === "top" ? "Read Latest and top news across the world" : `${capitalizeFirstLetter(category)} Headlines`} />
            </div>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== total}
                loader={<Spinner />}
            >
                <div className="container my-2">
                    <div className="row">
                            {articles.map((item, index) => {
                                return <Card
                                    key={index}
                                    urlToImage={item.image_url}
                                    title={item.title}
                                    description={item.description}
                                    url={item.link}
                                    author={item.creator ? item.creator : ""}
                                    // author={"akash"}
                                    publishedAt={item.pubDate}
                                    source={item.source_id}
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
    // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apikey}`
