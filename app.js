const base = require("airtable").base("appsG4CYwtZ7gNOik")
const express = require("express")
const path = require("path")

const app = express()
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "."))

//Now pull the data down from Airtable
app.get("/", (req, res) => {
 (async () => {
    const records = await base("Business Hours")
      .select({ view: "Grid view" })
      .firstPage()
    res.render("page", {
      records,
    })
  })()
})
app.listen(3000, ()=> console.log("Server is in good shape Captain!"))