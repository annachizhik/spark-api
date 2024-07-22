export default interface ITask {
  title: string;
  description?: string;
  status: number;
  writing: string;
  parentId: string;
  createdAt: Date;
  editedAt: Date;
  deletedAt: Date;
  sortId: number;
}
