gsap.from("nav img",{
    x : -100,
    opacity :0,
    delay :1,
    duration : 2,
})
gsap.from("nav h1",{
    x :-100,
    opacity:0,
    delay :1,
    duration:2,
})
gsap.from("nav li",{
    y :-10,
    opacity:0,
    delay :1,
    stagger :0.4,
})

gsap.from(".p1-left h1",{
    y :100,
    opacity:0,
    delay :1,
    duration:2,
    
})
gsap.from(".p1-left p",{
    y :100,
    opacity:0,
    duration :2,
    delay :1,
    
})
gsap.from(".p1-left button",{
    y :100,
    opacity:0,
    duration :2,
    delay :1,
    
})
gsap.from(".p1-right",{
    x :100,
    opacity:0,
    duration :2,
    stagger :0.4,
    delay :1,
})
gsap.from(".text",{
    x :-100,
    opacity:0,
    duration :1,
    scrollTrigger :{
        trigger :".p2tb",
        scroller : "body",
        // markers : true ,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p2tb",{
    y : -100,
    opacity :0 ,
    duration :2, 
    stagger :0.4,
    scrollTrigger :{
        trigger :".p2tb",
        scroller : "body",
        // markers : true ,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p2-bottom",{
    x : -10,
    opacity :0 ,
    duration :2, 
    scrollTrigger :{
        trigger :".p2-bottom",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p2bt",{
    y : -100,
    opacity :0 ,
    duration :2, 
    scrollTrigger :{
        trigger :".p2bt",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p3-top h1",{
    x : -100,
    opacity :0 ,
    duration :2, 
    scrollTrigger :{
        trigger :".p3-top h1",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p3-top p",{
    x : -10,
    opacity :0 ,
    duration :2, 
    scrollTrigger :{
        trigger :".p3-top p",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p3t-btn button",{
    x : 100,
    opacity :0 ,
    duration :2, 
    scrollTrigger :{
        trigger :".p3t-btn button",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p3-middle h1",{
    x : -100,
    opacity :0 ,
    duration :2, 
    scale : 0.5,
    rotate :180,
    scrollTrigger :{
        trigger :".p3-middle h1",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p3-middle p",{
    x : -100,
    opacity :0 ,
    duration :2, 
    scrollTrigger :{
        trigger :".p3-middle p",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 10%",
        scrub : 3,
    }
})
gsap.from(".p4-heading",{
    x : 10,
    opacity :0 ,
    duration :1, 
    scrollTrigger :{
        trigger :".p4-heading",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        // scrub : 4,
    }
})

gsap.from(".p4-main",{
    x : -100,
    opacity :0 ,
    duration :3, 
    scale :0.8,
    scrollTrigger :{
        trigger :".p4-main",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 20%",
        // scrub : 5,
    }
})

gsap.from(".p5-heading",{
    x : 10,
    opacity :0 ,
    duration :1, 
    scrollTrigger :{
        trigger :".p5-heading",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        // scrub : 4,
    }
})

gsap.from(".p5-main",{
    x : -100,
    opacity :0 ,
    duration :3, 
    scale :0.8,
    scrollTrigger :{
        trigger :".p5-main",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 20%",
        // scrub : 5,
    }
})
gsap.from(".p6-left",{
    x : -100,
    opacity :0 ,
    duration :1, 
    scrollTrigger :{
        trigger :".p6-left",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p6-right",{
    x : 100,
    opacity :0 ,
    duration :1, 
    scrollTrigger :{
        trigger :".p6-right",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})



gsap.from(".p7t-left",{
    x : 10,
    opacity :0 ,
    duration :1,
    scale :0.5,
    scrollTrigger :{
        trigger :".p7t-left",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p7t-right",{
    x : -10,
    opacity :0 ,
    duration :1, 
    scale :0.5,
    scrollTrigger :{
        trigger :".p7t-right",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p7b-left",{
    x : -100,
    opacity :0 ,
    duration :1, 
    scrollTrigger :{
        trigger :".p7b-left",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p7b-right",{
    x : 100,
    opacity :0 ,
    duration :1, 
    scrollTrigger :{
        trigger :".p7b-right",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p8-top",{
    x : 10,
    opacity :0 ,
    duration :1, 
    scale :0.5,
    scrollTrigger :{
        trigger :".p8-top",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p8b-left",{
    x : -100,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".p8b-left",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
    }
})
gsap.from(".p8b-right",{
    x : 100,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".p8b-right",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
    }
})

gsap.from(".p9-left",{
    x : 10,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".p9-left",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p9-right",{
    x : 100,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".p9-right",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p10-top h1",{
    x : -100,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".p10-top h1",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p10-top button",{
    x : 100,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".p10-top button",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})


gsap.from(".p10b-top img",{
    x : 10,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".p10b-top img",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p10b-top h1",{
    x : 10,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".p10b-top h1",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".list1",{
    x : -10,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".list1",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".list2",{
    x : -10,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".list2",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".list3 h1",{
    x : -10,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".list3 h1",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".list3 li",{
    x : -100,
    opacity :0 ,
    duration :1, 
   stagger :0.4,
    scrollTrigger :{
        trigger :".list3 li",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 50%",
        scrub : 4,
    }
})
gsap.from(".list4 h1",{
    x : 10,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".list4 h1",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".list4 li",{
    x : 100,
    opacity :0 ,
    duration :1, 
   stagger :0.4,
    scrollTrigger :{
        trigger :".list4 li",
        scroller : "body",
        // markers : true ,
        start : "top 90%",
        end : "top 50%",
        scrub : 4,
    }
})

gsap.from(".list3 h1",{
    x : -10,
    opacity :0 ,
    duration :1, 
    // scale :0.5,
    scrollTrigger :{
        trigger :".list3 h1",
        scroller : "body",
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})





