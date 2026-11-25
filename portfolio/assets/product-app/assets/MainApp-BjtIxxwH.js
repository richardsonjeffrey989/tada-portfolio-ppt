import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{n as r,t as i}from"./palette-DFhwG1Uv.js";import{n as a,t as o}from"./x-gvZJ7tCe.js";import{t as s}from"./Icon-CZ7XH7gn.js";import{c,i as l,n as u,o as d}from"./data-CdHJjmb4.js";import{t as f}from"./CircularGallery-Dx_euQQQ.js";import{n as p,t as m}from"./search--WJSzb2S.js";var h=[[`path`,{d:`m12 19-7-7 7-7`}],[`path`,{d:`M19 12H5`}]],g=[[`path`,{d:`M7 7h10v10`}],[`path`,{d:`M7 17 17 7`}]],_=[[`path`,{d:`M15 3h6v6`}],[`path`,{d:`M10 14 21 3`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`}]],v=[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`}],[`path`,{d:`M2 10h20`}]],y=[[`path`,{d:`M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4`}],[`rect`,{width:`10`,height:`7`,x:`12`,y:`13`,rx:`2`}]],b=[[`path`,{d:`M5 12h14`}],[`path`,{d:`M12 5v14`}]],x=[[`path`,{d:`M14 17H5`}],[`path`,{d:`M19 7h-9`}],[`circle`,{cx:`17`,cy:`17`,r:`3`}],[`circle`,{cx:`7`,cy:`7`,r:`3`}]],S=[[`path`,{d:`M10 5H3`}],[`path`,{d:`M12 19H3`}],[`path`,{d:`M14 3v4`}],[`path`,{d:`M16 17v4`}],[`path`,{d:`M21 12h-9`}],[`path`,{d:`M21 19h-5`}],[`path`,{d:`M21 5h-7`}],[`path`,{d:`M8 10v4`}],[`path`,{d:`M8 12H3`}]],C=[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`}],[`path`,{d:`M20 2v4`}],[`path`,{d:`M22 4h-4`}],[`circle`,{cx:`4`,cy:`20`,r:`2`}]],w=[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`}]],T=[[`path`,{d:`M12 3v12`}],[`path`,{d:`m17 8-5-5-5 5`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}]],E=e(t(),1),D=[`小红书`,`Pinterest`,`站酷`,`花瓣`,`本地`],O=e=>D[e.id%D.length],k=n();function A({item:e,onClose:t,onToast:n}){let[r,i]=(0,E.useState)([`复古`,`版式`]),[a,c]=(0,E.useState)(``);return(0,E.useEffect)(()=>{let e=e=>{e.key===`Escape`&&t()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t]),e?(0,k.jsxs)(`div`,{className:`m-overlay ${e?`is-on`:``}`,onClick:t,children:[(0,k.jsx)(`div`,{className:`m-overlay-bg`}),(0,k.jsx)(`button`,{type:`button`,className:`m-close`,"aria-label":`关闭`,onClick:t,children:(0,k.jsx)(s,{icon:o,size:17})}),(0,k.jsxs)(`div`,{className:`m-detail`,onClick:e=>e.stopPropagation(),children:[(0,k.jsx)(`div`,{className:`m-detail-imgwrap`,children:(0,k.jsx)(`img`,{src:e.src,alt:`收藏 ${e.id}`})}),(0,k.jsxs)(`aside`,{className:`m-detail-panel`,children:[(0,k.jsxs)(`p`,{className:`m-detail-kicker`,children:[`来自 `,O(e),` · 收藏 `,String(e.id).padStart(3,`0`)]}),(0,k.jsxs)(`h2`,{children:[`一张存下来的`,(0,k.jsx)(`br`,{}),`版式参考`]}),(0,k.jsx)(`div`,{className:`m-detail-swatches`,children:e.palette.slice(0,5).map(e=>(0,k.jsx)(`i`,{style:{background:e.hex},title:e.hex},e.hex))}),(0,k.jsx)(`div`,{className:`m-detail-hr`}),(0,k.jsx)(`p`,{className:`m-detail-kicker`,children:`标签`}),(0,k.jsxs)(`div`,{className:`m-detail-tags`,children:[r.map(e=>(0,k.jsxs)(`span`,{className:`m-tag`,children:[e,(0,k.jsx)(`button`,{type:`button`,"aria-label":`移除标签 ${e}`,onClick:()=>i(r.filter(t=>t!==e)),children:`×`})]},e)),(0,k.jsx)(`input`,{value:a,placeholder:`加标签`,"aria-label":`新标签`,onChange:e=>c(e.target.value),onKeyDown:e=>{e.key===`Enter`&&a.trim()&&(i([...r,a.trim()]),c(``))}})]}),(0,k.jsx)(`div`,{className:`m-detail-hr`}),(0,k.jsx)(`p`,{className:`m-detail-kicker`,children:`原始信息`}),(0,k.jsxs)(`p`,{style:{fontSize:12,color:`var(--m-ink-2)`,lineHeight:1.7},children:[e.w,` × `,e.h,` · `,O(e),` · 已收录`,(0,k.jsx)(`br`,{}),`颜色取自画面：`,[...e.palette.slice(0,3).map(e=>e.hex)].join(` / `)]}),(0,k.jsxs)(`div`,{className:`m-detail-actions`,children:[(0,k.jsxs)(`button`,{type:`button`,className:`m-btn m-primary`,onClick:()=>n(`已加入项目（演示）`),children:[(0,k.jsx)(s,{icon:b,size:15}),` 加入项目`]}),(0,k.jsxs)(`button`,{type:`button`,className:`m-btn`,onClick:()=>n(`正在找相似（演示）`),children:[(0,k.jsx)(s,{icon:C,size:15}),` 找相似`]}),(0,k.jsxs)(`button`,{type:`button`,className:`m-btn m-ghost`,onClick:()=>n(`参考小窗会单独开一个窗口（演示）`),children:[(0,k.jsx)(s,{icon:g,size:15}),` 打开小窗`]}),(0,k.jsxs)(`button`,{type:`button`,className:`m-btn m-ghost`,onClick:()=>n(`已复制原图链接（演示）`),children:[(0,k.jsx)(s,{icon:_,size:15}),` 原图`]})]})]})]})]}):null}function j({manifest:e,reduced:t}){let n=d(e.cards,16).map(e=>({image:e.src,alt:`收藏 ${e.id}`}));return(0,k.jsx)(`div`,{className:`m-arc`,"aria-hidden":!0,children:(0,k.jsx)(f,{items:n,bend:2.4,font:`600 24px system-ui`,showTitles:!1,borderRadius:.06,autoScroll:t?0:.28,scrollEase:.04,shadow:.12})})}var M=[{k:`find`,label:`找图`},{k:`ref`,label:`要参考`}],N=76;function P({mode:e,onMode:t,onSearch:n,hue:a,onHue:o}){let[c,l]=(0,E.useState)(``),[u,d]=(0,E.useState)(!1),[f,h]=(0,E.useState)(!1),[g,_]=(0,E.useState)(null),v=(0,E.useRef)(null),y=(0,E.useRef)([]),b=(0,E.useCallback)(()=>{let t=y.current[M.findIndex(t=>t.k===e)];t&&_({x:t.offsetLeft,w:t.offsetWidth})},[e]);(0,E.useLayoutEffect)(()=>{b()},[b]),(0,E.useEffect)(()=>{let e=()=>b();return window.addEventListener(`resize`,e),document.fonts?.ready.then(b),()=>window.removeEventListener(`resize`,e)},[b]);let x=(0,E.useCallback)((e,t)=>{let n=v.current?.getBoundingClientRect();if(!n)return;let r=e-(n.left+n.width/2),i=t-(n.top+n.height/2);Math.hypot(r,i)<n.width*.24?o(null):o((Math.atan2(i,r)*180/Math.PI+90+360)%360)},[o]),S=a===null?null:{left:`calc(50% + ${Math.cos((a-90)*Math.PI/180)*N}px)`,top:`calc(50% + ${Math.sin((a-90)*Math.PI/180)*N}px)`,background:`oklch(0.72 0.15 ${a})`};return(0,k.jsxs)(`div`,{className:`m-capsule`,children:[(0,k.jsx)(`button`,{type:`button`,"aria-label":`按颜色找图`,"aria-expanded":u,onClick:()=>d(e=>!e),className:`m-cap-icon ${u?`is-on`:``}`,children:(0,k.jsx)(s,{icon:i,size:17,strokeWidth:1.5})}),(0,k.jsxs)(`div`,{className:`m-cap-track`,role:`radiogroup`,"aria-label":`模式`,children:[g&&(0,k.jsx)(`span`,{className:`m-cap-thumb`,style:{width:g.w,transform:`translateX(${g.x}px)`}}),M.map((n,r)=>(0,k.jsx)(`button`,{ref:e=>{y.current[r]=e},type:`button`,role:`radio`,"aria-checked":e===n.k,onClick:()=>t(n.k),className:`m-cap-seg ${e===n.k?`is-on`:``}`,children:n.label},n.k))]}),(0,k.jsxs)(`label`,{className:`m-cap-search`,children:[(0,k.jsx)(s,{icon:e===`find`?m:r,size:17,strokeWidth:1.6}),(0,k.jsx)(`input`,{className:`m-cap-empty`,value:c,"aria-label":`搜索`,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&n(c.trim())},placeholder:e===`find`?`那张图……收藏在哪了`:`说说要做什么，找参考`})]}),(0,k.jsx)(`button`,{type:`button`,"aria-label":`发送`,className:`m-cap-send`,onClick:()=>n(c.trim()),children:(0,k.jsx)(s,{icon:p,size:18,strokeWidth:1.8})}),u&&(0,k.jsxs)(`div`,{className:`m-wheel-pop`,children:[(0,k.jsx)(`div`,{ref:v,className:`m-wheel-ring`,onPointerDown:e=>{e.currentTarget.setPointerCapture(e.pointerId),h(!0),x(e.clientX,e.clientY)},onPointerMove:e=>{f&&x(e.clientX,e.clientY)},onPointerUp:()=>h(!1),onPointerCancel:()=>h(!1),style:{touchAction:`none`},children:S&&(0,k.jsx)(`span`,{className:`m-wheel-knob`,style:S})}),(0,k.jsx)(`div`,{className:`m-wheel-center`,children:(0,k.jsx)(`span`,{className:`m-wheel-dot`,style:a===null?void 0:{background:`oklch(0.72 0.15 ${a})`}})}),(0,k.jsx)(`p`,{className:`m-wheel-caption`,children:a===null?`拖动色环 · 按颜色重排`:`色相 ${Math.round(a)}° · 点中心取消`})]})]})}var F=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,I=8294400,L=class{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=V();uniformCache={};textureUnitMap=new Map;ownerDocument;constructor(e,t,n,r,i=0,a=0,o=2,s=I,c=[]){if(e?.nodeType===1)this.parentElement=e;else throw Error(`Paper Shaders: parent element must be an HTMLElement`);if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector(`style[data-paper-shader]`)){let e=this.ownerDocument.createElement(`style`);e.innerHTML=B,e.setAttribute(`data-paper-shader`,``),this.ownerDocument.head.prepend(e)}let l=this.ownerDocument.createElement(`canvas`);this.canvasElement=l,this.parentElement.prepend(l),this.fragmentShader=t,this.providedUniforms=n,this.mipmaps=c,this.currentFrame=a,this.minPixelRatio=o,this.maxPixelCount=s;let u=l.getContext(`webgl2`,{antialias:!1,depth:!1,stencil:!1,...r});if(!u)throw Error(`Paper Shaders: WebGL is not supported in this browser`);this.gl=u,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener(`resize`,this.handleVisualViewportChange),this.setupIntersectionObserver(),this.setSpeed(i),this.parentElement.setAttribute(`data-paper-shader`,``),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener(`visibilitychange`,this.handleDocumentVisibilityChange)}initProgram=()=>{let e=z(this.gl,F,this.fragmentShader);e&&(this.program=e,this.gl.useProgram(e))};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,`a_position`),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,`u_time`),u_pixelRatio:this.gl.getUniformLocation(this.program,`u_pixelRatio`),u_resolution:this.gl.getUniformLocation(this.program,`u_resolution`)};Object.entries(this.providedUniforms).forEach(([t,n])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),n instanceof HTMLImageElement){let n=`${t}AspectRatio`;e[n]=this.gl.getUniformLocation(this.program,n)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;intersectionObserver=null;isInViewport=!0;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let t=e.devicePixelContentBoxSize?.[0];t!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=t.inlineSize,this.parentDevicePixelHeight=t.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};setupIntersectionObserver=()=>{let e=this.ownerDocument.defaultView;e?.IntersectionObserver&&(this.intersectionObserver=new e.IntersectionObserver(([e])=>{this.isInViewport=e?.isIntersecting??!0,this.updateCurrentSpeed()}),this.intersectionObserver.observe(this.parentElement))};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,t=0,n=Math.max(1,window.devicePixelRatio),r=visualViewport?.scale??1;if(this.devicePixelsSupported){let i=Math.max(1,this.minPixelRatio/n);e=this.parentDevicePixelWidth*i*r,t=this.parentDevicePixelHeight*i*r}else{let i=Math.max(n,this.minPixelRatio)*r;if(this.isSafari){let e=H(this.ownerDocument);i*=Math.max(1,e)}e=Math.round(this.parentWidth)*i,t=Math.round(this.parentHeight)*i}let i=Math.sqrt(this.maxPixelCount)/Math.sqrt(e*t),a=Math.min(1,i),o=Math.round(e*a),s=Math.round(t*a),c=o/Math.round(this.parentWidth);(this.canvasElement.width!==o||this.canvasElement.height!==s||this.renderScale!==c)&&(this.renderScale=c,this.canvasElement.width=o,this.canvasElement.height=s,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn(`Tried to render before program or gl was initialized`);return}let t=e-this.lastRenderTime;this.lastRenderTime=e,this.currentSpeed!==0&&(this.currentFrame+=t*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&=(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed===0?this.rafId=null:this.requestRender()};requestRender=()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,t)=>{if(!t.complete||t.naturalWidth===0)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let n=this.textures.get(e);n&&this.gl.deleteTexture(n),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let r=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+r);let i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let a=this.gl.getError();if(a!==this.gl.NO_ERROR||i===null){console.error(`Paper Shaders: WebGL error when uploading texture:`,a);return}this.textures.set(e,i);let o=this.uniformLocations[e];if(o){this.gl.uniform1i(o,r);let n=`${e}AspectRatio`,i=this.uniformLocations[n];if(i){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(i,e)}}};areUniformValuesEqual=(e,t)=>e===t?!0:Array.isArray(e)&&Array.isArray(t)&&e.length===t.length?e.every((e,n)=>this.areUniformValuesEqual(e,t[n])):!1;setUniformValues=e=>{Object.entries(e).forEach(([e,t])=>{let n=t;if(t instanceof HTMLImageElement&&(n=`${t.src.slice(0,200)}|${t.naturalWidth}x${t.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],n))return;this.uniformCache[e]=n;let r=this.uniformLocations[e];if(!r)console.warn(`Uniform location for ${e} not found`);else if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let n=null,i=null;if(t[0]!==void 0&&Array.isArray(t[0])){let r=t[0].length;if(t.every(e=>e.length===r))n=t.flat(),i=r;else{console.warn(`All child arrays must be the same length for ${e}`);return}}else n=t,i=n.length;switch(i){case 2:this.gl.uniform2fv(r,n);break;case 3:this.gl.uniform3fv(r,n);break;case 4:this.gl.uniform4fv(r,n);break;case 9:this.gl.uniformMatrix3fv(r,!1,n);break;case 16:this.gl.uniformMatrix4fv(r,!1,n);break;default:console.warn(`Unsupported uniform array length: ${i}`)}}else typeof t==`number`?this.gl.uniform1f(r,t):typeof t==`boolean`?this.gl.uniform1i(r,+!!t):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.renderUnlessAnimating()};setSpeed=(e=1)=>{this.speed=e,this.updateCurrentSpeed()};updateCurrentSpeed=()=>{this.setCurrentSpeed(this.ownerDocument.hidden||!this.isInViewport?0:this.speed)};setCurrentSpeed=e=>{this.currentSpeed=e,this.rafId===null&&e!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&e===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=I)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.renderUnlessAnimating()};renderUnlessAnimating=()=>{this.rafId===null&&this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.updateCurrentSpeed()};dispose=()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.gl.getExtension(`WEBGL_lose_context`)?.loseContext(),this.resizeObserver&&=(this.resizeObserver.disconnect(),null),this.intersectionObserver&&=(this.intersectionObserver.disconnect(),null),visualViewport?.removeEventListener(`resize`,this.handleVisualViewportChange),this.ownerDocument.removeEventListener(`visibilitychange`,this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}};function R(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error(`An error occurred compiling the shaders: `+e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function z(e,t,n){let r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),i=r?r.precision:null;i&&i<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,`precision highp float;`),n=n.replace(/precision\s+(lowp|mediump)\s+float/g,`precision highp float`).replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,`$1 highp $3`));let a=R(e,e.VERTEX_SHADER,t),o=R(e,e.FRAGMENT_SHADER,n);if(!a||!o)return null;let s=e.createProgram();return s?(e.attachShader(s,a),e.attachShader(s,o),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS)?(e.detachShader(s,a),e.detachShader(s,o),e.deleteShader(a),e.deleteShader(o),s):(console.error(`Unable to initialize the shader program: `+e.getProgramInfoLog(s)),e.deleteProgram(s),e.deleteShader(a),e.deleteShader(o),null)):null}var B=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function V(){let e=navigator.userAgent.toLowerCase();return e.includes(`safari`)&&!e.includes(`chrome`)&&!e.includes(`android`)}function H(e){let t=visualViewport?.scale??1,n=visualViewport?.width??window.innerWidth,r=window.innerWidth-e.documentElement.clientWidth,i=t*n+r,a=outerWidth/i,o=Math.round(100*a);return o%5==0?o/100:o===33?1/3:o===67?2/3:o===133?4/3:a}var U={fit:`contain`,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},W={none:0,contain:1,cover:2},G=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,ee=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,te=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,K={maxColorCount:10},ne=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[${K.maxColorCount}];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${G}
${ee}
${te}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + fract(float(i) / 3.) * .9;
  float c = .8 + fract(float(i + 1) / 4.);

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = v_objectUV;
  uv += .5;
  vec2 grainUV = uv * 1000.;

  float mixerGrain = 0.;
  if (u_grainMixer > 0.) {
    mixerGrain = .4 * u_grainMixer * (noise(grainUV, vec2(0.)) - .5);
  }

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., uv.y));
    uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., uv.x));
  }

  vec2 uvRotated = uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < ${K.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  if (u_grainOverlay > 0.) {
    float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
    grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
    grainOverlay = pow(grainOverlay, 1.3);

    float grainOverlayV = grainOverlay * 2. - 1.;
    vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
    float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
    grainOverlayStrength = pow(grainOverlayStrength, .8);
    color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

    opacity += .5 * grainOverlayStrength;
  }
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`;function re(e){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:J;if(typeof e!=`string`)return J;let t,n,r,i=1;if(e.startsWith(`#`))[t,n,r,i]=ie(e);else if(e.startsWith(`rgb`)){let a=ae(e);if(a===null)return J;[t,n,r,i]=a}else if(e.startsWith(`hsl`)){let a=oe(e);if(a===null)return J;[t,n,r,i]=se(a)}else return console.error(`Unsupported color format`,e),J;return[q(t,0,1),q(n,0,1),q(r,0,1),q(i,0,1)]}function ie(e){return e=e.replace(/^#/,``),(e.length===3||e.length===4)&&(e=e.split(``).map(e=>e+e).join(``)),e.length===6&&(e+=`ff`),/^[0-9a-f]{8}$/i.test(e)?[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255,parseInt(e.slice(6,8),16)/255]:(console.warn(`Invalid hex color`),J)}function ae(e){let t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`)/255,parseInt(t[2]??`0`)/255,parseInt(t[3]??`0`)/255,t[4]===void 0?1:parseFloat(t[4])]:null}function oe(e){let t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`),parseInt(t[2]??`0`),parseInt(t[3]??`0`),t[4]===void 0?1:parseFloat(t[4])]:null}function se(e){let[t,n,r,i]=e,a=t/360,o=n/100,s=r/100,c,l,u;if(n===0)c=l=u=s;else{let e=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),t=s<.5?s*(1+o):s+o-s*o,n=2*s-t;c=e(n,t,a+1/3),l=e(n,t,a),u=e(n,t,a-1/3)}return[c,l,u,i]}var q=(e,t,n)=>Math.min(Math.max(e,t),n),J=[.5,.5,.5,1];function ce(e){let t=E.useRef(void 0),n=E.useCallback(t=>{let n=e.map(e=>{if(e!=null){if(typeof e==`function`){let n=e,r=n(t);return typeof r==`function`?r:()=>{n(null)}}return e.current=t,()=>{e.current=null}}});return()=>{n.forEach(e=>e?.())}},e);return E.useMemo(()=>e.every(e=>e==null)?null:e=>{t.current&&=(t.current(),void 0),e!=null&&(t.current=n(e))},e)}function Y(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;let t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}async function X(e){let t={},n=[],r=e=>{try{return e.startsWith(`/`)||new URL(e),!0}catch{return!1}},i=e=>{try{return!e.startsWith(`/`)&&new URL(e,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(e).forEach(([e,a])=>{if(typeof a==`string`){let o=a||`data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`;if(!r(o)){console.warn(`Uniform "${e}" has invalid URL "${o}". Skipping image loading.`);return}let s=new Promise((n,r)=>{let a=new Image;i(o)&&(a.crossOrigin=`anonymous`),a.onload=()=>{Y(a),t[e]=a,n()},a.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${o}`),r()},a.src=o});n.push(s)}else if(a instanceof HTMLImageElement){let r=a.decode().then(()=>{Y(a),t[e]=a});n.push(r)}else t[e]=a}),await Promise.all(n),t}var Z=(0,E.forwardRef)(function({fragmentShader:e,uniforms:t,webGlContextAttributes:n,speed:r=0,frame:i=0,width:a,height:o,minPixelRatio:s,maxPixelCount:c,mipmaps:l,style:u,...d},f){let[p,m]=(0,E.useState)(!1),h=(0,E.useRef)(null),g=(0,E.useRef)(null),_=(0,E.useRef)(n);(0,E.useEffect)(()=>((async()=>{let n=await X(t);h.current&&!g.current&&(g.current=new L(h.current,e,n,_.current,r,i,s,c,l),m(!0))})(),()=>{g.current?.dispose(),g.current=null}),[e]),(0,E.useEffect)(()=>{let e=!1;return(async()=>{let n=await X(t);e||g.current?.setUniforms(n)})(),()=>{e=!0}},[t,p]),(0,E.useEffect)(()=>{g.current?.setSpeed(r)},[r,p]),(0,E.useEffect)(()=>{g.current?.setMaxPixelCount(c)},[c,p]),(0,E.useEffect)(()=>{g.current?.setMinPixelRatio(s)},[s,p]),(0,E.useEffect)(()=>{g.current?.setFrame(i)},[i,p]);let v=ce([h,f]);return(0,k.jsx)(`div`,{ref:v,style:a!==void 0||o!==void 0?{width:typeof a==`string`&&isNaN(+a)===!1?+a:a,height:typeof o==`string`&&isNaN(+o)===!1?+o:o,...u}:u,...d})});Z.displayName=`ShaderMount`;function le(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(n===`colors`){let n=Array.isArray(e.colors),r=Array.isArray(t.colors);if(!n||!r){if(Object.is(e.colors,t.colors)===!1)return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,n)=>e===t.colors?.[n]))return!1}else if(Object.is(e[n],t[n])===!1)return!1;return!0}var Q={name:`Default`,params:{...U,speed:1,frame:0,colors:[`#e0eaff`,`#241d9a`,`#f75092`,`#9f50d3`],distortion:.8,swirl:.1,grainMixer:0,grainOverlay:0}};({...U}),{...U},{...U};var ue=(0,E.memo)(function({speed:e=Q.params.speed,frame:t=Q.params.frame,colors:n=Q.params.colors,distortion:r=Q.params.distortion,swirl:i=Q.params.swirl,grainMixer:a=Q.params.grainMixer,grainOverlay:o=Q.params.grainOverlay,fit:s=Q.params.fit,rotation:c=Q.params.rotation,scale:l=Q.params.scale,originX:u=Q.params.originX,originY:d=Q.params.originY,offsetX:f=Q.params.offsetX,offsetY:p=Q.params.offsetY,worldWidth:m=Q.params.worldWidth,worldHeight:h=Q.params.worldHeight,...g}){let _={u_colors:n.map(re),u_colorsCount:n.length,u_distortion:r,u_swirl:i,u_grainMixer:a,u_grainOverlay:o,u_fit:W[s],u_rotation:c,u_scale:l,u_offsetX:f,u_offsetY:p,u_originX:u,u_originY:d,u_worldWidth:m,u_worldHeight:h};return(0,k.jsx)(Z,{...g,speed:e,frame:t,fragmentShader:ne,uniforms:_})},le);function de({colors:e}){return(0,k.jsx)(`div`,{className:`m-mesh`,"aria-hidden":!0,children:(0,k.jsx)(ue,{colors:e,speed:.06,distortion:.8,swirl:.3,style:{width:`100%`,height:`100%`}})})}var $=[`收藏不是囤积，是给将来的自己留一条线索。`,`先存下来，再决定它属于哪个项目。`,`好版式不吵，它只是把顺序排对了。`,`颜色是最快的记忆索引。`],fe=[{k:`time`,label:`时间`},{k:`color`,label:`颜色`},{k:`similar`,label:`像不像`}],pe=[{key:`排版`,desc:`标题、网格、留白`,captions:[`学它的标题阶梯`,`学它的单栏压印`,`学它的留白节奏`]},{key:`配色`,desc:`色相、明度、面积`,captions:[`学它的单色叠印`,`学它的旧纸色温`,`学它的冷暖对比`]},{key:`风格`,desc:`年代、材质、气质`,captions:[`学它的年代颗粒`,`学它的手写标注`,`学它的拼贴质感`]}],me=(e,t)=>{let n=Math.abs(e-t)%360;return n>180?360-n:n};function he({manifest:e,onOpen:t,onPending:n,platforms:r,onPlatforms:i,reduced:a}){let[o,c]=(0,E.useState)(`find`),[d,f]=(0,E.useState)(``),[p,m]=(0,E.useState)(!1),[h,g]=(0,E.useState)(`time`),[_,v]=(0,E.useState)(!1),[y,b]=(0,E.useState)(null),x=(0,E.useRef)(null),C=(0,E.useRef)(null),w=(0,E.useMemo)(()=>u(e,2,.91,.045),[e]),T=(0,E.useMemo)(()=>{let t=[];for(let n=0;n<4;n++){let r=e.cards.slice(),i=l(n+11);for(let e=r.length-1;e>0;e--){let t=Math.floor(i()*(e+1)),n=r[e];r[e]=r[t],r[t]=n}t.push(...r)}return t.slice(0,42)},[e]),A=(0,E.useMemo)(()=>{let t=new Map;for(let n of e.cards)t.set(O(n),(t.get(O(n))??0)+1);return t},[e]),M=(0,E.useMemo)(()=>{let e=T.slice();if(y!==null){let t=e=>e.hues.length?Math.min(...e.hues.map(e=>me(e,y))):999;e.sort((e,n)=>t(e)-t(n))}else h===`color`?e.sort((e,t)=>(e.hues[0]??0)-(t.hues[0]??0)):h===`time`?e.sort((e,t)=>t.id-e.id):e.sort((e,t)=>e.id*7919%101-t.id*7919%101);return e},[T,h,y]),N=(0,E.useMemo)(()=>M.filter(e=>r.size===0||r.has(O(e))),[M,r]);(0,E.useEffect)(()=>{if(!p||!x.current)return;let e=x.current.getBoundingClientRect().top+window.scrollY-60;window.scrollTo({top:e,behavior:`smooth`})},[p]),(0,E.useEffect)(()=>{if(!_)return;let e=e=>{C.current&&!C.current.contains(e.target)&&v(!1)};return document.addEventListener(`pointerdown`,e),()=>document.removeEventListener(`pointerdown`,e)},[_]);let F=e=>{f(e),m(!0)},I=()=>{m(!1),f(``)},L=e=>{let t=new Set(r);t.has(e)?t.delete(e):t.add(e),i(t)},R=e=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`img`,{src:e.src,alt:``,loading:`lazy`}),(0,k.jsx)(`span`,{className:`m-card-platform`,children:O(e)}),(0,k.jsxs)(`span`,{className:`m-card-meta`,children:[(0,k.jsxs)(`span`,{children:[O(e),` · `,String(e.id).padStart(3,`0`)]}),(0,k.jsxs)(`span`,{children:[e.w,`×`,e.h]})]})]}),z=(e,n,r)=>(0,k.jsx)(`button`,{type:`button`,className:`m-card`,onClick:()=>t(e),"aria-label":`打开收藏 ${String(e.id).padStart(3,`0`)}`,children:R(e)},`${e.id}-${r}-${n}`),B=(e,n,r)=>(0,k.jsxs)(`div`,{className:`m-ref-item`,children:[(0,k.jsx)(`button`,{type:`button`,className:`m-card`,onClick:()=>t(e),"aria-label":`打开参考 ${String(e.id).padStart(3,`0`)}`,children:R(e)}),(0,k.jsx)(`p`,{className:`m-ref-caption`,children:r})]},`${e.id}-ref-${n}`),V=e=>{let t=[];return e.forEach((e,n)=>{n>0&&n%9==0&&t.push((0,k.jsxs)(`div`,{className:`m-note-card`,children:[(0,k.jsx)(`p`,{children:$[n/9%$.length|0]}),(0,k.jsx)(`small`,{children:`收藏的旁注`})]},`note-${n}`)),n>0&&n%14==0&&t.push((0,k.jsxs)(`div`,{className:`m-palette-card`,children:[(0,k.jsx)(`div`,{className:`m-pal`,children:e.palette.slice(0,5).map(e=>(0,k.jsx)(`i`,{style:{background:e.hex}},e.hex))}),(0,k.jsx)(`small`,{children:`这张图的取色`})]},`palette-${n}`)),t.push(z(e,n,5))}),t},H=[0,1,2].map(e=>N.filter((t,n)=>n%3===e).slice(0,8));return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`section`,{className:`m-hero`,children:[(0,k.jsx)(j,{manifest:e,reduced:a}),(0,k.jsx)(de,{colors:[`#ffffff`,w[0]??`#f8eee9`,`#ffffff`,w[1]??`#f2f1ee`]}),(0,k.jsx)(`h1`,{className:`m-hero-title`,children:`I know I saved it`}),(0,k.jsx)(`div`,{className:`m-hero-capsule`,children:(0,k.jsx)(P,{mode:o,onMode:c,onSearch:F,hue:y,onHue:b})}),(0,k.jsx)(`p`,{className:`m-hero-subtitle`,children:`Nothing is lost that may be found.`})]}),(0,k.jsxs)(`section`,{className:`m-wall-wrap`,ref:x,children:[(0,k.jsxs)(`div`,{className:`m-controls`,children:[(0,k.jsx)(`span`,{className:`m-controls-label`,children:`排序`}),(0,k.jsx)(`div`,{className:`m-seg`,children:fe.map(e=>(0,k.jsx)(`button`,{type:`button`,className:h===e.k?`is-on`:``,onClick:()=>g(e.k),children:e.label},e.k))}),(0,k.jsxs)(`div`,{className:`m-filter-wrap`,ref:C,children:[(0,k.jsxs)(`button`,{type:`button`,className:`m-filter-btn`,"aria-expanded":_,onClick:()=>v(e=>!e),children:[(0,k.jsx)(s,{icon:S,size:14}),` 筛选`,r.size>0&&(0,k.jsx)(`span`,{className:`m-filter-count`,children:r.size})]}),_&&(0,k.jsxs)(`div`,{className:`m-filter-pop`,children:[(0,k.jsx)(`p`,{className:`m-filter-title`,children:`平台`}),D.map(e=>(0,k.jsxs)(`button`,{type:`button`,className:`m-filter-item ${r.has(e)?`is-on`:``}`,onClick:()=>L(e),children:[(0,k.jsx)(`i`,{}),(0,k.jsx)(`span`,{children:e}),(0,k.jsx)(`span`,{style:{marginLeft:`auto`,fontFamily:`var(--m-mono)`,fontSize:9,color:`var(--m-ink-3)`},children:A.get(e)??0})]},e)),(0,k.jsx)(`div`,{className:`m-filter-foot`,children:(0,k.jsx)(`button`,{type:`button`,onClick:()=>i(new Set),children:`全部平台`})})]})]}),y!==null&&(0,k.jsxs)(`button`,{type:`button`,className:`m-chip m-hue is-on`,onClick:()=>b(null),children:[(0,k.jsx)(`i`,{style:{background:`oklch(0.72 0.15 ${y})`}}),`色相 `,Math.round(y),`° ×`]}),(0,k.jsx)(`span`,{className:`m-spacer`}),(0,k.jsxs)(`button`,{type:`button`,className:`m-badge`,onClick:n,children:[(0,k.jsx)(`b`,{children:`12`}),` 张待确认`]})]}),p&&(0,k.jsxs)(`div`,{className:`m-result-head`,children:[(0,k.jsxs)(`h2`,{children:[o===`find`?`找图`:`要参考`,` · `,d||`全部`]}),(0,k.jsx)(`span`,{children:o===`find`?`${N.length} 张`:`三组参考`}),(0,k.jsx)(`button`,{type:`button`,onClick:I,children:`清除`})]}),N.length===0?(0,k.jsx)(`p`,{style:{color:`var(--m-ink-3)`,fontSize:13,padding:`40px 0`},children:`没有符合的图，换个平台或颜色试试。`}):p&&o===`ref`?(0,k.jsx)(`div`,{className:`m-ref-cols`,children:pe.map((e,t)=>(0,k.jsxs)(`div`,{className:`m-ref-col`,children:[(0,k.jsx)(`h3`,{children:e.key}),(0,k.jsx)(`p`,{children:e.desc}),(0,k.jsx)(`div`,{className:`m-ref-grid`,children:H[t].map((t,n)=>B(t,n,e.captions[n%e.captions.length]))})]},e.key))}):(0,k.jsx)(`div`,{className:`m-wall ${p?`m-wall-four`:``}`,children:p?N.slice(0,24).map((e,t)=>z(e,t,4)):V(N)})]})]})}function ge({open:e,onClose:t}){return(0,k.jsxs)(`div`,{className:`m-onboard ${e?`is-on`:``}`,role:`dialog`,"aria-modal":`true`,"aria-label":`使用教程`,children:[(0,k.jsx)(`div`,{className:`m-onboard-bg`,onClick:t}),(0,k.jsxs)(`div`,{className:`m-onboard-card`,children:[(0,k.jsx)(`button`,{type:`button`,className:`m-onboard-close`,"aria-label":`关闭教程`,onClick:t,children:(0,k.jsx)(s,{icon:o,size:16})}),(0,k.jsx)(`div`,{className:`m-onboard-hero`,children:(0,k.jsxs)(`div`,{className:`m-onboard-tiles`,children:[(0,k.jsx)(`span`,{className:`m-onboard-tile`,children:(0,k.jsx)(s,{icon:m,size:22,strokeWidth:1.5})}),(0,k.jsx)(`span`,{className:`m-onboard-tile`,children:(0,k.jsx)(s,{icon:i,size:22,strokeWidth:1.5})})]})}),(0,k.jsxs)(`div`,{className:`m-onboard-body`,children:[(0,k.jsx)(`h2`,{className:`m-onboard-title`,children:`先看一分钟，再开始找。`}),(0,k.jsx)(`p`,{className:`m-onboard-sub`,children:`四个动作，覆盖平时最常用的用法。`}),(0,k.jsxs)(`div`,{className:`m-onboard-steps`,children:[(0,k.jsxs)(`div`,{className:`m-onboard-step`,children:[(0,k.jsx)(`span`,{className:`m-onboard-icon`,children:(0,k.jsx)(s,{icon:m,size:20,strokeWidth:1.5})}),(0,k.jsx)(`strong`,{children:`找图`}),(0,k.jsx)(`span`,{children:`描述你记得的样子，或转动色环按颜色找。`})]}),(0,k.jsxs)(`div`,{className:`m-onboard-step`,children:[(0,k.jsx)(`span`,{className:`m-onboard-icon`,children:(0,k.jsx)(s,{icon:r,size:20,strokeWidth:1.5})}),(0,k.jsx)(`strong`,{children:`要参考`}),(0,k.jsx)(`span`,{children:`换成排版 / 配色 / 风格三列，每张图下写着学它什么。`})]}),(0,k.jsxs)(`div`,{className:`m-onboard-step`,children:[(0,k.jsx)(`span`,{className:`m-onboard-icon`,children:(0,k.jsx)(s,{icon:w,size:20,strokeWidth:1.5})}),(0,k.jsx)(`strong`,{children:`收藏`}),(0,k.jsx)(`span`,{children:`图片拖进页面就导入；点开大图看信息面板，标签随手改。`})]}),(0,k.jsxs)(`div`,{className:`m-onboard-step`,children:[(0,k.jsx)(`span`,{className:`m-onboard-icon`,children:(0,k.jsx)(s,{icon:v,size:20,strokeWidth:1.5})}),(0,k.jsx)(`strong`,{children:`项目`}),(0,k.jsx)(`span`,{children:`做项目时把图钉进去，从项目页打开参考小窗。`})]})]}),(0,k.jsxs)(`div`,{className:`m-onboard-foot`,children:[(0,k.jsx)(`button`,{type:`button`,className:`m-onboard-ghost`,onClick:t,children:`跳过`}),(0,k.jsx)(`button`,{type:`button`,className:`m-onboard-cta`,onClick:t,children:`开始找图`})]})]})]})]})}function _e({manifest:e,onOpen:t,onToast:n}){let r=(0,E.useMemo)(()=>[{id:`p1`,name:`品牌手册 · 2026 春`,note:`把古着海报的排版搬进手册`,items:d(e.cards,14)},{id:`p2`,name:`咖啡包装参考`,note:`牛皮纸、油墨、手写标签`,items:d(e.cards.slice(3),11)},{id:`p3`,name:`日式版式研究`,note:`竖排、留白、细线`,items:d(e.cards.slice(6),9)}],[e]),[i,a]=(0,E.useState)(r),[o,c]=(0,E.useState)(null),[l,u]=(0,E.useState)(``),[f,p]=(0,E.useState)([]),m=i.find(e=>e.id===o)??null,g=()=>{let t=l.trim();if(!t){n(`先写一句要做什么（演示）`);return}let r=d(e.cards,12),o={id:`p${Date.now()}`,name:t,note:t,items:r};a([o,...i]),p(r.slice(0,6)),u(``),n(`项目已创建 · 从收藏里推荐了 12 张`)};if(m){let e=d(m.items,18);return(0,k.jsxs)(`section`,{className:`m-page`,children:[(0,k.jsxs)(`button`,{type:`button`,className:`m-back`,onClick:()=>c(null),children:[(0,k.jsx)(s,{icon:h,size:14}),` 所有项目`]}),(0,k.jsxs)(`div`,{className:`m-page-head`,style:{marginTop:18},children:[(0,k.jsx)(`h1`,{children:m.name}),(0,k.jsx)(`span`,{className:`m-spacer`}),(0,k.jsxs)(`button`,{type:`button`,className:`m-btn`,onClick:()=>n(`参考小窗会单独开一个窗口（演示）`),children:[(0,k.jsx)(s,{icon:y,size:15}),` 打开参考小窗`]}),(0,k.jsxs)(`button`,{type:`button`,className:`m-btn m-ghost`,onClick:()=>n(`把图拖进项目就能钉进来（演示）`),children:[(0,k.jsx)(s,{icon:b,size:15}),` 钉图`]})]}),(0,k.jsxs)(`p`,{className:`m-page-sub`,children:[m.note,` · `,m.items.length,` 张钉选`]}),(0,k.jsx)(`div`,{className:`m-wall m-wall-three`,style:{marginTop:26},children:e.map((e,n)=>(0,k.jsxs)(`button`,{type:`button`,className:`m-card`,onClick:()=>t(e),"aria-label":`打开钉选 ${e.id}`,children:[(0,k.jsx)(`img`,{src:e.src,alt:``,loading:`lazy`}),(0,k.jsxs)(`span`,{className:`m-card-meta`,children:[(0,k.jsxs)(`span`,{children:[e.source,` · `,String(e.id).padStart(3,`0`)]}),(0,k.jsx)(`span`,{children:`钉选`})]})]},`${e.id}-${n}`))})]})}return(0,k.jsxs)(`section`,{className:`m-page`,children:[(0,k.jsxs)(`div`,{className:`m-page-head`,children:[(0,k.jsx)(`h1`,{children:`项目`}),(0,k.jsx)(`span`,{className:`m-spacer`}),(0,k.jsx)(`span`,{className:`m-status is-ok`,children:`3 个进行中`})]}),(0,k.jsx)(`p`,{className:`m-page-sub`,children:`做项目的时候才来这里。一个项目就是一组钉住的图，从这里打开参考小窗。`}),(0,k.jsxs)(`div`,{className:`m-newproject`,children:[(0,k.jsxs)(`div`,{className:`m-newproject-row`,children:[(0,k.jsx)(`input`,{value:l,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&g()},placeholder:`写一句要做什么：给一个咖啡品牌做手册，想要安静、纸张感`,"aria-label":`新项目描述`}),(0,k.jsxs)(`button`,{type:`button`,className:`m-btn m-primary`,onClick:g,children:[(0,k.jsx)(s,{icon:C,size:15}),` 创建项目`]})]}),f.length>0?(0,k.jsxs)(`div`,{className:`m-suggest`,children:[(0,k.jsx)(`span`,{children:`刚推荐`}),(0,k.jsx)(`div`,{className:`m-suggest-thumbs`,children:f.map(e=>(0,k.jsx)(`img`,{src:e.src,alt:``},e.id))})]}):(0,k.jsxs)(`div`,{className:`m-suggest`,children:[(0,k.jsx)(`span`,{children:`会推荐`}),(0,k.jsx)(`p`,{style:{fontSize:12,color:`var(--m-ink-3)`},children:`写一句话，马上从收藏里挑相关的图给你。`}),(0,k.jsx)(`div`,{className:`m-suggest-thumbs`,children:d(e.cards,6).map((e,t)=>(0,k.jsx)(`img`,{src:e.src,alt:``},`${e.id}-${t}`))})]})]}),(0,k.jsx)(`div`,{className:`m-folders`,children:i.map(e=>(0,k.jsxs)(`button`,{type:`button`,className:`m-folder`,onClick:()=>c(e.id),children:[(0,k.jsx)(`div`,{className:`m-folder-previews`,children:e.items.slice(0,3).map((e,t)=>(0,k.jsx)(`img`,{src:e.src,alt:``,loading:`lazy`},`${e.id}-${t}`))}),(0,k.jsx)(`div`,{className:`m-folder-name`,children:e.name}),(0,k.jsxs)(`div`,{className:`m-folder-meta`,children:[(0,k.jsx)(s,{icon:v,size:10}),` `,e.items.length,` 张钉选 · 昨天更新`]})]},e.id))})]})}var ve=[{name:`小红书`,status:`冷却中`,cool:!0},{name:`Pinterest`,status:`已连接`,ok:!0},{name:`站酷`,status:`已连接`,ok:!0},{name:`花瓣`,status:`未连接`}];function ye({open:e,onClose:t,onToast:n,reduce:r,onReduce:i}){let[c,l]=(0,E.useState)(50),[u,d]=(0,E.useState)(!1);return(0,k.jsxs)(`aside`,{className:`m-drawer ${e?`is-on`:``}`,"aria-hidden":!e,children:[(0,k.jsxs)(`div`,{className:`m-drawer-head`,children:[(0,k.jsx)(`h2`,{children:`设置`}),(0,k.jsx)(`span`,{className:`m-spacer`}),(0,k.jsx)(`button`,{type:`button`,className:`m-close`,style:{position:`static`},"aria-label":`关闭设置`,onClick:t,children:(0,k.jsx)(s,{icon:o,size:16})})]}),(0,k.jsxs)(`div`,{className:`m-drawer-body`,children:[(0,k.jsxs)(`div`,{className:`m-field`,children:[(0,k.jsx)(`label`,{children:`外观`}),(0,k.jsxs)(`div`,{className:`m-row`,children:[(0,k.jsxs)(`div`,{className:`m-row-main`,children:[(0,k.jsx)(`b`,{children:`减少动效`}),(0,k.jsx)(`span`,{children:`关掉滑动和弹出，只保留淡入`})]}),(0,k.jsx)(`button`,{type:`button`,className:`m-switch ${r?`is-on`:``}`,"aria-label":`减少动效`,onClick:()=>i(!r)})]})]}),(0,k.jsxs)(`div`,{className:`m-field`,children:[(0,k.jsx)(`label`,{children:`API Key`}),(0,k.jsx)(`input`,{type:`password`,defaultValue:`sk-demo-0000000000000000`,"aria-label":`API Key`}),(0,k.jsxs)(`p`,{className:`m-hint`,children:[`用量计入你自己的账号，数据只保存在本机。验证状态：`,(0,k.jsx)(`span`,{className:`m-status is-ok`,children:`可用`})]})]}),(0,k.jsxs)(`div`,{className:`m-field`,children:[(0,k.jsx)(`label`,{children:`自动导入文件夹`}),(0,k.jsxs)(`div`,{className:`m-row`,children:[(0,k.jsxs)(`div`,{className:`m-row-main`,children:[(0,k.jsx)(`b`,{children:`D:\\Pictures\\小红书同步`}),(0,k.jsx)(`span`,{children:`上次导入 12 分钟前 · 累计 231 张`})]}),(0,k.jsx)(`button`,{type:`button`,className:`m-switch ${u?``:`is-on`}`,"aria-label":`暂停监听`,onClick:()=>{d(e=>!e),n(u?`恢复监听（演示）`:`已暂停监听（演示）`)}})]}),(0,k.jsxs)(`div`,{className:`m-row`,children:[(0,k.jsxs)(`div`,{className:`m-row-main`,children:[(0,k.jsx)(`b`,{children:`D:\\CC-Work\\给克的\\参考\\主界面`}),(0,k.jsx)(`span`,{children:`上次导入 2 小时前 · 累计 48 张`})]}),(0,k.jsx)(`button`,{type:`button`,className:`m-switch is-on`,"aria-label":`暂停监听`})]}),(0,k.jsxs)(`button`,{type:`button`,className:`m-btn m-ghost`,style:{alignSelf:`flex-start`,marginTop:4},onClick:()=>n(`演示：这里会打开选文件夹对话框`),children:[(0,k.jsx)(s,{icon:a,size:15}),` 添加文件夹`]}),(0,k.jsx)(`p`,{className:`m-hint`,children:`只监听你明确添加的文件夹；新图片会走本地导入，不删除、不移动源文件。`})]}),(0,k.jsxs)(`div`,{className:`m-field`,children:[(0,k.jsx)(`label`,{children:`每天自动分析上限`}),(0,k.jsx)(`input`,{type:`number`,min:0,max:500,value:c,"aria-label":`每天自动分析上限`,onChange:e=>l(Number(e.target.value)),style:{width:120}}),(0,k.jsx)(`p`,{className:`m-hint`,children:`超过上限的图仍然会导入，只是不自动分析；第二天恢复，或在素材库点“现在分析”。`})]}),(0,k.jsxs)(`div`,{className:`m-field`,children:[(0,k.jsx)(`label`,{children:`平台连接`}),ve.map(e=>(0,k.jsxs)(`div`,{className:`m-row`,children:[(0,k.jsxs)(`div`,{className:`m-row-main`,children:[(0,k.jsx)(`b`,{children:e.name}),(0,k.jsx)(`span`,{children:e.ok?`可同步`:e.cool?`同步冷却中，约 2 小时后恢复`:`未连接`})]}),(0,k.jsx)(`span`,{className:`m-status ${e.ok?`is-ok`:e.cool?`is-cool`:``}`,children:e.status})]},e.name))]}),(0,k.jsx)(`button`,{type:`button`,className:`m-btn m-primary`,onClick:()=>n(`设置已保存（演示）`),children:`保存设置`})]})]})}function be(){let e=c(),[t,n]=(0,E.useState)(`library`),[i,a]=(0,E.useState)(null),[l,u]=(0,E.useState)(!1),[f,p]=(0,E.useState)(!1),[m,h]=(0,E.useState)(!1),[g,_]=(0,E.useState)(null),[b,S]=(0,E.useState)(!1),[C,w]=(0,E.useState)(!1),[O,j]=(0,E.useState)(new Set),[M,N]=(0,E.useState)(new Set),[P,F]=(0,E.useState)(!0),I=(0,E.useRef)(null),L=(0,E.useRef)(null),R=e=>{_(e),L.current&&window.clearTimeout(L.current),L.current=window.setTimeout(()=>_(null),2400)};if((0,E.useEffect)(()=>{let e=()=>S(window.scrollY>80);return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,E.useEffect)(()=>{t===`projects`&&window.scrollTo(0,0)},[t]),e===null)return(0,k.jsx)(`div`,{className:`m-app`});if(e===`missing`)return(0,k.jsx)(`div`,{className:`m-app`,style:{display:`grid`,placeItems:`center`,minHeight:`100vh`},children:(0,k.jsx)(`p`,{style:{fontFamily:`var(--m-mono)`,fontSize:12,color:`var(--m-ink-3)`},children:`没有找到展示图片：先运行 backend/.venv/Scripts/python tools/lab_show_assets.py`})});let z=e=>{let t=new Set(M);t.has(e)?t.delete(e):t.add(e),N(t)},B=d(e.cards,12),V=[{k:`library`,label:`素材库`,icon:(0,k.jsx)(s,{icon:r,size:20,strokeWidth:1.5}),on:t===`library`,act:()=>n(`library`)},{k:`projects`,label:`项目`,icon:(0,k.jsx)(s,{icon:v,size:20,strokeWidth:1.5}),on:t===`projects`,act:()=>n(`projects`)},{k:`pip`,label:`小窗`,icon:(0,k.jsx)(s,{icon:y,size:20,strokeWidth:1.5}),on:!1,act:()=>R(`参考小窗会单独开一个窗口（演示）`)},{k:`settings`,label:`设置`,icon:(0,k.jsx)(s,{icon:x,size:20,strokeWidth:1.5}),on:!1,act:()=>p(!0)}];return(0,k.jsxs)(`div`,{className:`m-app ${m?`m-reduce`:``}`,style:{position:`relative`},onDragOver:e=>{e.preventDefault(),w(!0)},onDragLeave:e=>{e.currentTarget===e.target&&w(!1)},onDrop:e=>{e.preventDefault(),w(!1),R(`松手即导入：收到 ${e.dataTransfer.files.length||1} 张（演示）`)},children:[(0,k.jsx)(`div`,{className:`m-grain`}),(0,k.jsxs)(`header`,{className:`m-topbar ${t===`projects`||b?`is-solid`:``}`,children:[(0,k.jsx)(`span`,{className:`m-count`,children:`697 张收藏 · 112 张视觉参考`}),(0,k.jsx)(`span`,{className:`m-spacer`}),(0,k.jsxs)(`div`,{className:`m-toplinks`,children:[D.filter(e=>e!==`本地`).map(e=>(0,k.jsx)(`button`,{type:`button`,className:`m-toplink ${M.has(e)?`is-on`:``}`,onClick:()=>z(e),children:e},e)),(0,k.jsx)(`button`,{type:`button`,className:`m-toplink`,onClick:()=>R(`只看视觉参考（演示）`),children:`Visual ref`})]}),(0,k.jsxs)(`button`,{type:`button`,className:`m-btn m-ghost`,onClick:()=>I.current?.click(),children:[(0,k.jsx)(s,{icon:T,size:14}),` 导入`]})]}),(0,k.jsx)(`input`,{ref:I,type:`file`,accept:`image/*`,multiple:!0,hidden:!0,onChange:e=>{R(`选到 ${e.target.files?.length??0} 个文件，正式版走本地导入（演示）`),e.target.value=``}}),t===`library`?(0,k.jsx)(he,{manifest:e,onOpen:a,onPending:()=>{j(new Set),u(!0)},platforms:M,onPlatforms:N,reduced:m}):(0,k.jsx)(_e,{manifest:e,onOpen:a,onToast:R}),(0,k.jsx)(`nav`,{className:`m-dock`,"aria-label":`主导航`,children:V.map(e=>(0,k.jsxs)(`button`,{type:`button`,className:e.on?`is-on`:``,onClick:e.act,title:e.label,children:[e.icon,(0,k.jsx)(`span`,{className:`m-dock-label`,children:e.label})]},e.k))}),(0,k.jsx)(ge,{open:P,onClose:()=>F(!1)}),(0,k.jsx)(A,{item:i,onClose:()=>a(null),onToast:R},i?i.id:`closed`),(0,k.jsx)(ye,{open:f,onClose:()=>p(!1),onToast:R,reduce:m,onReduce:h}),(0,k.jsxs)(`div`,{className:`m-modal ${l?`is-on`:``}`,children:[(0,k.jsx)(`div`,{className:`m-modal-bg`,onClick:()=>u(!1)}),(0,k.jsxs)(`div`,{className:`m-modal-panel`,children:[(0,k.jsxs)(`div`,{className:`m-modal-head`,children:[(0,k.jsx)(`h2`,{children:`待确认`}),(0,k.jsx)(`span`,{children:`AI 拿不准是不是视觉参考的图 · 12 张`}),(0,k.jsx)(`span`,{className:`m-spacer`}),(0,k.jsx)(`button`,{type:`button`,className:`m-close`,style:{position:`static`},"aria-label":`关闭`,onClick:()=>u(!1),children:(0,k.jsx)(s,{icon:o,size:16})})]}),(0,k.jsx)(`div`,{className:`m-pending-grid`,children:B.map((e,t)=>{let n=O.has(t);return(0,k.jsxs)(`button`,{type:`button`,className:`m-pending-item ${n?`is-keep`:``}`,onClick:()=>{let e=new Set(O);e.has(t)?e.delete(t):e.add(t),j(e)},children:[(0,k.jsx)(`img`,{src:e.src,alt:``,loading:`lazy`}),n&&(0,k.jsx)(`b`,{children:`✓`})]},`${e.id}-${t}`)})}),(0,k.jsxs)(`div`,{className:`m-modal-foot`,children:[(0,k.jsx)(`span`,{children:`点一下选中，再点取消。保留的会进视觉参考。`}),(0,k.jsx)(`span`,{className:`m-spacer`}),(0,k.jsxs)(`button`,{type:`button`,className:`m-btn m-primary`,onClick:()=>{R(`已保留 ${O.size} 张（演示）`),u(!1)},children:[`保留 `,O.size,` 张`]})]})]})]}),(0,k.jsx)(`div`,{className:`m-drop ${C?`is-on`:``}`,children:(0,k.jsx)(`p`,{children:`松手，导入到收藏`})}),(0,k.jsx)(`div`,{className:`m-toast ${g?`is-on`:``}`,children:g})]})}export{be as default};