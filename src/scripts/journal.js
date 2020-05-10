
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
        API.createNewEntry(entryCreationObj).then(() => {
            API.getJournalEntries().then(renderToDom)
        })
    }

})

const radioButton = document.getElementsByName("radio--mood")
console.log(radioButton, "radio")
radioButton.forEach(moodButton => {
    moodButton.addEventListener("click", event => {
    
    const mood = event.target.value
    API.getJournalEntries()
    .then(filteredEntries => {
        let filteredResults = filteredEntries.filter(entry => entry.mood === mood)
        renderToDom(filteredResults)
    })
}
) })