export {};
declare global {
    interface String {
        toEvalGetObject(): Object;
    }
    interface Array<T> {
        toConvertType(): T[];
    }
}
