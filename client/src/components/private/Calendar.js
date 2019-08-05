// https://fullcalendar.io/docs/react // NOT DONE

import React from 'react'
import { Button, Modal, ModalBody, Row, Card, CardHeader } from "reactstrap";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import API from "../../utils/API";
import './main.scss' // webpack must be configured to do this

export default class Calendar extends React.Component {
   constructor(props) {
    super(props)


 this.calendarComponentRef = React.createRef()
  this.state = {
    events: 
    [{
     
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
    eventToSave: {
      repairType: "",
      title: "",
      startDate: "", // need to parse before putting into events array
      endDate: "",
      startTime: "",
      endTime: "",
      cost: 0,
      priority: "",
      status: "",
      isVendor: false,
      vendor: "",
      notes: "",
      editable: true,
    },
    modal: false,
  };

 this.handleFormSubmit = this.handleFormSubmit.bind(this);
 this.handleInputChange = this.handleInputChange.bind(this);
} 
  
     /*  this.handleSaveBook = this.handleSaveBook.bind(this);
     
      
    } */
    
    toggle = () => {
      this.setState(prevState => ({
        modal: !prevState.modal,
      }));
    };

    handleDateClick = (arg) => {
  //    console.log(this.props.user_id);  // working
      this.setState(prevState => ({
        modal: !prevState.modal,
      })
      );
      // eslint-disable-next-line no-restricted-globals
    //  if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {  // Need a form in a modal here.
     /*    console.log(this.state.events);
        this.setState({  // add new event data
          events: this.state.events.concat({ // creates a new array
            title: arg.title,
            start: arg.start,
            end: arg.end,
            editable: true
          }) */
  //      })
    //  }
    }

    handleCheck = () => {
      this.setState({ isVendor: !this.state.isVendor });
    };

    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
        
      // Updating the input's state
      this.setState({
        eventToSave: {
        [name]: value,
        }
      });
      console.log(this.state.eventToSave);  // Not working for dropdowns?
    };

    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      
      let newEvent = {
        repairType: this.state.eventToSave.repairType,
        title: this.state.eventToSave.title,
        cost: this.state.eventToSave.cost,
        priority: this.state.eventToSave.priority,
        status: this.state.eventToSave.status,
        startDate: this.state.eventToSave.startDate,
        endDate: this.state.eventToSave.endDate,
        startTime: this.state.eventToSave.startTime,
        endTime: this.state.eventToSave.endTime,
        isVendor: this.state.eventToSave.isVendor,
        vendor: this.state.eventToSave.vendor,
        notes: this.state.eventToSave.notes,
        editable: true,                         // This is the only thing being pushed to the DB.
      }
      API.saveRepair(newEvent)
          .then(newEvent => {
            console.log(newEvent);
          })
          .catch(err => console.log(err));

      API.saveEvent(newEvent)
      .then(newEvent => {

        this.setState({ 
          events: this.state.events.concat({ // creates a new array
            title: newEvent.title,
            start: newEvent.start,
            end: newEvent.end,
            editable: true
          })
        });
        this.toggle();
      })
      .catch(err => console.log(err));
      
      
      
      
    };

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
    timeZone= "UTC"
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

      <div>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                <Button
                  className="ml-auto"
                  color="danger"
                  onClick={this.toggle}
                >
                  x
                </Button>
                <ModalBody>
                <form>
                <div className="form-group">
                  <label htmlFor="repairType">Type</label>
                  <select
                    className="form-control"
                    id="repairTypeSelect"
                    value={this.state.eventToSave.repairType}
                    name="repairType"
                    onChange={this.handleInputChange}
                  >
                    <option>Update</option>
                    <option>Repair</option>
                    <option>Maintenance</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="repairDescription">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="repairDescriptionInput"
                    placeholder="mow grass"
                    value={this.state.eventToSave.title}
                    name="repairDescription"
                    onChange={this.handleInputChange}
                  />
                  </div>
                    <div className="form-group">
                      <label htmlFor="start-date-input">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="start-date-input"
                    value={this.state.eventToSave.startDate}
                    name="startDate"
                    onChange={this.handleInputChange}
                    />
                 </div>
                 <div className="form-group">
                      <label htmlFor="end-date-input">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="end-date-input"
                    value={this.state.eventToSave.endDate}
                    name="endDate"
                    onChange={this.handleInputChange}
                    />
                 </div>
                 <div className="form-group">
                  <label htmlFor="start-time-input">Start Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="start-time-input"
                    value={this.state.eventToSave.startTime}
                    name="startTime"
                    onChange={this.handleInputChange}
                    />                  
                </div>
                <div className="form-group">
                  <label htmlFor="end-time-input">End Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="end-time-input"
                    value={this.state.eventToSave.endTime}
                    name="endTime"
                    onChange={this.handleInputChange}
                    />                  
                </div>
                <div className="form-group">
                  <label htmlFor="repairCost"> Repair Cost</label>
                  <input
                    type="number"
                    className="form-control"
                    id="repairCostInput"
                    placeholder="$35"
                    value={this.state.eventToSave.cost}
                    name="repairCost"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="repairPriority">Repair Priority</label>
                  <select
                    className="form-control"
                    id="repairPrioritySelect"
                    value={this.state.eventToSave.priority}
                    name="repairPriority"
                    onChange={this.handleInputChange}
                  >
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="repairStatus">Repair Status</label>
                  <select
                    className="form-control"
                    id="repairStatusSelect"
                    value={this.state.eventToSave.status}
                    name="repairStatus"
                    onChange={this.handleInputChange}
                  >
                    <option>Thinking about it!</option>
                    <option>Getting Bids</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="isVendor">Assign a Contractor/Vendor? </label>
                    </div>
                    <div className="col-4">
                      <input
                        type="checkbox"
                        checked={this.state.eventToSave.isVendor}
                        onChange={this.handleCheck}
                      />
                    </div>
                  </div>
                </div>

                {this.state.isVendor ? (
                  <div className="form-group">
                    <label htmlFor="repairVendor" />
                    <select
                      className="form-control"
                      id="repairVendorSelect"
                      value={this.state.eventToSave.vendor}
                      name="repairVendor"
                      onChange={this.handleInputChange}
                    >
                      <option>Vendor 1</option>
                      <option>Vendor 2</option>
                    </select>
                  </div>
                ) : (
                  <p />
                )}

                <div className="form-group">
                  <label htmlFor="repairNotes">Additional Notes/Instruction</label>
                  <textarea
                    className="form-control"
                    id="repairNotesInput"
                    rows="3"
                    value={this.state.eventToSave.notes}
                    name="repairNotes"
                    onChange={this.handleInputChange}
                  />
                </div>

                {/* // If we can get calendar then we can work on this                 <div className="form-group">
                  <label for="isRecurring">Is this recurring?</label>
                  <select
                    className="form-control"
                    id="isRecurringSelect"
                    value={this.state.isRecurring}
                    name="isRecurring"
                    onChange={this.handleInputChange}
                  >
                    <option>Yes</option>
                    <option>No, I do this myself</option>
                  </select>
                </div> */}

                {/* // If we can get bids working then we can work on this //
               <div className="form-group">
                <label for="vendor">Add bids/receipts</label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                  />
                  <label className="custom-file-label" for="customFile">
                    Choose file
                  </label>
                </div>
              </div> */}

                <button
                  onClick={this.handleFormSubmit}
                  className="btn btn-block btn-success mt-3"
                >
                  Add {this.state.eventToSave.repairType}
                </button>
              </form>
                </ModalBody>
              </Modal>
            </div>
    </div>
  )
}

}