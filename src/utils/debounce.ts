export class DebounceTime {
    private timeout?: NodeJS.Timeout;

    constructor(private ms: number) { }

    exec(func: () => void) {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(func, this.ms);
    }
}