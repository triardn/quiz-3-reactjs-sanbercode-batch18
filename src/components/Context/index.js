import React, {useState, createContext} from 'react';

export const MovieListContext = createContext();

export const MovieListProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [movieList, setMovieList] = useState(null);
    const [movieTitle, setMovieTitle] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    const [movieReleaseYear, setMovieReleaseYear] = useState(2020);
    const [movieDuration, setMovieDuration] = useState(120);
    const [movieGenre, setMovieGenre] = useState("");
    const [movieRating, setMovieRating] = useState(0);
    const [movieImageURL, setMovieImageURL] = useState("");

    return (
        <MovieListContext.Provider value={[isLoggedIn, setIsLoggedIn, username, setUsername, movieList, setMovieList, movieTitle, setMovieTitle, movieDescription, setMovieDescription, movieReleaseYear, setMovieReleaseYear, movieDuration, setMovieDuration, movieGenre, setMovieGenre, movieRating, setMovieRating, movieImageURL, setMovieImageURL]}>
            {props.children}
        </MovieListContext.Provider>
    );
}