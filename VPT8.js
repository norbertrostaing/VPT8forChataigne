// using https://wiki.munichmakerlab.de/images/1/17/UNOFFICIAL_X32_OSC_REMOTE_PROTOCOL_(1).pdf

var myParameters = {};

function oscEvent(address, args) {
	script.log(" Message received : " + address);
}


function sourceVideoClip(number, s) {  // s name of video
	local.send("/sources/"+number+"video/clip", s);
}

function sourceVideoClipnr(number, n) {  // i (relative position in sourcemenu, 0:off, 1:first video, 2:second video etc)
	local.send("/sources/"+number+"video/clipnr", n);
}

function sourceVideoRate(number, v) {  // f (1. normal speed, -1 normal speed backwards)
	local.send("/sources/"+number+"video/rate", v);
}

function sourceVideoLoop(number, v) {  // i (0:loop off, 1:loop,2:palindrome(loop backnforth),3:loop once)
	local.send("/sources/"+number+"video/loop", v);
}

function sourceVideoXfade(number, v) {  // f (0.,1.)
	local.send("/sources/"+number+"video/xfade", v);
}

function sourceVideoResolution(number, v) {  // i (0:full,1:2/3,2:1/2,3:1/3,4:1/4,5:1/8,6:1/16)
	local.send("/sources/"+number+"video/resolution", v);
}

function sourceVideoTrig(number) {  // t
	local.send("/sources/"+number+"video/trig");
}

function sourceVideoOn(number, v) {  // i (0,1)
	local.send("/sources/"+number+"video/on", v);
}

function sourceVideoVol(number, v) {  // f (0.,1.)
	local.send("/sources/"+number+"video/vol", v);
}

function sourceVideoPan(number, v) {  // f (0.,1.)
	local.send("/sources/"+number+"video/pan", v);
}

function sourceVideoLoopreport(number, v) {  // i (0,1)
	local.send("/sources/"+number+"video/loopreport", v);
}

function sourceVideoLast(number) {  // t play last clip in the menu (often used together with recording live source directly to a source folder)
	local.send("/sources/"+number+"video/last");
}

function sourceVideoRandom(number) {  // t
	local.send("/sources/"+number+"video/random");
}

function sourceVideoScrub(number, v) {  // f (0.,1.)
	local.send("/sources/"+number+"video/scrub", v);
}

function sourceVideoStart(number) {  // t
	local.send("/sources/"+number+"video/start");
}

function sourceVideoStop(number) {  // t
	local.send("/sources/"+number+"video/stop");
}

function sourceVideoIn(number, v) {  // f (0.,1.) relative in-point
	local.send("/sources/"+number+"video/in", v);
}

function sourceVideoOut(number, v) {  // f (0.,1.) relative out-point
	local.send("/sources/"+number+"video/out", v);
}

function sourceVideoLoopreset(number) {  // t
	local.send("/sources/"+number+"video/loopreset");
}

function sourceVideoPlay(number, v) {  // i (0,1) activate playlist
	local.send("/sources/"+number+"video/play", v);
}

function sourceVideoCliptime(number, v) {  // i (0,1) report cliptime
	local.send("/sources/"+number+"video/cliptime", v);
}

function sourceVideoAlpha(number, v) {  // i (0,1) use video with alpha channel (default:0)
	local.send("/sources/"+number+"video/alpha", v);
}






function sourceStillClip(name, v) { // s
	local.send("/sources/"+name+"/clip" ,v);
}

function sourceStillClipnr(name, v) { // i
	local.send("/sources/"+name+"/clipnr" ,v);
}

function sourceStillXfade(name, v) { // f
	local.send("/sources/"+name+"/xfade" ,v);
}

function sourceStillResolution(name, v) { // i
	local.send("/sources/"+name+"/resolution" ,v);
}

function sourceStillRefresh(name, v) { // i (0:33ms,1:100ms,2:500ms,3:2000ms) how often still image is refreshed
	local.send("/sources/"+name+"/refresh" ,v);
}

function sourceStillOn(name, v) { // i
	local.send("/sources/"+name+"/on" ,v);
}

function sourceStillPlay(name, v) { // i
	local.send("/sources/"+name+"/play" ,v);
}

function sourceStillSlide_length(name, v) { // f (time in seconds)
	local.send("/sources/"+name+"/slide_length" ,v);
}








function sourceMixA(name, v) { // // i (0:off,1:1video,2:2video etc according to sourcelist in menu)
	local.send("/sources/"+name+"/A", v);
}

function sourceMixB(name, v) { // // i (0:off,1:1video,2:2video etc according to sourcelist in menu)
	local.send("/sources/"+name+"/B", v);
}

function sourceMixMix(name, v) { // // f (0.,1.)
	local.send("/sources/"+name+"/mix", v);
}

function sourceMixMixtype(name, v) { // // i (blendmode 0:normal alphablend, the others according to blendmode list in menu)
	local.send("/sources/"+name+"/mixtype", v);
}









function sourceCamOn (number, v) { // // i (0,1)
	local.send("/sources/"+number+"cam/on", v);
}

function sourceCamRec (number, v) { // // i (0:off,1:on)
	local.send("/sources/"+number+"cam/rec", v);
}

function sourceCamRecdest (number, v) { // // (0:none, 1-8:1video-8video)
	local.send("/sources/"+number+"cam/recdest", v);
}





function SourceSyphonOn(number, v) { // i (0,1)
	local.send("/sources/"+number+"syphon/on", v);
}
function SourceSyphonUpdate(number, v) { // t (check for new syphon servers)
	local.send("/sources/"+number+"syphon/update", v);
}
function SourceSyphonServer(number, v) { // s servername
	local.send("/sources/"+number+"syphon/server", v);
}
function SourceSyphonServerlist(number, v) { // i (from server list)
	local.send("/sources/"+number+"syphon/serverlist", v);
}


function SourceSpoutOn(number, v) { // i (0,1)
	local.send("/sources/"+number+"spout/on", v);
}
function SourceSpoutUpdate(number, v) { // t (check for new spout servers)
	local.send("/sources/"+number+"spout/update", v);
}
function SourceSpoutServer(number, v) { // s servername
	local.send("/sources/"+number+"spout/server", v);
}
function SourceSpoutServerlist(number, v) { // i (from server list)
	local.send("/sources/"+number+"spout/serverlist", v);
}




function layerFade (layer, v) {// f (0.,1.)
	local.send("/"+layer+"layer/fade", v);
}

function layerRgb (layer, color) {// color
	var arr = color.get();
	local.send("/"+layer+"layer/rgb", arr[0], arr[1], arr[2]);
}

function layerColor (layer, color) {// f f f f (rgba 0.,1.)
	var arr = color.get();
	local.send("/"+layer+"layer/color", arr[0], arr[1], arr[2], arr[3]);
}

function layerDcolor (layer, v) {// i i i (rgb 0,255)
	var arr = color.get();
	local.send("/"+layer+"layer/dcolor", Math.round(arr[0]*255), Math.round(arr[1]*255), Math.round(arr[2]*255));
}

function layerRed (layer, v) {// f (0.,1.)
	local.send("/"+layer+"layer/red", v);
}

function layerGreen (layer, v) {// f (0.,1.)
	local.send("/"+layer+"layer/green", v);
}

function layerBlue (layer, v) {// f (0.,1.)
	local.send("/"+layer+"layer/blue", v);
}

function layerBlendmode (layer, v) {// i (0:normal, 1:additive, 2:multiply)
	local.send("/"+layer+"layer/blendmode", v);
}

function layerLayername (layer, v) {// s
	local.send("/"+layer+"layer/layername", v);
}

function layerLayerorder (layer, v) {// i
	local.send("/"+layer+"layer/layerorder", v);
}

function layerScalex (layer, v) {// f
	local.send("/"+layer+"layer/scalex", v);
}

function layerScaley (layer, v) {// f
	local.send("/"+layer+"layer/scaley", v);
}

function layerPosx (layer, v) {// f
	local.send("/"+layer+"layer/posx", v);
}

function layerPosy (layer, v) {// f
	local.send("/"+layer+"layer/posy", v);
}

function layerCornerpinUpperLeft (layer, x, y) {// f f (x y 0.,1.)
	local.send("/"+layer+"layer/cornerpin/upper_left", x, y);
}

function layerCornerpinLowerLeft (layer, x, y) {// f f (x y 0.,1.)
	local.send("/"+layer+"layer/cornerpin/lower_left", x, y);
}

function layerCornerpinUpperRight (layer, x, y) {// f f (x y 0.,1.)
	local.send("/"+layer+"layer/cornerpin/upper_right", x, y);
}

function layerCornerpinLowerRight (layer, x, y) {// f f (x y 0.,1.)
	local.send("/"+layer+"layer/cornerpin/lower_right", x, y);
}

function layerSource (layer, v) {// s (1video,2video etc)
	local.send("/"+layer+"layer/source", v);
}

function layerFlipOn (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/flip/on", v);
}

function layerFlipFliptype (layer, v) {// i (0: normal,1:hor flip,2:ver flip,3:hor+ver flip)
	local.send("/"+layer+"layer/flip/fliptype", v);
}

function layerTileOn (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/tile/on", v);
}

function layerTileXtile (layer, v) {// i (0,14 0:normal, 1: 1/2, 2: 2/2, 3: 1/3,……14: 5/5)
	local.send("/"+layer+"layer/tile/xtile", v);
}

function layerTileYtile (layer, v) {// i (0,14 0:normal, 1: 1/2, 2: 2/2, 3: 1/3,……14: 5/5)
	local.send("/"+layer+"layer/tile/ytile", v);
}

function layerZoomOn (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/zoom/on", v);
}

function layerZoomXzoom (layer, v) {// f
	local.send("/"+layer+"layer/zoom/xzoom", v);
}

function layerZoomYzoom (layer, v) {// f
	local.send("/"+layer+"layer/zoom/yzoom", v);
}

function layerZoomXanchor (layer, v) {// f
	local.send("/"+layer+"layer/zoom/xanchor", v);
}

function layerZoomYanchor (layer, v) {// f
	local.send("/"+layer+"layer/zoom/yanchor", v);
}

function layerZoomRota (layer, v) {// f
	local.send("/"+layer+"layer/zoom/rota", v);
}

function layerBlurOn (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/blur/on", v);
}

function layerBlurBlur (layer, v) {// f
	local.send("/"+layer+"layer/blur/blur", v);
}

function layerMblurOn (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/mblur/on", v);
}

function layerMblurMblur (layer, v) {// f
	local.send("/"+layer+"layer/mblur/mblur", v);
}

function layerBrcosaOn (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/brcosa/on", v);
}

function layerBrcosaBrightness (layer, v) {// f
	local.send("/"+layer+"layer/brcosa/brightness", v);
}

function layerBrcosaContrast (layer, v) {// f
	local.send("/"+layer+"layer/brcosa/contrast", v);
}

function layerBrcosaSaturation (layer, v) {// f
	local.send("/"+layer+"layer/brcosa/saturation", v);
}

function layerMaskOn (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/mask/on", v);
}

function layerMaskSource (layer, v) {// s (maskname)
	local.send("/"+layer+"layer/mask/source", v);
}

function layerMaskInv (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/mask/inv", v);
}

function layerMaskBlur_on (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/mask/blur_on", v);
}

function layerMaskBlur (layer, v) {// f
	local.send("/"+layer+"layer/mask/blur", v);
}

function layerMaskSwitch (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/mask/switch", v);
}

function layerMaskMoving (layer, v) {// i (0,1) use moving mask (requires a quicktime video in mask folder)
	local.send("/"+layer+"layer/mask/moving", v);
}

function layerEdgeblendOn (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/edgeblend/on", v);
}

function layerEdgeblendLeft (layer, v) {// f (0.,1.)
	local.send("/"+layer+"layer/edgeblend/left", v);
}

function layerEdgeblendDown (layer, v) {// f (0.,1.)
	local.send("/"+layer+"layer/edgeblend/down", v);
}

function layerEdgeblendRight (layer, v) {// f (0.,1.)
	local.send("/"+layer+"layer/edgeblend/right", v);
}

function layerEdgeblendUp (layer, v) {// f (0.,1.)
	local.send("/"+layer+"layer/edgeblend/up", v);
}

function layerEdgeblendInv (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/edgeblend/inv", v);
}

function layerMeshOn (layer, v) {// i (0,1)
	local.send("/"+layer+"layer/mesh/on", v);
}

function layerMeshGridsize (layer, v) {// i
	local.send("/"+layer+"layer/mesh/gridsize", v);
}

function layerMeshTrig (layer, v) {//
	local.send("/"+layer+"layer/mesh/trig", v);
}




function presetGoto (n) { // i    go to specified preset
	local.send("/preset", n);
}

function presetPrevNext () { // t
	local.send("/presetprev");
}

function presetNextPrev () { // t
	local.send("/presetnext");
}


function cueGoto (n) {// i    go to specified cue
	local.send("/cue", n);
}

function cueNext () {// t
	local.send("/cuenext");
}

function cuePrev () {// t
	local.send("/cueprev");
}

function cueMode (v) {// i (0:edit,1:play)
	local.send("/cueplay", v);
}


function sourcePresetGoto (v) { // i    go to specified source preset
	local.send("/sourcepreset", v);
}

function sourcePresetNext () { // t
	local.send("/sourcenext");
}

function sourcePresetPrev () { // t
	local.send("/sourceprev");
}


function LFOSpeed (v) { // f 1. is normal speed
	local.send("/speed", v);
}

function LFOPhase (v) { // f
	local.send("/phase", v);
}

function LFOVal (v) { // f
	local.send("/val", v);
}

function LFORange (v) { // f
	local.send("/range", v);
}

function LFOLfomix (v) { // f (0.,1.)
	local.send("/lfomix", v);
}

function LFOOn (v) { // i (0,1)
	local.send("/on", v);
}

function LFOWave (v) { // (0:sine,1:ramp,2:triangle,3:square)
	local.send("/wave", v);
}

function LFOWaveinv (v) { // i (0,1)
	local.send("/waveinv", v);
}
