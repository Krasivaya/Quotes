export class Quote {
    showName: boolean;
    constructor(
        public id: number,
        public author: string,
        // public file: File,
        public description: string,
        public name: string,
        public completeDate: Date
    ){
// this.file = "../assets/image/image.jpg"
        this.showName=false;
}
}
