const _0x489c = [
    'camButton',
    'QgyDw',
    'innerHTML',
    'fsMqT',
    'value',
    'User\x20does\x20not\x20exist',
    'mediaDevices',
    '\x20is\x20Video\x20Calling\x20You',
    'https://reach-out-conference.herokuapp.com',
    'server_message',
    'uBGvo',
    'onmousedown',
    'getElementById',
    'style',
    'kXHio',
    'micButton',
    'Dqfss',
    'wYrmN',
    'offer',
    'iceConnectionState',
    'remoteVideo',
    'createOffer',
    'user_added',
    'streams',
    'QrKGY',
    'send_call_request',
    'data',
    'addIceCandidate',
    'setLocalDescription',
    'disconnected',
    'closed',
    'xMLqL',
    'split',
    'NSDEK',
    'black',
    'videocam',
    'pause',
    'desc',
    'blue',
    'mic_icon',
    'FvIRr',
    'OslPX',
    'getVideoTracks',
    'callee_id',
    'vXTJo',
    'disabled',
    'NbsCM',
    'LNRih',
    'textarea',
    'candid',
    'cam_icon',
    'Unsupported\x20SDP\x20types',
    'scale-in',
    'querySelector',
    'McmdA',
    'UaRqt',
    'getTracks',
    '1|6|3|7|0|2|5|4',
    'client_message',
    'AbnVA',
    '#callReject',
    'screenSharingEnded',
    'request_caller_details',
    'QXAwN',
    'PEizC',
    'caller_soc_id',
    'connect',
    'tCBYm',
    'close',
    'innerText',
    'callerTone.mp3',
    'MLBeZ',
    'onmouseout',
    'dialogText',
    'then',
    'type',
    'opened',
    'getUserMedia',
    'emit',
    'callButton',
    '2|3|4|0|1',
    'classList',
    'hkMOe',
    '0|1|3|4|2',
    'media\x20error:',
    'RDbsC',
    'localVideo',
    'Video_Caller',
    'screenSharingStarted',
    'focus',
    'get',
    'my_id',
    'play',
    'FcCiU',
    'XTkOm',
    'StuZM',
    '6|5|3|0|1|7|4|2',
    'requested_caller_details',
    'grey',
    'log',
    'createElement',
    'replaceTrack',
    'video',
    'srcObject',
    'error',
    'green',
    'button_block',
    'src',
    'EnWnX',
    'permitted',
    'remove',
    'body',
    'scale-out',
    'backgroundColor',
    'open',
    'setRemoteDescription',
    'AUaHg',
    'call_answer',
    'incoming_caller_tone.mp3',
    'user-obj',
    'sAFjg',
    'onloadeddata',
    'hidden',
    'caller',
    'AKejD',
    '#callEnd',
    'onnegotiationneeded',
    'XrjBg',
    'onicecandidate',
    'forEach',
    'acceptance',
    'enabled',
    'removeTrack',
    'audio',
    'TQlNG',
    'caller_id',
    'createAnswer',
    'QbUBy',
    'scrollTo',
    'sbmES',
    '#call_request_dialog',
    'stop',
    'eXOwr',
    'EysAo',
    'ontrack',
    'denied',
    'localDescription',
    'addTrack',
    'BuyeH',
    'DZUfP',
    'XJJHP',
    'jXlXF',
    'xLvFx',
    'search',
    'zkunS',
    'onclick',
    'oniceconnectionstatechange',
    'onmouseover',
    'use-strict',
    'LrVpL',
    'stun:stun.l.google.com:19302',
    'rLRXj',
    'peerVideo',
    '#audio_request_dialog',
    'videocam_off',
    'YbNgl',
    'contentHint',
    'rDbvp',
    'add',
    'button',
    'mYNGB',
    'LwcyE'
];
(function (_0x709ed, _0x489ce4) {
    const _0x3f0b5c = function (_0x39c801) {
        while (--_0x39c801) {
            _0x709ed['push'](_0x709ed['shift']());
        }
    };
    _0x3f0b5c(++_0x489ce4);
}(_0x489c, 0x65));
const _0x3f0b = function (_0x709ed, _0x489ce4) {
    _0x709ed = _0x709ed - 0x0;
    let _0x3f0b5c = _0x489c[_0x709ed];
    return _0x3f0b5c;
};
_0x3f0b('0x39');
const urlParams = new URLSearchParams(window['location'][_0x3f0b('0x34')]);
let answer_details;
let callerUserName;
const My_ID = urlParams[_0x3f0b('0xa1')](_0x3f0b('0xa2'));
const callAcceptButton = document[_0x3f0b('0x7c')]('#callAccept');
const callRejectButton = document[_0x3f0b('0x7c')](_0x3f0b('0x83'));
const callEndButton = document[_0x3f0b('0x7c')](_0x3f0b('0x18'));
const call_block = document['getElementById'](_0x3f0b('0x5'));
const screenShareButton = document['querySelector']('#screenShare');
const socket = io(_0x3f0b('0x4f'), { 'query': 'name=' + My_ID });
const localVideo = document[_0x3f0b('0x53')](_0x3f0b('0x9d'));
let dialogInnerText = document[_0x3f0b('0x53')](_0x3f0b('0x90'));
const socketIds = new Map();
const callRequestDialog = document[_0x3f0b('0x7c')](_0x3f0b('0x27'));
const audioRequestDialog = document[_0x3f0b('0x7c')](_0x3f0b('0x3e'));
const remoteVideo = document[_0x3f0b('0x53')](_0x3f0b('0x5b'));
const camButton = document[_0x3f0b('0x53')](_0x3f0b('0x47'));
const permitButton = document[_0x3f0b('0x53')](_0x3f0b('0x8'));
const deniedButton = document['getElementById'](_0x3f0b('0x2c'));
const callButton = document[_0x3f0b('0x53')](_0x3f0b('0x96'));
const userElement = document[_0x3f0b('0xab')](_0x3f0b('0x12'));
const contactList = document[_0x3f0b('0x7c')]('ul');
const caller_mode = document['getElementById']('Caller');
const micButton = document[_0x3f0b('0x53')](_0x3f0b('0x56'));
let dataChannel;
const user_id = document[_0x3f0b('0x53')]('user_id');
const video_caller_mode = document['getElementById'](_0x3f0b('0x9e'));
const picInPicButton = document[_0x3f0b('0x53')]('test');
const tonePlayer = document[_0x3f0b('0x7c')]('audio');
let textArea = document['createElement'](_0x3f0b('0x77'));
caller_mode[_0x3f0b('0x15')] = !![];
video_caller_mode[_0x3f0b('0x15')] = !![];
callEndButton[_0x3f0b('0x15')] = !![];
screenShareButton['hidden'] = !![];
micButton[_0x3f0b('0x15')] = !![];
camButton['hidden'] = !![];
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
screenShareButton[_0x3f0b('0x1e')] = ![];
audioRequestDialog[_0x3f0b('0xd')] = !![];
document[_0x3f0b('0x52')] = _0x4bb8fa => {
    const _0x48d28e = {
        'EnWnX': function (_0x523ac2, _0x3a98b2) {
            return _0x523ac2 == _0x3a98b2;
        }
    };
    if (_0x48d28e[_0x3f0b('0x7')](_0x4bb8fa[_0x3f0b('0x44')], 0x2))
        return ![];
};
permitButton[_0x3f0b('0x36')] = async () => {
    audioRequestDialog[_0x3f0b('0xd')] = ![];
    caller_mode[_0x3f0b('0x15')] = ![];
};
deniedButton[_0x3f0b('0x36')] = async () => {
    audioRequestDialog[_0x3f0b('0xd')] = ![];
};
call_block[_0x3f0b('0x38')] = async () => {
    const _0xcf7c15 = {
        'kkwVR': _0x3f0b('0x80'),
        'YbNgl': _0x3f0b('0xb'),
        'xLvFx': _0x3f0b('0x7b')
    };
    const _0x330247 = _0xcf7c15['kkwVR'][_0x3f0b('0x67')]('|');
    let _0x5e0a69 = 0x0;
    while (!![]) {
        switch (_0x330247[_0x5e0a69++]) {
        case '0':
            screenShareButton['classList'][_0x3f0b('0x9')](_0xcf7c15[_0x3f0b('0x40')]);
            continue;
        case '1':
            screenShareButton['classList'][_0x3f0b('0x43')](_0xcf7c15[_0x3f0b('0x33')]);
            continue;
        case '2':
            callEndButton[_0x3f0b('0x98')][_0x3f0b('0x9')]('scale-out');
            continue;
        case '3':
            micButton[_0x3f0b('0x98')]['add'](_0xcf7c15[_0x3f0b('0x33')]);
            continue;
        case '4':
            camButton[_0x3f0b('0x98')][_0x3f0b('0x9')](_0xcf7c15[_0x3f0b('0x40')]);
            continue;
        case '5':
            micButton[_0x3f0b('0x98')][_0x3f0b('0x9')](_0xcf7c15[_0x3f0b('0x40')]);
            continue;
        case '6':
            callEndButton[_0x3f0b('0x98')]['add'](_0xcf7c15[_0x3f0b('0x33')]);
            continue;
        case '7':
            camButton[_0x3f0b('0x98')]['add'](_0xcf7c15[_0x3f0b('0x33')]);
            continue;
        }
        break;
    }
};
call_block[_0x3f0b('0x8f')] = async () => {
    const _0x3d5895 = {
        'EysAo': '3|4|1|5|7|6|0|2',
        'UaRqt': _0x3f0b('0x7b'),
        'hkMOe': _0x3f0b('0xb')
    };
    const _0x4ca82a = _0x3d5895[_0x3f0b('0x2a')][_0x3f0b('0x67')]('|');
    let _0x4187e4 = 0x0;
    while (!![]) {
        switch (_0x4ca82a[_0x4187e4++]) {
        case '0':
            micButton[_0x3f0b('0x98')][_0x3f0b('0x43')]('scale-out');
            continue;
        case '1':
            micButton[_0x3f0b('0x98')][_0x3f0b('0x9')](_0x3d5895['UaRqt']);
            continue;
        case '2':
            camButton[_0x3f0b('0x98')]['add'](_0x3d5895[_0x3f0b('0x99')]);
            continue;
        case '3':
            screenShareButton[_0x3f0b('0x98')]['remove'](_0x3d5895[_0x3f0b('0x7e')]);
            continue;
        case '4':
            callEndButton[_0x3f0b('0x98')][_0x3f0b('0x9')](_0x3d5895[_0x3f0b('0x7e')]);
            continue;
        case '5':
            camButton[_0x3f0b('0x98')][_0x3f0b('0x9')](_0x3d5895[_0x3f0b('0x7e')]);
            continue;
        case '6':
            callEndButton[_0x3f0b('0x98')][_0x3f0b('0x43')](_0x3f0b('0xb'));
            continue;
        case '7':
            screenShareButton[_0x3f0b('0x98')][_0x3f0b('0x43')](_0x3f0b('0xb'));
            continue;
        }
        break;
    }
};
socket['on'](_0x3f0b('0x89'), () => {
    myId = socket['id'];
});
socket['on'](_0x3f0b('0x5d'), _0x3bb1b7 => {
});
let localStream;
const configuration = { 'iceServers': [{ 'urls': _0x3f0b('0x3b') }] };
pc1 = new RTCPeerConnection(configuration);
pc1[_0x3f0b('0x37')] = async () => {
    const _0x313a0b = {
        'sAFjg': function (_0x10e952, _0x4fb4af) {
            return _0x10e952 === _0x4fb4af;
        },
        'QrKGY': _0x3f0b('0x64'),
        'AKejD': function (_0x2438b1) {
            return _0x2438b1();
        }
    };
    if (_0x313a0b[_0x3f0b('0x13')](pc1[_0x3f0b('0x5a')], _0x313a0b[_0x3f0b('0x5f')]))
        _0x313a0b[_0x3f0b('0x17')](endCall);
};
function endCall() {
    const _0xe50a1a = { 'LrVpL': 'white' };
    document[_0x3f0b('0xa')][_0x3f0b('0x54')]['backgroundColor'] = _0xe50a1a[_0x3f0b('0x3a')];
    callEndButton[_0x3f0b('0x15')] = !![];
    screenShareButton[_0x3f0b('0x15')] = !![];
    video_caller_mode[_0x3f0b('0x15')] = !![];
    caller_mode[_0x3f0b('0x15')] = ![];
    localStream[_0x3f0b('0x7f')]()[_0x3f0b('0x1c')](_0x297e8d => {
        _0x297e8d[_0x3f0b('0x28')]();
    });
}
pc1[_0x3f0b('0x1b')] = async ({candidate}) => {
    const _0x76cde2 = { 'rDbvp': _0x3f0b('0x50') };
    let _0xd46311 = {
        'caller': callDetails,
        'candid': candidate
    };
    await socket[_0x3f0b('0x95')](_0x76cde2[_0x3f0b('0x42')], _0xd46311);
};
pc1[_0x3f0b('0x19')] = async () => {
    const _0x3970d7 = { 'Dqfss': _0x3f0b('0x50') };
    try {
        await pc1['setLocalDescription'](await pc1[_0x3f0b('0x5c')]());
        let _0x412056 = {
            'caller': callDetails,
            'desc': pc1[_0x3f0b('0x2d')]
        };
        console[_0x3f0b('0xaa')](callDetails);
        await socket['emit'](_0x3970d7[_0x3f0b('0x57')], _0x412056);
    } catch (_0x25a775) {
        console['log'](_0x25a775);
    }
};
pc1[_0x3f0b('0x2b')] = async _0x174712 => {
    let _0xba51b2 = _0x174712[_0x3f0b('0x5e')][0x0];
    remoteVideo[_0x3f0b('0x2')] = _0x174712[_0x3f0b('0x5e')][0x0];
    remoteVideo[_0x3f0b('0xa0')]();
    screenShareButton['hidden'] = ![];
    callEndButton[_0x3f0b('0x15')] = ![];
    micButton[_0x3f0b('0x15')] = ![];
    camButton[_0x3f0b('0x15')] = ![];
};
remoteVideo[_0x3f0b('0x14')] = () => {
    window[_0x3f0b('0x25')](0x0, document['body']['scrollHeight']);
};
function onDataRecieved(_0x572709) {
    const _0x36f67c = {
        'rgsFn': function (_0x46105b, _0x34dc16) {
            return _0x46105b === _0x34dc16;
        }
    };
    if (_0x572709[_0x3f0b('0x61')][_0x3f0b('0x9f')] === !![]) {
    } else if (_0x36f67c['rgsFn'](_0x572709['data'][_0x3f0b('0x84')], !![])) {
    }
}
let onOpenChannelCallback = async _0x5b83cc => {
    const _0x50de4f = { 'QbUBy': _0x3f0b('0x93') };
    console[_0x3f0b('0xaa')](_0x50de4f[_0x3f0b('0x24')]);
    muteButton[_0x3f0b('0x74')] = ![];
};
let onClosedChannelCallBack = async _0x25d123 => {
    const _0x3ed2a4 = { 'vibHk': _0x3f0b('0x65') };
    muteButton[_0x3f0b('0x74')] = !![];
    console[_0x3f0b('0xaa')](_0x3ed2a4['vibHk']);
};
socket['on'](_0x3f0b('0x81'), async _0x58d5ec => {
    const _0x275cce = {
        'igYYO': function (_0x370689, _0x50a61f) {
            return _0x370689 === _0x50a61f;
        },
        'McmdA': _0x3f0b('0x1'),
        'XTkOm': function (_0x23e9ee, _0xe9bd23) {
            return _0x23e9ee === _0xe9bd23;
        },
        'HUlfL': _0x3f0b('0x20'),
        'ffvrn': _0x3f0b('0x59'),
        'LNRih': 'server_message',
        'OBqFL': function (_0x44809e, _0x221850) {
            return _0x44809e === _0x221850;
        },
        'kAaAF': 'answer',
        'FYHIo': _0x3f0b('0x7a'),
        'Yvrgg': function (_0xd18e14, _0x8db4dd) {
            return _0xd18e14 != _0x8db4dd;
        }
    };
    let _0x30508b = _0x58d5ec[_0x3f0b('0x6c')];
    let _0x1474da = _0x58d5ec[_0x3f0b('0x78')];
    let _0x260937 = _0x58d5ec[_0x3f0b('0x16')][_0x3f0b('0x22')];
    callDetails = {
        'caller_id': myId,
        'callee_id': _0x260937
    };
    try {
        if (_0x30508b) {
            if (_0x275cce[_0x3f0b('0xa5')](_0x30508b[_0x3f0b('0x92')], _0x275cce['ffvrn'])) {
                await pc1['setRemoteDescription'](_0x30508b);
                await localStream[_0x3f0b('0x7f')]()['forEach'](_0x26dbb5 => {
                    if (_0x275cce['igYYO'](_0x26dbb5['kind'], _0x275cce[_0x3f0b('0x7d')]))
                        rtc_sender_video = pc1[_0x3f0b('0x2e')](_0x26dbb5, localStream);
                    else if (_0x275cce[_0x3f0b('0xa5')](_0x26dbb5['kind'], _0x275cce['HUlfL']))
                        rtc_sender_audio = pc1[_0x3f0b('0x2e')](_0x26dbb5, localStream);
                });
                await pc1[_0x3f0b('0x63')](await pc1[_0x3f0b('0x23')]());
                await socket[_0x3f0b('0x95')](_0x275cce[_0x3f0b('0x76')], {
                    'caller': callDetails,
                    'desc': pc1[_0x3f0b('0x2d')]
                });
            } else if (_0x275cce['OBqFL'](_0x30508b[_0x3f0b('0x92')], _0x275cce['kAaAF'])) {
                await pc1[_0x3f0b('0xe')](_0x30508b);
            } else {
                console[_0x3f0b('0xaa')](_0x275cce['FYHIo']);
            }
        } else if (_0x1474da) {
            if (_0x275cce['Yvrgg'](_0x1474da, null))
                await pc1[_0x3f0b('0x62')](_0x1474da);
        }
    } catch (_0x2bd019) {
        console[_0x3f0b('0xaa')](_0x2bd019);
    }
});
callAcceptButton[_0x3f0b('0x36')] = async () => {
    const _0x45c66c = {
        'RDbsC': _0x3f0b('0xa7'),
        'TQlNG': 'send_call_answer',
        'OxkBG': _0x3f0b('0x69')
    };
    const _0x4c4e4c = _0x45c66c[_0x3f0b('0x9c')]['split']('|');
    let _0x190c6d = 0x0;
    while (!![]) {
        switch (_0x4c4e4c[_0x190c6d++]) {
        case '0':
            caller_mode[_0x3f0b('0x15')] = !![];
            continue;
        case '1':
            video_caller_mode[_0x3f0b('0x15')] = ![];
            continue;
        case '2':
            socket['emit'](_0x45c66c[_0x3f0b('0x21')], answer_details);
            continue;
        case '3':
            callRequestDialog['open'] = ![];
            continue;
        case '4':
            await navigator[_0x3f0b('0x4d')][_0x3f0b('0x94')]({
                'video': !![],
                'audio': !![]
            })['then'](_0x24d7ff => {
                localStream = _0x24d7ff;
                localVideo['srcObject'] = _0x24d7ff;
            });
            continue;
        case '5':
            answer_details[_0x3f0b('0x1d')] = !![];
            continue;
        case '6':
            tonePlayer['pause']();
            continue;
        case '7':
            document[_0x3f0b('0xa')][_0x3f0b('0x54')]['backgroundColor'] = _0x45c66c['OxkBG'];
            continue;
        }
        break;
    }
};
callRejectButton['onclick'] = async () => {
    const _0x10df5e = { 'kXHio': 'send_call_answer' };
    tonePlayer[_0x3f0b('0x6b')]();
    answer_details['acceptance'] = ![];
    callRequestDialog['open'] = ![];
    socket[_0x3f0b('0x95')](_0x10df5e[_0x3f0b('0x55')], answer_details);
};
socket['on']('call_request', _0x18f88e => {
    const _0x1ffe5d = {
        'XJJHP': function (_0x263329, _0x245a42) {
            return _0x263329 + _0x245a42;
        },
        'RMYCY': _0x3f0b('0x4e'),
        'MLBeZ': _0x3f0b('0x11')
    };
    let _0x423ed2 = _0x18f88e['name'];
    answer_details = {
        'reciever_id': _0x18f88e[_0x3f0b('0x88')],
        'sender_id': myId
    };
    dialogInnerText[_0x3f0b('0x8c')] = _0x1ffe5d[_0x3f0b('0x31')](_0x423ed2, _0x1ffe5d['RMYCY']);
    callRequestDialog['open'] = !![];
    tonePlayer[_0x3f0b('0x6')] = _0x1ffe5d[_0x3f0b('0x8e')];
    tonePlayer[_0x3f0b('0xa3')]();
});
async function getUserDetails(_0x555495) {
    const _0x5141fe = { 'vRMIG': _0x3f0b('0x85') };
    socket['emit'](_0x5141fe['vRMIG'], { 'caller_user_id': _0x555495 });
}
socket['on'](_0x3f0b('0xa8'), _0x3a7f67 => {
    const _0x28b7be = {
        'pZGjr': function (_0x585677, _0x12078a) {
            return _0x585677 === _0x12078a;
        },
        'StuZM': function (_0x5b98c3, _0x591c5d) {
            return _0x5b98c3(_0x591c5d);
        },
        'AUaHg': _0x3f0b('0x4c')
    };
    if (_0x28b7be['pZGjr'](!_0x3a7f67['isPresent'], ![])) {
        _0x28b7be[_0x3f0b('0xa6')](setupCall, _0x3a7f67);
    } else {
        alert(_0x28b7be[_0x3f0b('0xf')]);
    }
});
socket['on'](_0x3f0b('0x10'), _0x51302c => {
    const _0x3c9be1 = {
        'mYNGB': function (_0x5c4002, _0x4de9e8) {
            return _0x5c4002 === _0x4de9e8;
        },
        'jXlXF': function (_0xf9c87a) {
            return _0xf9c87a();
        },
        'uBGvo': function (_0x590bf0, _0x2280a6) {
            return _0x590bf0(_0x2280a6);
        },
        'DpIAM': 'Call\x20Denied'
    };
    tonePlayer[_0x3f0b('0x6b')]();
    if (_0x3c9be1[_0x3f0b('0x45')](_0x51302c[_0x3f0b('0x1d')], !![])) {
        _0x3c9be1[_0x3f0b('0x32')](startVideoCall);
    } else {
        _0x3c9be1[_0x3f0b('0x51')](alert, _0x3c9be1['DpIAM']);
    }
});
function setupCall(_0x36adf8) {
    const _0x491dad = {
        'VSkzB': '4|3|0|1|2',
        'KavUr': _0x3f0b('0x8d'),
        'OslPX': _0x3f0b('0x60'),
        'DZUfP': _0x3f0b('0x69'),
        'rLRXj': _0x3f0b('0x9b')
    };
    let _0x11458b = {};
    callDetails = {
        'caller_id': myId,
        'callee_id': _0x36adf8[_0x3f0b('0x22')]
    };
    _0x11458b['name'] = My_ID;
    _0x11458b[_0x3f0b('0x88')] = myId;
    _0x11458b['callee_id'] = callDetails[_0x3f0b('0x72')];
    console[_0x3f0b('0xaa')](_0x11458b);
    document[_0x3f0b('0xa')][_0x3f0b('0x54')][_0x3f0b('0xc')] = _0x491dad[_0x3f0b('0x30')];
    caller_mode[_0x3f0b('0x15')] = !![];
    video_caller_mode[_0x3f0b('0x15')] = ![];
    try {
        navigator['mediaDevices'][_0x3f0b('0x94')]({
            'video': !![],
            'audio': !![]
        })[_0x3f0b('0x91')](_0x1d385b => {
            const _0xbad91f = _0x491dad['VSkzB'][_0x3f0b('0x67')]('|');
            let _0x3cb1ec = 0x0;
            while (!![]) {
                switch (_0xbad91f[_0x3cb1ec++]) {
                case '0':
                    tonePlayer[_0x3f0b('0x6')] = _0x491dad['KavUr'];
                    continue;
                case '1':
                    tonePlayer[_0x3f0b('0xa3')]();
                    continue;
                case '2':
                    socket[_0x3f0b('0x95')](_0x491dad[_0x3f0b('0x70')], _0x11458b);
                    continue;
                case '3':
                    localVideo[_0x3f0b('0x2')] = _0x1d385b;
                    continue;
                case '4':
                    localStream = _0x1d385b;
                    continue;
                }
                break;
            }
        });
    } catch (_0x24e208) {
        console['log'](_0x491dad[_0x3f0b('0x3c')] + _0x24e208);
    }
}
function startVideoCall() {
    const _0x3e25bb = {
        'NSDEK': _0x3f0b('0x1'),
        'ciLHz': _0x3f0b('0x3d'),
        'eXOwr': _0x3f0b('0x20'),
        'XrjBg': function (_0x99fe46, _0x23656c) {
            return _0x99fe46 + _0x23656c;
        },
        'BuyeH': 'media\x20error:'
    };
    try {
        localStream[_0x3f0b('0x7f')]()['forEach'](_0x50c70a => {
            if (_0x50c70a['kind'] === _0x3e25bb[_0x3f0b('0x68')]) {
                _0x50c70a[_0x3f0b('0x41')] = _0x3e25bb['ciLHz'];
                rtc_sender_video = pc1['addTrack'](_0x50c70a, localStream);
            } else if (_0x50c70a['kind'] === _0x3e25bb[_0x3f0b('0x29')])
                rtc_sender_audio = pc1[_0x3f0b('0x2e')](_0x50c70a, localStream);
        });
    } catch (_0xcc1f86) {
        console['log'](_0x3e25bb[_0x3f0b('0x1a')](_0x3e25bb[_0x3f0b('0x2f')], _0xcc1f86));
    }
}
camButton[_0x3f0b('0x36')] = async () => {
    const _0x9f979f = {
        'wYrmN': function (_0x54e1cd, _0x547e81) {
            return _0x54e1cd === _0x547e81;
        },
        'zkunS': _0x3f0b('0x9a'),
        'sbmES': 'grey',
        'PEizC': _0x3f0b('0x6d'),
        'LwcyE': '3|2|1|0|4',
        'PsOkJ': _0x3f0b('0x6a')
    };
    let _0x2dc6b3 = document[_0x3f0b('0x53')](_0x3f0b('0x79'));
    if (_0x9f979f[_0x3f0b('0x58')](isCameraOff, ![])) {
        const _0x3d452d = _0x9f979f[_0x3f0b('0x35')]['split']('|');
        let _0x38d876 = 0x0;
        while (!![]) {
            switch (_0x3d452d[_0x38d876++]) {
            case '0':
                isCameraOff = !![];
                continue;
            case '1':
                _0x2dc6b3[_0x3f0b('0x49')] = _0x3f0b('0x3f');
                continue;
            case '2':
                localStream[_0x3f0b('0x71')]()[_0x3f0b('0x1c')](_0x273f99 => {
                    _0x273f99['enabled'] = ![];
                });
                continue;
            case '3':
                camButton[_0x3f0b('0x98')][_0x3f0b('0x43')](_0x9f979f[_0x3f0b('0x26')]);
                continue;
            case '4':
                camButton['classList']['remove'](_0x9f979f[_0x3f0b('0x87')]);
                continue;
            }
            break;
        }
    } else {
        const _0x295a67 = _0x9f979f[_0x3f0b('0x46')][_0x3f0b('0x67')]('|');
        let _0x397ef0 = 0x0;
        while (!![]) {
            switch (_0x295a67[_0x397ef0++]) {
            case '0':
                camButton[_0x3f0b('0x98')][_0x3f0b('0x9')](_0x9f979f[_0x3f0b('0x26')]);
                continue;
            case '1':
                camButton[_0x3f0b('0x98')][_0x3f0b('0x43')](_0x9f979f[_0x3f0b('0x87')]);
                continue;
            case '2':
                _0x2dc6b3[_0x3f0b('0x49')] = _0x9f979f['PsOkJ'];
                continue;
            case '3':
                isCameraOff = ![];
                continue;
            case '4':
                localStream[_0x3f0b('0x71')]()['forEach'](_0x46511b => {
                    _0x46511b[_0x3f0b('0x1e')] = !![];
                });
                continue;
            }
            break;
        }
    }
};
screenShareButton[_0x3f0b('0x36')] = async () => {
    const _0x43cbd7 = {
        'IRMCo': _0x3f0b('0x97'),
        'QXAwN': 'peerVideo',
        'FcCiU': 'peerScreen',
        'AbnVA': _0x3f0b('0x4'),
        'tCBYm': _0x3f0b('0x6d'),
        'vXTJo': function (_0x35c4d5, _0x5f216f) {
            return _0x35c4d5 === _0x5f216f;
        }
    };
    if (isSharingScreen == ![]) {
        isSharingScreen = !![];
        screenShareButton[_0x3f0b('0x98')][_0x3f0b('0x43')](_0x43cbd7[_0x3f0b('0x82')]);
        screenShareButton['classList'][_0x3f0b('0x9')](_0x43cbd7[_0x3f0b('0x8a')]);
        try {
            await navigator[_0x3f0b('0x4d')]['getDisplayMedia']()[_0x3f0b('0x91')](async _0x575c3c => {
                userDisplayStream = _0x575c3c;
                await _0x575c3c[_0x3f0b('0x71')]()[_0x3f0b('0x1c')](_0x34ab5e => {
                    const _0x3496e0 = {
                        'fsMqT': _0x43cbd7['IRMCo'],
                        'jIWQB': _0x43cbd7[_0x3f0b('0x86')],
                        'xMLqL': _0x3f0b('0x6d')
                    };
                    _0x34ab5e[_0x3f0b('0x41')] = _0x43cbd7[_0x3f0b('0xa4')];
                    rtc_sender_video[_0x3f0b('0x0')](_0x34ab5e);
                    _0x34ab5e['onended'] = async () => {
                        localStream[_0x3f0b('0x71')]()[_0x3f0b('0x1c')](_0x16c4fb => {
                            const _0x2aad43 = _0x3496e0[_0x3f0b('0x4a')][_0x3f0b('0x67')]('|');
                            let _0x14cdef = 0x0;
                            while (!![]) {
                                switch (_0x2aad43[_0x14cdef++]) {
                                case '0':
                                    _0x16c4fb['contentHint'] = _0x3496e0['jIWQB'];
                                    continue;
                                case '1':
                                    rtc_sender_video['replaceTrack'](_0x16c4fb);
                                    continue;
                                case '2':
                                    isSharingScreen = ![];
                                    continue;
                                case '3':
                                    screenShareButton[_0x3f0b('0x98')]['remove']('green');
                                    continue;
                                case '4':
                                    screenShareButton[_0x3f0b('0x98')]['add'](_0x3496e0[_0x3f0b('0x66')]);
                                    continue;
                                }
                                break;
                            }
                        });
                    };
                });
            });
        } catch (_0x1c65a4) {
            console[_0x3f0b('0x3')](_0x1c65a4);
        }
    } else if (_0x43cbd7[_0x3f0b('0x73')](isSharingScreen, !![])) {
        await localStream[_0x3f0b('0x71')]()[_0x3f0b('0x1c')](_0x15e456 => {
            rtc_sender_video[_0x3f0b('0x0')](_0x15e456);
        });
        await userDisplayStream[_0x3f0b('0x71')]()[_0x3f0b('0x1c')](_0x30f74d => {
            _0x30f74d[_0x3f0b('0x28')]();
        });
    }
};
micButton['onclick'] = async () => {
    const _0x26a0b7 = {
        'NbsCM': _0x3f0b('0x6e'),
        'Ktgfk': 'grey',
        'FvIRr': _0x3f0b('0x6d')
    };
    let _0x1be3d3 = document[_0x3f0b('0x53')](_0x26a0b7[_0x3f0b('0x75')]);
    if (isMute === !![]) {
        _0x1be3d3[_0x3f0b('0x49')] = 'mic';
        micButton[_0x3f0b('0x98')]['remove'](_0x26a0b7['Ktgfk']);
        micButton[_0x3f0b('0x98')][_0x3f0b('0x43')](_0x26a0b7[_0x3f0b('0x6f')]);
    } else {
        _0x1be3d3[_0x3f0b('0x49')] = 'mic_mute';
        micButton[_0x3f0b('0x98')][_0x3f0b('0x9')](_0x26a0b7[_0x3f0b('0x6f')]);
        _0x1be3d3[_0x3f0b('0x98')][_0x3f0b('0x43')](_0x3f0b('0xa9'));
        pc1[_0x3f0b('0x1f')](rtc_sender_audio);
    }
};
callButton[_0x3f0b('0x36')] = async () => {
    const _0x38a3ab = {
        'QgyDw': function (_0xc736e8, _0x19134c) {
            return _0xc736e8(_0x19134c);
        }
    };
    user_caller_id = user_id[_0x3f0b('0x4b')];
    isCalling = !![];
    _0x38a3ab[_0x3f0b('0x48')](getUserDetails, user_caller_id);
};
callEndButton[_0x3f0b('0x36')] = async () => {
    const _0x5c31b4 = {
        'XRxsc': function (_0x2530da) {
            return _0x2530da();
        }
    };
    await pc1[_0x3f0b('0x8b')]();
    await _0x5c31b4['XRxsc'](endCall);
};