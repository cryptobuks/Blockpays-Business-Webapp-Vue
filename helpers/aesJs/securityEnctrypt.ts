import aesjs from 'aes-js'
const key = [
  145,
  201,
  214,
  208,
  30,
  76,
  16,
  177,
  233,
  99,
  191,
  12,
  239,
  181,
  51,
  19,
  176,
  223,
  2,
  251,
  117,
  224,
  30,
  77,
  17,
  233,
  120,
  210,
  45,
  70,
  180,
  150
]

const stringifyEncrypt = function(object: object | string): string {
  object = JSON.stringify(object)
  return encryptJson(object)
}
const encryptJson = function(string: string): string {
  const textBytes = aesjs.utils.utf8.toBytes(string)
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5))
  const encryptedBytes = aesCtr.encrypt(textBytes)
  return aesjs.utils.hex.fromBytes(encryptedBytes)
}
const parseDecrypt = function(object: string): string {
  object = decryptJson(object)
  return JSON.parse(object)
}
const decryptJson = function(string: string): string {
  const encryptedBytes = aesjs.utils.hex.toBytes(string)
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5))
  const decryptedBytes = aesCtr.decrypt(encryptedBytes)
  return aesjs.utils.utf8.fromBytes(decryptedBytes)
}

const encryptNoJson = function(string: string): string {
  const textBytes = aesjs.utils.utf8.toBytes(string)
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5))
  const encryptedBytes = aesCtr.encrypt(textBytes)
  return aesjs.utils.hex.fromBytes(encryptedBytes)
}

const decryptNoJson = function(string: string): string {
  const encryptedBytes = aesjs.utils.hex.toBytes(string)
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5))
  const decryptedBytes = aesCtr.decrypt(encryptedBytes)
  return aesjs.utils.utf8.fromBytes(decryptedBytes)
}

export { decryptNoJson, encryptNoJson, stringifyEncrypt, parseDecrypt }
