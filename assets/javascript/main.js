function load() {
    console.log("load was called");
    document.getElementById("wrapper").textContent = "These are the results of the load function.";
    list();
};

function list() {

    for (i = 1; i < 4; i++) {
        console.log("list was called");
        // document.getElementById("list-item").innerHTML = "List item";
        document.getElementById("list-item" + i).textContent = "List item";
    }
};