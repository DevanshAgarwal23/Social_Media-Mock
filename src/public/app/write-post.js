


$('#submit-post').click( () => {
    let title = document.getElementById('title').value 
    let body = document.getElementById('body').value
    let userId = currentUser.id

    $.post('/api/posts',{
        userId: userId,
        title:title,
        body:body,
        
    })
    
})
















