import React, {useContext, useEffect} from 'react';

import {MovieListContext} from  "./../Context";

import axios from 'axios';

const MovieListEditor = () => {
    const [, , , , movieList, setMovieList] = useContext(MovieListContext)

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

    const shortenDescription = (desc) => {
        return desc.substring(0,20);
    }

    const editData = (id, data) => {

    }

    const deleteData = (id) => {
        var r = window.confirm("Data ini akan dihapus secara permanen! Setuju?");
        
        if (r === true) {
            axios.delete(`http://backendexample.sanbercloud.com/api/movies/${id}`)
                .then(res => {
                    console.log(`success delete fruits with id ${id}`)
                    setMovieList(null);
                })
                .catch(err => {
                    console.log(`error when post data to api: ${err}`)
                });

            // setInputNama("");
            // setInputHarga("");
            // setInputBerat("");
            // setEditedIndex("");
        }
    };

    return (
        <div className="container">
            <div className="search-container">
                <input type="text"/>
                <button>Search</button>
            </div>
            <div className="edit-movie-container">
                <div className="list-title">
                    <h1>Daftar Film</h1>
                </div>
                <table className="border-table">
                    <thead>
                        <tr>
                            <td style={{textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>No</td>
                            <td style={{textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Title</td>
                            <td style={{textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Description</td>
                            <td style={{textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Year</td>
                            <td style={{textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Duration</td>
                            <td style={{textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Genre</td>
                            <td style={{textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Rating</td>
                            <td style={{textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Action</td>
                        </tr>
                    </thead>
                        {(movieList !== null) ?
                            <tbody>
                                {movieList.map((el, index)=> {
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{el.title}</td>
                                            <td>{shortenDescription(el.description)}...</td>
                                            <td>{el.year}</td>
                                            <td>{el.duration}</td>
                                            <td>{el.genre}</td>
                                            <td>{el.rating}</td>
                                            <td style={{textAlign: 'center'}}>
                                                <button onClick={() => editData(el.id, el)}>Edit</button>
                                                <button onClick={() => deleteData(el.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody> :
                        <tfoot></tfoot>}
                </table>
            </div>
            <div className="form-container"></div>
        </div>
    );
};

export default MovieListEditor;