function solve(band, album, song) {

    let time = (band.length * album.length) * song.length / 2.0;
    let rotations = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
    
  }