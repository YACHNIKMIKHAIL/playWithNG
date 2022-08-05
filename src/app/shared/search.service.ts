import {Injectable} from "@angular/core";

export interface ISearch {
  string: string,
  isDone: boolean
}

@Injectable({providedIn: 'root'})
export class SearchService {

  constructor() {
  }

  public search: ISearch = {string: "", isDone: false}
}
