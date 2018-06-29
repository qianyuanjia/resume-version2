!(function(){
	var idArr=['#site-particles','#site-about','#site-life','#site-work','#site-message']
	var aArr=document.querySelectorAll('a[href|="#site"]')
	$('.topmenu .menu-bar li').on('click',function(ev){
		$('.topmenu .menu-bar li').removeClass('active')
		$(this).addClass('active')
	})

	$(window).on('scroll',function(){
		var scrollt=document.documentElement.scrollTop
		var diffArr=[]
		for(var i=0;i<idArr.length;i++){
			var obj=$(idArr[i]).get(0)
			var oTop=obj.getBoundingClientRect().top
			var offTop=obj.offsetTop
			diffArr[i]=Math.abs(oTop+offTop-scrollt)
		}
		diffArr.forEach(function(val,idx){
			var min=diffArr.concat().sort(function(a,b){
				return a-b
				})[0]
			if(val==min){
				$('.topmenu .menu-bar li').removeClass('active')
				$(aArr[idx]).parent().addClass('active')
				return
			}
		})
		// console.log(diffArr)
		
	})
})()