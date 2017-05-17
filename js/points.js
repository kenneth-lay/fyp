function AddPoints()
{
	points = new Array();
	regions = new Array();
	musica = new Array();
	tables = new Array();
	largest = new Array();
	smallest = new Array();
	
	textarr = new Array();
	
	var annoobj = xmldata.system.sound;
	var nos = annoobj.length;
	
	if (typeof nos == 'undefined' || nos == 1)
	{
		textarr[0] = xmldata.system.sound.soundfile;
		musica[i] = new buzz.sound(textarr[0], {formats: [ "mp3", "ogg" ]}, {preload: true, autoplay: false, loop: false});
		musica[i].setVolume(parseInt(xmldata.system.sound.volume));
		regions[0] = new Array();
		var annoobj2 = xmldata.system.sound.x;
		var nox = annoobj2.length;
		for (var j = 0; j < nox; j = j + 1)
		{
			regions[0][j] = new Seadragon.Point(parseFloat(xmldata.system.sound.x[j]), parseFloat(xmldata.system.sound.y[j]));
		}
	}
	else
	{
		for (var i = 0; i < nos; i = i + 1)
		{
			textarr[i] = xmldata.system.sound[i].soundfile;
			musica[i] = new buzz.sound(textarr[i], {formats: [ "mp3", "ogg" ]}, {preload: true, autoplay: false, loop: false});
			musica[i].setVolume(parseInt(xmldata.system.sound[i].volume));
			regions[i] = new Array();
			var annoobj2 = xmldata.system.sound[i].x;
			var nox = annoobj2.length;
			for (var j = 0; j < nox; j = j + 1)
			{
				regions[i][j] = new Seadragon.Point(parseFloat(xmldata.system.sound[i].x[j]), parseFloat(xmldata.system.sound[i].y[j]));
			}
		}
	}

	backgroundSound = new buzz.sound(xmldata.system.songfile, {formats: [ "mp3", "ogg" ]}, {preload: true, autoplay: false, loop: false});
	
	var numberOfPoints = 0;
	for (var i = 0; i < regions.length; i = i + 1)
	{
		for (var j = 0; j < regions[i].length; j = j + 1)
		{
			numberOfPoints = numberOfPoints + 1;
		}
	}

	for (var i = 0; i < numberOfPoints; i = i + 1)
	{
		points[i] = document.createElement("div");
		points[i].className = "point";
	}

	var k = 0;

	for (var i = 0; i < regions.length; i = i + 1)
	{
		for (var j = 0; j < regions[i].length; j = j + 1)
		{
			//panorama.drawer.addOverlay(points[k], regions[i][j]);
			k = k + 1;
		}
	}

	for (var i = 0; i < regions.length; i = i + 1)
	{
		channelH1[i] = -1;
		channelH2[i] = -1;
		channelH3[i] = -1;
		channelH4[i] = -1;
		channelH5[i] = -1;
		channelH6[i] = -1;
	}	
	bgSoundPlaying = true;
	BackgroundSound();
}

function BackgroundSound()
{
	backgroundSound.setVolume(100);
	window.setTimeout
	(
		function()
		{
			if (bgSoundPlaying)
			{
				backgroundSound.play().fadeIn(2500);
				bgSoundMutePressable = true;
				timeoutVariable3 = setTimeout
				(
					function()
					{
						if (bgSoundPlaying)
						{
							bgSoundFadingOut = true;
							backgroundSound.fadeOut
							(
								2500,
								function()
								{	
									backgroundSound.stop();
									backgroundSound.setTime(0);
									bgSoundFadingOut = false;
									window.setTimeout
									(
										function()
										{
											if (bgSoundPlaying)
											{
												BackgroundSound();
											}		
										},
										25
									);
								}
							);
						}
					},	
					backgroundSound.getDuration() * 1000 - 4551
				);
			}
		},
		852
	);
}