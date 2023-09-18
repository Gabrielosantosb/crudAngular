

export interface User {
  id: number;
  name: string;
  description: string;
  published: boolean;

}

export interface Support {
  url: string;
  text: string;
}

export interface ResponseUsers {
  name: string;
  description: string;
  id: string;
  data: User[];
  support: Support;
}


// ---------------------------Modelos Create---------------------------
export interface RequestCreate {
  name: string;
  description: string;
}

export interface ResponseCreate {
  name: string;
  description: string;
  id: string;

}
// -------------------GET Single User-----------------------------------------
export interface ResponseUser {
  data: User
  support: Support
}

// ---------------------------Modelos Update---------------------------

export interface RequestUpdate {
  name: string;
  description: string;
}

export interface ResponseUpdate {
  name: string;
  description: string;
}

