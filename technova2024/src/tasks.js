export const COLUMN_NAMES = {
   DO_IT: 'To Do',
   IN_PROGRESS: 'In Progress',
   DONE: 'Done',
}

const { DO_IT, IN_PROGRESS, DONE } = COLUMN_NAMES;
export const tasks = [
   { id: 1, name: 'Item 1', column: DO_IT },
   { id: 2, name: 'Item 2', column: DO_IT },
   { id: 3, name: 'Item 3', column: IN_PROGRESS },
   { id: 4, name: 'Item 4', column: DONE },
];