import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService"

class Movies extends Component {
    state = { 
        movies : getMovies()
     };

     handleDelete = (movie) => {
         const movies = this.state.movies.filter(m => m._id !== movie._id);
         this.setState({movies});
     };
     
    render() { 
        const { length : count } = this.state.movies;
        if ( count === 0) return <p>There are no movies in the database.</p>
        
        return ( 
        <div className="container">
        <div className = "row">
        <p>Showing {count} movies in database.</p>
        <table className = "table ">
            <thead>
                <tr>
                    <th scope = 'col'>Title</th>
                    <th scope = 'col'>Genre</th>
                    <th scope = 'col'>Stock</th>
                    <th scope = 'col'>Rate</th>
                    <th scope = "col"></th>
                </tr>   
            </thead>
            <tbody>
                {this.state.movies.map(obj => 
                <tr key = {obj._id} >
                    <th scope = "col">{obj.title}</th>
                    <td>{obj.genre.name}</td>
                    <td>{obj.numberInStock}</td>
                    <td>{obj.dailyRentalRate}</td>
                    <td>
                        <button onClick={( ) => this.handleDelete(obj) } className = "btn btn-danger">Delete</button>
                    </td>
                </tr>
                
                ) }
            </tbody>
        </table>
        </div>
        </div>
            );
    }
}
 
export default Movies;
