import React, { Component } from 'react'
import {
  Segment,
  Form,
  Header,
  Divider,
  Button,
  Label
} from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import DateInput from '../../../app/common/form/DateInput'
// import PlaceInput from "../../../app/common/form/";
import TextInput from '../../../app/common/form/TextInput'
import RadioInput from '../../../app/common/form/RadioInput'
import { addYears } from 'date-fns'
import moment from 'moment'

class BasicPage extends Component {
  render () {
    const { pristine, submitting, handleSubmit, updateProfile } = this.props
    return (
      <Segment>
        <Header dividing size='large' content='Basics' />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={8}
            name='displayName'
            type='text'
            component={TextInput}
            placeholder='Known As'
          />
          <Form.Group inline>
            <label>Gender: </label>
            <Field
              name='gender'
              type='radio'
              value='male'
              label='Male'
              component={RadioInput}
            />

            <Field
              name='gender'
              type='radio'
              value='female'
              label='Female'
              component={RadioInput}
            />
          </Form.Group>
          <Field
            peekNextMonth
            width={8}
            name='dateOfBirth'
            component={DateInput}
            placeholder='Date of Birth'
            dateFormat='dd  LLL yyyy'
            showYearDropdown
            showMonthDropDown
            dropDownMode='select'
            maxDate={addYears(new Date(), -18)}
            // maxDate={moment().subtract(18, 'years')}
            // minDate={moment(minDate).toDate()}
          />
          <Field
            name='city'
            placeholder='Home Town'
            options={{ types: ['(cities)'] }}
            label='Female'
            component={TextInput}
            width={8}
          />
          <Divider />
          <Button
            disabled={pristine || submitting}
            size='large'
            positive
            content='Update Profile'
          />
        </Form>
      </Segment>
    )
  }
}

export default reduxForm({
  form: 'userProfile',
  enableReinitialize: true,
  destroyOnUnmount: false
})(BasicPage)
