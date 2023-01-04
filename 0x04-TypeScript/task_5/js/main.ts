interface MajorCredits {
  credits: number;
  <T>(brand: T): T;
}

interface MinorCredits {
  credits: number;
  <T>(brand: T): T;
}

function sumMajorCredits(ob1: MajorCredits, ob2: MajorCredits) {
  return ob1.credits + ob2.credits;
}

function sumMinorCredits(ob1: MinorCredits, ob2: MinorCredits) {
  return ob1.credits + ob2.credits;
}
