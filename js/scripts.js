$(document).ready(()=>{
    $('#newjoke').click(()=>{
        async function getjoke(){
            return await fetch('https://icanhazdadjoke.com/',{
                headers:{
                    'Accept':'application/json'
                }
            }).then(res => res.json())
        }
        res= getjoke();
        console.log(res);
        document.getElementById("jokebox").innerText=res;
    });
});