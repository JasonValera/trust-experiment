/************************ 
 * Exp_Spanish_B_F *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Exp_Spanish_b_F';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
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
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(ExampleRoutineBegin());
flowScheduler.add(ExampleRoutineEachFrame());
flowScheduler.add(ExampleRoutineEnd());
flowScheduler.add(Demo_ageRoutineBegin());
flowScheduler.add(Demo_ageRoutineEachFrame());
flowScheduler.add(Demo_ageRoutineEnd());
flowScheduler.add(Demo_GenderRoutineBegin());
flowScheduler.add(Demo_GenderRoutineEachFrame());
flowScheduler.add(Demo_GenderRoutineEnd());
flowScheduler.add(Pre_Survey_TextRoutineBegin());
flowScheduler.add(Pre_Survey_TextRoutineEachFrame());
flowScheduler.add(Pre_Survey_TextRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(fixationRoutineBegin());
flowScheduler.add(fixationRoutineEachFrame());
flowScheduler.add(fixationRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);








flowScheduler.add(Post_Survey_TextRoutineBegin());
flowScheduler.add(Post_Survey_TextRoutineEachFrame());
flowScheduler.add(Post_Survey_TextRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'questions.csv', 'path': 'questions.csv'},
    {'name': 'questions_final.csv', 'path': 'questions_final.csv'},
    {'name': 'resources/questions_final.csv', 'path': 'resources/questions_final.csv'},
    {'name': 'resources/questions.csv', 'path': 'resources/questions.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
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


var WelcomeClock;
var welcome_text;
var instructions_text;
var button_start;
var ExampleClock;
var grating_ex_L;
var instructions_text_2;
var button_start_2;
var grating_ex_R;
var instructions_text_3;
var Demo_ageClock;
var next_survey;
var text_01;
var age;
var text_02;
var button_age;
var Demo_GenderClock;
var slider_gender;
var gender;
var Pre_Survey_TextClock;
var text_03;
var Pre_SurveyClock;
var questionText;
var slider;
var text_04;
var fixationClock;
var text_05;
var fixation_block;
var StimulusClock;
var grating;
var blank_screen;
var correct_answer;
var suggestion;
var final_choice;
var feedback;
var first_choice;
var advisor_follow;
var trial_count;
var tilt;
var FirstClock;
var first_text;
var first_decision;
var button_left_first;
var button_right_first;
var trial_count_text;
var AdviceClock;
var advice_text;
var advice_key;
var button_advice_yes;
var button_advice_no;
var AdvisorClock;
var text_06;
var initial_choice;
var text_07;
var advisor_text;
var decision_text;
var decision_key;
var button_left_final;
var button_right_final;
var ITIClock;
var final_text;
var Trust_AdjustmentClock;
var trust_slider;
var text;
var FinalClock;
var image;
var Post_Survey_TextClock;
var text_08;
var Post_SurveyClock;
var questionText_2;
var slider_2;
var text_09;
var EndClock;
var end_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'BIENVENIDO/A',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_text',
    text: 'INSTRUCCIONES\n\nEn este experimento verás brevemente un patrón visual y deberás indicar la orientación correcta (izquierda o derecha).\n\nDespués de cada decisión podrás elegir si deseas recibir la sugerencia de un sistema automático. Si decides verla, podrás mantener tu decisión inicial o cambiarla después de observar la sugerencia.\n\nSolamente en el caso que elijas recibir la sugerencia de un sistema automático, después de cada respuesta indicarás tu nivel de confianza usando una barra deslizante.\n\nAl inicio y al final del experimento responderás un breve cuestionario sobre confianza en sistemas automáticos.\n\nNo hay respuestas correctas o incorrectas en cuanto a tus opiniones o niveles de confianza. Por favor responde de manera honesta.\n\nCuando estés listo/a para comenzar, toca CONTINUAR',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  button_start = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_start',
    text: 'CONTINUAR',
    font: 'Arvo',
    pos: [0, (- 0.5)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  button_start.clock = new util.Clock();
  
  // Initialize components for Routine "Example"
  ExampleClock = new util.Clock();
  grating_ex_L = new visual.GratingStim({
    win : psychoJS.window,
    name : 'grating_ex_L', units : undefined, 
    tex : undefined, mask : 'gauss',
    ori : -3.0, 
    pos : [(- 0.2), 0],
    draggable: false,
    anchor : 'center',
    sf : 5.0, phase : 0.0,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    contrast : 0.3, blendmode : 'avg',
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instructions_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_text_2',
    text: 'INSTRUCCIONES DE LA TAREA\n\nEn cada ensayo verás una imagen muy breve con un patrón de líneas (aparecerá rápidamente).\nLa tarea es indicar hacia qué lado están inclinadas las líneas:\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  button_start_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_start_2',
    text: 'CONTINUAR',
    font: 'Arvo',
    pos: [0, (- 0.5)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  button_start_2.clock = new util.Clock();
  
  grating_ex_R = new visual.GratingStim({
    win : psychoJS.window,
    name : 'grating_ex_R', units : undefined, 
    tex : undefined, mask : 'gauss',
    ori : 3.0, 
    pos : [0.2, 0],
    draggable: false,
    anchor : 'center',
    sf : 5.0, phase : 0.0,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    contrast : 0.3, blendmode : 'avg',
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  instructions_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_text_3',
    text: 'IZQUIERDA                 DERECHA\n\nCuando estés listo/a para comenzar, toca CONTINUAR',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Demo_age"
  Demo_ageClock = new util.Clock();
  next_survey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_01',
    text: 'Por favor, responda a las siguientes preguntas antes de continuar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  age = new visual.TextBox({
    win: psychoJS.window,
    name: 'age',
    text: '¿Cuál es tu edad?   ',
    placeholder: 'Age',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  text_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_02',
    text: 'Pulsa el BOTON para continuar',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  button_age = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_age',
    text: 'CONTINUAR',
    font: 'Arvo',
    pos: [0, 0.3],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  button_age.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Gender"
  Demo_GenderClock = new util.Clock();
  slider_gender = new visual.Slider({
    win: psychoJS.window, name: 'slider_gender',
    startValue: undefined,
    size: [0.8, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["Masculino", "Femenino", "Prefiero no decirlo"], fontSize: 0.03, ticks: [1, 2, 3],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  gender = new visual.TextStim({
    win: psychoJS.window,
    name: 'gender',
    text: '¿Cuál es tu género?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Pre_Survey_Text"
  Pre_Survey_TextClock = new util.Clock();
  text_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_03',
    text: 'Por favor, indique su grado de acuerdo con las siguientes afirmaciones sobre los sistemas automatizados.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Pre_Survey"
  Pre_SurveyClock = new util.Clock();
  questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [0.8, 0.1], pos: [0, 0.15], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_04',
    text: '1 = Totalmente en desacuerdo\n2 = En desacuerdo\n3 = Ligeramente en desacuerdo\n4 = Neutral\n5 = Ligeramente de acuerdo\n6 = De acuerdo\n7 = Totalmente de acuerdo\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  text_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_05',
    text: 'Ahora pasamos al experimento.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  fixation_block = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_block', units : 'pix', 
    vertices: [[-[20, 20][0]/2.0, -[20, 20][1]/2.0], [+[20, 20][0]/2.0, -[20, 20][1]/2.0], [0, [20, 20][1]/2.0]],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "Stimulus"
  StimulusClock = new util.Clock();
  grating = new visual.GratingStim({
    win : psychoJS.window,
    name : 'grating', units : undefined, 
    tex : undefined, mask : 'gauss',
    ori : 1.0, 
    pos : [0, 0],
    draggable: false,
    anchor : 'center',
    sf : 5.0, phase : 0.0,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    contrast : 0.3, blendmode : 'avg',
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  blank_screen = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blank_screen', units : undefined, 
    image : undefined, mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Run 'Begin Experiment' code from code_5
  correct_answer = "IZQUIERDA";
  suggestion = "IZQUIERDA";
  final_choice = null;
  feedback = "CORRECTA";
  first_choice = "IZQUIERDA";
  advisor_follow = "N";
  trial_count = 0;
  tilt = 0;
  
  // Initialize components for Routine "First"
  FirstClock = new util.Clock();
  first_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'first_text',
    text: '¿Cuál es la orientación correcta?\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  first_decision = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  button_left_first = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_left_first',
    text: 'IZQUIERDA',
    font: 'Arvo',
    pos: [(- 0.2), (- 0.3)],
    size: [0.25, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  button_left_first.clock = new util.Clock();
  
  button_right_first = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_right_first',
    text: 'DERECHA',
    font: 'Arvo',
    pos: [0.2, (- 0.3)],
    size: [0.25, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  button_right_first.clock = new util.Clock();
  
  trial_count_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_count_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Advice"
  AdviceClock = new util.Clock();
  advice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'advice_text',
    text: '¿Te gustaría recibir una sugerencia del sistema automático?\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  advice_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  button_advice_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_advice_yes',
    text: 'SI',
    font: 'Arvo',
    pos: [(- 0.2), (- 0.3)],
    size: [0.25, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  button_advice_yes.clock = new util.Clock();
  
  button_advice_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_advice_no',
    text: 'NO',
    font: 'Arvo',
    pos: [0.2, (- 0.3)],
    size: [0.25, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  button_advice_no.clock = new util.Clock();
  
  // Initialize components for Routine "Advisor"
  AdvisorClock = new util.Clock();
  text_06 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_06',
    text: 'Su respuesta inicial fue:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  initial_choice = new visual.TextStim({
    win: psychoJS.window,
    name: 'initial_choice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_07 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_07',
    text: 'El sistema automático sugiere:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  advisor_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'advisor_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  decision_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'decision_text',
    text: '¿Cuál es tu decisión final?\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  decision_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  button_left_final = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_left_final',
    text: 'IZQUIERDA',
    font: 'Arvo',
    pos: [(- 0.2), (- 0.3)],
    size: [0.25, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  button_left_final.clock = new util.Clock();
  
  button_right_final = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_right_final',
    text: 'DERECHA',
    font: 'Arvo',
    pos: [0.2, (- 0.3)],
    size: [0.25, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -8,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  button_right_final.clock = new util.Clock();
  
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  final_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'final_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Trust_Adjustment"
  Trust_AdjustmentClock = new util.Clock();
  trust_slider = new visual.Slider({
    win: psychoJS.window, name: 'trust_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["No conf\u00edo", "Conf\u00edo 100%"], fontSize: 0.03, ticks: [0, 100],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Por favor, evalúe el sistema:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Final"
  FinalClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "Post_Survey_Text"
  Post_Survey_TextClock = new util.Clock();
  text_08 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_08',
    text: 'Por favor, indique su grado de acuerdo con cada afirmación relativa al sistema automatizado con el que interactuó.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Post_Survey"
  Post_SurveyClock = new util.Clock();
  questionText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionText_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_2',
    startValue: undefined,
    size: [0.8, 0.1], pos: [0, 0.15], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_09 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_09',
    text: '1 = Totalmente en desacuerdo\n2 = En desacuerdo\n3 = Ligeramente en desacuerdo\n4 = Neutral\n5 = Ligeramente de acuerdo\n6 = De acuerdo\n7 = Totalmente de acuerdo\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '¡GRACIAS!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var WelcomeMaxDurationReached;
var WelcomeMaxDuration;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WelcomeClock.reset();
    routineTimer.reset();
    WelcomeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_start to account for continued clicks & clear times on/off
    button_start.reset()
    WelcomeMaxDuration = null
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(welcome_text);
    WelcomeComponents.push(instructions_text);
    WelcomeComponents.push(button_start);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }
    
    
    // if welcome_text is active this frame...
    if (welcome_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (welcome_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      welcome_text.tStop = t;  // not accounting for scr refresh
      welcome_text.frameNStop = frameN;  // exact frame index
      // update status
      welcome_text.status = PsychoJS.Status.FINISHED;
      welcome_text.setAutoDraw(false);
    }
    
    
    // *instructions_text* updates
    if (t >= 1 && instructions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_text.tStart = t;  // (not accounting for frame time here)
      instructions_text.frameNStart = frameN;  // exact frame index
      
      instructions_text.setAutoDraw(true);
    }
    
    
    // if instructions_text is active this frame...
    if (instructions_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *button_start* updates
    if (t >= 1 && button_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_start.tStart = t;  // (not accounting for frame time here)
      button_start.frameNStart = frameN;  // exact frame index
      
      button_start.setAutoDraw(true);
    }
    
    
    // if button_start is active this frame...
    if (button_start.status === PsychoJS.Status.STARTED) {
    }
    
    if (button_start.status === PsychoJS.Status.STARTED) {
      // check whether button_start has been pressed
      if (button_start.isClicked) {
        if (!button_start.wasClicked) {
          // store time of first click
          button_start.timesOn.push(button_start.clock.getTime());
          // store time clicked until
          button_start.timesOff.push(button_start.clock.getTime());
        } else {
          // update time clicked until;
          button_start.timesOff[button_start.timesOff.length - 1] = button_start.clock.getTime();
        }
        if (!button_start.wasClicked) {
          // end routine when button_start is clicked
          continueRoutine = false;
          
        }
        // if button_start is still clicked next frame, it is not a new click
        button_start.wasClicked = true;
      } else {
        // if button_start is clicked next frame, it is a new click
        button_start.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_start hasn't started / has finished
      button_start.clock.reset();
      // if button_start is clicked next frame, it is a new click
      button_start.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('button_start.numClicks', button_start.numClicks);
    psychoJS.experiment.addData('button_start.timesOn', button_start.timesOn);
    psychoJS.experiment.addData('button_start.timesOff', button_start.timesOff);
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ExampleMaxDurationReached;
var ExampleMaxDuration;
var ExampleComponents;
function ExampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Example' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ExampleClock.reset();
    routineTimer.reset();
    ExampleMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_start_2 to account for continued clicks & clear times on/off
    button_start_2.reset()
    ExampleMaxDuration = null
    // keep track of which components have finished
    ExampleComponents = [];
    ExampleComponents.push(grating_ex_L);
    ExampleComponents.push(instructions_text_2);
    ExampleComponents.push(button_start_2);
    ExampleComponents.push(grating_ex_R);
    ExampleComponents.push(instructions_text_3);
    
    for (const thisComponent of ExampleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ExampleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Example' ---
    // get current time
    t = ExampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *grating_ex_L* updates
    if (t >= 0 && grating_ex_L.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grating_ex_L.tStart = t;  // (not accounting for frame time here)
      grating_ex_L.frameNStart = frameN;  // exact frame index
      
      grating_ex_L.setAutoDraw(true);
    }
    
    
    // if grating_ex_L is active this frame...
    if (grating_ex_L.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instructions_text_2* updates
    if (t >= 0 && instructions_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_text_2.tStart = t;  // (not accounting for frame time here)
      instructions_text_2.frameNStart = frameN;  // exact frame index
      
      instructions_text_2.setAutoDraw(true);
    }
    
    
    // if instructions_text_2 is active this frame...
    if (instructions_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *button_start_2* updates
    if (t >= 0 && button_start_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_start_2.tStart = t;  // (not accounting for frame time here)
      button_start_2.frameNStart = frameN;  // exact frame index
      
      button_start_2.setAutoDraw(true);
    }
    
    
    // if button_start_2 is active this frame...
    if (button_start_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (button_start_2.status === PsychoJS.Status.STARTED) {
      // check whether button_start_2 has been pressed
      if (button_start_2.isClicked) {
        if (!button_start_2.wasClicked) {
          // store time of first click
          button_start_2.timesOn.push(button_start_2.clock.getTime());
          // store time clicked until
          button_start_2.timesOff.push(button_start_2.clock.getTime());
        } else {
          // update time clicked until;
          button_start_2.timesOff[button_start_2.timesOff.length - 1] = button_start_2.clock.getTime();
        }
        if (!button_start_2.wasClicked) {
          // end routine when button_start_2 is clicked
          continueRoutine = false;
          
        }
        // if button_start_2 is still clicked next frame, it is not a new click
        button_start_2.wasClicked = true;
      } else {
        // if button_start_2 is clicked next frame, it is a new click
        button_start_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_start_2 hasn't started / has finished
      button_start_2.clock.reset();
      // if button_start_2 is clicked next frame, it is a new click
      button_start_2.wasClicked = false;
    }
    
    // *grating_ex_R* updates
    if (t >= 0 && grating_ex_R.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grating_ex_R.tStart = t;  // (not accounting for frame time here)
      grating_ex_R.frameNStart = frameN;  // exact frame index
      
      grating_ex_R.setAutoDraw(true);
    }
    
    
    // if grating_ex_R is active this frame...
    if (grating_ex_R.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instructions_text_3* updates
    if (t >= 0 && instructions_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_text_3.tStart = t;  // (not accounting for frame time here)
      instructions_text_3.frameNStart = frameN;  // exact frame index
      
      instructions_text_3.setAutoDraw(true);
    }
    
    
    // if instructions_text_3 is active this frame...
    if (instructions_text_3.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ExampleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ExampleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Example' ---
    for (const thisComponent of ExampleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('button_start_2.numClicks', button_start_2.numClicks);
    psychoJS.experiment.addData('button_start_2.timesOn', button_start_2.timesOn);
    psychoJS.experiment.addData('button_start_2.timesOff', button_start_2.timesOff);
    // the Routine "Example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Demo_ageMaxDurationReached;
var _next_survey_allKeys;
var Demo_ageMaxDuration;
var Demo_ageComponents;
function Demo_ageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Demo_age' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Demo_ageClock.reset();
    routineTimer.reset();
    Demo_ageMaxDurationReached = false;
    // update component parameters for each repeat
    next_survey.keys = undefined;
    next_survey.rt = undefined;
    _next_survey_allKeys = [];
    age.setText('¿Cuál es tu edad?   ');
    age.refresh();
    // reset button_age to account for continued clicks & clear times on/off
    button_age.reset()
    Demo_ageMaxDuration = null
    // keep track of which components have finished
    Demo_ageComponents = [];
    Demo_ageComponents.push(next_survey);
    Demo_ageComponents.push(text_01);
    Demo_ageComponents.push(age);
    Demo_ageComponents.push(text_02);
    Demo_ageComponents.push(button_age);
    
    for (const thisComponent of Demo_ageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_ageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Demo_age' ---
    // get current time
    t = Demo_ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *next_survey* updates
    if (t >= 0.0 && next_survey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_survey.tStart = t;  // (not accounting for frame time here)
      next_survey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      next_survey.clock.reset();
      next_survey.start();
    }
    
    // if next_survey is active this frame...
    if (next_survey.status === PsychoJS.Status.STARTED) {
      let theseKeys = next_survey.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _next_survey_allKeys = _next_survey_allKeys.concat(theseKeys);
      if (_next_survey_allKeys.length > 0) {
        next_survey.keys = _next_survey_allKeys[_next_survey_allKeys.length - 1].name;  // just the last key pressed
        next_survey.rt = _next_survey_allKeys[_next_survey_allKeys.length - 1].rt;
        next_survey.duration = _next_survey_allKeys[_next_survey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_01* updates
    if (t >= 0.0 && text_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_01.tStart = t;  // (not accounting for frame time here)
      text_01.frameNStart = frameN;  // exact frame index
      
      text_01.setAutoDraw(true);
    }
    
    
    // if text_01 is active this frame...
    if (text_01.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_01.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_01.tStop = t;  // not accounting for scr refresh
      text_01.frameNStop = frameN;  // exact frame index
      // update status
      text_01.status = PsychoJS.Status.FINISHED;
      text_01.setAutoDraw(false);
    }
    
    
    // *age* updates
    if (t >= 2.0 && age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age.tStart = t;  // (not accounting for frame time here)
      age.frameNStart = frameN;  // exact frame index
      
      age.setAutoDraw(true);
    }
    
    
    // if age is active this frame...
    if (age.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_02* updates
    if (t >= 2.0 && text_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_02.tStart = t;  // (not accounting for frame time here)
      text_02.frameNStart = frameN;  // exact frame index
      
      text_02.setAutoDraw(true);
    }
    
    
    // if text_02 is active this frame...
    if (text_02.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *button_age* updates
    if (t >= 2 && button_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_age.tStart = t;  // (not accounting for frame time here)
      button_age.frameNStart = frameN;  // exact frame index
      
      button_age.setAutoDraw(true);
    }
    
    
    // if button_age is active this frame...
    if (button_age.status === PsychoJS.Status.STARTED) {
    }
    
    if (button_age.status === PsychoJS.Status.STARTED) {
      // check whether button_age has been pressed
      if (button_age.isClicked) {
        if (!button_age.wasClicked) {
          // store time of first click
          button_age.timesOn.push(button_age.clock.getTime());
          // store time clicked until
          button_age.timesOff.push(button_age.clock.getTime());
        } else {
          // update time clicked until;
          button_age.timesOff[button_age.timesOff.length - 1] = button_age.clock.getTime();
        }
        if (!button_age.wasClicked) {
          // end routine when button_age is clicked
          continueRoutine = false;
          
        }
        // if button_age is still clicked next frame, it is not a new click
        button_age.wasClicked = true;
      } else {
        // if button_age is clicked next frame, it is a new click
        button_age.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_age hasn't started / has finished
      button_age.clock.reset();
      // if button_age is clicked next frame, it is a new click
      button_age.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_ageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_ageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Demo_age' ---
    for (const thisComponent of Demo_ageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(next_survey.corr, level);
    }
    psychoJS.experiment.addData('next_survey.keys', next_survey.keys);
    if (typeof next_survey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next_survey.rt', next_survey.rt);
        psychoJS.experiment.addData('next_survey.duration', next_survey.duration);
        routineTimer.reset();
        }
    
    next_survey.stop();
    psychoJS.experiment.addData('age.text',age.text)
    psychoJS.experiment.addData('button_age.numClicks', button_age.numClicks);
    psychoJS.experiment.addData('button_age.timesOn', button_age.timesOn);
    psychoJS.experiment.addData('button_age.timesOff', button_age.timesOff);
    // the Routine "Demo_age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Demo_GenderMaxDurationReached;
var Demo_GenderMaxDuration;
var Demo_GenderComponents;
function Demo_GenderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Demo_Gender' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Demo_GenderClock.reset();
    routineTimer.reset();
    Demo_GenderMaxDurationReached = false;
    // update component parameters for each repeat
    slider_gender.reset()
    Demo_GenderMaxDuration = null
    // keep track of which components have finished
    Demo_GenderComponents = [];
    Demo_GenderComponents.push(slider_gender);
    Demo_GenderComponents.push(gender);
    
    for (const thisComponent of Demo_GenderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_GenderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Demo_Gender' ---
    // get current time
    t = Demo_GenderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_gender* updates
    if (t >= 0 && slider_gender.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_gender.tStart = t;  // (not accounting for frame time here)
      slider_gender.frameNStart = frameN;  // exact frame index
      
      slider_gender.setAutoDraw(true);
    }
    
    
    // if slider_gender is active this frame...
    if (slider_gender.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check slider_gender for response to end Routine
    if (slider_gender.getRating() !== undefined && slider_gender.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *gender* updates
    if (t >= 0 && gender.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender.tStart = t;  // (not accounting for frame time here)
      gender.frameNStart = frameN;  // exact frame index
      
      gender.setAutoDraw(true);
    }
    
    
    // if gender is active this frame...
    if (gender.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_GenderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_GenderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Demo_Gender' ---
    for (const thisComponent of Demo_GenderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_gender.response', slider_gender.getRating());
    psychoJS.experiment.addData('slider_gender.rt', slider_gender.getRT());
    // the Routine "Demo_Gender" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Pre_Survey_TextMaxDurationReached;
var Pre_Survey_TextMaxDuration;
var Pre_Survey_TextComponents;
function Pre_Survey_TextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pre_Survey_Text' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Pre_Survey_TextClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    Pre_Survey_TextMaxDurationReached = false;
    // update component parameters for each repeat
    Pre_Survey_TextMaxDuration = null
    // keep track of which components have finished
    Pre_Survey_TextComponents = [];
    Pre_Survey_TextComponents.push(text_03);
    
    for (const thisComponent of Pre_Survey_TextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Pre_Survey_TextRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pre_Survey_Text' ---
    // get current time
    t = Pre_Survey_TextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_03* updates
    if (t >= 0.0 && text_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_03.tStart = t;  // (not accounting for frame time here)
      text_03.frameNStart = frameN;  // exact frame index
      
      text_03.setAutoDraw(true);
    }
    
    
    // if text_03 is active this frame...
    if (text_03.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_03.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_03.tStop = t;  // not accounting for scr refresh
      text_03.frameNStop = frameN;  // exact frame index
      // update status
      text_03.status = PsychoJS.Status.FINISHED;
      text_03.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Pre_Survey_TextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pre_Survey_TextRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pre_Survey_Text' ---
    for (const thisComponent of Pre_Survey_TextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (routineForceEnded) {
        routineTimer.reset();} else if (Pre_Survey_TextMaxDurationReached) {
        Pre_Survey_TextClock.add(Pre_Survey_TextMaxDuration);
    } else {
        Pre_Survey_TextClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'questions.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(Pre_SurveyRoutineBegin(snapshot));
      trials_2LoopScheduler.add(Pre_SurveyRoutineEachFrame());
      trials_2LoopScheduler.add(Pre_SurveyRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 20, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(StimulusRoutineBegin(snapshot));
      trialsLoopScheduler.add(StimulusRoutineEachFrame());
      trialsLoopScheduler.add(StimulusRoutineEnd(snapshot));
      trialsLoopScheduler.add(FirstRoutineBegin(snapshot));
      trialsLoopScheduler.add(FirstRoutineEachFrame());
      trialsLoopScheduler.add(FirstRoutineEnd(snapshot));
      trialsLoopScheduler.add(AdviceRoutineBegin(snapshot));
      trialsLoopScheduler.add(AdviceRoutineEachFrame());
      trialsLoopScheduler.add(AdviceRoutineEnd(snapshot));
      trialsLoopScheduler.add(AdvisorRoutineBegin(snapshot));
      trialsLoopScheduler.add(AdvisorRoutineEachFrame());
      trialsLoopScheduler.add(AdvisorRoutineEnd(snapshot));
      trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      trialsLoopScheduler.add(ITIRoutineEachFrame());
      trialsLoopScheduler.add(ITIRoutineEnd(snapshot));
      trialsLoopScheduler.add(Trust_AdjustmentRoutineBegin(snapshot));
      trialsLoopScheduler.add(Trust_AdjustmentRoutineEachFrame());
      trialsLoopScheduler.add(Trust_AdjustmentRoutineEnd(snapshot));
      trialsLoopScheduler.add(FinalRoutineBegin(snapshot));
      trialsLoopScheduler.add(FinalRoutineEachFrame());
      trialsLoopScheduler.add(FinalRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'questions_final.csv',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(Post_SurveyRoutineBegin(snapshot));
      trials_3LoopScheduler.add(Post_SurveyRoutineEachFrame());
      trials_3LoopScheduler.add(Post_SurveyRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Pre_SurveyMaxDurationReached;
var Pre_SurveyMaxDuration;
var Pre_SurveyComponents;
function Pre_SurveyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pre_Survey' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Pre_SurveyClock.reset();
    routineTimer.reset();
    Pre_SurveyMaxDurationReached = false;
    // update component parameters for each repeat
    questionText.setText(question);
    slider.reset()
    psychoJS.experiment.addData('Pre_Survey.started', globalClock.getTime());
    Pre_SurveyMaxDuration = null
    // keep track of which components have finished
    Pre_SurveyComponents = [];
    Pre_SurveyComponents.push(questionText);
    Pre_SurveyComponents.push(slider);
    Pre_SurveyComponents.push(text_04);
    
    for (const thisComponent of Pre_SurveyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Pre_SurveyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pre_Survey' ---
    // get current time
    t = Pre_SurveyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *questionText* updates
    if (t >= 0 && questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionText.tStart = t;  // (not accounting for frame time here)
      questionText.frameNStart = frameN;  // exact frame index
      
      questionText.setAutoDraw(true);
    }
    
    
    // if questionText is active this frame...
    if (questionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *slider* updates
    if (t >= 0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    
    // if slider is active this frame...
    if (slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check slider for response to end Routine
    if (slider.getRating() !== undefined && slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *text_04* updates
    if (t >= 0.0 && text_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_04.tStart = t;  // (not accounting for frame time here)
      text_04.frameNStart = frameN;  // exact frame index
      
      text_04.setAutoDraw(true);
    }
    
    
    // if text_04 is active this frame...
    if (text_04.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Pre_SurveyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pre_SurveyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pre_Survey' ---
    for (const thisComponent of Pre_SurveyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Pre_Survey.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    psychoJS.experiment.addData('slider.history', slider.getHistory());
    // the Routine "Pre_Survey" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixationMaxDurationReached;
var fixationMaxDuration;
var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    fixationClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    fixationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    fixationMaxDuration = null
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(text_05);
    fixationComponents.push(fixation_block);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_05* updates
    if (t >= 0.0 && text_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_05.tStart = t;  // (not accounting for frame time here)
      text_05.frameNStart = frameN;  // exact frame index
      
      text_05.setAutoDraw(true);
    }
    
    
    // if text_05 is active this frame...
    if (text_05.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_05.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_05.tStop = t;  // not accounting for scr refresh
      text_05.frameNStop = frameN;  // exact frame index
      // update status
      text_05.status = PsychoJS.Status.FINISHED;
      text_05.setAutoDraw(false);
    }
    
    
    // *fixation_block* updates
    if (t >= 1.0 && fixation_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_block.tStart = t;  // (not accounting for frame time here)
      fixation_block.frameNStart = frameN;  // exact frame index
      
      fixation_block.setAutoDraw(true);
    }
    
    
    // if fixation_block is active this frame...
    if (fixation_block.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_block.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation_block.tStop = t;  // not accounting for scr refresh
      fixation_block.frameNStop = frameN;  // exact frame index
      // update status
      fixation_block.status = PsychoJS.Status.FINISHED;
      fixation_block.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixation.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (fixationMaxDurationReached) {
        fixationClock.add(fixationMaxDuration);
    } else {
        fixationClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var StimulusMaxDurationReached;
var StimulusMaxDuration;
var StimulusComponents;
function StimulusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Stimulus' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    StimulusClock.reset(routineTimer.getTime());
    routineTimer.add(0.550000);
    StimulusMaxDurationReached = false;
    // update component parameters for each repeat
    grating.setOri(tilt);
    // Run 'Begin Routine' code from code_5
    if ((Math.random() > 0.5)) {
        tilt = util.randint(1, 4);
        correct_answer = "DERECHA";
    } else {
        tilt = util.randint((- 4), (- 1));
        correct_answer = "IZQUIERDA";
    }
    
    psychoJS.experiment.addData('Stimulus.started', globalClock.getTime());
    StimulusMaxDuration = null
    // keep track of which components have finished
    StimulusComponents = [];
    StimulusComponents.push(grating);
    StimulusComponents.push(blank_screen);
    
    for (const thisComponent of StimulusComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function StimulusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Stimulus' ---
    // get current time
    t = StimulusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *grating* updates
    if (t >= 0 && grating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grating.tStart = t;  // (not accounting for frame time here)
      grating.frameNStart = frameN;  // exact frame index
      
      grating.setAutoDraw(true);
    }
    
    
    // if grating is active this frame...
    if (grating.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grating.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      grating.tStop = t;  // not accounting for scr refresh
      grating.frameNStop = frameN;  // exact frame index
      // update status
      grating.status = PsychoJS.Status.FINISHED;
      grating.setAutoDraw(false);
    }
    
    
    // *blank_screen* updates
    if (t >= 0.15 && blank_screen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_screen.tStart = t;  // (not accounting for frame time here)
      blank_screen.frameNStart = frameN;  // exact frame index
      
      blank_screen.setAutoDraw(true);
    }
    
    
    // if blank_screen is active this frame...
    if (blank_screen.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.15 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blank_screen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      blank_screen.tStop = t;  // not accounting for scr refresh
      blank_screen.frameNStop = frameN;  // exact frame index
      // update status
      blank_screen.status = PsychoJS.Status.FINISHED;
      blank_screen.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of StimulusComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StimulusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Stimulus' ---
    for (const thisComponent of StimulusComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Stimulus.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (StimulusMaxDurationReached) {
        StimulusClock.add(StimulusMaxDuration);
    } else {
        StimulusClock.add(0.550000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FirstMaxDurationReached;
var _first_decision_allKeys;
var trial_text;
var FirstMaxDuration;
var FirstComponents;
function FirstRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'First' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FirstClock.reset();
    routineTimer.reset();
    FirstMaxDurationReached = false;
    // update component parameters for each repeat
    first_decision.keys = undefined;
    first_decision.rt = undefined;
    _first_decision_allKeys = [];
    // Run 'Begin Routine' code from code_7
    trial_count = (trial_count + 1);
    trial_text = `${trial_count}/20`;
    
    // reset button_left_first to account for continued clicks & clear times on/off
    button_left_first.reset()
    // reset button_right_first to account for continued clicks & clear times on/off
    button_right_first.reset()
    trial_count_text.setText(trial_text);
    psychoJS.experiment.addData('First.started', globalClock.getTime());
    FirstMaxDuration = null
    // keep track of which components have finished
    FirstComponents = [];
    FirstComponents.push(first_text);
    FirstComponents.push(first_decision);
    FirstComponents.push(button_left_first);
    FirstComponents.push(button_right_first);
    FirstComponents.push(trial_count_text);
    
    for (const thisComponent of FirstComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FirstRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'First' ---
    // get current time
    t = FirstClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *first_text* updates
    if (t >= 0.0 && first_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      first_text.tStart = t;  // (not accounting for frame time here)
      first_text.frameNStart = frameN;  // exact frame index
      
      first_text.setAutoDraw(true);
    }
    
    
    // if first_text is active this frame...
    if (first_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *first_decision* updates
    if (t >= 0.0 && first_decision.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      first_decision.tStart = t;  // (not accounting for frame time here)
      first_decision.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      first_decision.clock.reset();
      first_decision.start();
      first_decision.clearEvents();
    }
    
    // if first_decision is active this frame...
    if (first_decision.status === PsychoJS.Status.STARTED) {
      let theseKeys = first_decision.getKeys({
        keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
        waitRelease: false
      });
      _first_decision_allKeys = _first_decision_allKeys.concat(theseKeys);
      if (_first_decision_allKeys.length > 0) {
        first_decision.keys = _first_decision_allKeys[_first_decision_allKeys.length - 1].name;  // just the last key pressed
        first_decision.rt = _first_decision_allKeys[_first_decision_allKeys.length - 1].rt;
        first_decision.duration = _first_decision_allKeys[_first_decision_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *button_left_first* updates
    if (t >= 0 && button_left_first.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_left_first.tStart = t;  // (not accounting for frame time here)
      button_left_first.frameNStart = frameN;  // exact frame index
      
      button_left_first.setAutoDraw(true);
    }
    
    
    // if button_left_first is active this frame...
    if (button_left_first.status === PsychoJS.Status.STARTED) {
    }
    
    if (button_left_first.status === PsychoJS.Status.STARTED) {
      // check whether button_left_first has been pressed
      if (button_left_first.isClicked) {
        if (!button_left_first.wasClicked) {
          // store time of first click
          button_left_first.timesOn.push(button_left_first.clock.getTime());
          // store time clicked until
          button_left_first.timesOff.push(button_left_first.clock.getTime());
        } else {
          // update time clicked until;
          button_left_first.timesOff[button_left_first.timesOff.length - 1] = button_left_first.clock.getTime();
        }
        if (!button_left_first.wasClicked) {
          // end routine when button_left_first is clicked
          continueRoutine = false;
          
        }
        // if button_left_first is still clicked next frame, it is not a new click
        button_left_first.wasClicked = true;
      } else {
        // if button_left_first is clicked next frame, it is a new click
        button_left_first.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_left_first hasn't started / has finished
      button_left_first.clock.reset();
      // if button_left_first is clicked next frame, it is a new click
      button_left_first.wasClicked = false;
    }
    
    // *button_right_first* updates
    if (t >= 0 && button_right_first.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_right_first.tStart = t;  // (not accounting for frame time here)
      button_right_first.frameNStart = frameN;  // exact frame index
      
      button_right_first.setAutoDraw(true);
    }
    
    
    // if button_right_first is active this frame...
    if (button_right_first.status === PsychoJS.Status.STARTED) {
    }
    
    if (button_right_first.status === PsychoJS.Status.STARTED) {
      // check whether button_right_first has been pressed
      if (button_right_first.isClicked) {
        if (!button_right_first.wasClicked) {
          // store time of first click
          button_right_first.timesOn.push(button_right_first.clock.getTime());
          // store time clicked until
          button_right_first.timesOff.push(button_right_first.clock.getTime());
        } else {
          // update time clicked until;
          button_right_first.timesOff[button_right_first.timesOff.length - 1] = button_right_first.clock.getTime();
        }
        if (!button_right_first.wasClicked) {
          // end routine when button_right_first is clicked
          continueRoutine = false;
          
        }
        // if button_right_first is still clicked next frame, it is not a new click
        button_right_first.wasClicked = true;
      } else {
        // if button_right_first is clicked next frame, it is a new click
        button_right_first.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_right_first hasn't started / has finished
      button_right_first.clock.reset();
      // if button_right_first is clicked next frame, it is a new click
      button_right_first.wasClicked = false;
    }
    
    // *trial_count_text* updates
    if (t >= 0.0 && trial_count_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_count_text.tStart = t;  // (not accounting for frame time here)
      trial_count_text.frameNStart = frameN;  // exact frame index
      
      trial_count_text.setAutoDraw(true);
    }
    
    
    // if trial_count_text is active this frame...
    if (trial_count_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FirstComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FirstRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'First' ---
    for (const thisComponent of FirstComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('First.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(first_decision.corr, level);
    }
    psychoJS.experiment.addData('first_decision.keys', first_decision.keys);
    if (typeof first_decision.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('first_decision.rt', first_decision.rt);
        psychoJS.experiment.addData('first_decision.duration', first_decision.duration);
        routineTimer.reset();
        }
    
    first_decision.stop();
    // Run 'End Routine' code from code_7
    if ((first_decision.keys === "f")) {
        first_choice = "IZQUIERDA";
    } else {
        if ((first_decision.keys === "j")) {
            first_choice = "DERECHA";
        } else {
            first_choice = null;
        }
    }
    if ((button_left_first.numClicks === 1)) {
        first_choice = "IZQUIERDA";
    } else {
        if ((button_right_first.numClicks === 1)) {
            first_choice = "DERECHA";
        } else {
            first_choice = null;
        }
    }
    psychoJS.experiment.addData("correct_answer", correct_answer);
    psychoJS.experiment.addData("first_choice", first_choice);
    psychoJS.experiment.addData("decision_correct_first", (first_choice === correct_answer));
    trials.addData("tilt", tilt);
    psychoJS.experiment.addData("tilt", tilt);
    
    psychoJS.experiment.addData('button_left_first.numClicks', button_left_first.numClicks);
    psychoJS.experiment.addData('button_left_first.timesOn', button_left_first.timesOn);
    psychoJS.experiment.addData('button_left_first.timesOff', button_left_first.timesOff);
    psychoJS.experiment.addData('button_right_first.numClicks', button_right_first.numClicks);
    psychoJS.experiment.addData('button_right_first.timesOn', button_right_first.timesOn);
    psychoJS.experiment.addData('button_right_first.timesOff', button_right_first.timesOff);
    // the Routine "First" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AdviceMaxDurationReached;
var _advice_key_allKeys;
var AdviceMaxDuration;
var AdviceComponents;
function AdviceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Advice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AdviceClock.reset();
    routineTimer.reset();
    AdviceMaxDurationReached = false;
    // update component parameters for each repeat
    advice_key.keys = undefined;
    advice_key.rt = undefined;
    _advice_key_allKeys = [];
    // reset button_advice_yes to account for continued clicks & clear times on/off
    button_advice_yes.reset()
    // reset button_advice_no to account for continued clicks & clear times on/off
    button_advice_no.reset()
    psychoJS.experiment.addData('Advice.started', globalClock.getTime());
    AdviceMaxDuration = null
    // keep track of which components have finished
    AdviceComponents = [];
    AdviceComponents.push(advice_text);
    AdviceComponents.push(advice_key);
    AdviceComponents.push(button_advice_yes);
    AdviceComponents.push(button_advice_no);
    
    for (const thisComponent of AdviceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AdviceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Advice' ---
    // get current time
    t = AdviceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advice_text* updates
    if (t >= 0 && advice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advice_text.tStart = t;  // (not accounting for frame time here)
      advice_text.frameNStart = frameN;  // exact frame index
      
      advice_text.setAutoDraw(true);
    }
    
    
    // if advice_text is active this frame...
    if (advice_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *advice_key* updates
    if (t >= 0 && advice_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advice_key.tStart = t;  // (not accounting for frame time here)
      advice_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      advice_key.clock.reset();
      advice_key.start();
      advice_key.clearEvents();
    }
    
    // if advice_key is active this frame...
    if (advice_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = advice_key.getKeys({
        keyList: typeof ['y','n'] === 'string' ? [['y','n']] : ['y','n'], 
        waitRelease: false
      });
      _advice_key_allKeys = _advice_key_allKeys.concat(theseKeys);
      if (_advice_key_allKeys.length > 0) {
        advice_key.keys = _advice_key_allKeys[_advice_key_allKeys.length - 1].name;  // just the last key pressed
        advice_key.rt = _advice_key_allKeys[_advice_key_allKeys.length - 1].rt;
        advice_key.duration = _advice_key_allKeys[_advice_key_allKeys.length - 1].duration;
        // was this correct?
        if (advice_key.keys == '') {
            advice_key.corr = 1;
        } else {
            advice_key.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *button_advice_yes* updates
    if (t >= 0 && button_advice_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_advice_yes.tStart = t;  // (not accounting for frame time here)
      button_advice_yes.frameNStart = frameN;  // exact frame index
      
      button_advice_yes.setAutoDraw(true);
    }
    
    
    // if button_advice_yes is active this frame...
    if (button_advice_yes.status === PsychoJS.Status.STARTED) {
    }
    
    if (button_advice_yes.status === PsychoJS.Status.STARTED) {
      // check whether button_advice_yes has been pressed
      if (button_advice_yes.isClicked) {
        if (!button_advice_yes.wasClicked) {
          // store time of first click
          button_advice_yes.timesOn.push(button_advice_yes.clock.getTime());
          // store time clicked until
          button_advice_yes.timesOff.push(button_advice_yes.clock.getTime());
        } else {
          // update time clicked until;
          button_advice_yes.timesOff[button_advice_yes.timesOff.length - 1] = button_advice_yes.clock.getTime();
        }
        if (!button_advice_yes.wasClicked) {
          // end routine when button_advice_yes is clicked
          continueRoutine = false;
          
        }
        // if button_advice_yes is still clicked next frame, it is not a new click
        button_advice_yes.wasClicked = true;
      } else {
        // if button_advice_yes is clicked next frame, it is a new click
        button_advice_yes.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_advice_yes hasn't started / has finished
      button_advice_yes.clock.reset();
      // if button_advice_yes is clicked next frame, it is a new click
      button_advice_yes.wasClicked = false;
    }
    
    // *button_advice_no* updates
    if (t >= 0 && button_advice_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_advice_no.tStart = t;  // (not accounting for frame time here)
      button_advice_no.frameNStart = frameN;  // exact frame index
      
      button_advice_no.setAutoDraw(true);
    }
    
    
    // if button_advice_no is active this frame...
    if (button_advice_no.status === PsychoJS.Status.STARTED) {
    }
    
    if (button_advice_no.status === PsychoJS.Status.STARTED) {
      // check whether button_advice_no has been pressed
      if (button_advice_no.isClicked) {
        if (!button_advice_no.wasClicked) {
          // store time of first click
          button_advice_no.timesOn.push(button_advice_no.clock.getTime());
          // store time clicked until
          button_advice_no.timesOff.push(button_advice_no.clock.getTime());
        } else {
          // update time clicked until;
          button_advice_no.timesOff[button_advice_no.timesOff.length - 1] = button_advice_no.clock.getTime();
        }
        if (!button_advice_no.wasClicked) {
          // end routine when button_advice_no is clicked
          continueRoutine = false;
          
        }
        // if button_advice_no is still clicked next frame, it is not a new click
        button_advice_no.wasClicked = true;
      } else {
        // if button_advice_no is clicked next frame, it is a new click
        button_advice_no.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_advice_no hasn't started / has finished
      button_advice_no.clock.reset();
      // if button_advice_no is clicked next frame, it is a new click
      button_advice_no.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AdviceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AdviceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Advice' ---
    for (const thisComponent of AdviceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Advice.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (advice_key.keys === undefined) {
      if (['None','none',undefined].includes('')) {
         advice_key.corr = 1;  // correct non-response
      } else {
         advice_key.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(advice_key.corr, level);
    }
    psychoJS.experiment.addData('advice_key.keys', advice_key.keys);
    psychoJS.experiment.addData('advice_key.corr', advice_key.corr);
    if (typeof advice_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('advice_key.rt', advice_key.rt);
        psychoJS.experiment.addData('advice_key.duration', advice_key.duration);
        routineTimer.reset();
        }
    
    advice_key.stop();
    // Run 'End Routine' code from code
    if ((button_advice_yes.numClicks === 1)) {
        advisor_follow = "Y";
    } else {
        if ((button_advice_no.numClicks === 1)) {
            advisor_follow = "N";
        } else {
            advisor_follow = null;
        }
    }
    psychoJS.experiment.addData("requested_advice", advisor_follow);
    
    psychoJS.experiment.addData('button_advice_yes.numClicks', button_advice_yes.numClicks);
    psychoJS.experiment.addData('button_advice_yes.timesOn', button_advice_yes.timesOn);
    psychoJS.experiment.addData('button_advice_yes.timesOff', button_advice_yes.timesOff);
    psychoJS.experiment.addData('button_advice_no.numClicks', button_advice_no.numClicks);
    psychoJS.experiment.addData('button_advice_no.timesOn', button_advice_no.timesOn);
    psychoJS.experiment.addData('button_advice_no.timesOff', button_advice_no.timesOff);
    // the Routine "Advice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AdvisorMaxDurationReached;
var initial_text;
var advisor_accuracy;
var current_accuracy;
var suggestion_text;
var _decision_key_allKeys;
var maxDurationReached;
var AdvisorMaxDuration;
var AdvisorComponents;
function AdvisorRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Advisor' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AdvisorClock.reset();
    routineTimer.reset();
    AdvisorMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    initial_text = `${first_choice}`;
    advisor_accuracy = 0.8;
    current_accuracy = Math.random();
    if ((current_accuracy < advisor_accuracy)) {
        suggestion = correct_answer;
    } else {
        suggestion = ((correct_answer === "DERECHA") ? "IZQUIERDA" : "DERECHA");
    }
    suggestion_text = `${suggestion}`;
    
    initial_choice.setText(initial_text);
    advisor_text.setText(suggestion_text);
    decision_key.keys = undefined;
    decision_key.rt = undefined;
    _decision_key_allKeys = [];
    // reset button_left_final to account for continued clicks & clear times on/off
    button_left_final.reset()
    // reset button_right_final to account for continued clicks & clear times on/off
    button_right_final.reset()
    psychoJS.experiment.addData('Advisor.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((advisor_follow == 'N'));
    maxDurationReached = false
    AdvisorMaxDuration = null
    // keep track of which components have finished
    AdvisorComponents = [];
    AdvisorComponents.push(text_06);
    AdvisorComponents.push(initial_choice);
    AdvisorComponents.push(text_07);
    AdvisorComponents.push(advisor_text);
    AdvisorComponents.push(decision_text);
    AdvisorComponents.push(decision_key);
    AdvisorComponents.push(button_left_final);
    AdvisorComponents.push(button_right_final);
    
    for (const thisComponent of AdvisorComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AdvisorRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Advisor' ---
    // get current time
    t = AdvisorClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_06* updates
    if (t >= 0.0 && text_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_06.tStart = t;  // (not accounting for frame time here)
      text_06.frameNStart = frameN;  // exact frame index
      
      text_06.setAutoDraw(true);
    }
    
    
    // if text_06 is active this frame...
    if (text_06.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *initial_choice* updates
    if (t >= 0.0 && initial_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      initial_choice.tStart = t;  // (not accounting for frame time here)
      initial_choice.frameNStart = frameN;  // exact frame index
      
      initial_choice.setAutoDraw(true);
    }
    
    
    // if initial_choice is active this frame...
    if (initial_choice.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_07* updates
    if (t >= 0.0 && text_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_07.tStart = t;  // (not accounting for frame time here)
      text_07.frameNStart = frameN;  // exact frame index
      
      text_07.setAutoDraw(true);
    }
    
    
    // if text_07 is active this frame...
    if (text_07.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *advisor_text* updates
    if (t >= 0.0 && advisor_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advisor_text.tStart = t;  // (not accounting for frame time here)
      advisor_text.frameNStart = frameN;  // exact frame index
      
      advisor_text.setAutoDraw(true);
    }
    
    
    // if advisor_text is active this frame...
    if (advisor_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *decision_text* updates
    if (t >= 0.0 && decision_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      decision_text.tStart = t;  // (not accounting for frame time here)
      decision_text.frameNStart = frameN;  // exact frame index
      
      decision_text.setAutoDraw(true);
    }
    
    
    // if decision_text is active this frame...
    if (decision_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *decision_key* updates
    if (t >= 0.0 && decision_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      decision_key.tStart = t;  // (not accounting for frame time here)
      decision_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      decision_key.clock.reset();
      decision_key.start();
      decision_key.clearEvents();
    }
    
    // if decision_key is active this frame...
    if (decision_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = decision_key.getKeys({
        keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
        waitRelease: false
      });
      _decision_key_allKeys = _decision_key_allKeys.concat(theseKeys);
      if (_decision_key_allKeys.length > 0) {
        decision_key.keys = _decision_key_allKeys[_decision_key_allKeys.length - 1].name;  // just the last key pressed
        decision_key.rt = _decision_key_allKeys[_decision_key_allKeys.length - 1].rt;
        decision_key.duration = _decision_key_allKeys[_decision_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *button_left_final* updates
    if (t >= 0 && button_left_final.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_left_final.tStart = t;  // (not accounting for frame time here)
      button_left_final.frameNStart = frameN;  // exact frame index
      
      button_left_final.setAutoDraw(true);
    }
    
    
    // if button_left_final is active this frame...
    if (button_left_final.status === PsychoJS.Status.STARTED) {
    }
    
    if (button_left_final.status === PsychoJS.Status.STARTED) {
      // check whether button_left_final has been pressed
      if (button_left_final.isClicked) {
        if (!button_left_final.wasClicked) {
          // store time of first click
          button_left_final.timesOn.push(button_left_final.clock.getTime());
          // store time clicked until
          button_left_final.timesOff.push(button_left_final.clock.getTime());
        } else {
          // update time clicked until;
          button_left_final.timesOff[button_left_final.timesOff.length - 1] = button_left_final.clock.getTime();
        }
        if (!button_left_final.wasClicked) {
          // end routine when button_left_final is clicked
          continueRoutine = false;
          
        }
        // if button_left_final is still clicked next frame, it is not a new click
        button_left_final.wasClicked = true;
      } else {
        // if button_left_final is clicked next frame, it is a new click
        button_left_final.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_left_final hasn't started / has finished
      button_left_final.clock.reset();
      // if button_left_final is clicked next frame, it is a new click
      button_left_final.wasClicked = false;
    }
    
    // *button_right_final* updates
    if (t >= 0 && button_right_final.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_right_final.tStart = t;  // (not accounting for frame time here)
      button_right_final.frameNStart = frameN;  // exact frame index
      
      button_right_final.setAutoDraw(true);
    }
    
    
    // if button_right_final is active this frame...
    if (button_right_final.status === PsychoJS.Status.STARTED) {
    }
    
    if (button_right_final.status === PsychoJS.Status.STARTED) {
      // check whether button_right_final has been pressed
      if (button_right_final.isClicked) {
        if (!button_right_final.wasClicked) {
          // store time of first click
          button_right_final.timesOn.push(button_right_final.clock.getTime());
          // store time clicked until
          button_right_final.timesOff.push(button_right_final.clock.getTime());
        } else {
          // update time clicked until;
          button_right_final.timesOff[button_right_final.timesOff.length - 1] = button_right_final.clock.getTime();
        }
        if (!button_right_final.wasClicked) {
          // end routine when button_right_final is clicked
          continueRoutine = false;
          
        }
        // if button_right_final is still clicked next frame, it is not a new click
        button_right_final.wasClicked = true;
      } else {
        // if button_right_final is clicked next frame, it is a new click
        button_right_final.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_right_final hasn't started / has finished
      button_right_final.clock.reset();
      // if button_right_final is clicked next frame, it is a new click
      button_right_final.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AdvisorComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AdvisorRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Advisor' ---
    for (const thisComponent of AdvisorComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Advisor.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    if ((decision_key.keys === "f")) {
        final_choice = "IZQUIERDA";
    } else {
        if ((decision_key.keys === "j")) {
            final_choice = "DERECHA";
        } else {
            final_choice = null;
        }
    }
    if ((button_left_final.numClicks === 1)) {
        final_choice = "IZQUIERDA";
    } else {
        if ((button_right_final.numClicks === 1)) {
            final_choice = "DERECHA";
        } else {
            final_choice = null;
        }
    }
    psychoJS.experiment.addData("current_accuracy", current_accuracy);
    psychoJS.experiment.addData("advisor_suggestion", suggestion);
    psychoJS.experiment.addData("advisor_correct", (suggestion === correct_answer));
    psychoJS.experiment.addData("final_choice", final_choice);
    if ((final_choice !== null)) {
        psychoJS.experiment.addData("followed_advice", (final_choice === suggestion));
        psychoJS.experiment.addData("decision_correct_final", (final_choice === correct_answer));
    } else {
        psychoJS.experiment.addData("followed_advice", null);
        psychoJS.experiment.addData("decision_correct_final", null);
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(decision_key.corr, level);
    }
    psychoJS.experiment.addData('decision_key.keys', decision_key.keys);
    if (typeof decision_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('decision_key.rt', decision_key.rt);
        psychoJS.experiment.addData('decision_key.duration', decision_key.duration);
        routineTimer.reset();
        }
    
    decision_key.stop();
    psychoJS.experiment.addData('button_left_final.numClicks', button_left_final.numClicks);
    psychoJS.experiment.addData('button_left_final.timesOn', button_left_final.timesOn);
    psychoJS.experiment.addData('button_left_final.timesOff', button_left_final.timesOff);
    psychoJS.experiment.addData('button_right_final.numClicks', button_right_final.numClicks);
    psychoJS.experiment.addData('button_right_final.timesOn', button_right_final.timesOn);
    psychoJS.experiment.addData('button_right_final.timesOff', button_right_final.timesOff);
    // the Routine "Advisor" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ITIMaxDurationReached;
var feedback_text;
var ITIMaxDuration;
var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ITI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ITIClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    ITIMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    if ((advisor_follow === "N")) {
        if ((correct_answer === first_choice)) {
            feedback = "CORRECTA";
        } else {
            feedback = "INCORRECTA";
        }
    } else {
        if ((advisor_follow === "Y")) {
            if ((correct_answer === final_choice)) {
                feedback = "CORRECTA";
            } else {
                feedback = "INCORRECTA";
            }
        } else {
            feedback = null;
        }
    }
    feedback_text = `Tu decisión final fue: ${feedback}`;
    
    final_text.setText(feedback_text);
    psychoJS.experiment.addData('ITI.started', globalClock.getTime());
    ITIMaxDuration = null
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(final_text);
    
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ITIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ITI' ---
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *final_text* updates
    if (t >= 0.0 && final_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      final_text.tStart = t;  // (not accounting for frame time here)
      final_text.frameNStart = frameN;  // exact frame index
      
      final_text.setAutoDraw(true);
    }
    
    
    // if final_text is active this frame...
    if (final_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (final_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      final_text.tStop = t;  // not accounting for scr refresh
      final_text.frameNStop = frameN;  // exact frame index
      // update status
      final_text.status = PsychoJS.Status.FINISHED;
      final_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ITI' ---
    for (const thisComponent of ITIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ITI.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_6
    psychoJS.experiment.addData("feedback", feedback);
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (ITIMaxDurationReached) {
        ITIClock.add(ITIMaxDuration);
    } else {
        ITIClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Trust_AdjustmentMaxDurationReached;
var Trust_AdjustmentMaxDuration;
var Trust_AdjustmentComponents;
function Trust_AdjustmentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Trust_Adjustment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Trust_AdjustmentClock.reset();
    routineTimer.reset();
    Trust_AdjustmentMaxDurationReached = false;
    // update component parameters for each repeat
    trust_slider.reset()
    // Run 'Begin Routine' code from code_8
    trust_slider.markerSize = 0.02;
    
    psychoJS.experiment.addData('Trust_Adjustment.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((advisor_follow == 'N'));
    maxDurationReached = false
    Trust_AdjustmentMaxDuration = null
    // keep track of which components have finished
    Trust_AdjustmentComponents = [];
    Trust_AdjustmentComponents.push(trust_slider);
    Trust_AdjustmentComponents.push(text);
    
    for (const thisComponent of Trust_AdjustmentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Trust_AdjustmentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Trust_Adjustment' ---
    // get current time
    t = Trust_AdjustmentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trust_slider* updates
    if (t >= 0.0 && trust_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trust_slider.tStart = t;  // (not accounting for frame time here)
      trust_slider.frameNStart = frameN;  // exact frame index
      
      trust_slider.setAutoDraw(true);
    }
    
    
    // if trust_slider is active this frame...
    if (trust_slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check trust_slider for response to end Routine
    if (trust_slider.getRating() !== undefined && trust_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Trust_AdjustmentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Trust_AdjustmentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Trust_Adjustment' ---
    for (const thisComponent of Trust_AdjustmentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Trust_Adjustment.stopped', globalClock.getTime());
    psychoJS.experiment.addData('trust_slider.response', trust_slider.getRating());
    psychoJS.experiment.addData('trust_slider.rt', trust_slider.getRT());
    // the Routine "Trust_Adjustment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FinalMaxDurationReached;
var FinalMaxDuration;
var FinalComponents;
function FinalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Final' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FinalClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    FinalMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Final.started', globalClock.getTime());
    FinalMaxDuration = null
    // keep track of which components have finished
    FinalComponents = [];
    FinalComponents.push(image);
    
    for (const thisComponent of FinalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FinalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Final' ---
    // get current time
    t = FinalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image.tStop = t;  // not accounting for scr refresh
      image.frameNStop = frameN;  // exact frame index
      // update status
      image.status = PsychoJS.Status.FINISHED;
      image.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FinalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FinalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Final' ---
    for (const thisComponent of FinalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Final.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (FinalMaxDurationReached) {
        FinalClock.add(FinalMaxDuration);
    } else {
        FinalClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Post_Survey_TextMaxDurationReached;
var Post_Survey_TextMaxDuration;
var Post_Survey_TextComponents;
function Post_Survey_TextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Post_Survey_Text' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Post_Survey_TextClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    Post_Survey_TextMaxDurationReached = false;
    // update component parameters for each repeat
    Post_Survey_TextMaxDuration = null
    // keep track of which components have finished
    Post_Survey_TextComponents = [];
    Post_Survey_TextComponents.push(text_08);
    
    for (const thisComponent of Post_Survey_TextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Post_Survey_TextRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Post_Survey_Text' ---
    // get current time
    t = Post_Survey_TextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_08* updates
    if (t >= 0.0 && text_08.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_08.tStart = t;  // (not accounting for frame time here)
      text_08.frameNStart = frameN;  // exact frame index
      
      text_08.setAutoDraw(true);
    }
    
    
    // if text_08 is active this frame...
    if (text_08.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_08.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_08.tStop = t;  // not accounting for scr refresh
      text_08.frameNStop = frameN;  // exact frame index
      // update status
      text_08.status = PsychoJS.Status.FINISHED;
      text_08.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Post_Survey_TextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Post_Survey_TextRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Post_Survey_Text' ---
    for (const thisComponent of Post_Survey_TextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (routineForceEnded) {
        routineTimer.reset();} else if (Post_Survey_TextMaxDurationReached) {
        Post_Survey_TextClock.add(Post_Survey_TextMaxDuration);
    } else {
        Post_Survey_TextClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Post_SurveyMaxDurationReached;
var Post_SurveyMaxDuration;
var Post_SurveyComponents;
function Post_SurveyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Post_Survey' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Post_SurveyClock.reset();
    routineTimer.reset();
    Post_SurveyMaxDurationReached = false;
    // update component parameters for each repeat
    questionText_2.setText(question);
    slider_2.reset()
    psychoJS.experiment.addData('Post_Survey.started', globalClock.getTime());
    Post_SurveyMaxDuration = null
    // keep track of which components have finished
    Post_SurveyComponents = [];
    Post_SurveyComponents.push(questionText_2);
    Post_SurveyComponents.push(slider_2);
    Post_SurveyComponents.push(text_09);
    
    for (const thisComponent of Post_SurveyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Post_SurveyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Post_Survey' ---
    // get current time
    t = Post_SurveyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *questionText_2* updates
    if (t >= 0 && questionText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionText_2.tStart = t;  // (not accounting for frame time here)
      questionText_2.frameNStart = frameN;  // exact frame index
      
      questionText_2.setAutoDraw(true);
    }
    
    
    // if questionText_2 is active this frame...
    if (questionText_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *slider_2* updates
    if (t >= 0 && slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2.tStart = t;  // (not accounting for frame time here)
      slider_2.frameNStart = frameN;  // exact frame index
      
      slider_2.setAutoDraw(true);
    }
    
    
    // if slider_2 is active this frame...
    if (slider_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check slider_2 for response to end Routine
    if (slider_2.getRating() !== undefined && slider_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *text_09* updates
    if (t >= 0.0 && text_09.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_09.tStart = t;  // (not accounting for frame time here)
      text_09.frameNStart = frameN;  // exact frame index
      
      text_09.setAutoDraw(true);
    }
    
    
    // if text_09 is active this frame...
    if (text_09.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Post_SurveyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Post_SurveyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Post_Survey' ---
    for (const thisComponent of Post_SurveyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Post_Survey.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_2.response', slider_2.getRating());
    psychoJS.experiment.addData('slider_2.rt', slider_2.getRT());
    psychoJS.experiment.addData('slider_2.history', slider_2.getHistory());
    // the Routine "Post_Survey" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EndClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(end_text);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }
    
    
    // if end_text is active this frame...
    if (end_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      end_text.tStop = t;  // not accounting for scr refresh
      end_text.frameNStop = frameN;  // exact frame index
      // update status
      end_text.status = PsychoJS.Status.FINISHED;
      end_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (routineForceEnded) {
        routineTimer.reset();} else if (EndMaxDurationReached) {
        EndClock.add(EndMaxDuration);
    } else {
        EndClock.add(1.000000);
    }
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
  let dataset = psychoJS.experiment._trialsData;
  
  fetch("https://script.google.com/macros/s/AKfycbxuzO8LaXN6BUPLXFEvXAkzlPaJNj8PnM9IZaRVpPRs1VYwgPr9U0fB_Yl5T32YKRqH/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(dataset)
  });
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
