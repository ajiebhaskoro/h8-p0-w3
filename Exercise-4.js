var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(input) {
    // SPLICE INPUT DATA 
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung")
    input.splice(5, 0, "Pria")
    input.splice(6, 0, "SMA Internasional Metro")
    console.log(input)

    // SPLIT INPUT DATA
    var month1 = input[3].split("/")
    switch (month1[1]) {
        case '01': {
            console.log('Januari');
            break;
        }
        case '02': {
            console.log('Februari');
            break;
        }
        case '03': {
            console.log('Maret');
            break;
        }
        case '04': {
            console.log('April');
            break;
        }
        case '05': {
            console.log('Mei');
            break;
        }
        case '06': {
            console.log('Juni');
            break;
        }
        case '07': {
            console.log('Juli');
            break;
        }
        case '08': {
            console.log('Agustus');
            break;
        }
        case '09': {
            console.log('September');
            break;
        }
        case '10': {
            console.log('Oktober');
            break;
        }
        case '11': {
            console.log('November');
            break;
        }
        case '12': {
            console.log('Desember');
            break;
        }
        default: {
            console.log('Bulan Purnama');
        }
    }

    // SORT INPUT DATA
    console.log(month1.sort(function (a, b) {
        return b - a
    }))

    // JOIN INPUT DATA
    var month2 = input[3].split("/")
    var fix = month2.join("-")
    console.log(fix)

    // SLICE INPUT DATA
    console.log(input[1].slice(0, 14))

    return input;
}


(dataHandling2(input));