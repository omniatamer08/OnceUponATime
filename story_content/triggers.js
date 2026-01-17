function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aK7db3fK5N":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6eorhVZNd51');
const duration = 750;
const easing = 'ease-out';
const id = '6lzHI4Di6xg';
const pulseAmount = 0.07;
const delay = 16521;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
