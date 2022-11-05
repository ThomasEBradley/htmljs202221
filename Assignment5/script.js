var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d")

ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth = "5px"
ctx.fillRect(85,302,100,100)
ctx.strokeRect(85,302,100,100)

ctx.beginPath()
ctx.strokeStyle = "rgb(255,0,0)"
ctx.moveTo(85,682);
ctx.lineTo(278,549);
ctx.stroke();

ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "red"
ctx.lineWidth = "5px"
ctx.beginPath()
ctx.arc(385,442,66,0,7)
ctx.closePath()
ctx.fill()
ctx.stroke()

ctx.beginPath()
ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff"
ctx.moveTo(558,309)
ctx.lineTo(667,284)
ctx.lineTo(724,380)
ctx.lineTo(651,465)
ctx.lineTo(548,421)
ctx.closePath()
ctx.stroke()
ctx.fill()

ctx.beginPath()
ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "rgb(32,32,32)"
ctx.moveTo(636,497)
ctx.lineTo(668,554)
ctx.lineTo(733,567)
ctx.lineTo(688,615)
ctx.lineTo(696,681)
ctx.lineTo(636,653)
ctx.lineTo(576,681)
ctx.lineTo(583,615)
ctx.lineTo(538,567)
ctx.lineTo(604,554)
ctx.closePath()
ctx.stroke()
ctx.fill()
