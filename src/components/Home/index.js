import React, {useContext, useEffect} from 'react';
import axios from 'axios';

import {MovieListContext} from './../Context';

const Home = () => {
    const [, , , , movieList, setMovieList] = useContext(MovieListContext);

    useEffect(() => {
        if (movieList === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
                .then(res => {
                    let allData = [];
                    for (let i = 0; i < res.data.length; i++) {
                        const newObj = {
                            id: res.data[i].id,
                            title: res.data[i].title,
                            description: res.data[i].description,
                            year: res.data[i].year,
                            duration: res.data[i].duration,
                            genre: res.data[i].genre,
                            rating: res.data[i].rating,
                            review: res.data[i].review,
                            image_url: res.data[i].image_url,
                        };

                        allData.push(newObj);
                    }

                    setMovieList(allData);
                }).catch (err => {
                    console.log(`error when fetch fruit data: ${err}`)
                });
        }
    }, [movieList, setMovieList]);

    return (
        <div className="container">
            {(movieList !== null) ? 
                <>
                    {movieList.map((el, index) => {
                        let separator;
                        if (index+1 < movieList.length) {
                            separator = <hr/>
                        }

                        return (
                            <>
                                <div style={{marginBottom: 20}}>
                                    <h2>{el.title}</h2>
                                    <div className="row">
                                        <div className="column-60">
                                            <img className="image-container" src={el.image_url} alt="img-movie" />
                                        </div>
                                        <div className="column-40 padding-left-10">
                                            <div className="detail-movie">Rating: {el.rating}</div>
                                            <div className="detail-movie">Durasi: {el.duration}</div>
                                            <div className="detail-movie">Genre: {el.genre}</div>
                                        </div>
                                    </div>
                                    <div className="movie-description">
                                        <strong>deskripsi: </strong> {el.description}
                                    </div>
                                </div>
                                {separator}
                            </>
                        );
                    })}
                </>
            : '' }
        </div>
    );
};

export default Home;