var whiteXmas = new function () {
	var me = this,
		pop,
		stageEl,
		playerEl,
		timeTrackerEl;
	
	me.showHTML = function (options) {
		var id = options.id || 'content-' + options.start,
			el;
		pop.code({
			start: options.start,
			end: options.end,
			target: options.target,
			onStart: function() {
				el = document.createElement('div');
				el.id = id;
				el.className = 'content';
				el.innerHTML = options.html;
				
				
				//stageEl.innerHTML = '<div id="' + id + '" class="content">' + options.html + '</div>';
				stageEl.appendChild(el);
				el.className = 'animate-in';
				console.log('start');
			},
			onEnd: function() {
				var contentEl = el; //document.getElementById(id);
				
				function animEndEvent(e) {
					contentEl.removeEventListener('transitionend', animEndEvent);
					contentEl.removeEventListener('animationend', animEndEvent);
					stageEl.removeChild(contentEl); //innerHTML = '';
					console.log('end anim');
				}
				
				contentEl.addEventListener('transitionend', animEndEvent);
				contentEl.addEventListener('animationend', animEndEvent);
				contentEl.className += ' animate-out';
				console.log('end');
			}
		});
	};
	
	function timeUpdateEvent(e) {
		timeTrackerEl.innerHTML = this.currentTime;
	}
	
	me.init = function () {
		pop = Popcorn("#player");
		playerEl = document.getElementById('player');
		stageEl = document.getElementById('stage');
		timeTrackerEl = document.getElementById('timeTracker');
		console.log(pop);
		
		//playerEl.addEventListener('timeupdate', timeUpdateEvent);
		
		me.showHTML({
			id: 'guitar',
			start: 2,
			end:	 4.30,
			html: '<span class="foreground">Merry Christmas Everyone</span',
			target: "stage"
		});
		
		me.showHTML({
			id: 'guitar',
			start: 4.35,
			end:	 6.6,
			html: '<span class="foreground">From Conflicting Plaid</span>',
			target: "stage"
		});
			
		me.showHTML({
			id: 'guitar',
			start: 6.65,
			end:	 8.94,
			html: '<span class="foreground">And The Twenty 6 Hundred</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'guitar',
			start: 9.01,
			end:	 10.95,
			html: '<span class="foreground">White Christmas</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'dreaming',
			start: 11,
			end:	 14.795,
			html: '<img src="images/dreaming.gif" /><span class="foreground">I\'m dreaming of a white Christmas...</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'oi',
			start: 14.8,
			end:	 15.59,
			html: '<img src="images/oi.gif" /><span class="foreground">',
			target: "stage"
		});
		
		me.showHTML({
			id: 'justlike',
			start: 15.6,
			end:	 19.1,
			html: '<img src="images/dancing.gif" /><span class="foreground">Just like the ones I used to know</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'treetop',
			start: 19.15,
			end:	 21.6,
			html: '<img class="small" src="images/treetop.gif" /><span class="foreground">Where the treetops glisten</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'children',
			start: 21.65,
			end:	 23.9,
			html: '<img src="images/children-fighting.gif" /><span class="foreground">and children listen</span>',
			target: "stage"
		});
		
		
		me.showHTML({
			id: 'sleighbells',
			start: 23.75,
			end:	 28.95,
			html: '<img src="images/sleigh2.gif" /><span class="foreground">to hear sleighbells in the snow</span>',
			target: "stage"
		});
		
		// Second part -- add 18 to each.
		me.showHTML({
			id: 'dreaming',
			start: 29,
			end:	 32.79,
			html: '<img src="images/dancing3.gif" /><span class="foreground">I\'m dreaming of a white Christmas...</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'oi',
			start: 32.7,
			end:	 33.49,
			html: '<img src="images/oi.gif" /><span class="foreground">',
			target: "stage"
		});
		
		// http://imgur.com/tbIq2nD
		me.showHTML({
			id: 'write',
			start: 33.5,
			end:	 37.1,
			html: '<img src="images/write2.gif" /><span class="foreground">With every Christmas card I write</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'merry',
			start: 36.8,
			end:	 41.9,
			html: '<img src="images/flapper-radio.gif" /><span class="foreground">May your days be merry and bright!</span>',
			target: "stage"
		});
		
		
		
		me.showHTML({
			id: 'tohear',
			start: 41.95,
			end:	 46.8,
			html: '<img src="images/santa-piano.gif" /><span class="foreground">And may all your Christmases be white!</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'kissing',
			start: 46.85,
			end:	 49.4,
			html: '<img src="images/kissing2.gif" />',
			target: "stage"
		});
		
		me.showHTML({
			id: 'morethanthat',
			start: 49.45,
			end:	 52,
			html: '<img src="images/condom.gif" />',
			target: "stage"
		});
		
		me.showHTML({
			id: 'passed-out',
			start: 51.8,
			end:	 55.5,
			html: '<img src="images/sleeping1.gif" />',
			target: "stage"
		});
		
		me.showHTML({
			id: 'you-tube',
			start: 55.55,
			end:	 58,
			html: '<img src="images/camera.gif" />',
			target: "stage"
		});
		
		me.showHTML({
			id: 'kissing',
			start: 58.05,
			end:	 60.6,
			html: '<img src="images/betty-page-xmas.gif" />',
			target: "stage"
		});
		
		me.showHTML({
			id: 'leaveout',
			start: 60.65,
			end:	 64.05,
			html: '<img src="images/devil.gif" />',
			target: "stage"
		});
		
		me.showHTML({
			id: 'nailed',
			start: 64.1,
			end:	 68.66,
			html: '<img src="images/nail2.gif" />',
			target: "stage"
		});
		
		me.showHTML({
			id: 'nailed',
			start: 68.51,
			end:	 73.5,
			html: '<img src="images/dancing2.gif" />',
			target: "stage"
		});
		
		// second time around -- add 63 to all numbers.
		me.showHTML({
			id: 'dreaming',
			start: 73.55,
			end:	 77.39,
			html: '<img src="images/dreaming.gif" /><span class="foreground">I\'m dreaming of a white Christmas...</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'oi',
			start: 77.4,
			end:	 78.19,
			html: '<img src="images/oi.gif" /><span class="foreground">',
			target: "stage"
		});
		
		me.showHTML({
			id: 'justlike',
			start: 78.20,
			end:	 82.1,
			html: '<img src="images/dancing.gif" /><span class="foreground">Just like the ones I used to know</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'treetop',
			start: 82.15,
			end:	 84.6,
			html: '<img class="small" src="images/treetop.gif" /><span class="foreground">Where the treetops glisten</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'children',
			start: 84.65,
			end:	 86.9,
			html: '<img src="images/children-fighting.gif" /><span class="foreground">and children listen</span>',
			target: "stage"
		});
		
		
		me.showHTML({
			id: 'sleighbells',
			start: 86.55,
			end:	 90.95,
			html: '<img src="images/sleigh2.gif" /><span class="foreground">to hear sleighbells in the snow</span>',
			target: "stage"
		});
		
		// Second part -- add 18 to each.
		me.showHTML({
			id: 'dreaming',
			start: 91,
			end:	 94.79,
			html: '<img src="images/dancing3.gif" /><span class="foreground">I\'m dreaming of a white Christmas...</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'oi',
			start: 94.8,
			end:	 95.59,
			html: '<img src="images/oi.gif" /><span class="foreground">',
			target: "stage"
		});
		
		// http://imgur.com/tbIq2nD
		me.showHTML({
			id: 'write',
			start: 95.6,
			end:	 100.1,
			html: '<img src="images/write3.gif" /><span class="foreground">With every Christmas card I write</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'merry',
			start: 100,
			end:	 104.74,
			html: '<img src="images/flapper-radio.gif" /><span class="foreground">May your days be merry and bright!</span>',
			target: "stage"
		});
		
		
		
		me.showHTML({
			id: 'tohear',
			start: 104.75,
			end:	 109.8,
			html: '<img src="images/santa-piano.gif" /><span class="foreground">And may all your Christmases be white!</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'guitar-solo',
			start: 109.85,
			end:	 116.25,
			html: '<img src="images/guitar-solo.gif" />',
			target: "stage"
		});
		
		me.showHTML({
			id: 'credits1',
			start: 116.26,
			end:	 141.95,
			html: '<span class="foreground">Have a safe and happy holiday</span>',
			target: "stage"
		});
		
		me.showHTML({
			id: 'credits2',
			start: 118,
			end:	 160,
			html: '<img class="logo reset logo-cp" src="images/conflicting-plaid.jpg">',
			target: "stage"
		});
		
		me.showHTML({
			id: 'credits3',
			start: 118,
			end:	 160,
			html: '<img class="logo reset logo-2600" src="images/twenty6hundred.png">',
			target: "stage"
		});
		// write2 and write3 -- http://okkultmotionpictures.tumblr.com/post/85022752049/modern-business-machines
		// sealed-room: http://giphy.com/gifs/vintage-okkultmotionpictures-bm6p6gOSYQKTm
		// snow-mice: http://giphy.com/gifs/black-and-white-vintage-4aFqWIetJlYVW
		// children-playing: http://giphy.com/gifs/christmas-santa-SAlekoTTsyxJ6
		// dancing: https://www.pinterest.com/larisalysogorsk/vintage-gif/
		
		
		// play the video right away
		pop.play();
	};
};



// ensure the web page (DOM) has loaded
document.addEventListener("DOMContentLoaded", whiteXmas.init , false);