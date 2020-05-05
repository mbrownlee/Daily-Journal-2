/*
//const entries = []

//entries.push(journalEntry)


*/
import API from "./data.js"
import renderToDom from "./entriesDOM.js"

API.getJournalEntries().then(renderToDom)
