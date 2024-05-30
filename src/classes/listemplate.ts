import { hasFormatter } from "../interfaces/HasFormatter";

export class MylistTemplate {
    constructor(private container: HTMLUListElement){}

    render(doc: hasFormatter, heading: string, pos?: 'start' | 'end') {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        h4.innerText = heading;
        p.innerText = doc.format();
        li.append(h4)
        li.append(p)
        
        if (pos === "start") {
            this.container.prepend(li);
        }
        else{
            this.container.append(li);
        }
    }
}