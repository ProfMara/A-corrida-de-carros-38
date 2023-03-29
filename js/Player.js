class Player {
  constructor() {
    this.nome = null;
    this.indice = null;
    this.posX = 0;
    this.posY = 0;
  }

  addPlayer() {
    var playerindice = "players/player" + this.indice;

    if (this.indice === 1) {
      this.posX = width / 2 - 100;
    } else {
      this.posX = width / 2 + 100;
    }

    database.ref(playerindice).set({
      nome: this.nome,
      posX: this.posX,
      posY: this.posY,
    });
  }

  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.indice);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.posX = data.posX;
      this.posY = data.posY;
    });
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

    update(){
      var playerRef = database.ref("players/player"+this.indice);
      playerRef.update({
        posX:this.posX,
        posY:this.posY
      })

    }

  
  
}
