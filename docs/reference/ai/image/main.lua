local url = "https://th.bing.com/th/id/OIG.1AwVedDzsmOL2HECayrn?pid=ImgGn"
local function networkListener( event )
    if ( event.isError ) then
        print ( "Network error - download failed" )
    else
        local object = event.target
        --object.alpha = 0
        transition.to( object, { xScale = 0.2, yScale=0.2, alpha = 1.0, onComplete = function()
          local function onColorSample( event )
            -- print( "Sampling pixel at position (" .. event.x .. "," .. event.y .. ")" )
            -- print( "R = " .. event.r )
            -- print( "G = " .. event.g )
            -- print( "B = " .. event.b )
            -- print( "A = " .. event.a )
            object.fill.effect = "filter.chromaKey"
            object.fill.effect.sensitivity = 0.1
            object.fill.effect.smoothing = 0.1
            object.fill.effect.color = { event.r,event.g,event.b, event.a }
          end
        local posX, posY = object.x - object.contentWidth/2+4, object.y-object.contentHeight/2+4
        display.colorSample( posX, posY , onColorSample )
        end } )
    end
    -- print ( "event.response.fullPath: ", event.response.fullPath )
    -- print ( "event.response.filename: ", event.response.filename )
    -- print ( "event.response.baseDirectory: ", event.response.baseDirectory )
  end
  --
  local obj = display.loadRemoteImage(url, "GET", networkListener, "testOne.jpg", system.TemporaryDirectory, display.contentCenterX, display.contentCenterY )