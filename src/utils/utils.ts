export function getKeysEnum(_enum: Object): string[] {
    return  Object.keys(_enum).filter((key) => isNaN(Number(key)));
}