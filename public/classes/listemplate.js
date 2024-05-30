export class MylistTemplate {
    constructor(container) {
        this.container = container;
    }
    render(doc, heading, pos) {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        h4.innerText = heading;
        p.innerText = doc.format();
        li.append(h4);
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
