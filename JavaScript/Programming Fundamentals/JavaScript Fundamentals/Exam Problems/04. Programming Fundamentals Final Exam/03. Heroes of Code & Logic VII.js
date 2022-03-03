function solve(input) {
    // '2',
    // 'Solmyr 85 120',
    // 'Kyrre 99 50',

    // 'Heal - Solmyr - 10',
    // 'Recharge - Solmyr - 50',
    // 'TakeDamage - Kyrre - 66 - Orc',
    // 'CastSpell - Kyrre - 15 - ViewEarth',

    // 'End'
    let heroes = {};

    var maxHP = 100;
    var maxMP = 200;

    let n = Number(input.shift());

    input.splice(0, n)
    
        .forEach(line => {
            let [heroName, hitPoints, manaPoints] = line.split(" ");
            hitPoints = Number(hitPoints);
            manaPoints = Number(manaPoints);

            heroes[heroName] = { hitPoints: hitPoints, manaPoints: manaPoints };
        });


    for (let line of input) {

        let [command, heroName, addValue, addLine] = line.split(" - ");

        hitPoints = Number(addValue);
        manaPoints = Number(addValue);

        if (command !== "End") {

            switch (command) {
                case "Heal":
                    heal(heroes, heroName, hitPoints);
                    break;

                case "Recharge":
                    recharge(heroes, heroName, manaPoints);
                    break;

                case "TakeDamage":
                    takeDamage(heroes, heroName, hitPoints, addLine);
                    break;

                case "CastSpell":
                    castSpell(heroes, heroName, manaPoints, addLine);
                    break;

                case "End":
                    return;
            }
        }


    }

    let sortedHeroes = Object.entries(heroes).
        sort(compareHeroes);

    for (let [heroName, heroInfo] of sortedHeroes) {
        let [hp, mp] = heroInfo;

        console.log(heroName);
        console.log(`HP: ${hp}`);
        console.log(`MP: ${mp}`);
    }


    function compareHeroes(a, b) {
        let [aName, aInfo] = a;
        let [bName, bInfo] = b;

        let descendingByHealth = bInfo.hitPoints - aInfo.hitPoints;

        if (descendingByHealth === 0) {
            return aName.localeCompare(bName);
        }

        return descendingByHealth;
    }

    function heal(heroes, heroName, amount) { //85 + 30 -- 115 its heald for 15

        amount = Number(amount);
        let hero = heroes[heroName];
        hero.hitPoints += amount;

        if (hero.hitPoints >= maxHP) {
            amount = hero.hitPoints - maxHP;
            hero.hitPoints = maxHP;
            // }
        }
        console.log(`${heroName} healed for ${amount} HP!`);
    }



    function recharge(heroes, heroName, amount) {
        amount = Number(amount);
        let hero = heroes[heroName];
        hero.manaPoints += amount;  // 99 + 100 = 199 

        if (hero.manaPoints >= maxMP) {
            amount = hero.manaPoints - maxMP;
            hero.manaPoints = maxMP;
        }

        console.log(`${heroName} recharged for ${amount} MP!`);

    }

    function takeDamage(heroes, heroName, amount, attacker) {
        let hero = heroes[heroName];
        amount = Number(amount);
        hero.hitPoints -= amount;

        if (hero.hitPoints >= 0) {
            console.log(`${heroName} was hit for ${amount} HP by ${attacker} and now has ${hero.hitPoints} HP left!`);
        } else {
            delete heroes[heroName];

            console.log(`${heroName} has been killed by ${attacker}!`);

        }
    }


    function castSpell(heroes, heroName, manaNeeded, spellName) {
        manaNeeded = Number(manaNeeded);
        let hero = heroes[heroName];

        if (hero.manaPoints >= manaNeeded) {
            hero.manaPoints -= manaNeeded;

            console.log(`${heroName} has successfully cast ${spellName} and now has ${hero.manaPoints} MP!`)
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);

        }
    }



}
