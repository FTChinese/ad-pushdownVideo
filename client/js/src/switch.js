import {docCookies} from "./helper.js";

class Switch {
  constructor(imgObj, videoObj, innerIframeId, outerIframeId) {
    this.imgObj = imgObj;
    this.videoObj = videoObj;

    
    if(window.parent && window.parent.parent) {
      console.log('window.parent'+window.parent);
      console.log('window.parent.parent'+window.parent.parent);
      this.injectCssToParents();
      var innerIframe = window.parent.document.getElementById(innerIframeId);
      var outerIframe = window.parent.parent.document.getElementById(outerIframeId);
      if(innerIframe && outerIframe) {
        console.log('innerIframe');
        console.log('outerIframe');
        this.innerIframe = innerIframe;
        this.outerIframe = outerIframe;
      }
    }
    if(this.innerIframe && this.outerIframe) {
       console.log(this.innerIframe);
       console.log(this.outerIframe);
       this.innerIframe.style.height ="90px";
       this.outerIframe.style.height ="90px";
       
    }
    

    this.pushDownToOpen = this.pushDownToOpen.bind(this);
    this.pullUpToClose = this.pullUpToClose.bind(this);
    
    this.autoOpen();
    this.clickToOpen();
    this.autoClose();
    this.clickToClose();
  }
  injectCssToParents() {
    const innerIframeWindowHead = window.parent.document.getElementsByTagName("head")[0];
    console.log(innerIframeWindowHead);
    const outerIframeWindowHead = window.parent.parent.document.getElementsByTagName("head")[0];
    console.log(outerIframeWindowHead);
    const switchStyle = document.createElement("style");
    switchStyle.innerHTML = ".pullup-close{-webkit-animation:shrinkToClose 1s linear;-moz-animation:shrinkToClose 1s linear;-o-animation:shrinkToClose 1s linear;animation:shrinkToClose 1s linear}.pushdown-open{-webkit-animation:pushdownToOpen 1s linear;-moz-animation:pushdownToOpen 1s linear;-o-animation:pushdownToOpen 1s linear;animation:pushdownToOpen 1s linear}@-webkit-keyframes shrinkToClose{from{width:969px;height:400px}to{width:969px;height:90px}}@-moz-keyframes shrinkToClose{from{width:969px;height:400px}to{width:969px;height:90px}}@-o-keyframes shrinkToClose{from{width:969px;height:400px}to{width:969px;height:90px}}@keyframes shrinkToClose{from{width:969px;height:400px}to{width:969px;height:90px}}@-webkit-keyframes pushdownToOpen{from{width:969px;height:90px}to{width:969px;height:400px}}@-moz-keyframes pushdownToOpen{from{width:969px;height:90px}to{width:969px;height:400px}}@-o-keyframes pushdownToOpen{from{width:969px;height:90px}to{width:969px;height:400px}}@keyframes pushdownToOpen{from{width:969px;height:90px}to{width:969px;height:400px}}";
    innerIframeWindowHead.append(switchStyle);
    outerIframeWindowHead.append(switchStyle);
  }
  pushDownToOpen() {
    const videoSection = this.videoObj.root;
    const videoPostPic = this.videoObj.postPic;
    const video = this.videoObj.video;
    const imgSection = this.imgObj.root;
    videoSection.classList.remove("pullup-close");
    videoSection.classList.add("pushdown-open");
    videoSection.style.height ="90px";
    videoSection.style.display="block";
    videoPostPic.style.display="block";
    
    if(this.innerIframe && this.outerIframe) {
      this.innerIframe.style.height ="90px";
      this.outerIframe.style.height ="90px";
      this.innerIframe.classList.remove("pullup-close");
      this.innerIframe.classList.add("pushdown-open");
      this.outerIframe.classList.remove("pullup-close");
      this.outerIframe.classList.add("pushdown-open");
    }
    
    imgSection.style.display="none";
    setTimeout(() => {
      videoPostPic.style.display="none";
      videoSection.classList.remove("pushdown-open");
      videoSection.style.height="400px";
      
      if(this.innerIframe && this.outerIframe) {
        this.innerIframe.style.height ="400px";
        this.outerIframe.style.height ="400px";
        this.innerIframe.classList.remove("pushdown-open");
        this.outerIframe.classList.remove("pushdown-open");
      }
      
      if(video instanceof HTMLElement) {
        video.play();
      }
    }, 1000);

    
  }
  
  pullUpToClose() {
    this.videoObj.root.classList.add("pullup-close");
    if(this.innerIframe && this.outerIframe) {
      this.innerIframe.style.height ="400px";
      this.outerIframe.style.height ="400px";
      this.innerIframe.classList.remove("pushdown-open");
      this.innerIframe.classList.add("pullup-close");
      this.outerIframe.classList.remove("pushdown-open");
      this.outerIframe.classList.add("pullup-close");
    }
    
    setTimeout(()=>{
      this.videoObj.root.style.display="none";
      this.videoObj.root.classList.remove("pullup-close");
      this.videoObj.video.currentTime = 0;
      this.videoObj.play.style.display = "none";
      this.videoObj.pause.style.display = "block";
    
      this.imgObj.root.style.display="block";

      if(this.innerIframe && this.outerIframe) {
        this.innerIframe.style.height ="90px";
        this.outerIframe.style.height ="90px";
        this.innerIframe.classList.remove("pullup-close");
        this.outerIframe.classList.remove("pullup-close");
      }
  
    },1000);
    
}
  

  autoOpen() {
    let userCookie = docCookies.getItem("pushdownAd");
  
    if(!userCookie) {
      window.addEventListener("load", this.pushDownToOpen, false);

      //自动播放后设置cookie
      let expiredTime = new Date();
      expiredTime.setTime(expiredTime.getTime()+24*60*60*1000);
      docCookies.setItem("pushdownAd","hasLoaded",expiredTime);
    }
  }

  clickToOpen() {
    this.imgObj.open.addEventListener("click",this.pushDownToOpen,false);
  }

  clickToClose() {
    const close = this.videoObj.close;
    
    close.addEventListener("click", this.pullUpToClose, false)
  }
  
  autoClose() {
    const video = this.videoObj.video;
    video.addEventListener("ended", this.pullUpToClose, false)
  }
    /*
      () => {
      setTimeout(()=>{
        this.videoObj.root.style.display="none";
        this.imgObj.style.display="block";
      },2000);
      this.videoObj.root.classList.add("close");
    },*/
}

export default Switch;