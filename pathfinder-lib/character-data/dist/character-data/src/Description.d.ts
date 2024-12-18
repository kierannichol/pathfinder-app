export default class Description {
    readonly text: string;
    readonly sections: {
        [label: string]: string;
    };
    static empty(): Description;
    static of(text: string): Description;
    constructor(text: string, sections: {
        [label: string]: string;
    });
}
