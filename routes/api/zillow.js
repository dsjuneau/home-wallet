const router = require("express").Router();
const axios = require("axios");
const parseString = require("xml2js").parseString;

require("dotenv").config();

// @ Get home data from Zillow

// router.get("/api/zillow/:address/:zip", function (req, res) {
router.route("/:address/:zip").get(function(req, res) {
  const address = req.params.address;
  const zip = req.params.zip;
  const key = process.env.ZWID;
  const url = `https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${key}&address=${address}&citystatezip=${zip}`;
  axios
    .get(url)
    .then(function(start) {
      return convertToJSON(start.data);
    })
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log("Unable to find", address, "in zip code", zip);
      res.json(error);
    });

  function convertToJSON(xml) {
    let details = {};
    parseString(xml, function(err, result) {
      propData =
        result["SearchResults:searchresults"].response[0].results[0].result;
      {
        propData[0].yearBuilt
          ? (details.yearbuilt = propData[0].yearBuilt[0])
          : (details.yearbuilt = "unknown");
      }
      {
        propData[0].lotSizeSqFt
          ? (details.lotSize = propData[0].lotSizeSqFt[0])
          : (details.lotSize = "not available");
      }
      {
        propData[0].finishedSqFt
          ? (details.gla = propData[0].finishedSqFt[0])
          : (details.gla = "not available");
      }
      {
        propData[0].bedrooms
          ? (details.bedrooms = propData[0].bedrooms[0])
          : (details.bedrooms = "not available");
      }
      {
        propData[0].bathrooms
          ? (details.bathrooms = propData[0].bathrooms[0])
          : (details.bathrooms = "not available");
      }
      {
        propData[0].taxAssessment
          ? (details.taxAssessment = propData[0].taxAssessment[0])
          : (details.taxAssessment = "not available");
      }
      {
        propData[0].taxAssessmentYear
          ? (details.taxYear = propData[0].taxAssessmentYear[0])
          : (details.taxYear = "no taxes here");
      }
      {
        propData[0].zestimate
          ? ((details.zestimate = propData[0].zestimate[0].amount[0]._),
            (details.zestimateHigh =
              propData[0].zestimate[0].valuationRange[0].high[0]._),
            (details.zestimateLow =
              propData[0].zestimate[0].valuationRange[0].low[0]._))
          : (details.zestimate = "no zestimate");
      }
      {
        propData[0].links
          ? (details.zillowLink = propData[0].links[0].homedetails[0])
          : (details.zillowLink = "www.zillow.com");
      }
    });
    return details;
  }
});
module.exports = router;
