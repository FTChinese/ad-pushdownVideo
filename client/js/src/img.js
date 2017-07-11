class Adimg {
  constructor(root) {
    /**
     * @param root: TYPE Object. The root div of a Ad Banner Pic, concluding all components of it.
     */
    if(root instanceof HTMLElement) {
      this.root = root;
    } else {
      this.root = document.getElementById(root);
      console.log(this.root);
    }
    
    if(this.root.querySelector("#openBtn") instanceof HTMLElement) {
      this.open = this.root.querySelector("#openBtn");
    }
    if(this.root.querySelector("#bannerImg") instanceof HTMLElement) {
      this.img = this.root.querySelector("#bannerImg");
    }
    /*
    if(window.parent && window.parent.parent) {
      console.log('window.parent'+window.parent);
      console.log('window.parent.parent'+window.parent.parent);
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
    this.autoOpen();
    this.clickToOpen();
    */
  }
  /*
  pushDownToOpen() {
    const videoSection = document.getElementById("videoSection");
    const videoPostPic = document.getElementById("postPic");
    const imgSection = this.root;
    videoSection.classList.remove("close");
    videoSection.classList.add("open");
    videoSection.style.height ="90px";
    videoSection.style.display="block";
    videoPostPic.style.display="block";
    if(this.innerIframe && this.outerIframe) {
      this.innerIframe.style.height ="90px";
      this.outerIframe.style.height ="90px";
      this.innerIframe.classList.remove("close");
      this.innerIframe.classList.add("open");
      this.outerIframe.classList.remove("close");
      this.outerIframe.classList.add("open");
    }
    
    imgSection.style.display="none";
    const video = videoSection.querySelector("#adVideo");

    setTimeout(() => {
      videoPostPic.style.display="none";
      videoSection.classList.remove("open");
      videoSection.style.height="400px";
      if(this.innerIframe && this.outerIframe) {
        this.innerIframe.style.height ="400px";
        this.outerIframe.style.height ="400px";
        this.innerIframe.classList.remove("open");
        this.outerIframe.classList.remove("open");
      }
      
      if(video instanceof HTMLElement) {
        video.play();
      }
    }, 2000);

    
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
    this.open.addEventListener("click",this.pushDownToOpen,false);
  }
  */
}

export default Adimg;