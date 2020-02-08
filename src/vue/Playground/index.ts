import Vue from "vue";
import { Component, Provide } from "vue-property-decorator";
import Cuber from "../../cuber/cuber";
import Keyboard from "../Keyboard";
import Option from "../../common/option";
import Tune from "../Tune";
import * as THREE from "three";
import { COLORS, download } from "../../common/define";

@Component({
  template: require("./index.html"),
  components: {
    keyboard: Keyboard,
    tune: Tune
  }
})
export default class Playground extends Vue {
  @Provide("cuber")
  cuber: Cuber;

  @Provide("option")
  option: Option;

  keyboard: Keyboard = new Keyboard();

  menu: boolean = false;
  tune: boolean = false;
  width: number = 0;
  height: number = 0;
  size: number = 0;

  start: number = 0;
  now: number = 0;
  get score() {
    let diff = this.now - this.start;
    let minute = Math.floor(diff / 1000 / 60);
    diff = diff % (1000 * 60);
    let second = Math.floor(diff / 1000);
    diff = diff % 1000;
    let ms = Math.floor(diff / 100);
    let time = (minute > 0 ? minute + ":" : "") + (Array(2).join("0") + second).slice(-2) + "." + ms;
    return time + "/" + this.cuber.cube.history.moves;
  }

  snaper: THREE.WebGLRenderer;
  constructor() {
    super();
    let canvas = document.createElement("canvas");
    this.cuber = new Cuber(canvas);
    this.option = new Option(this.cuber);
    this.cuber.cube.callbacks.push(() => {
      if (this.cuber.cube.complete) {
        this.option.lock = true;
      }
    });
    this.snaper = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: true });
    this.snaper.setPixelRatio(1);
    this.snaper.setClearColor(COLORS.BACKGROUND, 0);
    this.snaper.setSize(512, 512, true);
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.size = Math.min(this.width / 8, this.height / 14);

    this.cuber.width = this.width;
    this.cuber.height = this.height - this.size * 4;
    this.cuber.resize();
    let cuber = this.$refs.cuber;
    if (cuber instanceof HTMLElement) {
      cuber.style.width = this.width + "px";
      cuber.style.height = this.height - this.size * 4 + "px";
    }

    let keyboard = this.$refs.keyboard;
    if (keyboard instanceof Keyboard) {
      keyboard.width = this.size * 8 - this.size / 8;
      keyboard.height = this.size * 4;
    }
  }

  mounted() {
    this.shuffle();
    if (this.$refs.cuber instanceof Element) {
      let cuber = this.$refs.cuber;
      cuber.appendChild(this.cuber.canvas);
      this.$nextTick(this.resize);
    }
    this.loop();
  }

  loop() {
    requestAnimationFrame(this.loop.bind(this));
    if (this.cuber.cube.history.moves == 0) {
      this.start = 0;
      this.now = 0;
    } else {
      if (this.start == 0) {
        this.start = new Date().getTime();
      }
      if (!this.cuber.cube.complete) {
        this.now = new Date().getTime();
      }
    }
    this.cuber.render();
  }

  shuffle() {
    this.cuber.cube.twister.twist("*");
    this.menu = false;    
    this.option.lock = false;
    this.start = 0;
    this.now = 0;
  }
  

  snap() {
    this.cuber.camera.aspect = 1;
    this.cuber.camera.updateProjectionMatrix();
    this.snaper.clear();
    this.snaper.render(this.cuber.scene, this.cuber.camera);
    this.cuber.resize();
    let content = this.snaper.domElement.toDataURL("image/png");
    let parts = content.split(";base64,");
    let type = parts[0].split(":")[1];
    let raw = window.atob(parts[1]);
    let length = raw.length;
    let data = new Uint8Array(length);
    for (let i = 0; i < length; ++i) {
      data[i] = raw.charCodeAt(i);
    }
    let blob = new Blob([data], { type: type });
    download("cuber.png", blob);
  }

  algs(){
    window.location.href = "algs.html";
  }
}