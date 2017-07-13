/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {
  Grid,
  Row,
  Col,
  Thumbnail,
  Button
} from 'react-bootstrap'
import './SearchResults.css'
import {fetchSearchResults} from '../state/searchresults'
import moment from 'moment'
import FontAwesome from 'react-fontawesome'
import categories from '../_utils/categories'

export default connect(
  state => ({
    searchresults: state.searchresults,
    location: state.searchFilters.location,
    searchDate: state.searchFilters.searchDate,
    searchPhrase: state.searchengine.searchPhrase,
    activeCategoryNames: state.categoryButtons.activeCategoryNames
  }),
  dispatch => ({
    fetchSearchResults: () => dispatch(fetchSearchResults())
  })
)(
  class SearchResults extends React.Component {

    componentWillMount() {
      this.props.fetchSearchResults()
    }

    render() {
      const {data, fetching, error} = this.props.searchresults
      return (
        <div className="mainresults">
          <Grid>
            <Row>
              { error === null ? null : <p>{error.message}</p> }
              { fetching === false ? null : <p>Fetching data...</p>}
              {
                data !== null && data.filter(
                  item => item.range < this.props.location
                ).filter(
                  item => moment(item.startdate).isAfter(
                    moment().add(this.props.searchDate, 'days')
                  )
                ).filter(
                  event => event.category.toLowerCase().includes(this.props.searchPhrase.toLowerCase()) || event.place.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
                ).filter(
                  event => this.props.activeCategoryNames.length === 0 ?
                    true :
                    this.props.activeCategoryNames.includes(
                      Object.keys(categories).find(key => categories[key] === event.category)
                      )
                ).map(
                  event => (
                    <Col xs={12} md={6}>
                      <Thumbnail src={event.image}>
                        <h2>Impreza: {event.category}</h2>
                          <h3>Kiedy: {event.startdate} | Godzina: {event.starttime}</h3>
                        <h4>Za ile wjazd: {event.cost} PLN</h4>
                        <p>{event.place} | {event.city}  </p>
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
)