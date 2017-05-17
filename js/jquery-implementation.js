$(document).ready
(
	function()
	{
		var xmlpath = 'xml/';
   		if (getParameterByName('panorama') != '')
    	{
    		xmlpath += getParameterByName('panorama');
    	}
    	else
    	{
    		xmlpath += 'icc';
    	}
    	xmlpath += '.xml';	
		var xmll = new JKL.ParseXML(xmlpath);
    	var xmld = xmll.parse();
		document.getElementById("col-2").innerHTML = '<div id = "fillerimage"><img src = "' + xmld.system.titleimage + '" width = "200" height = "100" /></div>';
		if (typeof xmld.system.credits.panorama == 'undefined' || xmld.system.credits.panorama == "" || xmld.system.credits.panorama.match(/^\s*$/))
		{
			document.getElementById("about-gpixel").innerHTML =  "(No description provided)";
		}
		else
		{
			document.getElementById("about-gpixel").innerHTML = xmld.system.credits.panorama;
		}
		if (typeof xmld.system.credits.about == 'undefined' || xmld.system.credits.about == "" || xmld.system.credits.about.match(/^\s*$/))
		{
			document.getElementById("about-system").innerHTML =  "(No description provided)";
		}
		else
		{
			document.getElementById("about-system").innerHTML = xmld.system.credits.about + "<br /><br /> &nbsp;";
		}
		if (typeof xmld.system.credits.bgmusic == 'undefined' || xmld.system.credits.bgmusic == "" || xmld.system.credits.bgmusic.match(/^\s*$/))
		{
			document.getElementById("bgmusic-credit").innerHTML =  "(No description provided)";
		}
		else
		{
			document.getElementById("bgmusic-credit").innerHTML = xmld.system.credits.bgmusic;
		}
		var sfxtext = xmld.system.credits.soundfx.toString();
		if (typeof xmld.system.credits.soundfx == 'undefined' || xmld.system.credits.soundfx == "" || sfxtext.match(/^\s*$/))
		{
			document.getElementById("description-sounds").innerHTML =  "(No description provided)";
		}
		else
		{
			var noi = xmld.system.credits.soundfx.item.length;
			var ihtml = "";
			for (var i = 0; i < noi; i = i + 1)
			{
				ihtml = ihtml + '<a href = "' + xmld.system.credits.soundfx.item[i].link + '" target = "_blank">' + xmld.system.credits.soundfx.item[i].name + '</a>&nbsp;&nbsp;';
			}
			document.getElementById("description-sounds").innerHTML = ihtml;
		}
		
		var noa = xmld.system.landmark.length;
		var ihtml = "";
		for (var i = 0; i < noa; i = i + 1)
		{
			if (typeof xmld.system.landmark[i].credit != 'undefined' && xmld.system.landmark[i].credit != '')
			{
				ihtml = ihtml + '<a href = "' + xmld.system.landmark[i].credit + '" target = "_blank">' + xmld.system.landmark[i].title + '</a>&nbsp;&nbsp;';
			}
		}
		document.getElementById("description-texts").innerHTML = ihtml;
		
		var noa = xmld.system.landmark.length;
		var ihtml = "";
		for (var i = 0; i < noa; i = i + 1)
		{
			if (typeof xmld.system.landmark[i].annocredit != 'undefined' && xmld.system.landmark[i].annocredit != '')
			{
				ihtml = ihtml + '<a href = "' + xmld.system.landmark[i].annocredit + '" target = "_blank" title = "' + xmld.system.landmark[i].title + '" class = "subthumbnail2" id = "stb"' + i.toString() + '><img src = "' + xmld.system.landmark[i].picture +'" width = "58.1" height = "58.1" /></a>&nbsp;&nbsp;';
			}
		}
		document.getElementById("athumb").innerHTML = ihtml;
		
		var noa = xmld.system.landmark.length;
		var ihtml = "";
		for (var i = 0; i < noa; i = i + 1)
		{
			if (typeof xmld.system.landmark[i].thumbcredit != 'undefined' && xmld.system.landmark[i].thumbcredit != '')
			{
				ihtml = ihtml + '<a href = "' + xmld.system.landmark[i].thumbcredit + '" target = "_blank" title = "' + xmld.system.landmark[i].title + '" class = "subthumbnail1" id = "st"' + i.toString() + '><img src = "' + xmld.system.landmark[i].thumbnail +'" width = "58.1" height = "58.1" /></a>&nbsp;&nbsp;';
			}
		}
		document.getElementById("othumb").innerHTML = ihtml;
		
		$(
			function()
			{
				$(".screen-content").mCustomScrollbar({theme: "dark-thick"});
				$(".screen-content2").mCustomScrollbar({theme: "dark-thick"});
			}
		);
		$(document).bind
		(
			"keydown", 
			function(e)
			{	
				var deltaTime = 0;
				var currentDate = new Date();
				GUIKeyDown(e.keyCode);
				if (panoramaFocus)
				{
					if (keyJustPressed == -1 || keyJustPressed == e.keyCode || keyJustPressed2 == e.keyCode)
					{
						deltaTime = currentDate.getTime() - keyLastPressed;
						keyLastPressed = currentDate.getTime();
						if ((keyJustPressed == e.keyCode || keyJustPressed2 == e.keyCode) && deltaTime < 252)
						{
							keyPressRepeat = keyPressRepeat + 1;
						}
						if (keyJustPressed == -1)
						{
							keyJustPressed = e.keyCode;
						}
						else if (deltaTime < 52)
						{
							keyJustPressed2 = e.keyCode;
						}
					}
					if (keyCodeList.length < 2)
					{
						if (keyCode == -1 && keyCurrent == 1)
						{	
							keyCode = e.keyCode;
							if (keyCodeList.indexOf(e.keyCode) == -1)
							{
								keyCodeList.push(keyCode);
								keyNew = 1;
								keyPress = 0;
							}
							else
							{	
								keyNew = 0;
							}
							keyCurrent = 1;
						}
						else
						{	
							if (keyCode != e.keyCode && keyCode != -1)
							{
								keyCode2 = e.keyCode;
								keyCurrent = 2;
								keyCodeList.push(keyCode2);
								keyNew = 1;
								keyPress = 0;
								keyNotUp = -1;
							}
							else if (keyCode == -1 && keyCode2 > -1 && keyCode2 != e.keyCode)
							{
								keyCode = e.keyCode;
								keyNew = 1;
								keyCurrent = 1;
								keyPress = 0;
								keyNotUp = -1;
								keyCodeList.push(keyCode);
							}
							else
							{
								keyNew = 0;
							}
						}
						if (keyDown < 2 && keyPress < 2 && keyNew)		/* Semaphores */
						{
							window.setTimeout
							(	
								function()
								{
									if (keyCodeList.indexOf(e.keyCode) > -1)
									{
										keyStatus = 0;
										if (keyNotUp == -1)
										{
											keyDown = keyDown + 1;
										}
										else if ((keyCode > -1 && keyCode2 == -1 && keyDown < 1) || (keyCode == -1 && keyCode2 > -1 && keyDown < 1))
										{
											keyDown = 1;
										}
										else if (keyCode > -1 && keyCode2 > -1)
										{
											keyDown = 2;
										}
                                        keyStatus = 0;
									}
									else
									{
										keyStatus = 1;
										keyPress = keyPress + 1;
                                        if (keyCode == -1 && keyCode2 != e.keyCode)
                                        {
                                            keyCode = e.keyCode;
                                        }
                                        else if (keyCode2 == -1 && keyCode != e.keyCode)
                                        {
                                            keyCode2 = e.keyCode;
                                        }
									}
									if (((keyCode > -1 && keyCode2 == -1) || (keyCode == -1 && keyCode2 > -1)) && !keyDiagonal)
									{
										var kcode = -1;
										if (keyCode == -1)
										{
											kcode = keyCode2;
										}
										else
										{
											kcode = keyCode;
										}
										switch(kcode)
										{	
											case 82:
												if (!checkPolygonsLock)
												{
													PanZoom(11);
												}
												break;
											case 65:
												PanZoom(2);
												break;
											case 87:
												PanZoom(3);
												break;
											case 68:
												PanZoom(1);
												break;
											case 83:
												PanZoom(4);
												break;
											case 70:
												PanZoom(6);
												break;
											case 74:
												PanZoom(5);
												break;
											default:
												KeyReset();
												break;
										}
									}
									else if (keyCode > -1 && keyCode2 > -1)
									{
										keyDiagonal = 1;
										if ((keyCode == 65 && keyCode2 == 87) || (keyCode == 87 && keyCode2 == 65))
										{
											PanZoom(7);
										}
										else if ((keyCode == 87 && keyCode2 == 68) || (keyCode == 68 && keyCode2 == 87))
										{
											PanZoom(8);
										}
										else if ((keyCode == 68 && keyCode2 == 83) || (keyCode == 83 && keyCode2 == 68))
										{
											PanZoom(9);
										}
										else if ((keyCode == 65 && keyCode2 == 83) || (keyCode == 83 && keyCode2 == 65))
										{
											PanZoom(10);
										}
										else
										{
											KeyReset();
										}
									}
								},
								250
							);
						}
					}
				}
    		}
    	);
		$(document).bind
		(
			"keyup", 
			function(e)
			{
				afterKey = true;
				tempkcode = e.keyCode;
				GUIKeyUp(e.keyCode);
				keyNew = 1;
				keyDownCode = -1;
				keyDownCode2 = -1;
				if (keyStatus == 0)
				{	
					if (keyDown > 0)
					{						
						keyDown = keyDown - 1;
						if (keyCode == e.keyCode)
						{
							keyNotUp = keyCode2;
							keyCode = -1;
							keyCurrent = 2;
						}
						else if (keyCode2 == e.keyCode)
						{
							keyNotUp = keyCode;
							keyCode2 = -1;
							keyCurrent = 1;
						}
						if (keyPressRepeat > 0)
    					{
    						keyPressRepeat = 0;
    					}
					}
				}
				keyCodeList.splice(keyCodeList.indexOf(e.keyCode),1);
				if (keyCodeList.length > 0)
				{
					keyCode2 = -1;
					currentDate = new Date();
					deltaTime = currentDate.getTime() - keyLastReleased;
					keyLastReleased = currentDate.getTime();
					keyDown = 1;
					window.setTimeout
					(
						function()
						{
							if (keyCodeList.length > 0)
							{
								keyCode = keyCodeList.pop();
								//GUIKeyDown(keyCode);
								keyCodeList.push(keyCode);
								keyPress = 0;
								keyDiagonal = 0;
								switch(keyCode)
								{	
									case 82:
										if (!checkPolygonsLock)
										{
											PanZoom(11);
										}
										break;
									case 65:
										PanZoom(2);
										break;
									case 87:
										PanZoom(3);
										break;
									case 68:
										PanZoom(1);
										break;
									case 83:
										PanZoom(4);
										break;
									case 70:
										PanZoom(6);
										break;
									case 74:
										PanZoom(5);
										break;
									default:
										KeyReset();
										break;
								}
							}
							else
							{
								keyDown = 0;
							}
						},
						252
					);
				}
				keyDiagonal = 0;
				if (keyDown == 0 || keyCodeList.length == 0)
				{
					keyNotUp = -1;
					keyNew = 1;
					keyCodeList = [];
					keyCurrent = 1;
					keyCode = -1;
					keyCode2 = -1;
				}
    		}
    	);
    	$(document).mousedown
		(
			function()
			{
				if (panoramaEnter == 1)
				{
					panoramaFocus = 1;
				}
				else
				{
					keyDown = 0;
					keyPress = 0;
				}
			}
		);
		
		$('#bgSoundMute').click
		(
			function(e)
			{
				if (bgSoundPlaying && bgSoundMutePressable)
				{
					bgSoundMutePressable = false;
					$('#bgSoundMute').css('color', '#505050');
					bgSoundPlaying = false;
					clearTimeout(timeoutVariable3);
					if (!bgSoundFadingOut)
					{
						backgroundSound.fadeOut
						(
							2500,
							function()
							{
								backgroundSound.stop();
								backgroundSound.setTime(0);
								bgSoundMutePressable = true;
							}
						);
					}
				}
				else if (bgSoundMutePressable)
				{
					bgSoundPlaying = true;
					bgSoundMutePressable = false;
					$('#bgSoundMute').css('color', 'orange');
					BackgroundSound();
				}
			}
		);
		
		$('#sfxSoundMute').click
		(
			function(e)
			{		
				SoundToggle();
			}
		);
		
		$('#credits').click
		(
			function()
			{
				byButton = true;
				SoundToggle();
				ShrinkScreenPrefix();
				$('#credits-screen').fadeIn(1000, function(){$('.screen-content').mCustomScrollbar("update");});
			}
		);
		
		$('#help').click
		(
			function()
			{
				byButton = true;
				SoundToggle();
				ShrinkScreenPrefix();
				$('#help-screen').fadeIn(1000, function(){$('.screen-content2').mCustomScrollbar("update");});
			}
		);
		
		$('.subthumbnail1').mouseover
		(
			function()
			{
				var title = $(this).attr('title');
				var separator = "#separator1";
				var detail = "#detail1";
				$(detail).text(title);
				$(separator).show();
				$(detail).show();
			}
		);
		
		$('.subthumbnail1').mouseleave
		(
			function()
			{
				var title = $(this).attr('title');
				var separator = "#separator1";
				var detail = "#detail1";
				$(separator).hide();
				$(detail).hide();
			}
		);

		$('.subthumbnail2').mouseover
		(
			function()
			{
				var title = $(this).attr('title');
				var separator = "#separator2";
				var detail = "#detail2";
				$(detail).text(title);
				$(separator).show();
				$(detail).show();
			}
		);
		
		$('.subthumbnail2').mouseleave
		(
			function()
			{
				var title = $(this).attr('title');
				var separator = "#separator2";
				var detail = "#detail2";
				$(separator).hide();
				$(detail).hide();
			}
		);
		
		$('.close-screen').click
		(
			function()
			{
				byButton = false;	
				SoundToggle();				
				RestoreScreenPrefix();
				$('#credits-screen').fadeOut(1000);
				$('#help-screen').fadeOut(1000);
			}
		);
		
		$('.photo-thumbnail').mouseenter
		(
			function(e)
			{
				//CheckAnnotations();
				var pound = "#";
				var thumbnailID = $(this).attr('id');
				var id = thumbnailID.substring(9);
				//$('#topRightCorner').text(pound.concat(thumbnailID));
				if (parseInt(id) <= numberOfPoints)
				{
					$(pound.concat(thumbnailID)).css('cursor', 'pointer');
					//alert(id);
					inThumbnail = true;
					var currentDate = new Date();
					var curTime = currentDate.getTime();
					thumbnailTime = curTime;
					window.setTimeout
					(
						function()
						{
							var currentDate = new Date();
							var curTime = currentDate.getTime();
							if (inThumbnail && curTime - thumbnailTime >= 250)
							{
								$(pound.concat("speech", id)).fadeIn();
								$(pound.concat("arrow", id)).fadeIn();
							}
						},
						250
					);
				}
			}
		);
		
		$('.photo-thumbnail').mouseleave
		(
			function(e)
			{
				inThumbnail = false;
				var pound = "#";
				var thumbnailID = $(this).attr('id');
				var id = thumbnailID.substring(9);
				//$('#topRightCorner').text(' ');
				$(pound.concat(thumbnailID)).css('cursor', 'default');
				$(pound.concat("speech", id)).fadeOut();
				$(pound.concat("arrow", id)).fadeOut();
				fromThumbnail = true;
			}
		);
		
		$('.photo-thumbnail').mousemove
		(
			function()
			{
				//CheckAnnotations();
			}
		);
		
		$('.photo-thumbnail').mouseover
		(
			function()
			{
				//alert(this.id);
			}
		);
		
		$('.photo-thumbnail').click
		(
			function(e)
			{
				//CheckAnnotations();
				var thumbnailID = $(this).attr('id');
				var anoidtemp = thumbnailID.substring(9);
				var anoidangka = parseInt(anoidtemp) - 1;
				var anoid2 = anoidangka.toString();
				if (activeAnnotation != anoidangka && anoidangka + 1 <= numberOfPoints)
				{
					anoid = anoid2;
					var zmin = zoomMin[parseInt(anoid)];
					var zmax = zoomMax[parseInt(anoid)];
					zavg = (zmin + zmax) / 2;
					anopos = new Seadragon.Point(annotations[parseInt(anoid)].x - centreX, annotations[parseInt(anoid)].y - centreY);
					simulateClick = true;
					var currentCentre = panorama.viewport.getCenter();
					var annotationPoint = annotations[parseInt(anoid)];
					byButton = false;
					$('#help-screen').fadeOut(1000);
					$('#credits-screen').fadeOut(1000);
					if ((annotationPoint.x - 0.5) * (currentCentre.x - 0.5) <= 0)
					{
						Reset();
					}
					else
					{
						checkPolygonsLock = true;
						simulateClick = false;
						anopos = new Seadragon.Point(annotations[parseInt(anoid)].x - currentCentre.x, annotations[parseInt(anoid)].y - currentCentre.y);
						zavg2 = zavg / 4;
						anopos2 = anopos.divide(4);
						overviewThumbnail = true;
						SimulateClickFunction();
					}
				}
			}
		);
		
		$(document).mouseenter				/****/
		(
			function(e)
			{
				aktivateTemp = true;
				var curTime = new Date();
				aktivateTime = curTime.getTime();
				initialTime6 = curTime.getTime();
				initialTime7 = curTime.getTime();
				
				initialTime = aktivateTime;
				var h = CalculateThumbnailHeight();
				if (mouseNotEnter)
				{
					mouseNotEnter = false;
					ShrinkScreenPrefix();
				}
				window.setTimeout
				(
					function()
					{
						var cTime = new Date();
						var crTime = cTime.getTime();
						if (aktivateTemp && crTime - aktivateTime >= 500)
						{
							aktivate = true;
							reallyIn = true;
							//panoramaNavigatorEnter = true;
							panoramaEnter = 1;
							panoramaFocus = 1;
							diffTime = -1;
							var curTime = new Date();
							var currentTime = curTime.getTime();
							initialTime4 = currentTime;
						}
					},
					500
				);
			}
		);
		
		$('.hideables').mousemove
		(
			function()
			{
				onhide = true;
			}
		);
		
		$('.hideables').mouseenter
		(
			function()
			{
				onhide = true;
			}
		);
	
		$('.hideables').mouseleave
		(
			function()
			{
				onhide = false;
			}
		);
		
		$(document).mouseleave
		(
			function()
			{
				//tempShrinkScreen = false;
				aktivateTemp = false;
				document.getElementById('zoomtitle').innerHTML = '<b>(x,y): </b>N/A';
				var curTime = new Date();
				deaktivateTime = curTime.getTime();
				initialTime6 = curTime.getTime();
				initialTime7 = curTime.getTime();
				if (!mouseNotEnter)
				{
					mouseNotEnter = true;
				}
				window.setTimeout
				(
					function()
					{
						var cTime = new Date();
						var crTime = cTime.getTime();
						if (!aktivateTemp && crTime - deaktivateTime >= 500)
						{
							aktivate = false;
							reallyIn = false;
							var curTime = new Date();
							var currentTime = curTime.getTime();
							fromOutside = true;
							diffTime = -1;
							RestoreScreenPrefix();
							if (currentTime - initialTime2 >= 500)
							{
								//$('#topRightCorner2').text(' '); /* ! */
								clearTimeout(timeoutVariable);
								clearTimeout(timeoutVariable2);
								channelC1 = -1;
								channelC2 = -1;
								channelC3 = -1;
								channelC4 = -1;
								channelc5 = -1;
								channelC6 = -1;
								for (var i = 0; i < regions.length; i = i + 1)
								{
									channelH1[i] = -1;
									channelH2[i] = -1;
									channelH3[i] = -1;
									channelH4[i] = -1;
									channelH5[i] = -1;
									channelH6[i] = -1;
								}
								DeactivateRegion();
							}
							/*
							previouslyRegionIn = false;
							regionIn = false;
							regionInTemp = false;
							regionOutTemp = true;
							eksepsi = true;
							*/
						}
						else
						{
							//$('#topRightCorner').text(crTime - deaktivateTime); /* ! */
						}
					},
					500
				);
			}
		);
		
		$(document).bind
 		(
 			'mousewheel', 
 			function(event, delta)
			{
 				var currentDegree = MaxDegree(panorama.viewport.getZoom(), 1.07385, 0);
 				var centerX = navigatorDivLeft + navigatorDivWidth / 2;
 				var centerY = navigatorDivTop + navigatorDivHeight / 2;
 				var relX = event.pageX - $('#panoramaNavigator').offset().left;
			   	var relY = event.pageY - $('#panoramaNavigator').offset().top;
				var relCoordX = relX / $('#panoramaNavigator').width();
				var relCoordY = relY / $('#panoramaNavigator').width() - (screenHeight / (screenWidth * 2) - panoramaHeight / (panoramaWidth * 2));
 				var panX = (relCoordX - centerX) * (0.5 / Math.pow(1.07385, currentDegree));
 				var panY = (relCoordY - centerY) * (0.5 / Math.pow(1.07385, currentDegree));
 				var zoomLevel = $('#zoomlevel').height() / zoomBarHeight;
 				if (panoramaEnter == 1)
				{
					panoramaFocus = 1;
				}
				CheckAnnotations();
				if (panoramaNavigatorEnter)
				{
					zoomException = true;
					if (delta > 0)
					{		
						//alert('leh');
						PanZoom(5);
					}
					else
					{
						//alert('gamjyu');
						PanZoom(6);
					}
					zoomException = false;
					UpdatePanoramaNavigator();
					if (zoomLevel < 0.93)
 					{
  						panorama.viewport.panBy(new Seadragon.Point(panX, panY));
  						navigatorDivLeft2 = navigatorDivLeft + panX;
  						navigatorDivTop2 = navigatorDivTop + panY;
  						navigatorDivLeft = navigatorDivLeft2;
  						navigatorDivTop = navigatorDivTop2;
  						navigatorRectangle = new Seadragon.Rect
						(   
							navigatorDivLeft2, navigatorDivTop2,
							navigatorDivWidth, navigatorDivHeight
						);
						panoramaNavigator.drawer.updateOverlay(navigatorDiv, navigatorRectangle);
 					}
				}
				//UpdateZoomBar(1);
     			return false;
     		}
 		);
 		
 		$(document).mousedown
 		(
 			function(e)
 			{
				isDrag = true;
				pointCheckLock = true;
 				var pt = panorama.viewport.pointFromPixel(new Seadragon.Point(e.pageX, e.pageY), true);
 				var x = (pt.x.toFixed(3)).toString();
 				var y = (pt.y.toFixed(3)).toString();
 				var x2 = x.concat(", ");
 			}
 		);

		$(document).mouseup
		(
			function()
			{
				if (isDrag)
				{
					window.setTimeout
					(
						function()
						{
							isDrag = false;
							pointCheckLock = false;
						},
						200
					);
				}
				if (zoomSliderOn)
				{
					zoomSliderOn = 0;
					zoomSliderInitial = -1;
				}
			}
		);
		
		$('#zoomslider').mousedown
		(
			function()
			{
				sliderMouseDown = true;
			}
		);
		
		$('#zoomslider-2').mousedown
		(
			function()
			{
				sliderMouseDown = true;
			}
		);
		
		$(document).mouseup
		(
			function()
			{
				sliderMouseDown = false;
			}
		);
		
		$('#zoomslider').mouseup
		(
			function()
			{
				sliderMouseDown = false;
			}
		);
		
		$('#zoomslider-2').mouseup
		(
			function()
			{
				sliderMouseDown = false;
			}
		);
		
		$('#zoombar').click
		(
			function(e)
			{
				//$('#topRightCorner').text(e.pageY);
			}
		);
		
		$(document).click
		(
			function(e)
			{
				if (inZoomBar && !shrinked)
				{
					var zoomSliderTop = e.pageY;
					var zoomSliderTopString = zoomSliderTop.toString();
					var SLIDERTOP = zoomSliderTopString.concat('px');
					$('#zoomslider').css('top', SLIDERTOP);
					
					var currentDegree = MaxDegree(panorama.viewport.getZoom(), 1.07385, 0);
					var ratio = 1;
					if (currentDegree / maxDegree * zoomBarHeight <= zoomBarHeight)
					{
						ratio = currentDegree / maxDegree;
					}
					
					var zoomLevelHeight = 0;
					zoomLevelHeight = $('#zoombar').offset().top + $('#zoombar').height() - $('#zoomslider').offset().top;	// hacked
					var zoomLevelHeightString = zoomLevelHeight.toString();
					var LEVELHEIGHT = zoomLevelHeightString.concat('px');
					$('#zoomlevel').css('height', LEVELHEIGHT);
					
					var zoomLevelTop = $('#zoombar').offset().top + $('#zoombar').height() - $('#zoomlevel').height() + 2;	// hacked
					var zoomLevelTopString = zoomLevelTop.toString();
					var LEVELTOP = zoomLevelTopString.concat('px');
					$('#zoomlevel').css('top', LEVELTOP);
					
					var zoomSliderTop2 = $('#zoombar').offset().top + $('#zoombar').height() - zoomLevelHeight - $('#zoomslider-2').height() / 4;
					var zoomSliderTopString2 = zoomSliderTop2.toString();
					var SLIDERTOP2 = zoomSliderTopString2.concat('px');
					$('#zoomslider-2').css('top', SLIDERTOP2);
				
					var zoomSliderTop3 = zoomSliderTop2 + parseInt($('#zoomslider-2-arrow').css('border-right-width')) / 2;
					var zoomSliderTopString3 = zoomSliderTop3.toString();
					var SLIDERTOP3 = zoomSliderTopString3.concat('px');
					$('#zoomslider-2-arrow').css('top', SLIDERTOP3);
				
					var curentDegree = 0;
					if ($('#zoomlevel').height() >= $('#zoombar').height() / 2)
    	    		{
						var currentDegree = Math.round($('#zoomlevel').height() * (maxDegree + 3.5) / zoomBarHeight);
					}
					else
					{
						var currentDegree = Math.round($('#zoomlevel').height() * (maxDegree - 3.5) / zoomBarHeight);
						if (currentDegree == 2)		// hack
						{
							currentDegree = 1;
						}
					}
					var zoomDegree = 1;
					if (currentDegree > 1)
					{
						for (var i = 0; i < currentDegree; i++)
						{
							if (i < currentDegree - 1)
							{
								zoomDegree = zoomDegree * 1.07385;
							}	
							else
							{
								zoomDegree = zoomDegree * 1.2;
							}
						}
					}
					panorama.viewport.zoomTo(zoomDegree);
					UpdatePanoramaNavigator();
				}
			}
		);
		
		$(document).mousemove
		(
			function(e)
			{
				var zoom = panorama.viewport.getZoom();
 				document.getElementById('nvg-overview-title').innerHTML = '<b>Zoom:</b> ' + (zoom.toFixed(3)).toString();
				var pt = panorama.viewport.pointFromPixel(new Seadragon.Point(e.pageX, e.pageY), true);
 				var x = "(" + (pt.x.toFixed(3)).toString();
 				var y = (pt.y.toFixed(3)).toString();
 				var x2 = x.concat(",", y, ")");
 				if (aktivateTemp && !onhide)
 				{
 					document.getElementById('zoomtitle').innerHTML = '<b>(x,y): </b>' + x2;
 				}
 				else
 				{
 					document.getElementById('zoomtitle').innerHTML = '<b>(x,y): </b>N/A';
 				}
 				
				//$('#debugFrame').text(x2);
				var deltaSliderMovement = e.pageY - $('#zoomslider').offset().top;
				var zoomSliderTop = $('#zoomslider').offset().top + deltaSliderMovement;
				
				if (
					zoomSliderTop >= $('#zoombar').offset().top + 14
					&& 
					zoomSliderTop <= $('#zoombar').offset().top + $('#zoombar').height() + 15
					&&
					e.pageX >= $('#zoombar').offset().left && e.pageX <= $('#zoombar').offset().left + $('#zoombar').width() + 150
				)
				{
					inZoomBar = true;
				}
				else
				{
					inZoomBar = false;
				}
				if (
					sliderMouseDown 
					&& 
					zoomSliderTop >= $('#zoombar').offset().top - $('#zoomslider').height() / 2 + 14
					&& 
					(
						zoomSliderTop <= $('#zoombar').offset().top + $('#zoombar').height() - $('#zoomslider').height() / 2 + 15
						||
						zoomSliderTop >= $('#zoombar').offset().top + $('#zoombar').height() - $('#zoomslider').height() / 2 + 2 && deltaSliderMovement < 0
					)
					&&
					e.pageX >= 0 && e.pageX <= $('#zoombar').offset().left + 30 + $('#zoombar').width() + 150
				)
				{
					var zoomSliderTopString = zoomSliderTop.toString();
					var SLIDERTOP = zoomSliderTopString.concat('px');
					$('#zoomslider').css('top', SLIDERTOP);
				
					var currentDegree = MaxDegree(panorama.viewport.getZoom(), 1.07385, 0);
					var ratio = 1;
					if (currentDegree / maxDegree * zoomBarHeight <= zoomBarHeight)
					{
						ratio = currentDegree / maxDegree;
					}
					var zoomSliderTopX = 0;
					if (zoomSliderRelativeTopInitial == -1)
					{
						zoomSliderTopX = $('#zoomslider').offset().top - zoomSliderRelativeTopInitial;
					}
					else
					{
						zoomSliderTopX = $('#zoomslider').offset().top - ($('#zoombar').height() * ratio - zoomSliderRelativeTopInitial);
					}
					var himit = $('#zoombar').height() / 25;
					if (prepareToStopZoomingIn && !doNotZoomIn && (Math.abs(zoomSliderTopX - $('#zoombar').offset().top) <= himit))
					{
						doNotZoomIn = true;
					}
					if ((Math.abs(zoomSliderTopX - $('#zoombar').offset().top) <= himit) && !prepareToStopZoomingIn)
					{
						prepareToStopZoomingIn = true;
					}
					window.setTimeout
					(
						function()
						{
							var zoomLevelHeight = $('#zoombar').offset().top + $('#zoombar').height() - $('#zoomslider').offset().top;	// hacked
				
							var zoomLevelTop = $('#zoombar').offset().top + $('#zoombar').height() - $('#zoomlevel').height() + 2;	// hacked

							var zoomSliderTop = $('#zoombar').offset().top + $('#zoombar').height() - zoomLevelHeight;
				
							var zoomSliderTop2 = $('#zoombar').offset().top + $('#zoombar').height() - zoomLevelHeight - $('#zoomslider-2').height() / 4;
							var zoomSliderTopString2 = zoomSliderTop2.toString();
							var SLIDERTOP2 = zoomSliderTopString2.concat('px');
							$('#zoomslider-2').css('top', SLIDERTOP2);
				
							var zoomSliderTop3 = zoomSliderTop2 + parseInt($('#zoomslider-2-arrow').css('border-right-width')) / 2;
							var zoomSliderTopString3 = zoomSliderTop3.toString();
							var SLIDERTOP3 = zoomSliderTopString3.concat('px');
							$('#zoomslider-2-arrow').css('top', SLIDERTOP3);
						},
						0
					);
					
					var zoomLevelHeight = 0;
					zoomLevelHeight = $('#zoombar').offset().top + $('#zoombar').height() - $('#zoomslider').offset().top;	// hacked
					var zoomLevelHeightString = zoomLevelHeight.toString();
					var LEVELHEIGHT = zoomLevelHeightString.concat('px');
					$('#zoomlevel').css('height', LEVELHEIGHT);
					
					var zoomLevelTop = $('#zoombar').offset().top + $('#zoombar').height() - $('#zoomlevel').height() + 2;	// hacked
					var zoomLevelTopString = zoomLevelTop.toString();
					var LEVELTOP = zoomLevelTopString.concat('px');
					$('#zoomlevel').css('top', LEVELTOP);
					var curentDegree = 0;
					if ($('#zoomlevel').height() >= $('#zoombar').height() / 2)
    	    		{
						var currentDegree = Math.round($('#zoomlevel').height() * (maxDegree + 3.5) / zoomBarHeight);
					}
					else
					{
						var currentDegree = Math.round($('#zoomlevel').height() * (maxDegree - 3.5) / zoomBarHeight);
						if (currentDegree == 2)		// hack
						{
							currentDegree = 1;
						}
					}
					var zoomDegree = 1;
					if (currentDegree > 1)
					{
						for (var i = 0; i < currentDegree; i++)
						{
							if (i < currentDegree - 1)
							{
								zoomDegree = zoomDegree * 1.07385;
							}	
							else
							{
								zoomDegree = zoomDegree * 1.2;
							}
						}
					}
					panorama.viewport.zoomTo(zoomDegree);
					CheckAnnotations();
					UpdatePanoramaNavigator();
				}
				else
				{
					sliderMouseDown = false;
				}
 				//$('#topRightCorner').text(x2);
				var h = CalculateThumbnailHeight();
				var curDate = new Date();
				var curTime = curDate.getTime();
				if (e.pageX < h + 10 || e.pageX > screenWidth - h - 10 || e.pageY < h + 10 || e.pageY > screenHeight - h - 10)
				{	
					if (!inRegion)
					{
						inRegion = true;
						initialTime6 = curTime;
						initialTime7 = curTime;
						ShrinkScreenPrefix();
					}
				}
				else
				{
					if (inRegion)
					{
						inRegion = false;
						initialTime6 = curTime;
						RestoreScreenPrefix();	
					}
				}
				window.setTimeout
				(
					function()
					{	
						if (pointCheckLock == false && !isDrag)
						{
							pointCheckLock = true;
							if (!isDrag)
							{
								CheckPolygons(e.pageX, e.pageY);
							}
						}
					},
					200
				);
			}
		);
		
		$('.navigator').ready
		(
			function()
			{
				GUIKeyAction('.navi', 'gator', 1);
			}
		);
		
		$('.navigator').mouseover
		(
			function()
			{
				var strattr = $(this).attr("id");
				var str1 = "#nav";
				var str2 = "";
				var numbr = strattr.split("nav");
				if (numbr[1] == undefined)
				{
					str1 = "#reset";
					str2 = "button";
				}
				else
				{
					str2 = numbr[1];
				}
				GUIKeyAction(str1, str2, 0);
			}
		);
		
		$('.navigator').mouseleave
		(
			function()
			{
				var strattr = $(this).attr("id");
				var str1 = "#nav";
				var str2 = "";
				var numbr = strattr.split("nav");
				if (numbr[1] == '')
				{
					str1 = "#reset";
					str2 = "button";
				}
				else
				{
					str2 = numbr[1];
				}
				GUIKeyAction(str1, str2, 1);
			}
		);
		
		$('#panoramaContainer').mouseenter
		(
			function()
			{
				panoramaEnter = 1;
				panoramaFocus = 1;
				var initTime = new Date();
				initialTime = initTime.getTime();
			}
		);

		$('#panoramaContainer').mouseleave
		(	
			function()
			{
				panoramaEnter = 0;
			}
		);
		
		$('.thumbnail-background').mouseenter
		(
			function()
			{
				//alert('enter');
			}
		);
		
		$('.thumbnail-background').mouseleave
		(
			function()
			{
				//alert('leave');
			}
		);
		
		$('#panoramaContainer').mousemove
		(
			function(e)
			{
				var curTime = new Date();
				initialTime2 = curTime.getTime();
				initialTime3 = curTime.getTime();
			}
		);
		
		$('#topRightCorner, #topLeftCorner, #bottomLeftCorner, #bottomRightCorner, #topMiddle, #bottomMiddle, #leftMiddle, #rightMiddle, #nvg-container, #nvg-container-frame, #nvg-container-frame-bottom-1, #nvg-container-frame-bottom-2, #nvg-tooltip, #nvg-tooltip-frame, #nvg-overview-title, #zoombar-fake, #zoombar-fake-2, #zoomslider-2, #zoomslider-2-arrow').mouseenter
		(
			function(e)
			{
				mouseOverNavigation = true;
				tempShrinkScreen = false;
			}
		);
		
		$('#topRightCorner, #topLeftCorner, #bottomLeftCorner, #bottomRightCorner, #topMiddle, #bottomMiddle, #leftMiddle, #rightMiddle, #nvg-container, #nvg-container-frame, #nvg-container-frame-bottom-1, #nvg-container-frame-bottom-2, #nvg-tooltip, #nvg-tooltip-frame, #nvg-overview-title, #zoombar-fake, #zoombar-fake-2, #zoomslider-2, #zoomslider-2-arrow').mouseover
		(
			function(e)
			{
				mouseOverNavigation = true;
				tempShrinkScreen = false;
			}
		);
		
		$('#topRightCorner, #topLeftCorner, #bottomLeftCorner, #bottomRightCorner, #topMiddle, #bottomMiddle, #leftMiddle, #rightMiddle, #nvg-container, #nvg-container-frame, #nvg-container-frame-bottom-1, #nvg-container-frame-bottom-2, #nvg-tooltip, #nvg-tooltip-frame, #nvg-overview-title, #zoombar-fake, #zoombar-fake-2, #zoomslider-2, #zoomslider-2-arrow').mouseleave
		(
			function(e)
			{
				mouseOverNavigation = false;
				var h = CalculateThumbnailHeight();
				if (e.pageX < h + 10 || e.pageX > screenWidth - h - 10 || e.pageY < h + 10 || e.pageY > screenHeight - h - 10)
				{
					if (aktivate)
					{
						ShrinkScreenPrefix();
					}
				}
			}
		);
		
		$('#panoramaNavigator').click
		(
			function(e)
			{
				if (panoramaNavigatorClick)
				{
					var relX = e.pageX - $(this).offset().left;
		   			var relY = e.pageY - $(this).offset().top;
					var relCoordX = relX / $(this).width();
					var relCoordY = relY / $(this).width() - (screenHeight / (screenWidth * 2) - panoramaHeight / (panoramaWidth * 2));
					deltaCenterX = relCoordX - navigatorDivLeft - navigatorDivWidth / 2;
					deltaCenterY = relCoordY - navigatorDivTop - navigatorDivHeight / 2;
					navigatorDivLeft2 = navigatorDivLeft + deltaCenterX;
					navigatorDivTop2 = navigatorDivTop + deltaCenterY;
					navigatorDivLeft = navigatorDivLeft2;
					navigatorDivTop = navigatorDivTop2;
					panorama.viewport.panTo(new Seadragon.Point(navigatorDivLeft + navigatorDivWidth / 2, navigatorDivTop + navigatorDivHeight / 2));
					navigatorRectangle = new Seadragon.Rect
					(   
						navigatorDivLeft2, navigatorDivTop2,
						navigatorDivWidth, navigatorDivHeight
					);
					panoramaNavigator.drawer.updateOverlay(navigatorDiv, navigatorRectangle);
					panoramaNavigatorClick = false;
				}
			}
		);

		$("#panoramaNavigator").mousedown
		(
			/* http://stackoverflow.com/questions/4249648/jquery-get-mouse-position-within-an-element */
			function(e)
			{
				navigatorDivMouseUp = false;
				var relX = e.pageX - $(this).offset().left;
		   		var relY = e.pageY - $(this).offset().top;
				var relCoordX = relX / $(this).width();
				var relCoordY = relY / $(this).width() - (screenHeight / (screenWidth * 2) - panoramaHeight / (panoramaWidth * 2));
				navigatorDivMouseDown = 1;
				window.setTimeout
				(
					function()
					{
						if (navigatorDivMouseDown)
						{
							panoramaNavigatorClick = false;
							navigatorDivMouseDown = true;
							if (navigatorDivLeftInitial == -1)
							{
								navigatorDivLeftInitial = relCoordX;
								navigatorDivTopInitial = relCoordY;
								panoramaCenterInitialX = panorama.viewport.getCenter().x;
								panoramaCenterInitialY = panorama.viewport.getCenter().y;
								deltaCenterX = relCoordX - navigatorDivLeft - navigatorDivWidth / 2;
								deltaCenterY = relCoordY - navigatorDivTop - navigatorDivHeight / 2;
								panorama.viewport.panTo(new Seadragon.Point(panoramaCenterInitialX + deltaCenterX, panoramaCenterInitialY + deltaCenterY));
								navigatorDivLeft2 = navigatorDivLeft + deltaCenterX;
								navigatorDivTop2 = navigatorDivTop + deltaCenterY;
								navigatorDivLeft = navigatorDivLeft2;
								navigatorDivTop = navigatorDivTop2;
								navigatorRectangle = new Seadragon.Rect
								(   
									navigatorDivLeft2, navigatorDivTop2,
									navigatorDivWidth, navigatorDivHeight
								);
								panoramaNavigator.drawer.updateOverlay(navigatorDiv, navigatorRectangle);
								panoramaCenterInitialX = panorama.viewport.getCenter().x;
								panoramaCenterInitialY = panorama.viewport.getCenter().y;
							}
						}
						else
						{
							panoramaNavigatorClick = true;
						}
					}
					,
					50
				);
			}
		);
		
		$('#panoramaNavigator').mouseenter
		(
			function()
			{
				panoramaNavigatorEnter = true;
			}
		);
		
		$('#panoramaNavigator').mouseover
		(
			function()
			{
				panoramaNavigatorEnter = true;
				panoramaEnter = 1;
			}
		);
		
		$('#panoramaNavigator').mouseleave
		(
			function()
			{
				panoramaNavigatorEnter = false;
				navigatorDivMouseDown = false;
				navigatorDivLeftInitial = -1;
				if (navigatorDivLeft2 != -1)
				{
					navigatorDivLeft = navigatorDivLeft2;
				}
				if (navigatorDivTop2 != -1)
				{
					navigatorDivTop = navigatorDivTop2;
				}
				panoramaEnter = 0;
			}
		);
		
		$('#panoramaNavigator').mousemove
		(
			function(e)
			{
				panoramaFocus = 1;
				panoramaEnter = 1;
				if (navigatorDivMouseDown && navigatorDivLeftInitial != -1)
				{
					var relX = e.pageX - $(this).offset().left;
			   		var relY = e.pageY - $(this).offset().top;
					var relCoordX = relX / $(this).width();
					var relCoordY = relY / $(this).width() - (screenHeight / (screenWidth * 2) - panoramaHeight / (panoramaWidth * 2));
					var deltaX = relCoordX - navigatorDivLeftInitial;
					var deltaY = relCoordY - navigatorDivTopInitial;
					navigatorDivLeft2 = navigatorDivLeft + deltaX;
					navigatorDivTop2 = navigatorDivTop + deltaY;
					panoramaCenterX = panoramaCenterInitialX + deltaX;
					panoramaCenterY = panoramaCenterInitialY + deltaY;
					panorama.viewport.panTo(new Seadragon.Point(panoramaCenterX, panoramaCenterY));
					navigatorRectangle = new Seadragon.Rect
					(   
						navigatorDivLeft2, navigatorDivTop2,
						navigatorDivWidth, navigatorDivHeight
					);
					panoramaNavigator.drawer.updateOverlay(navigatorDiv, navigatorRectangle);
				}
			}
		);
		
		$('#panoramaNavigator').mouseup
		(
			function()
			{
				navigatorDivMouseDown = false;
				navigatorDivLeftInitial = -1;
				if (navigatorDivLeft2 != -1)
				{
					navigatorDivLeft = navigatorDivLeft2;
				}
				if (navigatorDivTop2 != -1)
				{
					navigatorDivTop = navigatorDivTop2;
				}
			}
		);
		
		$("#topRightCorner").mouseenter
 		(
 			function()
 			{
 				lockChange = true;
 			}
 		);
 		
 		$("#topRightCorner").mouseleave
 		(
 			function()
 			{
 				lockChange = false;
 			}
 		);
		
		$('#zoomslider').mousedown
		(
			function(e)
			{
				zoomSliderOn = 1;
				if (zoomSliderInitial == -1)
				{
					zoomSliderInitial = e.pageY;
					//zoomSliderCurrentPosition = parseInt($('#zoomslider').css('top'));
				}
			}
		);
		
		$('#zoomslider-2').mousedown
		(
			function(e)
			{
				zoomSliderOn = 1;
				if (zoomSliderInitial == -1)
				{
					zoomSliderInitial = e.pageY;
					//zoomSliderCurrentPosition = parseInt($('#zoomslider').css('top'));
				}
			}
		);
		
		$('#zoomslider').mouseout
		(
			function()
			{
				$('#zoomslider').css('background-color', '#CC3300');
			}
		);

		$('#zoomslider-2').mouseout
		(
			function()
			{
				$('#zoomslider').css('background-color', '#CC3300');
			}
		);
		
		$('#zoomslider').mouseover
		(
			function()
			{
				$('#zoomslider').css('background-color', '#FF6600');
			}
		);
		
		$('#zoomslider-2').mouseover
		(
			function()
			{
				$('#zoomslider').css('background-color', '#FF6600');
			}
		);
 	}
);