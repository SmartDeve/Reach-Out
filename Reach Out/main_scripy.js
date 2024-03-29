'use-strict'
/*
const firebase = require('firebase');
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyDAM3raXoTcVa8viTcBjrLU-AcNpGiJzDc",
    authDomain: "my-project-1-203517.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);
 const socketIds = new Map();
  // Get a reference to the database service
  */


const urlParams = new URLSearchParams(window.location.search);
let answer_details;
let callerUserName;
const My_ID = urlParams.get('my_id');
const callAcceptButton = document.querySelector('#callAccept');
const callRejectButton = document.querySelector('#callReject');
const callEndButton = document.querySelector("#callEnd");
const call_block = document.getElementById("button_block");
const screenShareButton = document.querySelector("#screenShare");
const socket = io("https://reach-out-conference.herokuapp.com", { query: "name="+My_ID});
const localVideo = document.getElementById('localVideo');
let dialogInnerText = document.getElementById('dialogText');
const socketIds = new Map();
const callRequestDialog = document.querySelector('#call_request_dialog');
const audioRequestDialog = document.querySelector('#audio_request_dialog');
//const callRequestModal = M.Modal.init(document.querySelector('.modal'));
//.open();
const remoteVideo = document.getElementById('remoteVideo');
const camButton = document.getElementById('camButton');
const permitButton =document.getElementById('permitted');
const deniedButton = document.getElementById('denied');
const callButton = document.getElementById('callButton');
const userElement = document.createElement('user-obj');
const contactList = document.querySelector('ul');
const caller_mode = document.getElementById('Caller');
const micButton = document.getElementById('micButton');
let dataChannel;
const user_id = document.getElementById('user_id');
const video_caller_mode = document.getElementById('Video_Caller');
const picInPicButton = document.getElementById('test');
const tonePlayer = document.querySelector('audio');
let textArea = document.createElement('textarea');
caller_mode.hidden=true;
video_caller_mode.hidden = true;
callEndButton.hidden = true;
screenShareButton.hidden = true;
micButton.hidden = true;
camButton.hidden = true;


let callDetails;
let isMute = false;
let isCameraOff = false;
let callerName
let isSharingScreen = false;
let myId;
let user_caller_id;
let isCaller = false;
let isCalling = false;
let userDisplayStream;
let rtc_sender_audio;
let rtc_sender_video;
let rtcTranceiever_audio;
let rtcTranceiever_video;
let peerMode = true;
screenShareButton.enabled = false;

audioRequestDialog.open = true;


  document.onmousedown = (e)=>
  {
		if(e.button == 2)
			return false;
	  
	  
	  
  };

/*
localVideo.addEventListener('loadedmetadata',async()=>{
/*  
videoResizer();
if(isCalling=== true){
 
 

}

else {

    socket.emit('send_call_answer',answer_details);



}

});
*/


permitButton.onclick= async()=>
{

    audioRequestDialog.open = false;
    caller_mode.hidden=false;


}


deniedButton.onclick = async()=>
{

    audioRequestDialog.open = false;



}


call_block.onmouseover = async ()=>
{

    screenShareButton.classList.add("scale-in");
    callEndButton.classList.add("scale-in");
    micButton.classList.add("scale-in");
    camButton.classList.add("scale-in");
    screenShareButton.classList.remove("scale-out");
    callEndButton.classList.remove("scale-out");
    micButton.classList.remove("scale-out");
    camButton.classList.remove("scale-out");
}


call_block.onmouseout = async ()=>
{


    screenShareButton.classList.remove("scale-in");
    callEndButton.classList.remove("scale-in");
    micButton.classList.remove("scale-in");
    camButton.classList.remove("scale-in");

    screenShareButton.classList.add("scale-out");
    callEndButton.classList.add("scale-out");
    micButton.classList.add("scale-out");
    camButton.classList.add("scale-out");


}

socket.on('connect',()=>{myId = socket.id;

});

socket.on('user_added',(data)=>
{
/*
    let button = document.createElement('button');
    button.innerText = data.user_name;
    contactList.appendChild(button);
    socketIds.set(data.user_name,data.user_id);
    button.onclick=()=>{

        callDetails = {caller_id:myId,callee_id:socketIds.get(button.innerHTML)};
        callerName = button.innerHTML;


    }
*/
});



/*
database.ref('/user').on('child_added',(data)=>
{
    let name;
    let id;
    let key;
    data.forEach((childSnapshot)=>
    {
        key = childSnapshot.key();
        if(key==='name')
            name = childSnapshot.val();
        else if(key === 'id')
            id = childSnapshot.val();    

    });

    let button = document.createElement('button');
    button.innerHTML =  name;
    button.name = id;
    socketIds.set(id,name);
    contactList.appendChild(button);

})


database.ref('/user').on('child_removed',(data)=>
{
    let id;
    data.forEach((childSnapshot)=>
    {
        key = childSnapshot.key();
       if(key === 'id')
            id = childSnapshot.val();    

    });

    contactList.removeChild(document.getElementById(id));

});



*/

let localStream;


//Caller
const configuration = {iceServers:[{urls:'stun:stun.l.google.com:19302'}]};
pc1 = new RTCPeerConnection(configuration);
/*
 */

pc1.oniceconnectionstatechange= async()=>
{
    if(pc1.iceConnectionState==='disconnected')
        endCall();

}


function endCall(){

    document.body.style.backgroundColor="white";
    callEndButton.hidden = true;
    screenShareButton.hidden = true;
    video_caller_mode.hidden = true;
    caller_mode.hidden = false;
    localStream.getTracks().forEach((track)=>
    {
        track.stop();


    });

}

pc1.onicecandidate = async ({candidate})=>
{
   let sendOBj = {caller:callDetails,candid:candidate} 
   //await onMessage2({candid:candidate});
  
    await socket.emit('server_message',sendOBj);
}

pc1.onnegotiationneeded = async ()=>
{
try{    
//if(pc1.remoteDescription)    
  //  await pc1.setLocalDescription(await pc1.createAnswer());
//else
    await pc1.setLocalDescription(await pc1.createOffer());
    let sendOBj = {caller:callDetails,desc: pc1.localDescription};
    console.log(callDetails);
    await socket.emit('server_message',sendOBj);
}catch(error)
{
console.log(error);
}

}

pc1.ontrack =  async(event) =>
{
   
   
/*
    let videoTrackKind = recievedStream.getVideoTracks()[0].contentHint;

    if(peerMode === true)
        {
            if(remoteVideo.classList.contains('mirror') ===true)    
                remoteVideo.classList.remove('mirror');    
            peerMode = false;
        }
    else if(peerMode === false){
        if(!(remoteVideo.classList.contains('mirror') ===true))    
             remoteVideo.classList.add('mirror');

            peerMode = true;     
    }    
    */
	event.streams[0].getAudioTracks().forEach((track)=>
	{
		console.log(track.kind);
		console.log(track.enabled);
		console.log(track.muted);
		
		
		
		
	});
    remoteVideo.srcObject = event.streams[0];
    remoteVideo.focus();
    screenShareButton.hidden = false;
    callEndButton.hidden = false;
	micButton.hidden = false;
	camButton.hidden = false;

      
    
}

remoteVideo.onloadeddata = ()=>
{
	
	window.scrollTo(0,document.body.scrollHeight);

	
	
}

function onDataRecieved(event)
{

    if(event.data.screenSharingStarted === true)
        {    
        }
    else if(event.data.screenSharingEnded === true)
    {
    }    

}

let onOpenChannelCallback = async(event)=>
    {
        console.log("opened");
        muteButton.disabled = false;



    };


let onClosedChannelCallBack  = async(event)=>
    {
        muteButton.disabled = true;
        
        console.log("closed");


    };
	/*
async function setupDataChannel()
{
    const dataChannelOptions = {
  ordered: false, // do not guarantee order
  maxPacketLifeTime: 3000, // in milliseconds
};

dataChannel = pc1.createDataChannel("channel",dataChannelOptions);
dataChannel.onmessage = onDataRecieved;
dataChannel.onopen = onOpenChannelCallback;
dataChannel.onclose = onClosedChannelCallBack;  

}


function setupMyVideo()
{

    navigator.mediaDevices.getUserMedia({video:true}).then((mediastream)=>
                {   
                    localStream = mediastream;    
                    localVideo.srcObject = mediastream;
                  
                });



}*/

socket.on('client_message',async (data)=>{

    let desc = data.desc;
    let candid = data.candid;
    let sender_id = data.caller.caller_id;
    callDetails = {caller_id:myId,callee_id:sender_id};
    try{
        if(desc)
        {

            if(desc.type === 'offer')
            {
                await pc1.setRemoteDescription(desc);
             /*  await  navigator.mediaDevices.getUserMedia({video:true}).then((mediastream)=>
                {   
                    localStream = mediastream;    
                    localVideo.srcObject = mediastream;
                    localStream.getVideoTracks().forEach((track)=>
                    {
                        pc1.addTrack(track,localStream);
                
                
                    });
                
                });
                    */
                   
                //await setupMyVideo();   
                await localStream.getTracks().forEach((track)=>
                {
                  if(track.kind === "video")  
                     rtc_sender_video =   pc1.addTrack(track,localStream);
                  
                  else if(track.kind === "audio")
                     rtc_sender_audio =  pc1.addTrack(track,localStream);
            
                });
               /* await pc1.getTransceivers().forEach(tran=>
                    {
                        if(tran.sender.track.kind === "video")
                            rtcTranceiever_video = tran;
            
                        else if(tran.sender.track.kind ==="audio")
                            rtcTranceiever_audio = tran;
            
                    });     
            */
            
                await pc1.setLocalDescription(await pc1.createAnswer());   
                await socket.emit("server_message",
                    {caller:callDetails,
                    desc:pc1.localDescription
                });
            }
            else if(desc.type === 'answer')
            {

                await pc1.setRemoteDescription(desc);
            }
            else
            {
                console.log('Unsupported SDP types');
            }

        }else if(candid)
        {   
            if (candid!=null)
            await pc1.addIceCandidate(candid);
        }




}catch(error)
{
    console.log(error);

}


});
/*
async function onMessage1({desc, candid})
{
    try{
        if(desc)
        {

            if(desc.type === 'offer')
            {
                await pc1.setRemoteDescription(desc);
                await localStream.getVideoTracks().forEach((track) =>
                {
                    pc1.addTrack(track,localStream);
                });
        
                await pc1.setLocalDescription(await pc1.createAnswer());   
                onMessage2({desc:pc1.localDescription});
            }
            else if(desc.type === 'answer')
            {

                await pc1.setRemoteDescription(desc);
            }
            else
            {
                console.log('Unsupported SDP types');
            }

        }else if(candid)
        {   
            if (candid!=null)
            await pc1.addIceCandidate(candid);
        }




}catch(error)
{
    console.log(error);

}

}
*/




callAcceptButton.onclick = async ()=>
{	
	tonePlayer.pause();
    answer_details.acceptance = true;
    callRequestDialog.open = false;
    //callRequestModal.close();
    caller_mode.hidden = true;
    video_caller_mode.hidden = false;
    document.body.style.backgroundColor = "black";
    await navigator.mediaDevices.getUserMedia({video:true, audio:true, echoCancellation:true}).then((mediastream)=>
    {   
        localStream = mediastream;
        
        localVideo.srcObject = mediastream;
        localVideo.muted = true;    
    });
/*

    try{
        if(localVideo!==document.pictureInPictureElement)
            await localVideo.requestPictureInPicture();
        else
            await document.exitPictureInPicture();    
        
        }
        catch(error){
            console.log(error);
    
        }
        */

    socket.emit('send_call_answer',answer_details);

}

callRejectButton.onclick = async ()=>{


	tonePlayer.pause();
    answer_details.acceptance = false;
   callRequestDialog.open = false;
     //   callRequestModal.close();
    socket.emit('send_call_answer',answer_details);





}



socket.on('call_request',(caller_data)=>{
    //{name, id,reciever_id,}
    let name = caller_data.name;
    answer_details = {reciever_id:caller_data.caller_soc_id, sender_id:myId};
    dialogInnerText.innerText = name + " is Video Calling You";
    callRequestDialog.open = true;
    //callRequestModal.open();
	tonePlayer.src="incoming_caller_tone.mp3";
	tonePlayer.play();

    /*

    let confimCall = confirm(name + ' is calling you..?').then;
    if(confimCall === true)
    {       answer_details.acceptance = true;
            setupMyVideo();
            recieveVideoCall();
            
    }
    else
    {   
    answer_details.acceptance = false;
    socket.emit('send_call_answer',answer_details);
    }
    */

});
async function getUserDetails(user_id)
{

    socket.emit('request_caller_details',{caller_user_id:user_id});
    


}
socket.on('requested_caller_details',(caller_details)=>
{

  
    if(!caller_details.isPresent === false)
{
        
         setupCall(caller_details);		
          
}
else{
	alert('User does not exist');
    

}


});


socket.on('call_answer',(answer_obj)=>{


	tonePlayer.pause();
    if(answer_obj.acceptance === true)
	{
		startVideoCall();
	}    else
	{ 
       alert('Call Denied');    
	}

});

/*
function recieveVideoCall()
{
    caller_mode.hidden = true;
    video_caller_mode.hidden = false;


}
*/

function setupCall(caller_details)

{
    let call_request_object = {};
    callDetails = {caller_id:myId,callee_id:caller_details.caller_id};
    //sending call request
    call_request_object.name = My_ID;
    call_request_object.caller_soc_id = myId;
    call_request_object.callee_id = callDetails.callee_id;
    console.log(call_request_object);
	document.body.style.backgroundColor = "black";	
    caller_mode.hidden = true;
    video_caller_mode.hidden = false;
	      
    try{
    navigator.mediaDevices.getUserMedia({video:true, audio:true,echoCancellation:true}).then((mediastream)=>
    {   
        localStream = mediastream;    
        localVideo.srcObject = mediastream;
        localVideo.muted = true;
		tonePlayer.src = "callerTone.mp3";
        tonePlayer.play();
		socket.emit('send_call_request',call_request_object);
        
    });
	
}catch(error)
{

    console.log('media error:'+error);


}
	
	
}
 function  startVideoCall()
{    
    try{
  

        localStream.getTracks().forEach((track)=>
        {
            if(track.kind === "video")  
            {    track.contentHint ="peerVideo";   
                 rtc_sender_video =   pc1.addTrack(track,localStream);
            }
            else if(track.kind === "audio")
                rtc_sender_audio =  pc1.addTrack(track,localStream);
        
    });
	
}catch(error)
{

    console.log('media error:'+error);


}
    /*
    pc1.getTransceivers().forEach(tran=>
        {
            if(tran.sender.track.kind === "video")
                rtcTranceiever_video = tran;

            else if(tran.sender.track.kind ==="audio")
                rtcTranceiever_audio = tran;

        });     

  */


}

camButton.onclick = async()=>
{

    let camIcon = document.getElementById("cam_icon");
    if(isCameraOff === false)
        {
            isCameraOff = true;
            camIcon.innerHTML = "videocam_off";
            camButton.classList.add("grey");
            camButton.classList.remove("blue");
			
            
            localStream.getVideoTracks().forEach((track)=>
			{
            
                track.enabled = false;

			});
		   
		   
        }
        else
        {
            isCameraOff = false;
            
            camIcon.innerHTML = "videocam";
            camButton.classList.add("blue");
            camButton.classList.remove("grey");
           // rtcTranceiever_video.direction = "sendrecv"
            
            
            localStream.getVideoTracks().forEach((track)=>
			{
            
                track.enabled = true;

			});
        
            
        

        }

}

screenShareButton.onclick = async()=>
{


    if(isSharingScreen == false)
        {
            isSharingScreen = true;
            screenShareButton.classList.add("green");
            screenShareButton.classList.remove("blue");
           // await dataChannel.send({screenSharingStarted: true, screenSharingEnded: false});

            try{
            await navigator.mediaDevices.getDisplayMedia().then(async (displayStream)=>
            {
                   userDisplayStream = displayStream;
                   await displayStream.getVideoTracks().forEach((track)=>
                    {
                        
                        
                            track.contentHint ="peerScreen";                         
                             rtc_sender_video.replaceTrack(track);
                             track.onended = async()=>{
                            // dataChannel.send({screenSharingStarted: false, screenSharingEnded: ended});
                             localStream.getVideoTracks().forEach((track)=>{
							  
							 isSharingScreen = false;  
							 screenShareButton.classList.remove("green");
							 screenShareButton.classList.add("blue");
							
                             track.contentHint = "peerVideo";
                             rtc_sender_video.replaceTrack(track);
        
                            });
                          }
                    
                    
                });
        
        
        
        
            });
            }catch(error)
            {      
                console.error(error);        
            }
        
        }
        else if(isSharingScreen === true)
        {
         

          // dataChannel.send({screenSharingStarted: false, screenSharingEnded: true});
         await localStream.getVideoTracks().forEach((track)=>{
            rtc_sender_video.replaceTrack(track);
            });
         await  userDisplayStream.getVideoTracks().forEach((track)=>{

            track.stop();

          });  
         


}
}



micButton.onclick = async()=>
{

    let mic_icon = document.getElementById('mic_icon');
    if(isMute === true)
    {
        mic_icon.innerHTML = "mic";
        micButton.classList.remove("grey");
        micButton.classList.add("blue");
    }
    else
    {   
        mic_icon.innerHTML = "mic_mute";
        micButton.classList.remove("blue");
        mic_icon.classList.add("grey");
        pc1.removeTrack(rtc_sender_audio);
    }


}
callButton.onclick = async ()=>
{
   /*
    try{

        
     window.toolbar.visible = false;



    }catch(error)
    {
        console.log('error:',error);


    }
    */
   
  
    user_caller_id = user_id.value;
    

	isCalling = true;
    getUserDetails(user_caller_id);
    /*await navigator.mediaDevices.getUserMedia({video:true}).then((mediastream)=>
    {   
        localStream = mediastream;    
        localVideo.srcObject = mediastream;
      
    });
	
	
	tonePlayer.srcObject = "callerTone.mp3";
	tonePlayer.play();
	
    }catch(error)
    {
        console.log(error);

    }
    */
/*
    try{
        if(localVideo!==document.pictureInPictureElement)
            await localVideo.requestPictureInPicture();
        else
            await document.exitPictureInPicture();    
        
        }
        catch(error){

            console.log(error);
    
        }
*/

        

}


callEndButton.onclick = async()=>
{

    await pc1.close();
    await endCall();

}





