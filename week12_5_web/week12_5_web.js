
function setup() {
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}

var choice;

function draw() {
    background(color(0xDE, 0xFA, 0x45));
    fill(color(0x45, 0x6F, 0xEA));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    if (choice == 3)
        rect(50, 200, 150, 2);
    text("牛排", 50, 50);
    text("炒飯", 50, 100);
    text("雞肉飯", 50, 150);
    text("飯糰", 50, 200);
    text("永和豆漿", 50, 250);
    
}

function mousePressed() {
    choice = int(random(5));
    // choice = ( choice + 1) % 3 ;
}

function initializeFields() {
    choice = -1;
}
