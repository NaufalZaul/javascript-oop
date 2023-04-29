class Superhero{
  nama;
  kekuatan;

  constructor(nama, kekuatan){
    this.nama = nama;
    this.kekuatan = kekuatan;
  }

  perkenalan(){
    console.log(`Perkenalkan saya ${this.nama} saya memiliki kekuatan ${this.kekuatan}`)
  }

  kekuatan(){
    return this.kekuatan
  }
}


class Human extends Superhero{
  #umur;

  constructor(nama, kekuatan, umur){
    super(nama, kekuatan)
    this.umur = umur
  }

  perkenalan(){
    console.log(`Perkenalkan saya ${this.nama} saya memiliki kekuatan ${this.kekuatan} pada umur ${this.umur}`)
  }
}

const Batman = new Human('Batman', 'perancang strategi handal',21)
Batman.perkenalan()