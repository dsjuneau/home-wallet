
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
}

};
