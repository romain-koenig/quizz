import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Players from './Components/Players';



class App extends Component {

  constructor(props) {
    super(props);
    this.playerRef = React.createRef()
    this.state = {
      players: []
    };
  }

  addPlayer = (event) => {
    event.preventDefault();

    const newPlayer = this.playerRef.current.value;
    console.log(newPlayer);
    if (newPlayer) {
      const players = this.state.players;
      players.push(newPlayer);
      this.setState({ players })
    }

    event.currentTarget.reset()
  }

  render() {

    return (
      <div className="container">

        <h1>Quizz night!</h1>
        <p>Inscription des joueurs</p>

        <Form onSubmit={this.addPlayer}>
          <Form.Group controlId="player">
            <Form.Label>Joueur : </Form.Label>
            <Form.Control type="test" placeholder="Nom du joueur" ref={this.playerRef} />
            <Form.Text className="text-muted">
              Veuillez taper votre nom / pseudo
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Ajouter
          </Button>
        </Form>
        <Players players={this.state.players}/>
      </div >

    );
  }
}
export default App;
