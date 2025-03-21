let professor = {
    name: "Dr.John Doe",
    age: 45,
    subject: "Computer Science",
    university: "XYZ University",
    specialization: "Artificial Intelligence",
    degrees: {
        engineering: "CSC",
        PHD: "Adv Computing",
        masters: "Software Engineering"
    },
    certificates: [
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming"
    ]
};

console.log(professor);

console.log(professor.degrees);

console.log(professor.certificates);


professor.totalExperience= " 14 years ";
console.log(`total experince is add to: ${professor.totalExperience}`);

console.log(`==== Updating Properties ========`);
professor.name = "Shree";
 professor.age = 50;
 console.log(professor);
 

console.log(`==== After Object creation, Adding Properties ========`);

professor.certificates.push("Orcal Certified");
console.log(`add new certificate :${professor.certificates}`);



let me =(professor.certificates[3]);
console.log(me); 

console.log("===== Traversing Objects =========");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key} <==> ${element}`);
    }
}