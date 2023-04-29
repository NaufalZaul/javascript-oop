class Superhero{
  nama;
  kekuatan;

  constructor(nama, kekuatan){
    this.nama = nama;
    this.kekuatan = kekuatan;
  }

  perkenalan(){
    console.log(`Perkenalkan saya ${this.nama} sya memiliki kekuatan ${this.kekuatan}`)
  }

  kekuatan(){
    return this.kekuatan
  }
}

const Superman = new Superhero('Superman', 'terbang dengan cepat')

Superman.perkenalan()