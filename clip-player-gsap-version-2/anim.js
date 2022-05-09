function anim(){
  // réglages
  tl.pause();
  tl.set("svg *",{transformOrigin:'center center'},0);

  tl.to("#degrade",{opacity: 0,duration:0},0);
  tl.to("#degrade2",{opacity: 0,duration:0},0);
  tl.to("#degrade3",{opacity: 0,duration:0},0);
  tl.to("#degrade4",{opacity: 0,duration:0},0);
  tl.to("#degrade5",{opacity: 0,duration:0},0);
  tl.to("#degrade6",{opacity: 0,duration:0},0);
  tl.to("#degrade7",{opacity: 0,duration:0},0);
  tl.to("#degrade8",{opacity: 0,duration:0},0);
  tl.to("#degrade9",{opacity: 0,duration:0},0);
  tl.to("#degrade10",{opacity: 0,duration:0},0);

  let choix = gsap.utils.random(["#degrade","#degrade2","#degrade3","#degrade4","#degrade5","#degrade6","#degrade7","#degrade8","#degrade9","#degrade10"]);
  tl.to(choix,{opacity: 1,duration:0},0);
  tl.to(choix,{y:10000,duration:145},0);

  tl.to("#bleu", { opacity: 0,  duration:10}, 102);
  tl.to("#bleubleu", { opacity: 0,  duration:10}, 102);
  tl.to("#bleurose", { opacity: 0,  duration:10}, 102);
  tl.to("#bleublanc", { opacity: 0,  duration:10}, 102);

  tl.to("#svg", { scale: 1,  duration:0, svgOrigin: "960 540"}, 0.1);
  tl.to("#svg", { scale: 1.3,  duration:55, svgOrigin: "960 540"}, 1);

  tl.to("#svg", { scale: 1,  duration:50, svgOrigin: "960 540"}, 35);

  tl.to("#Exclude", { scale: 1,  duration:0}, 0);
  tl.to("#Exclude", { scale: 50, y:-500 , duration:5, ease:"power4.in"}, 2); 
 
  tl.to("#Exclude", { scale: 1, y:0, duration:5, ease:"power4.out"}, 132.75);

 

  //tl.to("#UNDERWATER", { scale: 0.25,  duration:0}, 0);
  //tl.to("#UNDERWATER", { scale: 15, x:1300,  duration:5, ease:"power4.in"}, 2);
  // tl.to("#UNDERWATER", { scale: 15,  duration:15}, 6);
  // tl.to("#UNDERWATER",{x:1300,duration:5},2);

  //tl.to("#UNDERWATER", { scale: 15,  duration:10}, 125);
  //tl.to("#UNDERWATER", { scale: 5,  duration:10}, 130);
  //tl.to("#UNDERWATER", { scale: 0.25,  duration:10}, 135);
  //tl.to("#UNDERWATER",{x:0,duration:5},132);

  tl.to("#nom",{opacity:0,duration:0},0);
  tl.to("#ecole",{opacity:0,duration:0},0);
  tl.to("#musique",{opacity:0,duration:0},0);
  tl.to("#nom",{opacity:1,duration:5},136);
  tl.to("#ecole",{opacity:1,duration:5},136);
  tl.to("#musique",{opacity:1,duration:5},136);

  tl.to("#ro_ro1", { scale: 0,  duration:0.1}, 0);
  tl.to("#ro_ro2", { scale: 0,  duration:0.1}, 0);
  tl.to("#ro_ro3", { scale: 0,  duration:0.1}, 0);
  tl.to("#ro_ro4", { scale: 0,  duration:0.1}, 0);
  tl.to("#ro_ro5", { scale: 0,  duration:0.1}, 0);
  tl.to("#ro_ro6", { scale: 0,  duration:0.1}, 0);
  tl.to("#ro_ro7", { scale: 0,  duration:0.1}, 0);
  tl.to("#ro_ro8", { scale: 0,  duration:0.1}, 0);
  tl.to("#rob1", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rob2", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rob3", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rob4", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rob5", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rob6", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rob7", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rob8", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rond1", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rond2", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rond3", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rond4", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rou1", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rou2", { opacity: 0,  duration:0.1}, 0);
  tl.to("#rou3", { opacity: 0,  duration:0.1}, 0);
  tl.to("#shine1,#shine2,#shine3,#shine4", { scale: 0,  duration:0.1}, 0);
  tl.to("#shine5,#shine6,#shine7,#shine8", { scale: 0,  duration:0.1}, 0);
  
  tl.to("#eli1", { scale: 0,  duration:0.1}, 0);
  tl.to("#eli2", { scale: 0,  duration:0.1}, 0);
  tl.to("#eli3", { scale: 0,  duration:0.1}, 0);
  tl.to("#elib1", { scale: 0,  duration:0.1}, 0);
  tl.to("#elib2", { scale: 0,  duration:0.1}, 0);
  tl.to("#elib3", { scale: 0,  duration:0.1}, 0);
  tl.to("#eliv1", { scale: 0,  duration:0.1}, 0);
  tl.to("#eliv2", { scale: 0,  duration:0.1}, 0);
  tl.to("#elir1", { scale: 0,  duration:0.1}, 0);
  tl.to("#elir2", { scale: 0,  duration:0.1}, 0);
  tl.to("#elibb2", { scale: 0,  duration:0.1}, 0);
  tl.to("#elibb1", { scale: 0,  duration:0.1}, 0);
  tl.to("#robl1", { scale: 0,  duration:0.1}, 0);
  tl.to("#robl2", { scale: 0,  duration:0.1}, 0);
  tl.to("#robl3", { scale: 0,  duration:0.1}, 0);
  tl.to("#robl4", { scale: 0,  duration:0.1}, 0);
  tl.to("#robl5", { scale: 0,  duration:0.1}, 0);
  tl.to("#gauchedroite1", { opacity: 0,  duration:0.1}, 0);
  tl.to("#gauchedroite2", { opacity: 0,  duration:0.1}, 0);
  tl.to("#droitegauche1", { opacity: 0,  duration:0.1}, 0);
  tl.to("#droitegauche2", { opacity: 0,  duration:0.1}, 0);
  tl.to("#grosselignelentgd", { opacity: 0,  duration:0.1}, 0);
  tl.to("#grosselignelentdg", { opacity: 0,  duration:0.1}, 0);

  tl.to("#eli1", { scale: 1,  duration:1}, 74.16);
  tl.to("#eli2", { scale: 1,  duration:1}, 74.16);
  tl.to("#eli3", { scale: 1,  duration:1}, 74.16);
  tl.to("#eli1", { rotate: 90,  duration:8}, 74.5);
  tl.to("#eli2", { rotate: 90,  duration:8}, 74.5);
  tl.to("#eli3", { rotate: 90,  duration:8}, 74.5);

  tl.to("#eli1", { opacity: 0,  duration:1}, 77);
  tl.to("#eli2", { opacity: 0,  duration:1}, 77);
  tl.to("#eli3", { opacity: 0,  duration:1}, 77);

  tl.to("#elib1", { scale: 1,  duration:1}, 78.5);
  tl.to("#elib2", { scale: 1,  duration:1}, 78.5);
  tl.to("#elib3", { scale: 1,  duration:1}, 78.5);
  tl.to("#elib1", { rotate: 90,  duration:8}, 78.5);
  tl.to("#elib2", { rotate: 90,  duration:8}, 78.5);
  tl.to("#elib3", { rotate: 90,  duration:8}, 78.5);

  tl.to("#elib1", { opacity: 0,  duration:1}, 83);
  tl.to("#elib2", { opacity: 0,  duration:1}, 83);
  tl.to("#elib3", { opacity: 0,  duration:1}, 83);

  tl.to("#eliv1", { scale: 1,  duration:1}, 83.15);
  tl.to("#eliv2", { scale: 1,  duration:1}, 83.15);
  tl.to("#eliv1", { rotate: 90,  duration:8}, 83.15);
  tl.to("#eliv2", { rotate: 45,  duration:8}, 83.15);
  tl.to("#eliv1", { rotate: 400,  duration:8}, 94.65);
  tl.to("#eliv2", { rotate: 200,  duration:8}, 94.65);

  tl.to("#eliv1", { opacity: 0,  duration:1}, 102);
  tl.to("#eliv2", { opacity: 0,  duration:1}, 102);

  tl.to("#elir1", { scale: 1,  duration:1}, 87.7);
  tl.to("#elir2", { scale: 1,  duration:1}, 87.7);
  tl.to("#elir1", { rotate: 90,  duration:8}, 87.7);
  tl.to("#elir2", { rotate: 45,  duration:8}, 87.7);
  tl.to("#elir1", { rotate: 400,  duration:8}, 96.90);
  tl.to("#elir2", { rotate: 200,  duration:8}, 96.90);

  tl.to("#elir1", { opacity: 0,  duration:1}, 104);
  tl.to("#elir2", { opacity: 0,  duration:1}, 104);

  tl.to("#elibb1", { scale: 1,  duration:1}, 90.13);
  tl.to("#elibb2", { scale: 1,  duration:1}, 90.13);
  tl.to("#elibb1", { rotate: 90,  duration:8}, 90.13);
  tl.to("#elibb2", { rotate: 45,  duration:8}, 90.13);
  tl.to("#elibb1", { rotate: 400,  duration:8}, 99.15);
  tl.to("#elibb2", { rotate: 200,  duration:8}, 99.15);

  tl.to("#elibb1", { rotate: 600,  duration:8}, 106);
  tl.to("#elibb2", { rotate: 400,  duration:8}, 106);
  tl.to("#elibb1", { opacity: 0,  duration:1}, 108);
  tl.to("#elibb2", { opacity: 0,  duration:1}, 108);



  
  tl.fromTo("#ligne1",{drawSVG:"0% 5%"},{drawSVG:"80% 100%",duration:5, ease:"none"},27);
  tl.fromTo("#ligne2",{drawSVG:"0% 5%"},{drawSVG:"80% 100%",duration:5, ease:"none"},28.2);
  tl.fromTo("#ligne3",{drawSVG:"0% 5%"},{drawSVG:"80% 100%",duration:5, ease:"none"},29.4);
  tl.fromTo("#ligne4",{drawSVG:"0% 5%"},{drawSVG:"80% 100%",duration:5, ease:"none"},30.6);

  tl.fromTo("#bleu",{drawSVG:"0% 5%"},{drawSVG:"0% 100%",duration:10, ease:"none"},55);
  tl.fromTo("#bleurose",{drawSVG:"0% 5%"},{drawSVG:"90% 100%",duration:10, ease:"none"},55);
  tl.fromTo("#bleubleu",{drawSVG:"0% 5%"},{drawSVG:"90% 100%",duration:10, ease:"none"},55);
  tl.fromTo("#bleublanc",{drawSVG:"0% 5%"},{drawSVG:"90% 100%",duration:10, ease:"none"},55);

  tl.fromTo("#wave",{drawSVG:"0% 5%"},{drawSVG:"0% 100%",duration:5, ease:"none"},128.5);

  tl.fromTo("#lignerond",{drawSVG:"0% 5%"},{drawSVG:"91% 100%",duration:12, ease:"none"},25);

  tl.fromTo("#bigl",{drawSVG:"0% 10%"},{drawSVG:"91% 100%",duration:6, ease:"none"},86);

  tl.fromTo("#lignezig",{drawSVG:"0% 5%"},{drawSVG:"91% 100%",duration:12, ease:"none"},36);
  tl.fromTo("#lignezag",{drawSVG:"0% 5%"},{drawSVG:"91% 100%",duration:12, ease:"none"},36);

  tl.to("#lignerond", { opacity: 0,  duration:0.1}, 48);
  tl.to("#lignezig", { opacity: 0,  duration:0.1}, 48);
  tl.to("#lignezag", { opacity: 0,  duration:0.1}, 48);

  tl.fromTo("#tun",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},66.6);
  tl.fromTo("#tan",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},66.95);
  tl.fromTo("#tin",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},66.8);

  tl.fromTo("#tun",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},69);
  tl.fromTo("#tan",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},70);
  tl.fromTo("#tin",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},69.5);
  tl.fromTo("#tun1",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},69.3);
  tl.fromTo("#tan1",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},69.9);
  tl.fromTo("#tin1",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},70.3);
  tl.fromTo("#tun2",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},70);
  tl.fromTo("#tan2",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},69.1);
  tl.fromTo("#tin2",{drawSVG:"0% 3%"},{drawSVG:"91% 100%",duration:1, ease:"none"},69.7);


  tl.fromTo("#alg1",{drawSVG:"0% 10%"},{drawSVG:"98% 100%",duration:4, ease:"none"},92);
  tl.fromTo("#alg2",{drawSVG:"0% 10%"},{drawSVG:"98% 100%",duration:4, ease:"none"},94);
  tl.fromTo("#alg3",{drawSVG:"0% 10%"},{drawSVG:"98% 100%",duration:4, ease:"none"},96);
  tl.fromTo("#alg4",{drawSVG:"0% 10%"},{drawSVG:"98% 100%",duration:4, ease:"none"},93);
  tl.fromTo("#alg5",{drawSVG:"0% 10%"},{drawSVG:"98% 100%",duration:4, ease:"none"},95);


  tl.to("#ro_ro1,#ro_ro2,#ro_ro3,#ro_ro4", { scale: 1,  duration:3,stagger:0.20,}, 0.8);
  tl.to("#ro_ro1,#ro_ro2,#ro_ro3,#ro_ro4", { scale: 0,  duration:5,stagger:0.20,}, 2);

  tl.to("#ro_ro5,#ro_ro6,#ro_ro7,#ro_ro8", { scale: 1,  duration:3,stagger:0.20}, 3.2);
  tl.to("#ro_ro5,#ro_ro6,#ro_ro7,#ro_ro8", { scale: 0,  duration:5,stagger:0.20}, 4.4);

  
  tl.to("#ro_ro1,#ro_ro2,#ro_ro3,#ro_ro4", { scale: 1,  duration:3,stagger:0.20,}, 5.1);
  tl.to("#ro_ro1,#ro_ro2,#ro_ro3,#ro_ro4", { scale: 0,  duration:5,stagger:0.20,}, 6.3);

  tl.to("#ro_ro5,#ro_ro6,#ro_ro7,#ro_ro8", { scale: 1,  duration:3,stagger:0.20}, 7.5);
  tl.to("#ro_ro5,#ro_ro6,#ro_ro7,#ro_ro8", { scale: 0,  duration:5,stagger:0.20}, 8.7);


  tl.to("#ro_ro1,#ro_ro2,#ro_ro3,#ro_ro4", { scale: 1,  duration:3,stagger:0.20,}, 9.4);
  tl.to("#ro_ro1,#ro_ro2,#ro_ro3,#ro_ro4", { scale: 0,  duration:5,stagger:0.20,}, 10.6);

  tl.to("#ro_ro5,#ro_ro6,#ro_ro7,#ro_ro8", { scale: 1,  duration:3,stagger:0.20}, 11.8);
  tl.to("#ro_ro5,#ro_ro6,#ro_ro7,#ro_ro8", { scale: 0,  duration:5,stagger:0.20}, 13);
  

  tl.to("#ro_ro1,#ro_ro2,#ro_ro3,#ro_ro4", { scale: 1,  duration:3,stagger:0.20,}, 13.7);
  tl.to("#ro_ro1,#ro_ro2,#ro_ro3,#ro_ro4", { scale: 0,  duration:5,stagger:0.20,}, 14.9);

  tl.to("#ro_ro5,#ro_ro6,#ro_ro7,#ro_ro8", { scale: 1,  duration:3,stagger:0.20}, 16);
  tl.to("#ro_ro5,#ro_ro6,#ro_ro7,#ro_ro8", { scale: 0,  duration:5,stagger:0.20}, 17.2);


  tl.to("#ro_ro1,#ro_ro2,#ro_ro3,#ro_ro4", { scale: 1,  duration:3,stagger:0.20,}, 18.4);
  tl.to("#ro_ro1,#ro_ro2,#ro_ro3,#ro_ro4", { scale: 0,  duration:5,stagger:0.20,}, 19.6);

  tl.to("#ro_ro5,#ro_ro6,#ro_ro7,#ro_ro8", { scale: 1,  duration:3,stagger:0.20}, 20.8);
  tl.to("#ro_ro5,#ro_ro6,#ro_ro7,#ro_ro8", { scale: 0,  duration:5,stagger:0.20}, 22);

  


// Les ptits ronds avec les pil
// 1
//         tl.to("#ro_ro1", { scale: 1,  duration:0.3}, 0.8);
//         tl.to("#ro_ro1", { scale: 0,  duration:0.6}, 1.25);

//         tl.to("#ro_ro2", { scale: 1,  duration:0.3}, 1.45);
//         tl.to("#ro_ro2", { scale: 0,  duration:0.6}, 1.65);

//         tl.to("#ro_ro3", { scale: 1,  duration:0.3}, 1.85);
//         tl.to("#ro_ro3", { scale: 0,  duration:0.6}, 2.05);

//         tl.to("#ro_ro4", { scale: 1,  duration:0.3}, 2.25);
//         tl.to("#ro_ro4", { scale: 0,  duration:0.6}, 2.45);

// // 2

//         tl.to("#ro_ro5", { scale: 1,  duration:0.3}, 3.05);
//         tl.to("#ro_ro5", { scale: 0,  duration:0.6}, 3.25);

//         tl.to("#ro_ro6", { scale: 1,  duration:0.3}, 3.45);
//         tl.to("#ro_ro6", { scale: 0,  duration:0.6}, 3.65);

//         tl.to("#ro_ro7", { scale: 1,  duration:0.3}, 3.85);
//         tl.to("#ro_ro7", { scale: 0,  duration:0.6}, 4.05);

//         tl.to("#ro_ro8", { scale: 1,  duration:0.3}, 4.25);
//         tl.to("#ro_ro8", { scale: 0,  duration:0.6}, 4.45);

//3
 

// Les gros ronds

  tl.to("#rond1", { opacity: 1,  duration:1.8}, 0.7);
  tl.to("#rond1", { opacity: 0,  duration:1.8}, 1.5);

  tl.to("#rond2", { opacity: 1,  duration:1.8}, 2.7);
  tl.to("#rond2", { opacity: 0,  duration:1.8}, 3.5);

  tl.to("#rond3", { opacity: 1,  duration:1.8}, 4.7);
  tl.to("#rond3", { opacity: 0,  duration:1.8}, 5.5);

  tl.to("#rond4", { opacity: 1,  duration:1.8}, 6.7);
  tl.to("#rond4", { opacity: 0,  duration:1.8}, 7.5);


  tl.to("#rond1", { opacity: 1,  duration:1.8}, 9);
  tl.to("#rond1", { opacity: 0,  duration:1.8}, 9.8);

  tl.to("#rond2", { opacity: 1,  duration:1.8}, 11);
  tl.to("#rond2", { opacity: 0,  duration:1.8}, 12.2);

  //tl.to("#rond3", { opacity: 1,  duration:1.8}, 14.7);
  //tl.to("#rond3", { opacity: 0,  duration:1.8}, 15.5);

  tl.to("#rond4", { opacity: 1,  duration:1.8}, 13.8);
  tl.to("#rond4", { opacity: 0,  duration:1.8}, 15);


  tl.to("#rond1", { opacity: 1,  duration:1.8}, 16);
  tl.to("#rond1", { opacity: 0,  duration:1.8}, 16.8);

  tl.to("#rond2", { opacity: 1,  duration:1.8}, 17.7);
  tl.to("#rond2", { opacity: 0,  duration:1.8}, 18.5);

  tl.to("#rond3", { opacity: 1,  duration:1.8}, 19.7);
  tl.to("#rond3", { opacity: 0,  duration:1.8}, 20.5);

  tl.to("#rond4", { opacity: 1,  duration:1.8}, 22.8);
  tl.to("#rond4", { opacity: 0,  duration:1.8}, 24);

  tl.to("#rond3", { opacity: 1,  duration:1.8}, 25.4);
  tl.to("#rond3", { opacity: 0,  duration:1.8}, 26.6);


  tl.to("#rob1", { opacity: 1,  duration:1,}, 37);
  tl.to("#rob1", { opacity: 0,  duration:1,}, 37.5);
  tl.to("#rob2", { opacity: 1,  duration:1,}, 38.2);
  tl.to("#rob2", { opacity: 0,  duration:1,}, 38.7);
  tl.to("#rob3", { opacity: 1,  duration:1,}, 39.4);
  tl.to("#rob3", { opacity: 0,  duration:1,}, 39.8);
  tl.to("#rob4", { opacity: 1,  duration:1,}, 40.6);
  tl.to("#rob4", { opacity: 0,  duration:1,}, 41.1);
  tl.to("#rob5", { opacity: 1,  duration:1,}, 41.8);
  tl.to("#rob5", { opacity: 0,  duration:1,}, 42.3);
  tl.to("#rob6", { opacity: 1,  duration:1,}, 43);
  tl.to("#rob6", { opacity: 0,  duration:1,}, 43.5);
  tl.to("#rob7", { opacity: 1,  duration:1,}, 44.2);
  tl.to("#rob7", { opacity: 0,  duration:1,}, 44.7);
  tl.to("#rob8", { opacity: 1,  duration:1,}, 45.4);
  tl.to("#rob8", { opacity: 0,  duration:1,}, 45.8);


  tl.to("#rob1,#rob2,#rob3,#rob4", { opacity: 1,  duration:1,stagger:1.5,}, 45);
  tl.to("#rob1,#rob2,#rob3,#rob4", { opacity: 0,  duration:1,stagger:1.5,}, 46.2);
  tl.to("#rob5,#rob6,#rob7,#rob8", { opacity: 1,  duration:1,stagger:1.5}, 47.4);
  tl.to("#rob5,#rob6,#rob7,#rob8", { opacity: 0,  duration:1,stagger:1.5}, 48.6);

  tl.to("#rob1,#rob2,#rob3,#rob4", { opacity: 1,  duration:1,stagger:1.5,}, 49.8);
  tl.to("#rob1,#rob2,#rob3,#rob4", { opacity: 0,  duration:1,stagger:1.5,}, 51);
  tl.to("#rob5,#rob6,#rob7,#rob8", { opacity: 1,  duration:1,stagger:1.5}, 52.2);
  tl.to("#rob5,#rob6,#rob7,#rob8", { opacity: 0,  duration:1,stagger:1.5}, 53.4);

  tl.to("#rob1,#rob2,#rob3,#rob4", { opacity: 1,  duration:1,stagger:1.5,}, 54.6);
  tl.to("#rob1,#rob2,#rob3,#rob4", { opacity: 0,  duration:1,stagger:1.5,}, 55.8);
  tl.to("#rob5,#rob6,#rob7,#rob8", { opacity: 1,  duration:1,stagger:1.5}, 57);
  tl.to("#rob5,#rob6,#rob7,#rob8", { opacity: 0,  duration:1,stagger:1.5}, 58.2);



  tl.to("#robl1", { scale: 1,  duration:1}, 108);
  tl.to("#robl2", { scale: 1,  duration:1}, 108.48);
  tl.to("#robl3", { scale: 1,  duration:1}, 110.40);
  tl.to("#robl4", { scale: 1,  duration:1}, 110.63);
  tl.to("#robl5", { scale: 1,  duration:1}, 110.83);

  tl.to("#robl1", { opacity: 0, y: -200,  duration:2}, 112);
  tl.to("#robl2", { opacity: 0, y: -200,  duration:2}, 112,2);
  tl.to("#robl3", { opacity: 0, y: -200,  duration:2}, 112,4);
  tl.to("#robl4", { opacity: 0, y: -200,  duration:2}, 112,6);
  tl.to("#robl5", { rotate:500, x:-700, y: 200,  duration:10}, 112,8);


  tl.to("#gauchedroite1", { opacity: 1,  duration:2}, 120);
  tl.to("#gauchedroite2", { opacity: 1,  duration:2}, 122.53);
  tl.to("#droitegauche2", { opacity: 1,  duration:2}, 124.65);
  tl.to("#grosselignelentgd", { opacity: 1,  duration:2}, 126.92);
  tl.to("#grosselignelentdg", { opacity: 1,  duration:2}, 129.3);

  tl.to("#gauchedroite1", {  x:-3000,  duration:15}, 120);
  tl.to("#gauchedroite2", {  x:-3000,  duration:15}, 120);
  tl.to("#droitegauche1", {  x:3000,  duration:15}, 120);
  tl.to("#droitegauche2", {  x:3000,  duration:15}, 120);
  tl.to("#grosselignelentgd", {  x:-1000,  duration:15}, 120);
  tl.to("#grosselignelentdg", {  x:1000,  duration:15}, 120);


  tl.to("#wiwave3", {  x:400, y:-400,  duration:6}, 105);
  tl.to("#wiwave2", {  x:-200, y:-500,  duration:11}, 105);

  tl.to("#wiwave3", {  x:0, duration:5}, 115);
  tl.to("#wiwave2", {  x:0, duration:12}, 115);

  tl.to("#wiwave3", {  opacity:0, duration:3}, 124);
  tl.to("#wiwave2", {  opacity:0, duration:3}, 124);



}