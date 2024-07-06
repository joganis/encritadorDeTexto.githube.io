function encryptText() {
    const message = document.getElementById('message').value.toLowerCase();
    if (message && /^[a-z\s]+$/.test(message)) {
        const encryptionMap = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        
        let encryptedMessage = '';
        for (let char of message) {
            encryptedMessage += encryptionMap[char] || char;
        }
        
        document.getElementById('result').value = encryptedMessage;
        document.getElementById('no-message').style.display = 'none';
        document.getElementById('copy-button').style.display = 'block';
        document.getElementById('result').removeAttribute('readonly');
    } else {
        alert('Por favor, ingresa solo letras minúsculas y espacios.');
    }
}


function decryptText() {
    const message = document.getElementById('message').value.toLowerCase();
    if (message && /^[a-z\s]+$/.test(message)) {
        const decryptionMap = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };

        let decryptedMessage = message;
        for (let key in decryptionMap) {
            decryptedMessage = decryptedMessage.split(key).join(decryptionMap[key]);
        }
        
        document.getElementById('result').value = decryptedMessage;
        document.getElementById('no-message').style.display = 'none';
        document.getElementById('copy-button').style.display = 'block';
        document.getElementById('result').removeAttribute('readonly');
    } else {
        alert('Por favor, ingresa solo letras minúsculas y espacios.');
    }
}


function copyText() {
    const result = document.getElementById('result');
    result.select();
    document.execCommand('copy');
}

function toggleImage() {
    const message = document.getElementById('message').value;
    const result = document.getElementById('result').value;
    if (!message && !result) {
        document.getElementById('no-message').style.display = 'flex';
        document.getElementById('copy-button').style.display = 'none';
    } else {
        document.getElementById('no-message').style.display = 'none';
        document.getElementById('copy-button').style.display = 'block';
    }
}
