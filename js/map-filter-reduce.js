const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const lang3 = users.filter(user => user.languages.length >= 3);
console.log(lang3);

const change = users.map(user => user.email )

;
console.log(change);

const redu = users.reduce( (total,users) => {
   return  users.yearsOfExperience;
}, 0);
console.log(redu);
const eLength = users.reduce( (long,user) => {
    if (long.length < user.email.length) {
        return user.email;
    } else {
        return long;
    }
}, "");
console.log(eLength);


const names = users.reduce( (firstName,user) => { return firstName +(user.name +" ")},"your instructors are")


console.log(names);


