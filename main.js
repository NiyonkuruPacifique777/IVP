      var paper=document.querySelector("#aknya");
        var cot="Dear customer we have more for you you have to choose what you want in above navigation links";
        var state=0;
        function typer(){
            if(state<cot.length){
                paper.textContent += cot[state];
                state++;
                setTimeout(typer,0);
            }
        }
        typer();
        
        function master(){
            setTimeout(function(){
                document.getElementById('register').style.display='block';
            },3800)
        }
        master();
function validator() {
    // Perform form validation
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Dear ' + username + 'Welcome to the Online Shop');
        window.location.href = 'StartUp.html';
    } else {
        alert('Please enter both username and password even your email.');
    }
};
function validator2() {
    // Perform form validation
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(username + 'Administrator Always keep this in mind never give your password to another un authorized person in order to maintain the security of your Market');
        window.location.href = 'admin.html';
    } else {
        alert('Please enter both username and password even your email.');
    }
};
function searcher() {
    document.getElementById('descr').style.display = 'none';
    document.getElementById('search').style.display = 'block';
    document.getElementById('removal').style.display = 'block';
    document.getElementById('serIcon').style.display = 'none';


}

function remover() {
    document.getElementById('removal').style.display = 'none';
    document.getElementById('search').style.display = "none";
    document.getElementById('descr').style.display = "block";
    document.getElementById('serIcon').style.display = 'block';
    document.getElementById('list2').style.display = "none";

}
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const listItems = document.querySelectorAll('#list2 li');

    if (searchTerm === '') {
        // If input is null (empty), hide all items
        hideAllItems(listItems);
    } else {
        listItems.forEach(function(item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});

function hideAllItems(items) {
    items.forEach(function(item) {
        item.style.display = 'none';
    });
}


document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const listItems2 = document.querySelectorAll('#list2');

    if (searchTerm === '') {
        // If input is null (empty), hide all items
        hideAllItems(listItems2);
    } else {
        listItems2.forEach(function(item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});

function hideAllItems(items) {
    items.forEach(function(item) {
        item.style.display = 'none';
    });
}
function language(){
    document.getElementById('languages').style.display='block';
} 
function back0(){
    window.location.href='startUp.html';
}
function back2(){
    window.location.href='startUpk.html';
}
