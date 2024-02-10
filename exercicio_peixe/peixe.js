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

var peixinho; // Test

function preload() {
    this.load.image('mar', 'assets/bg_ocean.gif');

    this.load.image('logo', 'assets/logo-inteli_branco.png');

    this.load.image('peixe', 'assets/peixes/peixe_tilapia.png');

    this.load.image('poseidon', 'assets/poseidon.png');

    this.load.image('bubbles', 'assets/bubbles.png');

    this.load.audio("main_theme", "assets/audio/water_prelude.mp3");

}

function create() {
    // Load music
    const main_theme = this.sound.add("main_theme", { volume: 0.4 });
    main_theme.play();

    // Load images
    this.add.image(400, 300, 'mar').setScale(1.6);
    this.add.image(330, 400, 'poseidon').setScale(0.6);
    this.add.image(680, 60, 'logo').setScale(0.6);
    bubbles = this.add.image(500, 300, 'bubbles').setScale(0.1);
    peixinho = this.add.image(400, 300, 'peixe')
                        .setScale(0.2)
                        .setOrigin(0.5, 0.5);
    peixinho.setFlip(true, false); // Set fish orientation
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
    bubbles.x = this.input.x + 60;
    bubbles.y = this.input.y - 30;
}