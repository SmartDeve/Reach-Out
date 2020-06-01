const _0x413f = [
    '#call_request_dialog',
    'MTZdu',
    'cUxGG',
    'User\x20does\x20not\x20exist',
    'error',
    'kind',
    'lWNKG',
    'getTracks',
    'name=',
    'emit',
    '#audio_request_dialog',
    'value',
    'wHTjl',
    'scale-out',
    'createOffer',
    'WMjMf',
    'GNfpG',
    'mic_icon',
    'play',
    'XVkjw',
    'forEach',
    'innerHTML',
    '#callAccept',
    'call_request',
    'dialogText',
    'micButton',
    'caller',
    'screenSharingStarted',
    'mcxzO',
    'src',
    'cam_icon',
    'blue',
    'opened',
    'stop',
    'FOEln',
    'caller_soc_id',
    'SMbVK',
    '\x20is\x20Video\x20Calling\x20You',
    'name',
    'createElement',
    'streams',
    'scrollTo',
    '3|5|0|4|1|2',
    'connect',
    'body',
    'search',
    '3|4|2|0|1',
    'peerVideo',
    'onnegotiationneeded',
    'oniceconnectionstatechange',
    'audio',
    'grey',
    'jSXWB',
    'camButton',
    'getVideoTracks',
    'KllER',
    'SKLmd',
    'VVMQH',
    'YUXVs',
    'acceptance',
    'enabled',
    'nLeXU',
    'mFrrA',
    'getElementById',
    'add',
    'onmousedown',
    'send_call_request',
    'location',
    'denied',
    'mic',
    '4|3|0|1|2',
    'srcObject',
    'requested_caller_details',
    'onloadeddata',
    'ZtgtU',
    'data',
    'ChrWo',
    'backgroundColor',
    'LkyNI',
    'GohAt',
    'media\x20error:',
    'type',
    'localVideo',
    'log',
    'MQRVs',
    'my_id',
    'JxFHk',
    'onclick',
    'nhIHs',
    'green',
    '#screenShare',
    'textarea',
    'iaywy',
    '#callEnd',
    'wbHJJ',
    'send_call_answer',
    'white',
    'disabled',
    'getUserMedia',
    'dRYER',
    'https://reach-out-conference.herokuapp.com',
    'video',
    'localDescription',
    'answer',
    'classList',
    'KsvQR',
    'candid',
    'test',
    'button_block',
    'GQnnl',
    'HxxYE',
    'setRemoteDescription',
    'offer',
    'Call\x20Denied',
    'videocam',
    '4|1|6|7|0|2|5|3',
    'black',
    'use-strict',
    'TaPnB',
    'focus',
    'SpHTu',
    'desc',
    'OrsfI',
    'server_message',
    'open',
    'querySelector',
    'peerScreen',
    'createAnswer',
    'Caller',
    'DUneX',
    'videocam_off',
    'close',
    'callButton',
    'ontrack',
    'rjAvt',
    'UkkEP',
    'XfTUp',
    'Unsupported\x20SDP\x20types',
    'addTrack',
    'removeTrack',
    'disconnected',
    'UHSzy',
    'onmouseover',
    'callee_id',
    'split',
    'pause',
    'button',
    'remove',
    'request_caller_details',
    'caller_id',
    'permitted',
    'scale-in',
    'OPvqX',
    'onicecandidate',
    'screenSharingEnded',
    'replaceTrack',
    'tLZVe',
    'onmouseout',
    'hidden',
    'IiZru',
    'VDbwY',
    'closed',
    'aEfxd',
    'incoming_caller_tone.mp3',
    'lmLTp',
    'then',
    'contentHint',
    'setLocalDescription',
    'style',
    'nibLr',
    'yBbBA',
    'stun:stun.l.google.com:19302',
    'onended',
    'mediaDevices',
    'RQzZN',
    'brDYI',
    'call_answer',
    'HsfUz',
    'mQRtx',
    'fXsHE',
    'muted',
    '#callReject',
    'heKup'
];
(function (_0x56b6b3, _0x413ff2) {
    const _0x51e0d3 = function (_0x59f27a) {
        while (--_0x59f27a) {
            _0x56b6b3['push'](_0x56b6b3['shift']());
        }
    };
    _0x51e0d3(++_0x413ff2);
}(_0x413f, 0x1d0));
const _0x51e0 = function (_0x56b6b3, _0x413ff2) {
    _0x56b6b3 = _0x56b6b3 - 0x0;
    let _0x51e0d3 = _0x413f[_0x56b6b3];
    return _0x51e0d3;
};
_0x51e0('0x13');
const urlParams = new URLSearchParams(window[_0x51e0('0x98')][_0x51e0('0x82')]);
let answer_details;
let callerUserName;
const My_ID = urlParams['get'](_0x51e0('0xaa'));
const callAcceptButton = document[_0x51e0('0x1b')](_0x51e0('0x6b'));
const callRejectButton = document['querySelector'](_0x51e0('0x53'));
const callEndButton = document[_0x51e0('0x1b')](_0x51e0('0xb2'));
const call_block = document[_0x51e0('0x94')](_0x51e0('0xa'));
const screenShareButton = document[_0x51e0('0x1b')](_0x51e0('0xaf'));
const socket = io(_0x51e0('0x2'), { 'query': _0x51e0('0x5d') + My_ID });
const localVideo = document[_0x51e0('0x94')](_0x51e0('0xa7'));
let dialogInnerText = document[_0x51e0('0x94')](_0x51e0('0x6d'));
const socketIds = new Map();
const callRequestDialog = document[_0x51e0('0x1b')](_0x51e0('0x55'));
const audioRequestDialog = document[_0x51e0('0x1b')](_0x51e0('0x5f'));
const remoteVideo = document[_0x51e0('0x94')]('remoteVideo');
const camButton = document['getElementById'](_0x51e0('0x8a'));
const permitButton = document[_0x51e0('0x94')](_0x51e0('0x34'));
const deniedButton = document[_0x51e0('0x94')](_0x51e0('0x99'));
const callButton = document[_0x51e0('0x94')](_0x51e0('0x22'));
const userElement = document[_0x51e0('0x7c')]('user-obj');
const contactList = document[_0x51e0('0x1b')]('ul');
const caller_mode = document['getElementById'](_0x51e0('0x1e'));
const micButton = document['getElementById'](_0x51e0('0x6e'));
let dataChannel;
const user_id = document[_0x51e0('0x94')]('user_id');
const video_caller_mode = document[_0x51e0('0x94')]('Video_Caller');
const picInPicButton = document[_0x51e0('0x94')](_0x51e0('0x9'));
const tonePlayer = document[_0x51e0('0x1b')]('audio');
let textArea = document[_0x51e0('0x7c')](_0x51e0('0xb0'));
caller_mode[_0x51e0('0x3c')] = !![];
video_caller_mode[_0x51e0('0x3c')] = !![];
callEndButton[_0x51e0('0x3c')] = !![];
screenShareButton['hidden'] = !![];
micButton[_0x51e0('0x3c')] = !![];
camButton[_0x51e0('0x3c')] = !![];
let callDetails;
let isMute = ![];
let isCameraOff = ![];
let callerName;
let isSharingScreen = ![];
let myId;
let user_caller_id;
let isCaller = ![];
let isCalling = ![];
let userDisplayStream;
let rtc_sender_audio;
let rtc_sender_video;
let rtcTranceiever_audio;
let rtcTranceiever_video;
let peerMode = !![];
screenShareButton[_0x51e0('0x91')] = ![];
audioRequestDialog[_0x51e0('0x1a')] = !![];
document[_0x51e0('0x96')] = _0x2b6d81 => {
    const _0x26f4a1 = {
        'OPvqX': function (_0x39a53b, _0x5dab00) {
            return _0x39a53b == _0x5dab00;
        }
    };
    if (_0x26f4a1[_0x51e0('0x36')](_0x2b6d81[_0x51e0('0x30')], 0x2))
        return ![];
};
permitButton[_0x51e0('0xac')] = async () => {
    audioRequestDialog['open'] = ![];
    caller_mode[_0x51e0('0x3c')] = ![];
};
deniedButton[_0x51e0('0xac')] = async () => {
    audioRequestDialog[_0x51e0('0x1a')] = ![];
};
call_block[_0x51e0('0x2c')] = async () => {
    const _0x2a9840 = {
        'HsfUz': _0x51e0('0x35'),
        'UHSzy': 'scale-out'
    };
    screenShareButton['classList'][_0x51e0('0x95')](_0x2a9840[_0x51e0('0x4f')]);
    callEndButton[_0x51e0('0x6')][_0x51e0('0x95')](_0x2a9840['HsfUz']);
    micButton['classList'][_0x51e0('0x95')](_0x2a9840[_0x51e0('0x4f')]);
    camButton[_0x51e0('0x6')][_0x51e0('0x95')](_0x2a9840['HsfUz']);
    screenShareButton[_0x51e0('0x6')][_0x51e0('0x31')](_0x2a9840['UHSzy']);
    callEndButton[_0x51e0('0x6')][_0x51e0('0x31')](_0x2a9840[_0x51e0('0x2b')]);
    micButton[_0x51e0('0x6')][_0x51e0('0x31')](_0x2a9840[_0x51e0('0x2b')]);
    camButton['classList']['remove'](_0x2a9840[_0x51e0('0x2b')]);
};
call_block[_0x51e0('0x3b')] = async () => {
    const _0x413edb = {
        'mQRtx': _0x51e0('0x11'),
        'BSMeO': _0x51e0('0x62'),
        'rjAvt': _0x51e0('0x35')
    };
    const _0x4599b2 = _0x413edb[_0x51e0('0x50')][_0x51e0('0x2e')]('|');
    let _0x561b82 = 0x0;
    while (!![]) {
        switch (_0x4599b2[_0x561b82++]) {
        case '0':
            screenShareButton[_0x51e0('0x6')][_0x51e0('0x95')](_0x413edb['BSMeO']);
            continue;
        case '1':
            callEndButton[_0x51e0('0x6')][_0x51e0('0x31')](_0x413edb[_0x51e0('0x24')]);
            continue;
        case '2':
            callEndButton[_0x51e0('0x6')]['add'](_0x413edb['BSMeO']);
            continue;
        case '3':
            camButton[_0x51e0('0x6')][_0x51e0('0x95')](_0x51e0('0x62'));
            continue;
        case '4':
            screenShareButton['classList'][_0x51e0('0x31')](_0x51e0('0x35'));
            continue;
        case '5':
            micButton[_0x51e0('0x6')][_0x51e0('0x95')](_0x413edb['BSMeO']);
            continue;
        case '6':
            micButton[_0x51e0('0x6')][_0x51e0('0x31')](_0x413edb[_0x51e0('0x24')]);
            continue;
        case '7':
            camButton[_0x51e0('0x6')][_0x51e0('0x31')](_0x413edb['rjAvt']);
            continue;
        }
        break;
    }
};
socket['on'](_0x51e0('0x80'), () => {
    myId = socket['id'];
});
socket['on']('user_added', _0x5159da => {
});
let localStream;
const configuration = { 'iceServers': [{ 'urls': _0x51e0('0x49') }] };
pc1 = new RTCPeerConnection(configuration);
pc1[_0x51e0('0x86')] = async () => {
    const _0x21fb80 = {
        'WRUbm': _0x51e0('0x2a'),
        'qlLhG': function (_0x59678a) {
            return _0x59678a();
        }
    };
    if (pc1['iceConnectionState'] === _0x21fb80['WRUbm'])
        _0x21fb80['qlLhG'](endCall);
};
function endCall() {
    const _0x4474a6 = {
        'aEfxd': _0x51e0('0x7f'),
        'XfTUp': _0x51e0('0xb5')
    };
    const _0x37a376 = _0x4474a6[_0x51e0('0x40')][_0x51e0('0x2e')]('|');
    let _0x12add6 = 0x0;
    while (!![]) {
        switch (_0x37a376[_0x12add6++]) {
        case '0':
            screenShareButton[_0x51e0('0x3c')] = !![];
            continue;
        case '1':
            caller_mode[_0x51e0('0x3c')] = ![];
            continue;
        case '2':
            localStream['getTracks']()[_0x51e0('0x69')](_0x332cb8 => {
                _0x332cb8['stop']();
            });
            continue;
        case '3':
            document['body']['style']['backgroundColor'] = _0x4474a6[_0x51e0('0x26')];
            continue;
        case '4':
            video_caller_mode[_0x51e0('0x3c')] = !![];
            continue;
        case '5':
            callEndButton['hidden'] = !![];
            continue;
        }
        break;
    }
}
pc1[_0x51e0('0x37')] = async ({candidate}) => {
    const _0x3ad8bb = { 'SpHTu': 'server_message' };
    let _0x402e90 = {
        'caller': callDetails,
        'candid': candidate
    };
    await socket[_0x51e0('0x5e')](_0x3ad8bb[_0x51e0('0x16')], _0x402e90);
};
pc1[_0x51e0('0x85')] = async () => {
    const _0x2e54da = { 'SMbVK': _0x51e0('0x19') };
    try {
        await pc1[_0x51e0('0x45')](await pc1[_0x51e0('0x63')]());
        let _0x35152d = {
            'caller': callDetails,
            'desc': pc1[_0x51e0('0x4')]
        };
        console['log'](callDetails);
        await socket[_0x51e0('0x5e')](_0x2e54da[_0x51e0('0x79')], _0x35152d);
    } catch (_0xc50fa5) {
        console[_0x51e0('0xa8')](_0xc50fa5);
    }
};
pc1[_0x51e0('0x23')] = async _0x4be162 => {
    _0x4be162[_0x51e0('0x7d')][0x0]['getAudioTracks']()['forEach'](_0x5862b6 => {
        console[_0x51e0('0xa8')](_0x5862b6[_0x51e0('0x5a')]);
        console[_0x51e0('0xa8')](_0x5862b6[_0x51e0('0x91')]);
        console[_0x51e0('0xa8')](_0x5862b6[_0x51e0('0x52')]);
    });
    remoteVideo['srcObject'] = _0x4be162[_0x51e0('0x7d')][0x0];
    remoteVideo[_0x51e0('0x15')]();
    screenShareButton[_0x51e0('0x3c')] = ![];
    callEndButton[_0x51e0('0x3c')] = ![];
    micButton[_0x51e0('0x3c')] = ![];
    camButton[_0x51e0('0x3c')] = ![];
};
remoteVideo[_0x51e0('0x9e')] = () => {
    window[_0x51e0('0x7e')](0x0, document[_0x51e0('0x81')]['scrollHeight']);
};
function onDataRecieved(_0x55c41d) {
    const _0x3b6073 = {
        'tLZVe': function (_0x30a2fa, _0x55027a) {
            return _0x30a2fa === _0x55027a;
        },
        'cUxGG': function (_0x2f391c, _0x3ccc77) {
            return _0x2f391c === _0x3ccc77;
        }
    };
    if (_0x3b6073[_0x51e0('0x3a')](_0x55c41d[_0x51e0('0xa0')][_0x51e0('0x70')], !![])) {
    } else if (_0x3b6073[_0x51e0('0x57')](_0x55c41d[_0x51e0('0xa0')][_0x51e0('0x38')], !![])) {
    }
}
let onOpenChannelCallback = async _0xbaf5e2 => {
    const _0x576b35 = { 'rBmlq': _0x51e0('0x75') };
    console['log'](_0x576b35['rBmlq']);
    muteButton[_0x51e0('0xb6')] = ![];
};
let onClosedChannelCallBack = async _0x2a7baf => {
    const _0x57957b = { 'DUneX': _0x51e0('0x3f') };
    muteButton[_0x51e0('0xb6')] = !![];
    console[_0x51e0('0xa8')](_0x57957b[_0x51e0('0x1f')]);
};
socket['on']('client_message', async _0x391e04 => {
    const _0x57d773 = {
        'VVMQH': function (_0x4f02ff, _0x3c49a5) {
            return _0x4f02ff === _0x3c49a5;
        },
        'FOEln': _0x51e0('0x3'),
        'lWNKG': 'audio',
        'yjibW': function (_0x227ec7, _0x440f88) {
            return _0x227ec7 === _0x440f88;
        },
        'yBbBA': _0x51e0('0xe'),
        'uNrwZ': 'server_message',
        'heKup': _0x51e0('0x27'),
        'nLeXU': function (_0x4a8f93, _0xf77c21) {
            return _0x4a8f93 != _0xf77c21;
        }
    };
    let _0x5ba92f = _0x391e04[_0x51e0('0x17')];
    let _0x31ef1b = _0x391e04[_0x51e0('0x8')];
    let _0x5f5a9b = _0x391e04[_0x51e0('0x6f')][_0x51e0('0x33')];
    callDetails = {
        'caller_id': myId,
        'callee_id': _0x5f5a9b
    };
    try {
        if (_0x5ba92f) {
            if (_0x57d773['yjibW'](_0x5ba92f[_0x51e0('0xa6')], _0x57d773[_0x51e0('0x48')])) {
                await pc1[_0x51e0('0xd')](_0x5ba92f);
                await localStream[_0x51e0('0x5c')]()[_0x51e0('0x69')](_0x194183 => {
                    if (_0x57d773[_0x51e0('0x8e')](_0x194183[_0x51e0('0x5a')], _0x57d773[_0x51e0('0x77')]))
                        rtc_sender_video = pc1[_0x51e0('0x28')](_0x194183, localStream);
                    else if (_0x194183[_0x51e0('0x5a')] === _0x57d773[_0x51e0('0x5b')])
                        rtc_sender_audio = pc1[_0x51e0('0x28')](_0x194183, localStream);
                });
                await pc1[_0x51e0('0x45')](await pc1[_0x51e0('0x1d')]());
                await socket[_0x51e0('0x5e')](_0x57d773['uNrwZ'], {
                    'caller': callDetails,
                    'desc': pc1[_0x51e0('0x4')]
                });
            } else if (_0x57d773['yjibW'](_0x5ba92f[_0x51e0('0xa6')], _0x51e0('0x5'))) {
                await pc1[_0x51e0('0xd')](_0x5ba92f);
            } else {
                console[_0x51e0('0xa8')](_0x57d773[_0x51e0('0x54')]);
            }
        } else if (_0x31ef1b) {
            if (_0x57d773[_0x51e0('0x92')](_0x31ef1b, null))
                await pc1['addIceCandidate'](_0x31ef1b);
        }
    } catch (_0x35cd55) {
        console[_0x51e0('0xa8')](_0x35cd55);
    }
});
callAcceptButton[_0x51e0('0xac')] = async () => {
    const _0x378f20 = {
        'JxFHk': _0x51e0('0xb4'),
        'hOoTl': 'black'
    };
    const _0x2c5cd7 = '0|4|5|6|2|3|7|1'[_0x51e0('0x2e')]('|');
    let _0x2fc3fd = 0x0;
    while (!![]) {
        switch (_0x2c5cd7[_0x2fc3fd++]) {
        case '0':
            tonePlayer[_0x51e0('0x2f')]();
            continue;
        case '1':
            socket[_0x51e0('0x5e')](_0x378f20[_0x51e0('0xab')], answer_details);
            continue;
        case '2':
            video_caller_mode[_0x51e0('0x3c')] = ![];
            continue;
        case '3':
            document[_0x51e0('0x81')][_0x51e0('0x46')][_0x51e0('0xa2')] = _0x378f20['hOoTl'];
            continue;
        case '4':
            answer_details[_0x51e0('0x90')] = !![];
            continue;
        case '5':
            callRequestDialog[_0x51e0('0x1a')] = ![];
            continue;
        case '6':
            caller_mode['hidden'] = !![];
            continue;
        case '7':
            await navigator['mediaDevices'][_0x51e0('0x0')]({
                'video': !![],
                'audio': !![],
                'echoCancellation': !![]
            })[_0x51e0('0x43')](_0x1590c8 => {
                localStream = _0x1590c8;
                localVideo[_0x51e0('0x9c')] = _0x1590c8;
                localVideo[_0x51e0('0x52')] = !![];
            });
            continue;
        }
        break;
    }
};
callRejectButton['onclick'] = async () => {
    tonePlayer[_0x51e0('0x2f')]();
    answer_details['acceptance'] = ![];
    callRequestDialog[_0x51e0('0x1a')] = ![];
    socket[_0x51e0('0x5e')](_0x51e0('0xb4'), answer_details);
};
socket['on'](_0x51e0('0x6c'), _0x709f23 => {
    const _0x7ece06 = {
        'wHTjl': _0x51e0('0x7a'),
        'fXsHE': _0x51e0('0x41')
    };
    let _0x2f5bce = _0x709f23[_0x51e0('0x7b')];
    answer_details = {
        'reciever_id': _0x709f23[_0x51e0('0x78')],
        'sender_id': myId
    };
    dialogInnerText['innerText'] = _0x2f5bce + _0x7ece06[_0x51e0('0x61')];
    callRequestDialog[_0x51e0('0x1a')] = !![];
    tonePlayer[_0x51e0('0x72')] = _0x7ece06[_0x51e0('0x51')];
    tonePlayer[_0x51e0('0x67')]();
});
async function getUserDetails(_0x411b1c) {
    const _0x39cbab = { 'HxxYE': _0x51e0('0x32') };
    socket['emit'](_0x39cbab[_0x51e0('0xc')], { 'caller_user_id': _0x411b1c });
}
socket['on'](_0x51e0('0x9d'), _0x4a4660 => {
    const _0x361610 = {
        'lmLTp': function (_0xc146e3, _0xf0916a) {
            return _0xc146e3 === _0xf0916a;
        },
        'mFrrA': function (_0x4dc531, _0x2d7fb9) {
            return _0x4dc531(_0x2d7fb9);
        },
        'XVkjw': _0x51e0('0x58')
    };
    if (_0x361610[_0x51e0('0x42')](!_0x4a4660['isPresent'], ![])) {
        _0x361610[_0x51e0('0x93')](setupCall, _0x4a4660);
    } else {
        alert(_0x361610[_0x51e0('0x68')]);
    }
});
socket['on'](_0x51e0('0x4e'), _0x37b843 => {
    const _0x2bc192 = {
        'KllER': function (_0x1cb72e) {
            return _0x1cb72e();
        },
        'bXPle': function (_0x11ef30, _0x592af1) {
            return _0x11ef30(_0x592af1);
        },
        'qMUrd': _0x51e0('0xf')
    };
    tonePlayer[_0x51e0('0x2f')]();
    if (_0x37b843[_0x51e0('0x90')] === !![]) {
        _0x2bc192[_0x51e0('0x8c')](startVideoCall);
    } else {
        _0x2bc192['bXPle'](alert, _0x2bc192['qMUrd']);
    }
});
function setupCall(_0x4b0756) {
    const _0x2aee84 = {
        'nhIHs': '2|0|5|3|4|1',
        'wbHJJ': 'callerTone.mp3',
        'RQzZN': _0x51e0('0x12'),
        'BJKFS': function (_0x361d00, _0x3267ed) {
            return _0x361d00 + _0x3267ed;
        }
    };
    let _0x155c57 = {};
    callDetails = {
        'caller_id': myId,
        'callee_id': _0x4b0756['caller_id']
    };
    _0x155c57[_0x51e0('0x7b')] = My_ID;
    _0x155c57[_0x51e0('0x78')] = myId;
    _0x155c57[_0x51e0('0x2d')] = callDetails[_0x51e0('0x2d')];
    console['log'](_0x155c57);
    document[_0x51e0('0x81')][_0x51e0('0x46')][_0x51e0('0xa2')] = _0x2aee84[_0x51e0('0x4c')];
    caller_mode['hidden'] = !![];
    video_caller_mode['hidden'] = ![];
    try {
        navigator[_0x51e0('0x4b')][_0x51e0('0x0')]({
            'video': !![],
            'audio': !![],
            'echoCancellation': !![]
        })['then'](_0x56c1c9 => {
            const _0x41e5a2 = _0x2aee84[_0x51e0('0xad')][_0x51e0('0x2e')]('|');
            let _0x4d284b = 0x0;
            while (!![]) {
                switch (_0x41e5a2[_0x4d284b++]) {
                case '0':
                    localVideo[_0x51e0('0x9c')] = _0x56c1c9;
                    continue;
                case '1':
                    socket['emit'](_0x51e0('0x97'), _0x155c57);
                    continue;
                case '2':
                    localStream = _0x56c1c9;
                    continue;
                case '3':
                    tonePlayer[_0x51e0('0x72')] = _0x2aee84[_0x51e0('0xb3')];
                    continue;
                case '4':
                    tonePlayer[_0x51e0('0x67')]();
                    continue;
                case '5':
                    localVideo[_0x51e0('0x52')] = !![];
                    continue;
                }
                break;
            }
        });
    } catch (_0x4e24a4) {
        console['log'](_0x2aee84['BJKFS'](_0x51e0('0xa5'), _0x4e24a4));
    }
}
function startVideoCall() {
    const _0x36deb1 = {
        'GNfpG': function (_0x4b7cc2, _0x5b071d) {
            return _0x4b7cc2 === _0x5b071d;
        },
        'TaPnB': _0x51e0('0x3'),
        'MQRVs': _0x51e0('0x84'),
        'YUXVs': _0x51e0('0x87'),
        'MTZdu': function (_0xe3c9a1, _0x393178) {
            return _0xe3c9a1 + _0x393178;
        },
        'ChrWo': 'media\x20error:'
    };
    try {
        localStream[_0x51e0('0x5c')]()[_0x51e0('0x69')](_0x222e8a => {
            if (_0x36deb1[_0x51e0('0x65')](_0x222e8a[_0x51e0('0x5a')], _0x36deb1[_0x51e0('0x14')])) {
                _0x222e8a[_0x51e0('0x44')] = _0x36deb1[_0x51e0('0xa9')];
                rtc_sender_video = pc1[_0x51e0('0x28')](_0x222e8a, localStream);
            } else if (_0x36deb1[_0x51e0('0x65')](_0x222e8a[_0x51e0('0x5a')], _0x36deb1[_0x51e0('0x8f')]))
                rtc_sender_audio = pc1[_0x51e0('0x28')](_0x222e8a, localStream);
        });
    } catch (_0x48831b) {
        console[_0x51e0('0xa8')](_0x36deb1[_0x51e0('0x56')](_0x36deb1[_0x51e0('0xa1')], _0x48831b));
    }
}
camButton[_0x51e0('0xac')] = async () => {
    const _0x2e2f01 = {
        'WMjMf': _0x51e0('0x73'),
        'GohAt': function (_0x591af3, _0x49bb1e) {
            return _0x591af3 === _0x49bb1e;
        },
        'dRYER': _0x51e0('0x88'),
        'mcxzO': _0x51e0('0x9b'),
        'brDYI': _0x51e0('0x74'),
        'jSXWB': _0x51e0('0x10')
    };
    let _0x13f1f6 = document[_0x51e0('0x94')](_0x2e2f01[_0x51e0('0x64')]);
    if (_0x2e2f01[_0x51e0('0xa4')](isCameraOff, ![])) {
        isCameraOff = !![];
        _0x13f1f6[_0x51e0('0x6a')] = _0x51e0('0x20');
        camButton[_0x51e0('0x6')]['add'](_0x2e2f01[_0x51e0('0x1')]);
        camButton['classList']['remove'](_0x51e0('0x74'));
        localStream[_0x51e0('0x8b')]()[_0x51e0('0x69')](_0x1fbe32 => {
            _0x1fbe32[_0x51e0('0x91')] = ![];
        });
    } else {
        const _0x48690b = _0x2e2f01[_0x51e0('0x71')][_0x51e0('0x2e')]('|');
        let _0x2e93ed = 0x0;
        while (!![]) {
            switch (_0x48690b[_0x2e93ed++]) {
            case '0':
                camButton[_0x51e0('0x6')][_0x51e0('0x95')](_0x2e2f01[_0x51e0('0x4d')]);
                continue;
            case '1':
                camButton[_0x51e0('0x6')][_0x51e0('0x31')](_0x2e2f01['dRYER']);
                continue;
            case '2':
                localStream[_0x51e0('0x8b')]()[_0x51e0('0x69')](_0x229d03 => {
                    _0x229d03['enabled'] = !![];
                });
                continue;
            case '3':
                _0x13f1f6['innerHTML'] = _0x2e2f01[_0x51e0('0x89')];
                continue;
            case '4':
                isCameraOff = ![];
                continue;
            }
            break;
        }
    }
};
screenShareButton[_0x51e0('0xac')] = async () => {
    const _0xe526d5 = {
        'SKLmd': function (_0x368f3d, _0x32617b) {
            return _0x368f3d == _0x32617b;
        },
        'ZtgtU': _0x51e0('0xae'),
        'GQnnl': 'blue',
        'nibLr': function (_0x2a15e3, _0x31e511) {
            return _0x2a15e3 === _0x31e511;
        }
    };
    if (_0xe526d5[_0x51e0('0x8d')](isSharingScreen, ![])) {
        isSharingScreen = !![];
        screenShareButton[_0x51e0('0x6')][_0x51e0('0x95')](_0xe526d5[_0x51e0('0x9f')]);
        screenShareButton['classList'][_0x51e0('0x31')](_0xe526d5[_0x51e0('0xb')]);
        try {
            await navigator[_0x51e0('0x4b')]['getDisplayMedia']()[_0x51e0('0x43')](async _0x382c89 => {
                userDisplayStream = _0x382c89;
                await _0x382c89[_0x51e0('0x8b')]()[_0x51e0('0x69')](_0x5e2de6 => {
                    const _0x27f6d0 = {
                        'OrsfI': _0x51e0('0x83'),
                        'VDbwY': _0x51e0('0x84')
                    };
                    _0x5e2de6['contentHint'] = _0x51e0('0x1c');
                    rtc_sender_video[_0x51e0('0x39')](_0x5e2de6);
                    _0x5e2de6[_0x51e0('0x4a')] = async () => {
                        localStream[_0x51e0('0x8b')]()[_0x51e0('0x69')](_0x2d71a0 => {
                            const _0x35f52f = _0x27f6d0[_0x51e0('0x18')]['split']('|');
                            let _0x463a46 = 0x0;
                            while (!![]) {
                                switch (_0x35f52f[_0x463a46++]) {
                                case '0':
                                    _0x2d71a0[_0x51e0('0x44')] = _0x27f6d0[_0x51e0('0x3e')];
                                    continue;
                                case '1':
                                    rtc_sender_video[_0x51e0('0x39')](_0x2d71a0);
                                    continue;
                                case '2':
                                    screenShareButton['classList']['add'](_0x51e0('0x74'));
                                    continue;
                                case '3':
                                    isSharingScreen = ![];
                                    continue;
                                case '4':
                                    screenShareButton[_0x51e0('0x6')][_0x51e0('0x31')](_0x51e0('0xae'));
                                    continue;
                                }
                                break;
                            }
                        });
                    };
                });
            });
        } catch (_0x1bbd78) {
            console[_0x51e0('0x59')](_0x1bbd78);
        }
    } else if (_0xe526d5[_0x51e0('0x47')](isSharingScreen, !![])) {
        await localStream[_0x51e0('0x8b')]()['forEach'](_0x5247db => {
            rtc_sender_video['replaceTrack'](_0x5247db);
        });
        await userDisplayStream[_0x51e0('0x8b')]()[_0x51e0('0x69')](_0x31886e => {
            _0x31886e[_0x51e0('0x76')]();
        });
    }
};
micButton[_0x51e0('0xac')] = async () => {
    const _0x2b4707 = {
        'rQjpk': _0x51e0('0x66'),
        'UkkEP': function (_0x282bc0, _0x120ddf) {
            return _0x282bc0 === _0x120ddf;
        },
        'IiZru': _0x51e0('0x9a'),
        'KsvQR': _0x51e0('0x88'),
        'LkyNI': 'blue',
        'iaywy': 'mic_mute'
    };
    let _0x253211 = document[_0x51e0('0x94')](_0x2b4707['rQjpk']);
    if (_0x2b4707[_0x51e0('0x25')](isMute, !![])) {
        _0x253211[_0x51e0('0x6a')] = _0x2b4707[_0x51e0('0x3d')];
        micButton['classList'][_0x51e0('0x31')](_0x2b4707[_0x51e0('0x7')]);
        micButton[_0x51e0('0x6')][_0x51e0('0x95')](_0x2b4707['LkyNI']);
    } else {
        _0x253211[_0x51e0('0x6a')] = _0x2b4707[_0x51e0('0xb1')];
        micButton[_0x51e0('0x6')][_0x51e0('0x31')](_0x2b4707[_0x51e0('0xa3')]);
        _0x253211['classList']['add'](_0x51e0('0x88'));
        pc1[_0x51e0('0x29')](rtc_sender_audio);
    }
};
callButton['onclick'] = async () => {
    user_caller_id = user_id[_0x51e0('0x60')];
    isCalling = !![];
    getUserDetails(user_caller_id);
};
callEndButton[_0x51e0('0xac')] = async () => {
    await pc1[_0x51e0('0x21')]();
    await endCall();
};