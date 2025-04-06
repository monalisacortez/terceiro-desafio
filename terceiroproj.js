class heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
      this.nomeHeroi = nomeHeroi
      this.idadeHeroi = idadeHeroi
      this.tipoHeroi = tipoHeroi
        }
        escrever(){
          console.log(`O herói se chama: ${this.nomeHeroi}, tem ${this.idadeHeroi} anos, e é ${this.tipoHeroi}` )
        }
  }
  
  let dadosHeroi = new heroi("Batmona", "23", "guerreira")
  
    switch (dadosHeroi.tipoHeroi){
      case "mago":
        console.log(ataque = "magia");
        break;
      case "guerreira":
        (ataque = "espada");
        break;
      case "monge":
        console.log(ataque = "artes marciais");
        break;
      case "ninja":
        console.log(ataque = "shuriken");
        break;
    }
   
  
  
  dadosHeroi.escrever()
  
  console.log("Como é " + dadosHeroi.tipoHeroi + ", atacou usando " + ataque)
  
  
  
