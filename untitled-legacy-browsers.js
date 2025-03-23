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
    // 在 intro routine 的代碼中
    console.log("請求麥克風權限中...");
    
    // 初始化音頻記錄系統
    window.audioRecorder = {
      // 原有的屬性和方法保持不變...
      
      // 將 AudioBuffer 轉換為 WAV 格式的方法
      audioBufferToWav: function(buffer) {
        const numOfChan = buffer.numberOfChannels;
        const length = buffer.length * numOfChan * 2;
        const sampleRate = buffer.sampleRate;
        
        const buffer8 = new ArrayBuffer(44 + length);
        const data = new DataView(buffer8);
        let offset = 0;
        
        // RIFF 標識符
        this.writeString(data, offset, 'RIFF'); offset += 4;
        // RIFF 塊長度
        data.setUint32(offset, 36 + length, true); offset += 4;
        // RIFF 類型
        this.writeString(data, offset, 'WAVE'); offset += 4;
        // 格式塊標識符
        this.writeString(data, offset, 'fmt '); offset += 4;
        // 格式塊長度
        data.setUint32(offset, 16, true); offset += 4;
        // 音頻格式（PCM）
        data.setUint16(offset, 1, true); offset += 2;
        // 通道數
        data.setUint16(offset, numOfChan, true); offset += 2;
        // 採樣率
        data.setUint32(offset, sampleRate, true); offset += 4;
        // 位元率
        data.setUint32(offset, sampleRate * 2 * numOfChan, true); offset += 4;
        // 塊對齊
        data.setUint16(offset, numOfChan * 2, true); offset += 2;
        // 位深度
        data.setUint16(offset, 16, true); offset += 2;
        // 數據塊標識符
        this.writeString(data, offset, 'data'); offset += 4;
        // 數據塊長度
        data.setUint32(offset, length, true); offset += 4;
        
        // 寫入PCM數據
        const channelData = [];
        for (let i = 0; i < numOfChan; i++) {
          channelData.push(buffer.getChannelData(i));
        }
        
        let sample;
        for (let i = 0; i < buffer.length; i++) {
          for (let channel = 0; channel < numOfChan; channel++) {
            sample = Math.max(-1, Math.min(1, channelData[channel][i]));
            sample = (sample < 0) ? sample * 32768 : sample * 32767;
            data.setInt16(offset, sample, true); offset += 2;
          }
        }
        
        return new Blob([data], { type: 'audio/wav' });
      },
      
      // 輔助方法：將字符串寫入 DataView
      writeString: function(dataView, offset, string) {
        for (let i = 0; i < string.length; i++) {
          dataView.setUint8(offset + i, string.charCodeAt(i));
        }
      },
      
      // 直接錄製為 WAV 格式
      startWavRecording: function() {
        if (!this.stream) {
          console.error("麥克風流不可用");
          return false;
        }
        
        try {
          this.chunks = [];
          this.startTime = Date.now();
          
          // 創建音頻上下文
          this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
          const sampleRate = this.audioContext.sampleRate;
          
          // 創建 MediaRecorder
          this.mediaRecorder = new MediaRecorder(this.stream);
          
          // 當數據可用時收集
          this.mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
              this.chunks.push(e.data);
            }
          };
          
          // 每秒收集一次數據
          this.mediaRecorder.start(1000);
          
          // 錄音結束時處理
          this.mediaRecorder.onstop = () => {
            // 計算持續時間
            this.duration = Date.now() - this.startTime;
            
            // 創建 Blob
            const webmBlob = new Blob(this.chunks, { type: 'audio/webm' });
            
            // 從 webm 轉換為 wav
            this.convertToWav(webmBlob).then(wavBlob => {
              this.wavBlob = wavBlob;
              console.log(`WAV 轉換完成，時長: ${(this.duration/1000).toFixed(1)}秒，大小: ${(wavBlob.size/1024).toFixed(1)}KB`);
              
              // 轉換為 base64
              const reader = new FileReader();
              reader.onloadend = () => {
                this.wavBase64 = reader.result.split(',')[1];
                console.log("WAV base64 轉換完成");
              };
              reader.readAsDataURL(wavBlob);
            }).catch(error => {
              console.error("WAV 轉換失敗:", error);
            });
            
            this.isRecording = false;
          };
          
          this.isRecording = true;
          console.log("開始 WAV 錄音");
          return true;
        } catch (error) {
          console.error("開始 WAV 錄音時出錯:", error);
          return false;
        }
      },
      
      // 將 WebM Blob 轉換為 WAV
      convertToWav: function(webmBlob) {
        return new Promise((resolve, reject) => {
          // 創建音頻上下文
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          
          // 從 Blob 創建音頻
          const fileReader = new FileReader();
          fileReader.onload = (e) => {
            const arrayBuffer = e.target.result;
            
            audioContext.decodeAudioData(arrayBuffer)
              .then(audioBuffer => {
                // 轉換為 WAV
                const wavBlob = this.audioBufferToWav(audioBuffer);
                resolve(wavBlob);
              })
              .catch(error => {
                console.error("解碼音頻數據失敗:", error);
                reject(error);
              });
          };
          fileReader.onerror = reject;
          fileReader.readAsArrayBuffer(webmBlob);
        });
      },
      
      // 上傳 WAV 格式的錄音
      uploadWav: function(experimentId, filename) {
        if (!this.wavBase64) {
          console.error("沒有可上傳的 WAV 錄音數據");
          return Promise.reject("沒有可上傳的 WAV 錄音數據");
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
            data: this.wavBase64,
            datatype: 'audio/wav'
          }),
        })
        .then(response => {
          console.log("上傳響應狀態:", response.status);
          return response.json();
        })
        .then(data => {
          console.log("WAV 錄音上傳成功:", data);
          return data;
        });
      }
    };
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
    // 開始 WAV 錄音
    if (window.audioRecorder) {
      window.audioRecorder.startWavRecording();
      
      // 5秒後自動停止錄音
      setTimeout(() => {
        if (window.audioRecorder && window.audioRecorder.isRecording) {
          // 在停止前確保捕獲最後的數據
          if (window.audioRecorder.mediaRecorder) {
            window.audioRecorder.mediaRecorder.requestData();
          }
          
          // 停止錄音
          window.audioRecorder.stop();
          
          // 等待錄音處理完成
          setTimeout(() => {
            // 記錄錄音信息
            psychoJS.experiment.addData('audioDuration', window.audioRecorder.duration);
            
            // 1秒後繼續
            setTimeout(() => {
              continueRoutine = false;
            }, 1000);
          }, 1500); // 等待更長時間，確保轉換完成
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
    // 播放 WAV 錄音
    if (window.audioRecorder && window.audioRecorder.wavBlob) {
      // 創建音頻 URL
      const audioUrl = URL.createObjectURL(window.audioRecorder.wavBlob);
      
      // 創建音頻元素
      const audio = new Audio(audioUrl);
      
      // 播放完成後釋放 URL
      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        console.log("WAV 錄音播放完成");
        setTimeout(() => {
          continueRoutine = false;
        }, 500);
      };
      
      // 播放音頻
      audio.play().then(() => {
        console.log("開始播放 WAV 錄音");
      }).catch(error => {
        console.error("播放 WAV 錄音時出錯:", error);
        continueRoutine = false;
      });
      
      // 設置超時
      setTimeout(() => {
        if (continueRoutine) {
          continueRoutine = false;
        }
      }, 10000);
    } else {
      // 等待 WAV 轉換完成
      if (window.audioRecorder && window.audioRecorder.blob) {
        console.log("正在等待 WAV 轉換完成...");
        
        // 每 500ms 檢查一次是否轉換完成
        const checkInterval = setInterval(() => {
          if (window.audioRecorder.wavBlob) {
            clearInterval(checkInterval);
            
            // 播放 WAV 錄音
            const audioUrl = URL.createObjectURL(window.audioRecorder.wavBlob);
            const audio = new Audio(audioUrl);
            
            audio.onended = () => {
              URL.revokeObjectURL(audioUrl);
              setTimeout(() => {
                continueRoutine = false;
              }, 500);
            };
            
            audio.play().catch(error => {
              console.error("播放 WAV 錄音時出錯:", error);
              continueRoutine = false;
            });
          }
        }, 500);
        
        // 10秒後超時
        setTimeout(() => {
          clearInterval(checkInterval);
          if (continueRoutine) {
            console.log("WAV 轉換超時");
            continueRoutine = false;
          }
        }, 10000);
      } else {
        console.log("沒有錄音可播放");
        continueRoutine = false;
      }
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
      recordingSize: window.audioRecorder && window.audioRecorder.wavBlob ? window.audioRecorder.wavBlob.size : 0,
      audioFormat: "WAV" // 更新為 WAV 格式
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
      
      // 上傳 WAV 音頻
      if (window.audioRecorder && window.audioRecorder.wavBlob) {
        // 檢查是否已經轉換為 WAV 和 base64
        if (window.audioRecorder.wavBase64) {
          // 直接上傳
          window.audioRecorder.uploadWav(
            'zqejJsvNSVAI',
            `audio_${expInfo["participant"]}_${Date.now()}.wav` // 使用 .wav 擴展名
          )
          .then(() => {
            console.log("WAV 音頻上傳完成");
            window.audioRecorder.cleanup();
            setTimeout(() => {
              quitPsychoJS('實驗完成，感謝參與！', true);
            }, 3000);
          })
          .catch(error => {
            console.error("WAV 音頻上傳失敗:", error);
            setTimeout(() => {
              quitPsychoJS('實驗完成，但音頻上傳失敗。', true);
            }, 3000);
          });
        } else {
          // 等待 base64 轉換完成
          console.log("等待 WAV base64 轉換完成...");
          
          const checkInterval = setInterval(() => {
            if (window.audioRecorder.wavBase64) {
              clearInterval(checkInterval);
              
              // 上傳 WAV
              window.audioRecorder.uploadWav(
                'zqejJsvNSVAI',
                `audio_${expInfo["participant"]}_${Date.now()}.wav`
              )
              .then(() => {
                console.log("WAV 音頻上傳完成");
                window.audioRecorder.cleanup();
                setTimeout(() => {
                  quitPsychoJS('實驗完成，感謝參與！', true);
                }, 3000);
              })
              .catch(error => {
                console.error("WAV 音頻上傳失敗:", error);
                setTimeout(() => {
                  quitPsychoJS('實驗完成，但音頻上傳失敗。', true);
                }, 3000);
              });
            }
          }, 500);
          
          // 20秒後超時
          setTimeout(() => {
            clearInterval(checkInterval);
            console.error("WAV base64 轉換超時");
            setTimeout(() => {
              quitPsychoJS('實驗完成，但音頻處理超時。', true);
            }, 3000);
          }, 20000);
        }
      } else {
        console.log("沒有 WAV 音頻需要上傳");
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
