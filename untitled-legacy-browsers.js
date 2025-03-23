﻿/***************** 
 * Untitled *
 *****************/


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(recordRoutineBegin());
flowScheduler.add(recordRoutineEachFrame());
flowScheduler.add(recordRoutineEnd());
flowScheduler.add(playbackRoutineBegin());
flowScheduler.add(playbackRoutineEachFrame());
flowScheduler.add(playbackRoutineEnd());
flowScheduler.add(saveRoutineBegin());
flowScheduler.add(saveRoutineEachFrame());
flowScheduler.add(saveRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var mouse;
var text;
var recordClock;
var text_2;
var playbackClock;
var text_3;
var saveClock;
var text_4;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'intro',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "record"
  recordClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'recording... (5 sec)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "playback"
  playbackClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'playback...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "save"
  saveClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'saving',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var introMaxDurationReached;
var gotValidClick;
var introMaxDuration;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    introClock.reset();
    routineTimer.reset();
    introMaxDurationReached = false;
    // update component parameters for each repeat
    // 在 introRoutineBegin 函數中
    console.log("檢查麥克風權限狀態...");
    
    // 全局變數用於存儲音訊數據
    window.audioChunks = [];
    window.mediaRecorder = null;
    
    // 首先檢查權限狀態
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'microphone' })
        .then(permissionStatus => {
          console.log("麥克風權限狀態:", permissionStatus.state);
          
          // 根據權限狀態執行不同的操作
          if (permissionStatus.state === 'granted') {
            console.log("麥克風權限已預先授予");
            // 已有權限，直接獲取麥克風流
            getAndSetupMicrophone();
          } else {
            console.log("需要請求麥克風權限");
            // 需要請求權限
            requestMicrophoneAccess();
          }
          
          // 監聽權限變化
          permissionStatus.onchange = () => {
            console.log("麥克風權限狀態變更為:", permissionStatus.state);
          };
        })
        .catch(error => {
          console.error("檢查權限狀態失敗:", error);
          // 無法檢查權限狀態，直接嘗試請求
          requestMicrophoneAccess();
        });
    } else {
      console.log("瀏覽器不支持 permissions API，直接請求麥克風");
      // 無法檢查權限狀態，直接嘗試請求
      requestMicrophoneAccess();
    }
    
    // 獲取並設置麥克風
    function getAndSetupMicrophone() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
          .then(stream => {
            console.log("成功獲取麥克風流");
            console.log("麥克風串流軌道數量:", stream.getAudioTracks().length);
            console.log("麥克風是否靜音:", stream.getAudioTracks()[0].muted);
            console.log("麥克風狀態:", stream.getAudioTracks()[0].enabled);
            
            window.microphoneStream = stream;
            
            // 可以繼續進行實驗
            setTimeout(() => {
              continueRoutine = false;
            }, 1000);
          })
          .catch(error => {
            console.error("獲取麥克風流失敗:", error);
            // 即使失敗也繼續實驗，但可能需要提示用戶
            setTimeout(() => {
              continueRoutine = false;
            }, 1000);
          });
      } else {
        console.error("瀏覽器不支持 getUserMedia");
        // 不支持也繼續實驗，但可能需要提示用戶
        setTimeout(() => {
          continueRoutine = false;
        }, 1000);
      }
    }
    
    // 請求麥克風權限
    function requestMicrophoneAccess() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
          .then(stream => {
            console.log("麥克風權限已授予");
            console.log("麥克風串流軌道數量:", stream.getAudioTracks().length);
            console.log("麥克風是否靜音:", stream.getAudioTracks()[0].muted);
            console.log("麥克風狀態:", stream.getAudioTracks()[0].enabled);
            
            window.microphoneStream = stream;
            
            // 成功獲取權限後，繼續實驗
            setTimeout(() => {
              continueRoutine = false;
            }, 2000); // 給用戶更多時間看到權限已授予
          })
          .catch(error => {
            console.error("麥克風權限錯誤:", error);
            console.error("錯誤名稱:", error.name);
            console.error("錯誤訊息:", error.message);
            
            // 權限被拒絕，也繼續實驗（可能需要顯示提示）
            setTimeout(() => {
              continueRoutine = false;
            }, 1000);
          });
      } else {
        console.error("瀏覽器不支持getUserMedia");
        // 不支持getUserMedia，繼續實驗
        setTimeout(() => {
          continueRoutine = false;
        }, 1000);
      }
    }
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    introMaxDuration = null
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(mouse);
    introComponents.push(text);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var recordMaxDurationReached;
var recordMaxDuration;
var recordComponents;
function recordRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'record' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    recordClock.reset();
    routineTimer.reset();
    recordMaxDurationReached = false;
    // update component parameters for each repeat
    // 記錄開始時間
    window.recordingStartTime = Date.now();
    // 清空之前的錄音數據
    window.audioChunks = [];
    // 如果有麥克風權限，創建新的MediaRecorder
    if (window.microphoneStream) {
      try {
        // 指定 WebM 音訊格式和比特率
        window.mediaRecorder = new MediaRecorder(window.microphoneStream, {
          mimeType: 'audio/webm',
          audioBitsPerSecond: 128000
        });
        
        // 設置數據可用時的回調
        window.mediaRecorder.ondataavailable = function(e) {
          if (e.data.size > 0) {
            window.audioChunks.push(e.data);
          }
        };
        
        // 開始錄音
        window.mediaRecorder.start();
        console.log("開始錄音");
        
        // 5秒後自動停止錄音並進入下一階段
        setTimeout(() => {
          if (window.mediaRecorder && window.mediaRecorder.state !== 'inactive') {
            window.mediaRecorder.stop();
            console.log("錄音自動停止");
          }
          // 記錄總錄音時間
          window.recordingDuration = Date.now() - window.recordingStartTime;
          // 1秒後進入下一階段
          setTimeout(() => {
            continueRoutine = false;
          }, 1000);
        }, 5000);
      } catch (error) {
        console.error("創建MediaRecorder時出錯:", error);
      }
    } else {
      console.error("無法取得麥克風串流");
    }
    psychoJS.experiment.addData('record.started', globalClock.getTime());
    recordMaxDuration = null
    // keep track of which components have finished
    recordComponents = [];
    recordComponents.push(text_2);
    
    recordComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function recordRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'record' ---
    // get current time
    t = recordClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    recordComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recordRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'record' ---
    recordComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('record.stopped', globalClock.getTime());
    // the Routine "record" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var playbackMaxDurationReached;
var playbackMaxDuration;
var playbackComponents;
function playbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'playback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    playbackClock.reset();
    routineTimer.reset();
    playbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_JS
    // 在 playbackRoutineBegin 函數中，添加以下代碼確保 AudioContext 正確啟動
    try {
      // 檢查是否有錄音數據
      if (window.audioChunks && window.audioChunks.length > 0) {
        // 創建音訊Blob
        const audioBlob = new Blob(window.audioChunks, { type: 'audio/webm' });
        window.audioBlob = audioBlob; // 儲存在全局變數中以便後續使用
        
        // 記錄音訊相關信息，這些都顯示在控制台中
        console.log("錄音時長: " + (window.recordingDuration / 1000).toFixed(1) + " 秒");
        console.log("錄音大小: " + (audioBlob.size / 1024).toFixed(1) + " KB");
        
        // 使用 FileReader 將 Blob 轉換為 base64
        const reader = new FileReader();
        reader.onloadend = function() {
          const base64data = reader.result.split(',')[1];
          window.audioBase64 = base64data;
          console.log("音訊已轉換為 base64 格式，準備上傳");
        };
        reader.readAsDataURL(audioBlob);
        
        // 創建音訊URL
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // 創建音訊元素用於播放
        const audio = new Audio(audioUrl);
        
        // 確保在用戶互動後啟動播放
        audio.play().then(() => {
          console.log("音訊播放中");
          
          // 音訊播放結束後自動進入下一階段
          audio.onended = function() {
            setTimeout(() => {
              console.log("音訊播放結束");
              continueRoutine = false;
            }, 500);
          };
        }).catch(error => {
          console.error("音訊播放失敗:", error);
          continueRoutine = false;
        });
      } else {
        console.log("沒有錄音數據可播放");
        continueRoutine = false;
      }
    } catch (error) {
      console.error("處理錄音時出錯:", error);
      continueRoutine = false;
    }
    psychoJS.experiment.addData('playback.started', globalClock.getTime());
    playbackMaxDuration = null
    // keep track of which components have finished
    playbackComponents = [];
    playbackComponents.push(text_3);
    
    playbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function playbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'playback' ---
    // get current time
    t = playbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    playbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function playbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'playback' ---
    playbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('playback.stopped', globalClock.getTime());
    // 檢查音訊數據是否存在
    console.log("檢查音訊數據...");
    if (window.audioBlob) {
      console.log("音訊數據存在，大小: " + (window.audioBlob.size / 1024).toFixed(1) + " KB");
      
      // 如果 base64 轉換完成
      if (window.audioBase64) {
        console.log("保存音訊數據...");
        
        fetch('https://pipe.jspsych.org/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
          body: JSON.stringify({
            experimentID: 'zqejJsvNSVAI', // 您的 DataPipe ID
            filename: `mic_test_${expInfo["participant"]}_${Date.now()}.webm`,
            data: window.audioBase64,
            datatype: 'audio/webm'
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log('音訊保存成功:', data);
          setTimeout(() => {
            quitPsychoJS();
          }, 3000);
        })
        .catch(error => {
          console.error('音訊保存失敗:', error);
          setTimeout(() => {
            quitPsychoJS();
          }, 3000);
        });
      } else {
        console.log("音訊 base64 轉換未完成");
        // 嘗試重新轉換一次
        const reader = new FileReader();
        reader.onloadend = function() {
          window.audioBase64 = reader.result.split(',')[1];
          console.log("音訊重新轉換為 base64 完成，準備上傳");
          
          // 使用轉換後的 base64 數據上傳
          fetch('https://pipe.jspsych.org/api/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: '*/*',
            },
            body: JSON.stringify({
              experimentID: 'zqejJsvNSVAI',
              filename: `mic_test_${expInfo["participant"]}_${Date.now()}.webm`,
              data: window.audioBase64,
              datatype: 'audio/webm'
            }),
          })
          .then(response => response.json())
          .then(data => {
            console.log('音訊保存成功:', data);
            setTimeout(() => {
              quitPsychoJS();
            }, 3000);
          })
          .catch(error => {
            console.error('音訊保存失敗:', error);
            setTimeout(() => {
              quitPsychoJS();
            }, 3000);
          });
        };
        reader.readAsDataURL(window.audioBlob);
      }
    } else {
      console.log("沒有音訊數據需要保存");
      setTimeout(() => {
        quitPsychoJS();
      }, 3000);
    }
    // the Routine "playback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var saveMaxDurationReached;
var saveMaxDuration;
var saveComponents;
function saveRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'save' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    saveClock.reset();
    routineTimer.reset();
    saveMaxDurationReached = false;
    // update component parameters for each repeat
    // 在 saveRoutineBegin 函數中
    if (window.audioFile) {
      console.log("上傳音訊文件...");
      
      // 使用 FormData 上傳文件
      const formData = new FormData();
      formData.append('file', window.audioFile);
      formData.append('experimentID', 'zqejJsvNSVAI');
      
      fetch('https://pipe.jspsych.org/api/upload', {  // 注意這裡使用 upload 端點
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('音訊上傳成功:', data);
        // 將文件 URL 添加到實驗數據中
        if (data.url) {
          psychoJS.experiment.addData('audioFileURL', data.url);
        }
        setTimeout(() => {
          quitPsychoJS();
        }, 3000);
      })
      .catch(error => {
        console.error('音訊上傳失敗:', error);
        setTimeout(() => {
          quitPsychoJS();
        }, 3000);
      });
    } else {
      console.log("沒有音訊文件需要上傳");
      setTimeout(() => {
        quitPsychoJS();
      }, 3000);
    }
    psychoJS.experiment.addData('save.started', globalClock.getTime());
    saveMaxDuration = null
    // keep track of which components have finished
    saveComponents = [];
    saveComponents.push(text_4);
    
    saveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function saveRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'save' ---
    // get current time
    t = saveClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    saveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function saveRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'save' ---
    saveComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('save.stopped', globalClock.getTime());
    // the Routine "save" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
