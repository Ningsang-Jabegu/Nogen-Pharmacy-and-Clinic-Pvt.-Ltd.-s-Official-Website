if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});
$.include('js/superfish.js')
$.include('js/tms-0.4.1.js')
$.include('js/jquery.easing.1.3.js')
$.include('js/jquery.ui.totop.js')
$.include('js/jquery.cycle.all.min.js')
$(function(){
	if($('#form1').length)$.include('js/forms.js');
	$(document).ready(function(){
	          $('.slider')._TMS({
	              show:0,
	              pauseOnHover:false,
	              prevBu:'.prev',
	              nextBu:'.next',
	              playBu:false,
	              duration:1000,
	              preset:'fade', 
	              pagination:true,//'.pagination',true,'<ul></ul>'
	              pagNums:false,
	              slideshow:7000,
	              numStatus:false,
	              banners:'fade',
			      waitBannerAnimation:false,
				  progressBar:false
	          })		
	      })
	     $(window).load(function(){
            $().UItoTop({ easingType: 'easeOutQuart' });
						$(".profile .prof_desc").hide()	
					$(".profile .button1").click(function(){
						$(this).toggleClass("active").parent(".profile").toggleClass("prof_active").find(".prof_desc").slideToggle(400);
						if($(this).hasClass("active"))
						{
							$(this).text("Hide profile")
						}
						else{$(this).text("View profile")}
					});
					$('.cycle').cycle({ 
						fx:     'scrollHorz',
						speed:  'fast', 
						timeout: 0, 
						next:   '#next', 
						prev:   '#prev' 
				});
		  });
})