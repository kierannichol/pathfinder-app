export default class Description {

  static empty(): Description {
    return this.of("");
  }

  static of(text: string): Description {
    return new Description(text, {});
  }

  constructor(public readonly text: string,
              public readonly sections: {[label:string]: string}) {
  }
}