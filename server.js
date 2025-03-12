const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors()); // Enables CORS for all routes

app.get("/api/swiggy", async (req, res) => {
    try {
        const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null", {
            headers: { "User-Agent": "Mozilla/5.0" } // Mimic a browser request
        });
        res.json(response.data); //here we are sending data inside the response. Then why we are again looking for data in Body.js?
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(5000, () => console.log("Proxy server running on port 5000"));
