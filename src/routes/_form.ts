import {writable} from "svelte/store";
function greeter(person) { // writting person: string gives error
  return "Hello, " + person;
}
export class CRUD  {
  constructor() {
    this.er = writable("error");
  }


}
