function SortData() {
    const inputArray = [
        { "nama": "Indomie", "harga": 3000, "rating": 5, "likes": 150 },
        { "nama": "Laptop", "harga": 4000000, "rating": 4.5, "likes": 123 },
        { "nama": "Aqua", "harga": 3000, "rating": 4, "likes": 250 },
        { "nama": "Smart TV", "harga": 4000000, "rating": 4.5, "likes": 42 },
        { "nama": "Headphone", "harga": 4000000, "rating": 3.5, "likes": 90 },
        { "nama": "Very Smart TV", "harga": 4000000, "rating": 3.5, "likes": 87 }
    ]

    const sortedArray = inputArray.sort(function (a, b) {
        return a.harga - b.harga || b.rating - a.rating || b.likes - a.likes;
    });

    return sortedArray
}

const result = SortData();
console.log(result);