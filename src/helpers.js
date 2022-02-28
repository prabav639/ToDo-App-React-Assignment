import { db } from './db'

export function getAlltodosFromDB() {
    return db.todoapp.toArray().then((data) => {
        return data
    })
}

export function addtodosToDB(taskName, dueDate, assignedTo) {
    console.log(taskName, dueDate, assignedTo);
    db.todoapp.put({ taskName, dueDate, assignedTo },'readwrite')
        .then(() => true)
        .catch(err => {
            alert("Ouch... " + err)
        })
}