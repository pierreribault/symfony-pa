!function(){function e(e){return"application/x-shockwave-flash"==(e=e.attributes).type||t.test(e.src||"")}function a(e,a){return e.createFakeParserElement(a,"cke_flash","flash",!0)}var t=/\.swf(?:$|\?)/i;CKEDITOR.plugins.add("flash",{requires:"dialog,fakeobjects",lang:"af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"flash",hidpi:!0,onLoad:function(){CKEDITOR.addCss("img.cke_flash{background-image: url("+CKEDITOR.getUrl(this.path+"images/placeholder.png")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 80px;height: 80px;}")},init:function(e){var a="object[classid,codebase,height,hspace,vspace,width];param[name,value];embed[height,hspace,pluginspage,src,type,vspace,width]";CKEDITOR.dialog.isTabEnabled(e,"flash","properties")&&(a+=";object[align]; embed[allowscriptaccess,quality,scale,wmode]"),CKEDITOR.dialog.isTabEnabled(e,"flash","advanced")&&(a+=";object[id]{*}; embed[bgcolor]{*}(*)"),e.addCommand("flash",new CKEDITOR.dialogCommand("flash",{allowedContent:a,requiredContent:"embed"})),e.ui.addButton&&e.ui.addButton("Flash",{label:e.lang.common.flash,command:"flash",toolbar:"insert,20"}),CKEDITOR.dialog.add("flash",this.path+"dialogs/flash.js"),e.addMenuItems&&e.addMenuItems({flash:{label:e.lang.flash.properties,command:"flash",group:"flash"}}),e.on("doubleclick",(function(e){var a=e.data.element;a.is("img")&&"flash"==a.data("cke-real-element-type")&&(e.data.dialog="flash")})),e.contextMenu&&e.contextMenu.addListener((function(e){if(e&&e.is("img")&&!e.isReadOnly()&&"flash"==e.data("cke-real-element-type"))return{flash:CKEDITOR.TRISTATE_OFF}}))},afterInit:function(t){var n=t.dataProcessor;(n=n&&n.dataFilter)&&n.addRules({elements:{"cke:object":function(n){var l=n.attributes;if(!(l.classid&&String(l.classid).toLowerCase()||e(n))){for(l=0;l<n.children.length;l++)if("cke:embed"==n.children[l].name){if(!e(n.children[l]))break;return a(t,n)}return null}return a(t,n)},"cke:embed":function(n){return e(n)?a(t,n):null}}},5)}})}(),CKEDITOR.tools.extend(CKEDITOR.config,{flashEmbedTagOnly:!1,flashAddEmbedTag:!0,flashConvertOnEdit:!1});