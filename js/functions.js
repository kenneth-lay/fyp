function ShrinkScreen()
{
	shrinked = true;
	if (activeAnnotation != -1)
	{
		CheckAnnotations();
		ComputeAnnotations(3);
	}
	var h = CalculateThumbnailHeight();
	var hString = h.toString();
	var lString = "";
	var finalHString = hString.concat("px");
	var finalLString = "";
	var callerString = "#thumbnail";
	var left = 0;
	var top = 0;
	var tString = "";
	var finalTString = "";
	var marginLeft = ((screenWidth - 20 - h * 2) - h * 7) / 8;
	var marginTop = ((screenHeight - 20 - h * 2) - h * 3) / 4;
	var j = 2;
	var k = 10;
	var l = 14; 
	var m = 22;
	for (var i = 1; i < 25; i = i + 1)
	{
		var finalCallerString = callerString.concat(i.toString());
		if (i == 1)
		{
			left = 10;
			top = 10;
		}
		else if (i == 2)
		{
			left = screenWidth - 10 - h;
			top = 10;
		}
		else if (i == 3)
		{
			left = 10;
			top = screenHeight - 10 - h;
		}
		else if (i == 4)
		{
			left = screenWidth - 10 - h;
			top = screenHeight - 10 - h;
		}
		if (i == 21 || i == 13 || i == 9 || i == 6 || i == 10 || i == 14 || i == 22)
		{
			left = (h + marginLeft) * (j - 1) + 10;
			top = 10;
			j = j + 1;
		}
		else if (i == 19 || i == 7 || i == 20)
		{
			left = screenWidth - 10 - h;
			top = (h + marginTop) * (k - 10) + h + 10 + marginTop;
			k = k + 1;
		}
		else if (i == 23 || i == 15 || i == 11 || i == 8 || i == 12 || i == 16 || i == 24)
		{
			left = (h + marginLeft) * (l - 13) + 10;
			top = screenHeight - 10 - h;
			l = l + 1;
		}
		else if (i == 18 || i == 5 || i == 17)
		{
			left = 10;
			top = (h + marginTop) * (m - 22) + h + 10 + marginTop;
			m = m + 1;
		}
		lString = left.toString();
		finalLString = lString.concat("px");
		tString = top.toString();
		finalTString = tString.concat("px");
		$(finalCallerString).css('-webkit-box-shadow', '6px 6px 14px 0px rgba(0, 0, 0, 0.8)');
		$(finalCallerString).css('-moz-box-shadow', '6px 6px 14px 0px rgba(0, 0, 0, 0.8)');
		$(finalCallerString).css('box-shadow', '6px 6px 14px 0px rgba(0, 0, 0, 0.8)');
		$(finalCallerString).animate
		(
			{
				top: finalTString,
				left: finalLString
			},
			500
		);
	}
}

function CalculateThumbnailHeight()
{
	var h1 = (screenWidth) / 9;
	var h2 = (screenHeight) / 5;
	var h = 0;
	if (h1 > h2)
	{
		h = h2;
	}
	else if (h2 > h1)
	{
		h = h1;
	}
	return h - 20;
}

function ShrinkScreenPrefix()
{
	tempShrinkScreen = true;
	if (!shrinked && !mouseOverNavigation && aktivateTemp && !inZoomBar || byButton)
	{
		window.setTimeout
		(
			function()
			{
				var currentDate = new Date();
				var currentTime = currentDate.getTime();
				if (!inZoomBar && tempShrinkScreen && !shrinked && !mouseOverNavigation && aktivateTemp && currentTime - initialTime6 >= 500 || byButton)
				{		
					$('.hideables').fadeOut(1000);
					ShrinkScreen();
				}
			},
			500
		);
	}
}

function RestoreScreenPrefix()
{
	tempShrinkScreen = false;
	if (aktivate && !byButton)
	{
		window.setTimeout
		(
			function()
			{
				var currentDate = new Date();
				var currentTime = currentDate.getTime();
				if (!tempShrinkScreen && shrinked && !mouseOverNavigation && currentTime - initialTime7 >= 500 && !byButton)
				{
					$('.hideables').fadeIn(1000);
					RestoreScreen();
				}
			},
			500
		);
	}
	else if (!byButton)
	{
		$('.hideables').fadeIn(1000);
		RestoreScreen();
	}
}

function RestoreScreen()
{
	shrinked = false;
	if (!initFunction)
	{
		UpdateZoomBar(1);
	}
	var h = CalculateThumbnailHeight();
	var hString = h.toString();
	var lString = "";
	var lString2 = "";
	var finalHString = hString.concat("px");
	var finalLString = "";
	var finalLString2 = "";
	var finalLString3 = "";
	var callerString = "#thumbnail";
	var callerString2 = "#speech";
	var callerString3 = "#arrow";
	var left = 0;
	var top = 0;
	var tString = "";
	var tString2 = "";
	var finalTString = "";
	var finalTString2 = "";
	var finalTString3 = "";
	var marginLeft = ((screenWidth - 20 - h * 2) - h * 7) / 8;
	var marginTop = ((screenHeight - 20 - h * 2) - h * 3) / 4;
	var left2 = 0;
	var top2 = 0;
	var left3 = 0;
	var top3 = 0;
	var borderString = "7.5px solid";
	var borderColor = "transparent transparent white white";
	var j = 2;
	var k = 10;
	var l = 14;
	var m = 22;
	for (var i = 1; i < 25; i = i + 1)
	{
		var finalCallerString = callerString.concat(i.toString());
		var finalCallerString2 = callerString2.concat(i.toString());
		var finalCallerString3 = callerString3.concat(i.toString());
		if (i == 1)
		{
			left = -1 * h;
			top = -1 * h;
			left2 = h + 10;
			top2 = h + 27;
			left3 = h + 10;
			top3 = h + 13;
			borderString = "7.5px solid";
			borderColor = "transparent transparent white white";
		}
		else if (i == 2)
		{
			left = screenWidth + h;
			top = -1 * h;
			left2 = screenWidth - 2 * h - 10;
			top2 = h + 25;
			left3 = screenWidth - h - 24;
			top3 = h + 11;
			borderString = "7.5px solid";
			borderColor = "transparent white white transparent";
		}
		else if (i == 3)
		{
			left = -1 * h;
			top = screenHeight + h;
			left2 = h + 10;
			top2 = screenHeight - h - 29 - photoThumbnailHeight;
			left3 = h + 10;
			top3 = screenHeight - h + 7 - photoThumbnailHeight;
			borderString = "7.5px solid";
			borderColor = "white transparent transparent white";
		}
		else if (i == 4)
		{
			left = screenWidth + h;
			top = screenHeight + h;
			left2 = screenWidth - 2 * h - 10;
			top2 = screenHeight - h - 29 - photoThumbnailHeight;
			left3 = screenWidth - h - 24;
			top3 = screenHeight - h + 7 - photoThumbnailHeight;
			borderString = "7.5px solid";
			borderColor = "white white transparent transparent";
		}
		if (i == 21 || i == 13 || i == 9 || i == 6 || i == 10 || i == 14 || i == 22)
		{
			left = (h + marginLeft) * (j - 1) + 10;
			top = -1 * h;
			left2 = left;
			top2 = h + 20;
			left3 = (h + marginLeft) * (j - 1) + 10 + h / 2 - 10;
			top3 = h;
			borderString = "10px solid";
			borderColor = "transparent transparent white transparent";
			j = j + 1;
		}
		else if (i == 19 || i == 7 || i == 20)
		{
			left = screenWidth + h;
			top = (h + marginTop) * (k - 10) + h + 10 + marginTop;
			left2 = screenWidth - 2 * h - 20;
			top2 = top + h/2 - photoThumbnailHeight / 2 - 3;
			left3 = screenWidth - h - 20;
			top3 = top + h / 2 - 10;
			borderString = "10px solid";
			borderColor = "transparent transparent transparent white";
			k = k + 1;
		}
		else if (i == 23 || i == 15 || i == 11 || i == 8 || i == 12 || i == 16 || i == 24)
		{
			left = (h + marginLeft) * (l - 13) + 10;
			top = screenHeight + h;
			left2 = left;
			top2 = screenHeight - h - 26 - photoThumbnailHeight;
			left3 = (h + marginLeft) * (l - 13) + 10 + h / 2 - 10;
			top3 = screenHeight - h - photoThumbnailHeight + 10;
			borderString = "10px solid";
			borderColor = "white transparent transparent transparent";
			l = l + 1;
		}
		else if (i == 18 || i == 5 || i == 17)
		{
			left = -1 * h;
			top = (h + marginTop) * (m - 22) + h + 10 + marginTop;
			left2 = h + 20;
			top2 = top + h/2 - photoThumbnailHeight / 2 - 3;
			left3 = h;
			top3 = top + h / 2 - 10;
			borderString = "10px solid";
			borderColor = "transparent white transparent transparent";
			m = m + 1;
		}
		lString = left.toString();
		finalLString = lString.concat("px");
		tString = top.toString();
		finalTString = tString.concat("px");
		lString2 = left2.toString();
		finalLString2 = lString2.concat("px");
		tString2 = top2.toString();
		finalTString2 = tString2.concat("px");
		lString3 = left3.toString();
		finalLString3 = lString3.concat("px");
		tString3 = top3.toString();
		finalTString3 = tString3.concat("px");
		if (!initFunction)
		{
			$(finalCallerString).css('-webkit-box-shadow', '6px 6px 14px 0px rgba(0, 0, 0, 0)');
			$(finalCallerString).css('-moz-box-shadow', '6px 6px 14px 0px rgba(0, 0, 0, 0)');
			$(finalCallerString).css('box-shadow', '6px 6px 14px 0px rgba(0, 0, 0, 0)');
			$(finalCallerString).animate
			(
				{
					top: finalTString,
					left: finalLString
				},
				500
			);
		}
		else
		{
			var screenWidthString = screenWidth.toString();
			var finalSWString = screenWidthString.concat("px");
			var h2 = h + 20;
			var hString = h2.toString();
			var FHS = hString.concat("px");
			$(finalCallerString).css('top', finalTString);
			$(finalCallerString).css('left', finalLString);
			$(finalCallerString2).css('top', finalTString2);
			$(finalCallerString2).css('left', finalLString2);
			$(finalCallerString3).css('top', finalTString3);
			$(finalCallerString3).css('left', finalLString3);
			$(finalCallerString3).css('border', borderString);
			$(finalCallerString3).css('border-color', borderColor);
			$('#tb1').css('width', finalSWString);
			$('#tb1').css('height', FHS);
		}
	}
}

function ActivateRegion()
{
	if (activeRegion != activeRegionTemp && aktivate)
	{
		if (previouslyRegionIn)
		{
			requestedRegion = activeRegionTemp;
			window.setTimeout
			(
				function()
				{
					if (activeRegion != activeRegionTemp && activeRegionTemp == requestedRegion && nonActiveRegion == -1 && regionInTemp && soundSource[activeRegion] != soundSource[activeRegionTemp] && !afterKey)
					{
						var curTime = new Date();
						var currentTime = curTime.getTime();
						if (currentTime - initialTime4 >= 1000 && currentTime - initialTime5 >= 500 && !eksepsi2)
						{
							initialTime4 = currentTime;
							swappedOutRegion = activeRegion;
							previouslyRegionIn = true;
							activeRegion = activeRegionTemp;		
							nonActiveRegion = -1;					
							nonActiveRegionTemp = -1;
							activationComplete = false;
							swappingRegion = true;
							activeRegionTemp2 = -1;
							
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
							
							if (channelI1 != activeRegion && channelI2 != activeRegion && channelI3 != activeRegion && channelI4 != activeRegion && channelI5 != activeRegion && channelI6 != activeRegion)
							{
								ActivateSoundSwap();
							}
							else
							{
								clearTimeout(timeoutVariable);
								clearTimeout(timeoutVariable2)
								eksepsi2 = true;
								DeactivateSound();
								activeRegion = -1;
							}
							//$('#topRightCorner').text(activeRegion);
							//$('#topRightCorner').css('color', 'white');
						}
						else if (currentTime - initialTime4 >= 1000 && currentTime - initialTime5 >= 500 && eksepsi2)
						{
							eksepsi2 = false;
							channelF1b = -1;
							channelF2b = -1;
							channelF3b = -1;
							channelF4b = -1;
							channelF5b = -1;
							channelF6b = -1;
							ActivateSound();
						}
					}
					else if (afterKey)
					{
						afterKey = false;
					}
				},
				500
			);
		}
		else
		{
			activeRegion = activeRegionTemp;
			previouslyRegionIn = true;
			nonActiveRegion = -1;					
			nonActiveRegionTemp = -1;
			activationComplete = false;
			if (channelI1 != activeRegion && channelI2 != activeRegion && channelI3 != activeRegion && channelI4 != activeRegion && channelI5 != activeRegion && channelI6 != activeRegion)
			{
				var curTime = new Date();
				var currentTime = curTime.getTime();
				initialTime5 = currentTime;
				activeRegionTemp2 = -1;
				ActivateSound();
			}
			else
			{
				activeRegion = -1;
				previouslyRegionIn = false;
			}
			//$('#topRightCorner').text(activeRegion);
			//$('#topRightCorner').css('color', 'yellow');
		}
	}
}

function DeactivateRegion()
{
	if (nonActiveRegion == -1 && activeRegion != -1 && (regionOutTemp || !aktivate || buttonDeactivation))
	{
		if (buttonDeactivation)
		{
			buttonDeactivation = false;
		}
		nonActiveRegion = activeRegion;
		previouslyRegionIn = false;
		activeRegionTemp = -1;
		activeRegion = -1;
		nonActiveRegionTemp = -1;
		var initTime = new Date();
		initialTime = initTime.getTime();
		deactivationComplete = false;
		DeactivateSound();
		//$('#topRightCorner2').text(nonActiveRegion);
		//$('#topRightCorner2').css('color', 'white');
	}
}

/*
	var arstring = activeRegion.toString();	
	var narstring = nonActiveRegion.toString();
	var finalstring = arstring.concat(" | ", narstring);
	$('#topRightCorner').text(finalstring);
	$('#topRightCorner').css('color', 'black');
*/

function ActivateSound()
{
	currentActivation = activeRegion;
	LoopSound(currentActivation);
}

function ActivateSoundSwap()
{
	clearTimeout(timeoutVariable);
	clearTimeout(timeoutVariable2);
	window.setTimeout
	(
		function()
		{
			DeactivateSound();
		},
		0
	);
	window.setTimeout
	(
		function()
		{
			ActivateSound();
		},
		0
	);
}

function DeactivateSound()
{	
	if (swappedOutRegion != -1)
	{
		currentDeactivation = swappedOutRegion;
		swappedOutRegion = -1;
	}
	else
	{
		currentDeactivation = nonActiveRegion;
	}
	UnloopSound(currentDeactivation);
}

function LoopSound(currentLoop)
{
	musica[currentLoop].setTime(0);
	//$('#topRightCorner').text('Fading in...');
	//$('#topRightCorner').css('color', 'white');
	if (channelA1 == -1)
	{
		channelA1 = currentLoop;
	}
	else if (channelA2 == -1)
	{
		channelA2 = currentLoop;
	}
	else if (channelA3 == -1)
	{
		channelA3 = currentLoop;
	}
	else if (channelA4 == -1)
	{
		channelA4 = currentLoop;
	}
	else if (channelA5 == -1)
	{
		channelA5 = currentLoop;
	}
	else
	{
		channelA6 = currentLoop;
	}
	timeoutVariable = setTimeout
	(
		function()
		{	
			var currentLoop = -1;
			if (channelA1 != -1)
			{
				currentLoop = channelA1;
				channelA1 = -1;
			}
			else if (channelA2 != -1)
			{
				currentLoop = channelA3;
				channelA3 = -1;
			}
			else if (channelA3 != -1)
			{
				currentLoop = channelA3;
				channelA3 = -1;
			}
			else if (channelA4 != -1)
			{
				currentLoop = channelA4;
				channelA4 = -1;
			}
			else if (channelA5 != -1)
			{
				currentLoop = channelA5;
				channelA5 = -1;
			}
			else
			{
				currentLoop = channelA6;
				channelA6 = -1;
			}
			musica[currentLoop].play().fadeIn(2500);
			if (channelH1[currentLoop] == -1)
			{
				channelH1[currentLoop] = currentLoop;
			}
			else if (channelH2[currentLoop] == -1)
			{
				channelH2[currentLoop] = currentLoop;
			}
			else if (channelH3[currentLoop] == -1)
			{
				channelH3[currentLoop] = currentLoop;
			}
			else if (channelH4[currentLoop] == -1)
			{
				channelH4[currentLoop] = currentLoop;
			}
			else if (channelH5[currentLoop] == -1)
			{
				channelH5[currentLoop] = currentLoop;
			}
			else 
			{
				channelH6[currentLoop] = currentLoop;
			}
			if (channelF1b != -1)
			{
				channelF1b = -1;
			}
			else if (channelF2b != -1)
			{
				channelF2b = -1;
			}
			else if (channelF3b != -1)
			{
				channelF3b = -1;
			}
			else if (channelF4b != -1)
			{
				channelF4b = -1;
			}
			else if (channelF5b != -1)
			{
				channelF5b = -1;
			}
			else if (channelF6b != -1)
			{
				channelF6b = -1;
			}
			if (channelG1 != -1)
			{
				channelG1 = -1;
			}
			else if (channelG2 != -1)
			{
				channelG2 = -1;
			}
			else if (channelG3 != -1)
			{
				channelG3 = -1;
			}
			else if (channelG4 != -1)
			{
				channelG4 = -1;
			}
			else if (channelG5 != -1)
			{
				channelG5 = -1;
			}
			else if (channelG6 != -1)
			{
				channelG6 = -1;
			}
			if (currentLoop != channelF1 && currentLoop != channelF2 && currentLoop != channelF3 && aktivate)
			{
				if (channelC1 == -1)
				{
					channelC1 = currentLoop;
					//$('#topRightCorner2').text('c1');
				}
				else if (channelC2 == -1)
				{
					channelC2 = currentLoop;
					//$('#topRightCorner2').text('c2');
				}
				else if (channelC3 == -1)
				{
					channelC3 = currentLoop;
					//$('#topRightCorner2').text('c3');
				}
				else if (channelC4 == -1)
				{
					channelC4 = currentLoop;
					//$('#topRightCorner2').text('c4');
				}
				else if (channelC5 == -1)
				{
					channelC5 = currentLoop;
					//$('#topRightCorner2').text('c5');
				}
				else if (channelC6 == -1)
				{
					channelC6 = currentLoop;
					//$('#topRightCorner2').text('c6');
				}
				var duration = musica[currentLoop].getDuration() * 1000 - 7500;
				timeoutVariable2 = setTimeout
				(
					function()
					{
						var currentLoop = -1;
						if (channelC1 != -1)
						{
							currentLoop = channelC1;
							channelC1 = -1;
							//$('#topRightCorner2').text('c1 again');
						}
						else if (channelC2 != -1) /*********/
						{
							currentLoop = channelC2;
							channelC2 = -1;
							//$('#topRightCorner2').text('c2 again');
						}
						else if (channelC3 != -1)
						{
							currentLoop = channelC3;
							channelC3 = -1;
							//$('#topRightCorner2').text('c3 again');
						}
						else if (channelC4 != -1)
						{
							currentLoop = channelC4;
							channelC4 = -1;
							//$('#topRightCorner2').text('c4 again');
						}
						else if (channelC5 != -1)
						{
							currentLoop = channelC5;
							channelC5 = -1;
							//$('#topRightCorner2').text('c5 again');
						}
						else if (channelC6 != -1)
						{
							currentLoop = channelC6;
							channelC6 = -1;
							//$('#topRightCorner2').text('c6 again');
						}
						var boolEnter = false;
						if (channelH6[currentLoop] == currentLoop && (channelH5[currentLoop] == currentLoop || channelH4[currentLoop] == currentLoop || channelH3[currentLoop] == currentLoop || channelH2[currentLoop] == currentLoop || channelH1[currentLoop] == currentLoop))
						{
							channelH6[currentLoop] = -1;
						}
						else if (channelH6[currentLoop] != currentLoop && channelH5[currentLoop] == currentLoop && (channelH4[currentLoop] == currentLoop || channelH3[currentLoop] == currentLoop || channelH2[currentLoop] == currentLoop || channelH1[currentLoop] == currentLoop))
						{
							channelH5[currentLoop] = -1;
						}
						else if (channelH6[currentLoop] != currentLoop && channelH5[currentLoop] != currentLoop && channelH4[currentLoop] == currentLoop && (channelH3[currentLoop] == currentLoop || channelH2[currentLoop] == currentLoop || channelH1[currentLoop] == currentLoop))
						{
							channelH4[currentLoop] = -1;
						}
						else if (channelH6[currentLoop] != currentLoop && channelH5[currentLoop] != currentLoop && channelH4[currentLoop] != currentLoop && channelH3[currentLoop] == currentLoop && (channelH2[currentLoop] == currentLoop || channelH1[currentLoop] == currentLoop))
						{
							channelH3[currentLoop] = -1;
						}
						else if (channelH6[currentLoop] != currentLoop && channelH5[currentLoop] != currentLoop && channelH4[currentLoop] != currentLoop && channelH3[currentLoop] != currentLoop && channelH2[currentLoop] == currentLoop && channelH1[currentLoop] == currentLoop)
						{
							channelH2[currentLoop] = -1;
						}
						else if (channelH6[currentLoop] != currentLoop && channelH5[currentLoop] != currentLoop && channelH4[currentLoop] != currentLoop && channelH3[currentLoop] != currentLoop && channelH2[currentLoop] != currentLoop && channelH1[currentLoop] == currentLoop)
						{
							channelH1[currentLoop] = -1;
							boolEnter = true;
						}
						if 
						(
							currentLoop != channelF1 && currentLoop != channelF2 && currentLoop != channelF3 && currentLoop != channelF4 && currentLoop != channelF5 && currentLoop != channelF6
							&&
							currentLoop != channelF1b && currentLoop != channelF2b && currentLoop != channelF3b && currentLoop != channelF4b && currentLoop != channelF5b && currentLoop != channelF6b
							&&
							aktivate
							&&
							boolEnter
							//&&
							//requestedRegion == activeRegion
						)
						{
							//$('#topRightCorner2').text(currentLoop);
							if (channelG1 == -1)
							{
								channelG1 = currentLoop;
							}
							else if (channelG2 == -1)
							{
								channelG2 = currentLoop;
							}
							else if (channelG3 == -1)
							{
								channelG3 = currentLoop;
							}
							else if (channelG4 == -1)
							{
								channelG4 = currentLoop;
							}
							else if (channelG5 == -1)
							{
								channelG5 = currentLoop;
							}
							else
							{
								channelG6 = currentLoop;
							}
							if (channelD1 == -1)
							{
								channelD1 = currentLoop;
							}
							else if (channelD2 == -1)
							{
								channelD2 = currentLoop;
							}
							else if (channelD3 == -1)
							{
								channelD3 = currentLoop;
							}
							else if (channelD4 == -1)
							{
								channelD4 = currentLoop;
							}
							else if (channelD5 == -1)
							{
								channelD5 = currentLoop;
							}
							else
							{
								channelD6 = currentLoop;
							}
							//$('#topRightCorner').text(duration - 2500 - musica[currentLoop].getTime() * 1000);
							var foduration = 2500;
							if (isDrag)
							{
								foduration = 500;
							}
							//$('#topRightCorner2').text(currentLoop);
							musica[currentLoop].fadeOut(foduration,
								function()
								{
									//$('#topRightCorner').text('Faded out...');
									var currentLoop = -1;
									if (channelD1 != -1)
									{
										currentLoop = channelD1;
										channelD1 = -1;
									}
									else if (channelD2 != -1)
									{
										currentLoop = channelD2;
										channelD2 = -1;
									}
									else if (channelD3 != -1)
									{
										currentLoop = channelD3;
										channelD3 = -1;
									}
									else if (channelD4 != -1)
									{
										currentLoop = channelD4;
										channelD4 = -1;
									}
									else if (channelD5 != -1)
									{
										currentLoop = channelD5;
										channelD5 = -1;
									}
									else
									{
										currentLoop = channelD6;
										channelD6 = -1;
									}
									if (channelE1 == -1)
									{
										channelE1 = currentLoop;
									}
									else if (channelE2 == -1)
									{
										channelE2 = currentLoop;
									}
									else if (channelE3 == -1)
									{
										channelE3 = currentLoop;
									}
									else if (channelE4 == -1)
									{
										channelE4 = currentLoop;
									}
									else if (channelE5 == -1)
									{
										channelE5 = currentLoop;
									}
									else
									{
										channelE6 = currentLoop;
									}
									musica[currentLoop].stop();
									window.setTimeout
									(
										function()
										{
											var currentLoop = -1;
											if (channelE1 != -1)
											{
												currentLoop = channelE1;
												channelE1 = -1;
											}
											else if (channelE2 != -1)
											{
												currentLoop = channelE2;
												channelE2 = -1;
											}
											else if (channelE3 != -1)
											{
												currentLoop = channelE3;
												channelE3 = -1;
											}
											else if (channelE4 != -1)
											{
												currentLoop = channelE4;
												channelE4 = -1;
											}
											else if (channelE5 != -1)
											{
												currentLoop = channelE5;
												channelE5 = -1;
											}
											else
											{
												currentLoop = channelE6;
												channelE6 = -1;
											}
											if (currentLoop == activeRegion && aktivate)
											{
												LoopSound(currentLoop);
											}
										},
										2500
									);
								}
							);
						}
						/*
						else 
						//if
						//(
							//currentLoop != channelF1 && currentLoop != channelF2 && currentLoop != channelF3 && currentLoop != channelF4 && currentLoop != channelF5 && currentLoop != channelF6
							//&&
							//currentLoop != channelF1b && currentLoop != channelF2b && currentLoop != channelF3b && currentLoop != channelF4b && currentLoop != channelF5b && currentLoop != channelF6b
						//)	
						{
							$('#topRightCorner2').text('Error');
						}
						*/
					},
					duration
				);
			}
		},
		51
	);
	window.setTimeout
	(
		function()
		{
			//$('#topRightCorner').text('');
			//$('#topRightCorner').css('color', 'white');
		},
		2500
	);
}

function UnloopSound(currentLoop)
{
	if (currentLoop != channelG1 && currentLoop != channelG2 && currentLoop != channelG3)
	{
		if (channelB1 == -1)
		{
			channelB1 = currentLoop;
		}
		else if (channelB2 == -1)
		{
			channelB2 = currentLoop;
		}
		else if (channelB3 == -1)
		{
			channelB3 = currentLoop;
		}
		else if (channelB4 == -1)
		{
			channelB4 = currentLoop;
		}
		else if (channelB5 == -1)
		{
			channelB5 = currentLoop;
		}
		else
		{
			channelB6 = currentLoop;
		}
		if (channelF1 == -1)
		{
			channelF1 = currentLoop;
		}
		else if (channelF2 == -1)
		{
			channelF2 = currentLoop;
		}
		else if (channelF3 == -1)
		{
			channelF3 = currentLoop;
		}
		else if (channelF4 == -1)
		{
			channelF4 = currentLoop;
		}
		else if (channelF5 == -1)
		{
			channelF5 = currentLoop;
		}
		else
		{
			channelF6 = currentLoop;
		}
		//$('#topRightCorner2').text('Fading out...');
		//$('#topRightCorner2').css('color', 'white');
		if (channelI1 == -1)
		{
			channelI1 = currentLoop;
		}
		else if (channelI2 == -1)
		{
			channelI2 = currentLoop;
		}
		else if (channelI3 == -1)
		{
			channelI3 = currentLoop;
		}
		else if (channelI4 == -1)
		{
			channelI4 = currentLoop;
		}
		else if (channelI5 == -1)
		{
			channelI5 = currentLoop;
		}
		else
		{
			channelI6 = currentLoop;
		}
		musica[currentLoop].fadeOut(
			2551,
			function()
			{
				var currentLoop = -1;
				if (channelB1 != -1)
				{
					currentLoop = channelB1;
					channelB1 = -1;
				}
				else if (channelB2 != -1)
				{
					currentLoop = channelB2;
					channelB2 = -1;
				}
				else if (channelB3 != -1)
				{
					currentLoop = channelB3;
					channelB3 = -1;
				}
				else if (channelB4 != -1)
				{
					currentLoop = channelB4;
					channelB4 = -1;
				}
				else if (channelB5 != -1)
				{
					currentLoop = channelB5;
					channelB5 = -1;
				}
				else
				{
					currentLoop = channelB6;
					channelB6 = -1;
				}
				if (channelI1 == currentLoop)
				{
					channelI1 = -1;
				}
				else if (channelI2 == currentLoop)
				{
					channelI2 = -1;
				}
				else if (channelI3 == currentLoop)
				{
					channelI3 = -1;
				}
				else if (channelI4 == currentLoop)
				{
					channelI4 = -1;
				}
				else if (channelI5 == currentLoop)
				{
					channelI5 = -1;
				}
				else if (channelI6 == currentLoop)
				{
					channelI6 = -1;
				}
				//$('#topRightCorner2').text('');
				//$('#topRightCorner2').css('color', 'white');
				if (currentLoop != activeRegion || !aktivate)
				{	
					musica[currentLoop].stop();
				}
				if (channelF1 != -1)
				{
					channelF1 = -1;
				}
				else if (channelF2 != -1)
				{	
					channelF2 = -1;
				}
				else if (channelF3 != -1)
				{
					channelF3 = -1;
				}
				else if (channelF4 != -1)
				{
					channelF4 = -1;
				}
				else if (channelF5 != -1)
				{
					channelF5 = -1;
				}
				else
				{
					channelF6 = -1;
				}
				if (channelF1b == -1)
				{
					channelF1b = currentLoop;
				}
				else if (channelF2b == -1)
				{
					channelF2b = currentLoop;
				}
				else if (channelF3b == -1)
				{
					channelF3b = currentLoop;
				}
				else if (channelF4b == -1)
				{
					channelF4b = currentLoop;
				}
				else if (channelF5b == -1)
				{
					channelF5b = currentLoop;
				}
				else
				{
					channelF6b = currentLoop;
				}
				if (aktivate)
				{
					if (channelC1 == currentLoop)
					{	
						channelC1 = channelC2;
						channelC2 = channelC3;
						channelC3 = channelC4;
						channelC4 = channelC5;
						channelc5 = channelC6;
						channelC6 = -1;
					}
					if (channelH1[currentLoop] == currentLoop) /*******/
					{
						channelH1[currentLoop] = channelH2[currentLoop];
						channelH2[currentLoop] = channelH3[currentLoop];
						channelH3[currentLoop] = channelH4[currentLoop];
						channelH4[currentLoop] = channelH5[currentLoop];
						channelH5[currentLoop] = channelH6[currentLoop];
						channelH6[currentLoop] = -1;
					}
				}
				if (!bgSfxMutePressable)
				{
					//bgSfxMutePressable = true;
				}
			}
		);
	}
}


function AddEvents()
{
	navigationDOM = document.getElementsByClassName("navigator");
	for (i = 0; i < navigationDOM.length; i++)
	{
		navigationDOM[i].addEventListener("mousedown", SetMouseDown, false);
		navigationDOM[i].addEventListener("mouseup", SetMouseUp, false);
	}
	navigationDOM2 = document.getElementsByClassName("arrow-navigation");
	for (i = 0; i < navigationDOM2.length; i++)
	{
		navigationDOM2[i].addEventListener("mousedown", SetMouseDown, false);
		navigationDOM2[i].addEventListener("mouseup", SetMouseUp, false);
	}
	resetButtonDOM = document.getElementById("resetButton");
	resetButtonDOM.removeEventListener("mousedown", SetMouseDown, false);
	resetButtonDOM.removeEventListener("mouseup", SetMouseUp, false);
}

function AddOverlays()
{
	navigatorDiv = document.createElement("div");
	navigatorDivTop = 0;
	navigatorDivLeft = 0;
	navigatorDivWidth = 1;
	navigatorDivHeight = parseInt(screenHeight)/parseInt(screenWidth);
	navigatorRectangle = new Seadragon.Rect
	(   
		navigatorDivLeft, navigatorDivTop,
		navigatorDivWidth, navigatorDivHeight
	);
	navigatorDiv.className = "overlay";
	panoramaNavigator.drawer.addOverlay(navigatorDiv, navigatorRectangle);
}

function CheckAnnotations()
{
	var numberOfPoints = annotations.length;
	var currentZoom = panorama.viewport.getZoom();
	var currentAnnotation = null;
	document.getElementById('nvg-overview-title').innerHTML = '<b>Zoom: </b>' + (currentZoom.toFixed(3)).toString();
	for (var i = 0; i < numberOfPoints * 2; i = i + 1)
	{
		var tempId = i % numberOfPoints;
		var idString = "#anno";
		var idString2 = "#annoRing";
		var idString3 = "#annoRingInner";
		
		var specialException = false;
		var halfScreenX = 1 / (2 * panorama.viewport.getZoom());
		var halfScreenY = halfScreenX * screenHeight / screenWidth;
		var H = CalculateThumbnailHeight() + 20;
		var ccenter = panorama.viewport.getCenter();
		var top = ccenter.y - halfScreenY + ((H + 20) / screenHeight) / (2 * panorama.viewport.getZoom());
		var bottom = ccenter.y + halfScreenY - ((H + 20) / screenHeight) / (2 * panorama.viewport.getZoom());
		var left = ccenter.x - halfScreenX + ((H + 20) / screenWidth) / (panorama.viewport.getZoom());
		var right = ccenter.x + halfScreenX - ((H + 20) / screenWidth) / (panorama.viewport.getZoom());
		var partialCreditX = 0;
		var partialCreditY = 0;
		var partialCreditX2 = 0;
		var partialCreditY2 = 0;
		var partialCreditX2b = annoWidth / 2 * halfScreenX / (screenWidth / 2);
		var partialCreditY2b = annoHeight / 2 * halfScreenY / (screenHeight / 2);
		if (T[i % numberOfPoints] != 0)
		{
			if (T[i % numberOfPoints] < 0)
			{
				partialCreditY = -1 * (annoSmallH + annoHeight / 2) * halfScreenY / (screenHeight / 2);
				partialCreditY2 = -1 * annoHeight / 2 * halfScreenY / (screenHeight / 2);
			}
			else
			{
				partialCreditY = (annoSmallH + annoHeight / 2) * halfScreenY / (screenHeight / 2);
				partialCreditY2 = annoHeight / 2 * halfScreenY / (screenHeight / 2);
			}
		}
		else
		{
			partialCreditY = (annoSmallH / 2) * halfScreenY / (screenHeight / 2);
			partialCreditY2 = 0;
		}
		if (L[i % numberOfPoints] != 0)
		{
			if (L[i % numberOfPoints] < 0)
			{
				partialCreditX = -1 * (annoSmallW + annoWidth / 2) * halfScreenX / (screenWidth / 2);
				partialCreditX2 = -1 * annoWidth / 2 * halfScreenX / (screenWidth / 2);
			}
			else
			{
				partialCreditX = (annoSmallW + annoWidth / 2) * halfScreenX / (screenWidth / 2);
				partialCreditX2 = annoWidth / 2 * halfScreenX / (screenWidth / 2);
			}
		}
		else
		{
			partialCreditX = (annoSmallW / 2) * halfScreenX / (screenWidth / 2);
			partialCreditX2 = 0;
		}
		var annoCoord = annotations[i % numberOfPoints];
		if (!(annoCoord.x + partialCreditX2b > right || annoCoord.x - partialCreditX2b < left  || annoCoord.y + partialCreditY2b > bottom || annoCoord.y - partialCreditY2b < top))
		{
			specialException = false;
		}
		else 
		{
			specialException = true;
		}
		if (i < numberOfPoints)
		{
			for (var k = 0; k < numberOfPoints; k = k + 1)
			{
				if (
					(
						annoCoord.x + partialCreditX2 + partialCreditX  >= annotations[k].x - partialCreditX2b
						&&
						partialCreditX2 >= 0
						||
						annoCoord.x + partialCreditX2 + partialCreditX  < annotations[k].x + partialCreditX2b
						&&
						partialCreditX2 < 0
					)
					&&
					(
						annoCoord.y + partialCreditY2 + partialCreditY  >= annotations[k].y - partialCreditY2b
						&&
						partialCreditY2 >= 0
						||
						annoCoord.y + partialCreditY2 + partialCreditY  < annotations[k].y + partialCreditY2b
						&&
						partialCreditY2 < 0
					)
					&&
					(
						annoCoord.y + partialCreditY2 * 2  < annotations[k].y - partialCreditY2b
						&&
						partialCreditY2 >= 0
						||
						annoCoord.y + partialCreditY2 * 2  >= annotations[k].y + partialCreditY2b
						&&
						partialCreditY2 < 0
					)
					&&
					(
						annoCoord.x + partialCreditX2 * 2  < annotations[k].x - partialCreditX2b
						&&
						partialCreditX2 >= 0
						||
						annoCoord.x + partialCreditX2 * 2  >= annotations[k].x + partialCreditX2b
						&&
						partialCreditX2 < 0
					)
					&&
						i % numberOfPoints == activeAnnotation
					&&
						k != i % numberOfPoints
				)
				{
					specialExceptions[k] = true;
				}	
				else if (activeAnnotation < 0 || deactivatingAnnotation > -1 || transfiguratio)
				{
					specialExceptions[k] = false;
					if (deactivatingAnnotation > -1)
					{
						deactivatingAnnotation = -1;
					}
				}
			}
		}
		if (currentZoom < zoomMin[i % numberOfPoints] || currentZoom > zoomMax[i % numberOfPoints] || (specialException && shrinked) || specialExceptions[i % numberOfPoints])
		{
			idString = idString.concat(tempId.toString());
			idString2 = idString2.concat(tempId.toString());
			if (annotationActive[i % numberOfPoints])
			{
				var callerName = "#annoContentSmall";
				var callerName2 = "#annoContentArrow";
				var callerName3 = "#annoContentTextSmall";
				callerName = callerName.concat(tempId.toString());
				callerName2 = callerName2.concat(tempId.toString());
				callerName3 = callerName3.concat(tempId.toString());
				$(idString).fadeOut();
				$(idString2).fadeOut();
				$(callerName).fadeOut();
				$(callerName2).fadeOut();
				$(callerName3).fadeOut();
				if (onAnnoClick[i % numberOfPoints])
				{
					onAnnoClick[i % numberOfPoints] = false;
					RestoreAnno(i % numberOfPoints);
				}
				if (i == activeAnnotation)
				{
					restoratio = true;
					annoExit[i % numberOfPoints] = true;
					ExitAnno(annoTracker[i % numberOfPoints], tempId);
				}
			}
			annotationActive[i % numberOfPoints] = false;
			annotationMouse = false;
			duringActive = false;
			postExitAnno2 = false;
		}
		else if (currentZoom >= zoomMin[i % numberOfPoints] && currentZoom <= zoomMax[i % numberOfPoints] && (!specialException || !shrinked) && !specialExceptions[i % numberOfPoints])
		{
			if (!annotationActive[i % numberOfPoints])
			{
				idString = idString.concat(tempId.toString());
				idString2 = idString2.concat(tempId.toString());
				idString3 = idString3.concat(tempId.toString());
				annoExit[i % numberOfPoints] = false;
				hoverLock[i % numberOfPoints] = false;
				$(idString).fadeIn();
				$(idString2).fadeIn();
				$(idString3).fadeIn();
			}
			annotationActive[i % numberOfPoints] = true;
		}
	}
	var d = 1;
	var c = panorama.viewport.getCenter();
	var smallestI = -1;
	for (var i = 0; i < annotationActive.length; i = i + 1)
	{
		if (annotationActive[i])
		{
			var dtemp = Math.sqrt(Math.pow((c.x - annotations[i].x), 2) + Math.pow((c.y - annotations[i].y), 2));
			if (dtemp < d)
			{
				d = dtemp;
				smallestI = i;
			}
		}
	}
	var markerImg = 'pin-red.png';
	var markerImg2 = 'pin-location-green.png';
	if (d <= 0.04)
	{
	
	
		gmap.panTo(annotationsLatLng[smallestI]);
		gmap.setZoom(17);
		
		
		gmapMarker[smallestI].setMap(null);
		gmapMarker[smallestI] = new google.maps.Marker
		(
			{
				position: annotationsLatLng[smallestI],
				map: gmap,
				title: speech[smallestI],
				icon: markerImg
			}
		);
		$('#nearest-spot b').text(speech[smallestI]);
	}
	else
	{
	
	
		gmap.panTo(originalLatLng);
		gmap.setZoom(originalMapZoom);
		
		
		for (var o = 0; o < annotationsLatLng.length; o = o + 1)
		{
			gmapMarker[o].setMap(null);
			gmapMarker[o] = new google.maps.Marker
			(
				{
					position: annotationsLatLng[o],
					map: gmap,
					title: speech[o],
					icon: markerImg2
				}
			);
		}
		$('#nearest-spot b').text('-');
	}
	for (var o = 0; o < annotationsLatLng.length; o = o + 1)
	{
		if (o != smallestI)
		{
			gmapMarker[o].setMap(null);
			gmapMarker[o] = new google.maps.Marker
			(
				{
					position: annotationsLatLng[o],
					map: gmap,
					title: speech[o],
					icon: markerImg2
				}
			);
		}
	}
}

function ComputeAnnotations(param)
{
	var numberOfPoints = annotations.length;
	if (transfiguratio)
	{
		return
	}
	window.setTimeout
	(
		function()
		{
			annoWidth = parseInt($('.annotation').width());
			annoHeight = parseInt($('.annotation').height());
			annoSmallWidth = parseInt($('.annotation-content-small').width());
			annoSmallHeight = parseInt($('.annotation-content-small').height());
			var annoBorder = annoArrowSize;
			var startString = "";
			var xMarginPositive = annoWidth / 2 + annoSmallWidth / 2 + annoArrowSize;
			var xMarginNegative = -1 * xMarginPositive;
			var yMarginPositive = annoHeight / 2 + annoSmallHeight / 2 + annoArrowSize;
			var yMarginNegative = -1 * yMarginPositive;
			var xMarginPositive2 = annoWidth / 2 + annoSmallWidth / 2;
			var xMarginNegative2 = -1 * xMarginPositive2;
			
			var xmp = xMarginPositive.toString();
			var xmn = xMarginNegative.toString();
			var xmp2 = xMarginPositive2.toString();
			var xmn2 = xMarginNegative2.toString();
			var ymp = yMarginPositive.toString();
			var ymn = yMarginNegative.toString();
			
			var xUp = -1 * annoArrowSize;
			var xDown = xUp;
			var yUp = -1 * (annoArrowSize - annoHeight / 2);
			var yDown = -1 * (annoHeight / 2 + annoArrowSize);
			var xRight = -1 * (annoWidth / 2 + annoArrowSize);
			var yRight = -1 * annoArrowSize;
			var xLeft = -1 * (annoArrowSize - annoWidth / 2);
			var yLeft = yRight;
			var xDownLeft = annoWidth / 2;
			var yDownLeft = yDown;
			var xDownRight = -1 * xDownLeft - annoArrowSize + 1;
			var yDownRight = yDown;
			var xUpLeft = xDownLeft;
			var yUpLeft = annoHeight / 2 + 1;
			var xUpRight = xDownRight;
			var yUpRight = yUpLeft;
			
			xmp = xmp.concat("px ");
			xmn = xmn.concat("px ");
			xmp2 = xmp2.concat("px ");
			xmn2 = xmn2.concat("px ");
			ymp = ymp.concat("px ");
			ymn = ymn.concat("px ");
			
			xUp = xUp.toString();
			xDown = xDown.toString();
			yUp = yUp.toString();
			yDown = yDown.toString();
			xLeft = xLeft.toString();
			xRight = xRight.toString();
			yLeft = yLeft.toString();
			yRight = yRight.toString();
			xDownLeft = xDownLeft.toString();
			yDownLeft = yDownLeft.toString();
			xDownRight = xDownRight.toString();
			yDownRight = yDownRight.toString();
			xUpLeft = xUpLeft.toString();
			yUpLeft = yUpLeft.toString();
			xUpRight = xUpRight.toString();
			yUpRight = yUpRight.toString();
			
			xUp = xUp.concat("px");
			xDown = xDown.concat("px");
			yUp = yUp.concat("px ");
			yDown = yDown.concat("px ");
			xLeft = xLeft.concat("px");
			xRight = xRight.concat("px");
			yLeft = yLeft.concat("px ");
			yRight = yRight.concat("px ");
			xDownLeft = xDownLeft.concat("px");
			yDownLeft = yDownLeft.concat("px ");
			xDownRight = xDownRight.concat("px");
			yDownRight = yDownRight.concat("px ");
			xUpLeft = xUpLeft.concat("px");
			yUpLeft = yUpLeft.concat("px ");
			xUpRight = xUpRight.concat("px");
			yUpRight = yUpRight.concat("px ");
			
			var opx = "0px ";
			//alert(1 / (2 * panorama.viewport.getZoom()));
			for (var i = 0; i < numberOfPoints; i = i + 1)
			{
				var callerName = "#annoContentSmall";
				var callerName2 = "#annoContentArrow";
				var callerName3 = "#annoContentTextSmall";
				var callerName4 = "#annoContentTextLarge";
				var idTemp = i.toString();
				var callerString = callerName.concat(idTemp);
				var callerString2 = callerName2.concat(idTemp);
				var callerString3 = callerName3.concat(idTemp);
				var callerString4 = callerName4.concat(idTemp);
				var endString = "";
				var endString2 = "";
				var endString3 = "";
				var endString4 = "";
				var arrowString = "";
				if (param == 0)
				{
					if (i % 8 == 0)
					{
						endString = startString.concat(ymn, opx, opx, opx);	
						endString3 = startString.concat(ymn, opx, opx, opx);
						endString4 = startString.concat(ymn, opx, opx, opx);	
						endString2 = startString.concat(yDown, opx, opx, xDown);
						arrowString = arrowColorDown;
						annoBorder = annoArrowSize;
						T[i] = yMarginNegative;
						R[i] = 0;
						B[i] = 0;
						L[i] = 0;
					}	
					else if (i % 8 == 1)
					{
						endString = startString.concat(ymp, opx, opx, opx);
						endString3 = startString.concat(ymp, opx, opx, opx);
						endString4 = startString.concat(ymp, opx, opx, opx);
						endString2 = startString.concat(yUp, opx, opx, xUp);
						arrowString = arrowColorUp;
						annoBorder = annoArrowSize;
						T[i] = yMarginPositive;
						R[i] = 0;
						B[i] = 0;
						L[i] = 0;
					}
					else if (i % 8 == 2)
					{
						endString = startString.concat(opx, opx, opx, xmp);
						endString3 = startString.concat(opx, opx, opx, xmp);
						endString4 = startString.concat(opx, opx, opx, xmp);
						endString2 = startString.concat(yLeft, opx, opx, xLeft);
						arrowString = arrowColorLeft;
						annoBorder = annoArrowSize;
						T[i] = 0;
						R[i] = 0;
						B[i] = 0;
						L[i] = xMarginPositive;
					}
					else if (i % 8 == 3)
					{
						endString = startString.concat(opx, opx, opx, xmn);
						endString3 = startString.concat(opx, opx, opx, xmn);
						endString4 = startString.concat(opx, opx, opx, xmn);
						endString2 = startString.concat(yRight, opx, opx, xRight);
						arrowString = arrowColorRight;
						annoBorder = annoArrowSize;
						T[i] = 0;
						R[i] = 0;
						B[i] = 0;
						L[i] = xMarginNegative;
					}
					else if (i % 8 == 4)
					{
						endString = startString.concat(ymn, opx, opx, xmp2);
						endString3 = startString.concat(ymn, opx, opx, xmp2);
						endString4 = startString.concat(ymn, opx, opx, xmp2);
						endString2 = startString.concat(yDownLeft, opx, opx, xDownLeft);
						arrowString = arrowColorDownLeft;
						annoBorder = annoArrowSize / 2;
						T[i] = yMarginNegative;
						R[i] = 0;
						B[i] = 0;
						L[i] = xMarginPositive2;
					}
					else if (i % 8 == 5)
					{	
						endString = startString.concat(ymn, opx, opx, xmn2);
						endString3 = startString.concat(ymn, opx, opx, xmn2);
						endString4 = startString.concat(ymn, opx, opx, xmn2);
						endString2 = startString.concat(yDownRight, opx, opx, xDownRight);
						arrowString = arrowColorDownRight;
						annoBorder = annoArrowSize / 2;
						T[i] = yMarginNegative;
						R[i] = 0;
						B[i] = 0;
						L[i] = xMarginNegative2;
					}
					else if (i % 8 == 6)
					{
						endString = startString.concat(ymp, opx, opx, xmp2);
						endString3 = startString.concat(ymp, opx, opx, xmp2);
						endString4 = startString.concat(ymp, opx, opx, xmp2);
						endString2 = startString.concat(yUpLeft, opx, opx, xUpLeft);
						arrowString = arrowColorUpLeft;
						annoBorder = annoArrowSize / 2;
						T[i] = yMarginPositive;
						R[i] = 0;
						B[i] = 0;
						L[i] = xMarginPositive2;
					}
					else
					{
						endString = startString.concat(ymp, opx, opx, xmn2);
						endString3 = startString.concat(ymp, opx, opx, xmn2);
						endString4 = startString.concat(ymp, opx, opx, xmn2);
						endString2 = startString.concat(yUpRight, opx, opx, xUpRight);
						arrowString = arrowColorUpRight;
						annoBorder = annoArrowSize / 2;
						T[i] = yMarginPositive;
						R[i] = 0;
						B[i] = 0;
						L[i] = xMarginNegative2;
					}
					if (activeAnnotation != i)
					{
						$(callerString).css('margin', endString);
						$(callerString2).css('margin', endString2);
						$(callerString3).css('margin', endString3);
						$(callerString4).css('margin', endString4);
						annoBorder = annoBorder.toString();
						annoBorder = annoBorder.concat("px solid");
						$(callerString2).css('border', annoBorder);
						$(callerString2).css('border-color', arrowString);
					}
				}
				else
				{
					var halfScreenX = 1 / (2 * panorama.viewport.getZoom());
					var halfScreenY = (screenHeight / screenWidth) * halfScreenX;
					var H = CalculateThumbnailHeight();
					var ccenter = panorama.viewport.getCenter();
					var top = ccenter.y - halfScreenY;
					var bottom = ccenter.y + halfScreenY;
					var left = ccenter.x - halfScreenX;
					var right = ccenter.x + halfScreenX;
					topRightCornerWidth = parseInt($('#topLeftCorner').css('width')) * halfScreenX / (screenWidth / 2);
					topRightCornerHeight = parseInt($('#topLeftCorner').css('height')) * halfScreenY / (screenHeight / 2);
					topLeftCornerWidth = parseInt($('#topLeftCorner').css('width')) * halfScreenX / (screenWidth / 2);
					topLeftCornerHeight = parseInt($('#topLeftCorner').css('height')) * halfScreenY / (screenHeight / 2);
					bottomLeftCornerWidth = $('#bottomLeftCorner').width() * halfScreenX / (screenWidth / 2);
					bottomLeftCornerHeight = $('#bottomLeftCorner').height() * halfScreenY / (screenHeight / 2);
					bottomRightCornerWidth = $('#bottomRightCorner').width() * halfScreenX / (screenWidth / 2);
					bottomRightCornerHeight = $('#bottomRightCorner').width() * halfScreenY / (screenHeight / 2);
					topMiddleWidth = parseInt($('#topMiddle').css('width')) * halfScreenX / (screenWidth / 2);
					topMiddleHeight = parseInt($('#topMiddle').css('height')) * halfScreenY / (screenHeight / 2);
					bottomMiddleWidth = parseInt($('#bottomMiddle').css('width')) * halfScreenX / (screenWidth / 2);
					bottomMiddleHeight = parseInt($('#bottomMiddle').css('height')) * halfScreenY / (screenHeight / 2);
					leftMiddleWidth = parseInt($('#leftMiddle').css('width')) * halfScreenX / (screenWidth / 2);
					leftMiddleHeight = parseInt($('#leftMiddle').css('height')) * halfScreenY / (screenHeight / 2);
					rightMiddleWidth = parseInt($('#rightMiddle').css('width')) * halfScreenX / (screenWidth / 2);
					rightMiddleHeight = parseInt($('#rightMiddle').css('height')) * halfScreenY / (screenHeight / 2);
					
					if (shrinked)
					{
						top = ccenter.y - ((screenHeight - (H + 20) * 2) / screenWidth) * halfScreenX;
						bottom = ccenter.y + ((screenHeight - (H + 20) * 2) / screenWidth) * halfScreenX;
						left = ccenter.x - halfScreenX + ((H + 20) / screenWidth) / (panorama.viewport.getZoom());
						right = ccenter.x + halfScreenX - ((H + 20) / screenWidth) / (panorama.viewport.getZoom());
					}
					var partialCreditX = 0;
					var partialCreditY = 0;
					var partialCreditX2 = 0;
					var partialCreditY2 = 0;
					if (T[i] != 0)
					{
						partialCreditY = (annoSmallH + annoHeight / 2) * halfScreenY / (screenHeight / 2);
					}
					else
					{
						partialCreditY = (annoSmallH / 2) * halfScreenY / (screenHeight / 2);
					}
					if (L[i] != 0)
					{
						partialCreditX = (annoSmallW + annoWidth / 2) * halfScreenX / (screenWidth / 2);
					}
					else
					{
						partialCreditX = (annoSmallW / 2) * halfScreenX / (screenWidth / 2);
					}
					partialCreditX2 = annoWidth / 2 * halfScreenX / (screenWidth / 2);
					partialCreditY2 = annoHeight / 2 * halfScreenY / (screenHeight / 2);
					var annoCoord = annotations[i];
					if (!(annoCoord.x + partialCreditX2 > right || annoCoord.x - partialCreditX2 < left  || annoCoord.y + partialCreditY2 > bottom || annoCoord.y - partialCreditY2 < top))
					{
						hoverLock[i] = false;
					}
					else 
					{
						hoverLock[i] = true;
					}
					if ((annoCoord.y - partialCreditY < top && annoCoord.x - partialCreditX < left || annoCoord.y - partialCreditY < top + topLeftCornerHeight && annoCoord.x - partialCreditX < left + topLeftCornerWidth) && !hoverLock[i])
					{
						endString = startString.concat(ymp, opx, opx, xmp2);
						endString3 = startString.concat(ymp, opx, opx, xmp2);
						endString4 = startString.concat(ymp, opx, opx, xmp2);
						endString2 = startString.concat(yUpLeft, opx, opx, xUpLeft);
						arrowString = arrowColorUpLeft;
						annoBorder = annoArrowSize / 2;
						if (param != 3 && activeAnnotation != i)
						{
							T[i] = yMarginPositive;
							R[i] = 0;
							B[i] = 0;
							L[i] = xMarginPositive2;
						}
						else if (activeAnnotation == i)
						{
							T2 = yMarginPositive;
							L2 = xMarginPositive2;
						}
					}
					else if ((annoCoord.x + partialCreditX > right && annoCoord.y + partialCreditY > bottom || annoCoord.x + partialCreditX > right - bottomLeftCornerWidth && annoCoord.y + partialCreditY > bottom - bottomLeftCornerHeight) && !hoverLock[i])
					{
						endString = startString.concat(ymn, opx, opx, xmn2);
						endString3 = startString.concat(ymn, opx, opx, xmn2);
						endString4 = startString.concat(ymn, opx, opx, xmn2);
						endString2 = startString.concat(yDownRight, opx, opx, xDownRight);
						arrowString = arrowColorDownRight;
						annoBorder = annoArrowSize / 2;
						if (param != 3 && activeAnnotation != i)
						{
							T[i] = yMarginNegative;
							R[i] = 0;
							B[i] = 0;
							L[i] = xMarginNegative2;
						}
						else if (activeAnnotation == i)
						{
							T2 = yMarginNegative;
							L2 = xMarginNegative2;
						}
					}
					else if ((annoCoord.y - partialCreditY < top && annoCoord.x + partialCreditX > right || annoCoord.y - partialCreditY < top + topRightCornerHeight && annoCoord.x + partialCreditX > right - topRightCornerHeight) && !hoverLock[i])
					{
						endString = startString.concat(ymp, opx, opx, xmn2);
						endString3 = startString.concat(ymp, opx, opx, xmn2);
						endString4 = startString.concat(ymp, opx, opx, xmn2);
						endString2 = startString.concat(yUpRight, opx, opx, xUpRight);
						arrowString = arrowColorUpRight;
						annoBorder = annoArrowSize / 2;
						if (param != 3 && activeAnnotation != i)
						{
							T[i] = yMarginPositive;
							R[i] = 0;
							B[i] = 0;
							L[i] = xMarginNegative2;
						}
						else if (activeAnnotation == i)
						{
							T2 = yMarginPositive;
							L2 = xMarginNegative2;
						}
					}
					else if ((annoCoord.y + partialCreditY > bottom && annoCoord.x - partialCreditX < left || annoCoord.y + partialCreditY > bottom - bottomLeftCornerHeight && annoCoord.x - partialCreditX < left + bottomLeftCornerWidth) && !hoverLock[i])
					{
						endString = startString.concat(ymn, opx, opx, xmp2);
						endString3 = startString.concat(ymn, opx, opx, xmp2);
						endString4 = startString.concat(ymn, opx, opx, xmp2);
						endString2 = startString.concat(yDownLeft, opx, opx, xDownLeft);
						arrowString = arrowColorDownLeft;
						annoBorder = annoArrowSize / 2;
						if (param != 3 && activeAnnotation != i)
						{
							T[i] = yMarginNegative;
							R[i] = 0;
							B[i] = 0;
							L[i] = xMarginPositive2;
						}
						else if (activeAnnotation == i)
						{
							T2 = yMarginNegative;
							L2 = xMarginPositive2;
						}
					}
					else if ((annoCoord.y - partialCreditY >= top && annoCoord.y + partialCreditY <= (bottom - top) / 2 - leftMiddleHeight / 2 && annoCoord.x - partialCreditX < left || annoCoord.y - partialCreditY >= (bottom - top) / 2 + leftMiddleHeight / 2 && annoCoord.y + partialCreditY <= bottom && annoCoord.x - partialCreditX < left || annoCoord.y - partialCreditY >= top && annoCoord.y + partialCreditY <= bottom && annoCoord.x - partialCreditX < left + leftMiddleWidth) && !hoverLock[i])
					{
						endString = startString.concat(opx, opx, opx, xmp);
						endString3 = startString.concat(opx, opx, opx, xmp);
						endString4 = startString.concat(opx, opx, opx, xmp);
						endString2 = startString.concat(yLeft, opx, opx, xLeft);
						arrowString = arrowColorLeft;
						annoBorder = annoArrowSize;
						if (param != 3 && activeAnnotation != i)
						{
							T[i] = 0;
							R[i] = 0;
							B[i] = 0;
							L[i] = xMarginPositive;
						}
						else if (activeAnnotation == i)
						{
							T2 = 0;
							L2 = xMarginPositive;
						}
					}
					else if ((annoCoord.x - partialCreditX >= left && annoCoord.x + partialCreditX <= right && annoCoord.y + partialCreditY > bottom - bottomMiddleHeight || annoCoord.x - partialCreditX >= left && annoCoord.x + partialCreditX <= (left + right) / 2 - bottomMiddleWidth / 2 && annoCoord.y + partialCreditY > bottom || annoCoord.x - partialCreditX >= (left + right) / 2 + bottomMiddleWidth / 2 && annoCoord.x + partialCreditX <= right && annoCoord.y + partialCreditY > bottom) && !hoverLock[i])
					{
						endString = startString.concat(ymn, opx, opx, opx);
						endString3 = startString.concat(ymn, opx, opx, opx);
						endString4 = startString.concat(ymn, opx, opx, opx);
						endString2 = startString.concat(yDown, opx, opx, xDown);
						arrowString = arrowColorDown;
						annoBorder = annoArrowSize;
						if (param != 3 && activeAnnotation != i)
						{
							T[i] = yMarginNegative;
							R[i] = 0;
							B[i] = 0;
							L[i] = 0;
						}
						else if (activeAnnotation == i)
						{
							T2 = yMarginNegative;
							L2 = 0;
						}
					}
					else if ((annoCoord.y - partialCreditY >= top && annoCoord.y + partialCreditY <= bottom && annoCoord.x + partialCreditX > right - rightMiddleWidth || annoCoord.y - partialCreditY >= top && annoCoord.y + partialCreditY <= (top + bottom) / 2 - rightMiddleHeight / 2 && annoCoord.x + partialCreditX > right || annoCoord.y - partialCreditY >= (top + bottom) / 2 + rightMiddleHeight / 2 && annoCoord.y + partialCreditY <= bottom && annoCoord.x + partialCreditX > right) && !hoverLock[i])
					{
						endString = startString.concat(opx, opx, opx, xmn);
						endString3 = startString.concat(opx, opx, opx, xmn);
						endString4 = startString.concat(opx, opx, opx, xmn);
						endString2 = startString.concat(yRight, opx, opx, xRight);
						arrowString = arrowColorRight;
						annoBorder = annoArrowSize;
						if (param != 3 && activeAnnotation != i)
						{
							T[i] = 0;
							R[i] = 0;
							B[i] = 0;
							L[i] = xMarginNegative;
						}
						else if (activeAnnotation == i)
						{
							T2 = 0;
							L2 = xMarginNegative;
						}
					}
					else if ((annoCoord.x - partialCreditX >= left && annoCoord.x + partialCreditX <= right && annoCoord.y - partialCreditY < top + topMiddleHeight || annoCoord.x - partialCreditX >= left && annoCoord.x + partialCreditX <= (left + right) / 2 - topMiddleWidth / 2 && annoCoord.y - partialCreditY < top || annoCoord.x - partialCreditX >= (left + right) / 2 + topMiddleWidth / 2 && annoCoord.x + partialCreditX <= right && annoCoord.y - partialCreditY < top) && !hoverLock[i])
					{
						endString = startString.concat(ymp, opx, opx, opx);
						endString3 = startString.concat(ymp, opx, opx, opx);
						endString4 = startString.concat(ymp, opx, opx, opx);
						endString2 = startString.concat(yUp, opx, opx, xUp);
						arrowString = arrowColorUp;
						annoBorder = annoArrowSize;
						if (param != 3 && activeAnnotation != i)
						{
							T[i] = yMarginPositive;
							R[i] = 0;
							B[i] = 0;
							L[i] = 0;
						}
						else if (activeAnnotation == i)
						{
							T2 = yMarginPositive;
							L2 = 0;
						}
					}
					else
					{
						if (i % 8 == 0)
						{	
							endString = startString.concat(ymn, opx, opx, opx);	
							endString3 = startString.concat(ymn, opx, opx, opx);
							endString4 = startString.concat(ymn, opx, opx, opx);	
							endString2 = startString.concat(yDown, opx, opx, xDown);
							arrowString = arrowColorDown;
							annoBorder = annoArrowSize;
							if (param != 3 && activeAnnotation != i)
							{
								T[i] = yMarginNegative;
								R[i] = 0;
								B[i] = 0;
								L[i] = 0;
							}
							else if (activeAnnotation == i)
							{
								T2 = yMarginNegative;
								L2 = 0;
							}
						}	
						else if (i % 8 == 1)
						{
							endString = startString.concat(ymp, opx, opx, opx);
							endString3 = startString.concat(ymp, opx, opx, opx);
							endString4 = startString.concat(ymp, opx, opx, opx);
							endString2 = startString.concat(yUp, opx, opx, xUp);
							arrowString = arrowColorUp;
							annoBorder = annoArrowSize;
							if (param != 3 && activeAnnotation != i)
							{
								T[i] = yMarginPositive;
								R[i] = 0;
								B[i] = 0;
								L[i] = 0;
							}
							else if (activeAnnotation == i)
							{
								T2 = yMarginPositive;
								L2 = 0;
							}
						}
						else if (i % 8 == 2)
						{
							endString = startString.concat(opx, opx, opx, xmp);
							endString3 = startString.concat(opx, opx, opx, xmp);
							endString4 = startString.concat(opx, opx, opx, xmp);
							endString2 = startString.concat(yLeft, opx, opx, xLeft);
							arrowString = arrowColorLeft;
							annoBorder = annoArrowSize;
							if (param != 3 && activeAnnotation != i)
							{
								T[i] = 0;
								R[i] = 0;
								B[i] = 0;
								L[i] = xMarginPositive;
							}
							else if (activeAnnotation == i)
							{
								T2 = 0;
								L2 = xMarginPositive;
							}
						}
						else if (i % 8 == 3)
						{
							endString = startString.concat(opx, opx, opx, xmn);
							endString3 = startString.concat(opx, opx, opx, xmn);
							endString4 = startString.concat(opx, opx, opx, xmn);
							endString2 = startString.concat(yRight, opx, opx, xRight);
							arrowString = arrowColorRight;
							annoBorder = annoArrowSize;
							if (param != 3 && activeAnnotation != i)
							{
								T[i] = 0;
								R[i] = 0;
								B[i] = 0;
								L[i] = xMarginNegative;
							}
							else if (activeAnnotation == i)
							{
								T2 = 0;
								L2 = xMarginNegative;
							}
						}
						else if (i % 8 == 4)
						{
							endString = startString.concat(ymn, opx, opx, xmp2);
							endString3 = startString.concat(ymn, opx, opx, xmp2);
							endString4 = startString.concat(ymn, opx, opx, xmp2);
							endString2 = startString.concat(yDownLeft, opx, opx, xDownLeft);
							arrowString = arrowColorDownLeft;
							annoBorder = annoArrowSize / 2;
							if (param != 3 && activeAnnotation != i)
							{
								T[i] = yMarginNegative;
								R[i] = 0;
								B[i] = 0;
								L[i] = xMarginPositive2;
							}
							else if (activeAnnotation == i)
							{
								T2 = yMarginNegative;
								L2 = xMarginPositive2;
							}
						} 
						else if (i % 8 == 5)
						{	
							endString = startString.concat(ymn, opx, opx, xmn2);
							endString3 = startString.concat(ymn, opx, opx, xmn2);
							endString4 = startString.concat(ymn, opx, opx, xmn2);
							endString2 = startString.concat(yDownRight, opx, opx, xDownRight);
							arrowString = arrowColorDownRight;
							annoBorder = annoArrowSize / 2;
							if (param != 3 && activeAnnotation != i)
							{
								T[i] = yMarginNegative;
								R[i] = 0;
								B[i] = 0;
								L[i] = xMarginNegative2;
							}
							else if (activeAnnotation == i)
							{
								T2 = yMarginNegative;
								L2 = xMarginNegative2;
							}
						}
						else if (i % 8 == 6)
						{	
							endString = startString.concat(ymp, opx, opx, xmp2);
							endString3 = startString.concat(ymp, opx, opx, xmp2);
							endString4 = startString.concat(ymp, opx, opx, xmp2);
							endString2 = startString.concat(yUpLeft, opx, opx, xUpLeft);
							arrowString = arrowColorUpLeft;
							annoBorder = annoArrowSize / 2;
							if (param != 3 && activeAnnotation != i)
							{
								T[i] = yMarginPositive;
								R[i] = 0;
								B[i] = 0;
								L[i] = xMarginPositive2;
							}
							else if (activeAnnotation == i)
							{
								T2 = yMarginPositive;
								L2 = xMarginPositive2;
							}
						}
						else
						{
							endString = startString.concat(ymp, opx, opx, xmn2);
							endString3 = startString.concat(ymp, opx, opx, xmn2);
							endString4 = startString.concat(ymp, opx, opx, xmn2);
							endString2 = startString.concat(yUpRight, opx, opx, xUpRight);
							arrowString = arrowColorUpRight;
							annoBorder = annoArrowSize / 2;
							if (param != 3)
							{
								T[i] = yMarginPositive;
								R[i] = 0;
								B[i] = 0;
								L[i] = xMarginNegative2;
							}
							else if (activeAnnotation == i)
							{
								T2 = yMarginPositive;
								L2 = xMarginNegative2;
							}
						}
					}
					if (activeAnnotation != i)
					{
						$(callerString).css('margin', endString);
						$(callerString2).css('margin', endString2);
						$(callerString3).css('margin', endString3);
						$(callerString4).css('margin', endString4);
						annoBorder = annoBorder.toString();
						annoBorder = annoBorder.concat("px solid");
						$(callerString2).css('border', annoBorder);
						$(callerString2).css('border-color', arrowString);
					}
					if (param == 3 && activeAnnotation == i)
					{
						if (T[i] != T2 || L[i] != L2 || (annoCoord.x + partialCreditX2 > right || annoCoord.x - partialCreditX2 < left  || annoCoord.y + partialCreditY2 > bottom || annoCoord.y - partialCreditY2 < top))
						{
							var restoratio2 = false;
							var t = T[i];
							var l = L[i];
							if (l < 0 && t == 0)
							{
								partialCreditY = (annoSmallH / 2) * halfScreenY / (screenHeight / 2);
								partialCreditX = (annoSmallW + annoWidth / 2) * halfScreenX / (screenWidth / 2);
								if ((annoCoord.y - partialCreditY) < top || (annoCoord.y + partialCreditY) > bottom || (annoCoord.x - partialCreditX) < left)
								{
									restoratio2 = true;
								}
							}
							else if (l > 0 && t == 0)
							{
								partialCreditY = (annoSmallH / 2) * halfScreenY / (screenHeight / 2);
								partialCreditX = (annoSmallW + annoWidth / 2) * halfScreenX / (screenWidth / 2);
								if ((annoCoord.y - partialCreditY) < top || (annoCoord.y + partialCreditY) > bottom || (annoCoord.x + partialCreditX) > right)
								{
									restoratio2 = true;
								}
							}
							else if (l == 0 && t < 0)
							{
								partialCreditY = (annoSmallH + annoHeight / 2) * halfScreenY / (screenHeight / 2);
								partialCreditX = (annoSmallW / 2) * halfScreenX / (screenWidth / 2);
								if ((annoCoord.y - partialCreditY) < top || (annoCoord.x + partialCreditX) > right || (annoCoord.x - partialCreditX) < left)
								{
									restoratio2 = true;
								}
							}
							else if (l == 0 && t > 0)
							{
								partialCreditY = (annoSmallH + annoHeight / 2) * halfScreenY / (screenHeight / 2);
								partialCreditX = (annoSmallW / 2) * halfScreenX / (screenWidth / 2);	
								if ((annoCoord.y + partialCreditY) > bottom || (annoCoord.x + partialCreditX) > right || (annoCoord.x - partialCreditX) < left)
								{
									restoratio2 = true;
								}
							}
							else if (l < 0 && t < 0)
							{
								partialCreditY = (annoSmallH + annoHeight / 2) * halfScreenY / (screenHeight / 2);
								partialCreditX = (annoSmallW + annoWidth / 2) * halfScreenX / (screenWidth / 2);
								if ((annoCoord.y - partialCreditY) < top || (annoCoord.x - partialCreditX) < left)
								{
									restoratio2 = true;
								}
							}
							else if (l < 0 && t > 0)
							{
								partialCreditY = (annoSmallH + annoHeight / 2) * halfScreenY / (screenHeight / 2);
								partialCreditX = (annoSmallW + annoWidth / 2) * halfScreenX / (screenWidth / 2);
								if ((annoCoord.y + partialCreditY) > bottom || (annoCoord.x - partialCreditX) < left)
								{
									restoratio2 = true;
								}
							}
							else if (l > 0 && t < 0)
							{
								partialCreditY = (annoSmallH + annoHeight / 2) * halfScreenY / (screenHeight / 2);
								partialCreditX = (annoSmallW + annoWidth / 2) * halfScreenX / (screenWidth / 2);
								if ((annoCoord.y - partialCreditY) < top || (annoCoord.x + partialCreditX) > right)
								{
									restoratio2 = true;
								}
							}
							else if (l > 0 && t > 0)
							{
								partialCreditY = (annoSmallH + annoHeight / 2) * halfScreenY / (screenHeight / 2);
								partialCreditX = (annoSmallW + annoWidth / 2) * halfScreenX / (screenWidth / 2);
								if ((annoCoord.y + partialCreditY) > bottom || (annoCoord.x + partialCreditX) > right)
								{
									restoratio2 = true;
								}
							}
							if (restoratio2 || (annoCoord.x + partialCreditX2 > right - topRightCornerWidth && annoCoord.y - partialCreditY2 < top + topRightCornerHeight || annoCoord.x + partialCreditX2 > right - topRightCornerWidth && annoCoord.y + partialCreditY2 > bottom - topRightCornerHeight || annoCoord.x - partialCreditX2 < left + bottomLeftCornerWidth && annoCoord.y + partialCreditY2 > bottom - bottomLeftCornerHeight || annoCoord.x - partialCreditX2 < left + topLeftCornerWidth && annoCoord.x - partialCreditX2 < left + bottomLeftCornerWidth && annoCoord.y + partialCreditY2 > bottom - bottomLeftCornerHeight - partialCreditY2 < top + topLeftCornerHeight || annoCoord.y - partialCreditY2 < top || annoCoord.y + partialCreditY2 > bottom || annoCoord.x - partialCreditX2 < left || annoCoord.x + partialCreditX2 > right))
							{
								T[i] = T2;
								L[i] = L2;
								T2 = 0;
								L2 = 0;
								restoratio = true;
								if (annoCoord.x + partialCreditX2 > right - topRightCornerWidth && annoCoord.y - partialCreditY2 < top + topRightCornerHeight || annoCoord.x + partialCreditX2 > right - topRightCornerWidth && annoCoord.y + partialCreditY2 > bottom - topRightCornerHeight || annoCoord.x - partialCreditX2 < left + bottomLeftCornerWidth && annoCoord.y + partialCreditY2 > bottom - bottomLeftCornerHeight || annoCoord.x - partialCreditX2 < left + topLeftCornerWidth && annoCoord.x - partialCreditX2 < left + bottomLeftCornerWidth && annoCoord.y + partialCreditY2 > bottom - bottomLeftCornerHeight - partialCreditY2 < top + topLeftCornerHeight || annoCoord.y - partialCreditY2 < top || annoCoord.y + partialCreditY2 > bottom || annoCoord.x - partialCreditX2 < left || annoCoord.x + partialCreditX2 > right || annoExit[i])
								{
									transfiguratio = false;
									hoverLock[i] = true;
								}
								else 
								{
									transfiguratio = true;
								}
								universalK4 = i;
								if (clickAgain && !justFromClickAgain)
								{
									ExitAnno(annoTracker[universalK4], universalK4);
								}
								else if (clickAgain && justFromClickAgain)
								{
									justFromClickAgain = false;
									window.setTimeout
									(
										function()
										{
											if (activeAnnotation == universalK4)
											{
												ExitAnno(annoTracker[universalK4], universalK4);
											}
										}
										,
										1002
									);
								}
								else if (!clickAgain)
								{
									kaunter = kaunter + 1;
								}
							}
						}
					}
				}
			}
		},
		51
	);
}

function CheckPolygons(x, y)
{
	if (!checkPolygonsLock && !transfiguratio && !checkPolygonsLock2)
	{
		var position = panorama.viewport.pointFromPixel(new Seadragon.Point(x, y), true);
		positionGlobal = position;
		if (initialTime == 0)
		{
			var initTime = new Date();
			initialTime = initTime.getTime();
		}
		var currentRegion = -1;
		var r = 0;
		while (r < regions.length)
		{
			if (smallest[r][0] <= position.x && smallest[r][1] <= position.y && largest[r][0] >= position.x && largest[r][1] >= position.y)
			{
				for (var j = 0; j < tables[r].length; j = j + 1)
				{
					var M = tables[r][j][3];
					var C = tables[r][j][4];
					if 
					(
						M != 1000000000 && C != -1000000000
						&&
						(
							tables[r][j][0].y >= position.y && tables[r][j][1].y <= position.y
							||
							tables[r][j][0].y <= position.y && tables[r][j][1].y >= position.y
						)
						&&
						(tables[r][j][0].x >= position.x || tables[r][j][1].x >= position.x)
					)
					{
						var comparatorMXC = M * position.x + C;
						if (M > 0 && position.y >= comparatorMXC || M < 0 && position.y <= comparatorMXC)
						{
							if (tableLock != j)
							{
								tables[r][j][2] = true;
							}
							else
							{
								tableLock = false;
							}
							if (position.y == tables[r][j][1].y)
							{
								if (j == tables[r].length - 1)
								{
									tables[r][0][2] = false;
								}
								else
								{
									tableLock = j + 1;
								}
							}
						}
						else if (M == 0)
						{
							if (tables[r][j][0].y == position.y && (tables[r][j][0].x >= position.x || tables[r][j][1].x >= position.x))
							{
								if (tableLock != j)
								{
									tables[r][j][2] = true;
								}
								else
								{
									tableLock = false;
								}
								if (j == tables[r].length - 1)
								{
									tables[r][0][2] = false;
								}
								else
								{
									tableLock = j + 1;
								}
							}
						}
					}
					else if 
					(
						M == 1000000000 && C == -1000000000
						&&
						(
							tables[r][j][0].y >= position.y && tables[r][j][1].y <= position.y
							||
							tables[r][j][0].y <= position.y && tables[r][j][1].y >= position.y
						)
						&&
						tables[r][j][0].x >= position.x
					)
					{
						if (tableLock != j)
						{
							tables[r][j][2] = true;
						}
						else
						{
							tableLock = false;
						}
						if (position.y == tables[r][j][1].y)
						{
							if (j == tables[r].length - 1)
							{
								tables[r][0][2] = false;
							}
							else
							{
								tableLock = j + 1;
							}
						}
					}
				}
			}
			var kounthah = 0;
			for (var k = 0; k < tables[r].length; k++)
			{
				if (tables[r][k][2])
				{
					kounthah = kounthah + 1;
				}
			}
			if (kounthah % 2 == 0)
			{
				r = r + 1;
			}
			else
			{
				currentRegion = r;
				break;
			}
		}
		var counter = 0;
		if (currentRegion > -1)
		{
			for (var k = 0; k < tables[currentRegion].length; k++)
			{
				if (tables[currentRegion][k][2])
				{
					counter = counter + 1;
				}
			}
			activeRegionTemp = currentRegion;
			if (activeRegionTemp != activeRegion && activeRegionTemp2 != activeRegionTemp)
			{
				activeRegionTemp2 = activeRegionTemp;
				var curTime = new Date();
				var currentTime = curTime.getTime();
				initialTime5 = currentTime;
			}
			currentRegion = -1;
		}
		for (var i = 0; i < regions.length; i++)
		{
			for (var j = 0; j < regions[i].length; j++)
			{
				tables[i][j][2] = false;
			}
		}
		if (initialX == -1)
		{
			initialX = position.x;
			initialY = position.y;
		}
		if (counter % 2 == 0)
		{
			initialX = -1;
			initialY = -1;
			diffTime = -1;
			regionOutTemp = true;
			regionInTemp = false;
			if (previouslyRegionIn)
			{
				nonActiveRegionTemp = activeRegion;
				window.setTimeout
				(
					function()
					{
						var curTime = new Date();
						var currentTime = curTime.getTime();
						if (!regionInTemp && (currentTime - initialTime3 >= 500))
						{
							regionIn = false;
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
					},
					500
				);
			}
			else
			{	
				nonActiveRegionTemp = -1;
				nonActiveRegion = -1;
				regionIn = false;
				if (!fromOutside)
				{
					var initTime = new Date();
					initialTime = initTime.getTime();
				}
			}
		}
		else
		{
			regionInTemp = true;
			regionOutTemp = false;
			if (!previouslyRegionIn)
			{
				window.setTimeout
				(
					function()
					{
						var distance = 0;
						distance = Math.sqrt(Math.pow((positionGlobal.x - initialX), 2) + Math.pow((positionGlobal.y - initialY), 2));
						var curTime = new Date();
						var currentTime = curTime.getTime();
						if (diffTime == -1)
						{
							diffTime = currentTime - initialTime;
						}
						initialX = -1;
						initialY = -1;
						if ((regionInTemp && !regionOutTemp && diffTime >= 500) || eksepsi)
						{	
							eksepsi = false;
							regionIn = true;
							regionOutTemp = false;
							var curTime = new Date();
							var currentTime = curTime.getTime();
							ActivateRegion();
						}
					},
					500
				);
			}
			else
			{
				if (regionInTemp && !regionOutTemp)
				{
					regionIn = true;
					regionInTemp = true;
					regionOutTemp = false;
					var curTime = new Date();
					ActivateRegion();
				}
			}
		}
		for (var i = 0; i < regions.length; i++)
		{
			for (var j = 0; j < regions[i].length; j++)
			{
				tables[i][j][2] = false;
			}
		}
	}
	pointCheckLock = false;
}

function CreatePointsTable()
{	
	for (var i = 0; i < regions.length; i++)
	{
		tables[i] = Array();
		largest[i] = Array();
		smallest[i] = Array();
		largest[i][0] = 0;
		largest[i][1] = 0;
		smallest[i][0] = 0;
		smallest[i][1] = 0;
		for (var j = 0; j < regions[i].length; j++)
		{
			tables[i][j] = Array();
			tables[i][j][0] = regions[i][j];
			if (j < regions[i].length - 1)
			{
				tables[i][j][1] = regions[i][j+1];
			}
			else
			{
				tables[i][j][1] = regions[i][0];
			}
			tables[i][j][2] = false;
			if (tables[i][j][1].x - tables[i][j][0].x != 0)
			{
				tables[i][j][3] = (tables[i][j][1].y - tables[i][j][0].y) / (tables[i][j][1].x - tables[i][j][0].x);
				tables[i][j][4] = tables[i][j][0].y - tables[i][j][3] * tables[i][j][0].x;
			}
			else
			{
				tables[i][j][3] = 1000000000;
				tables[i][j][4] = -1000000000;
			}
			if (largest[i][0] < regions[i][j].x)
			{
				largest[i][0] = regions[i][j].x;
			}
			if (largest[i][1] < regions[i][j].y)
			{
				largest[i][1] = regions[i][j].y;
			}
			if (smallest[i][0] > regions[i][j].x || smallest[i][0] == 0)
			{
				smallest[i][0] = regions[i][j].x;
			}
			if (smallest[i][1] > regions[i][j].y || smallest[i][1] == 0)
			{
				smallest[i][1] = regions[i][j].y;
			}
		}
	}
}

function GUIKeyAction(param1, param2, param3)
{
	if (param3 == 0)
	{
		$(param1.concat(param2)).css('background-color', '#009999');
		$(param1.concat(param2)).css('color', '#ffffff');
		if (param2 == "1")
		{
			//$('#rightMiddle a').animate({color: '#ffcc33'}, 300);
			$('#rightMiddle a').toggleClass("active");
			//$('#rightMiddle a').css('filter', 'alpha(opacity=100)');
		}
		else if (param2 == "2")
		{
			//$('#leftMiddle a').animate({color: '#ffcc33'}, 300);
			$('#leftMiddle a').toggleClass("active");
			//$('#leftMiddle a').css('filter', 'alpha(opacity=100)');
		}
		else if (param2 == "3")
		{
			//$('#topMiddle a').animate({color: '#ffcc33'}, 300);
			$('#topMiddle a').toggleClass("active");
			//$('#topMiddle a').css('filter', 'alpha(opacity=100)');
		}
		else if (param2 == "4")
		{
			//$('#bottomMiddle a').animate({color: '#ffcc33'}, 300);
			$('#bottomMiddle a').toggleClass("active");
			//$('#bottomMiddle a').css('filter', 'alpha(opacity=100)');
		}
		if (param1 == '#reset')
		{
			$('#resetButton').css('background-color', '#009999');
			$('#resetButton').css('color', '#ffffff');
		}
	}
	else if (param3 == 1)
	{
		$(param1.concat(param2)).css('background-color', '#003399');
		$(param1.concat(param2)).css('color', '#ffffff');
		if (param2 == "1")
		{
			//$('#rightMiddle a').animate({color: '#ffffff'}, 300);
			$('#rightMiddle a').toggleClass("active");
			//$('#rightMiddle a').css('filter', 'alpha(opacity=40)');
		}
		else if (param2 == "2")
		{
			//$('#leftMiddle a').animate({color: '#ffffff'}, 300);
			$('#leftMiddle a').toggleClass("active");
			//$('#leftMiddle a').css('filter', 'alpha(opacity=40)');
		}
		else if (param2 == "3")
		{
			//$('#topMiddle a').animate({color: '#ffffff'}, 300);
			$('#topMiddle a').toggleClass("active");
			//$('#topMiddle a').css('filter', 'alpha(opacity=40)');
		}
		else if (param2 == "4")
		{
			//$('#bottomMiddle a').animate({color: '#ffffff'}, 300);
			$('#bottomMiddle a').toggleClass("active");
			//$('#bottomMiddle a').css('filter', 'alpha(opacity=40)');
		}
		$('#resetButton').css('background-color', '#003399');
		$('#resetButton').css('color', '#ffffff');
	}
	/*
	else if (param3 == 2 && keyDownCode == -1)
	{
		if 
		(
			($(param1.concat(param2)).css('color') == 'FFA500')
			||
			($(param1.concat(param2)).css('color') == 'rgb(255, 165, 0)')
			||
			($(param1.concat(param2)).css('color') == 'ffa500')
			||
			($(param1.concat(param2)).css('color') == '#FFA500')
			||
			($(param1.concat(param2)).css('color') == '#ffa500')
		)
		{
			$(param1.concat(param2)).css('background-color', '#003399');
			$(param1.concat(param2)).css('color', '#ffffff');
			$(selectorString).css('opacity', '0.4');
			$(selectorString).css('filter', 'alpha(opacity=40)');
		}
		var selectorString = "";
		if (param2 == "1")
		{
			selectorString = '#rightMiddle a';
		}
		else if (param2 == "2")
		{
			selectorString = '#leftMiddle a';
		}
		else if (param2 == "3")
		{
			selectorString = '#topMiddle a';
		}
		else if (param2 == "4")
		{
			selectorString = '#bottomMiddle a';
		}
		if (selectorString != '')
		{
			if 
			(
				($(selectorString).css('color') == 'FFCC33')
				||
				($(selectorString).css('color') == 'rgb(255, 204, 51)')
				||
				($(selectorString).css('color') == 'ffcc33')
				||
				($(selectorString).css('color') == '#FFCC33')
				||
				($(selectorString).css('color') == '#ffcc33')
			)
			{
				$(selectorString).animate({color: '#ffffff'}, 300);
				if (param2 == "1")
				{
					$(selectorString).css('text-shadow', '#000 1px 1px, #000 2px 2px, #000 3px 3px');
				}
				else if (param2 == "2")
				{
					$(selectorString).css('text-shadow', '#000 1px 1px, #000 2px 2px, #000 3px 3px');
				}
				else if (param2 == "3")
				{
					$(selectorString).css('text-shadow', '#000 1px -1px, #000 2px -2px, #000 3px -3px');
				}
				else if (param2 == "4")
				{
					$(selectorString).css('text-shadow', '#000 -1px 1px, #000 -2px 2px, #000 -3px 3px');
				}
				$(selectorString).css('margin-top', '0px');
				$(selectorString).css('margin-left', '0px');
				//$(selectorString).toggleClass("active");
				//$(selectorString).css('filter', 'alpha(opacity=40)');
				
			}
		}
	}
	*/
}

function GUIKeyDown(kcode)
{
    str1 = "#nav";
    str2 = "";
    if (keyDownCode == -1)
    {
        keyDownCode = kcode;
        firstThread = true;
    }
    else if (kcode != keyDownCode && keyDownCode2 == -1)
    {
        keyDownCode2 = kcode;
        secondThread = true;
    }
    if (firstThread || secondThread)
    {
    if (firstThread)
    {
    	firstThread = false;
    }
    if (secondThread)
    {
    	secondThread = false;
    }
   	window.setTimeout
    (
    	function()
    	{
    		if (keyDownCode2 == -1 && !sglKeyLock)
    		{
    			sglKeyLock = true;
    			window.setTimeout
    			(
        			function()
        			{
        	    		switch(keyDownCode)
               			{
            				case 65:
            	     			str2 = "2";
            	        		break;
            	    		case 87:
            	    			str2 = "3";
            	        		break;
            	    		case 68:
            	    			str2 = "1";
            	     			break;
            	    		case 83:
            	        		str2 = "4";
            	        		break;
							case 70:
								str2 = "6";
								break;
							case 74:
								str2 = "5";
								break;
							case 82:
								str1 = "#reset";
								str2 = "Button";
							break;
                		}
                		GUIKeyAction(str1, str2, 0);
					}, 
        			50	
				);
			}
			else if (keyDownCode2 != -1 && !dblKeyLock)
    		{
    			dblKeyLock = true;
    			window.setTimeout
    			(
    				function()
    				{
        				if ((keyDownCode == 65 && keyDownCode2 == 87) || (keyDownCode == 87 && keyDownCode2 == 65))
        				{
        					if (sglKeyLock && keyDownCode == 65)
        					{
        						str2 = "3";
           			 			GUIKeyAction(str1, str2, 0);
        					}
        					else if (sglKeyLock && keyDownCode == 87)
        					{
        						str2 = "2";
            					GUIKeyAction(str1, str2, 0);
        					}
        					else
        					{
            					str2 = "2";
            					GUIKeyAction(str1, str2, 0);
            					str2 = "3";
           			 			GUIKeyAction(str1, str2, 0);
           			 		}
        				}
        				else if ((keyDownCode == 87 && keyDownCode2 == 68) || (keyDownCode == 68 && keyDownCode2 == 87))
        				{
            				if (sglKeyLock && keyDownCode == 87)
        					{
        						str2 = "1";
           			 			GUIKeyAction(str1, str2, 0);
        					}
        					else if (sglKeyLock && keyDownCode == 68)
        					{
        						str2 = "3";
            					GUIKeyAction(str1, str2, 0);
        					}
        					else
        					{
            					str2 = "1";
            					GUIKeyAction(str1, str2, 0);
            					str2 = "3";
           			 			GUIKeyAction(str1, str2, 0);
           			 		}
        				}
        				else if ((keyDownCode == 68 && keyDownCode2 == 83) || (keyDownCode == 83 && keyDownCode2 == 68))
        				{
            				if (sglKeyLock && keyDownCode == 68)
        					{
        						str2 = "4";
           			 			GUIKeyAction(str1, str2, 0);
        					}
        					else if (sglKeyLock && keyDownCode == 83)
        					{
        						str2 = "1";
            					GUIKeyAction(str1, str2, 0);
        					}
        					else
        					{
            					str2 = "1";
            					GUIKeyAction(str1, str2, 0);
            					str2 = "4";
           			 			GUIKeyAction(str1, str2, 0);
           			 		}
       	 				}
        				else if ((keyDownCode == 65 && keyDownCode2 == 83) || (keyDownCode == 83 && keyDownCode2 == 65))
        				{
            				if (sglKeyLock && keyDownCode == 65)
        					{
        						str2 = "4";
           			 			GUIKeyAction(str1, str2, 0);
        					}
        					else if (sglKeyLock && keyDownCode == 83)
        					{
        						str2 = "2";
            					GUIKeyAction(str1, str2, 0);
        					}
        					else
        					{
            					str2 = "2";
            					GUIKeyAction(str1, str2, 0);
            					str2 = "4";
           			 			GUIKeyAction(str1, str2, 0);
           			 		}
        				}
        			},
        			50
    			);
    		}
		},
		50
   	);
   	}
}

function GUIKeyUp(kcode)
{
	str1 = "#nav";
	str2 = "";
	switch(kcode)
    {
        case 65:
            str2 = "2";
            break;
        case 87:
            str2 = "3";
            break;
        case 68:
            str2 = "1";
            break;
        case 83:
            str2 = "4";
            break;
		case 70:
			str2 = "6";
			break;
		case 74:
			str2 = "5";
			break;
		case 82:
			str1 = "#reset";
			str2 = "Button";
			break;
    }
    if (keyDownCode2 != -1)
    {
    	window.setTimeout
    	(
    		function()
    		{
    			if (keyDownCode2 == kcode)
    			{
    				keyDownCode2 = -1;
    			}
    			else if (keyDownCode == kcode)
    			{
    				keyDownCode = keyDownCode2;
    				keyDownCode2 = -1;
    			}
    			dblKeyLock = false;
    			secondThread = true;
    		},
    		551
    	);
    }
    else
    {
    	window.setTimeout
    	(
    		function()
    		{
    			keyDownCode = -1;
    			sglKeyLock = false;
    			firstThread = true;
    		},
    		551
    	);
    }
    if (keyCodeList.length == 1)
    {
    	window.setTimeout
    	(
    		function()
    		{
    			GUIKeyAction(str1, str2, 1);
    		},
    		200
    	);
    }
    else
    {
    	GUIKeyAction(str1, str2, 1);
    }	
	/*
    str3 = "";
    str4 = "";
    switch(kcode)
    {   
        case 65:
            str2 = "2";
            str3 = "7";
            str4 = "10";
            break;
        case 87:
            str2 = "3";
            str3 = "7";
            str4 = "8";
            break;
        case 68:
            str2 = "1";
            str3 = "8";
            str4 = "9";
            break;
        case 83:
            str2 = "4";
            str3 = "9";
            str4 = "10";
            break;
		case 70:
			str2 = "6";
			break;
		case 74:
			str2 = "5";
			break;
		case 82:
			str1 = "#reset";
			str2 = "Button";
			break;
        default:
            break;
    }
	window.setTimeout
	(
		function()
		{
			if (keyCodeList.length > 1 || kcode == 70 || kcode == 74 || kcode == 82)
			{	
				window.setTimeout
				(
					function()
					{
						GUIKeyAction(str1, str2, 1);
					},
					200
				);	
			}
			else if (keyCodeList.length < 1)
			{
			}
			else if (keyCodeList.length < 1 || !(kcode == 70 || kcode == 74 || kcode == 82))
			{
				alert('b');
				keyDownCode = -1;
				window.setTimeout
				(
					function()
					{
						GUIKeyAction(str1, str2, 1);
						GUIKeyAction(str1, str3, 2);
						GUIKeyAction(str1, str4, 2);
					},
					200
				);
			}
		},
		50
	);
	*/
}

function getParameterByName(name) 
{
	/* http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values */
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getGigapanInfo(gigapanId)
{
	$.ajax
	(
		{
        	url: 'http://api.gigapan.org/beta/gigapans/' + gigapanId + '.json',   
        	success: 
        		function(gigapanJSON)
        		{
        	       if (gigapanJSON && gigapanJSON['id'] )
        	       {
        	       		var ggpn = gigapanJSON;
					  	document.title = ggpn['name'];
					  	gigapanPW = parseInt(ggpn['width']);
					  	gigapanPH = parseInt(ggpn['height']);
					  	panoramaWidth = parseInt(ggpn['width']);
						panoramaHeight = parseInt(ggpn['height']);
				   }
        	    }
    	}
    );
}

function Init0()
{
	var initTime = new Date();
	initialTime = initTime.getTime();
	initialTime0 = initTime.getTime();
	$('[id*=nav]').css('height', parseInt($('[id*=nav]').css('width')) - parseInt($('#resetButton').css('padding-top')));
	$('#resetButton').css('height', parseInt($('#resetButton').css('width')) - parseInt($('#resetButton').css('padding-top')));
	//currentPanorama = "xml/icc1.xml";
	//loadXMLDoc(currentPanorama);
    panorama = new Seadragon.Viewer("panorama");
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
    xmllink = new JKL.ParseXML(xmlpath);
    xmldata = xmllink.parse();
    if (typeof xmldata.system.image.gigapanid == 'undefined' || xmldata.system.image.gigapanid == ' ')
    {
    	document.title = xmldata.system.title;
		panoramaWidth = parseInt(xmldata.system.image.width);
		panoramaHeight = parseInt(xmldata.system.image.height);
    }
    else
    {
   		getGigapanInfo(xmldata.system.image.gigapanid);
   		window.setTimeout
   		(
   			function()
   			{
   				imageWidth = gigapanPW;
   				panoramaWidth = gigapanPW;
   				panoramaHeight = gigapanPH;
   				maxDegree = MaxDegree(imageWidth/viewportWidth, 1.07385, 0);
   				window.setTimeout
   				(
   					function()
   					{
   						window.setTimeout
						(
							function()
							{
								var zoomHeight = panoramaHeight / screenHeight;
								var zoomWidth = panoramaWidth / screenWidth;
								var zratio = 1;
								if (zoomHeight > zoomWidth)
								{
									zratio = zoomHeight / zoomWidth;
									if (panorama.viewport.getZoom() == 1)
									{
										panorama.viewport.zoomBy(zoomHeight / zoomWidth);
									}
									UpdatePanoramaNavigator();
									UpdateZoomBar(1);
								}
								else if (zoomHeight < zoomWidth)
								{
									zratio = zoomWidth / zoomHeight;
									if (panorama.viewport.getZoom() == 1)
									{
										panorama.viewport.zoomBy(zoomWidth / zoomHeight);
									}
									UpdatePanoramaNavigator();
									UpdateZoomBar(1);
								}
								//initialZoom = panorama.viewport.getZoom();
								initialZoom = zratio;
								firstZoom = initialZoom;
								AddPoints();
								AddAnnotations();
								CreatePointsTable();
								window.setTimeout
								(
									function()
									{
									},
									200
								);
							},
							50
						);
   						UpdatePanoramaNavigator();
   						UpdateZoomBar(1);
   					},
   					251
   				);
   			},
   			3051
   		);
    }
    Init();
}

function Init() 
{	
    if (typeof xmldata.system.showcoordinates != 'undefined' && xmldata.system.showcoordinates == 'N')
    {
    	$('#zoomtitle').hide();
    }
    
	window.setTimeout
	(
		function()
		{
			if (typeof xmldata.system.image.gigapanid == 'undefined' || xmldata.system.image.gigapanid == ' ')
    		{
				panorama.openDzi
				( 
					{
						// originally: http://static.seadragon.com/content/misc/carina-nebula.dzi
						url: xmldata.system.image.url,
						width: parseInt(panoramaWidth),
						height: parseInt(panoramaHeight),
						tileSize: parseInt(xmldata.system.image.tilesize),
						tileOverlap: parseInt(xmldata.system.image.tileoverlap),
						tileFormat:xmldata.system.image.tileformat
					}
				);
			}
			else
			{
				panorama.addEventListener("open", afterCreation);
         		Seadragon.Config.imageLoaderLimit = 6; // max number of concurrent image downloads
         		loadGigapan(xmldata.system.image.gigapanid, panorama);
			}
			//panorama.addEventListener("animationstart", onBeforeAnimation);
			//panorama.addEventListener("animationfinish", onAfterAnimation);
			imageWidth = parseInt(panoramaWidth);
			maxDegree = MaxDegree(imageWidth/viewportWidth, 1.07385, 0);
			//zoomSliderOriginalPosition = parseInt($('#zoomslider').css('top'));
			//zoomSliderBarWidth = parseInt($('#zoombar').css('width'));
			//zoomSliderWidth = parseInt($('#zoomslider').css('width'));
			
			/* http://stackoverflow.com/questions/4211909/disable-dragging-an-image-from-an-html-page */
			document.getElementById('zoomslider').ondragstart = function() { return false; };
			
			/*
			var ztl = $('#navigation').offset().left;
			var ztlString = ztl.toString();
			var ZTLS = ztlString.concat('px');
			$('#zoomtitle').css('left', 
			*/
			
			var zoomBarLeft = $('#zoombar').offset().left;
			var zbfl = $('#zoombar').offset().left;
			var zbflString = zbfl.toString();
			var ZBFL = zbflString.concat('px');
			$('#zoombar-fake').css('left', ZBFL);
			$('#zoombar-fake-2').css('left', ZBFL);
			
			var zbft = $('#zoombar').offset().top;
			var zbftString = zbft.toString();
			var ZBFT = zbftString.concat('px');
			$('#zoombar-fake').css('top', ZBFT);
			$('#zoombar-fake-2').css('top', ZBFT);
			
			var zoomBarWidth = $('#zoombar').width();
			var zoomSliderWidth = $('#zoomslider').width();
			var zoomLevelWidth = $('#zoomlevel').width();
			var zoomSliderHeight = $('#zoomslider').height();
			var zoomLevelHeight = $('#zoomlevel').height();
			var zoomBarBorderWidth = parseInt($('#zoombar').css('border-left-width'));
			var zoomBarBorderWidth2 = parseInt($('#zoombar').css('border-top-width'));
			var sliderLeft = zoomBarLeft + zoomBarBorderWidth - (zoomSliderWidth - zoomBarWidth) / 2;
			var sliderLeftString = sliderLeft.toString();
			var SLIDERLEFT = sliderLeftString.concat('px');
			
			var levelLeft = zoomBarLeft + zoomBarBorderWidth - (zoomLevelWidth - zoomBarWidth) / 2;
			var levelLeftString = levelLeft.toString();
			var LEVELLEFT = levelLeftString.concat('px');
			
			$('#zoomslider').css('left', SLIDERLEFT);
			$('#zoomlevel').css('left', LEVELLEFT);
			var zoomBarTop = $('#zoombar').offset().top;
			var zoomBarHeight = $('#zoombar').height();
			
			var zoomSliderTop = zoomBarTop + zoomBarHeight - zoomSliderHeight / 2 + zoomBarBorderWidth2;
			var zoomSliderTopString = zoomSliderTop.toString();
			var SLIDERTOP = zoomSliderTopString.concat('px');
			$('#zoomslider').css('top', SLIDERTOP);
			
			var zoomLevelTop = zoomBarTop + zoomBarHeight - zoomLevelHeight + zoomBarBorderWidth2;
			var zoomLevelTopString = zoomLevelTop.toString();
			var LEVELTOP = zoomLevelTopString.concat('px');
			$('#zoomlevel').css('top', LEVELTOP);
			
			panoramaWidth = parseInt(panoramaWidth);
			panoramaHeight = parseInt(panoramaHeight);
			panoramaNavigator.addEventListener("open", AddOverlays);
			AddEvents();
		},
		100
	);
	var navWidth = $('#panoramaNavigator').css('width');
	screenHeight = document.documentElement.clientHeight;
	screenWidth = document.documentElement.clientWidth;
	$('#panoramaNavigator').css('height', parseInt(navWidth) * parseInt(screenHeight) / parseInt(screenWidth));
	panoramaNavigator = new Seadragon.Viewer("panoramaNavigator");
	window.setTimeout
	(
		function()
		{
			$('#topRightCorner').css('left', screenWidth - $('#topRightCorner').width() - 30);
			$('#topRightCorner2').css('left', screenWidth - $('#topRightCorner').width());
			$('#topRightCorner2').css('top', $('#topRightCorner').css('height'));
			$('#bottomLeftCorner').css('top', screenHeight - $('#bottomLeftCorner').height());
						
			var brct = screenHeight - $('#panoramaNavigator').height() - 60;
			var brctString = brct.toString();
			var BRCT = brctString.concat('px');
			$('#bottomLeftCorner').css('top', BRCT);
			
			var brcl = 65;
			var brclString = brcl.toString();
			var BRCL = brclString.concat('px');			
			$('#bottomLeftCorner').css('left', BRCL);
			
			brct = screenHeight - $('#bottomRightCorner').height() - 60;
			brctString = brct.toString();
			BRCT = brctString.concat('px');
			$('#bottomRightCorner').css('top', BRCT);
			
			brcl = screenWidth - $('#bottomRightCorner').width() - 60;
			brclString = brcl.toString();
			BRCL = brclString.concat('px');
			$('#bottomRightCorner').css('left', BRCL);
			
			var brct2 = brct - 20;
			var brct2String = brct2.toString();
			var BRCT2 = brct2String.concat('px');
			
			var brcl2 = brcl + 30;
			var brcl2String = brcl2.toString();
			var BRCL2 = brcl2String.concat('px');
			
			$('#nearest-spot').css('top', BRCT2);
			$('#nearest-spot').css('left', BRCL2);
			
			var nvgcw = $('#panoramaNavigator').width() + 50;
			var nvgcwString = nvgcw.toString();
			var NVGCW = nvgcwString.concat("px");
			
			var nvgch = $('#panoramaNavigator').height() + 50;
			var nvgchString = nvgch.toString();
			var NVGCH = nvgchString.concat("px");
			
			$('#nvg-container').css('width', NVGCW);
			$('#nvg-container').css('height', NVGCH);
			
			var nvgcfw = nvgcw - 14;
			var nvgcfwString = nvgcfw.toString();
			var NVGCFW = nvgcfwString.concat('px');
			
			var nvgcfh = nvgch - 14 - 1;
			var nvgcfhString = nvgcfh.toString();
			var NVGCFH = nvgcfhString.concat('px');
			
			$('#nvg-container-frame').css('width', NVGCFW);
			$('#nvg-container-frame').css('height', NVGCFH);
			
			var nvgcfb1w = nvgcw - 14;
			var nvgcfb1wString = nvgcfb1w.toString();
			var NVGCFB1W = nvgcfb1wString.concat('px');
			$('#nvg-container-frame-bottom-1').css('width', NVGCFB1W);

			var nvgcfb2w = nvgcw - 14 - nvgcfb1w - parseInt($('#nvg-tooltip').css('border-top-width')) * 2 - 2;
			var nvgcfb2wString = nvgcfb2w.toString();
			var NVGCFB2W = nvgcfb2wString.concat('px');
			$('#nvg-container-frame-bottom-2').css('width', NVGCFB2W);			
			/* START CHANGES */
			var nvgcl = 40;
			var nvgclString = nvgcl.toString();
			var NVGCL = nvgclString.concat("px");
			$('#nvg-container').css('left', NVGCL);
			
			var nvgcfl = nvgcl + 7;
			var nvgcflString = nvgcfl.toString();
			var NVGCFL = nvgcflString.concat("px");
			$('#nvg-container-frame').css('left', NVGCFL);
			$('#nvg-container-frame-bottom-2').css('left', NVGCFL);
			
			var otl = nvgcl + 7 + 7 + 22;
			var otlString = otl.toString();
			var OTL = otlString.concat("px");
			$('#nvg-overview-title').css('left', OTL);
			
				//	nvgcl + 7;
			var nfgcfb1l = nvgcl + 7;
			var nfgcfb1lString = nfgcfb1l.toString();
			var NFGCFB1L = nfgcfb1lString.concat("px");
			$('#nvg-container-frame-bottom-1').css('left', NFGCFB1L);
			
			var nvgct = screenHeight - $('#nvg-container').height() - 35;
			var nvgctString = nvgct.toString();
			var NVGCT = nvgctString.concat("px");
			$('#nvg-container').css('top', NVGCT);
			
			var nvgcft = nvgct + 7;
			var nvgcftString = nvgcft.toString();
			var NVGCFT = nvgcftString.concat("px");
			$('#nvg-container-frame').css('top', NVGCFT);
			
			var ott = nvgct + 7 + 7 + 20;
			var ottString = ott.toString();
			var OTT = ottString.concat("px");
			$('#nvg-overview-title').css('top', OTT);

			var nvgcfb1t = nvgct + 7 + $('#nvg-container-frame').height();
			var nvgcfb1tString = nvgcfb1t.toString();
			var NVGCFB1T = nvgcfb1tString.concat("px");
			$('#nvg-container-frame-bottom-1').css('top', NVGCFB1T);
			$('#nvg-container-frame-bottom-2').css('top', NVGCFB1T);				
			
			var nvgtt = screenHeight - parseInt($('#nvg-tooltip').css('border-top-width')) - 15;
			var nvgttString = nvgtt.toString();
			var NVGTT = nvgttString.concat("px");
			$('#nvg-tooltip').css('top', NVGTT);
			
			var nvgtft = nvgtt - 7 * 3 - 1;
			var nvgtftString = nvgtft.toString();
			var NVGTFT = nvgtftString.concat("px");
			$('#nvg-tooltip-frame').css('top', NVGTFT);
			
			var nvgtl = 60;
			var nvgtlString = nvgtl.toString();
			var NVGTL = nvgtlString.concat("px");
			$('#nvg-tooltip').css('left', NVGTL);

			var nvgtfl = nvgtl + 5;
			var nvgtflString = nvgtfl.toString();
			var NVGTFL = nvgtflString.concat("px");
			$('#nvg-tooltip-frame').css('left', NVGTFL);
			
			var nt = $('#zoombar-fake-2').offset().top;
			var ntString = nt.toString();
			var NT = ntString.concat("px");
			$('#navigation').css('top', NT);
			
			var chscreenh = screenHeight - (CalculateThumbnailHeight() + 45) * 2;
			var chscreenhString = chscreenh.toString();
			var CHSCREENH = chscreenhString.concat('px');
			
			var chscreenw = screenWidth - (CalculateThumbnailHeight() + 45) * 2;
			var chscreenwString = chscreenw.toString();
			var CHSCREENW = chscreenwString.concat('px');
			
			$('#credits-screen').css('width', CHSCREENW);
			$('#credits-screen').css('height', CHSCREENH);
			$('#help-screen').css('width', CHSCREENW);
			$('#help-screen').css('height', CHSCREENH);
			
			var chscreenl = screenWidth / 2 - chscreenw / 2;
			var chscreenlString = chscreenl.toString();
			var CHSCREENL = chscreenlString.concat('px');
			
			var chscreent = screenHeight / 2 - chscreenh / 2;
			var chscreentString = chscreent.toString();
			var CHSCREENT = chscreentString.concat('px');
			
			$('#credits-screen').css('top', CHSCREENT);
			$('#credits-screen').css('left', CHSCREENL);
			$('#help-screen').css('top', CHSCREENT);
			$('#help-screen').css('left', CHSCREENL);	
			
			var head1w = chscreenw - 2 * 30 - $('.head-2').width();
			var head1wString = head1w.toString();
			var HEAD1W = head1wString.concat('px');
			$('.head-1').css('width', HEAD1W);	
			
			var scw = chscreenw - 2 * 30 + 5;
			var scwString = scw.toString();
			var SCW = scwString.concat('px');
			$('.screen-content').css('width', SCW);
			$('.screen-content2').css('width', SCW);	
			$('.line-only').css('width', SCW);	
			
			var sch = chscreenh - 2.5 * 30 - $('.heading').height();
			var schString = sch.toString();
			var SCH = schString.concat('px');
			$('.screen-content').css('height', SCH);
			$('.screen-content2').css('height', SCH);
			
			var c2w = chscreenw - 3 * 30 + 5;
			var c2wString = c2w.toString();
			var C2W = c2wString.concat('px');
			$('.col-2b').css('width', C2W);
			
			var c2cw = chscreenw - 3 * 30 - $('.col-1c').width() + 5;
			var c2cwString = c2cw.toString();
			var C2CW = c2cwString.concat('px');
			$('.col-2c').css('width', C2CW);
			
			var c1dw = chscreenw - 3 * 30 - $('.col-1c').width() - 10;
			var c1dwString = c1dw.toString();
			var C1DW = c1dwString.concat('px');
			$('.col-1d').css('width', C1DW);
			
			$('#topMiddle').css('left', screenWidth/2 - $('#topMiddle').width()/2);
			$('#bottomMiddle').css('left', screenWidth/2 - $('#bottomMiddle').width()/2);
			$('#bottomMiddle').css('top', screenHeight - $('#bottomMiddle').height());
			$('#rightMiddle').css('top', screenHeight/2 - $('#rightMiddle').height()/2);
			$('#leftMiddle').css('top', screenHeight/2 - $('#leftMiddle').height()/2);
			$('#rightMiddle').css('left', screenWidth - $('#rightMiddle').width());
			$('#navigation').css('left', $('#zoombar').width() + 20);
			var zoomHeight = parseInt(panoramaHeight) / screenHeight;
			var zoomWidth = parseInt(panoramaWidth) / screenWidth;
			if (typeof xmldata.system.image.gigapanid == 'undefined' || xmldata.system.image.gigapanid == ' ')
    		{
				panoramaNavigator.openDzi
				( 
					{
						url: xmldata.system.image.url,
						width: parseInt(panoramaWidth),
						height: parseInt(panoramaHeight),
						tileSize: parseInt(xmldata.system.image.tilesize),
						tileOverlap: parseInt(xmldata.system.image.tileoverlap),
						tileFormat:xmldata.system.image.tileformat
					}
				);
			}
			else
			{
				panoramaNavigator.addEventListener("open", afterCreation);
         		Seadragon.Config.imageLoaderLimit = 6; // max number of concurrent image downloads
         		loadGigapan(xmldata.system.image.gigapanid, panoramaNavigator);
			}
			window.setTimeout
			(
				function()
				{
					if (zoomHeight > zoomWidth)
					{
						panorama.viewport.zoomBy(zoomHeight / zoomWidth);
						UpdatePanoramaNavigator();
						UpdateZoomBar(1);
					}
					else if (zoomHeight < zoomWidth)
					{
						panorama.viewport.zoomBy(zoomWidth / zoomHeight);
						UpdatePanoramaNavigator();
						UpdateZoomBar(1);
					}
					initialZoom = panorama.viewport.getZoom();
					window.setTimeout
					(
						function()
						{
							
							//var topCalculation = $('#zoombar').offset().top + parseInt($('#zoombar').css('height')) + parseInt($('#zoombar').css('border-width')) - parseInt($('#zoomlevel').css('height'));
							//var topCalculationString = topCalculation.toString();
							//var TCS = topCalculationString.concat('px');
							//$('#zoomlevel').css('top', TCS);		
							//initialZoomLevelTop = parseInt($('#zoomlevel').css('top'));
							//initialZoomLevelHeight = parseInt($('#zoomlevel').css('height'));
							//initialZoomSliderTop = initialZoomLevelTop - parseInt($('#zoomslider').css('height')) / 2;
						},
						200
					);
				},
				50
			);
			if (typeof xmldata.system.image.gigapanid == 'undefined' || xmldata.system.image.gigapanid == ' ')
    		{
				AddPoints();
				AddAnnotations();
				CreatePointsTable();
			}
		},
		200
	);
	zoomBarHeight = parseInt($('#zoombar').css('height'));
	window.setTimeout
	(
		function()
		{
			checkPolygonsLock = false;
			firstZoom = panorama.viewport.getZoom();
			var centre = panorama.viewport.getCenter();
			centreX = centre.x;
			centreY = centre.y;
		},
		2051
	);
	var callerString = "#thumbnail";
	var callerString2 = "#speech";
	var callerString3 = "#arrow";
	var h = CalculateThumbnailHeight();
	var hString = h.toString();
	var h2 = h;
	var hString2 = h2.toString();
	var hString3 = "0";
	var finalHString = hString.concat("px");
	var finalHString2 = hString2.concat("px");
	var finalHString3 = hString3.concat("px");
	var hhstring = photoThumbnailHeight.toString();
	var hhstringfinal = hhstring.concat("px");
	for (var i = 1; i < 26; i = i + 1)
	{
		var finalCallerString = callerString.concat(i.toString());
		var finalCallerString2 = callerString2.concat(i.toString());
		var finalCallerString3 = callerString3.concat(i.toString());
		$(finalCallerString).css('height', finalHString);
		$(finalCallerString).css('width', finalHString);
		$(finalCallerString2).css('height', hhstringfinal);
		$(finalCallerString2).css('width', finalHString2);
		$(finalCallerString3).css('height', finalHString3);
		$(finalCallerString3).css('width', finalHString3);
	}
	RestoreScreen();
	initFunction = false;
}

function SoundToggle()
{
	if (!checkPolygonsLock2 && bgSfxMutePressable)
	{
		checkPolygonsLock2 = true;
		bgSfxMutePressable = false;
		if (activeRegion != -1)
		{
			buttonDeactivation = true;
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
		$('#sfxSoundMute').css('color', '#505050');
		window.setTimeout
		(
			function()
			{
				bgSfxMutePressable = true;
			},
			3000
		);
	}
	else if (bgSfxMutePressable)
	{
		$('#sfxSoundMute').css('color', 'orange');
		checkPolygonsLock2 = false;
	}
}

/* http://www.w3schools.com/ajax/tryit.asp?filename=tryajax_xml2 */
function loadXMLDoc(url)
{
	var xmlhttp;
	var txt, x, xx, i;
	if (window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = 
	function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			x = xmlhttp.responseXML.documentElement.getElementsByTagName("Size");
			for (i=0;i<x.length;i++)
			{
				panoramaWidth = parseInt(x[0].getAttribute("Width"));
				panoramaHeight = parseInt(x[0].getAttribute("Height"));
			}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function MaxDegree(num, pow, start)
{
	if (num/pow > 1.0007385)
	{
		if (num <= 1.0007385)
		{
			return start;
		}
		else
		{
			return MaxDegree(num/pow, pow, start + 1);
		}
	}
	else
	{
		return start;
	}
}

function MaxNegativeDegree(num, pow, start)
{
	if (num * pow < 1.0007385)
	{
		if (num >= 1.0007385)
		{
			return start;
		}
		else
		{
			return MaxDegree(num * pow, pow, start - 1);
		}
	}
	else
	{
		return start;
	}
}

function KeyReset()
{
	keyCode = -1;
	keyCode2 = -1;
	keyCurrent = 1;
	keyDown = 0;
	keyStatus = 0;
	keyPress = 0;
	keyDiagonal = 0;
}

function Pan(type)
{
	buttonFocus = type;
}

function PanZoom(type) 
{
	var deltaPixel = null;
	var deltaPixelHold = null;
    if (!panorama.isOpen()) 
    {
		return;
    }
    if (type == 1 && !keyDiagonal && navigatorDivLeft + navigatorDivWidth <= 1)
    {
    	deltaPixel = new Seadragon.Point(256,0);
    	deltaPixelHold = new Seadragon.Point(32,0);
    }
    else if (type == 2 && !keyDiagonal && navigatorDivLeft >= 0)
    {
    	deltaPixel = new Seadragon.Point(-256,0);
    	deltaPixelHold = new Seadragon.Point(-32,0);
    }
    else if (type == 3 && !keyDiagonal && navigatorDivTop > -screenHeight/screenWidth + panoramaHeight/panoramaWidth + 0.1)
    {
    	deltaPixel = new Seadragon.Point(0,-256);
    	deltaPixelHold = new Seadragon.Point(0,-32);
    }
    else if (type == 4 && !keyDiagonal && navigatorDivTop < screenHeight/screenWidth - navigatorDivHeight)
    {
    	deltaPixel = new Seadragon.Point(0,256);
    	deltaPixelHold = new Seadragon.Point(0,32);
    }
    else if (type == 7 && navigatorDivLeft >= 0 && navigatorDivTop > -screenHeight/screenWidth + panoramaHeight/panoramaWidth + 0.1)
    {	
    	deltaPixel = new Seadragon.Point(-256,-256);
    	deltaPixelHold = new Seadragon.Point(-32,-32);
    }
    else if (type == 8 && navigatorDivTop > -screenHeight/screenWidth + panoramaHeight/panoramaWidth + 0.1 && navigatorDivLeft + navigatorDivWidth <= 1)
    {
    	deltaPixel = new Seadragon.Point(256,-256);
    	deltaPixelHold = new Seadragon.Point(32,-32);
    }
    else if (type == 9 && navigatorDivLeft + navigatorDivWidth <= 1 && navigatorDivTop < screenHeight/screenWidth - navigatorDivHeight)
    {
    	deltaPixel = new Seadragon.Point(256,256);
    	deltaPixelHold = new Seadragon.Point(32,32);
    }
    else if (type == 10 && navigatorDivLeft >= 0 && navigatorDivTop < screenHeight/screenWidth - navigatorDivHeight)
    {
    	deltaPixel = new Seadragon.Point(-256,256);
    	deltaPixelHold = new Seadragon.Point(-32,32);
    }
    if (type < 5 || (type > 6 && type < 11))
    {
    	if ((!mouseClick && (keyPress > 0)) || (mouseClick && (keyPress < 1)))
        {
        	mouseClick = 0;
        	keyStatus = 0;
        	if (type > 6 && type < 11)
        	{
        		keyPress = keyPress - 2;
                if (keyDown == 0)
                {
                    keyCode = -1;
                    keyCode2 = -1;
                }
        		keyCurrent = 1;
        	}
        	else
        	{
        		keyPress = keyPress - 1;
        		if (keyCurrent == 1)
        		{
        			keyCode = -1;
        		}
        		else
        		{
        			keyCurrent = 1;
        			keyCode2 = -1;
        		}
        	}
    		panorama.viewport.panBy(panorama.viewport.deltaPointsFromPixels(deltaPixel));
			if (annoFadeOutLock)
			{
				ComputeAnnotations(3);
				CheckAnnotations();
			}
			UpdatePanoramaNavigator();
			ComputeAnnotations(1);
			CheckAnnotations();
    		if (keyPressRepeat > 0)
    		{
    			while (keyPressRepeat > 0)
    			{
    				panorama.viewport.panBy(panorama.viewport.deltaPointsFromPixels(deltaPixel));
					UpdatePanoramaNavigator();
					ComputeAnnotations(1);
					CheckAnnotations();
    				keyPressRepeat = keyPressRepeat - 1;
    			}
    			keyJustPressed = -1;
    			keyJustPressed2 = -1;
    		}
    	}
    	else if ((!mouseDown && (keyDown > 0)) || (mouseDown && (keyDown < 1)))
    	{
    		panorama.viewport.panBy(panorama.viewport.deltaPointsFromPixels(deltaPixelHold));
			UpdatePanoramaNavigator();
			ComputeAnnotations(1);
			CheckAnnotations();
    		var timeOut = 100;
    		if (keyNotUp > -1)
    		{
    			switch(keyNotUp)
				{	
					case 32:
						type = 11;
						break;
					case 37:
						type = 2;
						break;
					case 38:
						type = 3;
						break;
					case 39:
						type = 1;
						break;
					case 40:
						type = 4;
						break;
					case 68:
						type = 6;
						break;
					case 70:
						type = 5;
						break;
					default:
						KeyReset();
						break;
				}
    		}
			if (annoFadeOutLock)
			{
				ComputeAnnotations(3);
				CheckAnnotations();
			}
    		window.setTimeout	/* click and hold */
        	(
        		function()
        		{
        			PanZoom(type);
        		},
        		timeOut
        	);
    	}
    }
    else if (type == 5 || type == 6)
    {
        if ((!mouseClick && keyPress > 0) || (mouseClick && keyPress < 1) || zoomException)
        {
        	mouseClick = 0;
        	keyPress = 0;
        	keyCode = -1;        	
        	if (type == 5)
        	{
                if (!zoomException)
                {
                    panorama.viewport.zoomBy(2.1);
                }
                else
                {
                    panorama.viewport.zoomBy(1.3);
                }
        	}
        	else
        	{				
        		if (panorama.viewport.getZoom()/2.1 >= 1)
        		{
                    if (!zoomException)
                    {
                        panorama.viewport.zoomBy(1/2.1);
                    }
                    else
                    {
                        panorama.viewport.zoomBy(1/1.3);
                    }
        		}
        		else
        		{
        			panorama.viewport.zoomTo(1);
        		}
        	}
            UpdatePanoramaNavigator();
            ComputeAnnotations(1);
            CheckAnnotations();
			if (!zoomException)
			{
				UpdateZoomBar(0);
			}
			else
			{
				UpdateZoomBar(1);
			}
        }
        else if ((!mouseDown && keyDown > 0) || (mouseDown && keyDown < 1))
        {
        	if (type == 5)
        	{
        		panorama.viewport.zoomBy(1.07385);
        	}
        	else
        	{
        		panorama.viewport.zoomBy(1/1.07385);
        	}
        	UpdateZoomBar(1);
            UpdatePanoramaNavigator();
            ComputeAnnotations(1);
            CheckAnnotations();
        	window.setTimeout	/* click and hold */
        	(
        		function()
        		{
        			PanZoom(type);
        		},
        		0
        	);
        }
    }
    else
    {
    	if (!checkPolygonsLock)
    	{    		
    		checkPolygonsLock = true;
			var numberOfPoints = annotations.length;
			for (var i = 0; i < numberOfPoints; i = i + 1)
			{
				if (activeAnnotation == i)
				{
					if (!hoverLock[i] && clickAgain)
					{
						ClickFunction(annoTracker[i]);
					}
					onAnnoClick[i] = false;
					RestoreAnno(i);
				}
			}
			if (activeAnnotation == -1)
			{
				CheckAnnotations();
			}
    	}
		recursionCounter = recursionCounter + 1;
    	KeyReset();
    	annotationMouse = false;
		duringActive = false;
		postExitAnno2 = false;
    	var tempLock = false;
		currentZoomDegree = MaxDegree(panorama.viewport.getZoom(), 1.07385, 0);
		zoomThresholdDegree = MaxDegree(initialZoom, 1.07385, 0);
		currentCenterX = panorama.viewport.getCenter().x;
		currentCenterY = panorama.viewport.getCenter().y;
		if (currentCenterX != 0.5)
		{
			currentDeltaX = (currentCenterX - 0.5) * -1;
		}
		if (currentCenterY != panoramaHeight/(panoramaWidth * 2))
		{
			currentDeltaY = (currentCenterY - panoramaHeight/(panoramaWidth * 2)) * -1;
		}
		if (currentZoomDegree > 0.035 + zoomThresholdDegree && panorama.viewport.getZoom() > initialZoom + 0.055 || panorama.viewport.getZoom() <= initialZoom)
		{
			if (currentZoomDegree > 0.035 + zoomThresholdDegree && panorama.viewport.getZoom() > initialZoom + 0.055 && recursionCounter < 100 || (currentCenterX < 0.492 || currentCenterX > 0.508 || currentCenterY < panoramaHeight/(panoramaWidth * 2) - 0.008 || currentCenterY > panoramaHeight/(panoramaWidth * 2) + 0.008) || panorama.viewport.getZoom() < initialZoom)
			{
				currentCenterX2 = currentCenterX + currentDeltaX / Math.pow(1.07385, currentZoomDegree);
				currentCenterY2 = currentCenterY + currentDeltaY / Math.pow(1.07385, currentZoomDegree);
				navigatorRectangle = new Seadragon.Rect
				(   
					1/2 - (1 / Math.pow(1.07385, currentZoomDegree))/2 + 0.5 * (currentCenterX2 - 0.5)/0.5, panoramaHeight/(panoramaWidth * 2) - (screenHeight / (screenWidth * 2) - panoramaHeight / (panoramaWidth * 2)) - (panoramaHeight/(panoramaWidth * 2)) * (1 / Math.pow(1.07385, currentZoomDegree)) + (panoramaHeight/(panoramaWidth * 2)) * (currentCenterY2 - (panoramaHeight/(panoramaWidth * 2)))/(panoramaHeight/(panoramaWidth * 2)),
					1 * 1 / Math.pow(1.07385, currentZoomDegree), (screenHeight/screenWidth) * 1 / Math.pow(1.07385, currentZoomDegree)
				);
				panoramaNavigator.drawer.updateOverlay(navigatorDiv, navigatorRectangle);
				if (panorama.viewport.getZoom() > initialZoom)
				{
					panorama.viewport.zoomBy(1/1.07385);
					//ComputeAnnotations(1);
					if (activeAnnotation == -1)
					{
						CheckAnnotations();
					}
				}
				else if (panorama.viewport.getZoom() < initialZoom)
				{
					if (panorama.viewport.getZoom() * 1.07385 >= initialZoom)
					{
						panorama.viewport.zoomTo(initialZoom);
						//ComputeAnnotations(1);
						if (activeAnnotation == -1)
						{
							CheckAnnotations();
						}
					}
					else
					{
						panorama.viewport.zoomBy(1.07385);
						//ComputeAnnotations(1);
						if (activeAnnotation == -1)
						{
							CheckAnnotations();
						}
					}
				}
				UpdateZoomBar(1);
				if (panorama.viewport.getZoom() != initialZoom)
				{
					window.setTimeout
	        		(
	        			function()
	        			{
							panorama.viewport.panTo(new Seadragon.Point(currentCenterX2, currentCenterY2));
							//ComputeAnnotations(1);
							if (activeAnnotation == -1)
							{
								CheckAnnotations();
							}
	        				PanZoom(type + 1);
	        			},
	        			0
	        		);				
				}
				else
				{
					recursionCounter = 0;
					if (currentCenterX < 0.492 || currentCenterX > 0.508 || currentCenterY < panoramaHeight/(panoramaWidth * 2) - 0.008 || currentCenterY > panoramaHeight/(panoramaWidth * 2) + 0.008)
					{
						panorama.viewport.panTo(new Seadragon.Point(0.5, (panoramaHeight/(panoramaWidth * 2))));
						var initialZoomDegree = MaxDegree(initialZoom, 1.0007385, 0);
						var currentZoomDegree2 = MaxDegree(panorama.viewport.getZoom(), 1.0007385, 0);
						window.setTimeout
						(
							function()
							{
								UpdatePanoramaNavigator();
								ComputeAnnotations(1);
								if (activeAnnotation == -1)
								{
									CheckAnnotations();
								}
							},
							(initialZoomDegree / 16)
						);
						ManualPanning(2, currentZoomDegree2, initialZoomDegree);
					}
				}
			}
			else if (currentCenterX < 0.492 || currentCenterX > 0.508 || currentCenterY < panoramaHeight/(panoramaWidth * 2) - 0.008 || currentCenterY > panoramaHeight/(panoramaWidth * 2) + 0.008)
			{
				panorama.viewport.panTo(new Seadragon.Point(0.5, (panoramaHeight/(panoramaWidth * 2))));
				UpdatePanoramaNavigator();
				ComputeAnnotations(1);
				if (activeAnnotation == -1)
				{
					CheckAnnotations();
				}
			}
		}
		else
		{
			recursionCounter = 0;
			currentZoomDegree = -1;
			if (initialZoom - panorama.viewport.getZoom() <= 0.4 || initialZoom - panorama.viewport.getZoom() > -0.4)
			{
				panorama.viewport.zoomTo(initialZoom);
				ComputeAnnotations(1);
				if (activeAnnotation == -1)
				{
					CheckAnnotations();
				}
			}		
		}	
    	if (!(currentZoomDegree > 0.035 + zoomThresholdDegree && panorama.viewport.getZoom() > initialZoom + 0.055 && recursionCounter < 100 && (currentCenterX < 0.492 || currentCenterX > 0.508 || currentCenterY < panoramaHeight/(panoramaWidth * 2) - 0.008 || currentCenterY > panoramaHeight/(panoramaWidth * 2) + 0.008) || panorama.viewport.getZoom() < initialZoom))
    	{
    		window.setTimeout
    		(
    			function()
    			{
    				checkPolygonsLock = false;
    				if (activeAnnotation == -1)
    				{
    					CheckAnnotations();
    				}
    			},
    			500
    		);
    	}
    }
    panorama.viewport.ensureVisible();
    recursionCounter = 0;
	if (Math.abs(firstZoom - panorama.viewport.getZoom()) <= 0.0001)
	{
		if (activeAnnotation == -1)
		{
			CheckAnnotations();
		}
		if (Math.abs(currentCenterX - 0.492) <= 0.02 || Math.abs(currentCenterX - 0.508) <= 0.02 || Math.abs(currentCenterY - panoramaHeight/(panoramaWidth * 2)) <= 0.008)
		{
			if (!simulateClick)
			{
				checkPolygonsLock = false;
			}
		}
		if (simulateClick)
		{
			window.setTimeout
			(
				function()
				{
					checkPolygonsLock = true;
					simulateClick = false;
					zavg2 = zavg / 4;
					anopos2 = anopos.divide(4);
					SimulateClickFunction();
				},
				190
			);
		}
	}
}

function SimulateClickFunction() 
{
	zavgCounter = zavgCounter + 1;
	panorama.viewport.zoomTo(zavg2);
	panorama.viewport.panBy(anopos2);
	CheckAnnotations();
	if (zavgCounter < 4)
	{
		window.setTimeout
		(
			function()
			{
				//UpdateZoomBar(1);
				zavg2 = zavg2 + zavg / 4;
				SimulateClickFunction();
			},
			198
		);
	}
	else
	{
		zavgCounter = 0;
		//UpdateZoomBar(1);
		window.setTimeout
		(
			function()
			{
				postExitNotExit = true;
				//UpdateZoomBar(1);
				ClickFunction(annoTracker[parseInt(anoid)]);
			},
			551
		);
	}
}

function onBeforeAnimation(panorama)
{
	UpdateZoomBar(1);
}

function onAfterAnimation(panorama)
{
	UpdateZoomBar(1);
}

function ManualPanning(i, currentZoomDegree2, initialZoomDegree)
{
	currentCenterX2 = currentCenterX + currentDeltaX / (4-i);
	currentCenterY2 = currentCenterY + currentDeltaY / (4-i);
	navigatorRectangle = new Seadragon.Rect
	(   
		1/2 - (1 / Math.pow(1.0007385, currentZoomDegree2))/2 + 0.5 * (currentCenterX2 - 0.5)/0.5, panoramaHeight/(panoramaWidth * 2) - (screenHeight / (screenWidth * 2) - panoramaHeight / (panoramaWidth * 2)) - (panoramaHeight/(panoramaWidth * 2)) * (1 / Math.pow(1.0007385, currentZoomDegree2)) + (panoramaHeight/(panoramaWidth * 2)) * (currentCenterY2 - (panoramaHeight/(panoramaWidth * 2)))/(panoramaHeight/(panoramaWidth * 2)),
		1 * 1 / Math.pow(1.0007385, currentZoomDegree2), (screenHeight/screenWidth) * 1 / Math.pow(1.0007385, currentZoomDegree2)
	);
	panoramaNavigator.drawer.updateOverlay(navigatorDiv, navigatorRectangle);
	if (i <= 2)
	{
		i = i + 0.5;
		window.setTimeout
		(
			function()
			{
				ManualPanning(i, currentZoomDegree2, initialZoomDegree);
			},
			12.5
		);
	}
	else
	{
		lockReset = false;
	}
}

function Reset()
{
	PanZoom(11);
}

function SetMouseDown()
{
	mouseUp = 0;
	window.setTimeout
	(
		function()
		{
			if (!mouseUp)
			{
				mouseDown = 1;
			}
			else
			{
				mouseClick = 1;
			}
			if (buttonFocus > 0)
			{	
				PanZoom(buttonFocus);
			}
		},
		250
	);
}

function SetMouseUp()
{
	mouseUp = 1;
	mouseDown = 0;
}

function SimulateKeyPress(character) {
  jQuery.event.trigger({ type : 'keydown', which : character.charCodeAt(0) });
}

function UpdatePanoramaNavigator()
{
	var currentDegree = MaxDegree(panorama.viewport.getZoom(), 1.0007385, 0);
	navigatorDivWidth = 1 * 1 / Math.pow(1.0007385, currentDegree);
	navigatorDivHeight = screenHeight / screenWidth * 1 / Math.pow(1.0007385, currentDegree);
	navigatorDivLeft = 1/2 - (1 / Math.pow(1.0007385, currentDegree))/2 + 0.5 * (panorama.viewport.getCenter().x - 0.5)/0.5;
	screenHeight2 = screenHeight/(screenWidth * 2)  - panoramaHeight/(panoramaWidth * 2);
	//navigatorDivTop = screenHeight2 - screenHeight2 * (1 / Math.pow(1.0007385, currentDegree)) + screenHeight2 * (panorama.viewport.getCenter().y - screenHeight2)/screenHeight2;
	navigatorDivTop = (panoramaHeight/(panoramaWidth * 2)) - (screenHeight/(screenWidth * 2)) * (1 / Math.pow(1.0007385, currentDegree)) + (panorama.viewport.getCenter().y - (panoramaHeight/panoramaWidth) / 2);
	navigatorRectangle = new Seadragon.Rect
	(   
		navigatorDivLeft, navigatorDivTop,
		navigatorDivWidth, navigatorDivHeight
	);
	panoramaNavigator.drawer.updateOverlay(navigatorDiv, navigatorRectangle);
	var leh = $('#zoomlevel').height();
	var zbh = $('#zoombar').height();
	var percent = leh / zbh * 100 - 2;
	percent = percent.toFixed(0);
	var percentString = percent.toString();		
	var PERCENT = percentString.concat(' %');
	$('#zoomslider-2').text(PERCENT);
}

function UpdateZoomBar(type)
{
	var ratio = 1;
	if (type == 0)
	{
		
    	var currentDegree = MaxDegree(panorama.viewport.getZoom(), 1.07385, 0);
      	if (currentDegree / maxDegree * zoomBarHeight <= zoomBarHeight)
       	{
       		ratio = currentDegree / maxDegree;
       	}
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
				var zoomLevelHeight = 0;
				zoomLevelHeight = $('#zoombar').height() * ratio + 4;	// hacked
				var zoomLevelHeightString = zoomLevelHeight.toString();
				var LEVELHEIGHT = zoomLevelHeightString.concat('px');
			
				var zoomLevelTop = $('#zoombar').offset().top + $('#zoombar').height() - zoomLevelHeight + 2;	// hacked
				var zoomLevelTopString = zoomLevelTop.toString();
				var LEVELTOP = zoomLevelTopString.concat('px');
				
				$('#zoomlevel').animate({height: LEVELHEIGHT, top: LEVELTOP});
				
				var zoomSliderTop = $('#zoombar').offset().top + $('#zoombar').height() - zoomLevelHeight;
				var zoomSliderTopString = zoomSliderTop.toString();
				var SLIDERTOP = zoomSliderTopString.concat('px');
				$('#zoomslider').animate({top: SLIDERTOP});
				
				var zoomSliderTop2 = $('#zoombar').offset().top + $('#zoombar').height() - zoomLevelHeight - $('#zoomslider-2').height() / 4;
				var zoomSliderTopString2 = zoomSliderTop2.toString();
				var SLIDERTOP2 = zoomSliderTopString2.concat('px');
				$('#zoomslider-2').animate({top: SLIDERTOP2});
				
				var zoomSliderTop3 = zoomSliderTop2 + parseInt($('#zoomslider-2-arrow').css('border-right-width')) / 2;
				var zoomSliderTopString3 = zoomSliderTop3.toString();
				var SLIDERTOP3 = zoomSliderTopString3.concat('px');
				$('#zoomslider-2-arrow').animate({top: SLIDERTOP3});
				
				zoomSliderPosition = $('#zoomslider').offset().top;
				
				var sliderLeft = 10;
				var sliderLeftString = sliderLeft.toString();
				var SLS = sliderLeftString.concat("px");
				$('#zoomslider-2').css('left', SLS);

				var sliderLeft2 = sliderLeft + $('#zoomslider-2').width() + 5;
				var sliderLeftString2 = sliderLeft2.toString();
				var SLS2 = sliderLeftString2.concat("px");
				$('#zoomslider-2-arrow').css('left', SLS2);
				
				var leh = $('#zoomlevel').height();
				var zbh = $('#zoombar').height();
				var percent = leh / zbh * 100 - 2;
				percent = percent.toFixed(0);
				var percentString = percent.toString();
				var PERCENT = percentString.concat(' %');
				
				$('#zoomslider-2').text(PERCENT);
			},
    	    249
    	);
		UpdatePanoramaNavigator();
    }
    else
    {
   		var currentDegree = MaxDegree(panorama.viewport.getZoom(), 1.07385, 0);
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
				var zoomLevelHeight = 0;
				zoomLevelHeight = $('#zoombar').height() * ratio + 4;	// hacked
				var zoomLevelHeightString = zoomLevelHeight.toString();
				var LEVELHEIGHT = zoomLevelHeightString.concat('px');
				$('#zoomlevel').css('height', LEVELHEIGHT);
			
				var zoomLevelTop = $('#zoombar').offset().top + $('#zoombar').height() - zoomLevelHeight + 2;	// hacked
				var zoomLevelTopString = zoomLevelTop.toString();
				var LEVELTOP = zoomLevelTopString.concat('px');
				$('#zoomlevel').css('top', LEVELTOP);

				var zoomSliderTop = $('#zoombar').offset().top + $('#zoombar').height() - zoomLevelHeight;
				var zoomSliderTopString = zoomSliderTop.toString();
				var SLIDERTOP = zoomSliderTopString.concat('px');
				$('#zoomslider').css('top', SLIDERTOP);
				
				var zoomSliderTop2 = $('#zoombar').offset().top + $('#zoombar').height() - zoomLevelHeight - $('#zoomslider-2').height() / 4;
				var zoomSliderTopString2 = zoomSliderTop2.toString();
				var SLIDERTOP2 = zoomSliderTopString2.concat('px');
				$('#zoomslider-2').css('top', SLIDERTOP2);
				
				var zoomSliderTop3 = zoomSliderTop2 + parseInt($('#zoomslider-2-arrow').css('border-right-width')) / 2;
				var zoomSliderTopString3 = zoomSliderTop3.toString();
				var SLIDERTOP3 = zoomSliderTopString3.concat('px');
				$('#zoomslider-2-arrow').css('top', SLIDERTOP3);
				
				var sliderLeft = 10;
				var sliderLeftString = sliderLeft.toString();
				var SLS = sliderLeftString.concat("px");
				$('#zoomslider-2').css('left', SLS);
				
				var sliderLeft2 = sliderLeft + $('#zoomslider-2').width() + 5;
				var sliderLeftString2 = sliderLeft2.toString();
				var SLS2 = sliderLeftString2.concat("px");
				$('#zoomslider-2-arrow').css('left', SLS2);
				
				zoomSliderPosition = $('#zoomslider').offset().top;
				
				var leh = $('#zoomlevel').height();
				var zbh = $('#zoombar').height();
				var percent = leh / zbh * 100 - 2;
				percent = percent.toFixed(0);
				var percentString = percent.toString();
				var PERCENT = percentString.concat(' %');
				$('#zoomslider-2').text(PERCENT);
    	    },
    	    249
    	);
		if (type != 100)
		{
			UpdatePanoramaNavigator();
		}
    }
}

function Zoom(type)
{
	buttonFocus = 4 + type;
}