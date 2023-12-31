async function select(id){
    const res = await fetch(`/api/users/${id}`);
    const user = await res.json();
    $("#firstName").val(user.firstName);
    $("#lastName").val(user.lastName);
    $("#id").val(user.id);
}

async function deleteContact(id){
    const res = await fetch(`/api/users/${id}`, {
        method: 'DELETE'
    });
    console.log(res);
    updateContacts();

}

async function createNew(){
    $("#firstName").val("");
    $("#lastName").val("");
    $("#id").val("");
}

async function updateContacts() {
    const res = await fetch("/api/users");
    const users = await res.json();
    $("#theList").html("");
    for (const user of users) {
        $("#theList").append(`<p><a href="#" onclick="select(${user.id})">${user.firstName} ${user.lastName}</a><button onclick="deleteContact(${user.id})">x</button></p>`)
    }
}

async function submitForm(event) {
    event.preventDefault();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const id = $("#id").val();
    const res = await fetch(`/api/users/${id}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName: firstName, lastName: lastName })
    });
    console.log(res);
    updateContacts();
    return false;
}

document.addEventListener("DOMContentLoaded", () => {
    updateContacts();
});