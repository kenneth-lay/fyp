      //var SeadragonUtils = org.gigapan.seadragon.SeadragonUtils;
      var defaultGigapanId = 66020;
      var previousGigapanId = 0;
      var nextdirection='initialize';
      var gigapan;
      var search_id = Seadragon.Utils.getUrlParameter('id');
      if (search_id != null){defaultGigapanId=search_id;}
      var viewer = null;
      var bx0,by0,bx1,by1; //the variables that contain the bounds
      var width;
      var height;
      var gpid;
      
      $.ajaxSetup({
         type: 'GET',
         dataType: 'jsonp',
         timeout: 3000,
         cache: false,
         global: false
      });

        function getUrlParam(param)
        {
            param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
            var regex = new RegExp("[?&]" + param + "=([^&#]*)");
            var url   = decodeURIComponent(window.location.href);
            var match = regex.exec(url);
            return match ? match[1] : "";
        }           

        function SetCanvasDimensionsAndBounds()
        {
            width = getUrlParam("w");
            height = getUrlParam("h");
            if(!width || !height)
            {
                // Window dimensions: 
                if (window.innerWidth) {
                width=window.innerWidth;
                }
                else if (document.documentElement && document.documentElement.clientWidth) {
                width=document.documentElement.clientWidth;
                }
                else if (document.body) {
                width=document.body.clientWidth;
                }
                if (window.innerHeight) {
                height=window.innerHeight;
                }
                else if (document.documentElement && document.documentElement.clientHeight) {
                height=document.documentElement.clientHeight;
                }
                else if (document.body) {
                height=document.body.clientHeight;
                }        
            }

            bx0 = getUrlParam("x0");
            by0 = getUrlParam("y0");
            bx1 = getUrlParam("x1");
            by1 = getUrlParam("y1");
            
            //reformat to width and height
            if(bx0)
            {
                bx1 = bx1 - bx0;
                by1 = by1 - by0;
            }
        }

      function afterCreation(viewer) {            
            if(bx0)
            {
                //reparameterize to javascript viewer coords and set viewport
                var re = new Seadragon.Rect(parseFloat(bx0),parseFloat(by0),parseFloat(bx1),parseFloat(by1));
                var aspect = viewer.source.width / viewer.source.height;
                if(aspect < 1)
                {
                    re.x *= aspect;
                    re.width *= aspect;
                }
                else
                {
                    re.y /= aspect;
                    re.height /= aspect;
                }
                viewer.viewport.fitBounds(re, true);
            }

                //get rid of the buttons on iphone
		if(true){ //always get rid of buttons (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
   		  viewer.clearControls(); //this is bad as it removes everything, including other static controls
                  //viewer.getNavControl().removeChild(viewer.getNavControl().childNodes[2]);
                  //viewer.getNavControl().removeChild(viewer.getNavControl().childNodes[2]);
                  //viewer.getNavControl().removeChild(viewer.getNavControl().childNodes[1]);
                  //viewer.getNavControl().removeChild(viewer.getNavControl().childNodes[0]);
 
		} else {
		  //Get rid of the "full screen" button, since it already cover entire frame
                  //viewer.getNavControl().removeChild(viewer.getNavControl().childNodes[3]);
                  //viewer.getNavControl().childNodes[3].type = "a"; //PVS not working
                  //viewer.getNavControl().childNodes[3].href = "http://www.cnn.com";
		  //Get rid of all other buttons
                  viewer.getNavControl().removeChild(viewer.getNavControl().childNodes[2]);
                  viewer.getNavControl().removeChild(viewer.getNavControl().childNodes[1]);
                  viewer.getNavControl().removeChild(viewer.getNavControl().childNodes[0]);
		}
				
        			
		//Add touch events now		
		document.getElementsByTagName('canvas').item(0).addEventListener("touchstart",startMoving, false);
		document.getElementsByTagName('canvas').item(0).addEventListener("gesturestart",startGesturing, false);
		//document.addEventListener("touchstart",startMoving, false);
		//document.addEventListener("gesturestart",startGesturing, false);
        viewer.addEventListener("touchstart",startMoving, false);
		viewer.addEventListener("gesturestart",startGesturing, false);
        //window.addEventListener("deviceorientation", handleDeviceOrientation, true);
        //window.addEventListener("devicemotion", handleDeviceMotion, true);
	  }

      function startMoving(e){		
	    e.preventDefault();
        touching=true;
        window.removeEventListener('deviceorientation', window.deviceOrientationHandler, true);
        this.startX = e.targetTouches[0].clientX;
		this.startY = e.targetTouches[0].clientY;
		this.centerCoords = new Seadragon.Point(this.startX, this.startY);
		if (e.targetTouches.length == 2){
		  //this.centerCoords = Seadragon.Point(((this.startX+e.targetTouches[1].clientX) / 2), ( (this.startY+e.targetTouches[1].clientY) / 2));
		} else {
	      this.currX = this.startX;
	      this.currY = this.startY;
	      this.addEventListener('touchmove', keepMoving, false);
	      this.addEventListener('touchend', stopMoving, false);
		}
	  }

      function keepMoving(e){
	    e.preventDefault();
		if (e.targetTouches.length != 1)
      	  return false;
		var delta = new Seadragon.Point((this.currX - e.targetTouches[0].clientX),(this.currY - e.targetTouches[0].clientY ));	
		if(delta.x >5 || delta.y >5 || delta.x<-5 || delta.y <-5){	
		  this.currX = e.targetTouches[0].clientX;
		  this.currY = e.targetTouches[0].clientY;
		  delta = viewer.viewport.deltaPointsFromPixels(delta);
		  viewer.viewport.panBy(delta, true);
		}
	  }
	
      function stopMoving(e){
		e.preventDefault();
        touching=false;
        viewer.viewport.applyConstraints();
		this.removeEventListener('touchmove', this.touchMoveHandler, true);
    	this.removeEventListener('touchend', this.touchEndHandler, true);
		return false;
	  }

	  function startGesturing(e){
	    e.preventDefault();
		this.startZoom = viewer.viewport.getZoom(); 
		this.startPoint = new Seadragon.Point(e.position);
		this.addEventListener('gesturechange', keepGesturing, false);
    	this.addEventListener('gestureend', stopGesturing, false);
	  }
		
	  function keepGesturing(e){
	    e.preventDefault();
		// Only interpret gestures when tracking one object.  Otherwise, interpret raw touch events
		// to move the tracked objects.
		var zoomdelta = e.scale;
        viewer.viewport.zoomTo((zoomdelta * this.startZoom));
		return false;		
	  }

      function stopGesturing(e){
	    e.preventDefault();
		//set zooms back to within threshholds
		//viewer.viewport.applyConstraints();
		this.removeEventListener('gesturechange', this.gestureChangeHandler, true);
		this.removeEventListener('gestureend', this.gestureEndHandler, true);
		return false;
	  }
     
      function loadGigapan(gigapanId, viewer)
         {
         // clear the snapshot browser and the various gigapan details
         // clear the viewer
         viewer.close();

         // load the gigapan
         
         $.ajax(
         {
            url: 'http://api.gigapan.org/beta/gigapans/' + gigapanId + '.json',
            
            success: function(gigapanJSON)
               {
               //alert("gigapanId:" + gigapanId + " gigapan['id']:" + gigapan['id']+ "previousGigapanId" + previousGigapanId);
               if (gigapanJSON && gigapanJSON['id'] )
                  {
                  gigapan=gigapanJSON;
                  nextdirection='static';
                  // create the tile source
                  var gigapanSource = new GigapanTileSource(gigapan['id'], gigapan['width'], gigapan['height']);
				  document.title = gigapan['name'];
                  // tell the viewer to open the tile source
                  viewer.openTileSource(gigapanSource);
                  var viewport_size = Seadragon.Utils.getWindowSize();
                  }

               else
                  {
                    alert("Failed to load gigapan " + gigapanId);          
                  }
               }
         });
         }