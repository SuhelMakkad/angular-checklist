export const routers = {
  home: ['/'],
  createChecklist: ['/checklist'],
  checklist: (id: string) => ['/checklist', id],
  createTodo: (checklistId: string) => ['/checklist', checklistId, 'todo'],
};
