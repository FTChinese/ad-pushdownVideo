class Advideo {
  constructor(root) {
    /**
     * @param elems: TYPE Object. The root div of a video, concluding all components for one ad video.
     */
    if(root instanceof HTMLElement) {
      this.root = root;
    } else {
      this.root = document.getElementById(root);
      console.log(this.root);
    }

    if(this.root.querySelector('#adVideo') instanceof HTMLElement) {
      this.video = this.root.querySelector('#adVideo');
    }
    if(this.root.querySelector('#pauseBtn') instanceof HTMLElement) {
      this.pause = this.root.querySelector('#pauseBtn');
    }

    if(this.root.querySelector('#playBtn') instanceof HTMLElement) {
      this.play = this.root.querySelector('#playBtn');
    }

    if(this.root.querySelector('#closeBtn') instanceof HTMLElement) {
      this.close = this.root.querySelector('#closeBtn');
    }

    this.clickToPause();
    this.clickToPlay();
    this.clickToClose();
    this.autoCloseAtPlayEnd();
  } 

  clickToClose() {
    this.close.addEventListener('click',() => {
      setTimeout(()=>{
        this.root.style.display='none';
        this.root.classList.remove('close');
        document.getElementById('imgSection').style.display='block';
      },2000);
      this.root.classList.add('close');
    })
  }
  
  autoCloseAtPlayEnd() {
    this.video.addEventListener('ended', () => {
      setTimeout(()=>{
        this.root.style.display='none';
        document.getElementById('imgSection').style.display='block';
      },2000);
      this.root.classList.add('close');
    }, false)
  }
  clickToPause() {
    this.pause.addEventListener('click', () => {
      console.log(this.video);
      this.video.pause();
      this.pause.style.display = 'none';
      this.play.style.display = 'block';
    }, false)
  }

  clickToPlay() {
    this.play.addEventListener('click',() => {
      this.video.play();
      this.play.style.display = 'none';
      this.pause.style.display = 'block';
    }, false);
  }

  

}

export default Advideo;