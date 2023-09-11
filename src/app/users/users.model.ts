export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}



export interface ResponseUsers {
  name: string;
  job: string;
  id: string;
  createdAt: string;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

// ---------------------------Modelos Create---------------------------
export interface RequestCreate {
  name: string;
  job: string;
}

export interface ResponseCreate {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}
// -------------------GET Single User-----------------------------------------
export interface ResponseUser {
  data: User
  support: Support
}

// ---------------------------Modelos Update---------------------------

export interface RequestUpdate {
  name: string;
  job: string;
}

export interface ResponseUpdate {
  name: string;
  job: string;
  updateAt: string;
}

