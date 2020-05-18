$(function () {
   
    var v1, v2, op;

    $("button[name=btn]").click (function () {
        $("#result").val($("#result").val() + $(this).val());
    });

    $("button[id=buttonX]").click(function () {
        $("#result").val('');
        $("#op").text('');
    });

    $("button[name=soma]").click( function(){
        if($("#result").val() != ''){
            //parseFloat = converte string gerada no form (result) em valor numérico;
            v1 = parseFloat($("#result").val());
            //limpa o campo para o próx número
            $('#result').val('');
            op = "soma"
            $("#op").text($(this).val());

        }else{
            alert('Insira um valor');
        }
    });

    $("button[name=sub]").click( function(){
        if($("#result").val() != ''){
            //parseFloat = converte string gerada no form (result) em valor numérico;
            v1 = parseFloat($("#result").val());
            //limpa o campo para o próx número
            $('#result').val('');
            op = "sub";
            $("#op").text($(this).val());

        }else{
            alert('Insira um valor');
        }
    });

    $("button[name=mult]").click( function(){
        if($("#result").val() != ''){

            v1 = parseFloat($("#result").val());
            $('#result').val('');
            op = "mult";
            $("#op").text($(this).val());

        }else{
            alert('Insira um valor');
        }
    });

    $("button[name=div]").click( function(){
        if($("#result").val() != ''){

            v1 = parseFloat($("#result").val());
            $('#result').val('');
            op = "div";
            $("#op").text($(this).val());

        }else{
            alert('Insira um valor');
        }
    });

    $("button[name=igual]").click(function () {
       if($("#result").val() != '' ){
           v2 = parseFloat($('#result').val());

           if(op == "soma") {
               $("#result").val(v1 + v2);

           }else if(op == "sub") {
               $("#result").val(v1 - v2);

           }else if(op == "mult") {
            $("#result").val(v1 * v2);

           }else if(op == "div") {
            $("#result").val(v1 / v2);
            
           }
            
       }else {
           alert('Insira um valor');
       }
    });

    


});
