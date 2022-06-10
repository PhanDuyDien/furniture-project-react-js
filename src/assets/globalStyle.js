import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

 :root{
   /* Primary */
  --primary-orange: #FD8B5F;
  --primary-darkGreen: #03221F;

  /* Secondary */
  --secondary-green: #096A62;
  --secondary-yellow: #FEFFD8;
  --secondary-brown: #424242;

  /* Color support*/
  --clrSuccess: #00E096;
  --clrInfo: #0095FF;
  --clrWarning: #FFAA00;
  --clrDanger: #FF3D71;

  --gray-s01: #03221F;
  --gray-s02: #354E4C;
  --gray-s03: #869594;
  --gray-s04: #CFD5D4;
  --gray-s05: #F5F7F6;

  --white: #FFFFFF;

  /* Typhography */
  --fontBody: 'Raleway', sans-serif;
  --fontHeading:'Darker Grotesque', sans-serif;

  --fs-heading01: 90px;
  --fs-heading02: 55px;
  --fs-heading03: 40px;
  --fs-heading04: 30px;
  --fs-heading05: 20px;
  --fs-heading06: 18px;
  --fs-body01: 16px;
  --fs-body02: 14px;
  --fs-tagText: 14px;

  --fw-heading01: 700;
  --fw-heading02: 700;
  --fw-heading03: 600;
  --fw-heading04: 600;
  --fw-heading05: 700;
  --fw-heading06: 600;
  --fw-body01: 400;
  --fw-body02: 400;
  --fw-tagText: 500;

  --lh-heading01: 95px;
  --lh-heading02: 65px;
  --lh-heading03: 50px;
  --lh-heading04: 40px;
  --lh-heading05: 30px;
  --lh-heading06: 28px;
  --lh-body01: 26px;
  --lh-body02: 22px;
  --lh-tagText: 22px;



 }

 body, html{
   font-family: var(--fontBody);
   font-size: var(--fs-body01);
   font-weight: var(--fw-body01);
   line-height: var(--lh-body01);
 }

 h1,h2,h3,h4,h5,h6{
   font-family: var(--fontHeading);
 }

 * {
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 a{
  text-decoration: none;
 }

 ul{
  list-style: none;
  margin: 0;
  padding: 0;
 }

 img{
   width: 100%;
   display: block;
 }

 .wrapper{
   max-width: 1440px;
   margin: 0 auto;
 }

 .container{
   max-width: 1200px;
   padding: 0 15px;
   margin: 0 auto;
 }

 .flex-center{
  display: flex;
  align-items: center;
  justify-content: center;
 }

 .flex-between{
  display: flex;
  align-items: center;
  justify-content: space-between;
 }

 .h-100{
   height: 100%;
 }

 .w-100{
   width: 100%;
 }

 .col-1{
    width: 8.333%;
 }
 .col-2{
   width: 16.666%;
 }
 .col-3{
  width: 25%;
 }
 .col-4{
  width: 33.333%;
 }
 .col-5{
  width: 41.666%;
 }
 .col-6{
  width: 50%;
 }
 .col-7{
    width: 58.333%;
 }
 .col-8{
  width: 66.666%;
 }
 .col-9{
  width: 75%;

 }
 .col-10{
  width: 83.333%;
 }
 .col-11{
  width: 91.666%;
 }
 .col-12{
    width: 100%;
 }

 /* [class*="col-"] {
   display: flex;
   align-items: center;
 } */

 
`

export default GlobalStyle
