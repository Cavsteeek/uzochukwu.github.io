function redactText() {
    var originalText = document.getElementById("originalText").value;
    var wordsToRedact = document.getElementById("wordsToRedact").value.split(" ");
    var redactedText = originalText;

    wordsToRedact.forEach(function (word) {
        var regex = new RegExp("\\b" + word + "\\b", "gi");
        redactedText = redactedText.replace(regex, "*".repeat(word.length));
    });

    document.getElementById("redactedText").textContent = redactedText;

    // Calculate stats
    var wordsScanned = originalText.split(/\s+/).length;
    var wordsMatched = wordsToRedact.length;
    var charactersScrambled = redactedText.length;
    var stats = "Words scanned: " + wordsScanned + "<br>" +
        "Words matched: " + wordsMatched + "<br>" +
        "Characters scrambled: " + charactersScrambled;
    document.getElementById("stats").innerHTML = stats;
}

function resetForm() {
    document.getElementById("originalText").value = "";
    document.getElementById("wordsToRedact").value = "";
    document.getElementById("redactedText").textContent = "";
    document.getElementById("stats").textContent = "";
}

