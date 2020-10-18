import React, {useContext, useEffect} from 'react';
import axios from 'axios';

import {MovieListContext} from  "./../Context";

const MovieListEditor = () => {
    const [, , , , movieList, setMovieList, movieTitle, setMovieTitle, movieDescription, setMovieDescription, movieReleaseYear, setMovieReleaseYear, movieDuration, setMovieDuration, movieGenre, setMovieGenre, movieRating, setMovieRating, movieImageURL, setMovieImageURL, editedID, setEditedID] = useContext(MovieListContext)

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
        if (desc !== null) {
            return desc.substring(0,20);   
        }

        return desc;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (editedID !== "") { // edit data
            axios.put(`http://backendexample.sanbercloud.com/api/movies/${editedID}`, {
                title: movieTitle,
                description: movieDescription,
                year: movieReleaseYear,
                duration: movieDuration,
                genre: movieGenre,
                rating: movieRating,
                image_url: movieImageURL
            })
                .then(res => {
                    console.log(`success updated fruit data with id ${editedID}`);
                    setMovieList(null);
                })
                .catch(err => {
                    console.log(`error when post data to api: ${err}`)
                });

            setMovieTitle("");
            setMovieDescription("");
            setMovieReleaseYear(2020);
            setMovieDuration(120);
            setMovieGenre("");
            setMovieRating(0);
            setMovieImageURL("");
            setEditedID("");
        } else { // insert new data
            axios.post(`http://backendexample.sanbercloud.com/api/movies`, {
                title: movieTitle,
                description: movieDescription,
                year: movieReleaseYear,
                duration: movieDuration,
                genre: movieGenre,
                rating: movieRating,
                image_url: movieImageURL
            })
                .then(res => {
                    console.log("berhasil")
                    setMovieList(null);
                })
                .catch(err => {
                    console.log(`error when post data to api: ${err}`)
                });

            setMovieTitle("");
            setMovieDescription("");
            setMovieReleaseYear(2020);
            setMovieDuration(120);
            setMovieGenre("");
            setMovieRating(0);
            setMovieImageURL("");
            setEditedID("");
        }
    }

    const handleChange = (event) => {
        switch (event.target.id) {
            case "title":
                setMovieTitle(event.target.value);
                break;
            case "description":
                setMovieDescription(event.target.value);
                break;
            case "release-year":
                setMovieReleaseYear(event.target.value);
                break;
            case "duration":
                setMovieDuration(event.target.value);
                break;
            case "genre":
                setMovieGenre(event.target.value);
                break;
            case "rating":
                setMovieRating(event.target.value);
                break;
            case "image-url":
                setMovieImageURL(event.target.value);
                break;
            default:
        }
    }

    const editData = (id, data) => {
        setMovieTitle(data.title);
        setMovieDescription(data.description);
        setMovieReleaseYear(data.year);
        setMovieDuration(data.duration);
        setMovieGenre(data.genre);
        setMovieRating(data.rating);
        setMovieImageURL(data.image_url);
        setEditedID(id);
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

            setMovieTitle("");
            setMovieDescription("");
            setMovieReleaseYear(2020);
            setMovieDuration(120);
            setMovieGenre("");
            setMovieRating(0);
            setMovieImageURL("");
            setEditedID("");
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
            <div className="form-container">
                <div className="form">
                    <h1>Form Harga Buah</h1>
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{width: 280, fontWeight: 'bold'}}>
                                        <label>
                                            Title:
                                        </label>
                                    </td>
                                    <td>
                                        <input id="title" type="text" style={{width: 150}} value={movieTitle} onChange={handleChange} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width: 280, fontWeight: 'bold'}}>
                                        <label>
                                            Description:
                                        </label>
                                    </td>
                                    <td>
                                        <textarea id="description" value={movieDescription} onChange={handleChange} required rows="5" cols="17" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width: 280, fontWeight: 'bold'}}>
                                        <label>
                                            Year:
                                        </label>
                                    </td>
                                    <td>
                                        <input id="release-year" type="number" style={{width: 150, textAlign: 'center'}} value={movieReleaseYear} onChange={handleChange} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width: 280, fontWeight: 'bold'}}>
                                        <label>
                                            Duration:
                                        </label>
                                    </td>
                                    <td>
                                        <input id="duration" type="number" style={{width: 150, textAlign: 'center'}} value={movieDuration} onChange={handleChange} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width: 280, fontWeight: 'bold'}}>
                                        <label>
                                            Genre:
                                        </label>
                                    </td>
                                    <td>
                                        <input id="genre" type="text" style={{width: 150}} value={movieGenre} onChange={handleChange} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width: 280, fontWeight: 'bold'}}>
                                        <label>
                                            Rating:
                                        </label>
                                    </td>
                                    <td>
                                        <input id="rating" type="text" style={{width: 150, textAlign: 'center'}} value={movieRating} onChange={handleChange} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width: 280, fontWeight: 'bold'}}>
                                        <label>
                                            Image URL:
                                        </label>
                                    </td>
                                    <td>
                                        <textarea id="image-url" value={movieImageURL} onChange={handleChange} required rows="5" cols="17" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button style={{marginTop: 10}}>submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MovieListEditor;