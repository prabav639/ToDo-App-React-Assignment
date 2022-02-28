import Dexie from 'dexie';

export const db = new Dexie('todoappDB');

db.version(1).stores({
    todoapp: `
        id++,
        taskName,
        dueDate,
        assignedTo`,
});