!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=10)}([function(t,e,i){t.exports=i(2)(14)},function(t,e,i){t.exports=i(2)(27)},function(t,e){t.exports=dll_library},function(t,e,i){t.exports=i(2)(2)},function(t,e,i){t.exports=i(2)(28)},function(t,e){t.exports='<v-container fluid grid-list-md text-xs-center :style="{width:width + \'px\', height:height + \'px\'}" style="padding:0%;">\n  <v-layout row wrap style="margin: 0%; padding:0%">\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        @click.native.stop.prevent="layers=(layers+1)%3"\n        @touchend.native.stop.prevent="layers=(layers+1)%3"\n        @touchstart.native.stop.prevent\n        :color="\'primary\'"\n        block\n        flat\n        outline\n        class="headline"\n        :style="{margin:(height/48)+\'px\', height:(height / 32 * 9)+\'px\'}"\n        style="min-width: 0%; min-height: 0%;"\n      >\n        <v-icon large>{{layers==0?\'looks_one\':(layers==1?\'looks_two\':\'looks_3\')}}</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        @click.native.stop.prevent="option.mirror=!option.mirror"\n        @touchend.native.stop.prevent="option.mirror=!option.mirror"\n        @touchstart.native.stop.prevent\n        :color="option.mirror?\'primary\':\'\'"\n        block\n        flat\n        outline\n        class="headline"\n        :style="{margin:(height/48)+\'px\', height:(height / 32 * 9)+\'px\'}"\n        style="min-width: 0%; min-height: 0%;"\n      >\n        <v-icon large>flip</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        @click.native.stop.prevent="cuber.twistable=!cuber.twistable"\n        @touchend.native.stop.prevent="cuber.twistable=!cuber.twistable"\n        @touchstart.native.stop.prevent\n        :color="!cuber.twistable?\'primary\':\'\'"\n        block\n        flat\n        outline\n        class="headline"\n        :style="{margin:(height/48)+\'px\', height:(height / 32 * 9)+\'px\'}"\n        style="min-width: 0%; min-height: 0%;"\n      >\n        <v-icon large>lock</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn block flat outline class="headline" :style="{margin:(height/48)+\'px\', height:(height / 32 * 9)+\'px\'}" style="min-width: 0%; min-height: 0%;">\n        <v-icon large>school</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn block flat outline class="headline" :style="{margin:(height/48)+\'px\', height:(height / 32 * 9)+\'px\'}" style="min-width: 0%; min-height: 0%;">\n        <v-icon large>layers</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex xs2 d-flex style="padding:0%">\n      <v-btn\n        block\n        flat\n        outline\n        :disabled="cuber.history.length == 0"\n        @click.native.stop.prevent="reverse()"\n        @touchend.native.stop.prevent="reverse()"\n        @touchstart.native.stop.prevent\n        class="headline"\n        :style="{margin:(height/48)+\'px\', height:(height / 32 * 9)+\'px\'}"\n        style="min-width: 0%; min-height: 0%;"\n      >\n        <v-icon large>replay</v-icon>\n      </v-btn>\n    </v-flex>\n    <v-flex v-for="exp in exps" d-flex xs2 style="padding:0%">\n      <v-btn\n        block\n        flat\n        outline\n        @click.native.stop.prevent="twist(exp)"\n        @touchend.native.stop.prevent="twist(exp)"\n        @touchstart.native.stop.prevent\n        class="headline"\n        :style="{margin:(height/48)+\'px\', height:(height / 32 * 9)+\'px\'}"\n        style="min-width: 0%; min-height: 0%; text-transform:none"\n        >{{exp}}\n      </v-btn>\n    </v-flex>\n  </v-layout>\n</v-container>\n'},function(t,e){t.exports='<v-app>\n  <div v-resize="resize" style="background-color: #E8E8E8;">\n    <div ref="cuber"></div>\n    <div style="margin:0%;padding:0%"><keyboard ref="keyboard"></keyboard></div>\n    <v-btn\n      ref="tune"\n      icon\n      large\n      top\n      right\n      fixed\n      @click.native.stop.prevent="menu = !menu"\n      @touchend.native.stop.prevent="menu = !menu"\n      @touchstart.native.stop.prevent\n    >\n      <v-icon large>tune</v-icon>\n    </v-btn>\n  </div>\n</v-app>\n'},function(t,e,i){t.exports=i(2)(58)},function(t,e,i){t.exports=i(2)(29)},function(t,e,i){t.exports=i(2)(32)},function(t,e,i){"use strict";i.r(e);var s=i(3),r=i(1),n=i(0);class h{constructor(t){this.cuber=t,this.queue=[]}static shuffle(){let t="",e=[],i=-1,s=["U","D","R","L","F","B"],r=-1;for(let t=0;t<24;t++){let t=[];for(;r==i;)r=Math.floor(3*Math.random());let n=Math.floor(2*Math.random());t.push(s[2*r+n]);let h=Math.random();h<.2?t.push("2"):h<.6&&t.push("'"),e.push(t.join("")),i=r}return t=e.join(" ")}get length(){return this.queue.length}finish(){for(const t of this.queue)t.fast=!0;this.cuber.tweener.finish()}twist(t,e=!1,i=1,s=!1){this.queue.length>0&&(this.cuber.tweener.finish(),this.update()),this.cuber.tweener.speedup();let r=new a(t,e,i).parse();for(let t of r)t.fast=s,this.queue.push(t);this.update()}update(){if(0===this.queue.length||this.cuber.lock)return!1;let t=this.queue.shift();if(void 0==t)return!1;this.start(t)}start(t){if("-"==t.exp)return t.fast?void this.update():void this.cuber.tweener.tween(0,1,this.cuber.duration*t.times,t=>{1!==t&&0!==t||this.update()});if("#"==t.exp)return this.cuber.history.clear(),this.cuber.cube.reset(),this.cuber.dirty=!0,void this.update();if("*"==t.exp){let t=h.shuffle();return this.twist(t,!1,1,!0),void this.cuber.history.clear()}let e=-Math.PI/2;t.reverse&&(e=-e),t.times&&(e*=t.times);let i=this.cuber.cube.groups[t.exp];void 0!==i?(i.angle=0,i.hold(),t.fast&&(i.angle=e),i.twist(e,this.update.bind(this))):this.update()}}class o{constructor(t,e=!1,i=1,s=!1){this.exp=t,this.reverse=e,this.times=i,this.fast=s}get value(){return 0==this.times?"":(this.exp.length>1?"(":"")+this.exp+(this.exp.length>1?")":"")+(this.reverse?"'":"")+(1==this.times?"":String(this.times))}}class a{constructor(t,e=!1,i=1){if(this.children=[],t=t.replace(/[^\*#\-xyzbsfdeulmr\(\)'0123456789]/gi,""),this.twist=new o(t,e,i),1==t.length)return/[XYZ]/.test(this.twist.exp)&&(this.twist.exp=this.twist.exp.toLowerCase()),void(/[mes]/.test(this.twist.exp)&&(this.twist.exp=this.twist.exp.toUpperCase()));let s=[],r="",n=0;for(let e=0;e<t.length;e++){let i=t.charAt(e);if(0==r.length){if(a._ACTIONS.indexOf(i)>=0){r=r.concat(i);continue}if("("===i){r=r.concat(i),n++;continue}return}0==n?a._SUFFIX.indexOf(i)>=0?r=r.concat(i):(s.push(r),r="",e--):("("===i?n++:")"===i&&n--,r=r.concat(i))}if(r.length>0&&s.push(r),0!=s.length)for(let t of s){var h=t.match(/^\((\S+)\)('?)(\d*)('?)$/i);if(null===h&&(h=t.match(/([\*#\-xyzbsfdeulmr])('?)(\d*)('?)/i)),null===h)return;let e=1==(h[2]+h[4]).length,i=0==h[3].length?1:parseInt(h[3]);this.children.push(new a(h[1],e,i))}}parse(t=!1){t=this.twist.reverse!==t;let e=[];if(0!==this.children.length)for(var i=0;i<this.twist.times;i++)for(var s=0;s<this.children.length;s++){var r=(t?this.children[this.children.length-s-1]:this.children[s]).parse(t);for(let t of r)e.push(t)}else if(""!=this.twist.exp){let i=new o(this.twist.exp,t,this.twist.times);e.push(i)}return e}get value(){return this.twist.value}}a._ACTIONS="*#-xyzbsfdeulmrXYZBFSDEULMR",a._SUFFIX="'0123456789";class l extends n.Group{set angle(t){this.setRotationFromAxisAngle(this.axis,t),this._angle=t,this.updateMatrix(),this.cuber.dirty=!0}get angle(){return this._angle}constructor(t,e,i,s){super(),this.cuber=t,this._angle=0,this.cubelets=[],this.name=e,this.indices=i,this.axis=s,this.matrixAutoUpdate=!1,this.updateMatrix()}hold(){this.angle=0;for(let t of this.indices){let e=this.cuber.cube.cubelets[t];this.cubelets.push(e),this.cuber.cube.remove(e),this.add(e)}this.cuber.lock=!0}drop(){for(this.angle=Math.round(this.angle/(Math.PI/2))*(Math.PI/2);;){let t=this.cubelets.pop();if(void 0===t)break;this.rotate(t),this.remove(t),this.cuber.cube.add(t),this.cuber.cube.cubelets[t.index]=t}this.cuber.lock=!1,this.angle=0}twist(t=this.angle,e=null){t=Math.round(t/(Math.PI/2))*(Math.PI/2);let i=this.name,s=t>0,r=Math.round(Math.abs(t)/(Math.PI/2));0!=r&&this.cuber.history.record(new o(i,s,r));let n=t-this.angle;if(0===n)this.drop(),e&&e();else{var h=this.cuber.duration*Math.min(1,Math.abs(n)/(Math.PI/2));this.cuber.tweener.tween(this.angle,t,h,i=>{this.angle=i,this.angle!==t&&0!==this.angle||(this.drop(),e&&e())})}}rotate(t){t.rotateOnWorldAxis(this.axis,this.angle),t.vector=t.vector.applyAxisAngle(this.axis,this.angle),t.updateMatrix()}}var c,u={GREEN:"#009D54",ORANGE:"#FF6C00",BLUE:"#3D81F6",YELLOW:"#FDCC09",WHITE:"#FFFFFF",RED:"#DC422F",GRAY:"#808080",BLACK:"#202020",PURPLE:"#E040FB",LIME:"#C6FF00",CYAN:"#00BCD4",DARK_CYAN:"#0097A7",LIGHT_CYAN:"#B2EBF2",AMBER:"#FFC107",DARK_AMBER:"#FFA000",LIGHT_AMBER:"#FFECB3",ACCENT:"#FF4081",DISABLE:"#BDBDBD",BACKGROUND:"#E8E8E8"};!function(t){t[t.L=0]="L",t[t.R=1]="R",t[t.D=2]="D",t[t.U=3]="U",t[t.B=4]="B",t[t.F=5]="F"}(c||(c={}));class p extends n.Geometry{constructor(t,e){super();const i=t/2,s=i-e,r=[[-s,+s,+i],[+s,+s,+i],[+s,-s,+i],[-s,-s,+i],[-s,+i,-s],[+s,+i,-s],[+s,+i,+s],[-s,+i,+s],[-i,-s,-s],[-i,+s,-s],[-i,+s,+s],[-i,-s,+s],[+s,+s,-i],[-s,+s,-i],[-s,-s,-i],[+s,-s,-i],[-s,-i,+s],[+s,-i,+s],[+s,-i,-s],[-s,-i,-s],[+i,+s,+s],[+i,+s,-s],[+i,-s,-s],[+i,-s,+s]];for(let t=0;t<r.length;t++){let e=r[t];this.vertices.push(new n.Vector3(e[0],e[1],e[2]))}for(let t=0;t<p._INDICES.length;t++){let e=p._INDICES[t],i=new n.Face3(e[0],e[1],e[2]);this.faces.push(i)}this.computeFaceNormals()}}p._INDICES=[[1,6,7],[0,1,7],[3,0,10],[11,3,10],[17,2,3],[16,17,3],[23,20,1],[2,23,1],[5,12,13],[4,5,13],[9,13,14],[8,9,14],[22,15,12],[21,22,12],[19,14,15],[18,19,15],[7,4,9],[10,7,9],[11,8,19],[16,11,19],[23,17,18],[22,23,18],[20,21,5],[6,20,5],[20,6,1],[10,0,7],[21,12,5],[13,9,4],[23,2,17],[11,16,3],[22,18,15],[8,14,19]];class d extends n.Group{constructor(t){super(),this.initial=t,this._vector=new n.Vector3,this.stickers=[],this.edges=[],this._quaternion=new n.Quaternion,this.mirrors=[];let e=t%3-1,i=Math.floor(t%9/3)-1,s=Math.floor(t/9)-1;this.vector=new n.Vector3(e,i,s),this.materials=[this.vector.x<0?d._MATERIALS.orange:d._MATERIALS.gray,this.vector.x>0?d._MATERIALS.red:d._MATERIALS.gray,this.vector.y<0?d._MATERIALS.white:d._MATERIALS.gray,this.vector.y>0?d._MATERIALS.yellow:d._MATERIALS.gray,this.vector.z<0?d._MATERIALS.green:d._MATERIALS.gray,this.vector.z>0?d._MATERIALS.blue:d._MATERIALS.gray],this.frame=new n.Mesh(d._FRAME,d._MATERIALS.black),this.add(this.frame);for(let t=0;t<6;t++){let e=new n.Mesh(d._EDGE,d._MATERIALS.black),i=new n.Mesh(d._STICKER,this.materials[t]);switch(t){case c.L:e.rotation.y=-Math.PI/2,e.position.x=-d.SIZE/2,i.rotation.y=-Math.PI/2,i.position.x=-d.SIZE/2,i.name="L";break;case c.R:e.rotation.y=Math.PI/2,e.position.x=d.SIZE/2,i.rotation.y=Math.PI/2,i.position.x=d.SIZE/2,i.name="R";break;case c.D:e.rotation.x=Math.PI/2,e.position.y=-d.SIZE/2,i.rotation.x=Math.PI/2,i.position.y=-d.SIZE/2,i.name="D";break;case c.U:e.rotation.x=-Math.PI/2,e.position.y=d.SIZE/2,i.rotation.x=-Math.PI/2,i.position.y=d.SIZE/2,i.name="U";break;case c.B:e.rotation.x=Math.PI,e.position.z=-d.SIZE/2,i.rotation.x=Math.PI,i.position.z=-d.SIZE/2,i.name="B";break;case c.F:e.rotation.z=0,e.position.z=d.SIZE/2,i.rotation.x=2*Math.PI,i.position.z=d.SIZE/2,i.name="F"}if(this.add(e),this.edges.push(e),this.add(i),this.stickers.push(i),this.materials[t]!=d._MATERIALS.gray){let e=new n.Mesh(d._STICKER,this.materials[t]);e.rotation.x=0==i.rotation.x?0:i.rotation.x+Math.PI,e.rotation.y=0==i.rotation.y?0:i.rotation.y+Math.PI,e.rotation.z=0==i.rotation.z?0:i.rotation.z+Math.PI,e.rotation.x+e.rotation.y+e.rotation.z==0&&(e.rotation.y=Math.PI),e.position.x=3*i.position.x,e.position.y=3*i.position.y,e.position.z=3*i.position.z,this.add(e),this.mirrors[t]=e}this.matrixAutoUpdate=!1,this.updateMatrix()}}set vector(t){this._vector.set(Math.round(t.x),Math.round(t.y),Math.round(t.z)),this._index=9*(this._vector.z+1)+3*(this._vector.y+1)+(this._vector.x+1),this.position.x=d.SIZE*this._vector.x,this.position.y=d.SIZE*this._vector.y,this.position.z=d.SIZE*this._vector.z}get vector(){return this._vector}set index(t){let e=t%3-1,i=Math.floor(t%9/3)-1,s=Math.floor(t/9)-1;this.vector=new n.Vector3(e,i,s)}get index(){return this._index}set mirror(t){if(t)for(let t=0;t<6;t++)this.mirrors[t]instanceof n.Mesh&&this.children.indexOf(this.mirrors[t])<0&&this.add(this.mirrors[t]);else for(let t=0;t<6;t++)this.mirrors[t]instanceof n.Mesh&&this.children.indexOf(this.mirrors[t])>=0&&this.remove(this.mirrors[t])}getColor(t){let e=new n.Vector3(0,0,0);switch(t){case c.L:e.x=-1;break;case c.R:e.x=1;break;case c.D:e.y=-1;break;case c.U:e.y=1;break;case c.B:e.z=-1;break;case c.F:e.z=1}this._quaternion.copy(this.quaternion),e.applyQuaternion(this._quaternion.inverse());let i=Math.round(e.x),s=Math.round(e.y),r=Math.round(e.z),h=0;return i<0?h=c.L:i>0?h=c.R:s<0?h=c.D:s>0?h=c.U:r<0?h=c.B:r>0&&(h=c.F),h}stick(t,e){let i;e.length>0?i=new n.MeshBasicMaterial({color:e}):(i=this.materials[t],this.stickers[t].material==i&&(i=d._MATERIALS.gray)),this.stickers[t].material=i,this.mirrors[t]instanceof n.Mesh&&(this.mirrors[t].material=i)}}d.SIZE=64,d._BORDER_WIDTH=3,d._EDGE_WIDTH=2,d._FRAME=new p(d.SIZE,d._BORDER_WIDTH),d._EDGE=new class extends n.ShapeGeometry{constructor(t,e){let i=new n.Shape;t/=2,i.moveTo(-t,-t),i.lineTo(-t,t),i.lineTo(t,t),i.lineTo(t,-t),i.closePath();let s=-(t-=e),r=t,h=-t,o=t,a=t/4,l=new n.Shape;l.moveTo(s,h+a),l.quadraticCurveTo(s,h,s+a,h),l.lineTo(o-a,h),l.quadraticCurveTo(o,h,o,h+a),l.lineTo(o,r-a),l.quadraticCurveTo(o,r,o-a,r),l.lineTo(s+a,r),l.quadraticCurveTo(s,r,s,r-a),l.lineTo(s,h+a),l.closePath(),i.holes.push(l),super(i)}}(d.SIZE-2*d._BORDER_WIDTH,d._EDGE_WIDTH),d._STICKER=new class extends n.ShapeGeometry{constructor(t,e){t/=2;let i=-(t-=e),s=t,r=-t,h=t,o=t/4,a=new n.Shape;a.moveTo(i,r+o),a.lineTo(i,s-o),a.quadraticCurveTo(i,s,i+o,s),a.lineTo(h-o,s),a.quadraticCurveTo(h,s,h,s-o),a.lineTo(h,r+o),a.quadraticCurveTo(h,r,h-o,r),a.lineTo(i+o,r),a.quadraticCurveTo(i,r,i,r+o),a.closePath(),super(a)}}(d.SIZE-2*d._BORDER_WIDTH,d._EDGE_WIDTH),d._MATERIALS={green:new n.MeshBasicMaterial({color:u.GREEN}),orange:new n.MeshBasicMaterial({color:u.ORANGE}),blue:new n.MeshBasicMaterial({color:u.BLUE}),yellow:new n.MeshBasicMaterial({color:u.YELLOW}),white:new n.MeshBasicMaterial({color:u.WHITE}),red:new n.MeshBasicMaterial({color:u.RED}),gray:new n.MeshBasicMaterial({color:u.GRAY}),black:new n.MeshBasicMaterial({color:u.BLACK}),purple:new n.MeshBasicMaterial({color:u.PURPLE}),lime:new n.MeshBasicMaterial({color:u.LIME}),cyan:new n.MeshBasicMaterial({color:u.CYAN})};class g extends n.Group{constructor(t){super(),this.cubelets=[],this.initials=[];for(var e=0;e<27;e++){let t=new d(e);this.cubelets.push(t),this.initials.push(t),this.add(t)}this.groups={L:new l(t,"L",[6,15,24,3,12,21,0,9,18],new n.Vector3(-1,0,0)),D:new l(t,"D",[18,19,20,9,10,11,0,1,2],new n.Vector3(0,-1,0)),B:new l(t,"B",[8,7,6,5,4,3,2,1,0],new n.Vector3(0,0,-1)),R:new l(t,"R",[26,17,8,23,14,5,20,11,2],new n.Vector3(1,0,0)),U:new l(t,"U",[6,7,8,15,16,17,24,25,26],new n.Vector3(0,1,0)),F:new l(t,"F",[24,25,26,21,22,23,18,19,20],new n.Vector3(0,0,1)),l:new l(t,"l",[0,3,6,9,12,15,18,21,24,1,4,7,10,13,16,19,22,25],new n.Vector3(-1,0,0)),d:new l(t,"d",[0,1,2,9,10,11,18,19,20,3,4,5,12,13,14,21,22,23],new n.Vector3(0,-1,0)),b:new l(t,"b",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],new n.Vector3(0,0,-1)),r:new l(t,"r",[2,5,8,11,14,17,20,23,26,1,4,7,10,13,16,19,22,25],new n.Vector3(1,0,0)),u:new l(t,"u",[6,7,8,15,16,17,24,25,26,3,4,5,12,13,14,21,22,23],new n.Vector3(0,1,0)),f:new l(t,"f",[18,19,20,21,22,23,24,25,26,9,10,11,12,13,14,15,16,17],new n.Vector3(0,0,1)),M:new l(t,"M",[1,4,7,10,13,16,19,22,25],new n.Vector3(-1,0,0)),E:new l(t,"E",[3,4,5,12,13,14,21,22,23],new n.Vector3(0,-1,0)),S:new l(t,"S",[9,10,11,12,13,14,15,16,17],new n.Vector3(0,0,1)),x:new l(t,"x",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],new n.Vector3(1,0,0)),y:new l(t,"y",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],new n.Vector3(0,1,0)),z:new l(t,"z",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],new n.Vector3(0,0,1))};for(let t in this.groups)this.add(this.groups[t]);this.matrixAutoUpdate=!1,this.updateMatrix()}index(t){return this.initials[t].index}reset(){for(let t of this.cubelets)t.setRotationFromEuler(new n.Euler(0,0,0)),t.index=t.initial,t.updateMatrix();this.cubelets.sort((t,e)=>t.index-e.index)}stick(t,e,i){this.initials[t].stick(e,i)}get state(){let t=[];for(let e of this.groups.U.indices)t.push(this.cubelets[e].getColor(c.U));for(let e of this.groups.R.indices)t.push(this.cubelets[e].getColor(c.R));for(let e of this.groups.F.indices)t.push(this.cubelets[e].getColor(c.F));for(let e of this.groups.D.indices)t.push(this.cubelets[e].getColor(c.D));for(let e of this.groups.L.indices)t.push(this.cubelets[e].getColor(c.L));for(let e of this.groups.B.indices)t.push(this.cubelets[e].getColor(c.B));return t.join("")}}class b{constructor(){this.vector=new n.Vector3}}class v{constructor(t){this.dragging=!1,this.rotating=!1,this.angle=0,this.ray=new n.Ray,this.down=new n.Vector2(0,0),this.move=new n.Vector2(0,0),this.matrix=new n.Matrix4,this.holder=new b,this.vector=new n.Vector3,this.planes=[new n.Plane(new n.Vector3(1,0,0),3*-d.SIZE/2),new n.Plane(new n.Vector3(0,1,0),3*-d.SIZE/2),new n.Plane(new n.Vector3(0,0,1),3*-d.SIZE/2)],this._onMouseDown=(t=>(this.down.x=t.offsetX,this.down.y=t.offsetY,this.handleDown(),t.returnValue=!1,!1)),this._onMouseMove=(t=>(this.move.x=t.offsetX,this.move.y=t.offsetY,this.handleMove(),t.returnValue=!1,!1)),this._onMouseUp=(t=>(this.handleUp(),t.returnValue=!1,!1)),this._onMouseOut=(t=>(this.handleUp(),t.returnValue=!1,!1)),this._onTouch=(t=>{let e=t.changedTouches[0];switch(t.type){case"touchstart":this.down.x=e.clientX,this.down.y=e.clientY,this.handleDown();break;case"touchmove":this.move.x=e.clientX,this.move.y=e.clientY,this.handleMove();break;case"touchend":this.handleUp();break;default:return}return t.returnValue=!1,!1}),this.cuber=t,this.taps=[],this.cuber.canvas.addEventListener("mousedown",this._onMouseDown),this.cuber.canvas.addEventListener("mousemove",this._onMouseMove),this.cuber.canvas.addEventListener("mouseup",this._onMouseUp),this.cuber.canvas.addEventListener("mouseout",this._onMouseOut),this.cuber.canvas.addEventListener("touchstart",this._onTouch),this.cuber.canvas.addEventListener("touchmove",this._onTouch),this.cuber.canvas.addEventListener("touchend",this._onTouch),this.loop()}loop(){requestAnimationFrame(this.loop.bind(this)),this.update()}update(){if(!this.cuber.twistable&&this.rotating&&this.group.angle!=this.angle){let t=(this.angle-this.group.angle)/2,e=Math.PI/2/this.cuber.duration*4;t>e&&(t=e),t<-e&&(t=-e),this.group.angle+=t,this.cuber.dirty=!0}}match(){let t,e=[];var i=this.holder.index;if(-1===this.holder.index)return 0===(t=this.cuber.cube.groups.x).axis.dot(this.holder.plane.normal)&&e.push(t),0===(t=this.cuber.cube.groups.y).axis.dot(this.holder.plane.normal)&&e.push(t),0===(t=this.cuber.cube.groups.z).axis.dot(this.holder.plane.normal)&&e.push(t),e;var s=i%3-1,r=Math.floor(i%9/3)-1,n=Math.floor(i/9)-1;switch(s){case-1:0===(t=this.cuber.cube.groups.L).axis.dot(this.holder.plane.normal)&&e.push(t);break;case 0:0===(t=this.cuber.cube.groups.M).axis.dot(this.holder.plane.normal)&&e.push(t);break;case 1:0===(t=this.cuber.cube.groups.R).axis.dot(this.holder.plane.normal)&&e.push(t)}switch(r){case-1:0===(t=this.cuber.cube.groups.D).axis.dot(this.holder.plane.normal)&&e.push(t);break;case 0:0===(t=this.cuber.cube.groups.E).axis.dot(this.holder.plane.normal)&&e.push(t);break;case 1:0===(t=this.cuber.cube.groups.U).axis.dot(this.holder.plane.normal)&&e.push(t)}switch(n){case-1:0===(t=this.cuber.cube.groups.B).axis.dot(this.holder.plane.normal)&&e.push(t);break;case 0:0===(t=this.cuber.cube.groups.S).axis.dot(this.holder.plane.normal)&&e.push(t);break;case 1:0===(t=this.cuber.cube.groups.F).axis.dot(this.holder.plane.normal)&&e.push(t)}return e}intersect(t,e){var i=t.x/this.cuber.width*2-1,s=-t.y/this.cuber.height*2+1;this.ray.origin.setFromMatrixPosition(this.cuber.camera.matrixWorld),this.ray.direction.set(i,s,.5).unproject(this.cuber.camera).sub(this.ray.origin).normalize(),this.ray.applyMatrix4(this.matrix.identity().getInverse(this.cuber.scene.matrix));var r=new n.Vector3;return this.ray.intersectPlane(e,r),r}handleDown(){if(this.dragging=!0,this.holder.index=-1,this.cuber.tweener.speedup(),!this.cuber.twistable)return;let t=0;this.planes.forEach(e=>{var i=this.intersect(this.down,e);if(null!==i&&Math.abs(i.x)<=3*d.SIZE/2+.01&&Math.abs(i.y)<=3*d.SIZE/2+.01&&Math.abs(i.z)<=3*d.SIZE/2+.01){let h=Math.pow(i.x-this.ray.origin.x,2)+Math.pow(i.y-this.ray.origin.y,2)+Math.pow(i.z-this.ray.origin.z,2);if(0==t||h<t){this.holder.plane=e;var s=Math.ceil(Math.round(i.x)/d.SIZE-.5),r=Math.ceil(Math.round(i.y)/d.SIZE-.5),n=Math.ceil(Math.round(i.z)/d.SIZE-.5);return s<2&&s>-2&&r<2&&r>-2&&n<2&&n>-2?(this.holder.index=9*(n+1)+3*(r+1)+(s+1),13==this.holder.index&&(this.holder.index=-1)):this.holder.index=-1,void(t=h)}}},this)}handleMove(){if(this.dragging){var t=this.move.x-this.down.x,e=this.move.y-this.down.y,i=Math.sqrt(t*t+e*e);if(Math.min(this.cuber.width,this.cuber.height)/i>32)return!0;if(this.cuber.tweener.finish(),this.cuber.lock)return this.dragging=!1,this.rotating=!1,!0;if(this.dragging=!1,this.rotating=!0,-1===this.holder.index)if(t*t>e*e)this.group=this.cuber.cube.groups.y;else{let t=new n.Vector3(3*d.SIZE/2,0,3*d.SIZE/2);t.applyMatrix4(this.cuber.scene.matrix).project(this.cuber.camera);let e=this.cuber.width/2,i=Math.round(t.x*e+e);this.down.x<i?this.group=this.cuber.cube.groups.x:this.group=this.cuber.cube.groups.z}else{var s=this.intersect(this.down,this.holder.plane),r=this.intersect(this.move,this.holder.plane);this.vector.subVectors(r,s);var h=this.vector.x,o=this.vector.y,a=this.vector.z,l=Math.max(Math.abs(h),Math.abs(o),Math.abs(a));h=Math.abs(h)===l?h:0,o=Math.abs(o)===l?o:0,a=Math.abs(a)===l?a:0,this.vector.set(h,o,a),this.holder.vector.copy(this.vector.multiply(this.vector).normalize()),this.match().some(t=>0===t.axis.dot(this.vector)&&(this.group=t,!0),this),this.vector.crossVectors(this.holder.vector,this.holder.plane.normal),this.holder.vector.multiplyScalar(this.vector.x+this.vector.y+this.vector.z)}this.group.hold()}if(this.rotating){if(-1===this.holder.index){t=this.move.x-this.down.x,e=this.move.y-this.down.y;this.group===this.cuber.cube.groups.y?this.angle=t/d.SIZE*Math.PI/4:this.group===this.cuber.cube.groups.x?this.angle=e/d.SIZE*Math.PI/4:this.angle=-e/d.SIZE*Math.PI/4}else{s=this.intersect(this.down,this.holder.plane),r=this.intersect(this.move,this.holder.plane);this.vector.subVectors(r,s).multiply(this.holder.vector),this.angle=-(this.vector.x+this.vector.y+this.vector.z)*(this.group.axis.x+this.group.axis.y+this.group.axis.z)/d.SIZE*Math.PI/4}if(this.cuber.twistable)return this.angle=0==this.angle?0:this.angle/Math.abs(this.angle)*Math.PI/2,void this.handleUp()}}handleUp(){if(this.dragging){let t=null;switch(this.holder.plane){case this.planes[0]:t=c.R;break;case this.planes[1]:t=c.U;break;case this.planes[2]:t=c.F}for(let e of this.taps)e(this.holder.index,t)}this.rotating&&this.group&&null!==this.group&&(this.cuber.twistable?this.group.twist(this.angle):this.group.twist(0)),this.holder.index=-1,this.dragging=!1,this.rotating=!1,this.cuber.dirty=!0}}class f{get length(){return this.tweens.length}constructor(t){this.cuber=t,this.tweens=[],this.loop()}loop(){requestAnimationFrame(this.loop.bind(this)),this.update()}tween(t,e,i,s){this.tweens.push(new w(t,e,i,s))}update(){if(0===this.tweens.length)return!1;for(var t=0;t<this.tweens.length;)this.tweens[t].update()?t++:this.tweens.splice(t,1);return!0}speedup(){for(const t of this.tweens)t.speedup()}finish(){let t=this.tweens.splice(0,this.tweens.length);for(const e of t)e.finish()}}class w{constructor(t,e,i,s){this.begin=t,this.end=e,this.duration=i,this.callback=s,this.value=0,this.delta=1}speedup(){this.delta=4}finish(){this.callback(this.end)}update(){this.value=this.value+this.delta;let t=this.value/this.duration;t=(t=t>1?1:t)<0?0:t;let e=1-(t-=1)*t;return this.callback(this.begin+(this.end-this.begin)*e),1!=e}}class m{constructor(){this.list=[],this.callbacks=[]}record(t){if(0==this.list.length)this.list.push(t);else{let e=this.list[this.list.length-1];e.exp==t.exp&&e.times==t.times&&e.reverse!=t.reverse?this.list.pop():this.list.push(t)}for(let t of this.callbacks)t()}clear(){this.list=[];for(let t of this.callbacks)t()}get last(){return this.list[this.list.length-1]}get length(){return this.list.length}}class x{constructor(t){this.dirty=!1,this.display=!0,this.lock=!1,this.twistable=!0,this.duration=30,this._scale=1,this._angle=Math.PI/16,this._gradient=Math.PI/6,this._perspective=1,this.canvas=t,this.controller=new v(this),this.twister=new h(this),this.tweener=new f(this),this.cube=new g(this),this.history=new m,this.renderer=new n.WebGLRenderer({canvas:t,antialias:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(u.BACKGROUND),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height,!0),this.capture=new n.WebGLRenderer({antialias:!0,preserveDrawingBuffer:!0,alpha:!0}),this.capture.setClearColor(0,0),this.capture.setPixelRatio(1),this.capture.setSize(128,128,!0),this.scene=new n.Scene,this.scene.rotation.x=Math.PI/6,this.scene.rotation.y=-Math.PI/4+Math.PI/16,this.scene.add(this.cube),this.camera=new n.PerspectiveCamera(50,1,1,32*d.SIZE),this.camera.position.x=0,this.camera.position.y=0,this.camera.position.z=0,this.loop()}get mirror(){return this._mirror}set mirror(t){this._mirror=t;for(let e of this.cube.cubelets)e.mirror=t;this.dirty=!0}get scale(){return this._scale}set scale(t){this._scale=t,this.resize()}get angle(){return this._angle}set angle(t){this._angle=t,this.scene.rotation.y=-Math.PI/4+t,this.dirty=!0}get gradient(){return this._gradient}set gradient(t){this._gradient=t,this.scene.rotation.x=t,this.dirty=!0}get perspective(){return this._perspective}set perspective(t){this._perspective=t,this.resize()}resize(){let t=this.height/Math.min(this.width,this.height/1.2)/4,e=2*Math.atan(t*this.scale/this.perspective)*180/Math.PI;this.camera.aspect=this.width/this.height,this.camera.fov=e,this.camera.position.z=3*d.SIZE*4*this.perspective,this.camera.lookAt(this.scene.position),this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height,!0),this.dirty=!0}render(){this.dirty&&(this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.dirty=!1)}loop(){requestAnimationFrame(this.loop.bind(this)),this.render()}blob(){this.camera.aspect=1,this.camera.updateProjectionMatrix(),this.capture.render(this.scene,this.camera);let t=this.capture.domElement.toDataURL("image/png").split(";base64,"),e=t[0].split(":")[1],i=window.atob(t[1]),s=i.length,r=new Uint8Array(s);for(let t=0;t<s;++t)r[t]=i.charCodeAt(t);let n=new Blob([r],{type:e});return this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),n}}class y{constructor(t){this._storage=window.localStorage,this.cuber=t,this.load()}load(){this.mirror=Boolean(this._storage.getItem("setting.mirror")||!1),this.scale=Number(this._storage.getItem("setting.scale")||1),this.perspective=Number(this._storage.getItem("setting.perspective")||1),this.angle=Number(this._storage.getItem("setting.angle")||Math.PI/16),this.gradient=Number(this._storage.getItem("setting.gradient")||Math.PI/6)}reset(){this.mirror=!1,this.scale=1,this.perspective=1,this.angle=Math.PI/16,this.gradient=Math.PI/6}get mirror(){return this._mirror}set mirror(t){this._mirror=t,this._storage.setItem("setting.mirror",String(t)),this.cuber.mirror=t}get scale(){return this._scale}set scale(t){this._scale=t,this._storage.setItem("setting.scale",String(t)),this.cuber.scale=t}get perspective(){return this._perspective}set perspective(t){this._perspective=t,this._storage.setItem("setting.perspective",String(t)),this.cuber.perspective=t}get angle(){return this._angle}set angle(t){this._angle=t,this._storage.setItem("setting.angle",String(t)),this.cuber.angle=t}get gradient(){return this._gradient}set gradient(t){this._gradient=t,this._storage.setItem("setting.gradient",String(t)),this.cuber.gradient=t}}var M=function(t,e,i,s){var r,n=arguments.length,h=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(h=(n<3?r(h):n>3?r(e,i,h):r(e,i))||h);return n>3&&h&&Object.defineProperty(e,i,h),h},I=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let E=class extends s.default{constructor(){super(...arguments),this.layers=0,this.width=0,this.height=0,this.operations=[["L","D","B","F","U","R","L'","D'","B'","F'","U'","R'"],["l","d","b","f","u","r","l'","d'","b'","f'","u'","r'"],["M","E","S","z","y","x","M'","E'","S'","z'","y'","x'"]]}get exps(){return this.operations[this.layers]}twist(t){this.cuber.twister.twist(t)}reverse(){void 0!=this.cuber.history.last&&this.cuber.twister.twist(this.cuber.history.last.value,!0,1,!1)}};M([Object(r.Inject)("cuber"),I("design:type",x)],E.prototype,"cuber",void 0),M([Object(r.Inject)("option"),I("design:type",y)],E.prototype,"option",void 0);var _=E=M([Object(r.Component)({template:i(5)})],E),S=function(t,e,i,s){var r,n=arguments.length,h=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(h=(n<3?r(h):n>3?r(e,i,h):r(e,i))||h);return n>3&&h&&Object.defineProperty(e,i,h),h},R=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let A=class extends s.default{constructor(){super(),this.keyboard=new _,this.menu=!1,this.width=0,this.height=0;let t=document.createElement("canvas");this.cuber=new x(t),this.option=new y(this.cuber)}resize(){this.width=window.innerWidth,this.height=window.innerHeight;let t=this.width;t>this.height/1.8&&(t=Math.floor(this.height/1.8));let e=.5*t;this.cuber.width=this.width,this.cuber.height=this.height-e,this.cuber.resize();let i=this.$refs.cuber;i instanceof HTMLElement&&(i.style.width=this.width+"px",i.style.height=this.height-e+"px");let s=this.$refs.keyboard;s instanceof _&&(s.width=t,s.height=e),window.scrollTo(1,0)}mounted(){if(this.$refs.cuber instanceof Element){this.$refs.cuber.appendChild(this.cuber.canvas),this.$nextTick(this.resize)}}onModeChange(t,e){this.$nextTick(this.resize)}};S([Object(r.Provide)("cuber"),R("design:type",x)],A.prototype,"cuber",void 0),S([Object(r.Provide)("option"),R("design:type",y)],A.prototype,"option",void 0),S([Object(r.Watch)("option.mode"),R("design:type",Function),R("design:paramtypes",[String,String]),R("design:returntype",void 0)],A.prototype,"onModeChange",null);var k=A=S([Object(r.Component)({template:i(6),components:{keyboard:_}}),R("design:paramtypes",[])],A),P=i(4),T=i.n(P);i(7),i(8),i(9);s.default.use(T.a),new s.default({el:"#app",render:t=>t(k)})}]);