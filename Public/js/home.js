function showForm(id) {
    document.querySelectorAll('.form').forEach(f => f.style.display = "none");
    document.getElementById(id).style.display = "block";

    document.querySelectorAll('.buttons button').forEach(b => b.classList.remove("active"));
    document.getElementById(id === 'quote' ? 'btn-quote' : 'btn-search').classList.add("active");
}

// service button toggle
document.querySelectorAll('.service button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.service button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});