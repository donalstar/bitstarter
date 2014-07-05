(function(){AIR.HomepageHelper={curr:0,intervalId:0,numSlides:0,animating:false,time_slideInterval:7000,time_slideTransition:800,time_captionFadeIn:1000,time_captionFadeOut:300,time_searchBarSlide:900,initHomepageHero:function(){this.initEvents();
this.cacheEls();
this.showSearch();
this.initCalendars();
this.initPrice();
this.initCustomForms();
return $("#home-loading-indicator").hide()
},initEvents:function(){var a=this;
$(".input-wrapper span").live("click",function(b){return a.clickInput(b)
});
$(".search-option").live("focus",function(b){return a.play()
});
$("#location").live("keyup",function(b){return a.play()
});
$("#search_form").live("submit",function(b){return a.checkInputsAndSubmit(b)
});
return $(".slideshow-scroll").live("click",function(b){return a.clickSlideArrow(b)
})
},cacheEls:function(){this.els={};
this.els.hero=$("#hero");
this.els.arrows=$(".slideshow-scroll");
this.els.loc=$("#location");
this.els.slideshow=$("#slideshow");
this.els.slides=this.els.slideshow.children();
this.els.searchArea=$(".search-area");
this.els.blob=$("#blob-bg");
this.els.form=$("#search_form");
return this.els.video=$("#pretzel-video")
},initCustomForms:function(){var a,c,b;
a=this.els.form.find("#guests");
c=a.parent().find(".current");
b=function(d){return c.text(a.find(":selected").text())
};
a.change(b);
a.keyup(b);
a.focus(function(){return c.addClass("focus")
});
a.blur(function(){return c.removeClass("focus")
});
return a.change()
},initShowMoreDiscovery:function(){var a=this;
return $(".show-more").on("click",function(b){b.preventDefault();
return $.get("/custom_recommended_destinations?offset=8",function(c){$(".show-more").addClass("hide");
return $(".show-more-section").eq(0).replaceWith(c.discovery_html)
})
})
},loadP1Discovery:function(){var a=this;
return $.get("/custom_recommended_destinations",function(c){var b;
b=$(".homepage-module");
b.eq(0).replaceWith(c.discovery_html);
return a.initShowMoreDiscovery()
})
},loadTopDestinationsExperiment:function(b){var a,d,f,c,e;
d=$.parseJSON(b);
if(d.top_destinations_first){c=0;
e=1
}else{c=1;
e=0
}a=$(".homepage-module");
a.eq(c).replaceWith(d.top_destinations_html);
a.eq(e).replaceWith(d.welcome_html);
Tracking.rum.mark("p1_top_destinations_ajax_returned");
Tracking.rum.measure("p1_destinations_load_time","firstbyte","p1_top_destinations_ajax_returned");
Tracking.rum.measure("p1_destinations_request_time","onload","p1_top_destinations_ajax_returned");
f=Tracking.rum.measures();
Tracking.logEvent({event_name:"p1_top_destinations",event_data:{load_time_ms:f.p1_destinations_load_time,request_time_ms:f.p1_destinations_request_time}});
return $(".top-destination-image").click(function(){return Tracking.queueEvent({event_name:"recommendations",event_data:{page:"p1",section:"top_destinations",operation:"click",recommended_destinations:d.recommended_destinations,destination_clicked:$(this).data("id"),experiment_group:d.experiment_group,user_location:d.user_location,user_locale:d.user_locale,user_tld:d.user_tld}})
})
},initPrice:function(){var a,b=this;
a=Airbnb.userAttributes.guest_exchange;
if(a){return this.els.slides.each(function(f,h){var c,d,g;
c=$(h).find(".price");
g=c.data("price");
d=I18n.guestConvertFromUsd(g,{format:true});
return c.html(d)
})
}},clickInput:function(a){return $(a.currentTarget).prev("input[type='text']").focus()
},initCalendars:function(){var b,c,a,g,d;
a=$.datepicker._defaults.dateFormat;
b=$("#checkin");
c=$("#checkout");
g=b.attr("placeholder")?"":a;
try{$.datepicker.parseDate(b.val());
$.datepicker.parseDate(c.val())
}catch(f){d=f;
b.val(g).blur();
c.val(g).blur()
}return this.els.form.airbnbInputDateSpan()
},showSearch:function(){var a=this;
this.els.searchArea.find("input[type='text']").placeholder();
return this.els.blob.children("img").imagesLoaded().done(function(b){return a.els.blob.fadeIn(1000)
})
},initSlideshow:function(){var b,a=this;
this.numSlides=this.els.slides.length;
this.startingSlides=true;
this.els.slides.find("img[data-image-url]").each(function(d,e){var c;
c=$(e);
return c.attr("src",c.data("image-url"))
});
this.els.slideshow.find("li[data-image-url]").each(function(c,d){var e;
e=$(d);
return e.css("background-image","url("+e.data("image-url")+")")
});
b=this.els.slideshow.imagesLoaded();
return b.done(function(c){var d;
d=$(".slideshow-scroll");
d.removeClass("faded-out");
a.els.hero.hover(function(){return d.removeClass("faded-out")
},function(){return d.addClass("faded-out")
});
return a.play()
})
},play:function(){var a=this;
this.pause();
return this.intervalId=setInterval(function(){return a.next()
},this.time_slideInterval)
},pause:function(){return clearInterval(this.intervalId)
},next:function(){var a,b;
if(this.animating){return
}a=this.els.slides.eq(this.curr);
this.curr=(this.curr+1)%this.numSlides;
if(this.startingSlides&&this.curr===1&&!this.els.video.hasClass("video-playing")){this.els.video.find("source").attr("src","");
this.startingSlides=false
}b=this.els.slides.eq(this.curr);
return this.transitionSlide(a,b,"left")
},prev:function(){var a,b;
if(this.animating){return
}a=this.els.slides.eq(this.curr);
this.curr=this.curr<1?this.numSlides-1:this.curr-1;
b=this.els.slides.eq(this.curr);
return this.transitionSlide(a,b,"right")
},clickSlideArrow:function(a){a.preventDefault();
if($(a.currentTarget).hasClass("slideshow-scroll-prev")){this.prev()
}else{this.next()
}return this.play()
},transitionSlide:function(a,c,b){var d=this;
this.animating=true;
c.addClass("next "+b);
a.find(".caption").fadeOut(this.time_captionFadeOut);
this.els.blob.animate({opacity:c.data("bg-opacity")},80);
return a.fadeOut(this.time_slideTransition,function(){a.removeClass("active");
c.addClass("active").removeClass("next "+b);
a.show();
c.find(".caption").fadeIn(d.time_captionFadeIn);
return d.animating=false
})
},checkInputsAndSubmit:function(b){var a;
a=$("#enter_location_error_message");
if(this.locationIsBlank()){a.show();
a.removeClass("hide");
return false
}a.hide();
b.preventDefault();
return Airbnb.SearchUtils.handleFormSubmit(b.currentTarget)
},locationIsBlank:function(){return !this.els.loc.val()||this.els.loc.hasClass("placeholder")||this.els.loc.hasClass("pac-placeholder")
}}
}).call(this);
(function(d,b){var a="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
d.fn.imagesLoaded=function(n){function k(){var e=d(r),f=d(s);
v&&(s.length?v.reject(u,e,f):v.resolve(u));
d.isFunction(n)&&n.call(t,u,e,f)
}function q(e,f){e.src===a||-1!==d.inArray(e,p)||(p.push(e),f?s.push(e):r.push(e),d.data(e,"imagesLoaded",{isBroken:f,src:e.src}),c&&v.notifyWith(d(e),[f,u,d(r),d(s)]),u.length===p.length&&(setTimeout(k),u.unbind(".imagesLoaded")))
}var t=this,v=d.isFunction(d.Deferred)?d.Deferred():0,c=d.isFunction(v.notify),u=t.find("img").add(t.filter("img")),p=[],r=[],s=[];
u.length?u.bind("load.imagesLoaded error.imagesLoaded",function(e){q(e.target,"error"===e.type)
}).each(function(f,g){var h=g.src,i=d.data(g,"imagesLoaded");
if(i&&i.src===h){q(g,i.isBroken)
}else{if(g.complete&&g.naturalWidth!==b){q(g,0===g.naturalWidth||0===g.naturalHeight)
}else{if(g.readyState||g.complete){g.src=a,g.src=h
}}}}):k();
return v?v.promise(t):t
}
})(jQuery);