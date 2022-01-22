const encrypter = {'e':'enter', 'i':'imes','a':'ai', 'o':'ober', 'u':'ufat'};
const decrypter = {'enter':'e', 'imes':'i','ai':'a', 'ober':'o', 'ufat':'u'};


let word = 'gato';

word = word.replace(/[aeiou]/g, toReplace => encrypter[toReplace]);

console.log(word);

word = word.replace(/enter|imes|ai|ober|ufat/g, toReplace => decrypter[toReplace]);

console.log(word);


