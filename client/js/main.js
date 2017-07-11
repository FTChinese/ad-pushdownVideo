import Adimg from "./src/img.js";
import Advideo from "./src/video.js";
import Switch from "./src/switch.js";

const imgObj = new Adimg("imgSection");
const videoObj = new Advideo("videoSection");

new Switch(imgObj, videoObj,"banner0Inner","banner0");