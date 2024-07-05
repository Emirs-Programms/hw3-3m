function changePassword(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const resultElement = document.getElementById('result')
    
    
    
        
        
        if (username.trim() === '' || password.trim() === '') {
            alert('Имя пользователя и пароль не должны быть пустыми.');
        } else {
            
            alert("Пароль успешно изменен")
        }
    }