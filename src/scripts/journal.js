
import API from "./data.js"
import renderToDom from "./entriesDOM.js"
import newJournalEntry from "./entryCreation.js"


API.getJournalEntries().then(renderToDom)

const saveButton = document.querySelector("#saveButton")


const entryEdit = id => {
    const entryEditObj = {
       date: document.querySelector("#journalDate").value,
       topic: document.querySelector("#conceptsCovered").value,
       entry: document.querySelector("#journalEntry").value,
       mood: document.querySelector("#feeling").value
    }

    API.editJournalEntries(entryEditObj, id)
       .then(() => (document.getElementById("entryId").value = ""))
       .then(() =>API.getJournalEntries().then(renderToDom))
       
    }

saveButton.addEventListener("click", () => {
    const date = document.querySelector("#journalDate").value 
    const topic = document.querySelector("#conceptsCovered").value
    const content = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#feeling").value
    const entryId = document.getElementById("entryId").value

    if (date === "" || topic === "" || content === "" || mood === "") {
        alert("NO POST FOR YOU!")
        
    } else if (entryId !== "") {
        entryEdit(entryId)
        clearForm()
    }
    
    else {
        const entryCreationObj = newJournalEntry(date, topic, content, mood)
        API.createNewEntry(entryCreationObj).then(() => {
            API.getJournalEntries().then(renderToDom)
        })
        clearForm()
    }

})
const hiddenEntryId = document.querySelector("#entryId")
    const entryDateInput = document.querySelector("#journalDate")
    const entryTopicInput = document.querySelector("#conceptsCovered")
    const entryJournalInput = document.querySelector("#journalEntry")
    const entryMoodInput = document.querySelector("#feeling")
const repopulateForm = entryId => {
    
    fetch(`http://localhost:3000/entries/${entryId}`)
    .then(entries => entries.json())
    .then(entry => {
        hiddenEntryId.value = entry.id,
        entryDateInput.value = entry.date,
        entryTopicInput.value = entry.topic,
        entryJournalInput.value = entry.entry,
        entryMoodInput.value = entry.mood })
    }

    function clearForm() {
        entryDateInput.value = ""
        entryTopicInput.value = ""
        entryJournalInput.value = ""
        entryMoodInput.value = ""
        hiddenEntryId.value = ""
        
      }
const entryOutputContainer = document.querySelector(".entryLog")

entryOutputContainer.addEventListener("click", (event) => {
    
        if (event.target.id.startsWith("edit--")) {
          const entryEditId = event.target.id.split("--")[1]
          
            repopulateForm(entryEditId) 

            } if (event.target.id.startsWith("delete--")) {
             const entryId = event.target.id.split("--")[1]
             API.deleteJournalEntries(entryId)
    
             .then(getAndRenderAllEntries)
     }
   

    function getAndRenderAllEntries() {
        entryOutputContainer.innerHTML = ""
        API.getJournalEntries().then(renderToDom)
        }
   

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
)})})
