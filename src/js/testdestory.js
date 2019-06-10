function recordPlay($audio) {
    this.$audio = $audio;
}

recordPlay.prototype = {
    init: function() {
        let _this = this;
        // let duration = _this.getDurationBackend();  // 默认展示后端传回的时间
        // let formatedDuration = isNaN(duration) ? '00:00:00' : _this.getFormatTime(duration);
        let formatedDuration = '00:00:00';
        let record_html = `
        <div class="record-play">
            <div class="play-control">
                <div class="play-bar">
                    <div class="buffered-bar">
                        <div class="played-bar paused">
                            <span class="played-flag"></span>
                        </div>
                    </div>

                </div>
            </div>
            
            <div class="play-duration">`+
                formatedDuration
            +`</div>
            <div class="vol-switch">
                <span class="icon icon-vol"></span>
            </div>
            <div class="vol-control">
                <div class="vol-bar">
                    <div class="curr-vol-bar">
                        <span class="vol-flag"></span>
                    </div>
                </div>
            </div>
        </div>
        `;
        this.$audio.innerHTML= record_html;
        _this.bindEvent(); 
    },
    bindEvent(){
        this.$audio.addEventListener('click',function(){
            console.error(123213123);
        })
    }
}
export default recordPlay;