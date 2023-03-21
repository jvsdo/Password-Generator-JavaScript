function generatePassword(length, easyToSay, easyToRead, allCharacters, uppercase, lowercase, numbers, symbols) {
    const easyToSayChars = "aeiou";
    const easyToReadChars = "bcdfghjklmnpqrstvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+{}|[]<>?`~-=[]\;',./";

    let charset = "";

    if (easyToSay) {
        charset += easyToSayChars;
    }

    if (easyToRead) {
        charset += easyToReadChars;
    }

    if (allCharacters) {
        charset += uppercaseChars + lowercaseChars + numbersChars + symbolsChars;
    } else {
        if (uppercase) charset += uppercaseChars;
        if (lowercase) charset += lowercaseChars;
        if (numbers) charset += numbersChars;
        if (symbols) charset += symbolsChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

const passwordLengthInput = document.getElementById("password-length");
const passwordLengthValue = document.getElementById("password-length-value");
const easyToSayInput = document.getElementById("easy-to-say");
const easyToReadInput = document.getElementById("easy-to-read");
const allCharactersInput = document.getElementById("all-characters");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const generatePasswordButton = document.getElementById("generate-password");
const passwordInput = document.getElementById("password");

passwordLengthInput.addEventListener("input", () => {
    passwordLengthValue.textContent = passwordLengthInput.value;
});

generatePasswordButton.addEventListener("click", () => {
    const passwordLength = parseInt(passwordLengthInput.value, 10);
    const easyToSay = easyToSayInput.checked;
    const easyToRead = easyToReadInput.checked;
    const allCharacters = allCharactersInput.checked;
    const uppercase = uppercaseInput.checked;
    const lowercase = lowercaseInput.checked;
    const numbers = numbersInput.checked;
    const symbols = symbolsInput.checked;

    const password = generatePassword(passwordLength, easyToSay, easyToRead, allCharacters, uppercase, lowercase, numbers, symbols);
    passwordInput.value = password;
});

// Atualize o valor inicial do output para a senha
passwordLengthValue.textContent = passwordLengthInput.value;