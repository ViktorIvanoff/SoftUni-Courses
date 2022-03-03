function solve(input) {
    // 4,
    // 'favourite_DownTown_3:14',
    // 'listenLater_Andalouse_3:24',
    // 'favourite_In To The Night_3:58',
    // 'favourite_Live It Up_3:48',
    // 'listenLater'

    class Song {

        constructor(songType, name, length) {

            this.songType = songType;
            this.name = name;
            this.length = length;
        }
    }


    let totalSongs = Number(input.shift());
    let songs = [];

    for (let i = 0; i < totalSongs; i++) {

        let inputLine = input.shift();
        let [songType, name, length] = inputLine.split("_");
        songs.push(new Song(songType, name, length));

    }


    let songType = input.shift();

    if (songType === "all") {
        songs.forEach((s) => console.log(s.name));

    } else {
        let filtered = songs.filter((s) => s.songType === songType);
        filtered.forEach((s) => console.log(s.name));
    }

}