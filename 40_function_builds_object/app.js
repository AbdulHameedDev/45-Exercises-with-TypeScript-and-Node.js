//Making function to create object(album)
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
var album1 = make_album('Jay Chou', 'Greatest Works of Art');
var album2 = make_album('Susan Boyle', 'I Dreamed a Dream', 12); // With tracks
var album3 = make_album('Norah Jones', 'Come Away with Me');
// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);
