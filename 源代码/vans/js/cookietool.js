//封装函数，获取指定键名的值
// function getCookie(key) {
//     //1.先获取所有的，存储
//     let cookie = document.cookie;//username=zhangsan;password=123456
//     let arr = cookie.split("; ");//分号加空格["username=zhangsan","password=123456"]
//     for (let i = 0; i < arr.length; i++) {
//         let arr1 = arr[i].split('=');//arr1[0]--->键(username,password)  arr[1]---->值
//         if (arr1[0] == key) {
//             return arr1[1];
//         }
//     }
//     return '';
// }

// function setCookie(key, value, day) {
//     let date = new Date();
//     date.setDate(date.getDate() + day)
//     document.cookie = key + '=' + value + ';expires' + date;
// }

function getCookie(key) {
    // 1. 先获取所有的，存储
    let cookie = document.cookie;// username=zhangsan; password=123456
    let arr = cookie.split("; ");// 分号+空格  ["username=hangsan", "password=123456"]arr
    for (let i = 0; i < arr.length; i++) {
        // arr[0]--->"username=zhangsan"-->['username','zhangsan']
        // arr[1]--->"password=123456"---->['password','123456']
        let arr1 = arr[i].split('=');// arr1[0]---》键(username、password)   arr1[1]---》值

        if (arr1[0] == key) {
            return arr1[1];
        }
    }
    return '';
}


function setCookie(key, value, day) {
    let date = new Date();
    date.setDate(date.getDate() + day)
    document.cookie = key + '=' + value + ';expires=' + date;
}