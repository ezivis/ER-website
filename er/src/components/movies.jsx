import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getMovies } from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import {paginate} from '../utilities/paginate';
import _ from 'lodash';
import Customers from "./customers";
import Rentals from './rentals';


class Movies extends Component {
  state = {
    movies: [],
    genre:[],
    currentPage:1,
    pageSize:4,
    sortColumn:{path:'title',order:'asc'},
  };

  componentDidMount(){
    const genres = [{_id:"",name:'All Genres'},...getGenres()]
    this.setState({movies:getMovies(),genre:genres});
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page =>{
    this.setState({currentPage : page});
  }

  handleGenreSelect =genre =>{
    this.setState({selectedGenre:genre,currentPage:1});
  }

  handleSort = sortColumn =>{
    this.setState({sortColumn});
  }

  render() {
    const { length: count } = this.state.movies;
    const{pageSize,currentPage,movies:allMovies,selectedGenre,genre,sortColumn} = this.state;

    const filter = selectedGenre&&selectedGenre._id?allMovies.filter(m=>m.genre._id === selectedGenre._id):allMovies;

    const sorted =_.orderBy(filter,[sortColumn.path],sortColumn.order)

    const paginatedMovies = paginate(sorted,currentPage,pageSize);

    console.log(paginatedMovies);
    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <div className="row">
        <div className="col-3">
        <ListGroup
        items = {genre}
        onItemSelect= {this.handleGenreSelect}
        selectedItem = {this.state.selectedGenre}
        >
        </ListGroup>
        </div>

        <div className="col">   
        <p>Showing {filter.length} movies in the database.</p>

      <MoviesTable
      movies = {paginatedMovies}
      sortColumn = {sortColumn}
      onLike = {this.handleLike}
      onDelete = {this.handleDelete}
      onSort = {this.handleSort}
      ></MoviesTable>

      <Pagination
      itemCount = {filter.length}
      pageSize = {pageSize}
      currentPage = {currentPage}
      onPageChange = {this.handlePageChange}
      ></Pagination>
        </div>           
      </div> 
    );
  }
}

export default Movies;
