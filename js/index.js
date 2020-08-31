const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav selectors
const nav = document.querySelector('nav')
const nav1 = nav.querySelector('a:nth-of-type(1)')
const nav2 = nav.querySelector('a:nth-of-type(2)')
const nav3 = nav.querySelector('a:nth-of-type(3)')
const nav4 = nav.querySelector('a:nth-of-type(4)')
const nav5 = nav.querySelector('a:nth-of-type(5)')
const nav6 = nav.querySelector('a:nth-of-type(6)')

//nav updates
nav1.textContent = siteContent.nav["nav-item-1"]
nav2.textContent = siteContent.nav["nav-item-2"]
nav3.textContent = siteContent.nav["nav-item-3"]
nav4.textContent = siteContent.nav["nav-item-4"]
nav5.textContent = siteContent.nav["nav-item-5"]
nav6.textContent = siteContent.nav["nav-item-6"]



//cta selectors
const cta = document.querySelector('.cta')
const ctaH1 = cta.querySelector('h1')
const ctaBtn = cta.querySelector('button')
const ctaImg = cta.querySelector('#cta-img')

//cta element updates
ctaH1.textContent = siteContent['cta']['h1']
ctaBtn.textContent = siteContent['cta']['button']
ctaImg.setAttribute('src', siteContent['cta']['img-src'])



//main-content selectors
//top-content selectors
const mainContent = document.querySelector('.main-content')
const topContent = mainContent.querySelector('.top-content')
const mainDiv1 = topContent.querySelector('.text-content:nth-of-type(1)')
const mainDiv2 = topContent.querySelector('.text-content:nth-of-type(2)')
const firstH4 = mainDiv1.querySelector('h4')
const secondH4 = mainDiv2.querySelector('h4')
const firstP = mainDiv1.querySelector('p')
const secondP = mainDiv2.querySelector('p')

//middle-content selectors
const middleImg = mainContent.querySelector('.middle-img')

//bottom-content selectors
const bottomContent = mainContent.querySelector('.bottom-content')
const bottomDiv1 = bottomContent.querySelector('.text-content:nth-of-type(1)')
const bottomDiv2 = bottomContent.querySelector('.text-content:nth-of-type(2)')
const bottomDiv3 = bottomContent.querySelector('.text-content:nth-of-type(3)')
const bottomFirstH4 = bottomDiv1.querySelector('h4')
const bottomSecondH4 = bottomDiv2.querySelector('h4')
const bottomThirdH4 = bottomDiv3.querySelector('h4')
const bottomFirstP = bottomDiv1.querySelector('p')
const bottomSecondP = bottomDiv2.querySelector('p')
const bottomThirdP = bottomDiv3.querySelector('p')

//main-content updates
//top-content updates
firstH4.textContent = siteContent['main-content']['features-h4']
secondH4.textContent = siteContent['main-content']['about-h4']
firstP.textContent = siteContent['main-content']['features-content']
secondP.textContent = siteContent['main-content']['about-content']

//middle-content updates
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//bottom-content updates
bottomFirstH4.textContent = siteContent['main-content']['services-h4']
bottomSecondH4.textContent = siteContent['main-content']['product-h4']
bottomThirdH4.textContent = siteContent['main-content']['vision-h4']
bottomFirstP.textContent = siteContent['main-content']['services-content']
bottomSecondP.textContent = siteContent['main-content']['product-content']
bottomThirdP.textContent = siteContent['main-content']['vision-content']

//contact selectors
const contactContent = document.querySelector('.contact')
const contactH4 = contactContent.querySelector('h4')
const contactP1 = contactContent.querySelector('p:nth-of-type(1)')
const contactP2 = contactContent.querySelector('p:nth-of-type(2)')
const contactP3 = contactContent.querySelector('p:nth-of-type(3)')

//contact updates
contactH4.textContent = siteContent['contact']['contact-h4']
contactP1.textContent = siteContent['contact']['address']
contactP2.textContent = siteContent['contact']['phone']
contactP3.textContent = siteContent['contact']['email']

//footer selectors
const footerContent = document.querySelector('footer')
const footerP = footerContent.querySelector('p')

//footer updates
footerP.textContent = siteContent['footer']['copyright']