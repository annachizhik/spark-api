export default interface IRepository<T> {
    create(data: T): Promise<T>;
    getAll(): Promise<T[]>;
    get(id: string): Promise<T>;
    update(id: string, data: any): Promise<T>;
    delete(id: string): Promise<T>;
}