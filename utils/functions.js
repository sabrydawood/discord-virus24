const chalk = require("chalk");
module.exports = {
  
  error(message){
const e = new Error();
  e.message = message;
//process.exit();
 console.log(`${chalk.red('Error Message')} : ${chalk.red.bgBlue(message)}`)

console.log(`${chalk.red('Error Code')} : ${chalk.yellow(e.stack.substr(e) )}`)
 
},
    formatVariable(prefix, variable){
        const formattedVariable = variable.toLowerCase()
        .split("-").map((word) => word.charAt(0).toUpperCase()+word.substr(1, word.length).toLowerCase()).join("");
        return prefix+formattedVariable;

    },
math(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function (item) {
    return num >= item.value;
  })
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
},

  
  numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

    applyText(canvas, text, defaultFontSize, width, font){
        const ctx = canvas.getContext("2d");
        do {
  ctx.font = `${(defaultFontSize -= 1)}px ${font}`;
        } while (ctx.measureText(text).width > width);
        return ctx.font;
    },
textCircle(canvas,text,x,y,radius,space,top){
const ctx = canvas.getContext("2d");
   space = space || 0;
var numRadsPerLetter = (Math.PI - space * 2) / text.length;
ctx.save();
ctx.translate(x,y);
var k = (top) ? 1 : -1; 
ctx.rotate(-k * ((Math.PI - numRadsPerLetter) / 2 - space));
for(var i=0;i<text.length;i++){
ctx.save();
ctx.rotate(k*i*(numRadsPerLetter));
ctx.textAlign = "center";
ctx.textBaseline = (!top) ? "top" : "bottom";
ctx.fillText(text[i],0,-k*(radius));
           }
ctx.restore();
},

 roundRect(canvas,x, y, w, h, radius, lineWidth, color, fill)
{
  var ctx = canvas.getContext("2d");
  var r = x + w;
  var b = y + h;
  ctx.beginPath();
  ctx.strokeStyle=color;
  ctx.lineWidth=lineWidth ;
  ctx.moveTo(x+radius, y);
  ctx.lineTo(r-radius, y);
  ctx.quadraticCurveTo(r, y, r, y+radius);
  ctx.lineTo(r, y+h-radius);
  ctx.quadraticCurveTo(r, b, r-radius, b);
  ctx.lineTo(x+radius, b);
  ctx.quadraticCurveTo(x, b, x, b-radius);
  ctx.lineTo(x, y+radius);
  ctx.quadraticCurveTo(x, y, x+radius, y);
    ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = fill;
  ctx.fill();

},
 roundImage(canvas,x, y, w, h, radius, lineWidth, img)
{
  var ctx = canvas.getContext("2d");
  var r = x + w;
  var b = y + h;
  ctx.beginPath();
  ctx.lineWidth=lineWidth ;
  ctx.moveTo(x+radius, y);
  ctx.lineTo(r-radius, y);
  ctx.quadraticCurveTo(r, y, r, y+radius);
  ctx.lineTo(r, y+h-radius);
  ctx.quadraticCurveTo(r, b, r-radius, b);
  ctx.lineTo(x+radius, b);
  ctx.quadraticCurveTo(x, b, x, b-radius);
  ctx.lineTo(x, y+radius);
  ctx.quadraticCurveTo(x, y, x+radius, y);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(img,x, y, w, h);
  ctx.restore();
},
     streamToArray(stream) {
		if (!stream.readable) return Promise.resolve([]);
		return new Promise((resolve, reject) => {
			const array = [];
			function onData(data) {
				array.push(data);
			}
			function onEnd(error) {
				if (error) reject(error);
				else resolve(array);
				cleanup();
			}
			function onClose() {
				resolve(array);
				cleanup();
			}
			function cleanup() {
			stream.removeListener('data', onData);
stream.removeListener('end', onEnd);
stream.removeListener('error', onEnd);
stream.removeListener('close', onClose);
			}
			stream.on('data', onData);
			stream.on('end', onEnd);
			stream.on('error', onEnd);
			stream.on('close', onClose);
		});
    },
  
	 drawImageWithTint(ctx, image, color, x, y, width, height) {
  		const { fillStyle, globalAlpha } = ctx;
// var ctx = canvas.getContext("2d");
		ctx.fillStyle = color;
		ctx.drawImage(image, x, y, width, height);
		ctx.globalAlpha = 0.5;
		ctx.fillRect(x, y, width, height);
		ctx.fillStyle = fillStyle;
		ctx.globalAlpha = globalAlpha;
	},
	centerImagePart(data, maxWidth, maxHeight, widthOffset, heightOffest) {
		let { width, height } = data;
		if (width > maxWidth) {
			const ratio = maxWidth / width;
			width = maxWidth;
			height *= ratio;
		}
		if (height > maxHeight) {
			const ratio = maxHeight / height;
			height = maxHeight;
			width *= ratio;
		}
		const x = widthOffset + ((maxWidth / 2) - (width / 2));
		const y = heightOffest + ((maxHeight / 2) - (height / 2));
		return { x, y, width, height };
	}





  
};