console.log("Portfolio Loaded");
/* ACTIVE NAV LINK */

.active-link{
    color:#06b6d4 !important;
}

/* SCROLL TOP BUTTON */

.scroll-top{
    position:fixed;
    bottom:25px;
    right:25px;

    width:50px;
    height:50px;

    border:none;
    border-radius:50%;

    background:linear-gradient(
        135deg,
        #7c3aed,
        #06b6d4
    );

    color:white;
    font-size:22px;
    cursor:pointer;

    opacity:0;
    visibility:hidden;

    transition:.3s;

    z-index:1000;
}

.scroll-top.show{
    opacity:1;
    visibility:visible;
}

.scroll-top:hover{
    transform:translateY(-5px);
}
