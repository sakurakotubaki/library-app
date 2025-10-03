export class Book {
    constructor(
        private _id: string,
        private _title: string,
        private _isAvailable: boolean = true,
        private _createdAt: Date = new Date(),
        private _updatedAt: Date = new Date(),
    ) {}

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get isAvailable(): boolean {
        return this._isAvailable;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    loan() {
        if(!this.isAvailable) {
            throw new Error('この本はすでに貸し出しされています');
        }
        this._isAvailable = false;
    }

    return() {
        if(this.isAvailable) {
            throw new Error('この本は貸し出しされていません');
        }
        this._isAvailable = true;
    }
}