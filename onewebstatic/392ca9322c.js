(function($){function run(){var g=function(id){return document.getElementById(id)},container=g('MobileHeader_container'),burgerMenuIcon=g('MobileHeader_burgerMenuIcon'),inActivebgColor=burgerMenuIcon.getAttribute('data-inactive-bgcolor'),activebgColor=burgerMenuIcon.getAttribute('data-active-bgcolor'),menu=g('mm'),overlay=g('mm-overlay'),body=document.getElementsByTagName('body')[0],on=false;if(!container||!body){return}function setOnOffClass(ele,newCls){ele.className=ele.className.replace(/\bon|off\b/,'').trim()+' '+newCls}function setMenuIconStyles(color){Array.prototype.slice.call(burgerMenuIcon.childNodes).forEach(function(node){node.style.backgroundColor=color})}function toggleClasses(){var className=on?'on':'off';setOnOffClass(burgerMenuIcon,className);setOnOffClass(menu,className);setOnOffClass(overlay,className);setMenuIconStyles(on?activebgColor:inActivebgColor)}function handleStickyMenu(on){menu.scrollTop=1;if(on){$('html').css({overflowY:'hidden',marginRight:Math.abs(window.innerWidth-document.documentElement.clientWidth)+'px'})}else{$('html').css({overflowY:'',marginRight:''})}}function onScroll(){if(menu.scrollTop<1){menu.scrollTop=1}else if(menu.scrollHeight-menu.scrollTop-menu.clientHeight<1){menu.scrollTop=menu.scrollTop-1}}var preventEvent=function(e){e.preventDefault();e.stopImmediatePropagation();e.stopPropagation()};var disableMenuTouchMove=function(){var windowInnerHeight=$(window).height();var padding=149;var menuHeight=$(menu).find('ul:first').outerHeight()+padding;var menuHasNoScroll=menuHeight<windowInnerHeight;if(menuHasNoScroll){$(menu).on('touchmove',preventEvent)}else{menu.scrollTop=1;$(menu).off('touchmove')}};disableMenuTouchMove();$(menu).on('scroll',onScroll);$(window).resize(disableMenuTouchMove);$(overlay).on('touchmove',preventEvent);function toggleMenu(){on=!on;toggleClasses();handleStickyMenu(on)}overlay.onclick=toggleMenu;burgerMenuIcon.onclick=toggleMenu;menu.onclick=function(e){var target,parent,targetTag;target=e?e.target:window.event.srcElement;target=target.nodeType===3?target.parentNode:target;targetTag=target.tagName;if((targetTag==='DIV'||targetTag==='SPAN')&&target.id!=='mm'){parent=targetTag==='SPAN'?target.parentNode.parentNode.parentNode:target.parentNode.parentNode;parent.className=parent.className?'':'expanded';disableMenuTouchMove();return}on=false;handleStickyMenu(on);toggleClasses()}}var readyTimer=setInterval(function(){if(document.readyState==='complete'||document.readyState==='interactive'){run();clearInterval(readyTimer)}},10)}(oneJQuery));window._mobileEditorData={'data':{'D9837762-4A1F-4470-9DCC-64C4DB6D2535':['12A3C9B6-628E-4D51-91CD-1B19C512656E'],'3FA09F29-4C15-479A-AC73-13DD2934C18F':['EB75C1AA-6E98-413D-B77F-AEE5F4C4CCAA','378C3A9B-D3B0-4B53-BE23-901EDF154BBE'],'A65C9552-FAE1-48E5-A73B-912D4E72A28E':['D74B88EB-37D8-40F7-A4DC-46D72D6DF334','7F3FC767-EAE7-40AD-BFFE-142B34A1FA5E','4D997DA7-762D-4CEA-9D9B-380234E52853','B375DA15-2BE1-4D82-9852-986C4584827B','D5758E05-C279-448B-9EFB-AE8F7E5639DB'],'D469A90E-F043-459E-A534-F4C5A3585FB8':['9FCED2AA-BFC0-47BD-B821-54B206288A55'],'C0F2F58A-9547-4D9F-8940-DA1AE59A8076':['F4C3BF7B-1FB4-4B34-9F0D-46B947D08914','41705870-517A-4232-80E6-0449CB282067'],'B2D13C72-73F7-4F2A-BED6-2F7627DD3CB2':['221734B5-5628-4752-BD72-371C1D772AB7','E0D697D0-BD46-42B7-A349-D6EB3CC866C8'],'67C36C4D-ECF7-4BE4-A8B5-2036D1806D07':['907FCB17-3E9E-48FC-95F6-45C3454FC971','B34F5943-F5DB-492F-B1B7-5AF83D1D48F3'],'7D206BD5-D9E5-46EA-95BA-7B83377D6A89':['87407233-CF72-4731-99C7-85AD247ACB79','97C638B1-763E-4C6F-AC9D-640AB8CA4893'],'5386C01C-3F74-4776-8BD6-CDB8609451C5':['F1869ABF-B48E-4473-AAD4-E827B9E39CC5','8369533D-A3E3-4909-8457-50013E34A306'],'88951A11-91B4-4396-979C-AFD97A5A5446':['2C9A5D4F-2ECD-4A6B-BCD5-6A89F37F0A42','72DD56F8-C694-4993-B92E-CAB992074BDB'],'A2CFD63F-8E17-4408-9F8C-B79670AF2B61':['D2008FF9-6842-4DE3-8E5D-FA7F8D8D4BBE','810F6881-D43C-4164-9DA4-1BC730A99E3E'],'74FC7A19-0D92-481F-AE7F-4837D0B85BD9':['D469A90E-F043-459E-A534-F4C5A3585FB8','C0F2F58A-9547-4D9F-8940-DA1AE59A8076','B2D13C72-73F7-4F2A-BED6-2F7627DD3CB2','67C36C4D-ECF7-4BE4-A8B5-2036D1806D07','88951A11-91B4-4396-979C-AFD97A5A5446','5386C01C-3F74-4776-8BD6-CDB8609451C5','A2CFD63F-8E17-4408-9F8C-B79670AF2B61','7D206BD5-D9E5-46EA-95BA-7B83377D6A89','A65C9552-FAE1-48E5-A73B-912D4E72A28E']},'wrappedCmpsMap':{'9FCED2AA-BFC0-47BD-B821-54B206288A55':[],'F4C3BF7B-1FB4-4B34-9F0D-46B947D08914':[],'221734B5-5628-4752-BD72-371C1D772AB7':[],'907FCB17-3E9E-48FC-95F6-45C3454FC971':[],'2C9A5D4F-2ECD-4A6B-BCD5-6A89F37F0A42':[],'F1869ABF-B48E-4473-AAD4-E827B9E39CC5':[],'D2008FF9-6842-4DE3-8E5D-FA7F8D8D4BBE':[],'87407233-CF72-4731-99C7-85AD247ACB79':[],'D5758E05-C279-448B-9EFB-AE8F7E5639DB':[]},'root':'74FC7A19-0D92-481F-AE7F-4837D0B85BD9','styles':{'9FCED2AA-BFC0-47BD-B821-54B206288A55':{'marginTop':35,'marginBottom':35},'C0F2F58A-9547-4D9F-8940-DA1AE59A8076':{'marginTop':0},'41705870-517A-4232-80E6-0449CB282067':{'marginTop':20,'marginBottom':18},'F4C3BF7B-1FB4-4B34-9F0D-46B947D08914':{'marginTop':35},'B2D13C72-73F7-4F2A-BED6-2F7627DD3CB2':{'marginTop':0},'E0D697D0-BD46-42B7-A349-D6EB3CC866C8':{'marginTop':20,'marginBottom':18},'221734B5-5628-4752-BD72-371C1D772AB7':{'marginTop':35},'67C36C4D-ECF7-4BE4-A8B5-2036D1806D07':{'marginTop':0},'B34F5943-F5DB-492F-B1B7-5AF83D1D48F3':{'marginTop':0,'marginBottom':18},'907FCB17-3E9E-48FC-95F6-45C3454FC971':{'marginTop':35},'88951A11-91B4-4396-979C-AFD97A5A5446':{'marginTop':0},'72DD56F8-C694-4993-B92E-CAB992074BDB':{'marginTop':20,'marginBottom':18},'2C9A5D4F-2ECD-4A6B-BCD5-6A89F37F0A42':{'marginTop':35},'5386C01C-3F74-4776-8BD6-CDB8609451C5':{'marginTop':0},'8369533D-A3E3-4909-8457-50013E34A306':{'marginTop':20,'marginBottom':18},'F1869ABF-B48E-4473-AAD4-E827B9E39CC5':{'marginTop':35},'A2CFD63F-8E17-4408-9F8C-B79670AF2B61':{'marginTop':0},'810F6881-D43C-4164-9DA4-1BC730A99E3E':{'marginTop':20,'marginBottom':18},'D2008FF9-6842-4DE3-8E5D-FA7F8D8D4BBE':{'marginTop':35},'7D206BD5-D9E5-46EA-95BA-7B83377D6A89':{'marginTop':0},'97C638B1-763E-4C6F-AC9D-640AB8CA4893':{'marginTop':20,'marginBottom':35},'87407233-CF72-4731-99C7-85AD247ACB79':{'marginTop':35},'A65C9552-FAE1-48E5-A73B-912D4E72A28E':{'marginTop':0},'7F3FC767-EAE7-40AD-BFFE-142B34A1FA5E':{'marginTop':20},'4D997DA7-762D-4CEA-9D9B-380234E52853':{'marginTop':20},'B375DA15-2BE1-4D82-9852-986C4584827B':{'marginTop':20},'D5758E05-C279-448B-9EFB-AE8F7E5639DB':{'marginTop':20,'marginBottom':35},'D74B88EB-37D8-40F7-A4DC-46D72D6DF334':{'marginTop':18}},'groups':{},'settings':{}};(function($){function isCopied(id,idsMap){return Object.keys(idsMap).some(function(pId){return pId.split('_copy').length>1})}function getParentId(elt){return $(elt.parentNode).attr('data-id')}function fixImgAspectRatio(data){var cmps=$('.image-container .col'),styles='';cmps.each(function(index,elt){var image=$(elt).parents('.image-container')[0],actualHeight=parseFloat($(image).attr('data-height')),actualWidth=parseFloat($(image).attr('data-width')),$imageParentNode=$(image.parentNode),parentId=getParentId(image);if($imageParentNode.attr('data-kind')==='Component'){var newImageWidth=$(image).outerWidth();var newImageHeight=newImageWidth*(actualHeight/actualWidth);styles+='div[data-id="'+parentId+'"] .imgFixRatio {'+'height: '+actualHeight+'px !important;'+'width: '+actualWidth+'px !important;'+'min-height: '+Math.min(actualHeight,newImageHeight)+'px !important;'+'max-height: '+newImageHeight+'px;}'}else if(!$imageParentNode.hasClass('stretched')&&$imageParentNode.attr('data-kind').toLowerCase()==='block'&&!data[parentId]){var isTopLevelImage=$imageParentNode.hasClass('mobileTopLevelComponents');var imageWidth=$(image).outerWidth();var maxHeight=imageWidth*(actualHeight/actualWidth);styles+='div[data-id="'+parentId+'"] .imgFixRatio {'+'height: '+actualHeight+'px !important;'+'width: '+actualWidth+'px !important;'+'min-height: '+Math.min(actualHeight,maxHeight)+'px !important;'+'max-height: '+maxHeight+'px;}';styles+='div[data-id="'+parentId+'"] {'+'display: flex;'+'justify-content: center;}';if(isTopLevelImage){styles+='div[data-id="'+parentId+'"] {'+'padding-left: 18px;'+'padding-right: 18px;}'}}else{var minHeight=$(image).outerWidth()*(actualHeight/actualWidth);styles+='div[data-id="'+getParentId(image)+'"] .imgFixRatio { min-height: '+minHeight+'px !important;}'}$(image).addClass('imgFixRatio')});return styles}function fixVideoHeight(){var videoCmps=$('iframe[data-kind="VIDEO"]'),styles='';videoCmps.each(function(index,elt){var height=$(elt).outerWidth()*(parseFloat(elt.height)/parseFloat(elt.width));styles+='div[data-id="'+getParentId(elt)+'"] .videoFixRatio { height: '+height+'px;} ';$(elt).addClass('videoFixRatio')});return styles}function fixCodeComponentWidth(){var codeCmps=$('.code-component-container'),styles='';codeCmps.filter(function(_,item){return!$(item).data('location')}).each(function(_,item){var $item=$(item),id=$item.attr('id');styles+='div#'+id+' { width: 100%;} '});return styles}var tableFirstCellReductionWidth=35;function fixTableColWidth(){var tableNodes=$('[data-specific-kind="TABLE"]'),styles='';tableNodes.each(function(_,node){var tableNode=$(node),cols=tableNode.find('colgroup')[0].children,firstColWidth=parseInt(cols[0].width,10),availableWidth=parseInt(tableNode.css('width'),10);if(cols.length>1&&firstColWidth+tableFirstCellReductionWidth>availableWidth){var id=tableNode.attr('data-id'),newWidth=availableWidth-tableFirstCellReductionWidth,tableStyle=tableNode.find('table')[0].style,newTableWidth=parseInt(tableStyle.width,10);for(var i=0;i<cols.length;i++){cols[i].width=newWidth+'';newTableWidth=newTableWidth-(firstColWidth-newWidth)}tableStyle.width=newTableWidth+'px';styles+='div[data-id="'+id+'"] tr td { word-break: break-word }'}});return styles}function fixCmpsStylesForMobile(data){var styles=fixImgAspectRatio(data);styles+=fixVideoHeight();styles+=fixCodeComponentWidth();styles+=fixTableColWidth();$('<style data-dynamicStyle type="text/css">'+styles+'</style>').appendTo('head')}function updateCopiedBlockElts(blocks,blockEltsMap,requiredIds,data){Object.keys(requiredIds).forEach(function(id){var idParts=id.split('_');if(idParts.length>1){if(blockEltsMap[idParts[0]]){blockEltsMap[id]=$(blockEltsMap[idParts[0]][0].cloneNode(true))}else{for(var i=0;i<blocks.length;i++){var cmpId=blocks[i].getAttribute('data-id');if(cmpId===idParts[0]){blockEltsMap[id]=$(blocks[i].cloneNode(true));break}}}}})}function getCurrentWindowWidth(){return $(window).width()}function triggerChangeToMobileView(){$(window).trigger('changed-to-mobile-view')}function removeImpFontAttr(node){var style=node.attr('style')||'',matches=style.match(/font-size:[\s\w\.%]*!important;?/);if(matches){matches.forEach(function(match){style=style.replace(match,'')});node.attr('style',style)}}var updateTextView=function(componentEle,textSize){var nodes=componentEle.find('*').toArray().reverse();nodes.forEach(function(domNode){var node=$(domNode),fontSize=parseFloat(node.css('fontSize')),removeCls=domNode.classList.toString().split(' ').filter(function(cls){return cls.match(/mobile-((oversized)|(undersized))[\w-]*/g)}).join(' ');node.removeClass(removeCls);removeImpFontAttr(node);fontSize=fontSize+textSize;node.css({'font-size':(fontSize>9?fontSize:9)+'px'})})};var processComponentChanges=function(cmpSettingsMap,parentElt){var components=parentElt.find('[data-mve-font-change]');components.each(function(){var cmp=$(this),fontChange=cmp.data('mveFontChange');cmp.css('minHeight','auto');if(cmp.parent()&&cmp.parent()[0]&&cmp.parent()[0].style&&cmp.parent()[0].style.minHeight&&cmp.parent()[0].style.minHeight!=='auto'){cmp.parent()[0].style.minHeight='auto'}updateTextView(cmp,fontChange)})};function updateMobileHeaderView(){var titleContainer=$('.mobile-title');if(!titleContainer.length){return}var scaleFn=function(title){var textWidth=title.width(),headerWidth=titleContainer.width();if(textWidth>headerWidth){var scale=headerWidth/textWidth;$(title).css({textAlign:'center',transform:'scale('+scale+')',transformOrigin:'left center'})}};var title=titleContainer.children();window.addEventListener('load',function(){title.css({textAlign:'',transform:'',transformOrigin:''});scaleFn(title)});scaleFn(title)}function updateFeaturedComponentView(components){for(i=0;i<components.length;i++){var cmp=components[i];var cmpKind=cmp.getAttribute('data-specific-kind');if(cmpKind==='FEATURED_PRODUCTS'||cmpKind==='PRODUCT_WIDGET'){var iframeEl=$(cmp).find('iframe');if(iframeEl&&iframeEl.length>0){var iframeSrc=iframeEl.attr('src');if(iframeSrc){iframeSrc=iframeSrc.replace('&forceDesktopView=true','');iframeEl.attr('src',iframeSrc)}var mobilePreviewHeight=iframeEl.attr('mobilepreviewheight');if(mobilePreviewHeight){iframeEl.height(mobilePreviewHeight)}}}}}function fixBackgroundHeights(){var emptyBoxWithAssetCmps=$('[data-specific-kind="BACKGROUND"] .emptyBoxWithAsset');emptyBoxWithAssetCmps.each(function(index,elt){if($(elt).outerWidth()!==$(elt).data('width')){var height=$(elt).outerWidth()*($(elt).data('height')/$(elt).data('width'));$(elt).css('height',height);$(elt).css('min-height',height)}})}var templateElt=$('.template'),isMobileView=$(templateElt).data('mobile-view'),isMobileWidth=$().isMobileWidth(),isDesktopView=!isMobileView||!isMobileWidth;function run(){var mobileEditorChanges=window._mobileEditorData,root=mobileEditorChanges.root,data=mobileEditorChanges.data,groups=mobileEditorChanges.groups,wrappedCmpsMap=mobileEditorChanges.wrappedCmpsMap,styles=mobileEditorChanges.styles,settings=mobileEditorChanges.settings,publishOnlyComponentsElt=$('.publishOnlyComponents');function move(){if(isDesktopView){return}var blocks=$("div[data-id][data-kind$='Block']"),components=$("div[data-id][data-kind$='Component']"),componentEltsMap={},blockEltsMap={},groupsEltsMap={},groupsItemsEltsMap={},i,cmpId,col,extractElts=function(elts,extractTo,requiredIds,getAll){for(i=0;i<elts.length;i++){cmpId=elts[i].getAttribute('data-id');if(requiredIds&&requiredIds[cmpId]||getAll){extractTo[cmpId]=$(elts[i]).detach()}}};$(document.body).addClass('mobileMenu');var requiredIds={};Object.keys(data).forEach(function(parentId){requiredIds[parentId]=true;data[parentId].forEach(function(childId){requiredIds[childId]=true;if(groups[childId]){groups[childId].forEach(function(itemId){requiredIds[itemId]=true})}})});Object.keys(wrappedCmpsMap).forEach(function(textId){var wrappedCmpsElts=$('div[data-id="'+textId+'"] .mceNonEditable div[data-specific-kind]');for(var j=0;j<wrappedCmpsElts.length;j++){var elt=$(wrappedCmpsElts[j]);if(!elt.hasClass('mobileDown')){requiredIds[elt.attr('data-id')]=false}}wrappedCmpsMap[textId].forEach(function(wId){if(requiredIds[wId]){if(isCopied(wId,requiredIds)){requiredIds[wId]=false}else{requiredIds[wId]=true}}})});extractElts(components,componentEltsMap,requiredIds);extractElts(blocks,blockEltsMap,requiredIds);Object.keys(groups).forEach(function(groupId){var groupIdParts=groupId.split('-'),grpClass='mobileGroup '+groupIdParts[0]+'-'+groupIdParts[1],groupSettings=settings[groupId]||{},align=groupSettings.align,scale=groupSettings.scale,style=groupSettings.style,font=groupSettings.font,reqGroupItemIds=groups[groupId].reduce(function(acc,item){acc[item]=true;return acc},{});grpClass+=align?' align-'+align:'';extractElts(components,groupsItemsEltsMap,reqGroupItemIds);groupsEltsMap[groupId]=$('<div></div>').addClass(grpClass);groups[groupId].forEach(function(itemId){var groupItem=groupsItemsEltsMap[itemId];if(scale){scale=Math.min(scale,100);var img=groupItem.find('img'),imgWrapper=groupItem.find('> div'),imgWrapperWidth=imgWrapper.data('width'),imgWrapperHeight=imgWrapper.data('height'),width=img.data('width'),height=img.data('height'),scaledWrapperWidth=imgWrapperWidth*scale/100,scaledWrapperHeight=imgWrapperHeight*scale/100,roundedScaledWrapperWidth=Math.round(scaledWrapperWidth),roundedScaledWrapperHeight=Math.round(scaledWrapperHeight),scaledImgWidth=width*scale/100,scaledImgHeight=height*scale/100,roundedScaledImgWidth=Math.round(scaledImgWidth),roundedScaledImgHeight=Math.round(scaledImgHeight),roundOffError=0.0001;if(roundedScaledWrapperWidth-scaledWrapperWidth<=roundOffError){scaledWrapperWidth=roundedScaledWrapperWidth}if(roundedScaledWrapperHeight-scaledWrapperHeight<=roundOffError){scaledWrapperHeight=roundedScaledWrapperHeight}if(roundedScaledImgWidth-scaledImgWidth<=roundOffError){scaledImgWidth=roundedScaledWrapperWidth}if(roundedScaledImgHeight-scaledImgHeight<=roundOffError){scaledImgHeight=roundedScaledWrapperHeight}imgWrapper.width(scaledWrapperWidth);imgWrapper.height(scaledWrapperHeight);img.width(scaledImgWidth);img.height(scaledImgHeight)}if(style&&style[itemId]){Object.keys(style[itemId]).forEach(function(css){groupItem[0].style[css]=style[itemId][css]})}if(font&&groupItem.attr('data-specific-kind')==='TEXT'){groupItem.children().attr('data-mve-font-change',font)}groupsEltsMap[groupId].append(groupItem)})});updateCopiedBlockElts(blocks,blockEltsMap,requiredIds,data);var process=function(parentId,parentElt,isRoot){var cmpSequence=data[parentId],newParent=parentElt;if(cmpSequence){if(!isRoot){var parent=parentElt||blockEltsMap[parentId];if(parent&&$(parent).attr('data-specific-kind')!=='TEXT'){col=parent.find('.col')[0];if(col){$(col).addClass('mobile-moved-hidden').css('display','none');newParent=$(col.parentNode)}else{newParent=$(parent).find('>div:last').first();newParent.addClass('hasChildren')}}}if(cmpSequence.length){var extraContainer=$('<div></div>').addClass('extraContainer');extraContainer.css({overflow:'auto',position:'relative',width:'100%'});newParent.append(extraContainer);newParent=extraContainer;var hiddenStripStyle={display:'none'};cmpSequence.forEach(function(cmpId){var child=blockEltsMap[cmpId]||componentEltsMap[cmpId]||groupsEltsMap[cmpId];if(child){child.addClass('mobile-moved'+(isRoot?' mobileTopLevelComponents':''));if($(child).find('.stretched').length){child.addClass('stretched')}var specificKind=child.data('specificKind');if((specificKind==='STRIP'||specificKind==='SECTION')&&!data[cmpId]){child.css(hiddenStripStyle)}var extra=$('<div></div>').addClass('extra');var cmpStyle=styles[cmpId];if(cmpStyle){extra.css(cmpStyle);if(cmpStyle.height===0&&(specificKind==='STRIP'||specificKind==='SECTION')){child.css(hiddenStripStyle)}}var newEl=newParent[0].appendChild(extra[0]);newEl.appendChild(child[0]);process(cmpId,$(child[0]))}})}}};process(root,$(templateElt),true);setTimeout(function(){processComponentChanges(settings,$(templateElt))});updateMobileHeaderView();updateFeaturedComponentView(components);fixBackgroundHeights();$(templateElt).addClass('mobileV mobileViewLoaded');$(document.body).addClass('mobileV mobileViewLoaded');fixCmpsStylesForMobile(data);$(publishOnlyComponentsElt).addClass('mobileViewLoadedPublishOnlyComponents');triggerChangeToMobileView()}try{move()}finally{$(templateElt).css('visibility','visible');if($().isMobileWidth()){$(document.documentElement).css('overflow-x','hidden');$(document.body).css('overflow-x','hidden');$(document.body).css('overflow-y','inherit')}else{$(document.body).css('overflow-x','auto')}}var windowWidth=getCurrentWindowWidth();$(window).resize(function(){if(isMobileView&&isMobileWidth){var newWindowWidth=getCurrentWindowWidth();var isLightBoxShown=$('html').hasClass('shinybox-html');if(windowWidth!==newWindowWidth&&!isLightBoxShown){windowWidth=newWindowWidth;fixCmpsStylesForMobile(data);triggerChangeToMobileView()}}})}run();window.runMobileSort=run}(oneJQuery));(function($){var isDesktopView=$().isDesktopView();function makeHoverBoxColVisible(){var hoverBoxHoverColumns=$('[data-specific-kind="HOVERBOX"] div[class*="Preview_hoverCol"]');hoverBoxHoverColumns.each(function(){var hoverColumn$=$(this);hoverColumn$.find('[data-show-on-hover="true"]').css({opacity:1,pointerEvents:'auto',transition:'none',transform:'none'});var defaultColumn=hoverColumn$.parent().find('div').first();if(!hoverColumn$.is($(defaultColumn))){defaultColumn.css('display','none')}hoverColumn$.css('left',0)})}function handleHoverBoxLoadingOnTouchDevices(){if(isDesktopView&&$().isMobileDevice()){makeHoverBoxColVisible()}}handleHoverBoxLoadingOnTouchDevices()}(oneJQuery));(function($){history.scrollRestoration='manual';function subscribePageHeightChange(cb){var scrollHeight=document.documentElement.scrollHeight,canceled=false;(function checkForChange(){if(canceled){return}var currentScrollHeight=document.documentElement.scrollHeight;if(scrollHeight!==currentScrollHeight){cb(scrollHeight);scrollHeight=currentScrollHeight}window.requestAnimationFrame(checkForChange)}());return function(){canceled=true}}(function onReady(){var isCanceled=false,previewHash=window.localStorage.getItem('previewHash'),sectionId=decodeURI(window.location.hash.substr(1)||previewHash||''),strip=document.body.querySelector('div[data-specific-kind=SECTION][data-id="'+sectionId+'"], div[data-specific-kind=STRIP][data-id="'+sectionId+'"]'),stripId;window.localStorage.removeItem('previewHash');strip=strip||document.getElementById(sectionId);stripId=strip&&strip.id;function cancelDefaultScroll(){isCanceled=true}document.addEventListener('wheel',cancelDefaultScroll);$(window).on('load',cancelDefaultScroll);function cb(element,top){if(isCanceled){return}var cancelSub=subscribePageHeightChange(function(){if(isCanceled){cancelSub();return}$.fn.scrollIntoView(element,top,null,0)})}if(stripId){$.fn.removeHash();window.scrollTo(0,0);history.replaceState(null,null,'#'+stripId);$.fn.scrollIntoSection(stripId,cb)}}());window.addEventListener('popstate',function(){var hash=location.hash.substr(1);$.fn.scrollIntoSection(hash)})}(oneJQuery));