
import axios from "axios";


export default {  

  
  // Saves a event to the database
  saveEvent: function(eventData) {
    console.log("saveEvent axios: " + JSON.stringify(eventData));
    return axios.post("/api/events", eventData);
  },

  //  Gets all events from database
  getEvents: function() {
    return axios.get("/api/events");
  },
    // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    console.log("from deleteEvent: " + id);
    return axios.delete("/api/events/" + id);
  },


  saveRepair: function(repairData) {
    console.log("saveRepair axios: " + JSON.stringify(repairData));
    return axios.post("/api/repairs", repairData);
  },

  //  Gets all repairs from database
  getRepairs: function() {
    return axios.get("/api/repairs");
  },

  // Gets the repair with the given id
  getRepair: function(id) {
    return axios.get("/api/repairs/" + id);
  },
  // Deletes the repair with the given id
  deleteRepair: function(id) {
  console.log("from deleteRepair: " + id);
  return axios.delete("/api/repairs/" + id);
  }

};
