document.addEventListener('DOMContentLoaded',function(){var nodes,node,i,dataSpecificKind;var getAncestorOrSelfWithDataSpecificKind=function(el){while(el){if(el.getAttribute&&el.getAttribute('data-specific-kind')){return el}el=el.parentNode}return el};nodes=document.querySelectorAll("div[data-link='we-link']");for(i=0;i<nodes.length;i++){node=nodes[i];var classNames=node.getAttribute('class');var href=node.firstChild.getAttribute('href');if(classNames&&classNames.indexOf('shinybox')>-1){node.setAttribute('href',href);continue}var target=node.getAttribute('target');(function(node,href,target){node.addEventListener('click',function(event){var initialTargetNode=getAncestorOrSelfWithDataSpecificKind(event.target);var currentTargetNode=getAncestorOrSelfWithDataSpecificKind(event.currentTarget);if(initialTargetNode==currentTargetNode){window.open(href,target||'_self')}})}(node,href,target))}});(function(){var mobileMaxWidth=650,desktopViewPadding=30,metaTag=document.querySelector('meta[name="viewport"]'),minPageWidthAttr=metaTag.getAttribute('minpagewidth'),minPageWidth=Math.max(parseInt(minPageWidthAttr,10),mobileMaxWidth+1)+desktopViewPadding;function isMobile(){try{var platform=navigator.platform,isApple=!!platform.toLowerCase().match(/(?:iphone|ipad)/),mediaQuery;if(isApple){var isPortrait=window.orientation===0;mediaQuery=(isPortrait?'(max-device-width: ':'(max-device-height: ')+mobileMaxWidth+'px)'}else{mediaQuery='(max-device-width: '+mobileMaxWidth+'px)'}return window.matchMedia(mediaQuery).matches}catch(e){return window.screen.width<=mobileMaxWidth}}function determineZoomAbility(){if(isMobile()){metaTag.setAttribute('content','width=device-width, initial-scale=1.0, minimum-scale=1.0')}else{metaTag.setAttribute('content','width='+minPageWidth)}}determineZoomAbility()}());