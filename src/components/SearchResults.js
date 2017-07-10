/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import {Grid,
        Row,
        Col,
        Thumbnail,
        Button} from 'react-bootstrap'

import balloonImg from './img/baloons.jpg';
import './SearchResults.css'

export default class SearchResults extends React.Component {

  componentWillMount() {
    fetch(
      'http://localhost:3000/data/music.json'
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        events: data
      })
    ).catch(
      error => console.log(error.message)
    )
  }

  render() {
    return (
      <div className="mainresults">
      <Grid>
        <Row>
              { this.state === null ? <p>Fetching data ....</p> : null}
              {
                this.state !== null && this.state.events.slice(1,11).map(
                  event => (
                      <Col xs={12} md={6}>
                        <Thumbnail src={event.image} alt="242x200">
                          <h2>{event.first_name}</h2>
                          <p>{event.category}</p>
                          <p>
                            <Button bsStyle="primary">Zobacz szczegóły</Button>&nbsp;
                            <Button bsStyle="default">Dodaj do kalendarza</Button>
                          </p>
                        </Thumbnail>
                      </Col>
                  )
                )
              }
        </Row>
      </Grid>
      </div>
    )
  }
}