const fs = require('fs');

const mainDir = 'Z:/Embroidery - Test/Arwin Sketch Alphabet Font/';

fs.opendir(new URL('file:///' + mainDir), async (err, fdir) => {

    if (err) {
        console.log('error opening directory ' + mainDir);
        console.log(err.message);
    } else {

        console.log(fdir.path);
        console.log(fdir.path);
        var dirent=await fdir.read();
        while ( dirent ) {
            console.log(fdir.path  + dirent.name + ' ' + dirent.isFile());
            dirent=await fdir.read();
        }
        await fdir.close();

    }
})