const router = require("express").Router();
var axios = require("axios");
var parseString = require("xml2js").parseString;

require("dotenv").config();

// @ Get - request for distances from Google
module.exports = function() {
  // router.get("/api/zillow/:address/:zip", function (req, res) {
  router.route("/").get(function(req, res) {
    // const address = req.params.address;
    // const zip = req.params.zip;
    res.json("this is working");

    const address = "3113%20Jamestown%20Drive";

    const zip = 75150;
    const key = process.env.ZWID;
    const url = `https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${key}&address=${address}&citystatezip=${zip}`;
    axios
      .get(url)
      .then(function(req, response) {
        console.log(response);
        convertToJSON(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    function convertToJSON(xml) {
      parseString(xml, function(err, result) {
        // console.log(JSON.stringify(result, null, 2));
        const propData =
          result["SearchResults:searchresults"].response[0].results[0].result;
        console.log("\n====================================");
        console.log("\t Basic Search Results");
        console.log("====================================\n");
        console.log("Year Built:", propData[0].yearBuilt[0]);
        console.log("Lot Size:", propData[0].lotSizeSqFt[0]);
        console.log("Square Footage:", propData[0].finishedSqFt[0]);
        console.log("Bedrooms:", propData[0].bedrooms[0]);
        console.log("Bathrooms:", propData[0].bathrooms[0]);
        console.log("Tax Assessment: $" + propData[0].taxAssessment[0]);
        console.log("Year:", propData[0].taxAssessmentYear[0]);
        console.log("Zestimate: $" + propData[0].zestimate[0].amount[0]._);
        console.log(
          "Zestimate Low:",
          propData[0].zestimate[0].valuationRange[0].low[0]._
        );
        console.log(
          "Zestimate High:",
          propData[0].zestimate[0].valuationRange[0].high[0]._
        );
        console.log("Links:", propData[0].links[0].homedetails[0]);
        console.log("\n\n");
      });
    }
  });
};
