import './style.css'
import { fabric } from "fabric";

document.querySelector('#app').innerHTML = `
  <div>
    <canvas id="canvas" height="300" width="500"></canvas>
    <p class="read-the-docs">
      FabricJS is a powerful and simple JavaScript graphics library.
      <a href="http://fabricjs.com/docs" target="_blank">Read the docs</a> to learn more.
    </p>
    <div id="svg-container"></div>
  </div>
`
var canvas = new fabric.Canvas('canvas');

aardio.OpenPDF();

var svg=await aardio.GetSVG(1);
let svgContainer = document.getElementById('svg-container');
svgContainer.innerHTML = svg;

fabric.loadSVGFromString(svg, (objects) => {
  // 先进行 组合成组
  const group1 = new fabric.Group(objects)
  canvas.add(group1)
  canvas.setActiveObject(group1)
  canvas.getActiveObject().toActiveSelection();
  canvas.discardActiveObject()
  canvas.renderAll()
})

//https://blog.csdn.net/guoqiankunmiss/article/details/109739282

