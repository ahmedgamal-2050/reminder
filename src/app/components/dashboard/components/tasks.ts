export interface Task {
  id: number,
  taskName: string,
  pinned: boolean,
  archived: boolean,
  deleted: boolean,
  reminder?: Date,
  category?: string,
  done: boolean,
  showMenu: boolean,
  dateStatus?: string,
  taskColor?: string
  colorMenu?: boolean,
}
