CKEDITOR.dialog.add("templates",(function(e){function t(t,a){var l=CKEDITOR.dom.element.createFromHtml('<a href="javascript:void(0)" tabIndex="-1" role="option" ><div class="cke_tpl_item"></div></a>'),s='<table style="width:350px;" class="cke_tpl_preview" role="presentation"><tr>';return t.image&&a&&(s+='<td class="cke_tpl_preview_img"><img src="'+CKEDITOR.getUrl(a+t.image)+'"'+(CKEDITOR.env.ie6Compat?' onload="this.width=this.width"':"")+' alt="" title=""></td>'),s+='<td style="white-space:normal;"><span class="cke_tpl_title">'+t.title+"</span><br/>",t.description&&(s+="<span>"+t.description+"</span>"),s+="</td></tr></table>",l.getFirst().setHtml(s),l.on("click",(function(){!function(t){var a=CKEDITOR.dialog.getCurrent();a.getValueOf("selectTpl","chkInsertOpt")?(e.fire("saveSnapshot"),e.setData(t,(function(){a.hide();var t=e.createRange();t.moveToElementEditStart(e.editable()),t.select(),setTimeout((function(){e.fire("saveSnapshot")}),0)}))):(e.insertHtml(t),a.hide())}(t.html)})),l}function a(e){var t=e.data.getTarget(),a=s.equals(t);if(a||s.contains(t)){var l,i=e.data.getKeystroke(),n=s.getElementsByTag("a");if(n){if(a)l=n.getItem(0);else switch(i){case 40:l=t.getNext();break;case 38:l=t.getPrevious();break;case 13:case 32:t.fire("click")}l&&(l.focus(),e.data.preventDefault())}}}var l=CKEDITOR.plugins.get("templates");CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(l.path+"dialogs/templates.css")),l="cke_tpl_list_label_"+CKEDITOR.tools.getNextNumber();var s,i=e.lang.templates,n=e.config;return{title:e.lang.templates.title,minWidth:CKEDITOR.env.ie?440:400,minHeight:340,contents:[{id:"selectTpl",label:i.title,elements:[{type:"vbox",padding:5,children:[{id:"selectTplText",type:"html",html:"<span>"+i.selectPromptMsg+"</span>"},{id:"templatesList",type:"html",focus:!0,html:'<div class="cke_tpl_list" tabIndex="-1" role="listbox" aria-labelledby="'+l+'"><div class="cke_tpl_loading"><span></span></div></div><span class="cke_voice_label" id="'+l+'">'+i.options+"</span>"},{id:"chkInsertOpt",type:"checkbox",label:i.insertOption,default:n.templates_replaceContent}]}]}],buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var e=this.getContentElement("selectTpl","templatesList");s=e.getElement(),CKEDITOR.loadTemplates(n.templates_files,(function(){var a=(n.templates||"default").split(",");if(a.length){var l=s;l.setHtml("");for(var p=0,o=a.length;p<o;p++)for(var r,c=(r=CKEDITOR.getTemplates(a[p])).imagesPath,d=(r=r.templates).length,m=0;m<d;m++){var g=t(r[m],c);g.setAttribute("aria-posinset",m+1),g.setAttribute("aria-setsize",d),l.append(g)}e.focus()}else s.setHtml('<div class="cke_tpl_empty"><span>'+i.emptyListMsg+"</span></div>")})),this._.element.on("keydown",a)},onHide:function(){this._.element.removeListener("keydown",a)}}}));