const base = require("airtable").base("appsG4CYwtZ7gNOik")
const express = require("express")
const path = require("path")
const app = express()
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "."))
    app.set
  ; (async () => {
    const records = await base("Business Hours").select({ view: "Grid view", }).firstPage()
    for (const record of records) {
     console.log(record.get("Day"), record.get("Hours"));
    }
  })()
