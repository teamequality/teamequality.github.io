$(document).ready(()=>{
    $('#current').on('click',()=>{
        $('#currentStuff').show();
        $('#pastwins').hide();

        $('#current').addClass('btn-danger');
        $('#past').removeClass('btn-info');
    })
    $('#past').on('click',()=>{
        $('#pastwins').show();
        $('#currentStuff').hide();
        $('#past').addClass('btn-info');
        $('#current').removeClass('btn-danger');
    })
})