export const COLUMN_NAMES = {
   DO_IT: 'To Do',
   IN_PROGRESS: 'In Progress',
   DONE: 'Done',
}

const { DO_IT, IN_PROGRESS, DONE } = COLUMN_NAMES;
export const tasks = [
   { id: 1, name: 'Wash dishes', column: DO_IT },
   { id: 2, name: 'Make ice', column: DO_IT },
   { id: 3, name: 'Buy milk', column: IN_PROGRESS },
   { id: 4, name: 'Clean', column: DONE },
];