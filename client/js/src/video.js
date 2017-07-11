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

    if(this.root.querySelector("#adVideo") instanceof HTMLElement) {
      this.video = this.root.querySelector("#adVideo");
    }

    if(this.root.querySelector("#postPic") instanceof HTMLElement) {
      this.postPic = this.root.querySelector("#postPic");
    }
    if(this.root.querySelector("#pauseBtn") instanceof HTMLElement) {
      this.pause = this.root.querySelector("#pauseBtn");
    }

    if(this.root.querySelector("#playBtn") instanceof HTMLElement) {
      this.play = this.root.querySelector("#playBtn");
    }

    if(this.root.querySelector("#closeBtn") instanceof HTMLElement) {
      this.close = this.root.querySelector("#closeBtn");
    }

    this.clickToPause();
    this.clickToPlay();

  } 

  clickToPause() {
    this.pause.addEventListener("click", () => {
      this.video.pause();
      this.pause.style.display = "none";
      this.play.style.display = "block";
    }, false)
  }

  clickToPlay() {
    this.play.addEventListener("click",() => {
      this.video.play();
      this.play.style.display = "none";
      this.pause.style.display = "block";
    }, false);
  }

}

export default Advideo;