sr.reveal('header section h1',{
    origin: 'top',
    reset: false,
});

sr.reveal('header section p',{
    origin: 'bottom',
    reset: false,
});

sr.reveal('#home img',{
    origin: 'left',
});

sr.reveal('#home h1, #home .social-icons, #home .features',{
    origin: 'right',
    reset: false,
});

sr.reveal('#gallery img:first-child',{
    origin: 'top',
    reset: false,
    scale: 0.4,
});

sr.reveal('#gallery img:nth-child(2)',{
    origin: 'left',
    reset: false,
    scale: 0.4,
});

sr.reveal('#gallery img:nth-child(3)',{
    origin: 'bottom',
    reset: false,
    scale: 0.4,
});

sr.reveal('#gallery img:last-child',{
    origin: 'right',
    reset: false,
    scale: 0.4,
});

sr.reveal('#testimonials div:nth-child(3)',{
    origin: 'left',
});

sr.reveal('#testimonials div:nth-child(4)',{
    origin: 'bottom',
});

sr.reveal('#testimonials div:nth-child(5)',{
    origin: 'right',
});