class Todo {
    constructor(pavadinimas) {
        this.name = pavadinimas;
        this.list = [];
    }

    summary(){
        const text = `${this.name} sarase yra ${this.list.length} uzduociu.`
        console.log(text);
    }

    add(text) {
        this.list.push({
            text: text,
            complete: false
        });
    }
    edit(index, newText) {
        this.list[index] = newText;
    }

    // uzduoties pasalinimas
    remove(index){
        const filtered = [];

        for (let i=0; i<this.list.length; i++){
            if (i !== index) {
                filtered.push(this.list[i]);
            }
        }

        //logic

        this.list = unfiltered;
    }
    print (list) {
        const printableList = list ? list : this.list;
        console.table(printableList);
    }

    taskCompleted(index) {
        this.list[index].completed = true;
    }

    printCompletedOnly() {
        const completed = [];

        for (const task of this.list) {
            if (task.completed) {
                completed.push(task);
            }
        }
        this.print(completed);
    }
}

export { Todo }