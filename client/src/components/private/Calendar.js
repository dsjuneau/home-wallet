// https://fullcalendar.io/docs/react // NOT DONE

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './main.scss' // webpack must be configured to do this

export default class DemoApp extends React.Component {

  handleDateClick = (arg) => { // bind with an arrow function
      alert(arg.dateStr)
    }

render() {
  return (
      <div>
      <h3>Version 1</h3>
    <FullCalendar dateClick={this.handleDateClick} defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />

    {/* <h3>Version 2</h3>

    <FullCalendar
defaultView="dayGridMonth"
plugins={calendarPlugins}
weekends={false}
events={[
  { title: 'event 1', date: '2019-04-01' },
  { title: 'event 2', date: '2019-04-02' }
]}
/> */}

    </div>
  )
}

}