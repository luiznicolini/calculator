$("input:button").click(() => {
    vlr = $(this).val();
    atual = $("#resultado").val();
    if(vlr=="C") $("#resultado").val("");
    else {
        if(vlr=="="){
            $("#resultado").val(eval(atual));
        }else{
            $("#resultado").val(atual + vlr);
        }
    }
})