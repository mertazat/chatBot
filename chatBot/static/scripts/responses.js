function getBotResponse(input) {
    // Simple responses
    if (input == "merhaba") {
        return "Sana da merhaba";
    } else if (input == "güle güle" || "bay bay") {
        return "Görüşürüz!";
    } else {
        return "Lütfen başka bir şey deneyiniz!";
    }
}