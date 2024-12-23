var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

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
    if(document.getElementById("sidenav").style.display=="" || document.getElementById("sidenav").style.display=="none")
    {
        document.getElementById("sidenav").style.display="block";
    }
    else 
    {
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
    