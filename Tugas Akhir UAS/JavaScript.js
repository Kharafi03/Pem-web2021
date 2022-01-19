function validate()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email=="user@gmail.com" && password=="123")
    {
        alert('Login berhasil!');
    }
    else {
        alert("Login gagal! Ulangi kembali");
    }
}
function cartClicked() {
    alert('Produk sudah ditambahkan ke keranjang!')
}