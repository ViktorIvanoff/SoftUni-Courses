function solve(input) {
    //      'Monday Peter',
    //     'Wednesday Bill',
    //     'Monday Tim',
    //     'Friday Tim'

    //     Monday
    // Peter
    // Wednesday
    // Bill
    // Monday
    // Tim
    // Friday
    // Tim
    
    // Scheduled for Monday
    // Scheduled for Wednesday
    // Conflict on Monday!
    // Scheduled for Friday

    // Monday -> Peter
    // Wednesday -> Bill
    // Friday -> Tim

    let schedule = {};

    for (let line of input) {

        let [weekday, name] = line.split(" ");

        if (!schedule.hasOwnProperty(weekday)) {
            schedule[weekday] = name;
            console.log(`Scheduled for ${weekday}`);

        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }

    Object.keys(schedule).map((weekday) => console.log(`${weekday} -> ${schedule[weekday]}`)).join("\n");

}