import {docCookies} from './helper.js';

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
    
    if(this.root.querySelector('#openBtn') instanceof HTMLElement) {
      this.open = this.root.querySelector('#openBtn');
    }
    if(this.root.querySelector('#bannerImg') instanceof HTMLElement) {
      this.img = this.root.querySelector('#bannerImg');
    }

    this.pushDownToOpen = this.pushDownToOpen.bind(this);
    this.autoOpen();
    this.clickToOpen();
  }

  pushDownToOpen() {
    const videoSection = document.getElementById('videoSection');
    const imgSection = this.root;
    videoSection.classList.remove('close');
    videoSection.classList.add('open');
    videoSection.style.height ='90px';
    videoSection.style.display='block';
    imgSection.style.display='none';
    const video = videoSection.querySelector('#adVideo');
    
    setTimeout(() => {
      videoSection.classList.remove('open');
      videoSection.style.height='400px';
      videoSection.style.display='block';
      if(video instanceof HTMLElement) {
        video.currentTime = 0;
        video.play();
      }
    }, 2000);
  }

  autoOpen() {
    const userCookie = docCookies.getItem('pushdownAd');
    console.log(userCookie);
    //if(userCookie === null) {
      this.img.addEventListener('load', this.pushDownToOpen,false);
      docCookies.setItem('pushdownAd','hasLoaded');
    //}
  }

  clickToOpen() {
    this.open.addEventListener('click',this.pushDownToOpen,false);
  }
}

export default Adimg;