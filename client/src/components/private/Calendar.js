// https://fullcalendar.io/docs/react // NOT DONE

import React from 'react'
import { Button, Modal, ModalBody, Row, Card, CardHeader } from "reactstrap";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';
import API from "../../utils/API";
import './main.scss' // webpack must be configured to do this

export default class Calendar extends React.Component {
   constructor(props) {
    super(props)


    this.calendarComponentRef = React.createRef()
    this.state = {
        events: [],
    //   search: "",
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
        
        modal: false,
        // detailModal: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    } 
  
    componentDidMount() {
        this.loadEvents();
    }

    loadEvents = () => { 
        
        API.getEvents()
        .then(events => {
    //        console.log(books);
            const eventList =  events.data.map(item => ({
                title: item.title,
                start: item.start,
                end: item.end,
                editable: item.editable 
            }))      
        /*  console.log("results of get in getBooks: " + JSON.stringify(books));  // working */
            this.setState({ 
            events: eventList,
            });
        })
        .catch(err => console.log(err));       
        };

    
    toggle = () => {
      this.setState(prevState => ({
        modal: !prevState.modal,
      }));
    };

    handleDateClick = (dateObj) => {
        const {date} = dateObj;
        const newEvents = this.state.events.filter (event => event.start === date);
        console.log("this.state.events: " + this.state.events);
        console.log("Date: " + date);
        console.log(newEvents);
    }
   
    handleNewEvent = (arg) => {                            // handleDateClick = 
  //    console.log(this.props.user_id);  // working
      this.setState(prevState => ({
        modal: !prevState.modal,
      })
      );
    }


    handleCheck = () => {
      this.setState({ isVendor: !this.state.isVendor });
    };


    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
           console.log(event.target);
      // Updating the input's state
      this.setState({
       
        [name]: value,
      
      });
    };

  

    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();

      //   Sample:  2018-06-01T12:30:00
      let parsedStartDate = this.state.startDate + "T" + this.state.startTime + ":00";
      let parsedEndDate = this.state.endDate + "T" + this.state.endTime + ":00";

      let momentDate = moment().format(parsedStartDate);
      console.log(momentDate);
      console.log(typeof momentDate);
   
      let newDateDate = new Date(parsedStartDate);
      console.log("newDateDate: " + newDateDate)

      
      let newRepair = {
        repairType: this.state.repairType,
        title: this.state.title,
        cost: this.state.cost,
        priority: this.state.priority,
        status: this.state.status,
        startDate: parsedStartDate,
        endDate: parsedEndDate,
        vendor: this.state.vendor,
        notes: this.state.notes,
      }

      let newEvent ={
        title: this.state.title,
        start: parsedStartDate,
        end: parsedEndDate,
        editable: true

      }
      API.saveRepair(newRepair)
          .then(newRepair => {
            console.log(newRepair);
          })
          .catch(err => console.log(err));

      API.saveEvent(newEvent)
      .then(newEvent => {
        this.toggle();
      })
      .catch(err => console.log(err));

      API.getEvents()
      .then(response => {
    //    console.log(response);
        this.setState({ 
            events: response.data
          });
      })
      .catch(err => console.log(err));

      this.setState({
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
      })


    };


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
      <button onClick={ this.handleNewEvent }><h3>Add Event</h3></button>&nbsp;
      <div className='calendar-container'>
        <div className='calendar-top'>
        </div>
        <div className='calendar'></div>
    <FullCalendar
    defaultView="dayGridMonth"
    dateClick={this.handleDateClick }
    /* this.handleDateClick */
    
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
                    value={this.state.repairType}
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
                    value={this.state.title}
                    name="title"
                    onChange={this.handleInputChange}
                  />
                  </div>
                    <div className="form-group">
                      <label htmlFor="start-date-input">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="start-date-input"
                    value={this.state.startDate}
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
                    value={this.state.endDate}
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
                    value={this.state.startTime}
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
                    value={this.state.endTime}
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
                    value={this.state.cost}
                    name="cost"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="repairPriority">Repair Priority</label>
                  <select
                    className="form-control"
                    id="repairPrioritySelect"
                    value={this.state.priority}
                    name="priority"
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
                    value={this.state.status}
                    name="status"
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
                        checked={this.state.isVendor}
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
                      value={this.state.vendor}
                      name="vendor"
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
                    value={this.state.notes}
                    name="notes"
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
                  Add
                </button>
              </form>
                </ModalBody>
              </Modal>
            </div>
    </div>
  )
}

}