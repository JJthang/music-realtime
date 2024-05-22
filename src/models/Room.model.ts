export interface itemUser {
  _id: number;
  fullName: string;
  image: string;
}
export interface roomsIf {
  _id: string;
  nameRoom: string;
  password: string;
  users: itemUser[];
}
