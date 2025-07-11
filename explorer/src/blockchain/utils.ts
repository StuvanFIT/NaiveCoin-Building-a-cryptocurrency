const hexToBinary = (hexString: string): string =>{

    let result: string = '';

    const lookUpTable:any = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
        '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
        'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101',
        'e': '1110', 'f': '1111'
    };

    for (let i:number = 0; i< hexString.length; i++){

        if (lookUpTable[hexString[i]]){
            result += lookUpTable[hexString[i]];
        } else {
            return '';
        }
    };

    return result;
}

const toHexString = (byteArray:any): string => {
    return Array.from(byteArray, (byte: any) => {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
};

// Utility functions for cryptographic operations
const sha256 = async (data:string) => {
    const encoder = new TextEncoder();
    const dataBuffer = typeof data === 'string' ? encoder.encode(data) : data;
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    return new Uint8Array(hashBuffer);
};

const arrayToHex = (array: Uint8Array): string => {
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};


export {hexToBinary, toHexString, sha256, arrayToHex};