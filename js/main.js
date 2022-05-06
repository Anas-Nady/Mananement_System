


let title = document.getElementById('title')
let price = document.getElementById('price')
let ads = document.getElementById('ads')
let pre = document.getElementById('pre')
let discount = document.getElementById('discount')
let totalPrice = document.getElementById('total-price')
let count = document.getElementById('count')
let category = document.getElementById('category')
let create = document.getElementById('create')

let prodectCase = 'create';
let indexUpdate;

// Get Price total

function getTotla() {
    if (price.value != '') {
        let resultPrice = (+price.value + +ads.value + +pre.value) - +discount.value;
        totalPrice.innerHTML = `Total : ${resultPrice}`
        totalPrice.style.backgroundColor = 'rgb(42, 157, 165)'

    }else{
        totalPrice.innerHTML = 'Total :'
        totalPrice.style.backgroundColor = 'red'
    }
}
// // Create prodect

let dataPro;
if (localStorage.prodect != null) {
    dataPro = JSON.parse(localStorage.prodect);
}else{
    dataPro = []
}


create.onclick = function(e) {
    e.preventDefault()

    // setlocalstorage
    let newProdect = {
        title : title.value.toLowerCase(),
        price : price.value,
        ads : ads.value,
        pre : pre.value,
        discount : discount.value,
        totalPrice : totalPrice.innerHTML,
        count : count.value,
        category : category.value.toLowerCase(),
    }

    if (title.value !== '' && price.value.length >= 1 && price.value.length <= 3 && category.value !== '' && count.value.length <= 2) {

        if (prodectCase === 'create') {

            if (newProdect.count > 1) {

        for (let i = 0; i < newProdect.count; i++) {
            dataPro.push(newProdect);

            }
        }else{
            dataPro.push(newProdect);
        }
    }else{
        dataPro[indexUpdate] = newProdect;
        prodectCase = 'create';
        create.innerHTML = 'Create';
        count.style.display = 'block';
    }
    clearData();
    }

    
    localStorage.setItem('prodect', JSON.stringify(dataPro));
    showData();
}

function clearData() {
    // clear inputs
    title.value = '';
    price.value = '';
    ads.value = '';
    pre.value = '';
    discount.value = '';
    count.value = '';
    category.value = '';
}

// read 

function showData() {
    let table = '';

    for(let i = 0; i < dataPro.length; i++) {
        table += `
        <tr>
        <td>${i + 1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].pre}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].totalPrice}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick = "updatePro(${i})" id="update">update</button></td>
        <td><button onclick = "deleteData(${i})"  id="delete">delete</button></td>
    </tr>`
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAllPro');

    if(dataPro.length > 0){
        btnDelete.innerHTML = `<button onclick = "deleteAll()">Delete All (${dataPro.length})</button>`;
    }else{
        btnDelete.innerHTML = '';
    }
    getTotla()
}
showData();

// // delete 
function deleteData(i) {
    dataPro.splice(i,1);
    localStorage.prodect =  JSON.stringify(dataPro);

    showData();
}

// Delete All 
function deleteAll() {
    localStorage.clear();
    dataPro.splice(0);

    showData();
}

// // update

function updatePro(i) {
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    ads.value = dataPro[i].ads;
    pre.value = dataPro[i].pre;
    discount.value = dataPro[i].discount;
    category.value = dataPro[i].category;

    count.style.display = 'none';
    create.innerHTML = 'Update'
    prodectCase = 'update';

    scroll({
        top : 0,
    })

    indexUpdate = i; // 
    getTotla();
}

// // search Step 1

let searchMood = 'title';

function getSearchMood(id) {
    let search = document.getElementById('search')

    id === 'searchTitle' ? searchMood = 'title' : searchMood = 'category';
    
    search.placeholder = `Search By ${searchMood}`
    search.focus();
    search.value = '';
    showData()
}


// // search Step 2

function searchAboutData(value) {
    let table = ''; 

    for (let i = 0; i < dataPro.length; i++) {

    if (searchMood === 'title') {
            if (dataPro[i].title.includes(value.toLowerCase())) {
                
                table += `
                    <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].pre}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].totalPrice}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick = "updatePro(${i})" id="update">update</button></td>
                    <td><button onclick = "deleteData(${i})"  id="delete">delete</button></td>
                </tr>`
            }
        
    }else{
            
            if (dataPro[i].category.includes(value.toLowerCase())) {
                
                table += `
                    <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].pre}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].totalPrice}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick = "updatePro(${i})" id="update">update</button></td>
                    <td><button onclick = "deleteData(${i})"  id="delete">delete</button></td>
                </tr>`
            }
    }
}
    document.getElementById('tbody').innerHTML = table;
}


// // clean data

