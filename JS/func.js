//-------------- Encryption and Decryption keys ------------ //
const encrypter = {'e':'enter', 'i':'imes','a':'ai', 'o':'ober', 'u':'ufat'};
const decrypter = {'enter':'e', 'imes':'i','ai':'a', 'ober':'o', 'ufat':'u'};
//----------------------------------------------------------//

//This function encrypts the word only if there is no uppercase letters
function encryptWord(){
    let text = document.getElementById("txtEnc").value;
    if (!/[A-Z]/g.test(text)){
        document.getElementById("texto").innerHTML=
            text.replace(/[aeiou]/g, toReplace => encrypter[toReplace]);
    } else{
        alert("Recuerde que el texto solo deben ser minúsculas!")
    }

}


function decryptWord(){
    let text = document.getElementById("txtEnc").value;
    console.log(text);
    document.getElementById("texto").innerHTML =
        text.replace(/enter|imes|ai|ober|ufat/g, toReplace => decrypter[toReplace]);
}
