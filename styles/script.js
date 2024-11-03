const sider =document.getElementById('sider');
const btnSider =document.getElementById('btn-sider');
btnSider.onclick = () =>{
    if(btnSider.classList.contains('fa-bars')){
        btnSider.classList.replace('fa-bars','fa-close');
        sider.classList.add('show');
}
else{
    btnSider.classList.replace('fa-close','fa-bars');
    sider.classList.remove('show');
}
}