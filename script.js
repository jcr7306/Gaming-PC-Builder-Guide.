function showMessage() {

    let parts = [
        "CPU",
        "GPU",
        "Motherboard",
        "RAM",
        "Storage",
        "Power Supply"
    ];

    let message = "Let's start building your gaming PC!\n\n";
    message += "These are the main parts you'll need:\n\n";

    for(let i = 0; i < parts.length; i++){
        message += "- " + parts[i] + "\n";
    }

    alert(message);

}
