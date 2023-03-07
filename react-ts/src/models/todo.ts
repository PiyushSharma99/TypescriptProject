//We have ts extension in this file as
// we are not creating component here.

class Todo {
    id : string;
    text: string;

    constructor(todoText: string){
        this.id=new Date().toISOString();
        this.text = todoText;
    }
}

export default Todo;