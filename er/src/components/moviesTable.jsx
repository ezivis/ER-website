import React, {Component} from 'react';
import Like from "./common/like";
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
columns =[
    {path:"title",lable: "Title",
     content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
    {path:"genre.name",lable: "Genre"},
    {path:"numberInStock",lable: "Stock"},
    {path:"dailyRentalRate",lable: "Rate"},
    {key:"like",content: movie =>(<Like liked={movie.liked}onClick={() => this.props.onLike(movie)}/>)},
    {key:"delete",content: movie=>(<button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm"> Delete </button>)}
]

    render() {  
        const {movies,onDelete,onLike,onSort,sortColumn} = this.props;
        return (   
            <table className="table">
            <TableHeader columns= {this.columns} sortColumn = {sortColumn} onSort = {onSort}></TableHeader>
            <TableBody columns= {this.columns} data = {movies}></TableBody>   
            </table>
         );
    }
}

export default MoviesTable;