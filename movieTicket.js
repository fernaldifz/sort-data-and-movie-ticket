// ASUMSI
// Dalam kasus seperti n = 12 dan k = 3, di mana queue terakhir adalah {7, 8, 9} yang merupakan kelompok belakang
// last person adalah orang ke-7, karena dihitung dari belakang (9, 8, lalu 7)

// Dalam kasus seperti n = 9 dan k = 3, di mana queue terakhir adalah {4, 5, 6} yang merupakan kelompok depan
// last person adalah orang ke-6, karena dihitung dari depan (4, 5, lalu 6)

function movieTicket(n, k) {
    const numberOfFullGroups = Math.floor(n / k)
    let result = 0;
    if (numberOfFullGroups % 2 !== 0) {
        result = (Math.floor(numberOfFullGroups / 2) + 1) * k + (n % k)
    } else {
        result = (numberOfFullGroups / 2) * k + (n % k) + 1
    }
    return result
}

// example
result = movieTicket(10, 2)
console.log(result)