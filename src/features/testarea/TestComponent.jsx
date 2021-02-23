import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAsync, decrementAsync } from './testActions'
import { Button } from 'semantic-ui-react'
import TestPlaceInput from './TestPlaceInput'
import SimpleMap from './SimpleMap'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { openModal } from '../modals/modalActions'

const mapState = state => ({
  data: state.test.data,
  loading: state.async.loading,
  elementName: state.async.elementName
})

const actions = {
  incrementAsync,
  decrementAsync,
  openModal
}

class TestComponent extends Component {
  render () {
    const {
      loading,
      data,
      incrementAsync,
      decrementAsync,
      openModal,
      elementName
    } = this.props
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is: {data}</h3>
        <Button
          name='increment'
          loading={elementName === 'increment' ? true : false}
          onClick={e => incrementAsync(e.target.name)}
          positive
          content='Increment'
        />
        <Button
          name='decrement'
          loading={elementName === 'decrement' ? true : false}
          onClick={e => decrementAsync(e.target.name)}
          negative
          content='Decrement'
        />
        <Button
          onClick={() => openModal('TestModal', { data: 42 })}
          color='teal'
          content='Open Modal'
        />
        <br />
        <br />
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)
