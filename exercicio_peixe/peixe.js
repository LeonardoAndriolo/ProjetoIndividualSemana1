var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    this.load.image('logo', 'assets/logo-inteli_branco.png');

    this.load.image('peixe', 'assets/peixes/peixe_tilapia.png');

    this.load.image('poseidon', 'assets/poseidon.png');

    this.load.image('bubbles', 'assets/bubbles.png');

}

function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(330, 400, 'poseidon').setScale(0.6);

    this.add.image(680, 525, 'logo').setScale(0.5);

    bubbles = this.add.image(500, 300, 'bubbles').setScale(0.1);
    
    peixinho = this.add.image(400, 300, 'peixe')
                        .setScale(0.2)
                        .setOrigin(0.5, 0.5);
    
    peixinho.setFlip(true, false);
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
    bubbles.x = this.input.x + 60;
    bubbles.y = this.input.y - 30;
}