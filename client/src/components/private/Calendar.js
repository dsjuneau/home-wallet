// https://fullcalendar.io/docs/react // NOT DONE

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './main.scss' // webpack must be configured to do this

export default class Calendar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        events: [],
        search: "",
        eventToSave: {}
      };
     /*  this.handleSaveBook = this.handleSaveBook.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this); */
    }


  handleDateClick = (arg) => { // bind with an arrow function
      alert(arg.dateStr)
    }

/*   loadEvents = (start, end, timezone, callback) => {
      $.ajax({
           url: ‘myxmlfeed.php’,
           dataType: ‘xml’,
           data: {
                           // our hypothetical feed requires UNIX timestamps
                          start: start.unix(),
                          end: end.unix()
          },
          success: function(doc) {
               var events = [];
                          $(doc).find(‘event’).each(function() {
                               events.push({
                                    title: $(this).attr(‘title’),
                                    start: $(this).attr(‘start’) // will be parsed
                    });
                        });
                       callback(events);
                    }
    });
 } */

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