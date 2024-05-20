
# https://www.youtube.com/watch?v=3rmCGsCYJF8

[GitRepo](https://github.com/crypto101/book/)
[Book Link](https://www.crypto101.io/)
[Book Iteself](https://github.com/crypto101/crypto101.github.io/raw/master/Crypto101.pdf)

Data in motion - Use TLS

Data at rest - Use GPG

Python Packages:
(Py)NaCl
KeyCzar
cryptlib

If you are writing DES in your code
DES - Wrong
MD5, SHA may be wrong too.

## xor

1 ^ 0 == 1
0 ^ 1 == 1

One TIme Pad
Crypto -> XOR (OTP) -> XWCVPR

lenght(one_time_pad) == len(all_data_you_ever_send)
which is == very_big_number
which makes key_exchange difficult.

So what do we use here?
Ciphers ?
Block Ciphers

Input (plain text): FIXED Size
Proecss[Block Ciphers] (takes a key)
Output (ciphered text): Same FIXED Size

Block Ciphers use AES encryption

AES - Advanced Encryption Standard

blowFish / Twofish - Don't use

DES/3DES - Don't use
Block Ciphers - not usable with Images.
aes.block_size == 128 bits (16 Bytes)

Stream Ciphers 

RC4 - Don't use.

Salsa20 - Don't use
ChaCha20 - Don't use

- Implemented as constuction with block ciphers

- Replay Attack

Block Cipher 
Modes of Operation
ECB, (P)CBC, CFB, OFB, CTR - Don't use.
CBC - Most common in the wild (BEAST attacks)

TLS - BEAST Attacks
How TLS use CBC

CTR - Counter Mode
Nonce and Count

Pssuedo Mode

GCM, EAX, OCB, IAPM, CCM. CWC

Key Exchange ?


Diffie Hellman Key Exchange


Authenticated Encryption Modes
- GCM
- Message Authentication Mode

Cryptography Hash Functions
 
Input : lorum ipsum (Message arbitary size)
Process: Hash function
Output : 3589843758934 (digest (state) fixed size)


```python
hf  = HF("Hello Python\n");
hf.update("How are you");
hf.hexDigest()

#Impersonation of me
hf  = HF(state = your_hash);
hf.update(my_string);
hf.hexDigest()

mystring = "\n I am not attending, because I have switched to PHP"

# Payment Processor example
MD5(secret + amount)
$12.00:"1200"


hf  = HF(state = your_hash);
hf.update("0"  * 12);
hf.hexDigest()

```
bwall/HashPump

SHA3 era : fixed
(SHA-3, BLAKE2)

SHA2 and length extension attacks ?
 
SHA256 and SHA-3 are fine - Can be used.
BLAKE3 - Use

Message Authentication Code - 
MAC(k,x)  says nothing about 
MAC(k,fn(x))

MAC(k,x)  says nothing about 
MAC(k,y)

HMAC - based on hash function - succesfull - use

hmac(k,hf, msg)
import hmac;


# Password Storage:
CHF are wrong
Cryptographic Hash Functions are WRONG

password - Input
process : hash function
output: encrypted password

You can't go back to the password if attacker 
steals the database.
What about Brute Force?

ATI HD 5970, 2GB

can generate 

5.6e9 billions - MD5/s per second

2.3e9 billions SHA2/s per second


# SHA3
Input - lorum ipsum

process : hash function

output: 837489d9843

Intel Ivy Bridge and Sandy Bridge
SHA2-256 - 14 cpb cycles per byte
SHA3-256 - 11 cpb cycles per byte


# Salts?  - Does not work at all
- Add fixed length of random text before and after the input then Hashes it.
- Dictionary Attack
#
- Use KDF - Key Derivation Function

- Key Derivation Function - Slow optimally slow
- example of KDF
    - bcrypt - (tunably) time-hard
    - Configure how much time it takes to compute it
    - scrypt - time and space hard
If you are designing password database then use bcrypt or scrypt

Sender Authentication
- Public Key Cryptography  each person has two keys

- Key generation
ssh-keygen -

# Using Public Key & Private Key

Encryption:

Input - hello world
Process [PK Enc] - with your public key
Output - BDFDSDFSDFSFDAS


Decryption:
Input - BDFDSDFSDFSFDAS
Process [PK Dec] - with your private key
Output - hello world

Signing:
Anyonw can use my public key

How do I know you are you?
How do we sign:

Input - HF(m)
Process [PK Dec] - with your private key
Output - Signature 

Take this signature append it at the end your message

Other End to verify:

Input - Signature
Process [PK Dec] - with your public key
Output - HF(m) 
Original Hash Function can be verified

Examples of Pubclic Encrytion methods
RSA - Most commonly use.
me === 'actually me'

how to trust you
chain of signatures

I don't trust you
Other person X trust you
I trust other person X
I trust you because I trust other person X
This is how GPG key signing works

# SSL

SSL - production grade - old version
TLS - is new version 

This is used in the Browsers.
- Agree on Key Exchange Method (RSA/ DH)
- Agree on Signing Algorithms (RSA/DSA/ECDSA)
- Agree on Bulk Encryption Algorithms ( AES-CBS, RC4)
- Agree on MAC Algorithm - (HMAC-{MD5, SHA2}) - Message Authentiation Algorithm
- version and ciphersuites - certificates