import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

import Viewport from "../Viewport";
import cuber from "../../cuber";
import Tune from "../Tune";
import Layer from "../Layer";
import Setting from "../Setting";
import Player from "../Player";
import { WebGLRenderer } from "three";
import GIF from "../../common/gif";
import { APNG } from "../../common/apng";
import ZIP from "../../common/zip";
import { COLORS, FACE } from "../../cuber/define";
import Cubelet from "../../cuber/cubelet";
import Util from "../../common/util";

@Component({
  template: require("./index.html"),
  components: {
    viewport: Viewport,
    tune: Tune,
    setting: Setting,
    player: Player,
    layer: Layer
  }
})
export default class Director extends Vue {
  width: number = 0;
  height: number = 0;
  size: number = 0;
  viewport: Viewport;
  player: Player;

  filmer: WebGLRenderer;
  gif: GIF;
  apng: APNG;
  zip: ZIP;
  pixel: number = 512;
  @Watch("pixel")
  onPixelChange() {
    window.localStorage.setItem("director.pixel", String(this.pixel));
  }
  delay: number = 2;
  @Watch("delay")
  onDelayChange() {
    window.localStorage.setItem("director.delay", String(this.delay));
    this.apng.delay_num = this.delay;
  }

  output: string = "gif";
  @Watch("output")
  onOutputChange() {
    window.localStorage.setItem("director.output", this.output);
  }

  constructor() {
    super();
    this.filmer = new WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: true });
    this.filmer.setPixelRatio(1);
    this.filmer.setClearColor(COLORS.BACKGROUND, 0);
    this.apng = new APNG(this.filmer.domElement);
    this.zip = new ZIP();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.size = Math.ceil(Math.min(this.width / 6, this.height / 12)) * 0.8;
    this.viewport?.resize(this.width, this.height - this.size * 4.8 - 32);
    this.player?.resize(this.size);
  }

  mounted() {
    cuber.preferance.load("director");
    let view = this.$refs.viewport;
    if (view instanceof Viewport) {
      this.viewport = view;
    }
    view = this.$refs.player;
    if (view instanceof Player) {
      this.player = view;
    }
    this.resize();

    this.reload();
    cuber.controller.taps.push((index: number, face: number) => {
      this.stick(index, face);
    });
    this.delay = Number(window.localStorage.getItem("director.delay") || 2);
    this.pixel = Number(window.localStorage.getItem("director.pixel") || 512);
    this.output = window.localStorage.getItem("director.output") || "gif";

    this.loop();
  }

  reload() {
    let save;
    let order = cuber.preferance.order;
    save = window.localStorage.getItem("director.action." + order);
    this.action = save != null ? save : "RUR'U'-";
    save = window.localStorage.getItem("director.scene." + order);
    this.scene = save != null ? save : "^";

    save = window.localStorage.getItem("director.stickers." + order);
    this.stickers = {};
    if (save) {
      try {
        let data = JSON.parse(save);
        for (let face = 0; face < 6; face++) {
          this.stickers[FACE[face]] = data[FACE[face]];
        }
      } catch (error) {
        console.log(error);
      }
    }

    for (const face of [FACE.L, FACE.R, FACE.D, FACE.U, FACE.B, FACE.F]) {
      let stickers = this.stickers[FACE[face]];
      if (!stickers) {
        continue;
      }
      for (let index = 0; index < stickers.length; index++) {
        let sticker = stickers[index];
        if (sticker && sticker >= 0) {
          cuber.world.cube.stick(index, face, this.colors[sticker]);
        } else {
          cuber.world.cube.stick(index, face, "");
        }
      }
    }
  }

  loop() {
    requestAnimationFrame(this.loop.bind(this));
    this.viewport.draw();
    if (this.recording) {
      this.record();
    }
  }

  get style() {
    return {
      width: this.size + "px",
      height: this.size + "px",
      "min-width": "0%",
      "min-height": "0%",
      "text-transform": "none"
    };
  }

  tuned: boolean = false;
  settingd: boolean = false;
  shuffled: boolean = false;
  layerd: boolean = false;
  keys = ["widgets", "colorize", "palette", "settings", "archive", "videocam"];
  disabled = {};
  tap(key: string) {
    switch (key) {
      case "widgets":
        this.layerd = true;
        break;
      case "palette":
        this.tuned = true;
        break;
      case "settings":
        this.settingd = true;
        break;
      case "backspace":
        cuber.history.undo();
        break;
      default:
        break;
    }
  }

  order() {}

  scene: string = "";
  @Watch("scene")
  onSceneChange() {
    this.player.scene = this.scene;
  }

  action: string = "";
  @Watch("action")
  onActionChange() {
    this.player.action = this.action;
  }

  recording: boolean = false;

  colors = [
    COLORS.YELLOW,
    COLORS.WHITE,
    COLORS.BLUE,
    COLORS.GREEN,
    COLORS.RED,
    COLORS.ORANGE,
    COLORS.BLACK,
    COLORS.GRAY,
    COLORS.CYAN,
    COLORS.LIME,
    COLORS.PINK
  ];
  color = 6;
  colord = false;
  stickers: { [face: string]: number[] | undefined };
  stick(index: number, face: number) {
    if (index < 0) {
      return;
    }
    let cubelet: Cubelet = cuber.world.cube.cubelets[index];
    index = cubelet.initial;
    face = cubelet.getColor(face);
    let arr = this.stickers[FACE[face]];
    if (arr == undefined) {
      arr = [];
      this.stickers[FACE[face]] = arr;
    }
    if (arr[index] != this.color) {
      arr[index] = this.color;
      cuber.world.cube.stick(index, face, this.colors[this.color]);
    } else {
      arr[index] = -1;
      cuber.world.cube.stick(index, face, "");
    }
    window.localStorage.setItem("director.stickers." + cuber.preferance.order, JSON.stringify(this.stickers));
  }

  clear() {
    this.colord = false;
    this.stickers = {};
    window.localStorage.setItem("director.stickers." + cuber.preferance.order, JSON.stringify(this.stickers));
    cuber.world.cube.strip({});
  }

  film() {
    if (this.recording) {
      this.recording = false;
      cuber.controller.disable = false;
      return;
    }
    this.player.init();
    this.recording = true;
    cuber.controller.disable = true;
    let size = this.pixel;
    this.gif = new GIF(size, size, this.delay);
    this.filmer.setSize(size, size, true);
    if (this.output == "gif") {
      this.gif.start();
    } else if (this.output == "apng") {
      this.apng.start();
    } else if (this.output == "pngs") {
      this.zip.init();
    }
    this.record();
    this.player.callback();
  }

  snap() {
    let size = this.pixel;
    let width = cuber.world.width;
    let height = cuber.world.height;
    cuber.world.width = size;
    cuber.world.height = size;
    cuber.world.resize();
    this.filmer.setSize(size, size, true);
    this.filmer.clear();
    this.filmer.render(cuber.world.scene, cuber.world.camera);
    cuber.world.width = width;
    cuber.world.height = height;
    cuber.world.resize();
    let content = this.filmer.domElement.toDataURL("image/png");
    let parts = content.split(";base64,");
    let type = parts[0].split(":")[1];
    let raw = window.atob(parts[1]);
    let length = raw.length;
    let data = new Uint8Array(length);
    for (let i = 0; i < length; ++i) {
      data[i] = raw.charCodeAt(i);
    }
    let blob = new Blob([data], { type: type });
    let url = URL.createObjectURL(blob);
    Util.DOWNLOAD("cuber.png", url);
  }

  record() {
    let size = this.pixel;
    let width = cuber.world.width;
    let height = cuber.world.height;
    cuber.world.width = size;
    cuber.world.height = size;
    cuber.world.resize();
    this.filmer.clear();
    this.filmer.render(cuber.world.scene, cuber.world.camera);
    if (this.output == "gif") {
      let content = this.filmer.getContext();
      let pixels = new Uint8Array(size * size * 4);
      content.readPixels(0, 0, size, size, content.RGBA, content.UNSIGNED_BYTE, pixels);
      this.gif.add(pixels);
    } else if (this.output == "apng") {
      this.apng.addFrame();
    } else if (this.output == "pngs") {
      let content = this.filmer.domElement.toDataURL("image/png");
      let parts = content.split(";base64,");
      let raw = window.atob(parts[1]);
      let length = raw.length;
      let data = new Uint8Array(length);
      for (let i = 0; i < length; ++i) {
        data[i] = raw.charCodeAt(i);
      }
      this.zip.add("cuber" + this.zip.num + ".png", data);
    }
    cuber.world.width = width;
    cuber.world.height = height;
    cuber.world.resize();
  }
}
