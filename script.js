// store divs and buttons in variables
let total_quizs = document.querySelector(".total-quizs");
    let correct_ans = $(".correct-ans");
    let wrong_ans = $(".wrong-ans");
    let total_score = document.querySelector(".score");
let result_page = $(".result-page")

// array of all questions with their correct answers
var allQuestions = [
    {question:" ______ JavaScript is also called client-side JavaScript.?",
     a:"microsoft",b:"navigator",c:"livewire",d:"native",
     corr:"b"
    },
    {question:"Which of the following are capabilities of functions in JavaScript?",
    a:"Return a value",b:"Accept parameters and Return a value",c:"Accept parameters",d:"None of the above",
    corr:"c"
    },
    {question:"Which of the following is not a valid JavaScript variable name?",
    a:"2names",b:"_first_and_last_names",c:"FirstAndLast",d:"None of the above",
    corr:"a"
    },
    {question:"Which of the following attribute can hold the JavaScript version?",
    a:"LANGUAGE",b:"SCRIPT",c:"VERSION",d:"None of these",
    corr:"a"
    },
    {question:"Which types of image maps can be used with JavaScript?",
    a:"Server-side image maps",b:"Client-side image maps",c:"Server and Client-side image maps",d:"None of the above",
    corr:"b"
    },
    {question:"Which of the following navigator object properties is the same in both Netscape and IE?",
    a:"navigator.appCodeName",b:"navigator.appName",c:"navigator.appVersion",d:"None of the above",
    corr:"a"
    },
    {question:"Choose the server-side JavaScript object?",
    a:"FileUpLoad",b:"Function",c:"File",d:"Date",
    corr:"c"
    },
    {question:"Choose the client-side JavaScript object?",
    a:"Database",b:"Cursor",c:"Client",d:"FileUpload",
    corr:"d"
    },
    {question:"Which of the following is not considered a JavaScript operator?",
    a:"new",b:"this",c:"delete",d:"typeof",
    corr:"b"
    },
    {question:"______method evaluates a string of JavaScript code in the context of the specified object.",
    a:"Eval",b:"ParseInt",c:"ParseFloat",d:"Efloat",
    corr:"a"
    },
    {question:"jQuery is a",
    a:"JavaScript Library.",b:"JavaScript Language",c:"JavaScript Method",d:"PHP Method",
    corr:"a"
   },
    {question:"Which jQuery method is used to hide selected elements?", 
    a:"hidden();", b:"hide()",c:"visible(false)",d:"display(none)", 
    corr:"b"
   },
    {question:"Which jQuery method is used to set one or more style properties for selected elements?", 
    a:"css()", b:"html()",c:"style()",d:"none of these", 
    corr:"a"
   },
    {question:"Which jQuery method is used to perform an asynchronous HTTP request?", 
    a:"jQuery.ajaxAsync()", b:"jQuery.ajax()",c:"jQuery.ajaxSetup()",d:"None of these", 
    corr:"b"
   },
    {question:"What scripting language is jQuery written in?", 
    a:"VBScript", b:"JavaScript",c:"C#",d:"C++", 
    corr:"b"
   },
   {question:"Which jQuery method should be used to deal with name conflicts?",
    a:"noNameConflict()",b:"noConflict()",c:"nameConflict()",d:"conflict()",
    corr:"d"
    },
    {question:" jQuery's main focus is..",
    a:"AJAX",b:"DOM Manipulation",c:"Animations",d:"All of the above",
    corr:"d"
   },
    {question:"The method that provides AJAX functionality within jQuery is named..", 
    a:"ajax", b:"easyAJAX",c:"jQueryajax",d:"jQajax", 
    corr:"a"
   },
    {question:"The CSS selector engine that jQuery uses is called?", 
    a:"Badaboom", b:"Mango",c:"Sizzle",d:"AwesomeX", 
    corr:"c"
   },
    {question:"You can attach a handler to an event using which method?", 
    a:"eventBind", b:"bind",c:"attach",d:"eventAttach", 
    corr:"b"
   },
    {question:"Triggers, or binds a function to the error event of selected elements.", 
    a:"click()", b:"error()",c:"event.pageX",d:"click.error()", 
    corr:"b"
   },
   {question:" When referencing an HTML element preceded by a . (dot), what javascript function is this equivalent to?",
   a:"getElementById",b:"getElementByClassName",c:"getElementByTagName",d:"None of the above",
   corr:"d"
  },
   {question:"What are the various speed options?", 
   a:"The words slow and fast", b:"Only slow fast and medium",c:"All of the above",d:"None of the above", 
   corr:"a"
  },
   {question:"The speed options can be applied to which jQuery functions?", 
   a:"css and ajax", b:"show and fadeIn",c:"toggleCss",d:"All of the above", 
   corr:"b"
  },
   {question:"If you want to stop your jQuery for a few milliseconds, which function do you use?", 
   a:"stop()", b:"pause()",c:"slowdown()",d:"delay()", 
   corr:"d"
  },
   {question:"The method that provides AJAX functionality within jQuery is named..", 
   a:"ajax", b:"easyAJAX",c:"jQueryajax",d:"jQajax", 
   corr:"a"
  },
  {question:"HTML is what type of language ?",
  a:"Scripting Language",b:"Markup Language",c:"Programming Language",d:"Network Protocol",
  corr:"b"
 },
  {question:"HTML uses", 
  a:"User defined tags", b:"Pre-specified tags",c:"Fixed tags defined by the language",d:"Tags only for linking", 
  corr:"c"
 },
  {question:"The year in which HTML was first proposed _______.", 
  a:"1990", b:"1995",c:"2000",d:"2005", 
  corr:"a"
 },
  {question:"Fundamental HTML Block is known as ", 
  a:"HTML Body", b:"HTML Tag",c:"HTML Attribute",d:"HTML Element", 
  corr:"b"
 },
  {question:"If we want to wrap a block of text around an image, which css property will we use ?", 
  a:"wrap", b:"float",c:"push",d:"slide", 
  corr:"b"
 },
 {question:"If we want define style for an unique element, then which css selector will we use ?", 
   a:"id", b:"class",c:"text",d:"name", 
   corr:"a"
  },
   {question:"Correct HTML tag for the largest heading is", 
   a:"head", b:"h3",c:"h1",d:"heading", 
   corr:"c"
  },
  {question:"The attribute of <form> tag",
  a:"Method",b:"Action",c:"Both (a)&(b)",d:"None of these",
  corr:"c"
 },
  {question:"What is the full form of HTML?", 
  a:"HyperText Markup Language", b:"Hyper Teach Markup Language",c:"Hyper Tech Markup Language",d:"None of these", 
  corr:"a"
 },
  {question:"Who is Known as the father of World Wide Web (WWW)?", 
  a:"Robert Cailliau", b:"Tim Thompson",c:"Charles Darwin",d:"Tim Berners-Lee", 
  corr:"d"
 },
  {question:"If we want to show an Arrow as cursor, then which value we will use ?", 
  a:"pointer", b:"arrow",c:"arr",d:"default", 
  corr:"d"
 },
  {question:"How can you make a bulleted list with numbers?", 
  a:"dl", b:"ol",c:"ul",d:"li", 
  corr:"c"
 },
 {question:"What tag is used to display a picture in a HTML page?", 
 a:"image", b:"img",c:"picture",d:"pic", 
 corr:"b"
},
{question:"Markup tags tell the web browser", 
  a:"How to organise the page", b:"How to display the page",c:"How to display message box on page",d:"None of these", 
  corr:"b"
 },
  {question:"www is based on which model?", 
  a:"Local-server", b:"Client-server",c:"3-tier",d:"None of these", 
  corr:"b"
 },
 {question:"What are Empty elements and is it valid?",
 a:"No, there is no such terms as Empty Element",b:"Empty elements are element with no data",c:"No, it is not valid to use Empty Element",d:"None of these",
 corr:"b"
},
 {question:"Which of the following attributes of text box control allow to limit the maximum character?", 
 a:"size", b:"length",c:"maxlength",d:"None of these", 
 corr:"c"
},
 {question:"Which CSS property is used to control the text size of an element ?", 
 a:"font-style", b:"text-size",c:"font-size",d:"text-style", 
 corr:"c"
},
 {question:"HTML web pages can be read and rendered by ", 
 a:"Compiler", b:"Server",c:"Web Browser",d:"Interpreter", 
 corr:"d"
},
 {question:"Which of the following is not a browser ?", 
 a:"Microsofts Bing", b:"Netscape Navigator",c:"Mozilla Firefox",d:"Opera", 
 corr:"a"
},
{question:"HTML tags are surrounded by which type of brackets.", 
 a:"Curly", b:"ASquart",c:"round",d:"Angle", 
 corr:"d"
},
 {question:"The default value of position attribute is ", 
 a:"relative", b:"fixed",c:"absolute",d:"inherit", 
 corr:"d"
},
 {question:"Which of the following properties will we use to display border around a cell without any content ?", 
 a:"empty-cell", b:"noncontent-cell",c:"blank-cell",d:"void-cell", 
 corr:"a"
},
 {question:"You can attach a handler to an event using which method?", 
 a:"bind", b:"eventBind",c:"event",d:"attach", 
 corr:"a"
}
   
    ]

    let indexNo = 0;
    let score = 0; 
    nextPage(); 
     
    // function to relaod document on reset button click
    $("#reset-btn").on("click", function(){
        location.reload();
    })

    // next button become disable after user reaches new questions page
   $('#next').attr('disabled',true);

//    function to load next page with new 5 questions and thier answers
   function nextPage(){
    $("span").children("input").next().css("background","none")
    $('#submit').attr('disabled',false);
    $('#submit').css('opacity',"1");
    $('#next').attr('disabled',true);
    $('#next').css('opacity',"0.5");
    $(":radio").prop('checked',false);
    
    // condition to check whether the length of questions reached at the end of array length
    if(indexNo < allQuestions.length)
    {
        let Loop = indexNo+4; 
        let spanNo=0;
        let i = indexNo;

        // loop to show new 5 questions and their answers at every page
        for(;i<=Loop;i++)
        {
        $('span').eq(spanNo).children('h1').html(allQuestions[indexNo].question);
        $('span').eq(spanNo).children('label').eq(0).html(allQuestions[indexNo].a);
        $('span').eq(spanNo).children('label').eq(1).html(allQuestions[indexNo].b);
        $('span').eq(spanNo).children('label').eq(2).html(allQuestions[indexNo].c);
        $('span').eq(spanNo).children('label').eq(3).html(allQuestions[indexNo].d); 
        spanNo++;
        indexNo++;
        }
    }
    else
    {
         result_page.css("display","block")
         $(".holder").hide()
    }
}

// function to submit all answers when user has checked an option from each question's answers
function submit()
{
    $('#submit').attr('disabled',true);
    $('#submit').css('opacity',"0.5");
    $('#next').attr('disabled',false);
    $('#next').css('opacity',"1");
    let first_Question_Index = indexNo - 5;
    let indexOfSpan = 0;  
    for(; first_Question_Index < indexNo; first_Question_Index++ ){
        let userOption = $('span').eq(indexOfSpan).children('input:checked').attr('data-content');

        // condition to check whether the choosed answer from user is correct
        if(userOption == allQuestions[first_Question_Index].corr)
        {
            score++;
            $("span").eq(indexOfSpan).children("input:checked").next().css({"background":"green","border-radius":"5px"})
            $(".total-score").html("Score: " +score+ "/" +allQuestions.length)
           
        }
        else
        {
            $("span").eq(indexOfSpan).children("input:checked").next().css({"background":"red","border-radius":"5px"})
        }
        indexOfSpan++;
    }
    
}

