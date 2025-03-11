interface AttackTargetState {
  ac: number;
  reflex: number;
  fort: number;
  will: number;
}

export class AttackTarget {
  static readonly DEFAULT = new AttackTarget({
    ac: 30,
    reflex: 15,
    fort: 15,
    will: 15
  });

  get ac(): number {
    return this.state.ac;
  }

  get reflex(): number {
    return this.state.reflex;
  }

  get fort(): number {
    return this.state.fort;
  }

  get will(): number {
    return this.state.will;
  }

  changeAc(ac: number): AttackTarget {
    return new AttackTarget({...this.state, ac: ac});
  }

  changeReflex(reflex: number): AttackTarget {
    return new AttackTarget({...this.state, reflex: reflex});
  }

  changeFort(fort: number): AttackTarget {
    return new AttackTarget({...this.state, fort: fort});
  }

  changeWill(will: number): AttackTarget {
    return new AttackTarget({...this.state, will: will});
  }

  private constructor(private readonly state: AttackTargetState) {
  }
}