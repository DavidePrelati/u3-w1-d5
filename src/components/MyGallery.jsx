import React, { Component } from "react";
import { Col } from "react-bootstrap";

class MyGallery extends Component {
  state = { films: []};

  fetchGallery = () => {
    fetch(
      `http://www.omdbapi.com/?apikey=1cfb20a2&s=${this.props.name}`//il mio API per prendere i nomi dei film 
    )
      .then((response) => { //classico controllo della fetch
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella richiesta al server");
        }
      })
      .then((data) => {
        this.setState({ films: data.Search.slice(0, 6) }); // Prende solo i primi 6 film
      })
      .catch((err) => {
        console.log(err.message);
      })
  };
  componentDidMount() { //utilizzato per essere chiamato solo una volta, utile per rchiamare la fect
    this.fetchGallery();
  }
  render() {
    const {films} = this.state;
    
    return ( //creo la "griglia" peer i film
      
        <div className="d-flex flex-wrap justify-content-center">
          {films.map((film) => ( //array dei film
            <Col key={film.imdbID} className="mb-2 text-center px-1" sm="6" md="4" lg="2">
              <img className="img-fluid fixed-height" src={film.Poster} alt={film.Title} />
            </Col>
          ))}
        </div>
      
    );
  }
}

export default MyGallery;
