!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=11)}([function(t,e,i){t.exports=i(3)(14)},function(t,e,i){t.exports=i(3)(27)},function(t,e,i){t.exports=i(3)(2)},function(t,e){t.exports=dll_library},function(t,e,i){t.exports=i(3)(28)},function(t,e){t.exports='<v-container fluid grid-list-md text-xs-center :style="{width:width + \'px\', height:height + \'px\'}" style="padding:0%;touch-action: none;">\n  <v-layout row wrap style="margin: 0%; padding:0%; min-width: 0%; min-height: 0%;">\n    <v-flex xs2 d-flex style="padding:0%; min-width: 0%; min-height: 0%;">\n      <v-btn @click.native.stop.prevent="layers=(layers+1)%3" @touchstart.native.stop.prevent="layers=(layers+1)%3" depressed :style="style">\n        <v-icon :size="height/5">{{[\'filter_1\', \'filter_2\', \'filter_3\'][layers]}}</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        @click.native.stop.prevent="option.mirror=!option.mirror"\n        @touchstart.native.stop.prevent="option.mirror=!option.mirror"\n        :color="option.mirror?\'primary\':\'\'"\n        depressed\n        :style="style"\n      >\n        <v-icon :size="height/5">flip</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        @click.native.stop.prevent="cuber.controller.lock=!cuber.controller.lock"\n        @touchstart.native.stop.prevent="cuber.controller.lock=!cuber.controller.lock"\n        :color="cuber.controller.lock?\'primary\':\'\'"\n        depressed\n        :style="style"\n      >\n        <v-icon :size="height/5">{{cuber.controller.lock?\'lock\':\'lock_open\'}}</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn @click.native.stop.prevent="check()" @touchstart.native.stop.prevent="check()" :color="assistant?\'primary\':\'\'" depressed :style="style">\n        <v-icon :size="height/5">assistant</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        @click.native.stop.prevent="cuber.left=!cuber.left"\n        @touchstart.native.stop.prevent="cuber.left=!cuber.left"\n        :color="cuber.left?\'primary\':\'\'"\n        depressed\n        :style="style"\n      >\n        <v-icon :size="height/5">switch_camera</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        depressed\n        :disabled="cuber.history.length == 0 || cuber.controller.lock"\n        @click.native.stop.prevent="reverse()"\n        @touchstart.native.stop.prevent="reverse()"\n        :style="style"\n      >\n        <v-icon :size="height/5">backspace</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex v-for="exp in exps" d-flex xs2 style="padding:0%">\n      <v-btn depressed @click.native.stop.prevent="twist(exp)" @touchstart.native.stop.prevent="twist(exp)" :disabled="cuber.controller.lock" :style="style"\n        ><div :style="{\'font-size\':(height/8)+\'px\'}">{{exp}}</div>\n      </v-btn>\n    </v-flex>\n  </v-layout>\n</v-container>\n'},function(t,e){t.exports='<v-bottom-sheet v-model="value">\n  <v-card flat style="margin: auto;touch-action: none;user-select: none;">\n    <v-container fluid grid-list-md text-xs-center>\n      <v-layout row wrap justify-center align-center>\n        <v-slider v-model="option.scale" always-dirty thumb-label="always" max="100" min="0" label="缩放"></v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center>\n        <v-slider v-model="option.perspective" always-dirty thumb-label="always" max="100" min="0" label="透视"></v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center>\n        <v-slider v-model="option.angle" always-dirty thumb-label="always" max="100" min="0" label="角度"></v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center>\n        <v-slider v-model="option.gradient" always-dirty thumb-label="always" max="100" min="0" label="梯度"></v-slider>\n      </v-layout>\n      <v-layout row wrap justify-center align-center>\n        <v-btn @click.native.stop.prevent="option.reset" @touchstart.native.stop.prevent="option.reset" outlined color="red">重置</v-btn>\n      </v-layout>\n    </v-container>\n  </v-card>\n</v-bottom-sheet>\n'},function(t,e){t.exports='<v-app>\n  <v-speed-dial v-model="menu" fixed top right direction="bottom" style="user-select: none;">\n    <template v-slot:activator>\n      <v-btn\n        @click.native.stop.prevent="menu=!menu"\n        @touchstart.native.stop.prevent="menu=!menu"\n        fab\n        depressed\n        color="primary"\n        :style="{width:size+\'px\', height:size+\'px\'}"\n      >\n        <v-icon v-if="menu" :size="size * 0.6">close</v-icon>\n        <v-icon v-else :size="size * 0.6">menu</v-icon>\n      </v-btn>\n    </template>\n    <v-btn\n      fab\n      depressed\n      color="white"\n      :style="{width:size*0.9+\'px\', height:size*0.9+\'px\'}"\n      @click.native.stop.prevent="cuber.twister.twist(\'*\');menu=false;"\n      @touchstart.native.stop.prevent="cuber.twister.twist(\'*\');menu=false;"\n    >\n      <v-icon :size="size * 0.55" color="red">casino</v-icon>\n    </v-btn>\n    <v-btn\n      fab\n      depressed\n      color="white"\n      :style="{width:size*0.9+\'px\', height:size*0.9+\'px\'}"\n      @click.native.stop.prevent="tune=true;menu=false;"\n      @touchstart.native.stop.prevent="tune=true;menu=false;"\n    >\n      <v-icon :size="size * 0.55" color="indigo">tune</v-icon>\n    </v-btn>\n  </v-speed-dial>\n  <div v-resize="resize" style="background-color: #CCC;user-select: none;">\n    <div ref="cuber"></div>\n    <div style="margin:0%;padding:0%;"><keyboard ref="keyboard"></keyboard></div>\n  </div>\n  <tune ref="tune" v-model="tune"></tune>\n</v-app>\n'},function(t,e,i){t.exports=i(3)(57)},function(t,e,i){t.exports=i(3)(29)},function(t,e,i){t.exports=i(3)(31)},function(t,e,i){"use strict";i.r(e);var s=i(2),r=i(1),n=i(0);class o{constructor(t){this.cuber=t,this.queue=[]}static shuffle(){let t="",e=[],i=-1,s=["U","D","R","L","F","B"],r=-1;for(let t=0;t<24;t++){let t=[];for(;r==i;)r=Math.floor(3*Math.random());let n=Math.floor(2*Math.random());t.push(s[2*r+n]);let o=Math.random();o<.2?t.push("2"):o<.6&&t.push("'"),e.push(t.join("")),i=r}return t=e.join(" "),t}get length(){return this.queue.length}finish(){for(const t of this.queue)t.fast=!0;this.cuber.tweener.finish()}twist(t,e=!1,i=1,s=!1){this.queue.length>0&&(this.cuber.tweener.finish(),this.update()),this.cuber.tweener.speedup();let r=new a(t,e,i).parse();for(let t of r)t.fast=s,this.queue.push(t);this.update()}update(){if(0===this.queue.length||this.cuber.lock)return!1;let t=this.queue.shift();if(null==t)return!1;this.start(t)}start(t){if("-"==t.exp)return t.fast?void this.update():void this.cuber.tweener.tween(0,1,this.cuber.duration*t.times,t=>{1!==t&&0!==t||this.update()});if("#"==t.exp)return this.cuber.history.clear(),this.cuber.cube.reset(),this.cuber.dirty=!0,void this.update();if("*"==t.exp){let t=o.shuffle();return this.twist(t,!1,1,!0),void this.cuber.history.clear()}let e=-Math.PI/2;t.reverse&&(e=-e),t.times&&(e*=t.times);let i=this.cuber.cube.groups[t.exp];void 0!==i?(i.angle=0,i.hold(),t.fast&&(i.angle=e),i.twist(e,this.update.bind(this))):this.update()}}class h{constructor(t,e=!1,i=1,s=!1){this.exp=t,this.reverse=e,this.times=i,this.fast=s}get value(){return 0==this.times?"":(this.exp.length>1?"(":"")+this.exp+(this.exp.length>1?")":"")+(this.reverse?"'":"")+(1==this.times?"":String(this.times))}}class a{constructor(t,e=!1,i=1){if(this.children=[],t=t.replace(/[^\*#\-xyzbsfdeulmr\(\)'0123456789]/gi,""),this.twist=new h(t,e,i),1==t.length)return/[XYZ]/.test(this.twist.exp)&&(this.twist.exp=this.twist.exp.toLowerCase()),void(/[mes]/.test(this.twist.exp)&&(this.twist.exp=this.twist.exp.toUpperCase()));let s=[],r="",n=0;for(let e=0;e<t.length;e++){let i=t.charAt(e);if(0==r.length){if(a._ACTIONS.indexOf(i)>=0){r=r.concat(i);continue}if("("===i){r=r.concat(i),n++;continue}return}0==n?a._SUFFIX.indexOf(i)>=0?r=r.concat(i):(s.push(r),r="",e--):("("===i?n++:")"===i&&n--,r=r.concat(i))}if(r.length>0&&s.push(r),0!=s.length)for(let t of s){var o=t.match(/^\((\S+)\)('?)(\d*)('?)$/i);if(null===o&&(o=t.match(/([\*#\-xyzbsfdeulmr])('?)(\d*)('?)/i)),null===o)return;let e=1==(o[2]+o[4]).length,i=0==o[3].length?1:parseInt(o[3]);this.children.push(new a(o[1],e,i))}}parse(t=!1){t=this.twist.reverse!==t;let e=[];if(0!==this.children.length)for(var i=0;i<this.twist.times;i++)for(var s=0;s<this.children.length;s++){var r=(t?this.children[this.children.length-s-1]:this.children[s]).parse(t);for(let t of r)e.push(t)}else if(""!=this.twist.exp){let i=new h(this.twist.exp,t,this.twist.times);e.push(i)}return e}get value(){return this.twist.value}}a._ACTIONS="*#-xyzbsfdeulmrXYZBFSDEULMR",a._SUFFIX="'0123456789";class c extends n.Group{constructor(t,e,i,s){super(),this.cuber=t,this._angle=0,this.cubelets=[],this.name=e,this.indices=i,this.axis=s,this.matrixAutoUpdate=!1,this.updateMatrix()}set angle(t){this.setRotationFromAxisAngle(this.axis,t),this._angle=t,this.updateMatrix(),this.cuber.dirty=!0}get angle(){return this._angle}hold(){this.angle=0;for(let t of this.indices){let e=this.cuber.cube.cubelets[t];this.cubelets.push(e),this.cuber.cube.remove(e),this.add(e)}this.cuber.lock=!0}drop(){for(this.angle=Math.round(this.angle/(Math.PI/2))*(Math.PI/2);;){let t=this.cubelets.pop();if(void 0===t)break;this.rotate(t),this.remove(t),this.cuber.cube.add(t),this.cuber.cube.cubelets[t.index]=t}this.cuber.lock=!1,this.angle=0}twist(t=this.angle,e=null){t=Math.round(t/(Math.PI/2))*(Math.PI/2);let i=this.name,s=t>0,r=Math.round(Math.abs(t)/(Math.PI/2));0!=r&&this.cuber.history.record(new h(i,s,r));let n=t-this.angle;if(0===n)this.drop(),e&&e();else{var o=this.cuber.duration*Math.min(1,Math.abs(n)/(Math.PI/2));this.cuber.tweener.tween(this.angle,t,o,i=>{this.angle=i,this.angle!==t&&0!==this.angle||(this.drop(),e&&e())})}}rotate(t){t.rotateOnWorldAxis(this.axis,this.angle),t.vector=t.vector.applyAxisAngle(this.axis,this.angle),t.updateMatrix()}}var l,u="#0A0",d="#F60",p="#36F",g="#FC0",v="#EEE",f="#D11",b="#888",m="#222",w="#CCC";!function(t){t[t.L=0]="L",t[t.R=1]="R",t[t.D=2]="D",t[t.U=3]="U",t[t.B=4]="B",t[t.F=5]="F"}(l||(l={}));class x extends n.Geometry{constructor(t,e){super();const i=t/2,s=i-e,r=[[-s,+s,+i],[+s,+s,+i],[+s,-s,+i],[-s,-s,+i],[-s,+i,-s],[+s,+i,-s],[+s,+i,+s],[-s,+i,+s],[-i,-s,-s],[-i,+s,-s],[-i,+s,+s],[-i,-s,+s],[+s,+s,-i],[-s,+s,-i],[-s,-s,-i],[+s,-s,-i],[-s,-i,+s],[+s,-i,+s],[+s,-i,-s],[-s,-i,-s],[+i,+s,+s],[+i,+s,-s],[+i,-s,-s],[+i,-s,+s]];for(let t=0;t<r.length;t++){let e=r[t];this.vertices.push(new n.Vector3(e[0],e[1],e[2]))}for(let t=0;t<x._INDICES.length;t++){let e=x._INDICES[t],i=new n.Face3(e[0],e[1],e[2]);this.faces.push(i)}this.computeFaceNormals()}}x._INDICES=[[1,6,7],[0,1,7],[3,0,10],[11,3,10],[17,2,3],[16,17,3],[23,20,1],[2,23,1],[5,12,13],[4,5,13],[9,13,14],[8,9,14],[22,15,12],[21,22,12],[19,14,15],[18,19,15],[7,4,9],[10,7,9],[11,8,19],[16,11,19],[23,17,18],[22,23,18],[20,21,5],[6,20,5],[20,6,1],[10,0,7],[21,12,5],[13,9,4],[23,2,17],[11,16,3],[22,18,15],[8,14,19]];class y extends n.ShapeGeometry{constructor(t,e){t/=2;let i=-(t-=e),s=t,r=-t,o=t,h=t/4,a=new n.Shape;a.moveTo(i,r+h),a.lineTo(i,s-h),a.quadraticCurveTo(i,s,i+h,s),a.lineTo(o-h,s),a.quadraticCurveTo(o,s,o,s-h),a.lineTo(o,r+h),a.quadraticCurveTo(o,r,o-h,r),a.lineTo(i+h,r),a.quadraticCurveTo(i,r,i,r+h),a.closePath(),super(a)}}class M extends n.ShapeGeometry{constructor(t,e){let i=new n.Shape;t/=2,i.moveTo(-t,-t),i.lineTo(-t,t),i.lineTo(t,t),i.lineTo(t,-t),i.closePath();let s=-(t-=e),r=t,o=-t,h=t,a=t/4,c=new n.Shape;c.moveTo(s,o+a),c.quadraticCurveTo(s,o,s+a,o),c.lineTo(h-a,o),c.quadraticCurveTo(h,o,h,o+a),c.lineTo(h,r-a),c.quadraticCurveTo(h,r,h-a,r),c.lineTo(s+a,r),c.quadraticCurveTo(s,r,s,r-a),c.lineTo(s,o+a),c.closePath(),i.holes.push(c),super(i)}}class _ extends n.Group{constructor(t){super(),this.initial=t,this._vector=new n.Vector3,this.stickers=[],this.edges=[],this._quaternion=new n.Quaternion,this.mirrors=[];let e=t%3-1,i=Math.floor(t%9/3)-1,s=Math.floor(t/9)-1;this.vector=new n.Vector3(e,i,s),this.materials=[this.vector.x<0?_._MATERIALS.orange:_._MATERIALS.gray,this.vector.x>0?_._MATERIALS.red:_._MATERIALS.gray,this.vector.y<0?_._MATERIALS.white:_._MATERIALS.gray,this.vector.y>0?_._MATERIALS.yellow:_._MATERIALS.gray,this.vector.z<0?_._MATERIALS.green:_._MATERIALS.gray,this.vector.z>0?_._MATERIALS.blue:_._MATERIALS.gray],this.frame=new n.Mesh(_._FRAME,_._MATERIALS.black),this.add(this.frame);for(let t=0;t<6;t++){let e=new n.Mesh(_._EDGE,_._MATERIALS.black),i=new n.Mesh(_._STICKER,this.materials[t]);switch(t){case l.L:e.rotation.y=-Math.PI/2,e.position.x=-_.SIZE/2,i.rotation.y=-Math.PI/2,i.position.x=-_.SIZE/2,i.name="L";break;case l.R:e.rotation.y=Math.PI/2,e.position.x=_.SIZE/2,i.rotation.y=Math.PI/2,i.position.x=_.SIZE/2,i.name="R";break;case l.D:e.rotation.x=Math.PI/2,e.position.y=-_.SIZE/2,i.rotation.x=Math.PI/2,i.position.y=-_.SIZE/2,i.name="D";break;case l.U:e.rotation.x=-Math.PI/2,e.position.y=_.SIZE/2,i.rotation.x=-Math.PI/2,i.position.y=_.SIZE/2,i.name="U";break;case l.B:e.rotation.x=Math.PI,e.position.z=-_.SIZE/2,i.rotation.x=Math.PI,i.position.z=-_.SIZE/2,i.name="B";break;case l.F:e.rotation.z=0,e.position.z=_.SIZE/2,i.rotation.x=2*Math.PI,i.position.z=_.SIZE/2,i.name="F"}if(this.add(e),this.edges.push(e),this.add(i),this.stickers.push(i),this.materials[t]!=_._MATERIALS.gray){let e=new n.Mesh(_._STICKER,this.materials[t]);e.rotation.x=0==i.rotation.x?0:i.rotation.x+Math.PI,e.rotation.y=0==i.rotation.y?0:i.rotation.y+Math.PI,e.rotation.z=0==i.rotation.z?0:i.rotation.z+Math.PI,e.rotation.x+e.rotation.y+e.rotation.z==0&&(e.rotation.y=Math.PI),e.position.x=3*i.position.x,e.position.y=3*i.position.y,e.position.z=3*i.position.z,this.add(e),this.mirrors[t]=e}this.matrixAutoUpdate=!1,this.updateMatrix()}}set vector(t){this._vector.set(Math.round(t.x),Math.round(t.y),Math.round(t.z)),this._index=9*(this._vector.z+1)+3*(this._vector.y+1)+(this._vector.x+1),this.position.x=_.SIZE*this._vector.x,this.position.y=_.SIZE*this._vector.y,this.position.z=_.SIZE*this._vector.z}get vector(){return this._vector}set index(t){let e=t%3-1,i=Math.floor(t%9/3)-1,s=Math.floor(t/9)-1;this.vector=new n.Vector3(e,i,s)}get index(){return this._index}set mirror(t){if(t)for(let t=0;t<6;t++)this.mirrors[t]instanceof n.Mesh&&this.children.indexOf(this.mirrors[t])<0&&this.add(this.mirrors[t]);else for(let t=0;t<6;t++)this.mirrors[t]instanceof n.Mesh&&this.children.indexOf(this.mirrors[t])>=0&&this.remove(this.mirrors[t])}getColor(t){let e=new n.Vector3(0,0,0);switch(t){case l.L:e.x=-1;break;case l.R:e.x=1;break;case l.D:e.y=-1;break;case l.U:e.y=1;break;case l.B:e.z=-1;break;case l.F:e.z=1}this._quaternion.copy(this.quaternion),e.applyQuaternion(this._quaternion.inverse());let i=Math.round(e.x),s=Math.round(e.y),r=Math.round(e.z),o=0;return i<0?o=l.L:i>0?o=l.R:s<0?o=l.D:s>0?o=l.U:r<0?o=l.B:r>0&&(o=l.F),o}stick(t,e){let i;i=e.length>0?new n.MeshBasicMaterial({color:e}):this.materials[t],this.stickers[t].material=i,this.mirrors[t]instanceof n.Mesh&&(this.mirrors[t].material=i)}}_.SIZE=64,_._BORDER_WIDTH=3,_._EDGE_WIDTH=2,_._FRAME=new x(_.SIZE,_._BORDER_WIDTH),_._EDGE=new M(_.SIZE-2*_._BORDER_WIDTH,_._EDGE_WIDTH),_._STICKER=new y(_.SIZE-2*_._BORDER_WIDTH,_._EDGE_WIDTH),_._MATERIALS={green:new n.MeshBasicMaterial({color:u}),orange:new n.MeshBasicMaterial({color:d}),blue:new n.MeshBasicMaterial({color:p}),yellow:new n.MeshBasicMaterial({color:g}),white:new n.MeshBasicMaterial({color:v}),red:new n.MeshBasicMaterial({color:f}),gray:new n.MeshBasicMaterial({color:b}),black:new n.MeshBasicMaterial({color:m})};class I extends n.Group{constructor(t){super(),this.cubelets=[],this.initials=[];for(var e=0;e<27;e++){let t=new _(e);this.cubelets.push(t),this.initials.push(t),this.add(t)}this.groups={L:new c(t,"L",[6,15,24,3,12,21,0,9,18],new n.Vector3(-1,0,0)),D:new c(t,"D",[18,19,20,9,10,11,0,1,2],new n.Vector3(0,-1,0)),B:new c(t,"B",[8,7,6,5,4,3,2,1,0],new n.Vector3(0,0,-1)),R:new c(t,"R",[26,17,8,23,14,5,20,11,2],new n.Vector3(1,0,0)),U:new c(t,"U",[6,7,8,15,16,17,24,25,26],new n.Vector3(0,1,0)),F:new c(t,"F",[24,25,26,21,22,23,18,19,20],new n.Vector3(0,0,1)),l:new c(t,"l",[0,3,6,9,12,15,18,21,24,1,4,7,10,13,16,19,22,25],new n.Vector3(-1,0,0)),d:new c(t,"d",[0,1,2,9,10,11,18,19,20,3,4,5,12,13,14,21,22,23],new n.Vector3(0,-1,0)),b:new c(t,"b",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],new n.Vector3(0,0,-1)),r:new c(t,"r",[2,5,8,11,14,17,20,23,26,1,4,7,10,13,16,19,22,25],new n.Vector3(1,0,0)),u:new c(t,"u",[6,7,8,15,16,17,24,25,26,3,4,5,12,13,14,21,22,23],new n.Vector3(0,1,0)),f:new c(t,"f",[18,19,20,21,22,23,24,25,26,9,10,11,12,13,14,15,16,17],new n.Vector3(0,0,1)),M:new c(t,"M",[1,4,7,10,13,16,19,22,25],new n.Vector3(-1,0,0)),E:new c(t,"E",[3,4,5,12,13,14,21,22,23],new n.Vector3(0,-1,0)),S:new c(t,"S",[9,10,11,12,13,14,15,16,17],new n.Vector3(0,0,1)),x:new c(t,"x",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],new n.Vector3(1,0,0)),y:new c(t,"y",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],new n.Vector3(0,1,0)),z:new c(t,"z",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],new n.Vector3(0,0,1))};for(let t in this.groups)this.add(this.groups[t]);this.matrixAutoUpdate=!1,this.updateMatrix()}index(t){return this.initials[t].index}reset(){for(let t of this.cubelets)t.setRotationFromEuler(new n.Euler(0,0,0)),t.index=t.initial,t.updateMatrix();this.cubelets.sort((t,e)=>t.index-e.index)}stick(t,e,i){this.initials[t].stick(e,i)}get state(){let t=[];for(let e of this.groups.U.indices)t.push(this.cubelets[e].getColor(l.U));for(let e of this.groups.R.indices)t.push(this.cubelets[e].getColor(l.R));for(let e of this.groups.F.indices)t.push(this.cubelets[e].getColor(l.F));for(let e of this.groups.D.indices)t.push(this.cubelets[e].getColor(l.D));for(let e of this.groups.L.indices)t.push(this.cubelets[e].getColor(l.L));for(let e of this.groups.B.indices)t.push(this.cubelets[e].getColor(l.B));return t.join("")}}class E{constructor(){this.vector=new n.Vector3}}class S{constructor(t){this.dragging=!1,this.rotating=!1,this.angle=0,this.ray=new n.Ray,this.down=new n.Vector2(0,0),this.move=new n.Vector2(0,0),this.matrix=new n.Matrix4,this.holder=new E,this.vector=new n.Vector3,this.planes=[new n.Plane(new n.Vector3(1,0,0),3*-_.SIZE/2),new n.Plane(new n.Vector3(0,1,0),3*-_.SIZE/2),new n.Plane(new n.Vector3(0,0,1),3*-_.SIZE/2)],this._lock=!1,this._onMouseDown=t=>(this.down.x=t.offsetX,this.down.y=t.offsetY,this.handleDown(),t.returnValue=!1,!1),this._onMouseMove=t=>(this.move.x=t.offsetX,this.move.y=t.offsetY,this.handleMove(),t.returnValue=!1,!1),this._onMouseUp=t=>(this.handleUp(),t.returnValue=!1,!1),this._onMouseOut=t=>(this.handleUp(),t.returnValue=!1,!1),this._onTouch=t=>{let e=t.changedTouches[0];switch(t.type){case"touchstart":this.down.x=e.clientX,this.down.y=e.clientY,this.handleDown();break;case"touchmove":this.move.x=e.clientX,this.move.y=e.clientY,this.handleMove();break;case"touchend":this.handleUp();break;default:return}return t.returnValue=!1,!1},this.cuber=t,this.taps=[],this.cuber.canvas.addEventListener("mousedown",this._onMouseDown),this.cuber.canvas.addEventListener("mousemove",this._onMouseMove),this.cuber.canvas.addEventListener("mouseup",this._onMouseUp),this.cuber.canvas.addEventListener("mouseout",this._onMouseOut),this.cuber.canvas.addEventListener("touchstart",this._onTouch),this.cuber.canvas.addEventListener("touchmove",this._onTouch),this.cuber.canvas.addEventListener("touchend",this._onTouch),this.loop()}get lock(){return this._lock}set lock(t){this.handleUp(),this._lock=t}loop(){requestAnimationFrame(this.loop.bind(this)),this.update()}update(){if(this.lock&&this.rotating&&this.group.angle!=this.angle){let t=(this.angle-this.group.angle)/2,e=Math.PI/2/this.cuber.duration*4;t>e&&(t=e),t<-e&&(t=-e),this.group.angle+=t,this.cuber.dirty=!0}}match(){let t,e=[];var i=this.holder.index;if(-1===this.holder.index)return t=this.cuber.cube.groups.x,0===t.axis.dot(this.holder.plane.normal)&&e.push(t),t=this.cuber.cube.groups.y,0===t.axis.dot(this.holder.plane.normal)&&e.push(t),t=this.cuber.cube.groups.z,0===t.axis.dot(this.holder.plane.normal)&&e.push(t),e;var s=i%3-1,r=Math.floor(i%9/3)-1,n=Math.floor(i/9)-1;switch(s){case-1:t=this.cuber.cube.groups.L,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 0:t=this.cuber.cube.groups.M,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 1:t=this.cuber.cube.groups.R,0===t.axis.dot(this.holder.plane.normal)&&e.push(t)}switch(r){case-1:t=this.cuber.cube.groups.D,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 0:t=this.cuber.cube.groups.E,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 1:t=this.cuber.cube.groups.U,0===t.axis.dot(this.holder.plane.normal)&&e.push(t)}switch(n){case-1:t=this.cuber.cube.groups.B,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 0:t=this.cuber.cube.groups.S,0===t.axis.dot(this.holder.plane.normal)&&e.push(t);break;case 1:t=this.cuber.cube.groups.F,0===t.axis.dot(this.holder.plane.normal)&&e.push(t)}return e}intersect(t,e){var i=t.x/this.cuber.width*2-1,s=-t.y/this.cuber.height*2+1;this.ray.origin.setFromMatrixPosition(this.cuber.camera.matrixWorld),this.ray.direction.set(i,s,.5).unproject(this.cuber.camera).sub(this.ray.origin).normalize(),this.ray.applyMatrix4(this.matrix.identity().getInverse(this.cuber.scene.matrix));var r=new n.Vector3;return this.ray.intersectPlane(e,r),r}handleDown(){if(this.dragging||this.rotating)return;this.dragging=!0,this.holder.index=-1,this.cuber.tweener.speedup();let t=0;this.planes.forEach(e=>{var i=this.intersect(this.down,e);if(null!==i&&Math.abs(i.x)<=3*_.SIZE/2+.01&&Math.abs(i.y)<=3*_.SIZE/2+.01&&Math.abs(i.z)<=3*_.SIZE/2+.01){let o=Math.pow(i.x-this.ray.origin.x,2)+Math.pow(i.y-this.ray.origin.y,2)+Math.pow(i.z-this.ray.origin.z,2);if(0==t||o<t){this.holder.plane=e;var s=Math.ceil(Math.round(i.x)/_.SIZE-.5),r=Math.ceil(Math.round(i.y)/_.SIZE-.5),n=Math.ceil(Math.round(i.z)/_.SIZE-.5);return s<2&&s>-2&&r<2&&r>-2&&n<2&&n>-2?(this.holder.index=9*(n+1)+3*(r+1)+(s+1),13==this.holder.index&&(this.holder.index=-1)):this.holder.index=-1,void(t=o)}}},this)}handleMove(){if(this.dragging){var t=this.move.x-this.down.x,e=this.move.y-this.down.y,i=Math.sqrt(t*t+e*e);if(Math.min(this.cuber.width,this.cuber.height)/i>32)return!0;if(this.cuber.tweener.finish(),this.cuber.lock)return this.dragging=!1,this.rotating=!1,!0;if(this.dragging=!1,this.rotating=!0,-1===this.holder.index)if(t*t>e*e)this.group=this.cuber.cube.groups.y;else{let t=new n.Vector3(3*_.SIZE/2,0,3*_.SIZE/2);t.applyMatrix4(this.cuber.scene.matrix).project(this.cuber.camera);let e=this.cuber.width/2,i=Math.round(t.x*e+e);this.down.x<i?this.group=this.cuber.cube.groups.x:this.group=this.cuber.cube.groups.z}else{var s=this.intersect(this.down,this.holder.plane),r=this.intersect(this.move,this.holder.plane);this.vector.subVectors(r,s);var o=this.vector.x,h=this.vector.y,a=this.vector.z,c=Math.max(Math.abs(o),Math.abs(h),Math.abs(a));o=Math.abs(o)===c?o:0,h=Math.abs(h)===c?h:0,a=Math.abs(a)===c?a:0,this.vector.set(o,h,a),this.holder.vector.copy(this.vector.multiply(this.vector).normalize()),this.match().some(t=>0===t.axis.dot(this.vector)&&(this.group=t,!0),this),this.vector.crossVectors(this.holder.vector,this.holder.plane.normal),this.holder.vector.multiplyScalar(this.vector.x+this.vector.y+this.vector.z)}this.group.hold()}if(this.rotating){if(-1===this.holder.index){t=this.move.x-this.down.x,e=this.move.y-this.down.y;this.group===this.cuber.cube.groups.y?this.angle=t/_.SIZE*Math.PI/4:this.group===this.cuber.cube.groups.x?this.angle=e/_.SIZE*Math.PI/4:this.angle=-e/_.SIZE*Math.PI/4}else{s=this.intersect(this.down,this.holder.plane),r=this.intersect(this.move,this.holder.plane);this.vector.subVectors(r,s).multiply(this.holder.vector),this.angle=-(this.vector.x+this.vector.y+this.vector.z)*(this.group.axis.x+this.group.axis.y+this.group.axis.z)/_.SIZE*Math.PI/4}if(!this.lock)return this.angle=0==this.angle?0:this.angle/Math.abs(this.angle)*Math.PI/2,void this.handleUp()}}handleUp(){if(this.dragging){let t=null;switch(this.holder.plane){case this.planes[0]:t=l.R;break;case this.planes[1]:t=l.U;break;case this.planes[2]:t=l.F}for(let e of this.taps)e(this.holder.index,t)}this.rotating&&this.group&&null!==this.group&&(this.lock?this.group.twist(0):this.group.twist(this.angle)),this.holder.index=-1,this.dragging=!1,this.rotating=!1,this.cuber.dirty=!0}}class k{constructor(t){this.cuber=t,this.tweens=[],this.loop()}get length(){return this.tweens.length}loop(){requestAnimationFrame(this.loop.bind(this)),this.update()}tween(t,e,i,s){this.tweens.push(new z(t,e,i,s))}update(){if(0===this.tweens.length)return!1;for(var t=0;t<this.tweens.length;)this.tweens[t].update()?t++:this.tweens.splice(t,1);return!0}speedup(){for(const t of this.tweens)t.speedup()}finish(){let t=this.tweens.splice(0,this.tweens.length);for(const e of t)e.finish()}}class z{constructor(t,e,i,s){this.begin=t,this.end=e,this.duration=i,this.callback=s,this.value=0,this.delta=1}speedup(){this.delta=4}finish(){this.callback(this.end)}update(){this.value=this.value+this.delta;let t=this.value/this.duration;t=t>1?1:t,t=t<0?0:t,t-=1;let e=1-t*t;return this.callback(this.begin+(this.end-this.begin)*e),1!=e}}class R{constructor(){this.list=[],this.callbacks=[]}record(t){if(0==this.list.length)this.list.push(t);else{let e=this.list[this.list.length-1];e.exp==t.exp&&e.times==t.times&&e.reverse!=t.reverse?this.list.pop():this.list.push(t)}for(let t of this.callbacks)t()}clear(){this.list=[];for(let t of this.callbacks)t()}get last(){return this.list[this.list.length-1]}get length(){return this.list.length}}class P{constructor(t){this.dirty=!1,this.display=!0,this.lock=!1,this.duration=30,this._scale=1,this._angle=Math.PI/16,this._left=!1,this._gradient=Math.PI/6,this._perspective=1,this.canvas=t,this.controller=new S(this),this.twister=new o(this),this.tweener=new k(this),this.cube=new I(this),this.history=new R,this.renderer=new n.WebGLRenderer({canvas:t,antialias:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(w),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height,!0),this.capture=new n.WebGLRenderer({antialias:!0,preserveDrawingBuffer:!0,alpha:!0}),this.capture.setClearColor(0,0),this.capture.setPixelRatio(1),this.capture.setSize(128,128,!0),this.scene=new n.Scene,this.scene.rotation.x=Math.PI/6,this.scene.rotation.y=-Math.PI/4+Math.PI/16,this.scene.add(this.cube),this.camera=new n.PerspectiveCamera(50,1,1,32*_.SIZE),this.camera.position.x=0,this.camera.position.y=0,this.camera.position.z=0,this.loop()}get mirror(){return this._mirror}set mirror(t){this._mirror=t;for(let e of this.cube.cubelets)e.mirror=t;this.dirty=!0}stick(){for(let t=0;t<27;t++)for(let e=0;e<6;e++)this.cube.stick(t,e,"");this.dirty=!0}strip(t){this.stick();for(let e of t)for(let t of e.indexes)for(let i of e.faces)this.cube.stick(t,i,b);this.dirty=!0}get scale(){return this._scale}set scale(t){this._scale=t,this.resize()}get angle(){return this._angle}set angle(t){this._angle=t,this.scene.rotation.y=(-Math.PI/4+t)*(this.left?-1:1),this.dirty=!0}get left(){return this._left}set left(t){this._left=t;let e=this.scene.rotation.y,i=(-Math.PI/4+this.angle)*(t?-1:1);this.tweener.finish(),this.tweener.tween(e,i,this.duration/2,t=>{this.scene.rotation.y=t,this.dirty=!0})}get gradient(){return this._gradient}set gradient(t){this._gradient=t,this.scene.rotation.x=t,this.dirty=!0}get perspective(){return this._perspective}set perspective(t){this._perspective=t,this.resize()}resize(){let t=this.height/Math.min(this.width,this.height/1.2)/4,e=2*Math.atan(t*this.scale/this.perspective)*180/Math.PI;this.camera.aspect=this.width/this.height,this.camera.fov=e,this.camera.position.z=3*_.SIZE*4*this.perspective,this.camera.lookAt(this.scene.position),this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height,!0),this.dirty=!0}render(){this.dirty&&(this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.dirty=!1)}loop(){requestAnimationFrame(this.loop.bind(this)),this.render()}blob(){this.camera.aspect=1,this.camera.updateProjectionMatrix(),this.capture.render(this.scene,this.camera);let t=this.capture.domElement.toDataURL("image/png").split(";base64,"),e=t[0].split(":")[1],i=window.atob(t[1]),s=i.length,r=new Uint8Array(s);for(let t=0;t<s;++t)r[t]=i.charCodeAt(t);let n=new Blob([r],{type:e});return this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),n}}class T{constructor(t){this._storage=window.localStorage,this.cuber=t,this.load()}load(){this.mirror="true"==this._storage.getItem("setting.mirror"),this.scale=Number(this._storage.getItem("setting.scale")||80),this.perspective=Number(this._storage.getItem("setting.perspective")||50),this.angle=Number(this._storage.getItem("setting.angle")||20),this.gradient=Number(this._storage.getItem("setting.gradient")||50)}reset(){this.mirror=!1,this.scale=80,this.perspective=50,this.angle=20,this.gradient=50}get mirror(){return this._mirror}set mirror(t){this._mirror=t,this._storage.setItem("setting.mirror",String(t)),this.cuber.mirror=t}get scale(){return this._scale}set scale(t){this._scale=t,this._storage.setItem("setting.scale",String(t)),t=.8-t/100,this.cuber.scale=Math.exp(t)}get perspective(){return this._perspective}set perspective(t){this._perspective=t,this._storage.setItem("setting.perspective",String(t)),t=1-Math.sqrt(t/100),this.cuber.perspective=2*t+.4}get angle(){return this._angle}set angle(t){this._angle=t,this._storage.setItem("setting.angle",String(t)),t/=100,this.cuber.angle=t}get gradient(){return this._gradient}set gradient(t){this._gradient=t,this._storage.setItem("setting.gradient",String(t)),t/=100,this.cuber.gradient=1-1.2*t}}var C=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},A=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let D=class extends s.default{constructor(){super(...arguments),this.width=0,this.height=0,this.assistant=!1,this.layers=0,this.operations=[["L","D","B","F","U","R","L'","D'","B'","F'","U'","R'"],["l","d","b","f","u","r","l'","d'","b'","f'","u'","r'"],["M","E","S","z","y","x","M'","E'","S'","z'","y'","x'"]],this.strips=[[{indexes:[0,2,3,5,6,7,8,15,17,18,20,21,23,24,25,26],faces:[0,1,2,3,4,5]}],[{indexes:[6,7,8,15,16,17,24,25,26],faces:[0,1,2,3,4,5]}],[{indexes:[0,1,2,3,4,5,9,10,11,12,14,18,19,20,21,22,23],faces:[0,1,2,3,4,5]},{indexes:[6,7,8,15,16,17,24,25,26],faces:[0,1,2,4,5]}],[{indexes:[0,1,2,3,4,5,9,10,11,12,14,18,19,20,21,22,23],faces:[0,1,2,3,4,5]}]],this.faces={4:l.B,10:l.D,12:l.L,14:l.R,16:l.U,22:l.F}}check(){if(this.assistant=!this.assistant,this.cuber.strip([]),this.assistant){let t,e,i=this.cuber.cube.initials[10],s=this.cuber.cube.initials[14],r=this.cuber.cube.initials[4],o=this.cuber.cube.initials[12],h=this.cuber.cube.initials[22],a=this.cuber.cube.initials[16],c=new n.Vector3;if(e=[s,r,o,h].every(e=>{c.copy(i.vector).add(e.vector),t=9*(c.z+1)+3*(c.y+1)+(c.x+1);let s=this.cuber.cube.cubelets[t];if(s.getColor(this.faces[i.index])==l.D&&s.getColor(this.faces[e.index])==this.faces[e.initial])return!0}),!e)return void this.cuber.strip(this.strips[0]);if(e=[[s,r],[r,o],[o,h],[h,s]].every(e=>{c.copy(e[0].vector).add(e[1].vector),t=9*(c.z+1)+3*(c.y+1)+(c.x+1);let s=this.cuber.cube.cubelets[t];if(s.getColor(this.faces[e[0].index])==this.faces[e[0].initial]&&s.getColor(this.faces[e[1].index])==this.faces[e[1].initial]){c.add(i.vector),t=9*(c.z+1)+3*(c.y+1)+(c.x+1);let s=this.cuber.cube.cubelets[t];if(s.getColor(this.faces[i.index])==l.D&&s.getColor(this.faces[e[0].index])==this.faces[e[0].initial]&&s.getColor(this.faces[e[1].index])==this.faces[e[1].initial])return!0}}),!e)return void this.cuber.strip(this.strips[1]);if(e=this.cuber.cube.groups[l[this.faces[a.index]]].indices.every(t=>{if(this.cuber.cube.cubelets[t].getColor(this.faces[a.index])==l.U)return!0}),!e)return void this.cuber.strip(this.strips[2]);if(e=[[s,r],[r,o],[o,h],[h,s]].every(e=>{if(c.copy(a.vector).add(e[0].vector),t=9*(c.z+1)+3*(c.y+1)+(c.x+1),this.cuber.cube.cubelets[t].getColor(this.faces[e[0].index])==this.faces[e[0].initial]){c.add(e[1].vector),t=9*(c.z+1)+3*(c.y+1)+(c.x+1);let i=this.cuber.cube.cubelets[t];if(i.getColor(this.faces[e[0].index])==this.faces[e[0].initial]&&i.getColor(this.faces[e[1].index])==this.faces[e[1].initial])return!0}}),!e)return void this.cuber.strip(this.strips[3])}}get style(){return{margin:this.height/48+"px",width:this.height/32*9+"px",height:this.height/32*9+"px","min-width":"0%","min-height":"0%","text-transform":"none"}}get exps(){return this.operations[this.layers]}twist(t){this.cuber.twister.twist(t)}reverse(){null!=this.cuber.history.last&&this.cuber.twister.twist(this.cuber.history.last.value,!0,1,!1)}};C([Object(r.Inject)("cuber"),A("design:type",P)],D.prototype,"cuber",void 0),C([Object(r.Inject)("option"),A("design:type",T)],D.prototype,"option",void 0),D=C([Object(r.Component)({template:i(5)})],D);var j=D,L=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},V=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let O=class extends s.default{onValueChange(t){this.$emit("input",t)}};L([Object(r.Inject)("option"),V("design:type",T)],O.prototype,"option",void 0),L([Object(r.Prop)({required:!0}),V("design:type",Boolean)],O.prototype,"value",void 0),L([Object(r.Watch)("value"),V("design:type",Function),V("design:paramtypes",[Boolean]),V("design:returntype",void 0)],O.prototype,"onValueChange",null),O=L([Object(r.Component)({template:i(6)})],O);var Z=O,F=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},U=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let B=class extends s.default{constructor(){super(),this.keyboard=new j,this.menu=!1,this.tune=!1,this.width=0,this.height=0,this.size=0;let t=document.createElement("canvas");this.cuber=new P(t),this.option=new T(this.cuber)}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.size=Math.min(this.width/8,this.height/14),this.cuber.width=this.width,this.cuber.height=this.height-4*this.size,this.cuber.resize();let t=this.$refs.cuber;t instanceof HTMLElement&&(t.style.width=this.width+"px",t.style.height=this.height-4*this.size+"px");let e=this.$refs.keyboard;e instanceof j&&(e.width=8*this.size-this.size/8,e.height=4*this.size)}mounted(){if(this.$refs.cuber instanceof Element){this.cuber.twister.twist("*"),this.$refs.cuber.appendChild(this.cuber.canvas),this.$nextTick(this.resize)}}};F([Object(r.Provide)("cuber"),U("design:type",P)],B.prototype,"cuber",void 0),F([Object(r.Provide)("option"),U("design:type",T)],B.prototype,"option",void 0),B=F([Object(r.Component)({template:i(7),components:{keyboard:j,tune:Z}}),U("design:paramtypes",[])],B);var q=B,G=(i(8),i(9),i(10),i(4)),W=i.n(G);s.default.use(W.a);const N=new W.a({});new s.default({vuetify:N,el:"#app",render:t=>t(q)})}]);