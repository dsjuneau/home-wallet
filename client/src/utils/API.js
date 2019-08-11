
import axios from "axios";


export default {  

  
  // Saves a event to the database
  saveEvent: function(eventData) {
    console.log("saveEvent axios: " + JSON.stringify(eventData));
    return axios.post("/api/events", eventData);
  },

  // Modifies one event
  changeEvent: function(eventData) {
    return axios.put("/api/events/" + eventData.repairId, eventData);
  },

  //  Gets all events from database
  getEvents: function(id) {
    return axios.get("/api/events/user/" + id);
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
  getRepairs: function(id) {
    console.log("API.getRepairs: " + id);
    return axios.get("/api/repairs/user/" + id);
//    return axios.get("/api/repairs/");
  },
 
  // Gets the repair with the given id
  getRepair: function(id) {
    return axios.get("/api/repairs/" + id);
  },
  // Modifies one repair
  changeRepair: function(repairData) {
    return axios.put("/api/repairs/" + repairData.repairId, repairData);
  },
  // Deletes the repair with the given id
  deleteRepair: function(id) {
  console.log("from deleteRepair: " + id);
  return axios.delete("/api/repairs/" + id);
  }

};
