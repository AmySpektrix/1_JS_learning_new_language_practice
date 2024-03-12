let cohort = {
    cohortName: "May2022",
    id: 1234,
    students: ["Amy","Owen","Niamh","Sean","Hannah","Shaun","Alex","Becky","Sylvia"]
};

const cohortString = (cohortObject) => {
    console.log(`${cohortObject.id} - ${cohortObject.cohortName} - ${cohortObject.students.length} students in this cohort`);
}