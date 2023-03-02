import Alignment from "../model/character/Alignment";

const Alignments = {

  all: [
      new Alignment('alignment:cg', "Chaotic Good"),
      new Alignment('alignment:cn', "Chaotic Neutral"),
      new Alignment('alignment:ce', "Chaotic Evil"),
      new Alignment('alignment:ng', "Neutral Good"),
      new Alignment('alignment:n', "Neutral"),
      new Alignment('alignment:ne', "Neutral Evil"),
      new Alignment('alignment:lg', "Lawful Good"),
      new Alignment('alignment:ln', "Lawful Neutral"),
      new Alignment('alignment:le', "Lawful Evil"),
  ],

  find: (id: string): Alignment|undefined => {
      return Alignments.all.find(alignment => alignment.id === id);
  }
}

export default Alignments;