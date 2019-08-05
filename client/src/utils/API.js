
import axios from "axios";


export default {  

 /*   // Google Books API Call //
  callEvents: function (term) {
    return axios.post("/api/books/search", term);
  }, */
  
  // Saves a book to the database
  saveEvent: function(eventData) {
    console.log("saveEvent axios: " + eventData);
    return axios.post("/api/events", eventData);
  },

  //  Gets all books from database
  getEvents: function() {
    return axios.get("/api/events");
  },
    // Gets the book with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the book with the given id
  deleteEvent: function(id) {
    console.log("from deleteEvent: " + id);
    return axios.delete("/api/events/" + id);
  },

  saveRepair: function(repairData) {
    console.log("saveRepair axios: " + repairData);
    return axios.post("/api/repairs", repairData);
  },

  //  Gets all books from database
  getRepairs: function() {
    return axios.get("/api/repairs");
  },
    // Gets the book with the given id
  getRepair: function(id) {
    return axios.get("/api/repairs/" + id);
  },
  // Deletes the book with the given id
  deleteRepair: function(id) {
  console.log("from deleteRepair: " + id);
  return axios.delete("/api/repairs/" + id);
  }

};
