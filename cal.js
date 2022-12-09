$(document).ready(function(){
    let val1 = 0
    let val2 = 0
    let opreat = ""
    let result = 0
    let startover = 1
    let clicked = ""
    let screenValue = 0

    $(".num").click(function(){
        let digit=$(this).attr("id")
        if(startover == 1){
            $("span").text(digit),
            startover = 0
        }else{
            $("span").append(digit)
        }        
    })
    
    $("#c").click(function(){
        val1 = 0
        val2 = 0
        opreat = ""
        result = 0
        $("span").text("")
    })

    $(".opr").click(function(){
        clicked= $(this).attr("id")
        screenValue = Number($("span").text())
        if (val1 == 0 && clicked =="equal"){
            val1 = screenValue,
            result = val1,
            startover = 1
        }else if (val1 == 0 && clicked != "equal"){
            val1 = screenValue,
            operat = clicked,
            startover = 1          
        } else if(val1 != 0){
            val2 = screenValue
            if(operat == "add"){
                val1 += val2,
                operat = clicked,
                result = val1,
                startover = 1,
                $("span").text(result)            
            }else if (operat == "sub"){
                val1 -= val2,
                operat = clicked,
                result = val1,
                startover = 1,
                $("span").text(result)            
            }else if (operat == "mult"){
                val1 *= val2,
                operat = clicked,
                result = val1,
                startover = 1,
                $("span").text(result)
            }else if (operat == "divid"){
                val1 /= val2,
                operat = clicked,
                result = val1,
                startover = 1,
                $("span").text(result)
            }
        }
    })
})
