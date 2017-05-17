function AddAnnotations()
{
	document.getElementById('nvg-overview-title').innerHTML = '<b>Zoom: </b>' + (currentZoom.toFixed(3)).toString();
	document.getElementById('zoomtitle').innerHTML = '<b>(x,y): </b>N/A';
	var wikipediaTag = 'Wikipedia &rarr;';
	var othersTag = 'Link &rarr;';
	var annoSmallContentsTag = '<div class = "anno-column-1b"><img src = "icons/';
	var markerImg = 'pin-location-green.png';
	annotations = new Array();
	annotationActive = new Array();
	annoTracker = new Array();
	annoTracker2 = new Array();
	annotationContentArrow = new Array();
	annotationContentTextSmall = new Array();
	annotationContentTextLarge = new Array();
	annotationContentSmall = new Array();
	targetElements = new Array();
	zoomMax = new Array();
	zoomMin = new Array();
	annotationPoints = new Array();
	hoverLock = new Array();
	annoExit = new Array();
	var annoobj = xmldata.system.landmark;
	var noa = annoobj.length;
	if (typeof noa == 'undefined' || noa == '1')
	{
		annotations[0] = new Seadragon.Point(parseFloat(xmldata.system.landmark.x), parseFloat(xmldata.system.landmark.y));
		var fieldTemp = xmldata.system.landmark.subtitle.field;
		var entryTemp = xmldata.system.landmark.subtitle.entry;
		var subtitleTemp = xmldata.system.landmark.subtitle;
		var subtitle = "";
		var ltg = "";
		var lstr = xmldata.system.landmark.link;
		if (lstr.search("wikipedia\.org") > -1)
		{
			ltg = wikipediaTag;
		}
		else
		{
			ltg = othersTag;
		}
		if (typeof fieldTemp == 'undefined')
		{
			if (typeof entryTemp == 'undefined')
			{
				subtitle = subtitleTemp;
			}
			else
			{
				subtitle = entryTemp;
			}
		}
		else
		{
			subtitle = '<b>' + xmldata.system.landmark.subtitle.field + '</b>: ' + xmldata.system.landmark.subtitle.entry;
		}
		annoTitles[0] = xmldata.system.landmark.title;
		annoSubtitles[0] = subtitle;
		annoDescriptions[0] = xmldata.system.landmark.description;
		annoPictures[0] = xmldata.system.landmark.picture;
		annoWeblinks[0] = xmldata.system.landmark.link;
		annoWeblinksFinal[0] = ltg;
		thumbnails[0] = xmldata.system.landmark.thumbnail;
		speech[0] = xmldata.system.landmark.title;
		annotationsLatLng[0] = new google.maps.LatLng(parseFloat(xmldata.system.landmark.lat), parseFloat(xmldata.system.landmark.lng));
		zoomMax = parseFloat(xmldata.system.landmark.maxzoom);
		zoomMin = parseFloat(xmldata.system.landmark.minzoom);
	}
	else
	{
		for (var i = 0; i < noa; i = i + 1)
		{
			annotations[i] = new Seadragon.Point(parseFloat(xmldata.system.landmark[i].x), parseFloat(xmldata.system.landmark[i].y));
			var fieldTemp = xmldata.system.landmark[i].subtitle.field;
			var entryTemp = xmldata.system.landmark[i].subtitle.entry;
			var subtitleTemp = xmldata.system.landmark[i].subtitle;
			var subtitle = "";
			var ltg = "";
			var lstr = xmldata.system.landmark[i].link;
			if (lstr.search("wikipedia\.org") > -1)
			{
				ltg = wikipediaTag;
			}
			else
			{
				ltg = othersTag;
			}
			if (typeof fieldTemp == 'undefined')
			{
				if (typeof entryTemp == 'undefined')
				{
					subtitle = '<b>' + subtitleTemp + '</b>';
				}
				else
				{
					subtitle = entryTemp;
				}
			}
			else
			{
				subtitle = '<b>' + xmldata.system.landmark[i].subtitle.field + '</b>: ' + xmldata.system.landmark[i].subtitle.entry;
			}
			annoTitles[i] = xmldata.system.landmark[i].title;
			annoSubtitles[i] = subtitle;
			annoDescriptions[i] = xmldata.system.landmark[i].description;
			annoPictures[i] = xmldata.system.landmark[i].picture;
			annoWeblinks[i] = xmldata.system.landmark[i].link;
			annoWeblinksFinal[i] = ltg;
			thumbnails[i] = xmldata.system.landmark[i].thumbnail;
			speech[i] = xmldata.system.landmark[i].title;
			annotationsLatLng[i] = new google.maps.LatLng(parseFloat(xmldata.system.landmark[i].lat), parseFloat(xmldata.system.landmark[i].lng));
			zoomMax[i] = parseFloat(xmldata.system.landmark[i].maxzoom);
			zoomMin[i] = parseFloat(xmldata.system.landmark[i].minzoom);
		}
	}
	
	for (var o = 0; o < annotationsLatLng.length; o = o + 1)
	{
		gmapMarker[o] = new google.maps.Marker
		(
			{
				position: annotationsLatLng[o],
				map: gmap,
				title: speech[o],
				icon: markerImg
			}
		);
	}
	var smallH = parseInt($('.annotation-content-small').css('height'));
	var smallHString = smallH.toString();
	numberOfPoints = annotations.length;
	for (var i = 0; i < numberOfPoints; i = i + 1)
	{
		var j = (i % 6) + 1;
		annoSmallContents[i] = annoSmallContentsTag.concat(j.toString(), '.png', '" height = "', smallHString, '" /></div><div class = "anno-column-2b">', annoTitles[i] , '</div>');
	}
	universalK3 = 0;
	
	var h = CalculateThumbnailHeight();
	var hString = h.toString();
	var hString2 = $('.subthumbnail1').css('width');
	var hString3 = hString2;
	var initialTag = '<img src = "';
	var thumbstring = 'thumbnail';
	var thumbstring2 = 'st';
	var thumbstring3 = 'stb';
	var speechstring = 'speech';
	var annoOpenTag = '<div class = "anno-column-1"><img src = "';
	var thumbHeight = annoSmallH - 30;
	var weblinkIdPrefix = "weblink";
	var j = 0;
	for (var i = 0; i < numberOfPoints; i = i + 1)
	{
		j = j + 1;
		document.getElementById(thumbstring.concat(j.toString())).innerHTML = initialTag.concat(thumbnails[i], '" height = "', hString, '" width = "', hString, '" />');
		//document.getElementById(thumbstring2.concat(j.toString())).innerHTML = initialTag.concat(thumbnails[i], '" height = "', hString2, '" width = "', hString2, '" />');
		//document.getElementById(thumbstring3.concat(j.toString())).innerHTML = initialTag.concat(annoPictures[i], '" height = "', hString3, '" width = "', hString3, '" />');
		document.getElementById(speechstring.concat(j.toString())).innerHTML = speech[i];
		annoContents[i] = annoOpenTag.concat(annoPictures[i], '" height = "', thumbHeight.toString(), '" width = "', thumbHeight.toString(), '" /></div><div class = "anno-column-2"><h1 class = "annotation-title">', annoTitles[i] , '</h1><h1 class = "annotation-subtitle">', annoSubtitles[i] , '</h1><p class = "annotation-description">', annoDescriptions[i] , '</p><a class = "annotation-weblink" href = "', annoWeblinks[i], '" id = "', weblinkIdPrefix.concat(i.toString()), '">', annoWeblinksFinal[i], '</a></div>');
	}
	for (var z = numberOfPoints + 1; z < 25; z = z + 1)
	{
		$('#' + thumbstring.concat(z.toString())).hide();
		
	}
	for (var i = 0; i < numberOfPoints; i = i + 1)
	{
		annotationPoints[i] = document.createElement("div");
		annotationInnerRings[i] = document.createElement("div");
		annotationRings[i] = document.createElement("div");
		annotationContentSmall[i] = document.createElement("div");
		annotationContentArrow[i] = document.createElement("div");
		annotationContentTextSmall[i] = document.createElement("div");
		annotationContentTextLarge[i] = document.createElement("div");
		annotationContentArrow[i].className = "annotation-content-small-arrow-hidden";
		annotationContentSmall[i].className = "annotation-content-small-hidden";
		annotationContentTextSmall[i].className = "annotation-content-text-small-hidden";
		annotationContentTextLarge[i].className = "annotation-content-text-large-hidden";
		var idTemp = i;
		var idString = "anno";
		var idString2 = "annoContentSmall";
		var idString3 = "annoContentArrow";
		var idString4 = "annoContentTextSmall";
		var idString5 = "annoContentTextLarge";
		var idString6 = "annoRing";
		var idString7 = "annoRingInner";
		var idStringCall = "#anno";
		var idStringCall2 = "#annoContentSmall";
		var idStringCall3 = "#annoContentArrow";
		var idStringCall4 = "#annoContentTextSmall";
		var idStringCall5 = "#annoContentTextLarge";
		annotationPoints[i].id = idString.concat(idTemp.toString());
		annotationRings[i].id = idString6.concat(idTemp.toString());
		annotationInnerRings[i].id = idString7.concat(idTemp.toString());
		annotationContentSmall[i].id = idString2.concat(idTemp.toString());
		annotationContentArrow[i].id = idString3.concat(idTemp.toString());
		annotationContentTextSmall[i].id = idString4.concat(idTemp.toString());
		annotationContentTextLarge[i].id = idString5.concat(idTemp.toString());
		hoverLock[i] = false;
		onAnnoClick[i] = false;
		annoExit[i] = true;
	}
	
	window.setTimeout
	(
		function()
		{
			for (var i = 0; i < annotations.length; i = i + 1)
			{
				var idTemp = i;
				var idStringCall2 = "#annoContentSmall";
				var idStringCall3 = "#annoContentArrow";
				var idStringCall4 = "#annoContentTextSmall";
				var idStringCall5 = "#annoContentTextLarge";
				var universalK6 = i;
				specialExceptions[i] = false;
				$(idStringCall3.concat(idTemp.toString())).hide(0);
				$(idStringCall4.concat(idTemp.toString())).hide(0);
				$(idStringCall5.concat(idTemp.toString())).hide(0);
				$(idStringCall2.concat(idTemp.toString())).hide(0, function()
				{	
					annotationContentSmall[universalK6].className = "annotation-content-small";
					annotationContentArrow[universalK6].className = "annotation-content-small-arrow";
					annotationContentTextSmall[universalK6].className = "annotation-content-text-small";
					annotationContentTextLarge[universalK6].className = "annotation-content-text-large";
					annotationContentTextSmall[universalK6].innerHTML = annoSmallContents[universalK6];
					annotationContentTextLarge[universalK6].innerHTML = annoContents[universalK6];
					if (panorama.viewport.getZoom() < zoomMin[universalK6] || panorama.viewport.getZoom() > zoomMax[universalK6])
					{
						annotationActive[universalK6] = false;
						var idStringCall = "#anno";
						var idStringCall2 = "#annoRing";
						var idStringCall3 = "#annoRingInner";
						var idTemp = universalK6;
						$(idStringCall.concat(idTemp.toString())).hide();
						$(idStringCall2.concat(idTemp.toString())).hide();
						$(idStringCall3.concat(idTemp.toString())).hide();
						annotationPoints[universalK6].className = "annotation";
						annotationRings[universalK6].className = "annotation-ring";
						annotationInnerRings[universalK6].className = "annotation-ring-inner";
					}
					else
					{
						annotationActive[universalK6] = true;
						annotationPoints[universalK6].className = "annotation";
						annotationRings[universalK6].className = "annotation-ring";
						annotationInnerRings[universalK6].className = "annotation-ring-inner";
					}
					
				});
			}
		},
		51
	);
	
	
	for (var i = 0; i < annotations.length; i = i + 1)
	{
		panorama.drawer.addOverlay(annotationPoints[i], annotations[i]);
		panorama.drawer.addOverlay(annotationRings[i], annotations[i]);
		//panorama.drawer.addOverlay(annotationInnerRings[i], annotations[i]);
		panorama.drawer.addOverlay(annotationContentSmall[i], annotations[i]);
		panorama.drawer.addOverlay(annotationContentArrow[i], annotations[i]);
		panorama.drawer.addOverlay(annotationContentTextSmall[i], annotations[i]);
		panorama.drawer.addOverlay(annotationContentTextLarge[i], annotations[i]);
		ComputeAnnotations(0);
	}
	window.setTimeout
	(
		function()
		{
			var deltaWidth = annoSmallW - annoSmallH - 1.5 * parseInt($('.anno-column-2').css('margin-left'));
			var deltaWidth2 = parseInt($('.annotation-content-small').css('width')) - 62;
			var h = annoSmallH - 20;
			var H = h.toString();
			var hString = H.concat('px');
			var deltaWidthString = deltaWidth.toString();
			var deltaWidthString2 = deltaWidth2.toString();
			var finalDeltaWidth = deltaWidthString.concat('px');
			var finalDeltaWidth2 = deltaWidthString2.concat('px');
			var w0 = annoSmallH - 20 - 2 * parseInt($('.anno-column-1').css('padding-top'));
			var w = w0.toString();
			var W = w.concat("px");
			$('.anno-column-1').css('width', W);
			$('.anno-column-1').css('height', W);
			$('.anno-column-2').css('width', finalDeltaWidth);
			$('.anno-column-2b').css('width', finalDeltaWidth2);
			$('.anno-column-2').css('height', hString);
		},
		51
	);
	
	window.setTimeout
	(
		function()
		{
			SetTrackers();
		},
		5
	);
	
}

function ClickFunction(tracker)
{
	if (transfiguratio)
	{
		return;
	}
	targetId = tracker.target.id;
	var angka = parseInt(targetId.substring(4));
	if (onAnnoClick[angka])
	{
		onAnnoClick[angka] = false;
	}
	else
	{
		onAnnoClick[angka] = true;
		ExpandAnno(angka);
	}
	targetId = tracker.target.id;
	var angka = targetId.substring(4);
	angka = parseInt(angka);
	if (postExitNotExit)
	{
		clickException = true;
		postExitNotExit = false;
		EnterAnno(tracker);
	}
	if (!annoFadeOutLock)
	{
		clickAgain = false;
		annoFadeOutLock = true;
		var callerName3 = "#annoContentTextSmall";
		$(callerName3.concat(angka)).fadeOut(250);
	}
	else
	{
		targetId = tracker.target.id;
		var angka = targetId.substring(4);
		angka = parseInt(angka);
		var callerName3 = "#annoContentTextSmall";
		$(callerName3.concat(angka)).fadeOut(250);
		if (angka == activeAnnotation)
		{	
			annoFadeOutLock = false;
			postExitAnno = true;
			postExitNotExit = true;
			ExitAnno(tracker, -1);
			window.setTimeout
			(
				function()
				{
					activeAnnotation = -1;
					CheckAnnotations();
				},
				852
			);
		}	
		else
		{
			swapping = true;
			ExitAnno(tracker, activeAnnotation);
			annoFadeOutLock = true;
			annotationMouse = true;
			duringActive = false;
		}
		var callerName3 = "#annoContentTextSmall";
		$(callerName3.concat(angka)).fadeOut(250);
	}
	if (!clickSem && !postExitAnno)
	{
		clickSem = true;
		var callerName = "#annoContentSmall";
		var callerName2 = "#annoContentArrow";
		var callerName3 = "#annoContentTextSmall";
		var callerName4 = "#annoContentTextLarge";
		targetId = tracker.target.id;
		var angka = targetId.substring(4);
		activeAnnotation = parseInt(angka);
		var callerName3 = "#annoContentTextSmall";
		$(callerName3.concat(angka)).fadeOut(250);
		var oldWidth = parseInt($('.annotation-content-small').width());
		var oldHeight = parseInt($('.annotation-content-small').height());
		var ow = oldWidth.toString();
		var oh = oldHeight.toString();
		if (owstr == "")
		{
			owstr = ow.concat("px");
			ohstr = oh.concat("px");
			mlstr = $('.annotation-content-small').css('margin-left');
			mtstr = $('.annotation-content-small').css('margin-top');
		}
		annoSmallWidth = annoSmallW;
		annoSmallHeight = annoSmallH;
		tooltipWidth = annoSmallWidth.toString();
		tooltipHeight = annoSmallHeight.toString();
		tooltipWidth = tooltipWidth.concat("px");
		tooltipHeight = tooltipHeight.concat("px");
		var xDiff = annoSmallWidth - oldWidth;
		var yDiff = annoSmallHeight - oldHeight;
		xDiff = xDiff / 2;
		yDiff = yDiff / 2;
		var xm = L[parseInt(angka)];
		var ym = T[parseInt(angka)];
		
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
		var yDownRight = yDownLeft;
		var xUpLeft = xDownLeft;
		var yUpLeft = annoHeight / 2 + 1;
		var xUpRight = xDownRight;
		var yUpRight = yUpLeft;
		
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
		var startString = "";
		var annoBorder = 0;
		if (xm > 0 && ym < 0)
		{
			ym = annoSmallHeight * -0.5 + yDiff * -1 + annoHeight * -0.5 + annoArrowSize * -1;
			arrowStringGlobal = arrowColorDownLeft;
			endStringGlobal2 = startString.concat(yDownLeft, opx, opx, xDownLeft);
			annoBorder = annoArrowSize / 2;
		}
		else if (xm < 0 && ym < 0)
		{
			ym = annoSmallHeight * -0.5 + yDiff * -1 + annoHeight * -0.5 + annoArrowSize * -1;
			xm = annoSmallWidth * -0.5 + xDiff * -1 + annoWidth * -0.5; 
			arrowStringGlobal = arrowColorDownRight;
			endStringGlobal2 = startString.concat(yDownRight, opx, opx, xDownRight);
			annoBorder = annoArrowSize / 2;
		}
		else if (xm < 0 && ym > 0)
		{
			xm = annoSmallWidth * -0.5 + xDiff * -1 + annoWidth * -0.5;
			arrowStringGlobal = arrowColorUpRight;
			endStringGlobal2 = startString.concat(yUpRight, opx, opx, xUpRight);
			annoBorder = annoArrowSize / 2;
		}
		else if (xm > 0 && ym > 0)
		{
			arrowStringGlobal = arrowColorUpLeft;
			endStringGlobal2 = startString.concat(yUpLeft, opx, opx, xUpLeft);
			annoBorder = annoArrowSize / 2;
		}
		else if (xm == 0)
		{
			annoBorder = annoArrowSize;
			xm = xDiff * -1;
			if (ym < 0)
			{
				ym = annoSmallHeight * -0.5 + yDiff * -1 + annoHeight * -0.5 + annoArrowSize * -1;
				arrowStringGlobal = arrowColorDown;
				endStringGlobal2 = startString.concat(yDown, opx, opx, xDown);
			}
			else if (ym > 0)
			{
				arrowStringGlobal = arrowColorUp;
				endStringGlobal2 = startString.concat(yUp, opx, opx, xUp);
			}
		}
		else if (ym == 0)
		{
			annoBorder = annoArrowSize;
			ym = yDiff * -1;
			if (xm < 0)
			{
				xm = annoSmallWidth * -0.5 + xDiff * -1 + annoWidth * -0.5 + annoArrowSize * -1;
				arrowStringGlobal = arrowColorRight;
				endStringGlobal2 = startString.concat(yRight, opx, opx, xRight);
			}
			else if (xm > 0)
			{
				arrowStringGlobal = arrowColorLeft;
				endStringGlobal2 = startString.concat(yLeft, opx, opx, xLeft);
			}
		}
		xDiff = xDiff.toString();
		yDiff = yDiff.toString();
		xDiff = xDiff.concat("px");
		yDiff = yDiff.concat("px");
		var xmString = xm.toString();
		var ymString = ym.toString();
		var opx = "0px ";
		xmString = xmString.concat("px");
		ymString = ymString.concat("px");
		$(callerName.concat(angka)).css('z-index', '200');
		//$(callerName2.concat(angka)).css('z-index', '999');
		if (unInvisible)
		{
			callerGlobal = callerName.concat(angka);
			callerGlobal2 = callerName2.concat(angka);
			callerGlobal4 = callerName4.concat(angka);
			$(callerGlobal2).css('margin', endStringGlobal2);
			annoBorder = annoBorder.toString();
			annoBorder = annoBorder.concat("px solid");
			$(callerGlobal2).css('border', annoBorder);
			$(callerGlobal2).css('border-color', arrowStringGlobal);
			universalK5 = parseInt(angka);
			window.setTimeout
			(
				function()
				{
					//UpdateZoomBar(1);
					var halfScreenX = 1 / (2 * panorama.viewport.getZoom());
					var halfScreenY = halfScreenX * screenHeight / screenWidth;
					var partialCreditX2 = 0;
					var partialCreditY2 = 0;
					partialCreditX2 = annoWidth / 2 * halfScreenX / (screenWidth / 2);
					partialCreditY2 = annoHeight / 2 * halfScreenY / (screenHeight / 2);
					var annoCoord = annotations[universalK5];
					var ccenter = panorama.viewport.getCenter();
					var top = ccenter.y - halfScreenY;
					var bottom = ccenter.y + halfScreenY;
					var left = ccenter.x - halfScreenX;
					var right = ccenter.x + halfScreenX;
					if (!(annoCoord.x + partialCreditX2 > right || annoCoord.x - partialCreditX2 < left  || annoCoord.y + partialCreditY2 > bottom || annoCoord.y - partialCreditY2 < top) && annoExit[universalK5] == false)
					{
						$(callerGlobal).fadeIn();
						$(callerGlobal2).fadeIn();
						$(callerGlobal4).fadeIn(300);
					}
					else 
					{
						///////transfiguratio = false;
						activeAnnotation = -1;
						CheckAnnotations();
						annoFadeOutLock = false;
					}
					unInvisible = false;
				},
				501
			);
		}
		globalIdentifier = angka;
		$(callerName.concat(angka)).animate
		(
			{
				paddingTop: yDiff,
				paddingBottom: yDiff,
				paddingLeft: xDiff,
				paddingRight: xDiff,
				margin: ymString.concat(" 0px 0px ", xmString)
			},
			500,
			"swing",
			function()
			{
				window.setTimeout
				(
					function()
					{
						doNotZoomIn = false;
						prepareToStopZoomingIn = false;
						UpdateZoomBar(0);
					},
					51
				);
				safetyLock = true;
				var lebar = annoSmallW - 20;
				lebar = lebar.toString();
				lebar = lebar.concat("px");
				var tinggi = annoSmallH - 20;
				tinggi = tinggi.toString();
				tinggi = tinggi.concat("px");
				
				var callerName3 = "#annoContentTextSmall";
				$(callerName3.concat(globalIdentifier)).fadeOut(250);
				
				$(callerName4.concat(angka)).css('width', lebar);
				$(callerName4.concat(angka)).css('height', tinggi);
				$(callerName4.concat(angka)).css('margin', ymString.concat(" 0px 0px ", xmString));
				$(callerName4.concat(angka)).css('padding', '10px 10px 10px 10px');
				$(callerName4.concat(angka)).fadeIn(300);
				clickAgain = true;
				justFromClickAgain = true;
				CheckAnnotations();
				if (checkPolygonsLock)
				{
					checkPolygonsLock = false;
					annotationMouse = false;
				}
				transfiguratio = false; ///////
				$(callerName.concat(angka)).css('z-index', '300');
				$(callerName2.concat(angka)).css('z-index', '199');
				$(callerName3.concat(angka)).css('z-index', '300');
				$(callerName4.concat(angka)).css('z-index', '300');
			}
		);
		//$(callerName4.concat(angka)).css('padding-top', yDiff);
		//$(callerName4.concat(angka)).css('padding-bottom', yDiff);
		//$(callerName4.concat(angka)).css('padding-left', xDiff);
		//$(callerName4.concat(angka)).css('padding-right', xDiff);
	}
	else if (postExitAnno)
	{
		postExitAnno = false;
	}	
}

function EnterAnno(tracker)
{
	annotationMouse = true;
	if (!annoFadeOutLock || activeAnnotation > -1)
	{
		var callerName = "#annoContentSmall";
		targetId = tracker.target.id;
		var angka = targetId.substring(4);
		ComputeAnnotations(1);
		window.setTimeout
		(
			function()
			{
				var callerName = "#annoContentSmall";
				var callerName2 = "#annoContentArrow";
				var callerName3 = "#annoContentTextSmall";
				var angka = targetId.substring(4);
				$(callerName.concat(angka)).css('z-index', '1000');
				$(callerName3.concat(angka)).css('z-index', '1000');
				$(callerName2.concat(angka)).css('z-index', '200');
				$(callerName.concat(angka)).fadeIn(500);
				if (!clickException)
				{
					$(callerName2.concat(angka)).fadeIn(500);
				}
				else
				{
					clickException = false;
					globalIdentifier = angka;
					window.setTimeout
					(
						function()
						{
							var callerName2 = "#annoContentArrow";
							$(callerName2.concat(globalIdentifier)).fadeIn(500);
						},
						500
					);
				}
				if (activeAnnotation != parseInt(angka))
				{
					$(callerName3.concat(angka)).fadeIn(500);	
				}
			},
			11
		);
		if (activeAnnotation > -1)
		{
			duringActive = true;
		}
	}
}

function ExitAnno(tracker, id)
{
	var targetId2 = tracker.target.id;
	var targetId = tracker.target.id;
	var angka = "";
	angka = targetId.substring(4);
	if (parseInt(angka) == activeAnnotation && !swapping)
	{
		safetyLock = false;
	}
	if (!annoFadeOutLock || !annotationMouse || duringActive || checkPolygonsLock)
	{
		annoEnlarged = false;
		clickSem = false;
		endStringGlobal = "";
		var callerName = "#annoContentSmall";
		var callerName2 = "#annoContentArrow";
		var callerName3 = "#annoContentTextSmall";
		var callerName4 = "#annoContentTextLarge";
		if ((id <= -1 || duringActive) && !swapping)
		{
			targetId = tracker.target.id;
			angka = targetId.substring(4);
			duringActive = false;
			duringActive2 = true;
			if (onAnnoClick[parseInt(angka)])
			{
				onAnnoClick[parseInt(angka)] = false;
				RestoreAnno(parseInt(angka));
			}
		}
		else if (!duringActive || swapping)
		{
			targetId = "anno";
			targetId = targetId.concat(id.toString());
			angka = id;
			angka = angka.toString();
			//activeAnnotation = -1;
			if (swapping)
			{
				globalId = angka;
				if (onAnnoClick[parseInt(angka)])
				{
					onAnnoClick[parseInt(angka)] = false;
					RestoreAnno(parseInt(angka));
				}
			}
		}
		lockReset = true;
		$(callerName.concat(angka)).fadeOut(500);
		$(callerName2.concat(angka)).fadeOut(500);
		$(callerName3.concat(angka)).fadeOut(500);
		$(callerName4.concat(angka)).fadeOut(500);
		deactivatingAnnotation = activeAnnotation;
		if (onAnnoClick[parseInt(angka)])
		{
			onAnnoClick[parseInt(angka)] = false;
			RestoreAnno(parseInt(angka));
		}
		///////CheckAnnotations();
		postExitAnno2 = true;
		window.setTimeout
		(
			function()
			{
				postExitAnno2 = false;
			},
			555
		);
		window.setTimeout
		(
			function()
			{
				postClick = false;
				if (owstr != "")
				{
					var callerName = "#annoContentSmall";
					var callerName2 = "#annoContentArrow";
					var callerName3 = "#annoContentTextSmall";
					var callerName4 = "#annoContentTextLarge";
					var angka = targetId.substring(4);
					if (swapping)
					{
						angka = globalId;
						globalId = "";
					}
					//alert(callerName.concat(angka));
					$(callerName.concat(angka)).css('width', owstr);
					$(callerName.concat(angka)).css('height', ohstr);
					$(callerName.concat(angka)).css('padding-left', "0px");
					$(callerName.concat(angka)).css('padding-top', "0px");
					$(callerName.concat(angka)).css('padding-right', "0px");
					$(callerName.concat(angka)).css('padding-bottom', "0px");
					var endString = "";
					endString = endString.concat(mtstr, "0px", "0px", mlstr);
					$(callerName.concat(angka)).css('margin', endString);
					$(callerName.concat(angka)).css('z-index', '0');
					//ComputeAnnotations(1);
					if (!duringActive2 && !swapping && !safetyLock)
					{
						activeAnnotation = -1;
					}
					else if (!swapping)
					{
						duringActive2 = false;
					}
					if (swapping)
					{
						swapping = false;
					}
				}
				if (restoratio)
				{
					restoratio = false;
					annoFadeOutLock = false;
					postExitAnno = false;
					annotationMouse = false;
					clickSem = false;
				}
				var angka2 = parseInt(angka);
				if (transfiguratio && !hoverLock[angka2])
				{
					CheckAnnotations();
					var halfScreenX = 1 / (2 * panorama.viewport.getZoom());
					var halfScreenY = halfScreenX * screenHeight / screenWidth;
					var partialCreditX2 = 0;
					var partialCreditY2 = 0;
					partialCreditX2 = annoWidth / 2 * halfScreenX / (screenWidth / 2);
					partialCreditY2 = annoHeight / 2 * halfScreenY / (screenHeight / 2);
					var annoCoord = annotations[angka2];
					var ccenter = panorama.viewport.getCenter();
					var top = ccenter.y - halfScreenY;
					var bottom = ccenter.y + halfScreenY;
					var left = ccenter.x - halfScreenX;
					var right = ccenter.x + halfScreenX;
					if (!(annoCoord.x + partialCreditX2 > right || annoCoord.x - partialCreditX2 < left  || annoCoord.y + partialCreditY2 > bottom || annoCoord.y - partialCreditY2 < top))
					{
						transfiguratio = false;
						activeAnnotation = -1;
						annoFadeOutLock = false;
						unInvisible = true;
						clickFromExitAnno = true;
						ClickFunction(annoTracker[universalK4]);
					}
				}
			},
			555
		);
		if (!postExitAnno)
		{
			annotationMouse = false;
		}
		if (!annotationMouse)
		{
			//annoFadeOutLock = false;
		}
	}
	else if (annotationMouse)
	{
		annotationMouse = false;
	}
}

function SetTrackers()
{
	numberOfPoints = annotations.length;
	var weblinkIdPrefix = "weblink";
	initialLinkColor = $('#weblink0').css('background-color');
	if (universalK3 < numberOfPoints)
	{
		annoTracker[universalK3] = new Seadragon.MouseTracker(annotationPoints[universalK3]);
		annoTracker2[universalK3] = new Seadragon.MouseTracker(annotationContentTextLarge[universalK3]);
		annoTracker3[universalK3] = new Seadragon.MouseTracker(annotationContentTextSmall[universalK3]);
		annoTracker4[universalK3] = new Seadragon.MouseTracker(annotationContentSmall[universalK3]);
		annoTracker5[universalK3] = new Seadragon.MouseTracker(annotationContentArrow[universalK3]);
		annoTracker2[universalK3].enterHandler =
		function(tracker, position, buttonDownElmt, buttonDownAny)
		{
			annotationMouse = true;
		};
		annoTracker2[universalK3].exitHandler =
		function(tracker, position, buttonDownElmt, buttonDownAny)
		{
			annotationMouse = false;
		};
		annoTracker2[universalK3].clickHandler =
		function(tracker, position, quick, shift)
		{	
			var targetId2 = tracker.target.id;
			var angka = targetId2.substring(20);
			var wip = "#weblink";
			if ($(wip.concat(angka)).css('background-color') != initialLinkColor)
			{
				/* http://stackoverflow.com/questions/4907843/open-url-in-new-tab-using-javascript */
				var win = window.open(annoWeblinks[parseInt(angka)], '_blank');
  				win.focus();
			}
		}
		annoTracker3[universalK3].enterHandler =
		function(tracker, position, buttonDownElmt, buttonDownAny)
		{
			annotationMouse = true;
		};
		annoTracker3[universalK3].exitHandler =
		function(tracker, position, buttonDownElmt, buttonDownAny)
		{
			annotationMouse = false;
		};
		annoTracker4[universalK3].enterHandler =
		function(tracker, position, buttonDownElmt, buttonDownAny)
		{
			annotationMouse = true;
		};
		annoTracker4[universalK3].exitHandler =
		function(tracker, position, buttonDownElmt, buttonDownAny)
		{
			annotationMouse = false;
		};
		annoTracker5[universalK3].enterHandler =
		function(tracker, position, buttonDownElmt, buttonDownAny)
		{
			annotationMouse = true;
		};
		annoTracker5[universalK3].exitHandler =
		function(tracker, position, buttonDownElmt, buttonDownAny)
		{
			annotationMouse = false;
		};
		
		annoTracker[universalK3].enterHandler = 
		function(tracker, position, buttonDownElmt, buttonDownAny) 
		{
			var targetId2 = tracker.target.id;
			var angka = targetId2.substring(4);
			angka = parseInt(angka);
			annotationMouse = true;
			
			ExpandAnno(angka);
			
			if ((activeAnnotation != angka || activeAnnotation == -1) && !hoverLock[angka] && !checkPolygonsLock)
			{
				EnterAnno(tracker);
			}
		};
		annoTracker[universalK3].exitHandler = 
		function(tracker, position, buttonDownElmt, buttonDownAny) 
		{
			var targetId2 = tracker.target.id;
			var angka = targetId.substring(4);
			angka = parseInt(angka);
			annotationMouse = false;
		
			RestoreAnno(angka);
			
			if ((duringActive && activeAnnotation > -1) && activeAnnotation != angka)
			{
				ExitAnno(tracker, activeAnnotation);
			}
			else if (activeAnnotation != angka && activeAnnotation <= -1 && !duringActive)
			{
				ExitAnno(tracker, -1);		
				postExitNotExit = false;
			}
		};
		annoTracker[universalK3].clickHandler =
		function(tracker, position, quick, shift)
		{	
			var targetId2 = tracker.target.id;
			var angka = targetId2.substring(4);
			angka = parseInt(angka);
			if (!hoverLock[angka] && clickAgain && !checkPolygonsLock)
			{
				ClickFunction(tracker);
			}
		};
		
		annoTracker[universalK3].setTracking(true);
		annoTracker2[universalK3].setTracking(true);
		annoTracker3[universalK3].setTracking(true);
		annoTracker4[universalK3].setTracking(true);
		annoTracker5[universalK3].setTracking(true);
		
		window.setTimeout
		(
			function()
			{
				universalK3 = universalK3 + 1;
				SetTrackers();
			},
			50
		);
	}
	else
	{
		universalK3 = 0;
	}
}

function ExpandAnno(angka)
{
	var angkaString = angka.toString();
	var callStr = "#anno";
	var callString = "#annoRing";
		
	var targetSize = 40;
	var targetSizeString = targetSize.toString();
	var TS = targetSizeString.concat("px");
				
	var targetSize2 = 30;
	var targetSizeString2 = targetSize2.toString();
	var TS2 = targetSizeString2.concat("px");
	restoreSize2 = targetSize2;
			
	if (initialSize == 0)
	{
		initialSize = parseInt($(callStr.concat(angkaString)).css('width'));
		initialMargin = parseInt($(callString.concat(angkaString)).css('margin-top'));
	}
			
	var delta = (initialSize - targetSize2) / 2;
	var delta2 = delta + 1;
	var deltaString = delta2.toString();
	var FDS = deltaString.concat('px');
			
	var currentMargin = initialMargin + delta;
	var currentMarginString = currentMargin.toString();
	var CMS = currentMarginString.concat('px');
	restoreMargin2 = currentMargin;
	
	var marginString = FDS.concat(' 0px 0px ', FDS);
	var marginString2 = CMS.concat(' 0px 0px ', CMS);
			
			
	$(callString.concat(angkaString)).animate
	(
		{
			width: TS,
			height: TS,
			borderBottomColor: '#FFFF00',
			borderLeftColor: '#FFFF00',
			borderRightColor: '#FFFF00',
			borderTopColor: '#FFFF00',
			margin: marginString2
		},
		250,
		"swing",
		function() {}
	);
				
	$(callStr.concat(angkaString)).animate
	(
		{
			width: TS2,
			height: TS2,
			backgroundColor: '#FFCC00',
			margin: marginString
		},
		250,
		"swing",
		function() {}
	);
}

function RestoreAnno(angka)
{
	var angkaString = angka.toString();
	var callStr = "#anno";
	var callString = "#annoRing";
		
	var targetSize = 30;
	var targetSizeString = targetSize.toString();
	var TS = targetSizeString.concat("px");
			
	var targetSize2 = 20;
	var targetSizeString2 = targetSize2.toString();
	var TS2 = targetSizeString2.concat("px");
				
	if (initialSize2 == 0)
	{
		initialSize2 = restoreSize2;
		initialMargin2 = restoreMargin2;
	}
			
	var delta = (initialSize2 - targetSize2) / 2;
	var delta2 = delta - 4;
	var deltaString = delta2.toString();
	var FDS = deltaString.concat('px');
			
	var currentMargin = initialMargin2 + delta;
	var currentMarginString = currentMargin.toString();
	var CMS = currentMarginString.concat('px');
			
	var marginString = FDS.concat(' 0px 0px ', FDS);
	var marginString2 = CMS.concat(' 0px 0px ', CMS);
			
	if (!onAnnoClick[angka])
	{
		$(callString.concat(angkaString)).animate
		(
			{
				width: TS,
				height: TS,
				borderBottomColor: '#FFCC00',
				borderLeftColor: '#FFCC00',
				borderRightColor: '#FFCC00',
				borderTopColor: '#FFCC00',
				margin: marginString2
			},
			250,
			"swing",
			function() {}
		);
				
		$(callStr.concat(angkaString)).animate
		(
			{
				width: TS2,
				height: TS2,
				backgroundColor: '#FF9900',
				margin: marginString
			},
			250,
			"swing",
			function() {}
		);
	}
}