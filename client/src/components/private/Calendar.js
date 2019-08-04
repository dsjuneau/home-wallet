// https://fullcalendar.io/docs/react // NOT DONE

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

import './main.scss' // webpack must be configured to do this

export default class Calendar extends React.Component {

  calendarComponentRef = React.createRef()
  state = {
    events: 
    [{
      title: "Mow Lawn",
      start: "2019-08-03T12:30:00Z",
      end: "2019-08-03T1:30:00Z",
      editable: true
    },
    {
      title: "Repair Fence",
      start: "2019-08-07",
      end: "2019-08-09",
      editable: true
    },
    {
      title: "Change Air Filter",
      start: "2019-08-09",
      end: "2019-08-09",
      editable: true
    },
  ],
    search: "",
    eventToSave: {}
  };

  /* constructor(props) {
    super(props)

    this.state = {
        events: [],
        search: "",
        eventToSave: {}
      };
     /*  this.handleSaveBook = this.handleSaveBook.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    } */
    

    handleDateClick = (arg) => {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {  // Need a form in a modal here.
        console.log(this.state.events);
        this.setState({  // add new event data
          events: this.state.events.concat({ // creates a new array
            title: arg.title,
            start: arg.start,
            end: arg.end,
            editable: true
          })
        })
      }
    }

/*   gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi()
    calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  } */



/*   loadEvents = (start, end, timezone, callback) => {
      $.axios({
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
      <h3>Click a date/time to add an event</h3>
      <div className='calendar-container'>
        <div className='calendar-top'>
       {/*    <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp; */}
        </div>
        <div className='calendar'></div>
    <FullCalendar 
    defaultView="dayGridMonth"
    dateClick={this.handleDateClick}
    
    header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
    plugins={[ dayGridPlugin, interactionPlugin ]}
    ref={ this.calendarComponentRef }
    events={ this.state.events }
    >

    </FullCalendar>

  
      </div>
    </div>
  )
}

}