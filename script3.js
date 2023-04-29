class Running{
  aplikasi;
  status = 'belum dijalankan'

  constructor(aplikasi){
    this.aplikasi = aplikasi;    
  }

  get status(){
    return this.status
  }

  set statusBaru(statusBaru){
    this.status = statusBaru
  }

  statusAplikasi(){
    console.log(`${this.aplikasi} ${this.status}`)
  }
}

const Kalkulator = new Running('Kalkulator')
Kalkulator.statusAplikasi()

Kalkulator.statusBaru = 'sedang dijalankan'
Kalkulator.statusAplikasi()
