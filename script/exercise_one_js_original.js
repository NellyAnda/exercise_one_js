let body = document.querySelector('body');
body.setAttribute('cz-shortcut-listen', 'true');

let divContainerOne = document.createElement('div');
divContainerOne.classList.add('container');
body.appendChild(divContainerOne);

let divSiteHeaderClearfix = document.createElement('div');
divContainerOne.appendChild(divSiteHeaderClearfix);
divSiteHeaderClearfix.classList.add('site-header', 'clearfix');
divSiteHeaderClearfix.setAttribute('role','banner');

let divSiteLogo = document.createElement('div');
divSiteLogo.classList.add('site-logo');
divSiteLogo.innerHTML = 'HTML5';
divSiteHeaderClearfix.appendChild(divSiteLogo);

let spanStarOne = document.createElement('span');
spanStarOne.classList.add('star');
spanStarOne.innerHTML = ' &#9733;';
divSiteLogo.appendChild(spanStarOne);

let textBoilerplate = document.createElement('text');
let boilerplateText = document.createTextNode(' Boilerplate');
divSiteLogo.appendChild(boilerplateText);

let ulSiteNav = document.createElement('ul');
ulSiteNav.classList.add('site-nav', 'inline-block-list');
divSiteHeaderClearfix.appendChild(ulSiteNav);

let liOneOfUlSiteNav = document.createElement('li');
ulSiteNav.appendChild(liOneOfUlSiteNav);

let liTwoOfUlSiteNav = document.createElement('li');
ulSiteNav.appendChild(liTwoOfUlSiteNav);

let liThreeOfUlSiteNav = document.createElement('li');
ulSiteNav.appendChild(liThreeOfUlSiteNav);

let linkOnLiOneOfUlSiteNav = document.createElement('a');
linkOnLiOneOfUlSiteNav.href = 'https://github.com/h5bp/html5-boilerplate';
linkOnLiOneOfUlSiteNav.setAttribute('data-ga-category', 'Outbound links');
linkOnLiOneOfUlSiteNav.setAttribute('data-ga-action', 'Nav click');
linkOnLiOneOfUlSiteNav.setAttribute('data-ga-label', 'Source code');
linkOnLiOneOfUlSiteNav.innerHTML = 'Source code';
liOneOfUlSiteNav.appendChild(linkOnLiOneOfUlSiteNav);

let linkOnLiTwOfUlSiteNav = document.createElement('a');
linkOnLiTwOfUlSiteNav.href = 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md';
linkOnLiTwOfUlSiteNav.setAttribute('data-ga-category', 'Outbound links');
linkOnLiTwOfUlSiteNav.setAttribute('data-ga-action', 'Nav click');
linkOnLiTwOfUlSiteNav.setAttribute('data-ga-label', 'Docs');
linkOnLiTwOfUlSiteNav.innerHTML = 'Docs';
liTwoOfUlSiteNav.appendChild(linkOnLiTwOfUlSiteNav);

let linkOnLiThreeOfUlSiteNav = document.createElement('a');
linkOnLiThreeOfUlSiteNav.href = 'https://h5bp.org/';
linkOnLiThreeOfUlSiteNav.setAttribute('data-ga-category', 'Outbound links');
linkOnLiThreeOfUlSiteNav.setAttribute('data-ga-action', 'Nav click');
linkOnLiThreeOfUlSiteNav.setAttribute('data-ga-label', 'Other Projects');
linkOnLiThreeOfUlSiteNav.innerHTML = 'Other Projects';
liThreeOfUlSiteNav.appendChild(linkOnLiThreeOfUlSiteNav);

let divSitePromo = document.createElement('div');
divSitePromo.classList.add('site-promo');
divContainerOne.appendChild(divSitePromo);

let titleOne = document.createElement('h1');
titleOne.innerHTML = 'The web\'s most popular front-end template';
divSitePromo.appendChild(titleOne);

let paragraphDescription = document.createElement('p');
paragraphDescription.classList.add('description');
paragraphDescription.innerHTML = 'HTML5 Boilerplate helps you build ';
divSitePromo.appendChild(paragraphDescription);

let strongOne = document.createElement('strong');
strongOne.innerHTML = 'fast';
paragraphDescription.appendChild(strongOne);

let comaOne = document.createElement('text');
let oneComa = document.createTextNode(', ');
paragraphDescription.appendChild(oneComa);

let strongTwo = document.createElement('strong');
strongTwo.innerHTML = 'robust';
paragraphDescription.appendChild(strongTwo);

let comaTwo = document.createElement('text');
let twoComa = document.createTextNode(', and ');
paragraphDescription.appendChild(twoComa);

let strongThree = document.createElement('strong');
strongThree.innerHTML = 'adaptable';
paragraphDescription.appendChild(strongThree);

let endParagraphDescription = document.createElement('text');
let paragraphDescriptionEnd = document.createTextNode(' web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.');
paragraphDescription.appendChild(paragraphDescriptionEnd);

let divCtaOption = document.createElement('div');
divCtaOption.classList.add('cta-option');
divSitePromo.appendChild(divCtaOption)

let linkOneOfdivCtaOption = document.createElement('a');
linkOneOfdivCtaOption.classList.add('btn', 'btn-download');
linkOneOfdivCtaOption.href = 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip';
linkOneOfdivCtaOption.setAttribute('data-ga-category', 'Download');
linkOneOfdivCtaOption.setAttribute('data-ga-action', 'Download - top');
linkOneOfdivCtaOption.setAttribute('data-ga-label', 'v8.0.0');
divCtaOption.appendChild(linkOneOfdivCtaOption);

let strongDownload = document.createElement('strong');
strongDownload.innerHTML = 'Download';
linkOneOfdivCtaOption.appendChild(strongDownload);

let spanVersion = document.createElement('span');
spanVersion.classList.add('version');
spanVersion.innerHTML = 'v8.0.0';
linkOneOfdivCtaOption.appendChild(spanVersion);

let linkTwoOfdivCtaOption = document.createElement('a');
linkTwoOfdivCtaOption.classList.add('last-update');
linkTwoOfdivCtaOption.href = 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/CHANGELOG.md';
linkTwoOfdivCtaOption.setAttribute('data-ga-category', 'Outbound links');
linkTwoOfdivCtaOption.setAttribute('data-ga-action', 'See the CHANGELOG');
linkTwoOfdivCtaOption.setAttribute('data-ga-label', 'v8.0.0');
linkTwoOfdivCtaOption.innerHTML = 'See the CHANGELOG';
divCtaOption.appendChild(linkTwoOfdivCtaOption);

let divSiteSectionOne = document.createElement('div');
divSiteSectionOne.classList.add('site-section');
body.appendChild(divSiteSectionOne);

let divContainerTwo = document.createElement('div');
divContainerTwo.classList.add('container');
divSiteSectionOne.appendChild(divContainerTwo);

let firstTitleTwo = document.createElement('h2');
firstTitleTwo.innerHTML = 'Save time. Create with confidence';
divContainerTwo.appendChild(firstTitleTwo);

let divGrid = document.createElement('div');
divGrid.classList.add('grid');
divContainerTwo.appendChild(divGrid);

let divGridCellOne = document.createElement('div');
divGridCellOne.classList.add('grid-cell');
divGrid.appendChild(divGridCellOne);

let firstTitleThree = document.createElement('h3')
divGridCellOne.appendChild(firstTitleThree);

let spanStarTwo = document.createElement('span');
spanStarTwo.classList.add('star');
spanStarTwo.innerHTML = '&#9733;';
firstTitleThree.appendChild(spanStarTwo);

let textAnalytics = document.createElement('text');
let analyticText = document.createTextNode(' Analytics, icons, and more');
firstTitleThree.appendChild(analyticText);

let paragraphOfDivGridCellOne =document.createElement('p');
paragraphOfDivGridCellOne.innerHTML = 'A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.';
divGridCellOne.appendChild(paragraphOfDivGridCellOne);

let divGridCellTwo = document.createElement('div');
divGridCellTwo.classList.add('grid-cell');
divGrid.appendChild(divGridCellTwo);

let secondTitleThree = document.createElement('h3')
divGridCellTwo.appendChild(secondTitleThree);

let spanStarThree = document.createElement('span');
spanStarThree.classList.add('star');
spanStarThree.innerHTML = '&#9733;';
secondTitleThree.appendChild(spanStarThree);

let textNormalize = document.createElement('text');
let normalizeText = document.createTextNode(' Normalize.css and helpers');
secondTitleThree.appendChild(normalizeText);

let paragraphOfDivGridCellTwo =document.createElement('p');
paragraphOfDivGridCellTwo.innerHTML = 'Includes ';
divGridCellTwo.appendChild(paragraphOfDivGridCellTwo);

let linkOfDivGridCellTwo  = document.createElement('a');
linkOfDivGridCellTwo.href = 'https://necolas.github.io/normalize.css/';
linkOfDivGridCellTwo.innerHTML = 'Normalize.css';
paragraphOfDivGridCellTwo.appendChild(linkOfDivGridCellTwo);

let paragraphOfDivGridCellTwoEnd = document.createElement('text');
let endParagraphOfDivGridCellTwo = document.createTextNode(' — a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles.');
paragraphOfDivGridCellTwo.appendChild(endParagraphOfDivGridCellTwo);

let divGridCellThree = document.createElement('div');
divGridCellThree.classList.add('grid-cell');
divGrid.appendChild(divGridCellThree);

let thirdTitleThree = document.createElement('h3')
divGridCellThree.appendChild(thirdTitleThree);

let spanStarFour = document.createElement('span');
spanStarFour.classList.add('star');
spanStarFour.innerHTML = '&#9733;';
thirdTitleThree.appendChild(spanStarFour);

let textModernize = document.createElement('text');
let modernizeText = document.createTextNode(' Modernizr');
thirdTitleThree.appendChild(modernizeText);

let paragraphOfDivGridCellThree =document.createElement('p');
paragraphOfDivGridCellThree.innerHTML = 'Get the latest minified versions of Modernizr: ';
divGridCellThree.appendChild(paragraphOfDivGridCellThree);

let linkOfDivGridCellThree  = document.createElement('a');
linkOfDivGridCellThree.href = 'https://modernizr.com/';
linkOfDivGridCellThree.innerHTML = 'Modernizr';
paragraphOfDivGridCellThree.appendChild(linkOfDivGridCellThree);

let paragraphOfDivGridCellThreeEnd = document.createElement('text');
let endParagraphOfDivGridCellThree = document.createTextNode(' feature detection library, complete with a custom build configuration');
paragraphOfDivGridCellThree.appendChild(endParagraphOfDivGridCellThree);

let divGridCellFour = document.createElement('div');
divGridCellFour.classList.add('grid-cell');
divGrid.appendChild(divGridCellFour);

let fourthTitleThree = document.createElement('h3')
divGridCellFour.appendChild(fourthTitleThree);

let spanStarFive = document.createElement('span');
spanStarFive.classList.add('star');
spanStarFive.innerHTML = '&#9733;';
fourthTitleThree.appendChild(spanStarFive);

let textPerformance = document.createElement('text');
let performanceText = document.createTextNode(' High performance');
fourthTitleThree.appendChild(performanceText);

let paragraphOfDivGridCellFour =document.createElement('p');
paragraphOfDivGridCellFour.innerHTML = 'Apache settings to help you deliver excellent site performance. We independently maintain ';
divGridCellFour.appendChild(paragraphOfDivGridCellFour);

let linkOfDivGridCellFour  = document.createElement('a');
linkOfDivGridCellFour.href = 'https://github.com/h5bp/server-configs';
linkOfDivGridCellFour.innerHTML = 'server configs';
paragraphOfDivGridCellFour.appendChild(linkOfDivGridCellFour);

let paragraphOfDivGridCellFourEnd = document.createElement('text');
let endParagraphOfDivGridCellFour = document.createTextNode(' for multiple platforms.');
paragraphOfDivGridCellFour.appendChild(endParagraphOfDivGridCellFour);

let divSiteSectionTwo = document.createElement('div');
divSiteSectionTwo.classList.add('site-section', 'site-section-video');
body.appendChild(divSiteSectionTwo);

let secondTitleTwo = document.createElement('h2');
secondTitleTwo.innerHTML = 'Introduction to v8';
divSiteSectionTwo.appendChild(secondTitleTwo);

let divContent = document.createElement('div');
divContent.classList.add('content');
divSiteSectionTwo.appendChild(divContent);

let paragraphOfDivContent = document.createElement('p'); 
paragraphOfDivContent.classList.add('new');
paragraphOfDivContent.innerHTML = 'What\'s new?';
divContent.appendChild(paragraphOfDivContent);

let ulOfDivContent = document.createElement('ul'); 
ulOfDivContent.classList.add('new');
divContent.appendChild(ulOfDivContent);

let liOneOfUlDivContent = document.createElement('li');
liOneOfUlDivContent.innerHTML = 'Added a sample package.json with basic Parcel commands to jump start your app development';
ulOfDivContent.appendChild(liOneOfUlDivContent);

let liTwoOfUlDivContent = document.createElement('li');
liTwoOfUlDivContent.innerHTML = 'Added sample Open Graph metadata';
ulOfDivContent.appendChild(liTwoOfUlDivContent);

let liThreeOfUlDivContent = document.createElement('li');
liThreeOfUlDivContent.innerHTML = 'Updated Modernizr and main.css';
ulOfDivContent.appendChild(liThreeOfUlDivContent);

let liFourOfUlDivContent = document.createElement('li');
liFourOfUlDivContent.innerHTML = 'Removed jQuery';
ulOfDivContent.appendChild(liFourOfUlDivContent);

let liFiveOfUlDivContent = document.createElement('li');
liFiveOfUlDivContent.innerHTML = 'Set anonymizeIp to true in Google Analytics snippet';
ulOfDivContent.appendChild(liFiveOfUlDivContent);

let liSixOfUlDivContent = document.createElement('li');
liSixOfUlDivContent.innerHTML = 'Removed Browser Upgrade Prompt';
ulOfDivContent.appendChild(liSixOfUlDivContent);

let liSevenOfUlDivContent = document.createElement('li');
liSevenOfUlDivContent.innerHTML = 'That\'s just the start of all the goodness. ';
ulOfDivContent.appendChild(liSevenOfUlDivContent);

let linkOnliSevenOfUlDivContent = document.createElement('a');
linkOnliSevenOfUlDivContent.href = 'https://github.com/h5bp/html5-boilerplate/blob/master/CHANGELOG.md';
linkOnliSevenOfUlDivContent.innerHTML = 'Check out the Changelog for all the details.';
liSevenOfUlDivContent.appendChild(linkOnliSevenOfUlDivContent);

let divSiteSectionThree = document.createElement('div');
divSiteSectionThree.classList.add('site-section');
body.appendChild(divSiteSectionThree);

let thirdTitleTwo = document.createElement('h2');  
thirdTitleTwo.innerHTML = 'Who uses HTML5 Boilerplate?';
divSiteSectionThree.appendChild(thirdTitleTwo);

let paragraphOfDivSiteSectionThree = document.createElement('p');
paragraphOfDivSiteSectionThree.classList.add('in-the-wild');
divSiteSectionThree.appendChild(paragraphOfDivSiteSectionThree);

let linkOneOfDivSiteSectionThree = document.createElement('a');
linkOneOfDivSiteSectionThree.href = 'https://www.microsoft.com/fr-fr/surface';
linkOneOfDivSiteSectionThree.innerHTML = 'Microsoft';
paragraphOfDivSiteSectionThree.appendChild(linkOneOfDivSiteSectionThree);

let comaOneOfDivSiteSectionThree = document.createElement('text');
let divSiteSectionThreeComaOne = document.createTextNode(', ');
paragraphOfDivSiteSectionThree.appendChild(divSiteSectionThreeComaOne);

let linkTwoOfDivSiteSectionThree = document.createElement('a');
linkTwoOfDivSiteSectionThree.href = 'https://data.nasa.gov/';
linkTwoOfDivSiteSectionThree.innerHTML = 'NASA';
paragraphOfDivSiteSectionThree.appendChild(linkTwoOfDivSiteSectionThree);

let comaTwoOfDivSiteSectionThree = document.createElement('text');
let divSiteSectionThreeComaTwo = document.createTextNode(', ');
paragraphOfDivSiteSectionThree.appendChild(divSiteSectionThreeComaTwo);

let linkThreeOfDivSiteSectionThree = document.createElement('a');
linkThreeOfDivSiteSectionThree.href = 'https://www.nikesb.com/';
linkThreeOfDivSiteSectionThree.innerHTML = 'Nike';
paragraphOfDivSiteSectionThree.appendChild(linkThreeOfDivSiteSectionThree);

let comaThreeOfDivSiteSectionThree = document.createElement('text');
let divSiteSectionThreeComaThree = document.createTextNode(', ');
paragraphOfDivSiteSectionThree.appendChild(divSiteSectionThreeComaThree);

let linkFourOfDivSiteSectionThree = document.createElement('a');
linkFourOfDivSiteSectionThree.href = 'https://barackobama.com/';
linkFourOfDivSiteSectionThree.innerHTML = 'Barack Obama';
paragraphOfDivSiteSectionThree.appendChild(linkFourOfDivSiteSectionThree);

let comaFourOfDivSiteSectionThree = document.createElement('text');
let divSiteSectionThreeComaFour = document.createTextNode(', ');
paragraphOfDivSiteSectionThree.appendChild(divSiteSectionThreeComaFour);

let linkFiveOfDivSiteSectionThree = document.createElement('a');
linkFiveOfDivSiteSectionThree.href = 'https://www.itv.com/news';
linkFiveOfDivSiteSectionThree.innerHTML = 'ITV News';
paragraphOfDivSiteSectionThree.appendChild(linkFiveOfDivSiteSectionThree);

let comaFiveOfDivSiteSectionThree = document.createElement('text');
let divSiteSectionThreeComaFive = document.createTextNode(', ');
paragraphOfDivSiteSectionThree.appendChild(divSiteSectionThreeComaFive);

let linkSixOfDivSiteSectionThree = document.createElement('a');
linkSixOfDivSiteSectionThree.href = 'https://creativecommons.org/';
linkSixOfDivSiteSectionThree.innerHTML = 'Creative Commons';
paragraphOfDivSiteSectionThree.appendChild(linkSixOfDivSiteSectionThree);

let comaSixOfDivSiteSectionThree = document.createElement('text');
let divSiteSectionThreeComaSix = document.createTextNode(', ');
paragraphOfDivSiteSectionThree.appendChild(divSiteSectionThreeComaSix);

let linkSevenOfDivSiteSectionThree = document.createElement('a');
linkSevenOfDivSiteSectionThree.href = 'https://auspost.com.au/';
linkSevenOfDivSiteSectionThree.innerHTML = 'Australia Post';
paragraphOfDivSiteSectionThree.appendChild(linkSevenOfDivSiteSectionThree);

let comaSevenOfDivSiteSectionThree = document.createElement('text');
let divSiteSectionThreeComaSeven = document.createTextNode(', and ');
paragraphOfDivSiteSectionThree.appendChild(divSiteSectionThreeComaSeven);

let linkEightOfDivSiteSectionThree = document.createElement('a');
linkEightOfDivSiteSectionThree.href = 'https://github.com/h5bp/html5-boilerplate/wiki';
linkEightOfDivSiteSectionThree.innerHTML = 'many more';
paragraphOfDivSiteSectionThree.appendChild(linkEightOfDivSiteSectionThree);

let dotOfDivSiteSectionThree = document.createElement('text');
let divSiteSectionThreeDot = document.createTextNode('.');
paragraphOfDivSiteSectionThree.appendChild(divSiteSectionThreeDot);

let divCtaOptionTwo = document.createElement('div');
divCtaOptionTwo.classList.add('cta-option');
divSiteSectionThree.appendChild(divCtaOptionTwo)

let linkOneOfdivCtaOptionTwo = document.createElement('a');
linkOneOfdivCtaOptionTwo.classList.add('btn', 'btn-download');
linkOneOfdivCtaOptionTwo.href = 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip';
linkOneOfdivCtaOptionTwo.setAttribute('data-ga-category', 'Download');
linkOneOfdivCtaOptionTwo.setAttribute('data-ga-action', 'Download - bottom');
linkOneOfdivCtaOptionTwo.setAttribute('data-ga-label', 'v8.0.0');
divCtaOptionTwo.appendChild(linkOneOfdivCtaOptionTwo);

let strongDownloadTwo = document.createElement('strong');
strongDownloadTwo.innerHTML = 'Download ';
linkOneOfdivCtaOptionTwo.appendChild(strongDownloadTwo);

let spanVersionTwo = document.createElement('span');
spanVersionTwo.classList.add('version');
spanVersionTwo.innerHTML = 'v8.0.0';
linkOneOfdivCtaOptionTwo.appendChild(spanVersionTwo);

let divAside = document.createElement('div');
divAside.classList.add('aside');
body.appendChild(divAside);

let divContainerThree = document.createElement('div');
divContainerThree.classList.add('container');
divAside.appendChild(divContainerThree);

let ulOfDivContainerThree = document.createElement('ul'); 
ulOfDivContainerThree.classList.add('inline-block-list');
divContainerThree.appendChild(ulOfDivContainerThree);

let liOneOfUlDivContainerThree = document.createElement('li');
ulOfDivContainerThree.appendChild(liOneOfUlDivContainerThree);

let linkOneOfDivContainerThree = document.createElement('a');
linkOneOfDivContainerThree.href = 'https://github.com/h5bp/html5-boilerplate/issues';
linkOneOfDivContainerThree.setAttribute('data-ga-category', 'Outbound links');
linkOneOfDivContainerThree.setAttribute('data-ga-action', 'Footer click');
linkOneOfDivContainerThree.setAttribute('data-ga-label', 'Report issues');
liOneOfUlDivContainerThree.appendChild(linkOneOfDivContainerThree);

let spanOneDivContainerThree = document.createElement('span');
spanOneDivContainerThree.classList.add('Icon', 'Icon--github');  
linkOneOfDivContainerThree.appendChild(spanOneDivContainerThree);

let textSpanOneDivContainerThree = document.createElement('text');
let spanOneDivContainerThreeText = document.createTextNode(' Report issues');
linkOneOfDivContainerThree.appendChild(spanOneDivContainerThreeText);

let liTwoOfUlDivContainerThree = document.createElement('li');
ulOfDivContainerThree.appendChild(liTwoOfUlDivContainerThree);

let linkTwoOfDivContainerThree = document.createElement('a');
linkTwoOfDivContainerThree.href = 'https://stackoverflow.com/questions/tagged/html5boilerplate';
linkTwoOfDivContainerThree.setAttribute('data-ga-category', 'Outbound links');
linkTwoOfDivContainerThree.setAttribute('data-ga-action', 'Footer click');
linkTwoOfDivContainerThree.setAttribute('data-ga-label', ' Help on Stack Overflow');
liTwoOfUlDivContainerThree.appendChild(linkTwoOfDivContainerThree);

let spanTwoDivContainerThree = document.createElement('span');
spanTwoDivContainerThree.classList.add('Icon', 'Icon--stackoverflow');  
linkTwoOfDivContainerThree.appendChild(spanTwoDivContainerThree);

let textSpanTwoDivContainerThree = document.createElement('text');
let spanTwoDivContainerThreeText = document.createTextNode(' Help on Stack Overflow');
linkTwoOfDivContainerThree.appendChild(spanTwoDivContainerThreeText);

let liThreeOfUlDivContainerThree = document.createElement('li');
ulOfDivContainerThree.appendChild(liThreeOfUlDivContainerThree);

let linkThreeOfDivContainerThree = document.createElement('a');
linkThreeOfDivContainerThree.href = 'https://h5bp.net/';
linkThreeOfDivContainerThree.setAttribute('data-ga-category', 'Outbound links');
linkThreeOfDivContainerThree.setAttribute('data-ga-action', 'Footer click');
linkThreeOfDivContainerThree.setAttribute('data-ga-label', ' View the showcase');
liThreeOfUlDivContainerThree.appendChild(linkThreeOfDivContainerThree);

let spanThreeDivContainerThree = document.createElement('span');
spanThreeDivContainerThree.classList.add('Icon', 'Icon--html5');  
linkThreeOfDivContainerThree.appendChild(spanThreeDivContainerThree);

let textSpanThreeDivContainerThree = document.createElement('text');
let spanThreeDivContainerThreeText = document.createTextNode(' View the showcase');
linkThreeOfDivContainerThree.appendChild(spanThreeDivContainerThreeText);

let footer = document.createElement('footer');
footer.classList.add('site-footer');  
body.appendChild(footer);

let paragraphOneOfFooter = document.createElement('p');
footer.appendChild(paragraphOneOfFooter);

let iframeOne = document.createElement('iframe');
iframeOne.setAttribute('id', 'twitter-widget-1');
iframeOne.setAttribute('scrolling', 'no');
iframeOne.setAttribute('frameborder', '0');
iframeOne.setAttribute('allowtransparency', 'true');
iframeOne.setAttribute('allowfullscreen', 'true');
iframeOne.setAttribute('class', 'twitter-share-button twitter-share-button-rendered twitter-tweet-button'); 
iframeOne.setAttribute('style', 'position: static; visibility: visible; width: 76px; height: 28px;');   
iframeOne.setAttribute('title', 'Twitter Tweet Button');
iframeOne.setAttribute('src', 'https://platform.twitter.com/widgets/tweet_button.96fd96193cc66c3e11d4c5e4c7c7ec97.en.html#dnt=false&amp;id=twitter-widget-1&amp;lang=en&amp;original_referer=https%3A%2F%2Fhtml5boilerplate.com%2F&amp;size=l&amp;text=HTML5%20Boilerplate%3A%20The%20rock-solid%20professional%20front-end%20template&amp;time=1601825642300&amp;type=share&amp;url=https%3A%2F%2Fhtml5boilerplate.com%2F&amp;via=h5bp');
iframeOne.setAttribute('data-url', 'https://html5boilerplate.com');
paragraphOneOfFooter.appendChild(iframeOne);

let spaceBetweenIframes = document.createElement('text');
let spaceBetweenIframesText = document.createTextNode(' ');
paragraphOneOfFooter.appendChild(spaceBetweenIframesText);

let iframeTwo = document.createElement('iframe');
iframeTwo.setAttribute('id', 'twitter-widget-0');
iframeTwo.setAttribute('scrolling', 'no');
iframeTwo.setAttribute('frameborder', '0');
iframeTwo.setAttribute('allowtransparency', 'true');
iframeTwo.setAttribute('allowfullscreen', 'true');
iframeTwo.setAttribute('class', 'twitter-follow-button twitter-follow-button-rendered');  
iframeTwo.setAttribute('style', 'position: static; visibility: visible; width: 125px; height: 28px;'); 
iframeTwo.setAttribute('title', 'Twitter Follow Button');
iframeTwo.setAttribute('src', 'https://platform.twitter.com/widgets/follow_button.96fd96193cc66c3e11d4c5e4c7c7ec97.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=h5bp&amp;show_count=false&amp;show_screen_name=true&amp;size=l&amp;time=1601814760558');
iframeTwo.setAttribute('data-screen-name', 'h5bp');
paragraphOneOfFooter.appendChild(iframeTwo);

let paragraphTwoOfFooter = document.createElement('p');
footer.appendChild(paragraphTwoOfFooter);

let textOneOfParagraphTwoOfFooter = document.createElement('text');
let textOneOfParagraphTwoOfFooterText = document.createTextNode('A project from ');
paragraphTwoOfFooter.appendChild(textOneOfParagraphTwoOfFooterText);

let linkOneOfParagraphTwoOfFooter = document.createElement('a');
linkOneOfParagraphTwoOfFooter.href = 'https://github.com/h5bp';
linkOneOfParagraphTwoOfFooter.innerHTML = 'H5BP';
paragraphTwoOfFooter.appendChild(linkOneOfParagraphTwoOfFooter);

let textOTwoOfParagraphTwoOfFooter = document.createElement('text');
let textTwoOfParagraphTwoOfFooterText = document.createTextNode(' currently maintained by');
paragraphTwoOfFooter.appendChild(textTwoOfParagraphTwoOfFooterText);

let breakOfParagraphTwoOfFooter = document.createElement('br');
paragraphTwoOfFooter.appendChild(breakOfParagraphTwoOfFooter);

let linkTwoOfParagraphTwoOfFooter = document.createElement('a');
linkTwoOfParagraphTwoOfFooter.href = 'https://htmlcssjavascript.com/';
linkTwoOfParagraphTwoOfFooter.innerHTML = 'Rob Larsen';
paragraphTwoOfFooter.appendChild(linkTwoOfParagraphTwoOfFooter);

let textThreeOfParagraphTwoOfFooter = document.createElement('text');
let textThreeOfParagraphTwoOfFooterText = document.createTextNode(' & ');
paragraphTwoOfFooter.appendChild(textThreeOfParagraphTwoOfFooterText);

let linkThreeOfParagraphTwoOfFooter = document.createElement('a');
linkThreeOfParagraphTwoOfFooter.href = 'https://github.com/coliff';
linkThreeOfParagraphTwoOfFooter.innerHTML = 'Christian Oliff';
paragraphTwoOfFooter.appendChild(linkThreeOfParagraphTwoOfFooter);

let paragraphThreeOfFooter = document.createElement('p');
footer.appendChild(paragraphThreeOfFooter);

let textOneOfParagraphThreeOfFooter = document.createElement('text');
let textOneOfParagraphThreeOfFooterText = document.createTextNode('This project wouldn\'t have been possible without our past team members:');
paragraphThreeOfFooter.appendChild(textOneOfParagraphThreeOfFooterText);

let breakOfaragraphThreeOfFooter = document.createElement('br');
paragraphThreeOfFooter.appendChild(breakOfaragraphThreeOfFooter);

let linkOneOfParagraphThreeOfFooter = document.createElement('a');
linkOneOfParagraphThreeOfFooter.href = 'https://mathiasbynens.be/';
linkOneOfParagraphThreeOfFooter.innerHTML = 'Mathias Bynens';
paragraphThreeOfFooter.appendChild(linkOneOfParagraphThreeOfFooter);

let textTwoOfParagraphThreeOfFooter = document.createElement('text');
let textTwoOfParagraphThreeOfFooterText = document.createTextNode(', ');
paragraphThreeOfFooter.appendChild(textTwoOfParagraphThreeOfFooterText);

let linkTwoOfParagraphThreeOfFooter = document.createElement('a');
linkTwoOfParagraphThreeOfFooter.href = 'https://twitter.com/alrra';
linkTwoOfParagraphThreeOfFooter.innerHTML = 'Cătălin Mariș';
paragraphThreeOfFooter.appendChild(linkTwoOfParagraphThreeOfFooter);

let textThreeOfParagraphThreeOfFooter = document.createElement('text');
let textThreeOfParagraphThreeOfFooterText = document.createTextNode(', ');
paragraphThreeOfFooter.appendChild(textThreeOfParagraphThreeOfFooterText);

let linkThreeOfParagraphThreeOfFooter = document.createElement('a');
linkThreeOfParagraphThreeOfFooter.href = 'https://drublic.de/';
linkThreeOfParagraphThreeOfFooter.innerHTML = 'Hans Christian Reinl';
paragraphThreeOfFooter.appendChild(linkThreeOfParagraphThreeOfFooter);

let textFourOfParagraphThreeOfFooter = document.createElement('text');
let textFourOfParagraphThreeOfFooterText = document.createTextNode(', ');
paragraphThreeOfFooter.appendChild(textFourOfParagraphThreeOfFooterText);

let linkFourOfParagraphThreeOfFooter = document.createElement('a');
linkFourOfParagraphThreeOfFooter.href = 'http://nicolasgallagher.com/';
linkFourOfParagraphThreeOfFooter.innerHTML = 'Nicolas Gallagher';
paragraphThreeOfFooter.appendChild(linkFourOfParagraphThreeOfFooter);

let textFiveOfParagraphThreeOfFooter = document.createElement('text');
let textFiveOfParagraphThreeOfFooterText = document.createTextNode(', ');
paragraphThreeOfFooter.appendChild(textFiveOfParagraphThreeOfFooter);

let linkFiveOfParagraphThreeOfFooter = document.createElement('a');
linkFiveOfParagraphThreeOfFooter.href = 'https://www.paulirish.com/';
linkFiveOfParagraphThreeOfFooter.innerHTML = 'Paul Irish';
paragraphThreeOfFooter.appendChild(linkFiveOfParagraphThreeOfFooter);

let textSixOfParagraphThreeOfFooter = document.createElement('text');
let textSixOfParagraphThreeOfFooterText = document.createTextNode(', and ');
paragraphThreeOfFooter.appendChild(textSixOfParagraphThreeOfFooterText);

let linkSixOfParagraphThreeOfFooter = document.createElement('a');
linkSixOfParagraphThreeOfFooter.href = 'http://nimbupani.com/';
linkSixOfParagraphThreeOfFooter.innerHTML = 'Divya Manian';
paragraphThreeOfFooter.appendChild(linkSixOfParagraphThreeOfFooter);

let textSevenOfParagraphThreeOfFooter = document.createElement('text');
let textSevenOfParagraphThreeOfFooterText = document.createTextNode('.');
paragraphThreeOfFooter.appendChild(textSevenOfParagraphThreeOfFooterText);

let scriptOne = document.createElement('script');
scriptOne.setAttribute('id', 'twitter-wjs');
scriptOne.setAttribute('src', 'https://platform.twitter.com/widgets.js');
body.appendChild(scriptOne);

let scriptTwo = document.createElement('script');
scriptTwo.setAttribute('src', 'https://www.google-analytics.com/analytics.js');
body.appendChild(scriptTwo);

let scriptThree = document.createElement('script');
scriptThree.innerText = '!function(l,u){"use strict";var t,e,a,n,o,r,d=l.document;function i(t){var e,a,n,o,r,i,c,g=function t(e,a){return!0===e.hasAttribute(a)?e:e.parentNode!==d.body?t(e.parentNode,a):u}(t.target,"data-ga-action"),s=!1;g!==u&&(e=g.getAttribute("data-ga-action")||u,a=g.getAttribute("data-ga-category")||u,n=g.getAttribute("data-ga-label")||u,o=g.getAttribute("href"),r=parseInt(g.getAttribute("data-ga-value"),10)||u,ga!==u&&a!==u&&e!==u&&(t.preventDefault(),"Download"!==a&&!0!==t.ctrlKey&&!0!==t.metaKey&&2!==t.which||(s=!0,l.open(o)),i=o,ga("send","event",a,e,n,r,{hitCallback:function(){!1===s&&(c!==u&&clearTimeout(c),l.location=i)}}),c=setTimeout(function(){!1===s&&(l.location.href=i)},1e3)))}e=d,a="script",n="ga",(t=l).GoogleAnalyticsObject=n,t.ga||(t.ga=function(){(t.ga.q=t.ga.q||[]).push(arguments)}),t.ga.l=+new Date,o=e.createElement(a),r=e.getElementsByTagName(a)[0],o.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(o,r),ga("create","UA-17904194-1","auto"),ga("set","anonymizeIp",!0),ga("send","pageview"),l.document.addEventListener("click",i),l.onload=function(){var t,e,a,n,o;e="script",a="twitter-wjs",o=(t=d).getElementsByTagName(e)[0],t.getElementById(a)||((n=t.createElement(e)).id=a,n.src="https://platform.twitter.com/widgets.js",o.parentNode.insertBefore(n,o))}}(window)';
body.appendChild(scriptThree);

let iframeThree = document.createElement('iframe');
iframeThree.setAttribute('scrolling', 'no');
iframeThree.setAttribute('frameborder', '0');
iframeThree.setAttribute('allowtransparency', 'true');
iframeThree.setAttribute('src', 'https://platform.twitter.com/widgets/widget_iframe.96fd96193cc66c3e11d4c5e4c7c7ec97.html?origin=https%3A%2F%2Fhtml5boilerplate.com');
iframeThree.setAttribute('title', 'Twitter settings iframe');
iframeThree.setAttribute('style', 'display: none;'); 
body.appendChild(iframeThree);






