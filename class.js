class student{
    constructor(id, name, section, group){
        this.id = id;
        this.name = name;
        this.section = section;
        this.group = group;
    }
}

const student1 = new student('CES-01706541', 'Md. Tanvir Hasan', 'A', 'CES');
const student2 = new student('CES-01706542', 'Md. Jubayed Hasan', 'A', 'CES');
const student3 = new student('CES-01706541', 'Md. Siful Islam', 'B', 'CES');


console.log(student1);
console.log(student2);
console.log(student3);

