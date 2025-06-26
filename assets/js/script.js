    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    //=============================================

    document.getElementById("portfolio-graphic").onclick = function()
    {
        document.getElementById("graphic-modal").style.display="block";
        document.getElementById("portfolio-graphic").style.backgroundColor="#0d6efd";

        document.getElementById("wevdev-modal").style.display="none";
        document.getElementById("portfolio-wevdev").style.backgroundColor="#3C3D37";
        document.getElementById("graphic-art").style.display="none";
        document.getElementById("portfolio-art").style.backgroundColor="#3C3D37";
    }

    document.getElementById("portfolio-wevdev").onclick = function()
    {
        document.getElementById("wevdev-modal").style.display="block";
        document.getElementById("portfolio-wevdev").style.backgroundColor="#0d6efd";

        document.getElementById("graphic-modal").style.display="none";
        document.getElementById("portfolio-graphic").style.backgroundColor="#3C3D37";
        document.getElementById("graphic-art").style.display="none";
        document.getElementById("portfolio-art").style.backgroundColor="#3C3D37";
        
    }

    document.getElementById("portfolio-art").onclick = function()
    {
        document.getElementById("graphic-art").style.display="block";
        document.getElementById("portfolio-art").style.backgroundColor="#0d6efd";

        document.getElementById("wevdev-modal").style.display="none";
        document.getElementById("portfolio-wevdev").style.backgroundColor="#3C3D37";
        document.getElementById("graphic-modal").style.display="none";
        document.getElementById("portfolio-graphic").style.backgroundColor="#3C3D37";
    }

    document.getElementById("gototop").onclick = () =>
    {
        window.scrollTo(
            {
                top:0,behavior:"smooth"
            }
        );
    }

    function moreabt()
    {
        let abtsection = document.getElementById("abt").offsetTop;
        window.scrollTo(
            {
                top:abtsection,behavior:"smooth"
            }
        );
    }

document.getElementById("menuBtn").onclick = function ()
{
    document.getElementById("menuBtn").className= "fa-solid fa-xmark";

    if(document.getElementById("sidenav").style.display=="" || document.getElementById("sidenav").style.display=="none")
    {
        document.getElementById("sidenav").style.display="block";
    }
    else 
    {
        document.getElementById("menuBtn").className= "fa fa-bars";
        document.getElementById("sidenav").style.display="none";
    }
    
}

window.onresize =  function ()
{
    if(window.innerWidth>1080)
    {
        document.getElementById("sidenav").style.display="block";
    }
    else
    {
        document.getElementById("sidenav").style.display="none";
    }
}
    