
import API from "./data.js"
import renderToDom from "./entriesDOM.js"
import newJournalEntry from "./entryCreation.js"

API.getJournalEntries().then(renderToDom)

const saveButton = document.querySelector("#saveButton")



saveButton.addEventListener("click", () => {
    const date = document.querySelector("#journalDate").value 
    const topic = document.querySelector("#conceptsCovered").value
    const content = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#feeling").value

    if (date === "" || topic === "" || content === "" || mood === "") {
        alert("NO POST FOR YOU!")
    } else {
        const entryCreationObj = newJournalEntry(date, topic, content, mood)
        API.createNewEntry(entryCreationObj)
    }

})

// Invoke the factory function, passing along the form field values



// Use `fetch` with the POST method to add your entry to your API



