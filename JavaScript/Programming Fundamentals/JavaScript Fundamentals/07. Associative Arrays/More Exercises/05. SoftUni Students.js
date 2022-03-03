function solve(input) {
    // ['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'

    // JSCore: 0 places left
    // --- 105: user45, user45@user.com
    // --- 85: user6, user6@user.com
    // --- 50: user13, user13@user.com
    // --- 29: user700, user700@user.com
    // --- 25: user1, user1@user.com
    // --- 20: user007, user007@user.com
    // JavaBasics: 1 places left
    // --- 3: user11, user11@user.com
    // C#Advanced: 2 places left
    // --- 18: user8, user8@user.com

    // For each course you have to store the name, the capacity and the students that are in it. For each student store the username, the email and their credits. 

    let register = {};

    for (let line of input) {

        if (line.includes(': ')) {
            // 'JavaBasics: 2',
            let [courseName, capacity] = line.split(': ');
            capacity = Number(capacity);
            // "{course name}: {capacity}" – add the course with that capacity.

            if (register[courseName] === undefined) {

                register[courseName] = {

                    capacity,
                    students: []

                }
            } else {
                // If the course exists, add the capacity to the existing one
                register[courseName].capacity += capacity;
            }

        } else if (line.includes('with email')) {
            // user11[3] with email user11@user.com joins JavaBasics'

            // "{username}[{credits count}] with email {email} joins {course name}" – add the student if the course exists (each student can be in multiple courses) and if there are places left (count of students are less than the capacity)
            let [userInfo, word, word2, email, word3, course] = line.split(' ');
            let [user, creditsCount] = userInfo.split('[');
            creditsCount = creditsCount.replace(']', '');

            if (register[course] !== undefined) {

                if (register[course].capacity > 0) {

                    register[course].students.push(

                        {

                            user,
                            email,
                            creditsCount,
                            courseName: course

                        }

                    );

                    register[course].capacity -= 1;
                }
            }
        }
    }

    Object.keys(register).
        sort((a, b) => register[b].students.length - register[a].students.length)

        .map(k => {

            register[k].students.
                sort((a, b) => b.creditsCount - a.creditsCount)
            return k;

        }).

        forEach(k => {

            let { courseName, capacity, students } =
            {
                courseName: k, ...register[k]
            }
            //          JSCore: 0 places left
            // // --- 105: user45, user45@user.com
            console.log(`${courseName}: ${capacity} places left`);

            if (students.length > 0) {

                console.log(`${students.map(s => `--- ${s.creditsCount}: ${s.user}, ${s.email}`).join('\n')}`)
            }
        })

    // [
    //     [ 'JavaBasics', { capacity: 1, students: [Array] } ],
    //     [ 'C#Advanced', { capacity: 2, students: [Array] } ],
    //     [ 'JSCore', { capacity: 0, students: [Array] } ]
    //   ]

    // JSCore: 0 places left
    // --- 105: user45, user45@user.com
    // --- 85: user6, user6@user.com
    // --- 50: user13, user13@user.com
    // --- 29: user700, user700@user.com
    // --- 25: user1, user1@user.com
    // --- 20: user007, user007@user.com
    // JavaBasics: 1 places left
    // --- 3: user11, user11@user.com
    // C#Advanced: 2 places left
    // --- 18: user8, user8@user.com

}