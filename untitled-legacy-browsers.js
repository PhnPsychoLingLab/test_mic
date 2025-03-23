/***************** 
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
    console.log("請求麥克風權限中...");
    
    // 初始化音頻記錄系統
    window.audioRecorder = {
      // 存儲音頻數據
      chunks: [],
      // 錄音開始時間
      startTime: null,
      // 錄音持續時間
      duration: 0,
      // 錄音狀態
      isRecording: false,
      // 麥克風流
      stream: null,
      // 媒體錄音器
      mediaRecorder: null,
      // 錄音 blob
      blob: null,
      // base64 編碼的數據
      base64: null,
      
      // 初始化方法
      init: function(stream) {
        this.stream = stream;
        console.log("麥克風準備就緒");
        return true;
      },
      
      // 開始錄音
      start: function() {
        if (!this.stream) {
          console.error("麥克風流不可用");
          return false;
        }
        
        try {
          this.chunks = [];
          this.startTime = Date.now();
          
          // 創建 MediaRecorder 實例
          this.mediaRecorder = new MediaRecorder(this.stream, {
            mimeType: 'audio/webm;codecs=opus',
            audioBitsPerSecond: 128000
          });
          
          // 設置數據可用時的回調
          this.mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
              this.chunks.push(e.data);
            }
          };
          
          // 錄音結束時的處理
          this.mediaRecorder.onstop = () => {
            // 計算持續時間
            this.duration = Date.now() - this.startTime;
            
            // 創建 Blob
            this.blob = new Blob(this.chunks, { type: 'audio/webm;codecs=opus' });
            
            // 轉換為 base64
            const reader = new FileReader();
            reader.onloadend = () => {
              this.base64 = reader.result.split(',')[1];
              console.log(`錄音處理完成，時長: ${(this.duration/1000).toFixed(1)}秒，大小: ${(this.blob.size/1024).toFixed(1)}KB`);
            };
            reader.readAsDataURL(this.blob);
            
            this.isRecording = false;
          };
          
          // 開始錄音
          this.mediaRecorder.start();
          this.isRecording = true;
          console.log("開始錄音");
          return true;
        } catch (error) {
          console.error("開始錄音時出錯:", error);
          return false;
        }
      },
      
      // 停止錄音
      stop: function() {
        if (this.mediaRecorder && this.isRecording) {
          this.mediaRecorder.stop();
          console.log("錄音已停止");
          return true;
        }
        return false;
      },
      
      // 播放錄音
      play: function() {
        if (!this.blob) {
          console.error("沒有錄音數據可播放");
          return false;
        }
        
        try {
          // 創建音頻 URL
          const audioUrl = URL.createObjectURL(this.blob);
          
          // 創建音頻元素
          const audio = new Audio(audioUrl);
          
          // 播放完成後釋放 URL
          audio.onended = () => {
            URL.revokeObjectURL(audioUrl);
            console.log("錄音播放完成");
          };
          
          // 播放音頻
          audio.play().then(() => {
            console.log("開始播放錄音");
          }).catch(error => {
            console.error("播放錄音時出錯:", error);
          });
          
          return audio;
        } catch (error) {
          console.error("播放錄音時出錯:", error);
          return false;
        }
      },
      
      // 上傳錄音
      upload: function(experimentId, filename) {
        if (!this.base64) {
          console.error("沒有可上傳的錄音數據");
          return Promise.reject("沒有可上傳的錄音數據");
        }
        
        return fetch('https://pipe.jspsych.org/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
          body: JSON.stringify({
            experimentID: experimentId,
            filename: filename,
            data: this.base64,
            datatype: 'audio/webm;codecs=opus'
          }),
        })
        .then(response => {
          console.log("上傳響應狀態:", response.status);
          return response.json();
        })
        .then(data => {
          console.log("錄音上傳成功:", data);
          return data;
        });
      },
      
      // 清理資源
      cleanup: function() {
        // 停止錄音
        if (this.isRecording) {
          this.stop();
        }
        
        // 釋放 blob URL
        URL.revokeObjectURL(this.blob);
        
        // 停止麥克風流
        if (this.stream) {
          this.stream.getTracks().forEach(track => track.stop());
          this.stream = null;
        }
        
        console.log("錄音資源已清理");
      }
    };
    
    // 請求麥克風權限
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: false,
        })
        .then((stream) => {
          console.log("麥克風權限已授予");
          
          // 初始化錄音器
          window.audioRecorder.init(stream);
          
          // 3秒後自動繼續
          setTimeout(() => {
            continueRoutine = false;
          }, 3000);
        })
        .catch((err) => {
          console.error(`麥克風權限錯誤: ${err}`);
          console.error("錯誤名稱:", err.name);
          console.error("錯誤訊息:", err.message);
        });
    } else {
      console.error("瀏覽器不支持getUserMedia");
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
    // 開始錄音
    if (window.audioRecorder) {
      window.audioRecorder.start();
      
      // 5秒後自動停止錄音
      setTimeout(() => {
        if (window.audioRecorder && window.audioRecorder.isRecording) {
          window.audioRecorder.stop();
          
          // 記錄錄音信息到實驗數據
          setTimeout(() => {
            if (window.audioRecorder.blob) {
              psychoJS.experiment.addData('audioDuration', window.audioRecorder.duration);
              psychoJS.experiment.addData('audioSize', window.audioRecorder.blob.size);
            }
            
            // 1秒後繼續
            setTimeout(() => {
              continueRoutine = false;
            }, 1000);
          }, 500); // 等待錄音處理完成
        }
      }, 5000); // 5秒錄音時間
    } else {
      console.error("錄音系統未初始化");
      continueRoutine = false;
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
    // 播放錄音
    if (window.audioRecorder && window.audioRecorder.blob) {
      const audio = window.audioRecorder.play();
      
      if (audio) {
        // 監聽播放結束事件
        audio.onended = () => {
          setTimeout(() => {
            continueRoutine = false;
          }, 500);
        };
        
        // 設置超時，以防播放失敗
        setTimeout(() => {
          if (continueRoutine) {
            continueRoutine = false;
          }
        }, 10000); // 10秒後自動繼續
      } else {
        console.error("無法播放錄音");
        continueRoutine = false;
      }
    } else {
      console.log("沒有錄音可播放");
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
    // 創建基本數據對象
    const expData = {
      experiment: "麥克風測試",
      participant: expInfo["participant"] || "unknown",
      datetime: new Date().toISOString(),
      recordingDuration: window.audioRecorder ? window.audioRecorder.duration : 0,
      recordingSize: window.audioRecorder && window.audioRecorder.blob ? window.audioRecorder.blob.size : 0
    };
    
    // 創建CSV格式字符串
    const dataHeader = Object.keys(expData).join(",");
    const dataValues = Object.values(expData).join(",");
    const csvData = dataHeader + "\n" + dataValues;
    
    console.log("保存實驗數據...");
    
    // 保存實驗數據
    fetch('https://pipe.jspsych.org/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
      body: JSON.stringify({
        experimentID: 'zqejJsvNSVAI', // 您的DataPipe ID
        filename: `mic_test_${expInfo["participant"]}_${Date.now()}.csv`,
        data: csvData
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('數據保存成功:', data);
      
      // 上傳音頻
      if (window.audioRecorder && window.audioRecorder.blob) {
        window.audioRecorder.upload(
          'zqejJsvNSVAI',
          `audio_${expInfo["participant"]}_${Date.now()}.webm`
        )
        .then(() => {
          console.log("音頻上傳完成");
          
          // 清理錄音資源
          window.audioRecorder.cleanup();
          
          // 結束實驗
          setTimeout(() => {
            quitPsychoJS('實驗完成，感謝參與！', true);
          }, 3000);
        })
        .catch(error => {
          console.error("音頻上傳失敗:", error);
          
          // 仍然結束實驗
          setTimeout(() => {
            quitPsychoJS('實驗完成，但音頻上傳失敗。', true);
          }, 3000);
        });
      } else {
        console.log("沒有音頻需要上傳");
        setTimeout(() => {
          quitPsychoJS('實驗完成，感謝參與！', true);
        }, 3000);
      }
    })
    .catch(error => {
      console.error('數據保存失敗:', error);
      setTimeout(() => {
        quitPsychoJS('實驗完成，但數據保存失敗。', true);
      }, 3000);
    });
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
