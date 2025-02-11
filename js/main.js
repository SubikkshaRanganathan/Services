(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    //window.onload = redirectIndexToHome;
    // Initiate the wowjs
    new WOW().init();

    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });

    $("#sendEmailButton").click(function(event) {
        event.preventDefault();
        var cname = $("#cname").val();
        var cemail = $("#cemail").val();
        var csubject = $("#csubject").val();
        var cmsg = $("#cmessage").val();

        if (cname && cemail && csubject && cmsg) {
            var mailtoLink = "mailto:hr@deltainfotechsolutions.com?subject=" 
                            + encodeURIComponent(csubject) 
                            + "&body=" 
                            + encodeURIComponent(cmsg + "\n\nRegards,\n" + cname + "\n");

            window.location.href = mailtoLink;
            $("#cform")[0].reset();
        } else {
            alert("Please fill in all fields before sending the message.");
        }
    });
    
    
    $("#applyButton").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var role = $("#role").val();
        var mobile = $("#mobile").val();
        var message = $("#message").val();
        if(role==1)
        {
            var rol='Project Manager';
        }
        else{
            var rol='Business Executive';
        }
        if (name && email && role && mobile) {
            if (!message){
                var mailtoLink = "mailto:hr@deltainfotechsolutions.com?subject=" 
                            + encodeURIComponent("Application for " + rol) 
                            + "&body=" 
                            + encodeURIComponent(
                                "Name: " + name + "\n" +
                                "Email: " + email + "\n" +
                                "Role Applied For: " + rol + "\n" +
                                "Mobile Number: " + mobile + "\n" +
                                "Note: Please attach your resume manually before sending."
                            );

    
            }
            else{
                var mailtoLink = "mailto:hr@deltainfotechsolutions.com?subject=" 
                            + encodeURIComponent("Application for " + rol) 
                            + "&body=" 
                            + encodeURIComponent(
                                "Name: " + name + "\n" +
                                "Email: " + email + "\n" +
                                "Role Applied For: " + rol + "\n" +
                                "Mobile Number: " + mobile + "\n" +
                                "Message: " + message + "\n\n" +
                                "Note: Please attach your resume manually before sending."
                            );
    
            
    
            }
            window.location.href = mailtoLink;
            // Reset the form after submission
            $("#formsub")[0].reset();
            
        } else {
            alert("Please fill in all required fields before applying.");
        }
    });

    
})(jQuery);

