export interface actorDTO {
  name: string;
  date: Date;
  image?: string | any;
}

export interface actorCreationDTO {
  name: string;
  date: Date;
  image?: File;
}
